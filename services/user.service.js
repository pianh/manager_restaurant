const { UserModel } = require("../models/index.model");
class UserService {
    constructor() {}
    async selectOne(user) {
        try {
            const query = UserModel.findOne(user);
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async select(user) {
        try {
            const query = UserModel.find(user);
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async selectAll() {
        try {
            const query = UserModel.find();
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async create(user) {
        try {
            await UserModel.create(user);
            return;
        } catch (err) {
            console.log(err);
        }
    }
    async updateOneById(userId,user){
        try {
            const query = UserModel.updateOne({ '_id': userId }, user);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    
    async updateOne(filter,user){
        try {
            const query = UserModel.updateOne(filter, user);s
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    async update(filter,user){
        try {
            const query = UserModel.updateMany(filter, user);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    async deleteById(userId){
        try {
            const query = UserModel.deleteOne({ '_id': new ObjectId(userId), }, user);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    async deleteOne(filter){
        try {
            const query = UserModel.deleteOne(filter, user);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    
    async delete(filter){
        try {
            const query = UserModel.deleteMany(filter, user);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = { UserService };
