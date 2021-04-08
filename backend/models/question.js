const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    repo: {
        type: String,
    },
    live: {
        type: String,
    },
    isAnswered: {
        type: Boolean,
        default: false,
    }
}, {
    timestamps: true,
});

module.exports = Question = mongoose.model("Question", QuestionSchema);
