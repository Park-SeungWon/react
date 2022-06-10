import React, { PureComponent } from "react";
import propTypes from "prop-types";

class Start extends PureComponent {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const {onChange } = this.props;
    if (onChange) {
      onChange(e.target.id, e.target.value);
    }
    
  }
  // componentDidMount() {
  //   if (this.props.autoFocus) {
  //     this.ref.focus();
  //   }
  // }
  setRef(ref) {
    this.ref = ref;
  }

  render() {
    const { errorMessage, label, name, value, type, onFocus, major} =
      this.props;

    return (
      <label>
        {label}
        <input
          ref={this.ref}
          id={name}
          onFocus={onFocus}
          defaultValue={value}
          onChange={this.handleChange}
          type={type}
        />
        <select
          ref={this.ref}
          id={major}
          onFocus={onFocus}
          onChange={this.handleChange}
          type={type}
        >
          <option value="Computer">Computer</option>
          <option value="Education">Education</option>
        </select>
        <div>
          {errorMessage && <span className="error">{errorMessage}</span>}
        </div>
      </label>
    );
  }
}

Start.propTypes = {
  type: propTypes.oneOf(["text", "number", "price"]),
  name: propTypes.string.isRequired,
  value: propTypes.oneOfType([propTypes.number, propTypes.string]),
  errorMessage: propTypes.string,
  label: propTypes.string,
  autoFocus: propTypes.bool,
  onChange: propTypes.func,
  onFocus: propTypes.func,
  
};
Start.defaultProps = {
  onChange: () => {},
  onFocus: () => {},
  autoFocus: false,
  type: "text",

};

export default Start;
