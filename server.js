var express=require('express');
var expressGraphQl=require('express-graphql');
var {buildSchema}=require('graphql');
var data=[{ "_id": "5bc031527157d9c7ea3c4829", "age": 26, "eyeColor": "brown", "name": "Marcie Calderon", "gender": "female", "company": "COREPAN", "email": "marciecalderon@corepan.com", "phone": "+1 (959) 567-3304", "address": "735 Montgomery Place, Allamuchy, New York, 5842" }, { "_id": "5bc0315280227abd2680bd3a", "age": 23, "eyeColor": "blue", "name": "Ophelia Abbott", "gender": "female", "company": "ACCRUEX", "email": "opheliaabbott@accruex.com", "phone": "+1 (816) 442-3619", "address": "189 Flatbush Avenue, Canterwood, Delaware, 6621" }, { "_id": "5bc03152f0191f7a3155ca66", "age": 34, "eyeColor": "brown", "name": "Chen Jackson", "gender": "male", "company": "RETROTEX", "email": "chenjackson@retrotex.com", "phone": "+1 (994) 577-3374", "address": "219 Dare Court, Fairhaven, Oregon, 4936" }, { "_id": "5bc031524d3d0941ce50ac45", "age": 21, "eyeColor": "blue", "name": "Dennis Hammond", "gender": "male", "company": "GENMY", "email": "dennishammond@genmy.com", "phone": "+1 (909) 564-2965", "address": "688 Seton Place, Norfolk, Georgia, 7312" } ];
var app=express();

// excluding phone no and eyeColor
var schema=buildSchema(`
	 type Query{
	 	alluser:[user]
	 	specificuserById(_id:String!):user
	 	updateuser(_id:String!,name:String!):user
	 },
	 type user{
	 	_id:String,
	 	age:Int,
	 	name:String,
	 	gender:String,
	 	company:String,
	 	email:String,
	 	address:String
	 }
	`);
var rootResolver={
	alluser:()=>getAllUsers(),
	specificuserById:(idObj)=>getspecificuser(idObj._id),
	updateuser:(obj)=>getupdatedUser(obj),
}

const getAllUsers =()=>data;
const getspecificuser=(_id)=>{
	return data.filter((item)=>{
       return item._id===_id
	})[0];
}
const getupdatedUser=(obj)=>{

	let currentObj=getspecificuser(obj._id);
	console.log(JSON.stringify(obj)+' ' +JSON.stringify(currentObj));
	currentObj.name=obj.name;
	return currentObj;
}

app.use('/graphql',expressGraphQl({
       rootValue:rootResolver,
       schema:schema,
       graphiql:true
}));

app.listen(4000,()=>console.log("server is running on port no: 4000/graphql"));