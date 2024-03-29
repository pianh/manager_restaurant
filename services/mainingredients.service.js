const { MainingredientsModel } = require("../models/index.model");
class MainingredientsService {
    constructor() {}
    async selectOne(mainingredients) {
        mainingredients.$or = [{status : true},{status : null}];
        try {
            const query = MainingredientsModel.findOne(mainingredients);
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async select(mainingredients) {
        mainingredients.$or = [{status : true},{status : null}];
        try {
            const query = MainingredientsModel.find(mainingredients);
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async selectAll() {
        let mainingredients = {$or : [{status : true},{status : null}]};
        try {
            const query = MainingredientsModel.find();
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async create(mainingredients) {
        try {
            await MainingredientsModel.create(mainingredients);
            return;
        } catch (err) {
            console.log(err);
        }
    }
    async updateOneById(mainingredientsId,mainingredients){
        const query =  MainingredientsModel.updateOne({ '_id': new ObjectId(mainingredientsId), $or : [{status : true},{status : null}] }, mainingredients);
        try {
            const query = MainingredientsModel.updateOne({ '_id': new ObjectId(mainingredientsId), }, mainingredients);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    
    async updateOne(filter,mainingredients){
        filter.$or = [{status : true},{status : null}];
        try {
            const query = MainingredientsModel.updateOne(filter, mainingredients);s
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    async update(filter,mainingredients){
        filter.$or = [{status : true},{status : null}];
        try {
            const query = MainingredientsModel.updateMany(filter, mainingredients);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    async deleteById(mainingredientsId){
        try {
            const query =  MainingredientsModel.deleteOne({ '_id': new ObjectId(mainingredientsId), $or : [{status : true},{status : null}] }, mainingredientsId);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    async deleteOne(filter){
        filter.$or = [{status : true},{status : null}];
        try {
            const query = MainingredientsModel.deleteOne(filter, mainingredients);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    
    async delete(filter){
        filter.$or = [{status : true},{status : null}];
        try {
            const query = MainingredientsModel.deleteMany(filter, mainingredients);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = { MainingredientsService };
