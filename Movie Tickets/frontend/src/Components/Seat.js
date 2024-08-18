import React, { useState } from 'react';
// Seat component

const Seat = ({ id, selected, onSelect }) => {
  const handleClick = () => {
    onSelect(id);
  };

  return (
    <div
      className={`seat ${selected ? 'selected' : ''}`}
      onClick={handleClick}
    >
      {id}
    </div>
  );
};

// SeatMap component to display all seats
const SeatMap = ({ numSeats, selectedSeats, onSelectSeat }) => {
  const seats = Array.from({ length: numSeats }, (_, index) => index + 1);

  return (
    <div className="seat-map">
      {seats.map(seatId => (
        <Seat
          key={seatId}
          id={seatId}
          selected={selectedSeats.includes(seatId)}
          onSelect={onSelectSeat}
        />
      ))}
    </div>
  );
};

// BookingForm component to handle booking logic
const BookingForm = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelect = seatId => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(id => id !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const handleBooking = () => {
    // Here you can implement booking logic, e.g., send a request to a server
    console.log("Selected Seats:", selectedSeats);
    // Reset selected seats after booking
    setSelectedSeats([]);
  };

  return (
    <div className="booking-form">
      <h2 id='bookyourseat'>Book Your Seats</h2>
      <SeatMap
        numSeats={80}  // Change this number as per your requirement
        selectedSeats={selectedSeats}
        onSelectSeat={handleSeatSelect}
      />
      
<button id="booktickets" onClick={handleBooking}>Book Tickets</button>

  </div>
  );
};

// Main App component
const App = () => {
  return (
    <div className="App">
      <BookingForm />
    </div>
  );
};

export default App;