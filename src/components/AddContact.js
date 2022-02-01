import React from "react";
import { Link } from "react-router-dom";

class AddContact extends React.Component {
  state = { name: "", email: "" };

  submitHandler = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      return alert("Semua field harus diisi!");
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
    this.props.history.push(`/`);
  };
  render() {
    return (
      <div className="ui main " style={{ marginTop: "20px" }}>
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.submitHandler}>
          <div className="field">
            <label>Name</label>
            <input type="text" name="name" placeholder="name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
          </div>
          <div className="field">
            <label>Name</label>
            <input type="email" name="email" placeholder="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
          </div>
          <button className="ui button blue">Submit</button>
          <Link to={`/`} className="ui button red">
            Kembali
          </Link>
        </form>
      </div>
    );
  }
}

export default AddContact;
