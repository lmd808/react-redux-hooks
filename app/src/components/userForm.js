import React, { useState } from 'react';

const UserForm = ({ addUser }) => {
	const newUser = {
		name: '',
		age: 0,
		belt: ''
	};
	const [ newUserState, setNewUserState ] = useState({ ...newUser });

	const handleChange = (e) => {
		const updatedNewUser = { ...newUserState };
		updatedNewUser[e.target.id] = e.target.value;
		setNewUserState(updatedNewUser);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addUser(newUserState);
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="Name">Name: </label>
				<input type="text" name="name" id="name" onChange={handleChange} />
				<label htmlFor="belt">Belt Color:</label>
				<input type="text" name="belt" id="belt" onChange={handleChange} />
				<label htmlFor="Age">Age: </label>
				<input type="number" name="age" id="age" onChange={handleChange} />
				<br />
				<button>Add New User</button>
			</form>
		</div>
	);
};

export default UserForm;
