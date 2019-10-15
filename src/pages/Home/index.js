import React, { Component } from 'react';
import Barra from '../../components/Navbar';
import Listagem from '../../components/Listagem';
// import { Container } from './styles';
import api from '../../services/api';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.user = localStorage.getItem('username');
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    api.get('todos').then(data => {
      this.setState({ data: data.data })
      console.log(data);
    })
  }

  render() {
    return (
      <React.Fragment>
        <Barra username={this.user} />
        <div style={{
          height: '100%',
          padding: '100px'
        }}>
          <Listagem data={this.state.data} />
        </div>
      </React.Fragment>
    );
  }
}
