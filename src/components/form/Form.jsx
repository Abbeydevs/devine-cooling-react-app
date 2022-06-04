import React, { useState } from "react";

import "./Form.css";

const Form = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNum: "",
    state: "",
    country: "",
    chooseService: "",
    additionalInfo: "",
  });

  // Submitted pop up here
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstNameInputChange = (event) => {
    setValues({ ...values, firstName: event.target.value });
  };

  const handleLastNameInputChange = (event) => {
    setValues({ ...values, lastName: event.target.value });
  };

  const handleEmailAddressInputChange = (event) => {
    setValues({ ...values, emailAddress: event.target.value });
  };

  const handlePhoneNumInputChange = (event) => {
    setValues({ ...values, phoneNum: event.target.value });
  };

  const handleStateSelectChange = (event) => {
    setValues({ ...values, state: event.target.value });
  };

  const handleCountrySelectChange = (event) => {
    setValues({ ...values, country: event.target.value });
  };

  const handleChooseServiceSelectChange = (event) => {
    setValues({ ...values, chooseService: event.target.value });
  };

  const handleAdditionalInfoInputChange = (event) => {
    setValues({ ...values, additionalInfo: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.firstName && values.lastName && values.emailAddress && values.phoneNum) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div className="book-us-form">
      <div className="form_container">
        <h3>Request a Quote</h3>
        <form action="" onSubmit={handleSubmit}>
          <div className="first-row">
            <div className="f-name">
              <label>First Name</label>
              <input
                onChange={handleFirstNameInputChange}
                value={values.firstName}
                type="text"
                name="firstName"
                placeholder="Your First Name"
              />
              {submitted && !values.firstName ? (
                <span className="error-msg">
                  I am sure everyone has a first name, right?
                </span>
              ) : null}
            </div>

            {/* This is where you input your last name */}
            <div className="l-name">
              <label>Last Name</label>
              <input
                onChange={handleLastNameInputChange}
                value={values.lastName}
                type="text"
                name="lastName"
                placeholder="Your Last Name"
              />
              {submitted && !values.lastName ? (
                <span className="error-msg">
                  I am sure everyone has a last name, right?
                </span>
              ) : null}
            </div>
          </div>

          {/* This is the second row to fill your email and phone number */}
          <div className="second-row">
            <div className="email">
              <label>Email Address</label>
              <input
                onChange={handleEmailAddressInputChange}
                value={values.emailAddress}
                type="email"
                name="email"
                placeholder="Your Email Address"
              />
              {submitted && !values.emailAddress ? (
                <span className="error-msg">
                  You can't submit without an email. Not possible, sorry!
                </span>
              ) : null}
            </div>

            {/* Add Phone number */}
            <div className="p-num">
              <label>Phone number</label>
              <input
                onChange={handlePhoneNumInputChange}
                value={values.phoneNum}
                type="tel"
                name="number"
                placeholder="Your Phone Number"
              />
              {submitted && !values.phoneNum ? (
                <span className="error-msg">
                  Kindly give us your phone number. We'll be glad.
                </span>
              ) : null}
            </div>
          </div>

          {/* This is where get to your Select State */}
          <div className="third-row">
            <div className="state">
              <label>State</label>
              <div className="select-state-dropdown">
                <select
                  onChange={handleStateSelectChange}
                  value={values.state}
                  name="state"
                  id="state"
                >
                  <option value="Abia">Abia</option>
                  <option value="Adamawa">Adamawa</option>
                  <option value="Akwa">Akwa Ibom</option>
                  <option value="Anambra">Anambra</option>
                  <option value="Bauchi">Bauchi</option>
                  <option value="Bayelsa">Bayelsa</option>
                  <option value="Benue">Benue</option>
                  <option value="Borno">Borno</option>
                  <option value="Cross-River">Cross River</option>
                  <option value="Delta">Delta</option>
                  <option value="Ebonyi">Ebonyi</option>
                  <option value="Edo">Edo</option>
                  <option value="Ekiti">Ekiti</option>
                  <option value="Enugu">Enugu</option>
                  <option value="FCT">Federal Capital Territory</option>
                  <option value="Gombe">Gombe</option>
                  <option value="Imo">Imo</option>
                  <option value="Jigawa">Jigawa</option>
                  <option value="Kaduna">Kaduna</option>
                  <option value="Kano">Kano</option>
                  <option value="Katsina">Katsina</option>
                  <option value="Kebbi">Kebbi</option>
                  <option value="Kogi">Kogi</option>
                  <option value="Kwara">Kwara</option>
                  <option value="Lagos">Lagos</option>
                  <option value="Nasarawa">Nasarawa</option>
                  <option value="Niger">Niger</option>
                  <option value="Ogun">Ogun</option>
                  <option value="Ondo">Ondo</option>
                  <option value="Osun">Osun</option>
                  <option value="Oyo">Oyo</option>
                  <option value="Plateau">Plateau</option>
                  <option value="Rivers">Rivers</option>
                  <option value="Sokoto">Sokoto</option>
                  <option value="Taraba">Taraba</option>
                  <option value="Yobe">Yobe</option>
                  <option value="Zamfara">Zamfara</option>
                </select>
              </div>
            </div>
            <div className="country">
              <label>Country</label>
              <div className="select-country-dropdown">
                <select
                  onChange={handleCountrySelectChange}
                  value={values.country}
                  name="country"
                  id="country"
                >
                  <option value="Algeria">Algeria</option>
                  <option value="Angola">Angola</option>
                  <option value="Benin">Benin</option>
                  <option value="Botswana">Botswana</option>
                  <option value="BurkinaFaso">Burkina Faso</option>
                  <option value="Burundi">Burundi</option>
                  <option value="Cabo Verde">Cabo Verde</option>
                  <option value="Cameroon">Cameroon</option>
                  <option value="car">Central African Republic (CAR)</option>
                  <option value="Chad">Chad</option>
                  <option value="Comoros">Comoros</option>
                  <option value="congo">
                    Congo, Democratic Republic of the
                  </option>
                  <option value="congo">Congo, Republic of the</option>
                  <option value="ivory-coast">Cote d'Ivoire</option>
                  <option value="Djibouti">Djibouti</option>
                  <option value="Egypt">Egypt</option>
                  <option value="EquatorialGuinea">Equatorial Guinea</option>
                  <option value="Eritrea">Eritrea</option>
                  <option value="Eswatini">Eswatini</option>
                  <option value="Ethiopia">Ethiopia</option>
                  <option value="Gabon">Gabon</option>
                  <option value="Gambia">Gambia</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Guinea">Guinea</option>
                  <option value="Guinea-Bissau">Guinea-Bissau</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Lesotho">Lesotho</option>
                  <option value="Liberia">Liberia</option>
                  <option value="Libya">Libya</option>
                  <option value="Madagascar">Madagascar</option>
                  <option value="Malawi">Malawi</option>
                  <option value="Mali">Mali</option>
                  <option value="Mauritania">Mauritania</option>
                  <option value="Mauritius">Mauritius</option>
                  <option value="Morocco">Morocco</option>
                  <option value="Mozambique">Mozambique</option>
                  <option value="Namibia">Namibia</option>
                  <option value="Niger">Niger</option>
                  <option value="Nigeria" selected="Nigeria">
                    Nigeria
                  </option>
                  <option value="Rwanda">Rwanda</option>
                  <option value="stap">Sao Tome and Principe</option>
                  <option value="Senegal">Senegal</option>
                  <option value="Seychelles">Seychelles</option>
                  <option value="SL">Sierra Leone</option>
                  <option value="Sm">Somalia</option>
                  <option value="SA">South Africa</option>
                  <option value="SS">South Sudan</option>
                  <option value="Sudan">Sudan</option>
                  <option value="Tanzania">Tanzania</option>
                  <option value="Togo">Togo</option>
                  <option value="Tunisia">Tunisia</option>
                  <option value="Uganda">Uganda</option>
                  <option value="Zambia">Zambia</option>
                  <option value="Zimbabwe">Zimbabwe</option>
                </select>
              </div>
            </div>
          </div>

          {/* This is where you choose th type of service you want */}
          <div className="service-row">
            <label>Choose a Service</label>
            <div className="service">
              <select
                onChange={handleChooseServiceSelectChange}
                value={values.chooseService}
              >
                <option value="choose" selected disabled>
                  Choose a service
                </option>
                <option value="consultation">Consultation</option>
                <option value="sales">Sales & Installation</option>
                <option value="design-needs">Design needs</option>
                <option value="others">Others</option>
              </select>
            </div>
          </div>

          {/* You can add your additional info here in this textarea */}
          <div className="add-info">
            <label>Additional Information</label>
            <textarea
              onChange={handleAdditionalInfoInputChange}
              value={values.additionalInfo}
              name="additionalInfo"
              cols="50"
              rows="14"
              placeholder="Tell us other things not here you want us to know"
            ></textarea>
          </div>
          <button role="button" type="submit" className="btn book-submit-btn">
            Submit
          </button>

          {/* This is the success message container */}
          {submitted && valid ? (
            <div className="success-message">
              <p>😇</p>
              <p>Message sent!!!</p>
              <p>
                We have received your message. We will get back to you ASAP!
              </p>
            </div>
          ) : null}
        </form>
      </div>
    </div>
  );
};

export default Form;
