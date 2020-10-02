// /Users/Dell/mongodb/bin/mongod.exe --dbpath=/Users/Dell/mongodb-data
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
