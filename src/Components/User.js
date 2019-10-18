import React from 'react';

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }
    }
    onChange(e) {
        this.setState({
            username: e.target.value,
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="What is your username" onChange={this.onChange} />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default User;