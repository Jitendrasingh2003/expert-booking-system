import { useState, useEffect } from "react";
import axios from "axios";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

export default function BookingForm({ expertId }) {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    timeSlot: ""
  });

  const [disabledSlots, setDisabledSlots] = useState([]);

  useEffect(() => {
    socket.on("slotBooked", (data) => {
      setDisabledSlots((prev) => [...prev, data.timeSlot]);
    });

    return () => socket.off("slotBooked");
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:5000/api/bookings", {
        ...form,
        expertId
      });

      alert("Booking Successful ✅");
    } catch (error) {
      alert("Slot already booked ❌");
    }
  };

  return (
    <div>
      <h2>Book Session</h2>

      <input name="name" placeholder="Name" onChange={handleChange} />
      <br />

      <input name="email" placeholder="Email" onChange={handleChange} />
      <br />

      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <br />

      <input type="date" name="date" onChange={handleChange} />
      <br />

      <select name="timeSlot" onChange={handleChange}>
        <option value="">Select Slot</option>

        {["10AM-11AM", "11AM-12PM", "2PM-3PM"].map((slot) => (
          <option
            key={slot}
            value={slot}
            disabled={disabledSlots.includes(slot)}
          >
            {slot}
          </option>
        ))}
      </select>

      <br />

      <button onClick={handleSubmit}>Book</button>
    </div>
  );
}