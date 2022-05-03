import './App.css';
import Header from "./components/Header"
import Button from "./components/Button"
import { UserContextConsumer } from './userContext';
import { useState } from 'react';

function App() {

  const [formData, setFormData] = useState({
    username: ''
  })

  function handleChange(event) {
    const {name, value} = event.target

    setFormData(prevData => (
      {
        ...prevData,
        [name]: value
      }
    ))
  }

  return (
    <div>
        <Header />
        <UserContextConsumer>
            {userContext => (
              <>
                <p className="main">No new notifications, {userContext.username}! 🎉</p>

                <input
                    type="text"
                    name="username"
                    placeholder="New username"
                    value={formData.username}
                    onChange={handleChange}
                />
                <button onClick={() => userContext.updateUserName(formData.username)}>Change Username</button>
              </>
            )}
        </UserContextConsumer>

        <Button />
    </div>
  );
}

export default App;
