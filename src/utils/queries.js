import gql from 'graphql-tag';

export const GET_BLOGS = gql`
query getBlogs($search: String, $sort: String, $filter: String, $start: Int, $limit: Int){
  blogs(search: $search, sort: $sort, tags: $filter, start: $start, limit: $limit){
    data
    {
      blogs
      {
        title
        content
        user_id
        id
        tags
      }
      total_count      
    }
    status
    code
  }
}`

export const POST_BLOG =gql`
 mutation PostBlog($title: String!, $content: String!, $user_id: String!, $tags: [String], $token: String!){
  postBlog(data:{title: $title, content: $content, user_id: $user_id, tags: $tags, token: $token}){
   code
   message
  }
}`

export const DELETE_BLOG =gql`
 mutation DeleteBlog($id: ID!, $token: String!){
  deleteBlog(id: $id, data:{token: $token}){
   message
   code
  }
}`

export const EDIT_BLOG=gql`
 mutation UpdateBlog($user_id: String!, $id: ID!, $title: String!, $content: String!, $token: String!){
  updateBlog(id: $id, data:{user_id: $user_id, title: $title, content: $content, token: $token}){
   message
   code
  }
}
 `
export const GET_FILTERS=gql`
query getTags{
  tags{
    data{
      tags
    }
    status
    code
  }
}
`
export const NEW_USER_REGISTER =gql`
 mutation NewUser($firstName: String, $lastName: String, $emailId: String!, $password: String!){
  newUser(data: {firstName: $firstName, lastName: $lastName, emailId: $emailId, password: $password }){
   message
   code
  }
}`

export const EXISTING_USER_LOGIN =gql`
 mutation ExistingUser($emailId: String!, $password: String!){
  existingUser(data: {emailId: $emailId, password: $password}){
   message
   code
   userData{
     user{
       email
     }
     token
   }
  }
}`

export const USER_MUTATIONS = {
  "newUser": NEW_USER_REGISTER,
  "existingUser": EXISTING_USER_LOGIN
}
