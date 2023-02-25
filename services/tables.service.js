const { TablesModel } = require("../models/index.model");
class  TablesService {
    constructor() {}
    async selectOne(tables) {
        try {
            const query = TablesModel.findOne(tables);
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async select(tables) {
        try {
            const query = TablesModel.find(tables);
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async selectAll() {
        try {
            const query = TablesModel.find();
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async create(tables) {
        try {
            await TablesModel.create(tables);
            return;
        } catch (err) {
            console.log(err);
        }
    }
    async updateOneById(tablesId,tables){
        try {
            const query = TablesModel.updateOne({ '_id': new ObjectId(tablesId), }, tables);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    
    async updateOne(filter,tables){
        try {
            const query = TablesModel.updateOne(filter, tables);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    async update(filter,tables){
        try {
            const query = TablesModel.updateMany(filter, tables);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    async deleteById(tablesId){
        try {
            const query = TablesModel.deleteOne({ '_id': new ObjectId(tablesId), }, tables);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    async deleteOne(filter){
        try {
            const query = TablesModel.deleteOne(filter, tables);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    
    async delete(filter){
        try {
            const query = TablesModel.deleteMany(filter, tables);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = { TablesService };
