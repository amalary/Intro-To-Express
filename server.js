// Require modules 

const express = require('express'); 

// Create the express app 

const app = express(); 


// Configure the app (app.set)



// Mount middleware (app.use)



// Mount routes
app.get('/', function(req,res){
    res.send('<h1>Hello World!  </h1>'); 
})

app.get('/home', function(req,res){
    res.send('<h1>Welcome to the Homepage!</h1>')
})

app.get('/hi', function(req ,res){
    res.redirect('/home')
})

// Tell the app to listen on port 3000

app.listen(3000, function(){
    console.log('Listening on port 3000')
})