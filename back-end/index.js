const express= require('express');
const app= express();
const {connection } = require("./Config/db");
require('dotenv').config();
const earRingsRouter = require('./Routers/earRings.route');
const earTopsRouter = require('./Routers/earTops.route');
// const haarRouter = require('./Routers/haar.route');
// const jhumkaRouter = require('./Routers/jhumka.route');
// const necklaceRouter = require('./Routers/necklace.route');


    (async()=>{
        try {
            await connection;
            console.log('connected succesfully to database ')
        }
        catch (error) {
            console.log(error);
        }
    })();


    app.get('/', (req, res) => {
    res.json(req.headers);
    });
    app.use('/ear_rings', earRingsRouter);
    // app.use('/ear_tops', TaskRouter);
    // app.use('/jhumka', TaskRouter);
    // app.use('/haar', TaskRouter);
    // app.use('/necklace', TaskRouter);

 

const PORT = process.env.PORT || 3000; 
app.listen( PORT, ()=> {
 console.log(`app runing on port ${PORT}`);
});