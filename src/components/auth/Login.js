import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <div>
          <h2>Login with Email</h2>
          <form onSubmit={e => this.handleSubmit(e)}>
            <div className="form-group">
              <label htmlFor="email">
                Your email
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  className="form-control"
                  onChange={e => this.handleChange(e)}
                  required
                />
                <small id="emailHelp" className="form-text text-muted"> We will never share your email with anyone else.</small>
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="password">
                Your password
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={password}
                  className="form-control"
                  onChange={e => this.handleChange(e)}
                  minLength="6"
                  required
                />
              </label>
            </div>
            <input type="submit" value="Login" className="book-btn" />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
