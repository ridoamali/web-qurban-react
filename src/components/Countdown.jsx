import React, { Component } from "react";

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: {
        days: 66,
        hours: 24,
        minutes: 30,
        seconds: 30,
      },
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const time = this.state.time;
      if (time.days === 0 && time.hours === 0 && time.minutes === 0 && time.seconds === 0) {
        clearInterval(this.interval);
      } else {
        if (time.seconds === 0) {
          time.minutes--;
          time.seconds = 59;
        } else {
          time.seconds--;
        }
        if (time.minutes === 0 && time.seconds === 0) {
          time.hours--;
          time.minutes = 59;
          time.seconds = 59;
        }
        if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) {
          time.days--;
          time.hours = 23;
          time.minutes = 59;
          time.seconds = 59;
        }
        this.setState({ time });
      }
    }, 1000);
  }

  render() {
    const { days, hours, minutes, seconds } = this.state.time;
    return (
      <div>
        <p>
          <span>Idul Adha :</span> {days} Hari, {hours} Jam, {minutes} Menit, {seconds} Detik
        </p>
      </div>
    );
  }
}

export default Countdown;
