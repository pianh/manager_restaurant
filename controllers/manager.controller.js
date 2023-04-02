const { RestaurantsService, FoodsService, MainingredientsService, MainingredientDetailsService, TablesService,  TypesOfPartyService, UserService, ManagersService, CommentsService } = require("../services/index.service")
const {FakeDataVietnamese} = require("../providers/fakedata");
const {CookieProvider} = require("../providers/cookie")
const { resolve } = require("path");
const { reject } = require("bluebird");
const { response } = require("express");
const cookies = new CookieProvider();


class ManagermentController{
    //Ham show trang quan ly
    async managermentIndex(req, res){
        res.render('manager/managermentIndex');
    }

    

    //Ham show trang don hang
    async managermentOrder(req, res){
        res.render('manager/order');
    }

    //Ham show trang mon an
    async managermentFood(req, res){
        let restaurantId = req.params.restaurantId;
        let restaurantsService = new RestaurantsService();
        let restaurant = await restaurantsService.selectById(restaurantId);
        let foodsService = new FoodsService();
        let foods = await foodsService.select({
            restaurant : restaurant
        });
        res.render('manager/food', {foods:foods})
    }

    //Ham show trang them mon an
    async managermentAddFood(req, res){
        res.render('manager/addFood');
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
            mainingredients: mainingredients
        });
    }

    //Ham them chi tiet
    async managermentAddIngredientList(req, res){
        res.render('manager/addingredientList');
    }

    //Ham show bua tiec
    async managermentTypeOfpartyList(req, res){
        res.render('manager/typeOfpartyList');
    }

    //Ham them bua tiec
    async managermentAddParty(req, res){

        res.render('manager/addParty');
    }
    //Ham show ban
    async managermentTable(req, res){
        res.render('manager/tableList');
    }
    
    //Ham them ban
    async managermentAddTable(req, res){
        res.render('manager/addParty');
    }

    //Ham show khach hang
    async managermentCustomer(req, res){
        res.render('manager/customerList');
    }
    
    //Ham sua thanh phan
    async managermentEditIngredientList(req, res){
        res.render('manager/edit_IngredientList');
    }

    //Ham sua bua tiec
    async managermentEditParty(req, res){
        res.render('manager/edit_Party');
    }
    
    //Ham sua ban
    async managermentEditTable(req, res){
        res.render('manager/edit_Table');
    }

    
}



module.exports ={ManagermentController}