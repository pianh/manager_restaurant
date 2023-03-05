const { FoodsModel } = require("../models/index.model");
class FoodsService {
    constructor() {}
    async selectOne(foods) {
        try {
            const query =  FoodsModel.findOne(foods);
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async select(foods) {
        try {
            const query =  FoodsModel.find(foods);
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async selectById(foods) {
        try {
            const query =  FoodsModel.findById(foods);
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }

    async selectAll() {
        try {
            const query =  FoodsModel.find();
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async create(foods) {
        try {
            await  FoodsModel.create(foods);
            return;
        } catch (err) {
            console.log(err);
        }
    }
    async updateOneById(foodsId,foods){
        try {
            const query =  FoodsModel.updateOne({ '_id': new ObjectId(foodsId), }, foods);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    
    async updateOne(filter,foods){
        try {
            const query =  FoodsModel.updateOne(filter, foods);s
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    async update(filter,foods){
        try {
            const query =  FoodsModel.updateMany(filter, foods);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    async deleteById(foodsId){
        try {
            const query =  FoodsModel.deleteOne({ '_id': new ObjectId(foodsId), }, foods);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    async deleteOne(filter){
        try {
            const query =  FoodsModel.deleteOne(filter, foods);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    
    async delete(filter){
        try {
            const query =  FoodsModel.deleteMany(filter, foods);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = { FoodsService };
