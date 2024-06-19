import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', this.state);
    // Clear form after submission
    this.setState({
      name: '',
      email: '',
      message: ''
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Sorting Visualizer</a>
          <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/algorithm">Algorithms</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/visualizer">Visualizer</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container">
          <h1 className="mt-5">Contact Us</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="4"
                value={this.state.message}
                onChange={this.handleInputChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>

        <footer className="bg-light text-center text-lg-start">
          <div className="text-center p-3">
            © 2024 Sorting Visualizer | 
            <a href="https://www.linkedin.com/in/karandeep-kamboj-32308a231/">Karandeep Kamboj</a>   
          </div>
        </footer>
      </div>
    );
  }
}

export default ContactPage;
