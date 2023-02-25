const { BillsModel } = require("../models/index.model");
class BillsService {
    constructor() {}
    async selectOne(bills) {
        try {
            const query = BillsModel.findOne(bills);
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async select(bills) {
        try {
            const query = BillsModel.find(bills);
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async selectAll() {
        try {
            const query = BillsModel.find();
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async create(bills) {
        try {
            await BillsModel.create(bills);
            return;
        } catch (err) {
            console.log(err);
        }
    }
    async updateOneById(billsId,bills){
        try {
            const query = BillsModel.updateOne({ '_id': new ObjectId(billsId), }, bills);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    
    async updateOne(filter,bills){
        try {
            const query = BillsModel.updateOne(filter, bills);s
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    async update(filter,bills){
        try {
            const query = BillsModel.updateMany(filter, bills);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    async deleteById(billsId){
        try {
            const query = BillsModel.deleteOne({ '_id': new ObjectId(billsId), }, bills);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    async deleteOne(filter){
        try {
            const query = BillsModel.deleteOne(filter, bills);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    
    async delete(filter){
        try {
            const query = BillsModel.deleteMany(filter, bills);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = { BillsService };
