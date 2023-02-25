const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TutorModelSchema = new Schema(
    {
        user: {
            _id: { type: Schema.Types.ObjectId, required: true },
            name: { type: String, trim: true, required: true },
            username: { type: String, trim: true, unique: true, required: true },
            password: { type: String, trim: true, required: true },
            email: { type: String, trim: true, required: true },
            isAdmin: { type: Boolean, default: false },
        },
        namme: { type: String, trim: true, required: true },
        phone: { type: String, trim: true, required: true },
        birthday: { type: Date, required: true },
        gender: { type: String, trim: true, required: true },
        teachingForm: {
            _id: { type: Schema.Types.ObjectId, required: true },
            teachingForm: { type: String, trim: true, required: true },
        },
        tutorQualifications: {
            _id: { type: Schema.Types.ObjectId, required: true },
            level: { type: String, trim: true, required: true },
        },
        anotherCertification: { type: String, trim: true, required: true },
        address: {
            city: {
                name: { type: String, trim: true, required: true },
                slug: { type: String, trim: true, required: true },
                type: { type: String, trim: true, required: true },
                name_with_type: { type: String, trim: true, required: true },
                code: { type: String, trim: true, required: true },
            },
            district: {
                name: { type: String, trim: true, required: true },
                type: { type: String, trim: true, required: true },
                slug: { type: String, trim: true, required: true },
                name_with_type: { type: String, trim: true, required: true },
                path: { type: String, trim: true, required: true },
                path_with_type: { type: String, trim: true, required: true },
                code: { type: String, trim: true, required: true },
                parent_code: { type: String, trim: true, required: true },
            },
            ward: {
                name: { type: String, trim: true, required: true },
                type: { type: String, trim: true, required: true },
                slug: { type: String, trim: true, required: true },
                name_with_type: { type: String, trim: true, required: true },
                path: { type: String, trim: true, required: true },
                path_with_type: { type: String, trim: true, required: true },
                code: { type: String, trim: true, required: true },
                parent_code: { type: String, trim: true, required: true },
            },
        },
        subjects: [
            {
                _id: { type: Schema.Types.ObjectId, required: true },
                subject: { type: String, trim: true, required: true },
            },
        ],
        classes: [
            {
                _id: { type: Schema.Types.ObjectId, required: true },
                className: { type: String, trim: true, required: true },
            },
        ],
        schedules: [
            {
                _id: { type: Schema.Types.ObjectId, required: true },
                dayWeek: {
                    _id: { type: Schema.Types.ObjectId, required: true },
                    dayWeek: { type: String, trim: true, required: true },
                },
                daySession: {
                    _id: { type: Schema.Types.ObjectId, required: true },
                    daySession: { type: String, trim: true, required: true },
                },
                schedule: { type: String, trim: true, required: true },
            },
        ],
        avatar: { type: String, trim: true, required: true },
        description: { type: String, trim: true, required: true },
        registrationDate: { type: Date, default: Date.now },
        updateAt: { type: Date, default: Date.now },
    },
    { versionKey: false }
);

const TutorModel = mongoose.model("tutors", TutorModelSchema);

module.exports = TutorModel;
