import React from 'react';

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder="What is your username" />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default User;