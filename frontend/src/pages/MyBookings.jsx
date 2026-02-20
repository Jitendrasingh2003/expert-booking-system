import { useState } from "react";
import axios from "axios";

export default function MyBookings() {

  const [email, setEmail] = useState("");
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    const res = await axios.get(
      `http://localhost:5000/api/bookings/email/${email}`
    );
    setBookings(res.data);
  };

  return (
    <div>
      <h2>My Bookings</h2>

      <input
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={fetchBookings}>Search</button>

      {bookings.map((b) => (
        <div key={b._id}>
          <p>Name: {b.name}</p>
          <p>Date: {b.date}</p>
          <p>Time: {b.timeSlot}</p>
          <p>Status: {b.status}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}