import 'babel-polyfill';
const ENDPOINT = 'http://localhost:4000/graphql';
export const getUser=async()=>{
const query=`{
      alluser {
        _id,
        name,
        company,
        email,
        address
      }
    }`;

   let response=[];
   await fetch(ENDPOINT,{
      method:'post',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify({"query":query})
   }).then((res)=>res.json())
      .then((res)=>{
           response=res.data.alluser
      });
  return response;
};
export const updateUser=async(obj)=> {
    const query=`{
    	updateuser(_id:"${ obj._id} ",name:"${ obj.name}",email:"${ obj.email}",company:"${ obj.company}",address:"${ obj.address}") {
    		_id,
    		name,
        email,
        address,
        company
    	}
    }`;
   //const response=await client.request(query);
   let response=[];
    await fetch(ENDPOINT,{
      method:'post',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify({"query":query})
   }).then((res)=>res.json())
      .then((res)=>{return response=res.data.updateuser});
    return response;
}

export const deleteUser=async(obj)=> {
    const query=`{
      deleteuser(_id:"${ obj._id} ") {
        _id,
        name,
        email,
        address,
        company
      }
    }`;
   let response=[];
   await fetch(ENDPOINT,{
      method:'post',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify({"query":query})
   }).then((res)=>res.json())
      .then((res)=>{console.log(res.data);return response=res.data.deleteuser});
    return response;
}

export const addUser=async(obj)=> {
    const query=`{
      adduser(name:"${ obj.name}",email:"${ obj.email}",company:"${ obj.company}",address:"${ obj.address}") {
        _id,
        name,
        email,
        address,
        company
      }
    }`;
   let response=[];
   await fetch(ENDPOINT,{
      method:'post',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify({"query":query})
   }).then((res)=>res.json())
      .then((res)=>{return response=res.data.adduser});
    return response;
}

//export default getActivity;