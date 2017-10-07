//Used for request routing
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const nodeRestClient = require('node-rest-client').Client;
const client  = new nodeRestClient();

const executor_url = 'http://localhost:5000/code_results';
client.registerMethod('code_results', executor_url, 'POST');

const problemService = require('../services/problem.service');
const collaborateService = require('../services/collaborate.service');

// POST /api/v1/problems
router.post('/problems', jsonParser, function (req, res) {
    problemService.addProblem(req.body)
        .then(
            problem => {res.json(problem)},
            error => {res.status(400).send('Problem already exists.');}
            );
});

// GET /api/v1/problems
router.get('/problems',function (req, res) {
   problemService.getProblems()
       .then(problems => res.json(problems));
});

// GET /api/v1/problems/:id
router.get('/problems/:id',function (req, res) {
    const id = req.params.id;
    problemService.getProblem(+id)
        .then(problem => res.json(problem));
});

// GET /api/v1/rooms
router.get('/rooms',function (req, res) {
    res.json(collaborateService.getRooms());
});

// GET /api/v1/rooms/:sessionId
router.get('/rooms/:sessionId',function (req, res) {
    const sessionId = req.params.sessionId;
    res.json(collaborateService.getRoom(sessionId));
});

// POST /api/v1/code_results
router.post('/code_results', jsonParser, function (req, res) {

    client.methods.code_results({
        data: {code: req.body.code, lang: req.body.lang},
        headers: {'Content-Type': 'application/json'}
    }, (data, response) => {
        res.json(data);
    });
});


module.exports = router;