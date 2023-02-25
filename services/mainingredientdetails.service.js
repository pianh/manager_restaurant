const { MainingredientDetailsModel } = require("../models/index.model");
class  MainingredientDetailsService {
    constructor() {}
    async selectOne(mainingredientdetails) {
        try {
            const query = MainingredientDetailsModel.findOne(mainingredientdetails);
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async select(mainingredientdetails) {
        try {
            const query = MainingredientDetailsModel.find(mainingredientdetails);
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async selectAll() {
        try {
            const query = MainingredientDetailsModel.find();
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async create(mainingredientdetails) {
        try {
            await MainingredientDetailsModel.create(mainingredientdetails);
            return;
        } catch (err) {
            console.log(err);
        }
    }
    async updateOneById(mainingredientdetailsId,mainingredientdetails){
        try {
            const query = MainingredientDetailsModel.updateOne({ '_id': new ObjectId(mainingredientdetailsId), },mainingredientdetails);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    
    async updateOne(filter,mainingredientdetails){
        try {
            const query = MainingredientDetailsModel.updateOne(filter,mainingredientdetails);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    async update(filter,mainingredientdetails){
        try {
            const query = MainingredientDetailsModel.updateMany(filter,mainingredientdetails);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    async deleteById(mainingredientdetailsId){
        try {
            const query = MainingredientDetailsModel.deleteOne({ '_id': new ObjectId(billsId), },mainingredientdetails);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    async deleteOne(filter){
        try {
            const query = MainingredientDetailsModel.deleteOne(filter,mainingredientdetails);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    
    async delete(filter){
        try {
            const query = MainingredientDetailsModel.deleteMany(filter,mainingredientdetails);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = {MainingredientDetailsService};
