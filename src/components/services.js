import { GraphQLClient ,request } from 'graphql-request';
import 'babel-polyfill';
const ENDPOINT = 'http://localhost:4000/graphql';
const client=new GraphQLClient(ENDPOINT);

export const GetActivity=async()=> {

    const query=`{
    	alluser {
    		_id,
    		name
    	}
    }`;
   const response=await client.request(query);

   return response.alluser;
}
export const UpdateActivity=async(obj)=> {
    console.log('RDX'+ JSON.stringify(obj));
    const query=`{
    	updateuser(_id:"${ obj._id.trim()} ",name:"${ obj.name.trim()}") {
    		_id,
    		name
    	}
    }`;
   const response=await client.request(query);

   return response.updateuser;
}

//export default getActivity;