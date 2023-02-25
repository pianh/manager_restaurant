const { ManagerModel } = require("../models/index.model");
class ManagersService {
    constructor() {}
    async selectOne(managers) {
        try {
            const query =  ManagerModel.findOne(managers);
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async select(managers) {
        try {
            const query =  ManagerModel.find(managers);
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async selectAll() {
        try {
            const query =  ManagerModel.find();
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async create(managers) {
        try {
            await  ManagerModel.create(managers);
            return;
        } catch (err) {
            console.log(err);
        }
    }
    async updateOneById(managersId,managers){
        try {
            const query =  ManagerModel.updateOne({ '_id': new ObjectId(managersId), }, managers);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    
    async updateOne(filter,managers){
        try {
            const query =  ManagerModel.updateOne(filter, managers);s
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    async update(filter,managers){
        try {
            const query =  ManagerModel.updateMany(filter, managers);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    async deleteById(managersId){
        try {
            const query =  ManagerModel.deleteOne({ '_id': new ObjectId(managersId), }, managers);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    async deleteOne(filter){
        try {
            const query =  ManagerModel.deleteOne(filter, managers);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    
    async delete(filter){
        try {
            const query =  ManagerModel.deleteMany(filter, managers);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = {ManagersService};
