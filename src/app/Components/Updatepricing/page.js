"use client";

import React, { useState } from "react";
import "./Updatepricing.css";

const initialFormData = {
  active: true,
  bags: 3,
  category: "PREMIUM",
  discountPercent: 12,
  extraKmCharge: "",
  featured: false,
  image: "",
  isPriceOnRequest: true,
  name: "",
  pricePerKm: "",
  pricePerMin: "",
  rating: 4.5,
  ridesCount: 0,
  seats: 7,
};

const Updatepricing = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: type === "checkbox" ? checked : value,
    }));

    setMessage("");
  };

  const numberOrNull = (value) => {
    if (value === "" || value === null || value === undefined) {
      return null;
    }

    return Number(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name.trim()) {
      setMessage("Please enter the car name.");
      return;
    }

    if (!formData.image.trim()) {
      setMessage("Please enter the car image URL.");
      return;
    }

    const carData = {
      active: Boolean(formData.active),
      bags: Number(formData.bags),
      category: formData.category,
      discountPercent: Number(formData.discountPercent),
      extraKmCharge: numberOrNull(formData.extraKmCharge),
      featured: Boolean(formData.featured),
      image: formData.image.trim(),
      isPriceOnRequest: Boolean(formData.isPriceOnRequest),
      name: formData.name.trim(),
      pricePerKm: numberOrNull(formData.pricePerKm),
      pricePerMin: numberOrNull(formData.pricePerMin),
      rating: Number(formData.rating),
      ridesCount: Number(formData.ridesCount),
      seats: Number(formData.seats),
    };

    console.log("Car data:", carData);

    setMessage("Car information submitted successfully.");

    // Form reset karna ho to is line ko uncomment karo:
    // setFormData(initialFormData);
  };

  return (
    <section className="update-car-section">
      <div className="update-car-container">
        <div className="update-car-heading">
          <span className="update-car-label">Vehicle Management</span>

          <h1>Add Car Information</h1>

          <p>
            Fill in the vehicle details below to add or update the car
            information.
          </p>
        </div>

        <div className="car-information-box">
          <div className="car-form-header">
            <h2>Car Information</h2>
            <p>Enter all required details of the vehicle.</p>
          </div>

          <form className="car-information-form" onSubmit={handleSubmit}>
            <div className="car-form-group car-full-field">
              <label htmlFor="name">
                Car Name <span>*</span>
              </label>

              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Example: Toyota Fortuner"
              />
            </div>

            <div className="car-form-group car-full-field">
              <label htmlFor="image">
                Car Image URL <span>*</span>
              </label>

              <input
                id="image"
                type="url"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="https://res.cloudinary.com/..."
              />
            </div>

            <div className="car-form-group car-full-field">
              <label htmlFor="category">Category</label>

              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="ECONOMY">Economy</option>
                <option value="HATCHBACK">Hatchback</option>
                <option value="SEDAN">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="PREMIUM">Premium</option>
                <option value="LUXURY">Luxury</option>
              </select>
            </div>

            <div className="car-form-grid">
              <div className="car-form-group">
                <label htmlFor="seats">Seats</label>

                <input
                  id="seats"
                  type="number"
                  name="seats"
                  min="1"
                  value={formData.seats}
                  onChange={handleChange}
                  placeholder="7"
                />
              </div>

              <div className="car-form-group">
                <label htmlFor="bags">Bags</label>

                <input
                  id="bags"
                  type="number"
                  name="bags"
                  min="0"
                  value={formData.bags}
                  onChange={handleChange}
                  placeholder="3"
                />
              </div>
            </div>

            <div className="car-form-grid">
              <div className="car-form-group">
                <label htmlFor="rating">Rating</label>

                <input
                  id="rating"
                  type="number"
                  name="rating"
                  min="0"
                  max="5"
                  step="0.1"
                  value={formData.rating}
                  onChange={handleChange}
                  placeholder="4.5"
                />
              </div>

              <div className="car-form-group">
                <label htmlFor="ridesCount">Rides Count</label>

                <input
                  id="ridesCount"
                  type="number"
                  name="ridesCount"
                  min="0"
                  value={formData.ridesCount}
                  onChange={handleChange}
                  placeholder="220"
                />
              </div>
            </div>

            <div className="car-form-group car-full-field">
              <label htmlFor="discountPercent">Discount Percent</label>

              <input
                id="discountPercent"
                type="number"
                name="discountPercent"
                min="0"
                max="100"
                value={formData.discountPercent}
                onChange={handleChange}
                placeholder="12"
              />
            </div>

            <div className="car-form-grid">
              <div className="car-form-group">
                <label htmlFor="pricePerKm">Price Per KM</label>

                {/* <input
                  id="pricePerKm"
                  type="number"
                  name="pricePerKm"
                  min="0"
                  step="0.01"
                  value={formData.pricePerKm}
                  onChange={handleChange}
                  placeholder="Leave empty for null"
                /> */}
                <input
  id="pricePerKm"
  type="number"
  name="pricePerKm"
  min="0"
  step="0.01"
  inputMode="decimal"
  value={formData.pricePerKm}
  onChange={handleChange}
  onKeyDown={(e) => {
    if (["e", "E", "+", "-"].includes(e.key)) {
      e.preventDefault();
    }
  }}
  placeholder="Enter price per KM"
/>
              </div>

              <div className="car-form-group">
                <label htmlFor="pricePerMin">Price Per Minute</label>

                {/* <input
                  id="pricePerMin"
                  type="number"
                  name="pricePerMin"
                  min="0"
                  step="0.01"
                  value={formData.pricePerMin}
                  onChange={handleChange}
                  placeholder="Leave empty for null"
                /> */}
                <input
  id="pricePerMin"
  type="number"
  name="pricePerMin"
  min="0"
  step="0.01"
  inputMode="decimal"
  value={formData.pricePerMin}
  onChange={handleChange}
  onKeyDown={(e) => {
    if (["e", "E", "+", "-"].includes(e.key)) {
      e.preventDefault();
    }
  }}
  placeholder="Enter price per minute"
/>
              </div>
            </div>

            <div className="car-form-group car-full-field">
              <label htmlFor="extraKmCharge">Extra KM Charge</label>

              {/* <input
                id="extraKmCharge"
                type="number"
                name="extraKmCharge"
                min="0"
                step="0.01"
                value={formData.extraKmCharge}
                onChange={handleChange}
                placeholder="Leave empty for null"
              /> */}
              <input
  id="extraKmCharge"
  type="number"
  name="extraKmCharge"
  min="0"
  step="0.01"
  inputMode="decimal"
  value={formData.extraKmCharge}
  onChange={handleChange}
  onKeyDown={(e) => {
    if (["e", "E", "+", "-"].includes(e.key)) {
      e.preventDefault();
    }
  }}
  placeholder="Enter extra KM charge"
/>
            </div>

            <div className="car-checkbox-container">
              <label className="car-checkbox-field">
                <input
                  type="checkbox"
                  name="active"
                  checked={formData.active}
                  onChange={handleChange}
                />

                <span className="custom-checkbox"></span>
                <span>Active</span>
              </label>

              <label className="car-checkbox-field">
                <input
                  type="checkbox"
                  name="featured"
                  checked={formData.featured}
                  onChange={handleChange}
                />

                <span className="custom-checkbox"></span>
                <span>Featured</span>
              </label>

              <label className="car-checkbox-field">
                <input
                  type="checkbox"
                  name="isPriceOnRequest"
                  checked={formData.isPriceOnRequest}
                  onChange={handleChange}
                />

                <span className="custom-checkbox"></span>
                <span>Price on Request</span>
              </label>
            </div>

            {message && (
              <p
                className={`car-form-message ${
                  message.includes("successfully")
                    ? "success-message"
                    : "error-message"
                }`}
              >
                {message}
              </p>
            )}

            <button type="submit" className="submit-car-button">
              Save Car Information
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Updatepricing;