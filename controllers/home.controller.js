const { RestaurantsService, FoodsService, MainingredientsService, MainingredientDetailsService, TablesService,  TypesOfPartyService, UserService, ManagersService, CommentsService } = require("../services/index.service")
const {FakeDataVietnamese} = require("../providers/fakedata");
const { resolve } = require("path");
const { reject } = require("bluebird");
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
    async mainingredientdetails(req, res){
        let id = req.params.id;
        let mainingredientdetailsService = new MainingredientDetailsService();
        let foodsService = new FoodsService();
        let foodList = await foodsService.select({restaurant:restaurant});
        res.render('single_product', {
            foodList: foodList
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