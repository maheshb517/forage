import React, { Component } from 'react';
import BpkButton from 'bpk-component-button';
import BpkText from 'bpk-component-text';
import BpkCalendar, { CALENDAR_SELECTION_TYPE } from 'bpk-component-calendar';
import 'bpk-component-calendar/dist/bpk-component-calendar.css';
import BpkHeading from 'bpk-component-heading';
import { withRtlSupport } from 'bpk-component-icon';
import FlightIcon from 'bpk-component-icon/sm/flight';
import STYLES from './App.scss';

const AlignedFlightIcon = withRtlSupport(FlightIcon);

const c = className => STYLES[className] || '';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectionConfiguration: {
        type: CALENDAR_SELECTION_TYPE.single,
        date: null,
      },
    };
  }

  handleDateSelect = (date) => {
    this.setState({
      selectionConfiguration: {
        type: CALENDAR_SELECTION_TYPE.single,
        date: date,
      },
    });
  };

  render() {
    return (
      <div className={c('App')}>
        <header className={c('App__header')}>
          <div className={c('App__header-inner')}>
            <BpkHeading level="h1">Flight Schedule</BpkHeading>
            <AlignedFlightIcon className={c('App__icon')} />
          </div>
        </header>
        <main className={c('App__main')}>
          <BpkCalendar
            id="calendar"
            onDateSelect={this.handleDateSelect}
            selectionConfiguration={this.state.selectionConfiguration}
          />
          <BpkButton onClick={() => alert('Continuing...')}>Continue</BpkButton>
        </main>
      </div>
    );
  }
}

export default App;