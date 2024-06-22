import React, { useState } from 'react';
import './App.css';

function App() {
	
	const [value, setValue] = useState('');
	
	return <div>
		<input value={value} onChange={(e)=>{setValue(e.target.value)}} />
		<p>text: {value}</p>
	</div>;

}

export default App;
