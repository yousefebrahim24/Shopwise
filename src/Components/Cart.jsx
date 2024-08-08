import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

const Cart = ({ cart, setCart, updateQuantity }) => {
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [coupon, setCoupon] = useState("");

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="container mt-[122.6px]">
      <div>
        <div className="h-[173px] bg-[#F7F8FB] lg:px-[13rem] md:px-[10rem] sm:px-[8rem]">
          <div className=" flex items-center justify-between py-[70px] sm:flex-col md:flex-row">
            <div>
              <h1 className="text-[28px] font-bold font-roboto">
                Shopping Cart
              </h1>
            </div>
            <div>
              <span className="text-[14px] font-poppins">
                Home &gt; Pages &gt; Shopping Cart
              </span>
            </div>
          </div>
        </div>
        <div className="lg:px-[13rem] md:px-[5rem] sm:px-[1rem]">
          <div className="pt-[100px] pb-[50px] border-b-[4px] border-double">
            <table className="table-auto w-full text-[16px] font-poppins">
              <thead>
                <tr className="border-b-[1px] border-gray-300">
                  <th className="px-4 py-2"></th>
                  <th className="px-4 py-2 text-start">Product</th>
                  <th className="px-4 py-2">Price</th>
                  <th className="px-4 py-2">Quantity</th>
                  <th className="px-4 py-2">Total</th>
                  <th className="px-4 py-2">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr className="border-b-[1px] border-gray-300">
                    <td className="px-4 py-2 lg:w-[100px] lg:h-[111px]">
                      <img src={item.image} alt="item-image"/>
                    </td>
                    <td className="px-4 py-2 text-start">
                      <Link
                        to={`/exclusive/${item.id}`}
                        className="text-[16px]"
                      >
                        {item.title}
                      </Link>
                    </td>
                    <td className="px-4 py-2 font-semibold">${item.price}</td>
                    <td className="px-4 py-2">
                      <input
                        type="number"
                        name="quantity"
                        min="1"
                        defaultValue="1"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(index, parseInt(e.target.value))
                        }
                        className="w-[55px] border-[2px] outline-none pl-[4px] text-center"
                      />
                    </td>
                    <td className="px-4 py-2 font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td className="px-4 py-2 text-[20px] cursor-pointer">
                      <IoMdClose onClick={() => removeFromCart(index)}/>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="border-b-[1px] border-gray-300 flex sm:flex-col md:flex-row justify-between items-center">
              <div className="px-[12px] py-2">
                <div className="px-[12px] w-[372]">
                  <form className="mx-[15px] my-[8px] flex justify-between w-[372px] bg-white border-[1px] rounded-md font-poppins">
                    <input
                      type="text"
                      value={coupon}
                      id="coupon"
                      placeholder="Enter Coupon Code.."
                      onChange={(e) => setCoupon(e.target.value)}
                      className="h-[50px] px-[15px] placeholder:text-gray-500 font-small outline-none"
                    />
                    <button
                      type="submit"
                      name="submit"
                      className="h-[50px] px-[18px] py-[12px] bg-[#FF324D] rounded-md text-white my-0 mx-0 text-[14px] hover:text-[#FF324D] hover:border-[#FF324D] hover:border-[1px] hover:bg-transparent hover:duration-700"
                    >
                      Apply Coupon
                    </button>
                  </form>
                </div>
              </div>
              <div className="px-4 py-2">
                <button
                  type="submit"
                  className="py-[8px] px-[25px] bg-transparent hover:bg-black text-black hover:text-white border-[1px] border-black rounded-md text-[14px] font-poppins hover:duration-700"
                >
                  Update Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:px-[13rem] md:px-[8rem] sm:px-[3.5rem] font-poppins text-start pt-[50px] py-[100px] flex lg:flex-row sm:flex-col gap-[18px]">
          <div className="">
            <h6 className="text-[16px] font-roboto font-bold mb-[15px]">
              Calculate Shipping
            </h6>
            <select
              className="h-[50px] sm:w-[546px] 2xl:w-[546px] lg:w-[400px] px-[10px] placeholder:text-gray-500 font-small border-[1px] rounded-md outline-sky-400 mb-[16px] mr-[11px] form-control first_null not_chosen"
              required
            >
              <option value="">Choose a option...</option>
              <option value="AX">Aland Islands</option>
              <option value="AF">Afghanistan</option>
              <option value="AL">Albania</option>
              <option value="DZ">Algeria</option>
              <option value="AD">Andorra</option>
              <option value="AO">Angola</option>
              <option value="AI">Anguilla</option>
              <option value="AQ">Antarctica</option>
              <option value="AG">Antigua and Barbuda</option>
              <option value="AR">Argentina</option>
              <option value="AM">Armenia</option>
              <option value="AW">Aruba</option>
              <option value="AU">Australia</option>
              <option value="AT">Austria</option>
              <option value="AZ">Azerbaijan</option>
              <option value="BS">Bahamas</option>
              <option value="BH">Bahrain</option>
              <option value="BD">Bangladesh</option>
              <option value="BB">Barbados</option>
              <option value="BY">Belarus</option>
              <option value="PW">Belau</option>
              <option value="BE">Belgium</option>
              <option value="BZ">Belize</option>
              <option value="BJ">Benin</option>
              <option value="BM">Bermuda</option>
              <option value="BT">Bhutan</option>
              <option value="BO">Bolivia</option>
              <option value="BQ">Bonaire, Saint Eustatius and Saba</option>
              <option value="BA">Bosnia and Herzegovina</option>
              <option value="BW">Botswana</option>
              <option value="BV">Bouvet Island</option>
              <option value="BR">Brazil</option>
              <option value="IO">British Indian Ocean Territory</option>
              <option value="VG">British Virgin Islands</option>
              <option value="BN">Brunei</option>
              <option value="BG">Bulgaria</option>
              <option value="BF">Burkina Faso</option>
              <option value="BI">Burundi</option>
              <option value="KH">Cambodia</option>
              <option value="CM">Cameroon</option>
              <option value="CA">Canada</option>
              <option value="CV">Cape Verde</option>
              <option value="KY">Cayman Islands</option>
              <option value="CF">Central African Republic</option>
              <option value="TD">Chad</option>
              <option value="CL">Chile</option>
              <option value="CN">China</option>
              <option value="CX">Christmas Island</option>
              <option value="CC">Cocos (Keeling) Islands</option>
              <option value="CO">Colombia</option>
              <option value="KM">Comoros</option>
              <option value="CG">Congo (Brazzaville)</option>
              <option value="CD">Congo (Kinshasa)</option>
              <option value="CK">Cook Islands</option>
              <option value="CR">Costa Rica</option>
              <option value="HR">Croatia</option>
              <option value="CU">Cuba</option>
              <option value="CW">CuraÇao</option>
              <option value="CY">Cyprus</option>
              <option value="CZ">Czech Republic</option>
              <option value="DK">Denmark</option>
              <option value="DJ">Djibouti</option>
              <option value="DM">Dominica</option>
              <option value="DO">Dominican Republic</option>
              <option value="EC">Ecuador</option>
              <option value="EG">Egypt</option>
              <option value="SV">El Salvador</option>
              <option value="GQ">Equatorial Guinea</option>
              <option value="ER">Eritrea</option>
              <option value="EE">Estonia</option>
              <option value="ET">Ethiopia</option>
              <option value="FK">Falkland Islands</option>
              <option value="FO">Faroe Islands</option>
              <option value="FJ">Fiji</option>
              <option value="FI">Finland</option>
              <option value="FR">France</option>
              <option value="GF">French Guiana</option>
              <option value="PF">French Polynesia</option>
              <option value="TF">French Southern Territories</option>
              <option value="GA">Gabon</option>
              <option value="GM">Gambia</option>
              <option value="GE">Georgia</option>
              <option value="DE">Germany</option>
              <option value="GH">Ghana</option>
              <option value="GI">Gibraltar</option>
              <option value="GR">Greece</option>
              <option value="GL">Greenland</option>
              <option value="GD">Grenada</option>
              <option value="GP">Guadeloupe</option>
              <option value="GT">Guatemala</option>
              <option value="GG">Guernsey</option>
              <option value="GN">Guinea</option>
              <option value="GW">Guinea-Bissau</option>
              <option value="GY">Guyana</option>
              <option value="HT">Haiti</option>
              <option value="HM">Heard Island and McDonald Islands</option>
              <option value="HN">Honduras</option>
              <option value="HK">Hong Kong</option>
              <option value="HU">Hungary</option>
              <option value="IS">Iceland</option>
              <option value="IN">India</option>
              <option value="ID">Indonesia</option>
              <option value="IR">Iran</option>
              <option value="IQ">Iraq</option>
              <option value="IM">Isle of Man</option>
              <option value="IL">Israel</option>
              <option value="IT">Italy</option>
              <option value="CI">Ivory Coast</option>
              <option value="JM">Jamaica</option>
              <option value="JP">Japan</option>
              <option value="JE">Jersey</option>
              <option value="JO">Jordan</option>
              <option value="KZ">Kazakhstan</option>
              <option value="KE">Kenya</option>
              <option value="KI">Kiribati</option>
              <option value="KW">Kuwait</option>
              <option value="KG">Kyrgyzstan</option>
              <option value="LA">Laos</option>
              <option value="LV">Latvia</option>
              <option value="LB">Lebanon</option>
              <option value="LS">Lesotho</option>
              <option value="LR">Liberia</option>
              <option value="LY">Libya</option>
              <option value="LI">Liechtenstein</option>
              <option value="LT">Lithuania</option>
              <option value="LU">Luxembourg</option>
              <option value="MO">Macao S.A.R., China</option>
              <option value="MK">Macedonia</option>
              <option value="MG">Madagascar</option>
              <option value="MW">Malawi</option>
              <option value="MY">Malaysia</option>
              <option value="MV">Maldives</option>
              <option value="ML">Mali</option>
              <option value="MT">Malta</option>
              <option value="MH">Marshall Islands</option>
              <option value="MQ">Martinique</option>
              <option value="MR">Mauritania</option>
              <option value="MU">Mauritius</option>
              <option value="YT">Mayotte</option>
              <option value="MX">Mexico</option>
              <option value="FM">Micronesia</option>
              <option value="MD">Moldova</option>
              <option value="MC">Monaco</option>
              <option value="MN">Mongolia</option>
              <option value="ME">Montenegro</option>
              <option value="MS">Montserrat</option>
              <option value="MA">Morocco</option>
              <option value="MZ">Mozambique</option>
              <option value="MM">Myanmar</option>
              <option value="NA">Namibia</option>
              <option value="NR">Nauru</option>
              <option value="NP">Nepal</option>
              <option value="NL">Netherlands</option>
              <option value="AN">Netherlands Antilles</option>
              <option value="NC">New Caledonia</option>
              <option value="NZ">New Zealand</option>
              <option value="NI">Nicaragua</option>
              <option value="NE">Niger</option>
              <option value="NG">Nigeria</option>
              <option value="NU">Niue</option>
              <option value="NF">Norfolk Island</option>
              <option value="KP">North Korea</option>
              <option value="NO">Norway</option>
              <option value="OM">Oman</option>
              <option value="PK">Pakistan</option>
              <option value="PS">Palestinian Territory</option>
              <option value="PA">Panama</option>
              <option value="PG">Papua New Guinea</option>
              <option value="PY">Paraguay</option>
              <option value="PE">Peru</option>
              <option value="PH">Philippines</option>
              <option value="PN">Pitcairn</option>
              <option value="PL">Poland</option>
              <option value="PT">Portugal</option>
              <option value="QA">Qatar</option>
              <option value="IE">Republic of Ireland</option>
              <option value="RE">Reunion</option>
              <option value="RO">Romania</option>
              <option value="RU">Russia</option>
              <option value="RW">Rwanda</option>
              <option value="ST">São Tomé and Príncipe</option>
              <option value="BL">Saint Barthélemy</option>
              <option value="SH">Saint Helena</option>
              <option value="KN">Saint Kitts and Nevis</option>
              <option value="LC">Saint Lucia</option>
              <option value="SX">Saint Martin (Dutch part)</option>
              <option value="MF">Saint Martin (French part)</option>
              <option value="PM">Saint Pierre and Miquelon</option>
              <option value="VC">Saint Vincent and the Grenadines</option>
              <option value="SM">San Marino</option>
              <option value="SA">Saudi Arabia</option>
              <option value="SN">Senegal</option>
              <option value="RS">Serbia</option>
              <option value="SC">Seychelles</option>
              <option value="SL">Sierra Leone</option>
              <option value="SG">Singapore</option>
              <option value="SK">Slovakia</option>
              <option value="SI">Slovenia</option>
              <option value="SB">Solomon Islands</option>
              <option value="SO">Somalia</option>
              <option value="ZA">South Africa</option>
              <option value="GS">South Georgia/Sandwich Islands</option>
              <option value="KR">South Korea</option>
              <option value="SS">South Sudan</option>
              <option value="ES">Spain</option>
              <option value="LK">Sri Lanka</option>
              <option value="SD">Sudan</option>
              <option value="SR">Suriname</option>
              <option value="SJ">Svalbard and Jan Mayen</option>
              <option value="SZ">Swaziland</option>
              <option value="SE">Sweden</option>
              <option value="CH">Switzerland</option>
              <option value="SY">Syria</option>
              <option value="TW">Taiwan</option>
              <option value="TJ">Tajikistan</option>
              <option value="TZ">Tanzania</option>
              <option value="TH">Thailand</option>
              <option value="TL">Timor-Leste</option>
              <option value="TG">Togo</option>
              <option value="TK">Tokelau</option>
              <option value="TO">Tonga</option>
              <option value="TT">Trinidad and Tobago</option>
              <option value="TN">Tunisia</option>
              <option value="TR">Turkey</option>
              <option value="TM">Turkmenistan</option>
              <option value="TC">Turks and Caicos Islands</option>
              <option value="TV">Tuvalu</option>
              <option value="UG">Uganda</option>
              <option value="UA">Ukraine</option>
              <option value="AE">United Arab Emirates</option>
              <option value="GB">United Kingdom (UK)</option>
              <option value="US">USA (US)</option>
              <option value="UY">Uruguay</option>
              <option value="UZ">Uzbekistan</option>
              <option value="VU">Vanuatu</option>
              <option value="VA">Vatican</option>
              <option value="VE">Venezuela</option>
              <option value="VN">Vietnam</option>
              <option value="WF">Wallis and Futuna</option>
              <option value="EH">Western Sahara</option>
              <option value="WS">Western Samoa</option>
              <option value="YE">Yemen</option>
              <option value="ZM">Zambia</option>
              <option value="ZW">Zimbabwe</option>
            </select>
            <br />
            <input
              type="text"
              value={country}
              id="country"
              placeholder="State / Country"
              required
              onChange={(e) => setCountry(e.target.value)}
              className="h-[50px] w-[273px] px-[15px] py-[12px] placeholder:text-gray-500 font-small border-[1px] rounded-md outline-sky-400 mb-[16px] mr-[11px]"
            />
            <br />
            <input
              type="text"
              value={zip}
              id="zip"
              placeholder="Post Code / Zip"
              required
              onChange={(e) => setZip(e.target.value)}
              className="h-[50px] w-[273px] px-[15px] py-[12px] placeholder:text-gray-500 font-small border-[1px] rounded-md outline-sky-400 mb-[16px] mr-[11px]"
            />
            <br />
            <button
              type="submit"
              className="hover:duration-700 py-[12px] px-[35px] bg-black hover:bg-transparent text-white hover:text-black hover:border-[1px] hover:border-black rounded-lg text-[16px] mb-10"
            >
              Update Totals
            </button>
          </div>
          <div className="p-[24px] border-[1px] border-gray-300 2xl:w-[546px] xl:h-[275px] lg:h-[350px]">
            <h6 className="text-[16px] font-roboto font-bold mb-[15px]">
              Cart Totals
            </h6>
            <table className="table-auto w-full text-[16px] font-poppins">
              <tbody>
                <tr className="border-b-[1px] border-gray-300">
                  <td className="px-4 py-2">Cart Subtotal</td>
                  <td className="px-4 py-2">${totalPrice.toFixed(2)}</td>
                </tr>
                <tr className="border-b-[1px] border-gray-300">
                  <td className="px-4 py-2">Shipping</td>
                  <td className="px-4 py-2">Free Shipping</td>
                </tr>
                <tr className="border-b-[1px] border-gray-300">
                  <td className="px-4 py-2">Total</td>
                  <td className="px-4 py-2 font-bold">
                    ${totalPrice.toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>
            <button className="hover:duration-700 py-[12px] px-[35px] bg-[#FF324D] hover:bg-transparent text-white hover:text-[#FF324D] hover:border-[1px] hover:border-[#FF324D] rounded-lg text-[16px] mt-[20px]">
              Proceed To CheckOut
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
