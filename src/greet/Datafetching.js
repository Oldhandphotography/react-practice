import React,{useState,useEffect} from 'react'
import axios from 'axios' 
function Datafetching() {
    const [post,setPost] = useState({})
    const [id,setId] = useState(1)
    const [idButtonclick,setidButtonclick] =useState(1)


    const handleClick = () =>{
        setidButtonclick(id)
    }
    useEffect( () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idButtonclick}`)
        .then(res=>{
            console.log(res)
            setPost(res.data)
            // this update post state variable which is being rendered in jsx
        })
        .catch(err => {
            console.log(err)
        })
    },[idButtonclick])  // [] : this is used to prevent the infinite loop 


  return (
    <div>Datafetching{post.title}
      <input type="text" value= {id } onChange={ e => setId(e.target.value)}/>
      <button type="button" onClick={handleClick}>onclick</button>
        {/* <ul>
          
            {post.map(post => (<li key={post.id}>{post.title}</li>))}
        </ul> */}
    </div>
  )
}

export default Datafetching