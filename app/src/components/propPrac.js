import React from 'react';

const PropsPrac = ({ user, deleteUser }) => {
	console.log({ user });
	const userArray = user.map((user, idx) => {
		// condition ? true : false/ else
		console.log(idx);
		return user.age > 18 ? (
			<div className="user" key={idx}>
				<p>
					{user.name} is practicing with props. She is {user.age} years old and wears a {user.belt} belt.
				</p>
				<button
					onClick={() => {
						deleteUser(idx);
					}}
				>
					Delete User
				</button>
			</div>
		) : null;
	});

	return <div>{userArray}</div>;
};

export default PropsPrac;
