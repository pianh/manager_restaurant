const { OrdersModel } = require("../models/index.model");
class  OrdersService {
    constructor() {}
    async selectOne(orders) {
        orders.$or = [{status : true},{status : null}];
        try {
            const query =  OrdersService .findOne(orders);
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async select(orders) {
        orders.$or = [{status : true},{status : null}];
        try {
            const query =  OrdersService .find(orders);
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async selectAll() {
        let orders = {$or : [{status : true},{status : null}]};
        try {
            const query =  OrdersService .find();
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async create(orders) {
        try {
            await OrdersService.create(orders);
            return;
        } catch (err) {
            console.log(err);
        }
    }
    async updateOneById(ordersId,orders){
        try {
            const query =  OrdersService.updateOne({ '_id': new ObjectId(ordersId), $or : [{status : true},{status : null}] }, orders);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    
    async updateOne(filter,orders){
        filter.$or = [{status : true},{status : null}];
        try {
            const query =  OrdersService.updateOne(filter, orders);s
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    async update(filter,orders){
        filter.$or = [{status : true},{status : null}];
        try {
            const query =  OrdersService.updateMany(filter, orders);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    async deleteById(ordersId){
        try {
            const query =  OrdersModel.deleteOne({ '_id': new ObjectId(ordersId), $or : [{status : true},{status : null}] }, ordersId);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    async deleteOne(filter){
        filter.$or = [{status : true},{status : null}];
        try {
            const query =  OrdersService.deleteOne(filter, orders);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    
    async delete(filter){
        filter.$or = [{status : true},{status : null}];
        try {
            const query =  OrdersService.deleteMany(filter, orders);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = { OrdersService};
