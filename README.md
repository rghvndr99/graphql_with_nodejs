# graphql_with_nodejs
The context of this page is to demonstrate the integration of graphql with nodejs with few code snippets. It will include some basic concepts/keyword and its description. 

 1. Dependency:

    To start with graphql, following dependency needs to be installed.  

![dependency](https://github.com/rghvndr99/graphql_with_nodejs/blob/master/code-snippet/dependency.PNG)

 

 1. Add graphql with nodejs:

    ![configuration](https://github.com/rghvndr99/graphql_with_nodejs/blob/master/code-snippet/configuration.PNG)

   First, the endpoint is decided that is http://localhost:portNo/graphql.  While network request, we use the same endpoint in the front end.

   Now for above endpoint,expressGraphql get executed with the following parameter.

  *  rootValue

     It is a JSON object contains the mapping of API names and corresponding action/function that should be get executed.

   ![resolver](https://github.com/rghvndr99/graphql_with_nodejs/blob/master/code-snippet/resolver.PNG)

   * schema  
     It is a structure that defines input and expected output format. 
   ![schema img](https://github.com/rghvndr99/graphql_with_nodejs/blob/master/code-snippet/schema.PNG)

 

As an image, we can define a type user which has certain properties and its type. Now as an example, if the request is to delete a user (deleteuser), then the input will be _id of type string and is mandatory (! symbol is for the required field). Now the output of this function will be an array of objects having all the props of the user. 

 

Note: Please check (Mutations and Input Types | GraphQL.js Tutorial ) for more info about type, Input, query, and mutation.

*  grapghiql

    it is used to access graphql through its user interface. If http://localhost:portNo/graphql has been hit, it will open a UI as shown below. Here real time query can be tested.

![graphqlUI](https://github.com/rghvndr99/graphql_with_nodejs/blob/master/code-snippet/graphql-UI.PNG)

1.  How it works

   To demonstrate functionality, we will take an example of updateuser function.

   * Front-end side:  
     step1: URL for network request. (http://localhostportNo/graphql)  
   ![url](https://github.com/rghvndr99/graphql_with_nodejs/blob/master/code-snippet/URL.PNG)   
    Step2: make the network request.  
![update user](https://github.com/rghvndr99/graphql_with_nodejs/blob/master/code-snippet/updateuser.PNG)  

     *  Server side:  
      Step1: http://localhostportNo/graphql will receive a post request with the query as updateuser  
      Step2: resolver will execute the corresponding function that is getUpdatedUser(obj).  

      ![ updateuserdatabase](https://github.com/rghvndr99/graphql_with_nodejs/blob/master/code-snippet/getUpdateUserWithoutDataBase.PNG)  
  Step3: getUpdatedUser(obj) will return updated data which will be captured and rendered on the front end.

