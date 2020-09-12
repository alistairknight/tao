import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: 'Loading'
    };
  }

  componentDidMount() {
    fetch('api/pokedex')
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: 'Something went wrong!' };
          });
        }
        return response.json();
      })
      .then(data => {
        this.setState(() => {
          return {
            data,
            loaded: true
          };
        });
      });
  }

  render() {
    return (
      <div style={{ textAlign: 'center' /* This needs moving to an extrnal style sheet... */ }}>
        {this.state.data.map(pokemon => {
          return (
            <div key={ pokemon.id } style={{ display: 'inline-block', width: '30%', height: '250px', margin: '10px', padding: '10px', fontFamily: 'arial', border: '1px solid black', borderRadius: '10px', textAlign: 'center' }}>
              <img src={ pokemon.Image } />
              <p>{ pokemon.Name }</p>
              <ul style={{ textAlign: 'left' }}>
                  {pokemon.Types.map(type => {
                      return (<li>{ type.Name }</li>);
                  })}
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;

const container = document.getElementById('app');
render(<App />, container);