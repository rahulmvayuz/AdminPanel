import Header from "../components/header";
import Sidebar from "../components/sidebar";
import { CountryData } from "../components/countries";
import { useState } from "react";
// import UpdateUser from "./updateUser";
import { useNavigate } from "react-router-dom";
import ViewUser from "./viewUser";

const AddUser = () => {
  const [firstname, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [country, setCountry] = useState("");
  const [radioBtn, setRadioBtn] = useState("");
  const [fileUpload, setfileUpload] = useState("");

  const firstNameHandle = (event) => {
    setFirstName(event.target.value);
  };
  const lastNameHandle = (event) => {
    setLastName(event.target.value);
  };
  const emailhandle = (event) => {
    setEmail(event.target.value);
  };
  const phoneHandle = (event) => {
    setPhone(event.target.value);
  };
  const timeHandle = (event) => {
    setTime(event.target.value);
  };
  const dateHandle = (event) => {
    setDate(event.target.value);
  };
  const messageHandle = (event) => {
    setMessage(event.target.value);
  };
  const countryHandle = (event) => {
    setCountry(event.target.value);
  };
  const radioHandle = (event) => {
    setRadioBtn(event.target.value);
  };
  const fileUploadddhandle = (event) => {
    setfileUpload(URL.createObjectURL(event.target.files[0]));
  };
  const navigation = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      firstName: firstname,
      lastName: lastName,
      email: email,
      phone: phone,
      message: message,
      time: time,
      date: date,
      country: country,
      fileUpload: fileUpload,
    };
    navigation("/viewuser", { state: data });

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setDate("");
    setMessage("");
    setRadioBtn("");
    setTime("");
  };

  return (
    <>
     <div className="main body px-8 py-5 ">
            <h1 className="font-semibold text-[#222a3b] text-3xl pb-4">
              Add User Data
            </h1>
            <form
              // onSubmit={handlesubmit}
              className="contact-form px-5 py-4 bg-white border-2 gap-4 flex flex-col"
            >
              <div className="grid grid-cols-2 gap-4 ">
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="FirstName"
                    className="text-[#1c2434] font-semibold text text-lg"
                  >
                    First Name
                    <div>
                      <h1> </h1>
                    </div>
                  </label>
                  <input
                    type="text"
                    className="px-5 py-3 focus:outline-[#1c2434] focus:rounded focus:outline border  placeholder:text-lg "
                    placeholder="Enter Your First Name"
                    value={firstname}
                    onChange={firstNameHandle}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="LastName"
                    className="text-[#1c2434] font-semibold text text-lg"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="px-5 py-3 focus:outline-[#1c2434] focus:rounded focus:outline border  placeholder:text-lg "
                    placeholder="Enter Your Last Name"
                    value={lastName}
                    onChange={lastNameHandle}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="email"
                    className="text-[#1c2434] font-semibold text text-lg"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="px-5 py-3 focus:outline-[#1c2434] focus:rounded focus:outline border  placeholder:text-lg "
                    placeholder="Enter Your Email address"
                    value={email}
                    onChange={emailhandle}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="phone"
                    className="text-[#1c2434] font-semibold text text-lg"
                  >
                    Phone
                  </label>
                  <input
                    type="phone"
                    className="px-5 py-3 focus:outline-[#1c2434] focus:rounded focus:outline border  placeholder:text-lg "
                    placeholder="+91 7836082652"
                    value={phone}
                    onChange={phoneHandle}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 ">
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="time"
                    className="text-[#1c2434] font-semibold text text-lg"
                  >
                    Time
                  </label>
                  <input
                    type="time"
                    className="px-5 py-3 focus:outline-[#1c2434] focus:rounded focus:outline border  placeholder:text-lg "
                    placeholder="Time"
                    value={time}
                    onChange={timeHandle}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="date"
                    className="text-[#1c2434] font-semibold text text-lg"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    className="px-5 py-3 focus:outline-[#1c2434] focus:rounded focus:outline border  placeholder:text-lg "
                    placeholder="Date"
                    value={date}
                    onChange={dateHandle}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="text"
                  className="text-[#1c2434] font-semibold text text-lg"
                >
                  Message
                </label>
                <textarea
                  type="textarea"
                  className="px-5 py-3 focus:outline-[#1c2434] focus:rounded focus:outline border  placeholder:text-lg "
                  placeholder="Enter Your message"
                  value={message}
                  onChange={messageHandle}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="country"
                  className="text-[#1c2434] font-semibold text text-lg"
                >
                  Select Your Country
                </label>
                <select
                  type="email"
                  className="px-5 py-3 focus:outline-[#1c2434] focus:rounded focus:outline border  placeholder:text-lg "
                  placeholder="Select Your Country"
                  value={country}
                  onChange={countryHandle}
                >
                  {CountryData.map((item, index) => (
                    <option key={index} value={item.code}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              {/* <div className="flex flex-col gap-1">
                <label
                  htmlFor="selectoption"
                  className="text-[#1c2434] font-semibold text text-lg"
                >
                  What is Your Programming language ?
                </label>

                <div className="flex gap-2">
                  <input
                    type="radio"
                    name="select"
                    value={radioBtn}
                    checked={radioBtn === "radiob"}
                    onChange={radioHandle}
                  ></input>
                  <label
                    htmlFor="selectoption"
                    className="text-[#1c2434] font-medium text text-lg"
                  >
                    Html{" "}
                  </label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="radio"
                    name="select"
                    value={radioBtn}
                    checked={radioBtn === "radioc"}
                    onChange={radioHandle}
                  ></input>
                  <label
                    htmlFor="selectoption"
                    className="text-[#1c2434] font-medium text text-lg"
                  >
                    Javascipt{" "}
                  </label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="radio"
                    name="select"
                    value={radioBtn}
                    checked={radioBtn === "radioA"}
                    onChange={radioHandle}
                  ></input>
                  <label
                    htmlFor="selectoption"
                    className="text-[#1c2434] font-medium text text-lg"
                  >
                    PHP{" "}
                  </label>
                </div>
              </div> */}
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="text"
                  className="text-[#1c2434] font-semibold text text-lg"
                >
                  Please upload Your Resume
                </label>
                <input
                  type="file"
                  className=" focus:outline-[#1c2434] focus:rounded focus:outline   placeholder:text-lg "
                  placeholder="Please upload Your Resume"
                  onChange={fileUploadddhandle}
                />
                <img
                  width="50"
                  height="50"
                  className="rounded-full"
                  src={fileUpload}
                  alt=""
                />
              </div>
              <div className="flex text-center w-full">
                {" "}
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="bg-[#3C50E0] px-2 py-3 w-96 rounded text-white font-medium text-base mt-3"
                >
                  Submit Form
                </button>
              </div>
            </form>
          </div>
    </>
  );
};

export default AddUser;
