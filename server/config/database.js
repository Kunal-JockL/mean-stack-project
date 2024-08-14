import { MongoClient } from 'mongodb';

import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGO_DB;

export async function connectToMongoDB(){
    const client = new MongoClient(uri);

    try{
        await client.connect();
        console.log('Connected to Mongo DB');

        const databasesList = await client.db().admin().listDatabases();
        databasesList.databases.forEach(db => console.log(` - ${db.name}`));

        return client;
    }catch(err){
        console.error("Connection error: ", err);
    }
    
}

//connectToMongoDB();