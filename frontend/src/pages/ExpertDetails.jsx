import { useEffect, useState } from "react";
import axios from "axios";
import BookingForm from "./BookingForm";

export default function ExpertDetails({ expertId }) {

  const [expert, setExpert] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/experts/${expertId}`)
      .then(res => setExpert(res.data));
  }, [expertId]);

  if (!expert) return <h3>Loading...</h3>;

  return (
    <div>
      <h2>Expert Details</h2>

      <p><b>Name:</b> {expert.name}</p>
      <p><b>Category:</b> {expert.category}</p>
      <p><b>Experience:</b> {expert.experience} Years</p>
      <p><b>Rating:</b> {expert.rating}</p>

      <BookingForm expertId={expert._id} />
    </div>
  );
}