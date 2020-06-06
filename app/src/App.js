import React, { useState } from 'react';
import PropsPrac from './components/propPrac';
import UserForm from './components/userForm';
//import logo from './logo.svg';
//import './App.css';

function App() {
	const ogUserArray = [
		{ name: 'Laura', age: 24, belt: 'purple' },
		{ name: 'Sandy', age: 34, belt: 'green' },
		{ name: 'Leo', age: 28, belt: 'orange' }
	];
	const [ userState, setUserState ] = useState(ogUserArray);

	const addUser = (obj) => {
		return setUserState([ ...userState, { ...obj } ]);
	};

	const deleteUser = (id) => {
		console.log(id);
		let users = userState.filter((idx) => {
			console.log([ idx ]);
			return idx !== id;
		});
		console.log(users);
	};
	return (
		<div>
			<h1>Users</h1>
			<hr />
			<PropsPrac user={userState} deleteUser={deleteUser} />
			<br />

			<h1>Add another User</h1>
			<hr />
			<UserForm addUser={addUser} />
		</div>
	);
}

export default App;
