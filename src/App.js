import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import './App.css';

function App() {
	const [user,setUser] = useState({
		name:'John',
		surname: 'Bones',
		age:30
	})

	const [isBan,setIsBan] = useState(true);

	return <div>
		<p>{isBan ? user.name : ''}</p>
		<p>{isBan ? user.surname : ''}</p>
		<p>{isBan ? user.age : ''}</p>

		<button onClick={()=>{setUser({name: 'Alex',surname: 'Liskovich',age:32})}}>ChangeUser</button>
		
		{isBan && <button onClick={() => {setIsBan(false)}}>DeactivateUser</button>}
            
    {!isBan && <button onClick={() => {setIsBan(true)}}>ActivateUser</button>}
	</div>

}

export default App;
