const { CommentsModel } = require("../models/index.model");
class CommentsService {
    constructor() {}
    async selectOne(comments) {
        comments.$or = [{status : true},{status : null}];
        try {
            const query = CommentsModel.findOne(comments);
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async select(comments) {
        comments.$or = [{status : true},{status : null}];
        try {
            const query = CommentsModel.find(comments);
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async selectAll() {
        let comments= {$or : [{status : true},{status : null}]};
        try {
            const query = CommentsModel.find();
            return await query.exec();
        } catch (err) {
            console.log(err);
        }
    }
    async create(comments) {
        try {
            await CommentsModel.create(comments);
            return;
        } catch (err) {
            console.log(err);
        }
    }
    async updateOneById(commentsId,comments){
        const query =  CommentsModel.updateOne({ '_id': new ObjectId(commentsId), $or : [{status : true},{status : null}] }, comments);
        try {
            const query = CommentsModel.updateOne({ '_id': new ObjectId(commentsId), }, comments);
            await query.exec();
            return;
        } catch (err) {
            console.log(err);
        }
    }
    
    async updateOne(filter,comments){
        filter.$or = [{status : true},{status : null}];
        try {
            const query = CommentsModel.updateOne(filter,comments);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    async update(filter,comments){
        filter.$or = [{status : true},{status : null}];
        try {
            const query = CommentsModel.updateMany(filter, comments);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    async deleteById(commentsId){
        try {
            const query =  CommentsModel.deleteOne({ '_id': new ObjectId(commentsId), $or : [{status : true},{status : null}] }, comments);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    async deleteOne(filter){
        try {
            const query = CommentsModel.deleteOne(filter, comments);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
    
    async delete(filter){
        try {
            const query = CommentsModel.deleteMany(filter, comments);
            await query.exec();
            return ;
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = { CommentsService };
