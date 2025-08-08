import { useLocation } from "react-router-dom";

export default function Confirmation() {
  const location = useLocation();
  const name = location.state?.name || "Guest";

  return (
    <div>
      <h1>Booking Confirmed</h1>
      <p>Thank you, {name}. We’ll see you soon!</p>
    </div>
  );
}
