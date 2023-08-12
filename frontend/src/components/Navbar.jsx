import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  // { signOut, loadMyBookings, user }
  return (
    <nav className="flex justify-end p-5 bg-cyan-800 text-white">
      <div className="flex">
        <div>
          <Link to="/booking" className="p-2 font-bold text-xl">
            Book a Room
          </Link>
        </div>
        <div>
          <Link to="/" className="p-2 font-bold text-xl">
            My Bookings
          </Link>
        </div>
        <div>
          <a className="p-2 font-bold text-xl">Logout</a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
