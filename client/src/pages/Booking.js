import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Booking() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirmation", { state: { name } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Book Your Appointment</h1>
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button type="submit">Confirm Booking</button>
    </form>
  );
}
