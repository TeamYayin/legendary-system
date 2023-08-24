import React, { useState } from 'react';
import moment from 'moment';
import './BookingFormTable.css';
import Column from './Column';

const BookingTable = (props) => {
  //   let available = true;
  const [available, setAvailable] = useState(true);
  return (
    <table className="table--booking">
      <thead>
        <tr className="table__row table__row--header">
          <th
            colSpan="2"
            className="table__cell--header table__cell--level header__heading header__heading--column"
          >
            {moment(props.selectedDate).format('MMMM Do YYYY')}
          </th>
        </tr>
        <tr scope="col" className="table__row table__row--subheader">
          <th className="table__cell--header">Time</th>
          <th className="table__cell--header">Bookings</th>
        </tr>
      </thead>
      <tbody className="table__body--booking">
        <tr className="table__row--full">
          <th scope="row">8am</th>
          <Column available={available} />
        </tr>
        <tr className="table__row--full">
          <th scope="row">9am</th>
          <Column available={!available} />
        </tr>
        <tr className="table__row--full">
          <th scope="row">10am</th>
          <Column available={available} />
        </tr>
        <tr className="table__row--full">
          <th scope="row">11am</th>
          <Column available={available} />
        </tr>
        <tr className="table__row--full">
          <th scope="row">12pm</th>
          <Column available={available} />
        </tr>
        <tr className="table__row--full">
          <th scope="row">1pm</th>
          <Column available={available} />
        </tr>
        <tr className="table__row--full">
          <th scope="row">2pm</th>
          <Column available={available} />
        </tr>
        <tr className="table__row--full">
          <th scope="row">3pm</th>
          <Column available={!available} />
        </tr>
        <tr className="table__row--full">
          <th scope="row">4pm</th>
          <Column available={available} />
        </tr>
        <tr className="table__row--full">
          <th scope="row">5pm</th>
          <Column available={!available} />
        </tr>
      </tbody>
    </table>
  );
};

export default BookingTable;
