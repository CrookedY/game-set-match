import React, { Component } from 'react';
import './App.css'
// import './Feedback.css'

class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleSubmit(event) {
        event.preventDefault();
        document.querySelector('.feedback').style.visibility = 'hidden'
      

        var thanksMsg = document.getElementById('thanksMsg')
        thanksMsg.innerHTML = "Thank you for your feedback!"

      }
    render() {
       return (
        <div class="feedbackDiv">
            <p id="thanksMsg"></p>
            <form name="feedbackForm" onSubmit={this.handleSubmit} className="feedback">
            <p>
            First Name:
            <input type="text" id="firstName" name="firstName" placeholder="Your name" required/>
            </p>
            <p>
            Last Name:
            <input type="text" id="lastName" name="lastName" placeholder="Your last name.." required/>
            </p>
            <p>
            Your feedback:
            <textarea id="feedbackBox" name="feedback" placeholder="Your feedback..." required></textarea>
            </p>
            <p>
            <input type="submit" value="Submit" id="submitFeedback"/>
            </p>
            </form>
        </div>
        );
    }
}

export default Feedback;