const express = require('express')

const app = express()
const port = 8000

app.set('view engine', 'hbs') // set view engine hbs
app.use('/assets', express.static(__dirname + '/assets')) // path folder assets
app.use(express.urlencoded({extended: false}))

app.get('/', function(request, response){
    response.render('home')
})

let isLogin = true

app.get('/Addproject', function(request, response){
    response.render('Addproject')
})

app.post('/Addproject', function(request, response){
    console.log(request.body);
    let title = request.body.inputName
    let startDate = request.body.inputStartDate
    let endDate = request.body.inputEndDate
    let description = request.body.inputDescription
    let node = request.body.inputNode
    let react = request.body.inputReact
    let next = request.body.inputNext
    let typescript = request.body.inputTypescript
    let image = request.body.inputImage

    console.log(title);
    console.log(startDate);
    console.log(endDate);
    console.log(description);
    console.log(node);
    console.log(react);
    console.log(next);
    console.log(typescript);
    console.log(image);

    response.redirect('/')
})

app.get('/projectdetails', function(request, response){
    response.render('projectdetails')
})

app.get('/contact', function(request, response){
    response.render('contact')
})

app.listen(port, function(){
    console.log(`server running on port ${port}`);
})