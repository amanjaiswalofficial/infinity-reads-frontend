import gql from 'graphql-tag';

export const GET_BLOGS = gql`
query getBlogs($searchBy: String, $listBy: String){
  blogs(searchBy: $searchBy, listBy: $listBy){
    data{
      title
      content
      user_id
      id      
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
 mutation DeleteBlog($id: ID!){
  deleteBlog(id: $id){
   message
   code
  }
}`

export const EDIT_BLOG=gql`
 mutation UpdateBlog($user_id: String!, $id: ID!, $title: String!, $content: String!){
  updateBlog(id: $id, data:{user_id: $user_id, title: $title, content: $content}){
   message
   code
  }
}
 `
