import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class Chart extends Component {
  state = {
    chartData: this.props.chartData
  };

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right',
    location: 'City'
  }

  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: 'Largest cities in ' + this.props.location,
              fontSize: 20
            },
            legend: {
              display:this.props.displayLegend,
              position: this.props.legendPosition,
              labels: {
                fontColor: 'black'
              }
            },
          }}
        />
        <Pie
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: 'Largest cities in ' + this.props.location,
              fontSize: 20
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
              labels: {
                fontColor: 'black'
              }
            },
          }}
        />
        <Line
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: 'Largest cities in ' + this.props.location,
              fontSize: 20
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
              labels: {
                fontColor: 'black'
              }
            },
          }}
        />
      </div>
    );
  }
}

export default Chart;