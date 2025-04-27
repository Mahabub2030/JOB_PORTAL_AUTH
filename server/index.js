const express = require('express');
const cors = require('cors');
const app = express();
require("dotenv").config();

const port = process.env.PORT || 9000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

app.use(cors());
app.use(express.json());

const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ac-cgkxfia-shard-00-00.x9t7sgg.mongodb.net:27017,ac-cgkxfia-shard-00-01.x9t7sgg.mongodb.net:27017,ac-cgkxfia-shard-00-02.x9t7sgg.mongodb.net:27017/?ssl=true&replicaSet=atlas-nszs70-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`;
// const uri = `mongodb+srv://job_hunter:$5y3DYUtwNORSQxX0@cluster0.swu9d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

        //   job releted api
        const jobCollection = client.db("jobPortal").collection('jobs');

        app.get('/jobs', async (req, res) => {
            const cursor = jobCollection.find();
            const result = await cursor.toArray();
            res.send(result)
        })
        
        app.get('/jobs/:id', async (req, res) => {
         const    id = req.params.id;
            const qurey = { _id: new ObjectId(id) }
            const result = await jobCollection.findOne(qurey)
            res.send(result)
        })



    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Job is falling from the sky')
})

app.listen(port, () => {
    console.log(`Job is waiting at: ${port}`)
})