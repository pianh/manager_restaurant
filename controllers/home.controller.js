const { RestaurantsService, FoodsService, MainingredientsService, MainingredientDetailsService, TablesService,  TypesOfPartyService, UserService, ManagersService } = require("../services/index.service")
const {FakeDataVietnamese} = require("../providers/fakedata");
const { resolve } = require("path");
const { reject } = require("bluebird");
class HomeController{
    constructor(){}
    async index(req,res){
        res.json("á");
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
        let tmps = [];
        for(let manager of managers){
             let tmp = {
                user: manager,
                
             }
             tmps.push(tmp);
         }


}
    


}
module.exports ={HomeController}