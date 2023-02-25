const { TypesOfPartyModel } = require("../models/index.model");
class  TypesOfPartyService {
    constructor() {}
    async selectOne(typesofparty) {
        try {
            const query =  TypesOfPartyModel.findOne(typesofparty);
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async select(typesofparty) {
        try {
            const query =  TypesOfPartyModel.find(typesofparty);
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async selectAll() {
        try {
            const query =  TypesOfPartyModel.find();
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async create(typesofparty) {
        try {
            await  TypesOfPartyModel.create(typesofparty);
            return;
        } catch (err) {
            console.log(err);
        }
    }
    async updateOneById(typesofpartyId,typesofparty){
        try {
            const query =  TypesOfPartyModel.updateOne({ '_id': new ObjectId(typesofpartyId), }, typesofparty);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    
    async updateOne(filter,typesofparty){
        try {
            const query =  TypesOfPartyModel.updateOne(filter, typesofparty);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    async update(filter,typesofparty){
        try {
            const query =  TypesOfPartyModel.updateMany(filter, typesofparty);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    async deleteById(typesofpartyId){
        try {
            const query =  TypesOfPartyModel.deleteOne({ '_id': new ObjectId(typesofpartyId), }, typesofparty);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    async deleteOne(filter){
        try {
            const query =  TypesOfPartyModel.deleteOne(filter, typesofparty);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    
    async delete(filter){
        try {
            const query =  TypesOfPartyModel.deleteMany(filter, typesofparty);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = { TypesOfPartyService };
