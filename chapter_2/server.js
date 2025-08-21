"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var PORT = 3000;
//middleware
app.use(express_1.default.json());
var data = {
    name: 'Tony',
    language: 'Nodejs',
    framework: 'Express.js'
};
app.listen(PORT, function () { return console.log("backend is running on PORT ".concat(PORT)); });
// Type 1 - website endpoints, send html when requested 
app.get('/', function (req, res) {
    console.log('default endpoint hitted', req.method);
    res.status(200);
    res.send('<h1> This is the homepage <h1/>');
});
app.get('/dashboard', function (req, res) {
    console.log('dashboad endpoint hitted', req.method);
    res.send('<h1> This is the dashboard <h1/>');
});
// Type 2 - API endpoints, sends data when requested (non-visual)
app.get('/api/data', function (req, res) {
    console.log('sending data...', req.method);
    res.send(data);
});
app.post('/api/data', function (req, res) {
    var reqBody = req.body;
    res.status(201);
});
