import React from 'react';
export interface HelloProps {
  message: String
}

export interface HelloState {

}

class Hello extends React.Component<HelloProps, HelloState> {
  render() {
    return (
      <h2>{this.props.message}</h2>
      );
  }
}

export default Hello;