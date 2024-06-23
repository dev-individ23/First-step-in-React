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

 /////////////////////////////////////////////////////////////////////////////

	// let dateNow = [new Date().getFullYear(),new Date().getMonth()+1,new Date().getDate()];


	// const [value1, setValue1] = useState(dateNow.join(' '));
  //   const [value2, setValue2] = useState(dateNow.join(' ') );
  //   const [result, setResult] = useState(0);

  //   // Функция для вычисления разницы в днях между двумя датами
  //   const calculateDifferenceInDays = () => {
  //       if (value1!== null && value2!== null) {
  //           const date1 = Date.parse(value1);
  //           const date2 = Date.parse(value2);
  //           const differenceInDays = Math.round((date1 - date2) / (1000 * 60 * 60 * 24));
  //           setResult(differenceInDays);
  //       }
  //   };

	
	
	// return (
	// 	<div>
	// 			<input 
	// 					value={value1 || ''}
	// 					onChange={(e) => { setValue1(e.target.value) }}
	// 					placeholder="Введите первую дату"
	// 			/>
	// 			<input 
	// 					value={value2 || ''}
	// 					onChange={(e) => { setValue2(e.target.value) }}
	// 					placeholder="Введите вторую дату"
	// 			/>
	// 			<button onClick={calculateDifferenceInDays}>Calculate Difference</button>
	// 			<p>Разница в днях: {result}</p>
	// 	</div>
  //);

	const [value,setValue] = useState('');
	const [result, setResult] = useState(0);
	

	function getSum(value){
		let res = Array.from(value).reduce((acc,val)=> +acc + +val);
		return res.toString();
	}

	return <div>
		<input onChange={(e)=>{setValue(e.target.value)}} onBlur={()=>{setResult(getSum(value))}}/>

		<p>{result}</p>
	</div>

}

export default App;
