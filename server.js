const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const http = require('http'); // this give me the availability to create a server
const path = require('path');
const mongoose =require('mongoose');
const { makeExecutableSchema } = require('graphql-tools');
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge');
const { loadFilesSync } = require('@graphql-tools/load-files');
const {authCheck} = require ('./helpers/auth')

require('dotenv').config()


const app = express()

//db

const db = async ()=>{
    try {
        await mongoose.connect(process.env.DATABASE_CLOUD, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true,
            useFindAndModify: true
        }); console.log('DB connected');
        
    } catch (error) {
        console.log('DB connection error',error);
    }
};

//execute database connection
db();

//typeDefs
const typeDefs = mergeTypeDefs(loadFilesSync(path.join(__dirname, './typeDefs')));

// types /query / mutation /subscirption


// resolvers
const resolvers = mergeResolvers(
    loadFilesSync(path.join(__dirname, './resolvers'))
  );


// graphql server

const apolloServe = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) =>({ req, res })
});

// apply middleware method connect apollo server with a specific HTTP framework: express
apolloServe.applyMiddleware({app})

//server
const httpserver = http.createServer(app)

//rest end point 
app.get('/rest', function (req, res){
    res.json({
        data: 'you hit the rest end point'
    })
})

// port 
app.listen(process.env.PORT, ()=>{
    console.log(`server is ready at port ${process.env.PORT}`);
    console.log(`gql server is ready at ${process.env.PORT}${apolloServe.graphqlPath}`);
})