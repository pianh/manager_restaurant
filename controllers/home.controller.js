const { RestaurantsService, FoodsService, MainingredientsService, MainingredientDetailsService, TablesService,  TypesOfPartyService, UserService, ManagersService, CommentsService } = require("../services/index.service")
const {FakeDataVietnamese} = require("../providers/fakedata");
const {CookieProvider} = require("../providers/cookie")
const { resolve } = require("path");
const { reject } = require("bluebird");
const { response } = require("express");
const {checkHex} = require("../util/hex");
const cookies = new CookieProvider();

const fs = require("fs");
const path = require("path");

const formatPrice = function (price) {
    price = price.toString().replace(/[^\d]/g, "");
    return price.length > 0
        ? new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(price)
        : "";
};


class HomeController{
    constructor(){}
    async index(req,res){
        let restaurantsService = new RestaurantsService();
        let restaurantList = await restaurantsService.selectAll();
        let foodsService = new FoodsService();
        let foodList = await foodsService.select({restaurant:restaurantList[0]});
        let commentsService = new CommentsService();
        let commentsList = await commentsService.selectAll();
        res.render('home/index', {
            restaurantList: restaurantList,
            foodList: foodList,
            commentsList: commentsList
        });
    }
    //Ham show login
    async login(req, res){
        res.render('home/login')

    }

    async myaccount(req, res){
        res.render('home/myaccount');
    }
   
    async cart(req, res){
        const cookies = new CookieProvider();
        cookies.setParamater(req, res);
        let bString = cookies.getCookie("carts");
        let b = [];
        if(bString != undefined){
            b = JSON.parse(bString);
        }
        let carts = [];
        let foodsService = new FoodsService();
        for(let item of b){
            let itemCart = {
                food: await foodsService.selectById(item.food),
                quantity: item.quantity
            }
            if(itemCart.food != null){
                carts.push(itemCart);
    
            }
        }
        res.render('home/cart', {carts:carts, formatPrice:formatPrice});
    
    }

    async addCart(req, res){
        cookies.setParamater(req, res);
        let food = req.body.foodID;
        let quantity = req.body.quantity;
        let itemCart = {
                food: food,
                quantity: quantity
        };
        if(cookies.getCookie("carts") != undefined){
            let bString = cookies.getCookie("carts");
            let b = JSON.parse(bString);
            b.push(itemCart);
            bString = JSON.stringify(b);
            cookies.setCookie("carts", bString, 24);
        }
        else{
            let a = [];
            a.push(itemCart);
            let aString = JSON.stringify(a);
            cookies.setCookie("carts", aString, 24);
        }
        res.redirect('/home/cart');

    }

    async removeCart(req, res){
        cookies.setParamater(req, res);
        if(cookies.getCookie("carts")){
            let bString = cookies.getCookie("carts");
            let b = JSON.parse(bString);
            let food = req.body.foodID;
            let bFood = b.map(x=>x.food);
            let indexOfFoodInFoodArray = bFood.indexOf(food);
            if(indexOfFoodInFoodArray != -1){
                b.splice(indexOfFoodInFoodArray, 1);
                bString = JSON.stringify(b);
                cookies.setCookie("carts", bString, 24);
            }
            
        }
      
        res.redirect('/home/cart');
    }
    async clearAllCart(req, res){
        cookies.setParamater(req, res); 
        cookies.clearCookie("carts");
        res.redirect('/home/cart');
    }

    async updateCart(req, res){
        cookies.setParamater(req, res); 
            let bString = cookies.getCookie("carts");
            if(bString != undefined){
                let b = JSON.parse(bString);
                let food = req.body.foodID;
                let bFood = b.map(x=>x.food);
                let indexOfFoodInFoodArray = bFood.indexOf(food);
                if(indexOfFoodInFoodArray != -1){
                    b.splice(indexOfFoodInFoodArray, 1);
                    let food = req.body.foodID;
                    let quantity = req.body.quantity;
                    let itemCart = {
                            food: food,
                            quantity: quantity
                    };
                    b.push(itemCart);
                    bString = JSON.stringify(b);
                    cookies.setCookie("carts", bString, 24);
                }
            }
            
        res.redirect('/home/cart');


    }

    async checkOut(req, res){
       res.render('home/checkout'); 
    }

    //Ham xu ly
    async loginHandle(req, res){
        let userService = new UserService();
        let managersService = new ManagersService();
        let user = {
            username: req.body.username,
            password: req.body.password

        }
        let customer = await userService.selectOne(user);
        console.log(customer);
        if(customer){
            if(customer.isAdmin){
                res.redirect('/admin')
            }else{
                let manager = await managersService.selectOne({user:customer});
                // console.log(manager);
                if(manager){
                    res.redirect('/manager/'+manager.restaurant._id)
                } else {
                    res.redirect('/')
                }
            }
        }else{
            res.render('home/login',{message: "Sai tên đăng nhập hoặc mật khẩu. Vui lòng đăng nhập lại!"});    
        }
      
    }

    async register(req, res){
        res.render('home/register')
    }

    async registerHandle(req, res){
        let userService = new UserService();
        let user = {
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }
        let customer = await userService.create(user);
        res.render('home/login', {message: "Bạn đã đăng ký thành công!"})
    }
    async restaurant(req, res){
        let id = req.params.id;
        if(req.params.id && checkHex(req.params.id)){
            res.send('NOT FOUND!!')
            return
        }
        let restaurantsService = new RestaurantsService();
        let restaurant = await restaurantsService.selectById(id);
        let foodsService = new FoodsService();
        let foodList = await foodsService.select({restaurant:restaurant});
        res.render('home/restaurants', {
            restaurant: restaurant,
            foodList: foodList
        });
    }

    async detailFood(req, res){
        let id = req.params.id;
        let mainingredientdetailsService = new MainingredientDetailsService();
        let foodsService = new FoodsService();
        let food = await foodsService.selectById(id);
        let mainingredientdetails = await mainingredientdetailsService.selectOne({food:food});
        // console.log(food)
        res.render('home/single_product', {
            food: food,
            mainingredientdetails: mainingredientdetails
        });

    }




    async test(req,res){
        let fakedata = new FakeDataVietnamese();
        let restaurantsService = new RestaurantsService();
        
        res.json("a")


}

}
module.exports ={HomeController}