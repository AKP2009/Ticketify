import React, {useEffect, useState} from 'react'

function HooksCounterone() {
  const initialCount=0
    const [count, setCount]=useState(initialCount)

useEffect( () => {
	console.log('The count is :' + count);


	// optional return
	/* return() => {
	console.log('I am being cleaned up');
	}; */
},[count]) // dependency array
  
return (
    <div>
      <button onClick={() => setCount(count + 1)}> Count {count}</button>
    </div>
  )
}

export default HooksCounterone
