const { RestaurantsService, FoodsService, MainingredientsService, MainingredientDetailsService, TablesService,  TypesOfPartyService, UserService, ManagersService, CommentsService } = require("../services/index.service")
const {FakeDataVietnamese} = require("../providers/fakedata");
const {CookieProvider} = require("../providers/cookie")
const { resolve } = require("path");
const { reject } = require("bluebird");
const { response } = require("express");
const cookies = new CookieProvider();

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
        res.render('index', {
            restaurantList: restaurantList,
            foodList: foodList,
            commentsList: commentsList
        });
    }
    //Ham show login
    async login(req, res){
        res.render('login')

    }
   
    async cart(req, res){
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
        };
        if(itemCart.food != null){
            carts.push(itemCart);

        }
        res.render('cart', {carts:carts, formatPrice:formatPrice});
    }
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
        res.redirect('/cart');

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
      
        res.redirect('/cart');
    }

    async updateCart(req, res){
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
        let food = req.body.foodID;
        let quantity = req.body.quantity;
        let itemCart = {
                food: food,
                quantity: quantity
        };
        if(cookies.getCookie("carts")){
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
        res.redirect('/cart');


    }

    //Ham xu ly
    async loginHandle(req, res){
        let userService = new UserService();
        let user = {
            username: req.body.username,
            password: req.body.password

        }
        let customer = await userService.selectOne(user);
        if(customer){
            if(customer.isAdmin){
                res.redirect('/admin')
            }else{
                res.redirect('/')
            }
        }else{
            res.render('login',{message: "Sai tên đăng nhập hoặc mật khẩu. Vui lòng đăng nhập lại!"});    
        }
      
    }

    async register(req, res){
        res.render('register')
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
        res.render('login', {message: "Bạn đã đăng ký thành công!"})
    }
    async restaurant(req, res){
        let id = req.params.id;
        let restaurantsService = new RestaurantsService();
        let restaurant = await restaurantsService.selectById(id);
        let foodsService = new FoodsService();
        let foodList = await foodsService.select({restaurant:restaurant});
        res.render('restaurants', {
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
        res.render('single_product', {
            food: food,
            mainingredientdetails: mainingredientdetails
        });

    }




    async test(req,res){
        let fakedata = new FakeDataVietnamese();
        let restaurantsService = new RestaurantsService();
        let foodsService = new FoodsService();
        let mainingredientDetailsService = new MainingredientDetailsService();
        let mainingredientsService = new MainingredientsService();
        let foods = await foodsService.selectAll();
        let mainingredients = await mainingredientsService.selectAll();
        // let tmps = [];
        // for(let food of foods){
        //     let indexOfMI = Math.floor((Math.random()*(mainingredients.length-1)));
        //     let numberMIOfMID = Math.floor((Math.random()*(5 -3))+3);
        //     let mainingredientsOfMID = mainingredients.slice(indexOfMI,indexOfMI+numberMIOfMID);
        //     let quantity = Math.floor((Math.random()*(15 -1))+1)*10;
        //     let unit = "mg";
        //     let tmp = {
        //         food: food,
        //         mainingredients: mainingredientsOfMID,
        //         quantity: quantity,
        //         unit: unit
        //     }
        //     tmps.push(tmp);
        // }
        // let tablesService = new TablesService();

        // let tble = [];
        // let tables = ['bàn tròn', 'bàn vuông', 'bàn hình chữ nhật'];
        // for(let table of tables){
        //     let tb = {
        //        name: table
        //     }
        //     tble.push(tb);
        // }
        // // await tablesService.create(tble)
        // res.json("sasd")

        // let typesofpartyService = new TypesOfPartyService();
        // let tp = [];
        // let types = ['tiệc cưới', 'tiệc sinh nhật', 'tiệc mừng thọ', 'tiệc trà', 'tiệc rượu', 'tiệc Buffet']
        // for(let type of types){
        //      let tb = {
        //         name: type
        //      }
        //      tp.push(tb);
        // }
        // await typesofpartyService.create(tp)
        // res.json("sasd")

        let managersService = new ManagersService();
        let userService = new UserService();
        let managers = await userService.selectAll();
        let restaurants = await restaurantsService.selectAll();
        let tmps = [];
        let arr = [];
        for(let restaurant of restaurants){
            // Math.floor(Math.random() * 100) + 1;
            // Math.random*(managers.length-1)
            let randomIndex = Math.floor((Math.random()*(managers.length-1)));
            while(arr.indexOf(randomIndex) != -1){
                randomIndex = Math.floor((Math.random()*(managers.length-1)));
            }
            arr.push(randomIndex);
             let tmp = {
                user: managers[randomIndex],
                restaurant: restaurant,
                expire_at: new Date(new Date().setDate(new Date().getDate() + Math.floor((Math.random()*(120-30)+30))))
             }
             tmps.push(tmp);
         }
        await managersService.create(tmps);
        res.json(tmps)


}
    


}
module.exports ={HomeController}