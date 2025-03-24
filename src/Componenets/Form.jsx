import React from 'react'
import { useState } from 'react'
import { PostApi } from '../API/PostApi'

const Form = ({Posts,setPosts}) => {
      const [adddata, setadddata] = useState({
            
                  title : '',
                  body: '',
            
})

      const handleInputChange = (e)=>{
            const name = e.target.name
            const value = e.target.value

            setadddata((prev)=>{
                  // console.log(prev);
                  
                  return{
                        ...prev,
                        [name] : value
                  }
            })
      }
      const addPost = async ()=>{
           const resp = await PostApi(adddata)
           console.log("res",resp);
           
           if((resp.status == 200)){
            setPosts([...Posts,resp.data])
            setadddata({ title: "", body: "" });
           }
           
      }

      const handleFormSubmit = (e)=>{
            e.preventDefault()
            addPost()
      }
  return (
      
      <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="title"></label>
        <input
          type="text"
          autoComplete="off"
          id="title"
          name="title"
          placeholder="Add Title"
          value={adddata.title}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label htmlFor="body"></label>
        <input
          type="text"
          autoComplete="off"
          placeholder="Add Post"
          id="body"
          name="body"
          value={adddata.body}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" >
        ggg
      </button>
    </form>
  )
}

export default Form