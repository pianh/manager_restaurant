const { TicketsModel } = require("../models/index.model");
class TicketsService {
    constructor() {}
    async selectOne(tickets) {
        try {
            const query = TicketsModel.findOne(tickets);
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async select(tickets) {
        try {
            const query = TicketsModel.find(tickets);
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async selectAll() {
        try {
            const query = TicketsModel.find();
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async selectById(id) {
        try {
            const query = TicketsModel.findById(id);
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async create(tickets) {
        try {
            return await TicketsModel.create(tickets);
        } catch (err) {
            console.log(err);
        }
    }
    async updateOneById(ticketsId,tickets){
        try {
            const query = TicketsModel.updateOne({ _id: ticketsId }, tickets);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    
    async updateOne(filter,tickets){
        try {
            const query = TicketsModel.updateOne(filter, tickets);s
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    async update(filter,tickets){
        try {
            const query = TicketsModel.updateMany(filter, tickets);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    async deleteById(ticketsId){
        try {
            const query = TicketsModel.deleteOne({ '_id': new ObjectId(ticketsId), }, tickets);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    async deleteOne(filter){
        try {
            const query = TicketsModel.deleteOne(filter, tickets);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    
    async delete(filter){
        try {
            const query = TicketsModel.deleteMany(filter, tickets);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = { TicketsService };
