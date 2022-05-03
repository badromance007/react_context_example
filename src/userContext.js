import React, {Component} from "react"
const {Provider, Consumer} = React.createContext()

class UserContextProvider extends Component {
    state = {
        username: "Johny Depp"
    }

    updateUserName = (username) => {
        this.setState({username: username})
    }
    
    render() {
        return (
            <Provider value={{
                username: this.state.username,
                updateUserName: this.updateUserName
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export {UserContextProvider, Consumer as UserContextConsumer}
