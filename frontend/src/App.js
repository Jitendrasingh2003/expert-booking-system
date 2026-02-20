import "./App.css";
import ExpertsList from "./pages/ExpertsList";
import BookingForm from "./pages/BookingForm";
import MyBookings from "./pages/MyBookings";

function App() {
  return (
    <div className="container">
      <ExpertsList />
      <BookingForm expertId="123" />
      <MyBookings />
    </div>
  );
}

export default App;