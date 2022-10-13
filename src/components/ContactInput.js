import React from "react";
import PropTypes from "prop-types";

class ContactInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      tag: "",
    };
    this.onNameInputHandler = this.onNameInputHandler.bind(this);
    this.onTagInputHandler = this.onTagInputHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onNameInputHandler(e) {
    this.setState(() => {
      return {
        name: e.target.value,
      };
    });
  }

  onTagInputHandler(e) {
    this.setState(() => {
      return {
        tag: e.target.value,
      };
    });
  }

  onSubmitHandler(e) {
    e.preventDefault();
    this.props.addContact(this.state);
  }

  render() {
    return (
      <form className="contact-input" onSubmit={this.onSubmitHandler}>
        <input type="text" placeholder="Nama" value={this.state.name} onChange={this.onNameInputHandler} />
        <input type="text" placeholder="Tag" value={this.state.tag} onChange={this.onTagInputHandler} />
        <button type="submit">Tambah</button>
      </form>
    );
  }
}

ContactInput.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactInput;
