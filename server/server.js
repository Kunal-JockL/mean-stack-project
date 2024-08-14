import { connectToMongoDB } from './config/database.js';
import ProductController from './controllers/productController.js';

async function main() {
    
    const client = await connectToMongoDB();
    // console.log(client);

    const pc = new ProductController(client);

    const ne = {
        name: 'John Doe',
        position: 'Software Engineer',
        department: 'Engineering',
        salary: 75000
    }

    // pc.insertEmployee(ne);
    pc.displayAll();

}

main();