var express = require('express');
var bodyparser = require('body-parser');
var { mongoose } = require('./db/db.js');
var { Event } = require('./models/event.js');
var { User } = require('./models/user.js');

var app = express();

app.use(bodyparser.json());

app.listen(8000, () => {
    console.log('listening on port 8000');
});

app.get('/', (req,res) => {
    res.send("is it working");
});

app.get('/categories', (req,res) => {
    Event.findcategories().then((result) => {
        console.log(result);
        res.status(200).send(result);
    }, (err) => {
        res.status(400).send(err);
    });
})

app.delete('/user/{userId}/events/{eventId}', (req,res) => {
    res.header(200).send("successfully deleted");
    //res.header(404).send("error")
})

//not clear what this does
app.post('/user/:userId/events', (req,res) => {
    res.header(200).send("successfully done");
//res.header(404).send("error")
})

app.get('./events?category=:event_category&subcategory=:subcategory&min-age=:min_age&max-age=:max-age&start-date=:start_date&last-date=:last_date&place-within=:within&lat=:lat&lng=:lng&start=:start&limit=:limit',(req,res) => {

    event_category = req.params.event_category;
    subcategory = req.params.subcategory;
    min_age = req.params.min_age;
    max_age = req.params.max-age;
    start_date = req.params.start_age;
    last_date = req.params.last_date;
    lng = req.params.lng;
    lat = req.params.lat;
    within = req.params.within;
    start = req.params.start;
    limit = req.params.start;

// start and limit signifies what
// and yes sir I'll add if to every selection criteria later on
    var event = new Event();
    event.find({
        event_category,
        event_subcategory: subcategory,
        event_min_age:min_age,
        event_max_age:max_age,
        event_start_date:start_date,
        event_last_date:last_date,
        event_location:{
            longitude:lng,
            latitude:lat,
            within:within
        }
    }, (results,err) => {
        if(!results){
            res.send("No such event exist")
        }
        res.header(200).send(results);
    }) 
})

//what is this route for??
app.put("/user/:userId/events/:eventId",(req,res) => {
    res.header(200).send("successfully done");
//res.header(404).send("error")
})
