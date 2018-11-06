import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';

class App extends Component {
  state = {
    chartData: {}
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData() {
    this.setState({
      chartData: {
        labels: ["Seoul", "Busan", "Daegu", "Gwangju", "Ulsan"],
        datasets: [{
          label: 'Population',
          data: [
            100000000,
            54049543,
            4534534,
            4353454,
            7867876,
          ],
          backgroundColor: ['whitesmoke', 'lightblue', 'yellow', 'pink', 'plum'],
          borderWidth: 1,
          borderColor: 'lightgray',
          hoverBorderWidth: 3,
          hoverBorderColor: 'gray'
        }]
      }

    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
            <Chart chartData={this.state.chartData} legendPosition='bottom' location='South Korea' />
      </div>
    );
  }
}

export default App;
