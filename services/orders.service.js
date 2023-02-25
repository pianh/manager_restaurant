const { OrdersModel } = require("../models/index.model");
class  OrdersService {
    constructor() {}
    async selectOne(orders) {
        try {
            const query =  OrdersService .findOne(orders);
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async select(orders) {
        try {
            const query =  OrdersService .find(orders);
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async selectAll() {
        try {
            const query =  OrdersService .find();
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async create(orders) {
        try {
            await  OrdersService .create(orders);
            return;
        } catch (err) {
            console.log(err);
        }
    }
    async updateOneById(ordersId,orders){
        try {
            const query =  OrdersService .updateOne({ '_id': new ObjectId(ordersId), }, orders);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    
    async updateOne(filter,orders){
        try {
            const query =  OrdersService .updateOne(filter, orders);s
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    async update(filter,orders){
        try {
            const query =  OrdersService .updateMany(filter, orders);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    async deleteById(ordersId){
        try {
            const query =  OrdersService .deleteOne({ '_id': new ObjectId(ordersId), }, orders);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    async deleteOne(filter){
        try {
            const query =  OrdersService .deleteOne(filter, orders);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    
    async delete(filter){
        try {
            const query =  OrdersService .deleteMany(filter, orders);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = { OrdersService};
