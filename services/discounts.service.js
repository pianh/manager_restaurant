const { DiscountsModel } = require("../models/index.model");
class DiscountsService {
    constructor() {}
    async selectOne(discounts) {
        try {
            const query = DiscountsModel.findOne(discounts);
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async select(discounts) {
        try {
            const query = DiscountsModel.find(discounts);
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async selectAll() {
        try {
            const query = DiscountsModel.find();
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async create(discounts) {
        try {
            await DiscountsModel.create(discounts);
            return;
        } catch (err) {
            console.log(err);
        }
    }
    async updateOneById(discountsId,discounts){
        try {
            const query = DiscountsModel.updateOne({ '_id': new ObjectId(discountsId), }, discounts);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    
    async updateOne(filter,discounts){
        try {
            const query = DiscountsModel.updateOne(filter, discounts);s
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    async update(filter,discounts){
        try {
            const query = DiscountsModel.updateMany(filter, discounts);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    async deleteById(discountsId){
        try {
            const query = DiscountsModel.deleteOne({ '_id': new ObjectId(discountsId), }, discounts);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    async deleteOne(filter){
        try {
            const query =DiscountsModel.deleteOne(filter, discounts);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    
    async delete(filter){
        try {
            const query = DiscountsModel.deleteMany(filter, discounts);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = { DiscountsService };
