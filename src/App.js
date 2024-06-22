import React, { useState } from 'react';
import './App.css';

function App() {
	
	// const [value, setValue] = useState('');
	
	// function valueChange(value){
	// 		const dateNow = new Date();
	// 	const dateHappyBirthday = dateNow.getFullYear() - value;
	// 	return dateHappyBirthday;
	// }

	// function importGradusCelsi(value){
	// 	const celsiy = (value - 32) * 5/9;
	// 	return  celsiy.toFixed(2);
	// }
	
	// return <div>
	// 	<input  onChange={(e)=>{setValue(e.target.value)}} />
		
	// 	<p>text:{value && importGradusCelsi(value)}</p>
		
	// </div>;

	const [value1, setValue1] = useState(0);
	const [value2, setValue2] = useState(0);
	const [value3, setValue3] = useState(0);
	const [value4, setValue4] = useState(0);
	const [value5, setValue5] = useState(0);
	
	return <div>
		<input value={value1} onChange={(e)=>{setValue1(+e.target.value)}} />
		<input value={value2} onChange={(e)=>{setValue2(+e.target.value)}} />
		<input value={value3} onChange={(e)=>{setValue3(+e.target.value)}} />
		<input value={value4} onChange={(e)=>{setValue4(+e.target.value)}} />
		<input value={value5} onChange={(e)=>{setValue5(+e.target.value)}} />
		
		<p>result: {(value1 + value2 + value3 + value4 + value5)/5}</p>
	</div>

}

export default App;
