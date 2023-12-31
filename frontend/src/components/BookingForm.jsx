import React, { Fragment, useState } from 'react';
import Datetime from 'react-datetime';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Button from './Button';
import {
  formatTime,
  startTimeSelectOptions,
  endTimeSelectOptions,
} from '../helpers/bookingForm';
import './bookingForm.css';
import BookingTable from './BookingTable.jsx';

function BookingForm({
  //   onMakeBooking,
  //   user,
  //   roomData,
  date,
  updateCalendar,
  //   onShowBooking,
  //   disableRecurring,
  onToggleRecurring,
}) {
  // Disable sunday (day 0) on the calendar as an booking option
  const valid = function (current) {
    return current.day() !== 0;
  };
  const [selectedDate, setSelectedDate] = useState(null);

  const handleEndDate = (dateArray) => {
    let recurringEndDate = [];
    dateArray.forEach((item) => {
      recurringEndDate.push(parseInt(item));
    });
    return recurringEndDate;
  };

  // Format the recurring data into an array
  const handleRecurringData = (type, date) => {
    let recurringData = [];
    if (type !== 'none') {
      recurringData = [date, type];
      recurringData[0][1] = recurringData[0][1] - 1;
    } else {
      recurringData = [];
    }
    return recurringData;
  };

  // Array used for handleData function
  let dateArray = [];
  const handleDateClick = (selectedMoment) => {
    setSelectedDate(selectedMoment);
  };

  const renderDay = (props, currentDate, selectedDate) => {
    // Customize the rendering of each day
    const isSelected = selectedDate && currentDate.isSame(selectedDate, 'day');
    return (
      <td {...props} onClick={() => handleDateClick(currentDate)}>
        <span className={isSelected ? 'highlighted' : ''}>
          {currentDate.date()}
        </span>
      </td>
    );
  };

  // Update the current date in the application state
  const handleDate = (event) => {
    updateCalendar(moment(event)._i);
  };
  onToggleRecurring = (value) => {
    let disableRecurring;
    if (value === 'none') {
      disableRecurring = true;
    } else {
      disableRecurring = false;
    }
    this.setState({ disableRecurring: disableRecurring });
  };

  return (
    <Fragment>
      <div className="header__page">
        <h2 className="header__heading header__heading--sub">Level 1 | 104</h2>
      </div>
      <form className="form__grid form--booking justify-center">
        <div className="content__calendar mx-2 px-5 border-1 border-spacing-3 bg-cyan-100">
          <Datetime
            dateFormat="YYYY-MM-DD"
            timeFormat={false}
            input={false}
            utc={true}
            isValidDate={valid}
            renderDay={(props, currentDate) =>
              renderDay(props, moment(currentDate), selectedDate)
            }
            value={selectedDate}
            // onChange={(event) => handleDate(event._d)}
            className="px-3 cursor-pointer"
          />
        </div>
        <div className="content__table">
          <BookingTable selectedDate={selectedDate} />
        </div>
        <div className="content__form">
          <h3 className="header__heading header__heading--column">
            Make a Booking
          </h3>
          <div className="form__group form__group--margin-top">
            <label className="form__label form__label--booking">
              {'Start time'}
              <select
                name="startTime"
                className="form__input form__input--select"
              >
                {startTimeSelectOptions.map((option) => {
                  return option;
                })}
              </select>
            </label>
          </div>
          <div className="form__group">
            <label className="form__label form__label--booking">
              {'End time'}
              <select
                name="endTime"
                className="form__input form__input--select"
              >
                {endTimeSelectOptions.map((option) => {
                  return option;
                })}
              </select>
            </label>
          </div>
          <div className="form__group">
            <label className="form__label form__label--booking">
              {'Business Unit'}
              <select
                name="business"
                defaultValue="Business Unit 1"
                className="form__input form__input--select"
              >
                <option value="Business Unit 1">Business Unit 1</option>
                <option value="Business Unit 2">Business Unit 2</option>
                <option value="Business Unit 3">Business Unit 3</option>
                <option value="Business Unit 4">Business Unit 4</option>
                <option value="Business Unit 5">Business Unit 5</option>
              </select>
            </label>
          </div>
          <div className="form__group">
            <label className="form__label form__label--booking">
              {'Recurring'}
              <span>
                <select
                  name="recurring"
                  defaultValue="none"
                  onChange={(event) => onToggleRecurring(event.target.value)}
                  className="form__input form__input--select"
                >
                  <option value="none">Non recurring</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </span>
            </label>
          </div>
          <label className="form__label form__label--booking">
            {'Recurring end date'}
            <input
              type="date"
              name="recurringEndDate"
              disabled={true}
              className="form__input--date"
            />
          </label>
          <div className="form__group">
            <label className="form__label form__label--booking">
              {'Purpose'}
              <select
                name="purpose"
                defaultValue="Scheduled class"
                className="form__input form__input--select"
              >
                <option value="Scheduled Class">Scheduled class</option>
                <option value="Special Event">Special event</option>
                <option value="Ad-hoc Event">Ad-hoc event</option>
              </select>
            </label>
          </div>
          <div className="form__group">
            <label className="form__label form__label--booking">
              {'Description'}
              <textarea
                type="textarea"
                name="description"
                className="form__input--textarea"
              ></textarea>
            </label>
          </div>
          <div className="form__group--button">
            <Button className="button button__form--booking" text={'Submit'} />
            <Link
              to="/bookings"
              className="button button--alternative button__form--booking"
            >
              View availability
            </Link>
          </div>
        </div>
      </form>
    </Fragment>
  );
}

export default BookingForm;
