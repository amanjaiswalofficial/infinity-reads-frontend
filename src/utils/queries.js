import { gql } from '@apollo/client';

export const GET_BLOGS = gql`
query {
  blogs {
    _id
    title
    content
    user_id
    created_at
  }
 }`
 

 export const POST_BLOG =gql`
 mutation PostBlog($title: String!, $content: String!){
   postBlog(title: $title, content: $content){
    message   
   }
 }
 `

 export const DELETE_BLOG =gql`
 mutation DeleteBlog($_id: String!){
   deleteBlog(_id: $_id){
     message
   }
 }
 `