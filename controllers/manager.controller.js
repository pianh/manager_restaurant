const { RestaurantsService, FoodsService, MainingredientsService, MainingredientDetailsService, TablesService,  TypesOfPartyService, UserService, ManagersService, CommentsService } = require("../services/index.service")
const {FakeDataVietnamese} = require("../providers/fakedata");
const {CookieProvider} = require("../providers/cookie")
const { resolve } = require("path");
const { reject } = require("bluebird");
const { response } = require("express");
const {checkHex} = require("../util/hex");
const cookies = new CookieProvider();

/*
Nó liên quan ts url. Dùng param khi route mk định nghĩa ntn.
Ví dụ route định nghĩa như home/:restaurantid. Thì khi đó url như là https://domain/home/123 thì req.params.restaurantid lấy dc cái restaurantid.
Ví dụ url bà chỉ định nghĩa home/. Mà url có dạng ntn. https://domain/home?id=123&&name=abc. Lúc này req.query.id nó lấy ra cái id, req.query.name nó lấy ra cái name

Dùng params hay query đều phụ thuộc vô url
Ở cả 2 hàm

Thì thêm đoạn if kia vô

Mục đích là gì. Là để kiểm tra cái id đó có hợp lệ k. Kiểu nếu params nó là cái app todo.html kia ấy. Có sẽ check và trả ra false và k làm j nữa mà trả về user not found.

Còn vượt qua if thì nó thực hiện query và làm vc tiếp theo
*/

class ManagermentController{
    //Ham show trang quan ly
    async managermentIndex(req, res){
        // doan nay nhận param từ url
        // lấy được cái id = 
        // xong pass nó vô UI
        res.render('manager/managermentIndex',{
            id: req.params.restaurantId,
        }); 
    }


    //Ham show trang mon an
    async managermentFood(req, res){
        let restaurantId = req.params.restaurantId;
        let restaurantsService = new RestaurantsService();
        let restaurant = await restaurantsService.selectById(restaurantId);
        console.log(restaurant);
        // if(!restaurant){
        //     res.send("NOT FOUND");
        //    //Có thể render views kiểu err 404 thay vì chỉ send chuỗi về cho user
        //    return;
        // }
        // else{
            let foodsService = new FoodsService();
            let foods = await foodsService.select({
                restaurant : restaurant
            });
            res.render('manager/food', {foods:foods,id: req.params.restaurantId}); 
        // }
       
        
    }

    // Ham show trang don hang
    async managermentOrder(req, res){
        // let restaurantId = req.params.restaurantId;
        // let restaurantsService = new RestaurantsService();
        // let restaurant = await restaurantsService.selectById(restaurantId);
        // console.log(req.params.restaurantId);
        res.render('manager/order',{
            id: req.params.restaurantId,
        }); 
       
    }

    
    //Ham show trang don hang
    // async managermentOrder(req, res){
    //     res.render('manager/order');
    // }

    //Ham show trang them mon an
    async managermentAddFood(req, res){
        res.render('manager/food',{
            id: req.params.restaurantId,
        }); 
    }

    //Ham show sua mon an
    async managermentEditFood(req, res){
        let id = req.params.id;
        let foodsService = new FoodsService();
        let food = await foodsService.selectById(id);
        res.render('manager/edit_Food',{
            food : food
        });
    }
    


    async editFoodHandlle(req, res){
        let id = req.params.id;
        let filesUpload = req.files;
        let files = [];
        filesUpload.forEach((element)=>{
            files.push(element.toString("base64"));
        })
        try {
        let food = {
            name :req.body.name,
            price: req.body.price,
            image_url: files
        }
        let foodsService = new FoodsService();
        await foodsService.updateOneById(id,food);
        res.redirect("/manager/food");
    } catch (r){
        let foodsService = new FoodsService();
        let food = await foodsService.selectById(id);
        res.render('manager/edit_Food',{
            food : food,
            error : "m dang bi loi"
        });
    }
        
    }

    async removeFoodHandle(req, res){
        let id = req.params.id;
        let food = {
            status : false
        }        
        let foodsService = new FoodsService();
        await foodsService.updateOneById(id,food);
        res.redirect("/manager/food");
    
}


    //Ham show chi tiet thanh phan
    async managermentIngredientList(req, res){
        let  mainingredientsService = new  MainingredientsService();
        let mainingredients = await mainingredientsService.selectAll();
        res.render('manager/ingredientList',{
            mainingredients: mainingredients,
            id:req.params.restaurantId
        });

    }

    //Ham them chi tiet
    async managermentAddIngredientList(req, res){
        res.render('manager/addingredientList',{
            id: req.params.restaurantId,
        }); 
    }

    //Ham show bua tiec
    async managermentTypeOfpartyList(req, res){
        res.render('manager/typeOfpartyList',{
            id: req.params.restaurantId,
        }); 

    }

    //Ham them bua tiec
    async managermentAddParty(req, res){

        res.render('manager/addParty');
    }
    //Ham show ban
    async managermentTable(req, res){
        res.render('manager/tableList',{
            id: req.params.restaurantId,
        }); 
    }
    
    //Ham them ban
    async managermentAddTable(req, res){
        res.render('manager/addParty');
    }

    //Ham show khach hang
    async managermentCustomer(req, res){
        res.render('manager/customerList',{
            id: req.params.restaurantId,
        }); 
    }
    
    //Ham sua thanh phan
    async managermentEditIngredientList(req, res){
        res.render('manager/edit_IngredientList',{
            id: req.params.restaurantId,
        }); 
    }

    //Ham sua bua tiec
    async managermentEditParty(req, res){
        res.render('manager/edit_Party',{
            id: req.params.restaurantId,
        }); 
       
    }
    
    //Ham sua ban
    async managermentEditTable(req, res){
        res.render('manager/edit_Table',{
            id: req.params.restaurantId,
        });
    }

    //ham dat ban
    async managermentReserveTable(req, res){
        res.render('manager/reserveTable',{
            id:req.params.restaurantId,
        }); 
    }
    
}



module.exports ={ManagermentController}