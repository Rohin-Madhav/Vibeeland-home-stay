import React, { useState } from "react";
import { X } from "lucide-react";

const BookingModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    adults: 2,
    children: 0,
    request: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleWhatsAppBooking = () => {
    const message = `Hi Vibee Land,

I would like to check room availability.

Name: ${formData.name}
Phone: ${formData.phone}

Check In: ${formData.checkIn}
Check Out: ${formData.checkOut}

Adults: ${formData.adults}
Children: ${formData.children}

Special Request:
${formData.request}

Please share availability and pricing.`;

    window.open(
      `https://wa.me/918547878720?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <div className="vl-overlay">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Jost:wght@300;400;500&display=swap');

        .vl-overlay {
          position: fixed;
          inset: 0;
          z-index: 50;
          background: rgba(15, 26, 20, 0.55);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          font-family: 'Jost', sans-serif;
        }

        .vl-card {
          width: 100%;
          max-width: 30rem;
          max-height: 90vh;
          overflow-y: auto;
          background: #FBF8F2;
          border-radius: 4px;
          box-shadow: 0 30px 60px -15px rgba(15, 26, 20, 0.5), 0 0 0 1px rgba(201, 162, 39, 0.15);
          position: relative;
        }

        .vl-header {
          background: linear-gradient(160deg, #16301F 0%, #1B4332 100%);
          color: #F4EFE2;
          padding: 2.25rem 2rem 1.75rem;
          position: relative;
          text-align: center;
        }

        .vl-eyebrow {
          font-family: 'Jost', sans-serif;
          font-size: 0.68rem;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: #C9A227;
          font-weight: 400;
        }

        .vl-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.1rem;
          font-weight: 500;
          margin-top: 0.35rem;
          letter-spacing: 0.01em;
        }

        .vl-flourish {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          margin-top: 0.85rem;
        }

        .vl-flourish-line {
          height: 1px;
          width: 2.5rem;
          background: rgba(201, 162, 39, 0.55);
        }

        .vl-flourish-diamond {
          width: 6px;
          height: 6px;
          background: #C9A227;
          transform: rotate(45deg);
        }

        .vl-close {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          color: #C9A227;
          background: transparent;
          border: 1px solid rgba(201, 162, 39, 0.35);
          border-radius: 50%;
          width: 2.1rem;
          height: 2.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .vl-close:hover {
          background: rgba(201, 162, 39, 0.15);
          border-color: #C9A227;
        }

        .vl-body {
          padding: 2rem 2rem 2.25rem;
        }

        .vl-field {
          margin-bottom: 1.4rem;
        }

        .vl-label {
          font-size: 0.72rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #8A7B54;
          font-weight: 500;
          display: block;
          margin-bottom: 0.55rem;
        }

        .vl-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1.5px solid #DCD3BC;
          padding: 0.5rem 0.1rem;
          font-family: 'Jost', sans-serif;
          font-size: 0.98rem;
          color: #2A2A28;
          outline: none;
          transition: border-color 0.25s ease;
        }

        .vl-input::placeholder {
          color: #B8AF98;
        }

        .vl-input:focus {
          border-bottom-color: #C9A227;
        }

        .vl-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        .vl-textarea {
          resize: none;
        }

        .vl-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, #DCD3BC 15%, #DCD3BC 85%, transparent);
          margin: 0.5rem 0 1.6rem;
        }

        .vl-submit {
          width: 100%;
          margin-top: 0.5rem;
          padding: 1.05rem;
          background: linear-gradient(160deg, #C9A227 0%, #B08D22 100%);
          color: #16301F;
          border: none;
          border-radius: 3px;
          font-family: 'Jost', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 8px 20px -8px rgba(201, 162, 39, 0.6);
        }

        .vl-submit:hover {
          transform: translateY(-1px);
          box-shadow: 0 12px 24px -8px rgba(201, 162, 39, 0.75);
        }

        .vl-submit:active {
          transform: translateY(0);
        }

        .vl-note {
          text-align: center;
          font-size: 0.72rem;
          color: #B8AF98;
          margin-top: 0.9rem;
          letter-spacing: 0.03em;
        }
      `}</style>

      <div className="vl-card">
        <div className="vl-header">
          <button className="vl-close" onClick={onClose} aria-label="Close">
            <X size={16} />
          </button>
          <p className="vl-eyebrow">Vibee Land Homestay</p>
          <h2 className="vl-title">Check Availability</h2>
          <div className="vl-flourish">
            <span className="vl-flourish-line" />
            <span className="vl-flourish-diamond" />
            <span className="vl-flourish-line" />
          </div>
        </div>

        <div className="vl-body">
          <div className="vl-field">
            <label className="vl-label">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="vl-input"
              placeholder="Enter your name"
            />
          </div>

          <div className="vl-field">
            <label className="vl-label">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="vl-input"
              placeholder="Enter phone number"
            />
          </div>

          <div className="vl-row vl-field">
            <div>
              <label className="vl-label">Check In</label>
              <input
                type="date"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                className="vl-input"
              />
            </div>
            <div>
              <label className="vl-label">Check Out</label>
              <input
                type="date"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                className="vl-input"
              />
            </div>
          </div>

          <div className="vl-row vl-field">
            <div>
              <label className="vl-label">Adults</label>
              <input
                type="number"
                min="1"
                name="adults"
                value={formData.adults}
                onChange={handleChange}
                className="vl-input"
              />
            </div>
            <div>
              <label className="vl-label">Children</label>
              <input
                type="number"
                min="0"
                name="children"
                value={formData.children}
                onChange={handleChange}
                className="vl-input"
              />
            </div>
          </div>

          <div className="vl-field">
            <label className="vl-label">Special Request</label>
            <textarea
              rows="3"
              name="request"
              value={formData.request}
              onChange={handleChange}
              className="vl-input vl-textarea"
              placeholder="Optional"
            />
          </div>

          <div className="vl-divider" />

          <button className="vl-submit" onClick={handleWhatsAppBooking}>
            Check Availability on WhatsApp
          </button>
          <p className="vl-note">We usually reply within a few hours</p>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;