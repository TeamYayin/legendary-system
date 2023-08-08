import React from 'react';
import moment from 'moment';
import ColumnCell from './ColumnCell';

// onShowBooking = (booking) => {
//   const selectedBooking = booking;
//   console.log('selectedBooking', selectedBooking);
//   this.setState(() => ({ selectedBooking }));
// };
const BookingFormTable = (props) => (
  <table className="table--booking">
    <thead>
      <tr className="table__row table__row--header">
        <th
          colSpan="2"
          className="table__cell--header table__cell--level header__heading header__heading--column"
        >
          {moment(props.date).format('MMMM Do YYYY')}
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
        <ColumnCell
          date={props.date}
          bookings={'bookings'}
          hour={8}
          onShowBooking={'on Show Booking'}
        />
      </tr>
      <tr className="table__row--full">
        <th scope="row">9am</th>
        <ColumnCell
          date={props.date}
          bookings={'bookings'}
          hour={9}
          onShowBooking={'Show Booking'}
        />
      </tr>
      <tr className="table__row--full">
        <th scope="row">10am</th>
        <ColumnCell
          date={props.date}
          bookings={'bookings'}
          hour={10}
          onShowBooking={'Show Booking'}
        />
      </tr>
      <tr className="table__row--full">
        <th scope="row">11am</th>
        <ColumnCell
          date={props.date}
          bookings={'bookings'}
          hour={11}
          onShowBooking={'Show Booking'}
        />
      </tr>
      <tr className="table__row--full">
        <th scope="row">12pm</th>
        <ColumnCell
          date={props.date}
          bookings={'bookings'}
          hour={12}
          onShowBooking={'Show Booking'}
        />
      </tr>
      <tr className="table__row--full">
        <th scope="row">1pm</th>
        <ColumnCell
          date={props.date}
          bookings={'bookings'}
          hour={13}
          onShowBooking={'Show Booking'}
        />
      </tr>
      <tr className="table__row--full">
        <th scope="row">2pm</th>
        <ColumnCell
          date={props.date}
          bookings={'bookings'}
          hour={14}
          onShowBooking={'Show Booking'}
        />
      </tr>
      <tr className="table__row--full">
        <th scope="row">3pm</th>
        <ColumnCell
          date={props.date}
          bookings={'bookings'}
          hour={15}
          onShowBooking={'Show Booking'}
        />
      </tr>
      <tr className="table__row--full">
        <th scope="row">4pm</th>
        <ColumnCell
          date={props.date}
          bookings={'bookings'}
          hour={16}
          onShowBooking={'Show Booking'}
        />
      </tr>
      <tr className="table__row--full">
        <th scope="row">5pm</th>
        <ColumnCell
          date={props.date}
          bookings={'bookings'}
          hour={17}
          onShowBooking={'Show Booking'}
        />
      </tr>
      <tr className="table__row--full">
        <th scope="row">6pm</th>
        <ColumnCell
          date={props.date}
          bookings={'bookings'}
          hour={18}
          onShowBooking={'Show Booking'}
        />
      </tr>
      <tr className="table__row--full">
        <th scope="row">7pm</th>
        <ColumnCell
          date={props.date}
          bookings={'bookings'}
          hour={19}
          onShowBooking={'Show Booking'}
        />
      </tr>
      <tr className="table__row--full">
        <th scope="row">8pm</th>
        <ColumnCell
          date={props.date}
          bookings={'bookings'}
          hour={20}
          onShowBooking={'Show Booking'}
        />
      </tr>
    </tbody>
  </table>
);

export default BookingFormTable;
