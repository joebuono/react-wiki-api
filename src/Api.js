import React, { Component } from 'react';
import WikiForm from './WikiForm';

class App extends Component {
  state = {
    data: []
  }

  // componentDidMount() {
  //   const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Dogs&format=json&origin=*';

  //   fetch(url)
  //     .then(result => result.json())
  //     .then(result => {
  //       this.setState({
  //         data: result
  //       })
  //     })
  // }

  handleSubmit = (search) => {
    console.log('hey', search);
    const url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${search}&format=json&origin=*`;

    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          data: result
        })
      })
  }

  render() {
    let {data} = this.state;

    if (data.length) {
      data = data[1];
    }

    const result = data.map((entry, index) => {
      return <li key={index}>{entry}</li>
    })

    return <div><WikiForm handleSubmit={this.handleSubmit} />
            <ul>{result}</ul>
           </div>
  }
}


export default App;