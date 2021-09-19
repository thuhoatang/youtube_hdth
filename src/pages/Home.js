import React, { Component } from 'react';
import Header from '../components/header/Header';

class Home extends Component {
  handleClickPage = () => {
    console.log('click page');
  };

  render() {
    return (
      <div className="Home" onClick={this.handleClickPage}>
        <Header page="Home" numbers={[3, 6]} />
      </div>
    );
  }
}

export default Home;
