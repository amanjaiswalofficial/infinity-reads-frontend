import { gql } from '@apollo/client';

export const GET_BLOGS = gql`
query{
  blogs{
    data{
      title
      content
      user_id
      _id      
    }
    status
    code
  }
}`
 

export const POST_BLOG =gql`
 mutation PostBlog($title: String!, $content: String!, $user_id: String!){
  postBlog(data:{title: $title, content: $content, user_id: $user_id}){
   code
   message
  }
}`

export const DELETE_BLOG =gql`
 mutation DeleteBlog($_id: ID!){
  deleteBlog(_id: $_id){
   message
   code
  }
}`

export const EDIT_BLOG=gql`
 mutation UpdateBlog($user_id: String!, $_id: ID!, $title: String!, $content: String!){
  updateBlog(_id: $_id, data:{user_id: $user_id, title: $title, content: $content}){
   message
   code
  }
}
 `
