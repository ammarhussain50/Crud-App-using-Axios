

import axios from 'axios'

const Api = axios.create({
                   baseURL: 'https://jsonplaceholder.typicode.com'
            })
export const GetPost = ()=>{
                  return Api.get('/posts')
            }