 
import React from 'react' 
import  { useState } from 'react';

const Tickets = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleSeatSelect = seatId => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(id => id !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };




  const handleBooking = () => {
    // Simulating an API call to confirm booking
    setTimeout(() => {
      setBookingConfirmed(true);
    }, 1000); // Simulating a delay for API call

    // Reset selected seats after booking
    setSelectedSeats([]);
  };

  const resetBooking = () => {
    setBookingConfirmed(false);
  };

  return (
    <div className="booking-form">
      {!bookingConfirmed ? 
        <>
          <h2>Book Your Seats</h2>
          <div className="seat-map">
            {/* Your SeatMap component or rendering logic */}
            {/* For brevity, assume SeatMap is used as before */}
          </div>
       <button onClick={handleBooking}>Book Tickets</button>
         
      </>
       : (
        <>
          <h2>Booking Confirmed!</h2>
          <div className="ticket-details">
            <p>Thank you for booking. Your ticket details:</p>
            <ul>
              {selectedSeats.map(seatId => (
                <li key={seatId}>Seat {seatId}</li>
              ))}
            </ul>
            


<button onClick={resetBooking}>Book More Tickets</button>
          </div>
        </>
     )}
    </div>
  );
}; 

export default Tickets;