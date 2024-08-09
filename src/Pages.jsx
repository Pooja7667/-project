import React, { useState } from "react";
import "./donation.css"

const pages = () => {
  const [amount, setAmount] = useState(5000);
  const [donorType, setDonorType] = useState("Indian Donor");
  const [givingOption, setGivingOption] = useState("Give Once");

  return (
    <div className="donation-form">
      <h2>DONATE</h2>
      <div className="donor-type">
        <label>
          <input
            type="radio"
            value="Indian Donor"
            checked={donorType === "Indian Donor"}
            onChange={() => setDonorType("Indian Donor")}
          />
          Indian Donor
        </label>
        <label>
          <input
            type="radio"
            value="NRI Donor"
            checked={donorType === "NRI Donor"}
            onChange={() => setDonorType("NRI Donor")}
          />
          NRI Donor
        </label>
        <label>
          <input
            type="radio"
            value="Foreign Donor"
            checked={donorType === "Foreign Donor"}
            onChange={() => setDonorType("Foreign Donor")}
          />
          Foreign Donor
        </label>
      </div>
      <p>Those who hold an Indian passport and reside in India</p>

      <div className="giving-options">
        <button
          className={givingOption === "Give Once" ? "active" : ""}
          onClick={() => setGivingOption("Give Once")}
        >
          Give Once
        </button>
        <button
          className={givingOption === "Give Monthly" ? "active" : ""}
          onClick={() => setGivingOption("Give Monthly")}
        >
          Give Monthly
        </button>
      </div>

      <div className="select-amount">
        <button
          className={amount === 5000 ? "active" : ""}
          onClick={() => setAmount(5000)}
        >
          INR 5000
        </button>
        <button
          className={amount === 10000 ? "active" : ""}
          onClick={() => setAmount(10000)}
        >
          INR 10000
        </button>
        <button
          className={amount === 20000 ? "active" : ""}
          onClick={() => setAmount(20000)}
        >
          INR 20000
        </button>
        <input
          type="number"
          placeholder="Any Amount"
          value={
            amount !== 5000 && amount !== 10000 && amount !== 20000
              ? amount
              : ""
          }
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </div>

      <p>
        Your donations are tax exempted under 80G of the Indian Income Tax Act
      </p>

      <button className="next-button">NEXT</button>
    </div>
  );
};

export default pages;
