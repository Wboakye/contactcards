import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

export default class AddContact extends React.Component {
	constructor(){
		super();
		this.state = {
			full_name: "",
			email: "",
			agenda_slug: "downtown_viii",
			address: "",
			phone: ""
		};
	
	this.handleSubmit = this.handleSubmit.bind(this);

	}
	
	handleSubmit = () => {
		let full_name = document.querySelector("#name").value;
		let email = document.querySelector("#email").value;
		let address = document.querySelector("#address").value;
		let phone = document.querySelector("#phone").value;
		
		this.setState(
				{full_name: full_name,
				email: email,
				address: address,
				phone: phone
			});
			
		setTimeout(() => {
			fetch("https://assets.breatheco.de/apis/fake/contact/", {
				method: 'POST', 
				body: JSON.stringify(this.state), 
				headers:{
					'Content-Type': 'application/json'
				}
				}).then(res => res.json())
				.then(response => console.log('Success:', JSON.stringify(response)))
				.catch(error => console.error('Error:', error));
				}, 100);

	}
	

	
	render() {
		return (
			<div className="container">

				<div>
					<h1 className="text-center mt-5">Add Contact</h1>
					<form>
						<div className="form-group">
							<label>Full Name</label>
							<input id="name" type="text" name="full_name" className="form-control" required />
						</div>
						<div className="form-group">
							<label>Email</label>
							<input id="email" type="email" name="email" className="form-control"  required />
						</div>
						<div className="form-group">
							<label>Phone</label>
							<input id="phone" type="phone" name="phone" className="form-control"  required />
						</div>
						<div className="form-group">
							<label>Address</label>
							<input id="address" type="text" name="address" className="form-control"  required />
						</div>
						<button type="button" onClick={this.handleSubmit} className="btn btn-primary form-control">save</button>
						<Link className="mt-3 w-100 text-center" to="/">or get back to contacts</Link>
					</form>
				</div>
			</div>

		);
	}
}


AddContact.propTypes = {
	match: PropTypes.object
};


