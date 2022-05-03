import {ThemeContextConsumer} from "../themeContext"
import {UserContextConsumer} from '../userContext'

function Header(props) {
    return (
        <ThemeContextConsumer>
            {context => (
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
            )}
        </ThemeContextConsumer>
    )    
}

export default Header
