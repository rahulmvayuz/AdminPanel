import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import Read from "./Read";
import { data } from "autoprefixer";

const Home = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [country, setcountry] = useState("");
  const [imageupload, setimageupload] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const [form, setForm] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const object = {
      id: form.length + 1,
      name: name,
      email: email,
      phone: phone,
      dob: dob,
      country :country,
    };
    setForm([...form, object]);
    localStorage.setItem("data", JSON.stringify(form));
    setName("");
    setEmail("");
    setPhone("");
    setDob("");
    setcountry("")
    setIsOpen(false);
  };

  console.log(form);

  //   Open Modal start here

  const openModal = () => {
    setIsOpen(true);
    document.body.classList.add("overflow-y-hidden");
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.classList.remove("overflow-y-hidden");
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 27) {
      closeModal();
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  //   Open Modal end here

  return (
    <>
      <div className="flex items-center bg-neutral-100 justify-center h-10 pt-14 mt-4">
        <button
          className="bg-[#000] flex justify-center items-center gap-2 font-medium  text-white rounded-md px-4 py-2  hover:bg-black transition"
          onClick={openModal}
        >
          Add User <CiCirclePlus size={30} />
        </button>
      </div>

      {isOpen && (
        <div
          id="modelConfirm"
          className="fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4"
        >
          <div className="relative top-10 bottom-10 mx-auto shadow-xl rounded-md bg-white max-w-md">
            <div className="flex justify-end p-2">
              <button
                onClick={closeModal}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 -mb-6 ml-auto inline-flex items-center"
              >
                <span>
                  <RxCross2 size={30} />
                </span>
              </button>
            </div>

            <div className="p-1 pt-0 text-center">
              <h3 className="text-xl font-normal text-gray-500 mb-1">
                <div className=" min-h-screen flex items-center justify-center">
                  <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6"
                  >
                    <div className="mb-4">
                      <label
                        className="block text-base font-bold  text-gray-600 mb-2"
                        htmlFor="name"
                      >
                        Name:
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border-b text-base border-gray-300 focus:outline-none focus:border-gray-500"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-base font-bold  text-gray-600 mb-2"
                        htmlFor="email"
                      >
                        Email:
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Add Email "
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border-b text-base border-gray-300 focus:outline-none focus:border-gray-500"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-base font-bold  text-gray-600 mb-2"
                        htmlFor="phone"
                      >
                        Phone:
                      </label>
                      <input
                        id="number"
                        type="number"
                        placeholder="Add Phone Number.."
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full p-2 border-b text-base border-gray-300 focus:outline-none focus:border-gray-500"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-base font-bold  text-gray-600 mb-2"
                        htmlFor="Dob"
                      >
                        Dob:
                      </label>
                      <input
                        id="date"
                        type="date"
                        placeholder="Add DOB.."
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        className="w-full p-2 border-b text-base border-gray-300 focus:outline-none focus:border-gray-500"
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        className="block text-base font-bold  text-gray-600 mb-2"
                        htmlFor="country"
                      >
                        Country
                      </label>
                      <select
                        id="country"
                        type="select"
                        placeholder="Choose country"
                        value={country}
                        onChange={(e) => setcountry(e.target.value)}
                        className="w-full border-b text-base border-gray-300 focus:outline-none focus:border-gray-500"
                      >
                        <option value="india">India</option>
                        <option value="china">China</option>
                        <option value="uk">Uk</option>
                        <option value="oman">Oman</option>
                        <option value="qatar">Qatar</option>
                        <option value="japan">Japan</option>
                      </select>
                    </div>
                    <div className="mb-2">
                      <label
                        className="block text-base font-bold  text-gray-600 mb-2"
                        htmlFor="Dob"
                      >
                        Upload Your Image
                      </label>
                      <input
                        id="date"
                        type="file"
                        placeholder="Choose country"
                        className="w-full border-b text-base border-gray-300 focus:outline-none focus:border-gray-500"
                      >
                       
                      </input>
                    </div>

                    <button
                      type="submit"
                      //   onClick={handleSubmit}
                      className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300"
                    >
                      Add user
                    </button>
                  </form>
                </div>
              </h3>
              {/* <a
                href="#"
                onClick={closeModal}
                className="text-white bg-black hover:bg-black focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2"
              >
                Add User
              </a>
              <a
                href="#"
                onClick={closeModal}
                className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center"
                data-modal-toggle="delete-user-modal"
              >
                Don't Add User
              </a> */}
            </div>
          </div>
        </div>
      )}
      <Read />
    </>
  );
};

export default Home;
