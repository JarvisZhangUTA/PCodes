const mongoose = require('mongoose');
const ProblemSchema = mongoose.Schema({
    id: Number,
    title: String,
    difficulty: Number,
    description: String
});
const ProblemModel = mongoose.model('ProblemModel', ProblemSchema);
module.exports = ProblemModel;
