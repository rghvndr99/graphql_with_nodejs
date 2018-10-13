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


//export default getActivity;