import React from "react";

import "./Form.css";

const Form = () => {
  return (
    <div className="book-us-form">
      <div className="form_container">
        <h3>Request a Quote</h3>
        <form action="">
          <div className="first-row">
            <div className="f-name">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Your First Name"
              />
            </div>
            <div className="l-name">
              <label>Last Name</label>
              <input type="text" name="lastName" placeholder="Your Last Name" />
            </div>
          </div>

          <div className="second-row">
            <div className="email">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
              />
            </div>
            <div className="p-num">
              <label>Phone number</label>
              <input type="tel" name="number" placeholder="Your Phone Number" />
            </div>
          </div>

          <div className="third-row">
            <div className="state">
              <label>State</label>
              <div className="select-state-dropdown">
                <select name="state" id="state">
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
                <select name="country" id="country">
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

          <div className="service-row">
            <label>Choose a Service</label>
            <div className="service">
              <select>
                <option value="choose" defaultValue={'Choose a service'} disabled>
                  Choose a service
                </option>
                <option value="consultation">Consultation</option>
                <option value="sales">Sales & Installation</option>
                <option value="design-needs">Design needs</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div></div>
          </div>

          <div className="add-info">
            <label>Additional Information</label>
            <textarea
              name="additionalInfo"
              cols="50"
              rows="14"
              placeholder="Tell us other things not here you want us to know"
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
