import React from "react";
import getState from "./store.js";

export const Context = React.createContext(null);

const Store = PassedComponent => {
	class StoreWrapper extends React.Component {
		constructor(props) {
			super(props);
			this.state = getState({
				getStore: () => this.state.store,
				setStore: updatedStore =>
					this.setState({
						store: Object.assign(this.state.store, updatedStore)
					})
			});
		}

		componentDidMount() {
			// this function is the equivalent to "window.onLoad"
			// it only run once on the entire application lifetime
			// you should do your ajax requests here
			
			fetch("https://assets.breatheco.de/apis/fake/contact/agenda/downtown_viii")
				.then(response => response.json())
				.then(data => {
					let { store } = this.state;
					store.contacts = data;
					this.setState({ store });
				})

				.catch(function(err) {
					
				});
		}

		render() {
			return (
				<Context.Provider value={this.state}>
					<PassedComponent {...this.props} />
				</Context.Provider>
			);
		}
	}
	return StoreWrapper;
};

export default Store;
