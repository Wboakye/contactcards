import PropTypes from 'prop-types';



const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			//(Arrow) Functions that update the Store
            // Remember to use the scope: scope.state.store & scope.setState()
            
            deleteItem: i => {
					fetch("https://assets.breatheco.de/apis/fake/contact/"+ i, {
				method: 'DELETE'
				}).then(res => res.json())
				.then(response => console.log('Success:', JSON.stringify(response)))
				.then(fetch("https://assets.breatheco.de/apis/fake/contact/agenda/downtown_viii")
				.then(response => response.json())
				.then(data => {
					let { store } = this.state;
					store.contacts = data;
					this.setState({ store });
				})

				.catch(function(err) {
					
				}))
				.then(history.push('/'))
				.catch(error => console.error('Error:', error));
				}
						
						//props.history
					}
					
				
		};
	};


getState.propTypes = {
		history: PropTypes.object,
		onDelete: PropTypes.func
};

export default getState;


