import React from 'react'
import { useState,useEffect } from 'react'
import { PostApi, updatedata } from '../API/PostApi'

const Form = ({Posts,setPosts,updatedataapi,setupdatedataapi}) => {
      const [adddata, setadddata] = useState({
            
                  title : '',
                  body: '',
            
})

useEffect(() => {
 updatedataapi && setadddata({
      title : updatedataapi.title || '',
      body : updatedataapi.body || ''
 })
}, [updatedataapi])

let isEmpty = Object.keys(updatedataapi).length  === 0


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

      const updatepost = async()=>{
            try{

                  const response = await updatedata(updatedataapi.id , adddata)
                  console.log(response);

                  setPosts((prev)=>{
                        return prev.map((curele)=>{
                              return curele.id == response.data.id ? response.data : curele
                        })
                  })
                  setadddata({ title: "", body: "" });
                  setupdatedataapi({})
            }
            catch(error){
                  console.log(error);
                  
            }
           
      }

      const addPost = async ()=>{
           const resp = await PostApi(adddata)
           console.log("res",resp);
           
           if((resp.status = 200)){
            setPosts([...Posts,resp.data])
            setadddata({ title: "", body: "" });
           }
           
      }

      const handleFormSubmit = (e)=>{
            e.preventDefault()
            const action = e.nativeEvent.submitter.value;
            if(action === 'Add'){
                  addPost()
            }
            else if (action === 'Edit') {
                  updatepost()
            }
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
      <button type="submit" value={isEmpty?  'Add' : 'Edit'} >{isEmpty?  'Add' : 'Edit'}
       
      </button>
    </form>
  )
}

export default Form