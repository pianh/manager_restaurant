const { RestaurantsService, FoodsService, MainingredientsService, MainingredientDetailsService, TablesService,  TypesOfPartyService, UserService, ManagersService, CommentsService } = require("../services/index.service")
const {FakeDataVietnamese} = require("../providers/fakedata");
const {CookieProvider} = require("../providers/cookie")
const {checkHex} = require("../util/hex");
const { resolve } = require("path");
const { reject } = require("bluebird");
const { response } = require("express");
const cookies = new CookieProvider();


class AdminController{
    //Ham show trang chu admin
    async adminIndex(req, res){
        res.render('admin/adminIndex');
    }

    //

    //Ham show trang don hang
    async adminOrder(req, res){
        res.render('admin/order');
    }
    
}




module.exports ={AdminController}