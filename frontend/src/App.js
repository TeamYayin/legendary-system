import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import BookingForm from './components/BookingForm';
import { useState } from 'react';

function App() {
  const [calendarDate, setCalendarDate] = useState('');
  // setCalendarDate = (date) => {
  //   this.setState({ calendarDate: date });
  // };
  // const setCalendarDate = this.setCalendarDate;
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/booking"
            element={
              <BookingForm
                date={12 / 8 / 2025}
                updateCalender={setCalendarDate}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
