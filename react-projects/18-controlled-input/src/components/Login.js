import { useState } from "react";

export default function Login() {
	const [data, setData] = useState({ username: "", password: "" });

	function handleFormSubmit(e) {
		console.log(data);
	}
	return (
		<>
			<h1>Login Form</h1>
			<form onSubmit={handleFormSubmit}>
				<label>
					Username:
					<input
						type="text"
						value={data.username}
						onChange={(e) => setData({ ...data, username: e.target.value })}
					/>
				</label>
				<label>
					Password:
					<input
						type="password"
						value={data.password}
						onChange={(e) => setData({ ...data, password: e.target.value })}
					/>
				</label>
				<button type="submit">Login</button>
			</form>
		</>
	);
}
