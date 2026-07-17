import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import About from "./components/About";
import Rooms from "./components/Rooms";
import Amenities from "./components/Amenities";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import BookingModal from "./components/BookingModal";
import { useState } from "react";
import Footer from "./components/Footer";

const App = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
  return (
    <>
      <Navbar setBookingOpen={setBookingOpen} />
      <Hero />
      <Highlights />
      <About />
      <Rooms />
      <Amenities />
      <Gallery />
      <Contact />
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
      <Footer/>
    </>
  );
};

export default App;
