import React from 'react';
import { useFingguAI } from '../hooks/useFingguAI';

export class FingguCodeEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { code: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ code: event.target.value });
  }

  render() {
    const aiSuggestions = useFingguAI(this.state.code);
    return (
      <div className='finggu-code-editor'>
        <textarea value={this.state.code} onChange={this.handleChange} />
        <div className='finggu-suggestions'>{aiSuggestions}</div>
      </div>
    );
  }
}