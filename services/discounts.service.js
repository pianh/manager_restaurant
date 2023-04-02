const { DiscountsModel } = require("../models/index.model");
class DiscountsService {
    constructor() {}
    async selectOne(discounts) {
        discounts.$or = [{status : true},{status : null}];
        try {
            const query = DiscountsModel.findOne(discounts);
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async select(discounts) {
        discounts.$or = [{status : true},{status : null}];
        try {
            const query = DiscountsModel.find(discounts);
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async selectAll() {
        let discounts= {$or : [{status : true},{status : null}]};
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
        const query =  DiscountsModel.updateOne({ '_id': new ObjectId(discountsId), $or : [{status : true},{status : null}] }, discounts);
        try {
            const query = DiscountsModel.updateOne({ '_id': new ObjectId(discountsId), }, discounts);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    
    async updateOne(filter,discounts){
        filter.$or = [{status : true},{status : null}];
        try {
            const query = DiscountsModel.updateOne(filter, discounts);s
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    async update(filter,discounts){
        filter.$or = [{status : true},{status : null}];
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
            const query =  DiscountsModel.deleteOne({ '_id': new ObjectId(discountsId), $or : [{status : true},{status : null}] }, discounts);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    async deleteOne(filter){
        filter.$or = [{status : true},{status : null}];
        try {
            const query =DiscountsModel.deleteOne(filter, discounts);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    
    async delete(filter){
        filter.$or = [{status : true},{status : null}];
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
