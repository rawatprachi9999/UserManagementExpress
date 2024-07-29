const mongoose = require ("mongoose")

let connectDB = async () => {
    
    await mongoose.connect (process.env.MONGO_URL)
    .then ( () =>console.log('conneted'))
    .catch( ()=> console.log('failed to connect to DB'))


    
}

module.exports =connectDB;