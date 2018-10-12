var express=require('express');
var expressGraphQl=require('express-graphql');
var {buildSchema}=require('graphql');
var app=express();

var schema=buildSchema(`
	 type Query{
	 	message:String
	 }
	`);
var rootResolver={
	message:()=>getMessage()
};

const getMessage =()=>"hello world";

app.use('/graphql',expressGraphQl({
       rootValue:rootResolver,
       schema:schema,
       graphiql:true
}));

app.listen(4000,()=>console.log("server is running on port no: 4000/graphql"));