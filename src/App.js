import React, { Component } from 'react';
import UsernameForm from './Components/UsernameForm';

class App extends Component {
    render () {
        return (
            <div>
                <UsernameForm onSubmit={username => alert(username)}/>
            </div>
        );
    }
}

export default App;
