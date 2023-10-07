import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ padding: "50px", textAlign: "center" }}>Brenna Clark</h1>
        <div style={{ padding: "0px" }}>
          <h3>Where to catch me...</h3>
          <i class="nes-ash"></i>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <a
              href="mailto:brennacclark@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                class="nes-icon gmail is-medium"
                alt="Gmail"
                style={{ padding: "20px" }}
              ></i>
            </a>
            <a
              href="https://www.linkedin.com/in/brennacclark/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                class="nes-icon linkedin is-medium"
                alt="LinkedIn"
                style={{ padding: "20px" }}
              ></i>
            </a>
            <a
              href="https://github.com/brennacclark"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                class="nes-icon github is-medium"
                alt="Github"
                style={{ padding: "20px" }}
              ></i>
            </a>
          </div>
        </div>

        {/* Feedback form */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            paddingTop: "40vh",
          }}
        >
          <FeedbackForm />
        </div>
      </div>
    );
  }
}

class FeedbackForm extends Component {
  state = {
    feedback: "",
    showForm: false,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`Feedback submitted: ${this.state.feedback}`);
    this.setState({ feedback: "", showForm: false });
  };

  render() {
    return (
      <div
        style={{
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {this.state.showForm && (
          <form
            onSubmit={this.handleSubmit}
            style={{
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <label>Feedback:</label>
            <textarea
              value={this.state.feedback}
              onChange={(e) => this.setState({ feedback: e.target.value })}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <input type="submit" value="Submit" />
              <button
                onClick={() =>
                  this.setState({ showForm: !this.state.showForm })
                }
              >
                Cancel
              </button>
            </div>
          </form>
        )}
        {!this.state.showForm && (
          <button
            onClick={() => this.setState({ showForm: !this.state.showForm })}
          >
            Send Feedback
          </button>
        )}
      </div>
    );
  }
}
