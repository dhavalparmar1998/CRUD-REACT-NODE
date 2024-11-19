import mongoose from 'mongoose';

async function connection(){
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.wqtic.mongodb.net/dhavalnode');
}

export default connection;