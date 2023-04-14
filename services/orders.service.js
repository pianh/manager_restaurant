const { OrdersModel } = require("../models/index.model");
class  OrdersService {
    constructor() {}
    async selectOne(orders) {
        orders.$or = [{status : true},{status : null}];
        try {
            const query =  OrdersModel.findOne(orders);
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async select(orders) {
        orders.$or = [{status : true},{status : null}];
        try {
            const query =  OrdersModel.find(orders);
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async selectAll() {
        let orders = {$or : [{status : true},{status : null}]};
        try {
            const query =  OrdersModel.find();
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async create(orders) {
        try {
            await OrdersModel.create(orders);
            return;
        } catch (err) {
            console.log(err);
        }
    }
    async updateOneById(ordersId,orders){
        try {
            const query =  OrdersModel.updateOne({ '_id': new ObjectId(ordersId), $or : [{status : true},{status : null}] }, orders);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    
    async updateOne(filter,orders){
        filter.$or = [{status : true},{status : null}];
        try {
            const query =  OrdersModel.updateOne(filter, orders);s
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    async update(filter,orders){
        filter.$or = [{status : true},{status : null}];
        try {
            const query =  OrdersModel.updateMany(filter, orders);
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
            const query =  OrdersModel.deleteOne(filter, orders);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    
    async delete(filter){
        filter.$or = [{status : true},{status : null}];
        try {
            const query =  OrdersModel.deleteMany(filter, orders);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = { OrdersService};
