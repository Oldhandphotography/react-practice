import React ,{useState,useEffect} from 'react'

function useEffect2() {
    const[count,setCount] = useState(0)
    const[name,setName] = useState('')
    useEffect(() => {
        console.log('useEffect - updating document title')
        document.title = `You clicked ${count} times`
    },[count])
  return (
    <div>useEffect2
        <input type="text" value={name}  onchange={e => setName(e.target.value)}/>
        <button onClick={() => setCount(count + 1)}>click {count} times </button>
    </div>
  )
}

export default useEffect2