import React from 'react'
import Life from './life'
import './app.css'
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';

const styles = {
  grid: {
    width: '60%',
  },
};

class App extends React.Component {
  state = {
    selectedDate: new Date('2006-05-15T00:00:00'),
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

  render() {
    const { classes } = this.props;
    const { selectedDate } = this.state;

    const data = []
    const yearBt = selectedDate.getFullYear()
    const mybt = selectedDate
    const yearNow = yearBt + 65;
    const week = 1000 * 60 * 60 *24 * 7;
    const now = new Date()

    for(let i = yearBt; i <= yearNow; i++) {
      let line = {
        name: i,
        els: []
      }
      let ny = new Date(i, 0, 1).getTime();

      for(let c = 1; c <= 52; c++) {
        ny = ny + week;
        line.els.push(ny <= now.getTime() && ny >= mybt.getTime())
      } 
      data.push(line)
    }

    return (
      <div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container className={classes.grid} justify="space-around">
            <DatePicker
              margin="normal"
              label="Birthday"
              value={selectedDate}
              format="MM/dd/yyyy"
              onChange={this.handleDateChange}
            />
          </Grid>
        </MuiPickersUtilsProvider>
        <Life dataLine={data} />
      </div>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
