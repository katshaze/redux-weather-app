import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({term: event.target.value})
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term:''});
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favourite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group=btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

// passing null first coz would usually be state and  always need two arguments so pass in null.
export default connect(null, mapDispatchToProps)(SearchBar);


// when we call this.onInputChange in the onChange property of input, the value of 'this' doesn't stay as meaning the input bar (i.e. the component), it becomes bound to some other mystery context. when we hand off a callback function like this one, and the callback references 'this', 'this' is going to have the incorrect context. So when we then try to setState in the function and reference 'this', it no longer means the component, so throws an error. Could get around this by using a fat arrow function within the property onChange, rather than just calling a function defined elsewhere. Other option is to 'bind' 'this' in the contstructor.
