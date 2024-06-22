import React, { useState } from 'react';
import './App.css';

function App() {
	const  [count,setCount] = useState(1)

	return <div>
		<button onClick={()=>{setCount(count+1)}}>+</button>
		<p>{count}</p>
		<button onClick={()=>{setCount(count-1)}}>-</button>
	</div>

}

export default App;
