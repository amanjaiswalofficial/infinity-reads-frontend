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
 mutation PostBlog($title: String!, $content: String!, $user_id: String!, $tags: [String]){
  postBlog(data:{title: $title, content: $content, user_id: $user_id, tags: $tags}){
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
