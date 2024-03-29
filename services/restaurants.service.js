const { RestaurantsModel } = require("../models/index.model");
class RestaurantsService {
    constructor() {}
    async selectOne(restaurants) {
        restaurants.$or = [{status : true},{status : null}];
        try {
            const query = RestaurantsModel.findOne(restaurants);
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async selectById(id) {
        try {
            const query = RestaurantsModel.findById(id);
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async select(restaurants) {
        restaurants.$or = [{status : true},{status : null}];
        try {
            const query = RestaurantsModel.find(restaurants);
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async selectAll() {
        let restaurants = {$or : [{status : true},{status : null}]};
        try {
            const query = RestaurantsModel.find();
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async create(restaurants) {
        try {
            await RestaurantsModel.create(restaurants);
            return;
        } catch (err) {
            console.log(err);
        }
    }
    async updateOneById(restaurantsId,restaurants){
        try {
            const query =  RestaurantsModel.updateOne({ '_id': new ObjectId(restaurantsId), $or : [{status : true},{status : null}]}, restaurants);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    
    async updateOne(filter,restaurants){
        try {
            const query = RestaurantsModel.updateOne(filter, restaurants);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    async update(filter,restaurants){
        filter.$or = [{status : true},{status : null}];
        try {
            const query = RestaurantsModel.updateMany(filter, restaurants);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    async deleteById(restaurantsId){
        try {
            const query =  RestaurantsModel.deleteOne({ '_id': new ObjectId(restaurantsId), $or : [{status : true},{status : null}] }, restaurants);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    async deleteOne(filter){
        filter.$or = [{status : true},{status : null}];
        try {
            const query = RestaurantsModel.deleteOne(filter, restaurants);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    
    async delete(filter){
        filter.$or = [{status : true},{status : null}];
        try {
            const query = RestaurantsModel.deleteMany(filter, restaurants);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = {RestaurantsService};
