import {ThemeContext} from "../themeContext"
import {UserContextConsumer} from '../userContext'
import {useContext} from 'react'

function Header(props) {

    const context = useContext(ThemeContext)

    return (
        <header className={`${context.theme}-theme`}>
            <h2>{context.theme === "light" ? "Light" : "Dark"} Theme</h2>

            <UserContextConsumer>
                {
                    userContext => (
                        <p>Welcome, {userContext.username}</p>
                    )
                }
            </UserContextConsumer>
        </header>
    )    
}

export default Header
