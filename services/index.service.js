const { UserService } = require("./user.service");
const { CommentsService } = require("./comments.service");
const { DiscountsService } = require("./discounts.service");
const { FeedbacksService } = require("./feedbacks.service");
const { MainingredientDetailsService } = require("./mainingredientdetails.service");
const { MainingredientsService } = require("./mainingredients.service");
const { OrdersService } = require("./orders.service");
const { TablesService } = require("./tables.service");
const { TicketsService } = require("./tickets.service");
const { TypesOfPartyService } = require("./typesofparty.service");
const { BillsService } = require("./bills.service");
const { FoodsService } = require("./foods.service");


const { RestaurantsService } = require("./restaurants.service");
const { ManagersService } = require("./managers.service");

module.exports = {
    UserService,
    CommentsService,
    DiscountsService,
    FeedbacksService,
    MainingredientDetailsService,
    MainingredientsService,
    OrdersService,
    TablesService,
    TicketsService,
    TypesOfPartyService,
    BillsService,
    FoodsService,
    RestaurantsService,
    ManagersService
};
