import React from 'react';
import ReactDOM from 'react-dom';
import Particles from 'react-particles-js';
import moment from 'moment';

import './styles.css';

const params = {
  particles: {
    number: {
      value: 170
    },
    size: {
      value: 4
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'repulse'
      }
    }
  }
};

function App() {
  return (
    <>
      <Header />
      <Particles className="particles" params={params} />
    </>
  );
}

const end = moment('2019-03-07 02:00:00', 'YYYY-MM-DD kk:mm:ss');

class Header extends React.Component {
  state = {
    timer: moment(end.diff(moment())).format('HH:mm:ss')
  };

  componentDidMount() {
    const intervalId = setInterval(this.timer, 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  timer = () => {
    this.setState(prevState => ({
      timer: moment(end.diff(moment())).format('HH:mm:ss')
    }));
  };
  //   const end =
  //   end.tz('America/Los_Angeles').format('ha z');
  render() {
    return (
      <div className="flex-container">
        <div className="header">
          <h2>{this.state.timer}</h2>
          <h4>WEB17 React Hooks Workshop!</h4>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
