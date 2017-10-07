const ProblemModel = require('../models/problem.model');

const getProblems = function(){
    return new Promise((resolve, reject) => {
        //先error 再response
        ProblemModel.find({}, (err, res) => {
            if(err){
                reject(err);
            }else{
                resolve(res);
            }
        });
    })
};

const getProblem = function (id) {
    return new Promise((resolve, reject) => {
        ProblemModel.findOne({id : id}, (err, res) => {
            if(err){
                reject(err);
            }else{
                resolve(res);
            }
        });
    });
};

const addProblem = function (newProblem) {
    return new Promise((resolve, reject) => {
        ProblemModel.findOne({title: newProblem.title}, (err, res) => {
            if(res){
                reject("Problem already exists");
            }else{
                ProblemModel.count({}, (err, res) =>{
                    newProblem.id = res + 1;
                    const mongoProblem = new ProblemModel(newProblem);
                    mongoProblem.save();
                    resolve(mongoProblem);
                });
            }
        });
    });
};

module.exports = {
    getProblems,
    getProblem,
    addProblem
};
