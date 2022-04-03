const mongoose = require('mongoose');

const DB = process.env.DATABASE;

// connection express app to mongodb atlas database
mongoose.connect(DB).then(()=>{
    useNewUrlParser:true;
    useCreateIndex: true;
    useUnifiedTopology: true;
    useFindAndModify: false

    console.log(`Connetion with database established`);
}).catch((err) => console.log(`No connection from DB`));