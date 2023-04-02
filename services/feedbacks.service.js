const { FeedbacksModel } = require("../models/index.model");
class FeedbacksService {
    constructor() {}
    async selectOne(feedbacks) {
        feedbacks.$or = [{status : true},{status : null}];
        try {
            const query = FeedbacksModel.findOne(feedbacks);
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async select(feedbacks) {
        feedbacks.$or = [{status : true},{status : null}];
        try {
            const query = FeedbacksModel.find(feedbacks);
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async selectAll() {
        let feedbacks= {$or : [{status : true},{status : null}]};
        try {
            const query = FeedbacksModel.find();
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async create(feedbacks) {
        try {
            await FeedbacksModel.create(feedbacks);
            return;
        } catch (err) {
            console.log(err);
        }
    }
    async updateOneById(feedbacksId,feedbacks){
        const query =  FeedbacksModel.updateOne({ '_id': new ObjectId(feedbacksId), $or : [{status : true},{status : null}] }, feedbacks);
        try {
            const query = FeedbacksModel.updateOne({ '_id': new ObjectId(feedbacksId), }, feedbacks);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    
    async updateOne(filter,feedbacks){
        filter.$or = [{status : true},{status : null}];
        try {
            const query = FeedbacksModel.updateOne(filter, feedbacks);s
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    async update(filter,feedbacks){
        filter.$or = [{status : true},{status : null}];
        try {
            const query = FeedbacksModel.updateMany(filter, feedbacks);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    async deleteById(feedbacksId){
        try {
            const query = FeedbacksModel.deleteOne({ '_id': new ObjectId(feedbacksId), $or : [{status : true},{status : null}] }, feedbacks);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    async deleteOne(filter){
        filter.$or = [{status : true},{status : null}];
        try {
            const query = FeedbacksModel.deleteOne(filter, feedbacks);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    
    async delete(filter){
        filter.$or = [{status : true},{status : null}];
        try {
            const query = FeedbacksModel.deleteMany(filter, feedbacks);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = { FeedbacksService};
