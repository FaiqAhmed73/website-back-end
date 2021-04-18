var models = require('./server.js').models;


// var toSave = [
//     {name: 'Faiq', email: 'faiq@faiq.com'},
//     {name: 'Faiq1', email: 'faiq1@faiqzcd.com'},
//     {name: 'Faiq2', email: 'faiq2@faiqs.com'},
//     {name: 'Faiq3', email: 'gfgfaiq3@faiqdsd.com'},
//     {name: 'Faiq4', email: 'dffaiq4@faiqbv.com'},
//     {name: 'Faiq5', email: 'vcdfaiq5@faiuyq.com'},
//     {name: 'Faiq6', email: 'asfaiq6@faiqyu.com'},
//     {name: 'Faiq7', email: 'xxadfasdaiq7@faiqxc.com'},
//     {name: 'Faiq8', email: 'xaxsdfaadaiq8@faiqzx.com'},
//     {name: 'Faiq9', email: 'cvfaasdiq9@faiqbnbn.com'},
// ];

// toSave.map(obj => {
//     models.Profile.create(obj, (err, created) => {
//         console.log("created?", created);
//     })
// })




var filter = {
    where: {
        email: {like: 'faiq'}      
    },
    order: 'date ASC', //order by: "Feilds direction"
    limit: 10,
    skip: 4,
    fields: {
        email: true
    }
}

//Profile.Posts.Image

models.Profile.findById(filter, (err, found) => {
    console.log("Found?", err, found);
})