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
 
 export const GET_BLOGGER = `
 query{
   blogs {
     abc
   }
 }`