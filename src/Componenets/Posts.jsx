import React, { useState,useEffect } from 'react'
import { deletepost, GetPost } from '../API/PostApi';
import "../App.css";
import Form from './Form';

const Posts = () => {
      const [Post, setPost] = useState([])
       const getpostdata = async()=>{
          const res = await GetPost()
      //     console.log(res.data);
          setPost(res.data)
          
        }
        const handledelete = async(id)=>{
            try{
            const rest = await deletepost(id)
            if(rest.status == 200){
                  const newupdatedpost = Post.filter((curpost)=>{
                        return curpost.id !== id
                  })
                  setPost(newupdatedpost)
            }else{
                  console.log("failed to delete this:",rest.status);
                  
            }
            }
            catch(error){
                  console.log(error);
                  
            }
      //      const rest = await deletepost(id)
      //      console.log(rest);
           
        }
      
        useEffect(() => {
          getpostdata()
        }, [])
  return (
      <div>
      <section className="section-form">
            <Form Posts={Posts} setPost={setPost}/>
      </section>
    <section className="section-post">
      <ol>

     {Post.map((curele)=>{
      const {id,body,title} = curele
      return(
            <li key={id}>
                <p>Title:{title}</p>
                <p>Body:{body}</p>
                <button>edit</button>
                <button className="btn-delete" onClick={()=> handledelete(id)}>delete</button>
            </li>
      )
     })}
      </ol>
    </section>
      </div>
  )
}

export default Posts