import React from "react";

const Form = () => {
  return (
    <div className="book-us-form">
      <form>
        <input type="text" name="fullname" value=" " placeholder="Fullname" />
        <input type="email" name="email-address" placeholder="Email Address" />
        <input type="tel" name="phone-number" placeholder="Your Phone number" />
        <select>
            <option>State</option>
            <option>State</option>
        </select>
        <select>
            <option>Country</option>
            <option>State</option>
        </select>
        <select>
            <option>Choose products you want</option>
            <option>State</option>
        </select>
        <textarea col="10" rows="5"></textarea>
      </form>
    </div>
  );
};

export default Form;
