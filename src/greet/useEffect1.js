import React,{useState,useEffect} from 'react'

function useEffect1() {
    const [count, setCount] = useState(0)
    // use effect runs after every render but it create performance issue.
    useEffect(() => {
        document.title = `You clicked ${count} times`
    })
  return (
    <div>useEffect1
        <button onClick={() => setCount(count + 1)}>click {count} times </button>
    </div>
  )
}

export default useEffect1