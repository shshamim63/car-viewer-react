import React from 'react';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
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
    const { email, password, passwordConfirmation } = this.state;
    return (
      <div>
        <div>
          <h2>Create Account</h2>
          <form onSubmit={e => this.handleSubmit(e)}>
            <div className="form-group">
              <label htmlFor="email">
                Your email
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={e => this.handleChange(e)}
                  required
                />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="password">
                Your password
                <input
                  id="password"
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={password}
                  onChange={e => this.handleChange(e)}
                  minLength="6"
                  required
                />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="password-confirmation">
                Confirm Password
                <input
                  id="password-confirmation"
                  type="password"
                  name="password-confirmation"
                  className="form-control"
                  placeholder="Enter your password again"
                  value={passwordConfirmation}
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

export default Registration;
