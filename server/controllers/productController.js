export default class ProductController {
    constructor(client, dbname = 'inventory', collectionName = 'employee'){
        this.client = client;
        this.db = client.db(dbname);
        this.collection = this.db.collection(collectionName);
    }

    async displayAll(){
        try {
            
            const result = await this.collection.find({}).toArray();
            console.log('Table employee: ', result);
        } catch (err) {
            console.error('Error displaying employee:', err);
            throw err;
        }
    }

    async insertEmployee(employeeData){
        try{
            const result = await this.collection.insertOne(employeeData);
            console.log('Employee inserted: ', result);
        }catch(err){
            console.error('Error creating employee:', err);
            throw err;
        }
    }


}