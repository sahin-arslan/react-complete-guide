import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  render() {
    return (
      <div className="baseForm">
        {/* common form fields and logic */}
        <form onSubmit={this.props.onSubmit}>
          <label>Name </label>
          <input
            type="text"
            name="name"
            value={this.props.name}
            onChange={this.props.onChange}
            placeholder="Main Form name"
          />

          <label>email</label>
          <input
            type="text"
            name="email"
            value={this.props.email}
            onChange={this.props.onChange}
            placeholder="Main Form email"
          />
          {/* specific form fields */}
          {this.props.children}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

class LoginForm extends Form {
  render() {
    return (
      <div className="loginForm">
        <h2>Login Form</h2>
        {super.render()}
        <br />
        <label>Password </label>
        <input
          type="password"
          name="password"
          value={this.props.password}
          placeholder="LoginForm Password"
          onChange={this.props.onChange}
        />
        {/* common form fields and logic */}
      </div>
    );
  }
}

class ContactForm extends Form {
  render() {
    return (
      <div className="contactForm">
        <h2>Contact Form</h2>
        {/* specific form fields */}

        {/* common form fields and logic */}
        {super.render()}
        <br />
        <label>Subject</label>
        <input
          type="text"
          name="subject"
          value={this.props.subject}
          placeholder="ContactForm text"
          onChange={this.props.onChange}
        />

        <label>Message</label>
        <textarea
          name="message"
          value={this.props.message}
          placeholder="ContactForm message"
          onChange={this.props.onChange}
        ></textarea>
      </div>
    );
  }
}

export { LoginForm, ContactForm };
