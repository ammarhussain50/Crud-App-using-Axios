

import axios from 'axios'

const Api = axios.create({
                   baseURL: 'https://jsonplaceholder.typicode.com'
            })
export const GetPost = ()=>{
                  return Api.get('/posts')
            }

export const deletepost = (id)=>{
      return Api.delete(`/posts/${id}`)
}

export const PostApi = (post)=>{
      return Api.post('/posts',post)
}
export const updatedata = (id,post)=>{
      return Api.put(`/posts/${id}`,post)
}