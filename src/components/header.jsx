import { FaSearch } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FiBook } from "react-icons/fi";
import { IoIosSettings } from "react-icons/io";
import { useState } from "react";
import { TbMessageHeart } from "react-icons/tb";
import { Link } from "react-router-dom";

const Header = () => {
  // Profile Open Start here
  const [profileOpen, setProfileOpen] = useState(false);
  const openProfile = () => {
    setProfileOpen(!profileOpen);
  };

  // Notification open start here
  const [NotifyOpen, setNotifyOpen] = useState(false);
  const openNotification = () => {
    setNotifyOpen(!NotifyOpen);
  };

  // Message start here
  const [messageOpen, setMessageOpen] = useState(false);
  const openmessage = () => {
    setMessageOpen(!messageOpen);
  };

  return (
    <>
      <div className="flex flex-row  justify-between items-center bg-white px-5 py-4  shadow-lg">
        <div className="input-box flex gap-4 items-center">
          <FaSearch size={16} color="#64748b" />
          <input
            type="text"
            placeholder="Type to search..."
            className="placeholder:text-[#b6b1b1] focus:outline-none     "
          />
        </div>
        <div className="flex  gap-6">
          <div className="notify relative">
            <div className="p-2 bg-[#EFF4FB] border-2  rounded-full">
              <IoMdNotifications
                color="black"
                size={20}
                onClick={openNotification}
              />
              {NotifyOpen && (
                <div className="Notication border-2  absolute top-14 z-0 right-2 bg-white w-80">
                  <h1 className="font-semibold text-base text-[#8a99af] py-3 px-4 border-2">
                    Notification
                  </h1>
                  <div className="h-96 overflow-x-auto">
                    <div className="flex flex-col gap-4 px-4 py-2 border-2">
                      <h1 className="text-[#64748b] font-normal ">
                        Sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim.
                      </h1>
                      <h1 className="text-[#64748b] font-normal ">
                        12, May 2024{" "}
                      </h1>
                    </div>
                    <div className="flex flex-col gap-4 px-4 py-2 border-2">
                      <h1 className="text-[#64748b] font-normal ">
                        Sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim.
                      </h1>
                      <h1 className="text-[#64748b] font-normal ">
                        12, May 2024{" "}
                      </h1>
                    </div>
                    <div className="flex flex-col gap-4 px-4 py-2 border-2">
                      <h1 className="text-[#64748b] font-normal ">
                        Sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim.
                      </h1>
                      <h1 className="text-[#64748b] font-normal ">
                        12, May 2024{" "}
                      </h1>
                    </div>
                    <div className="flex flex-col gap-4 px-4 py-2 border-2">
                      <h1 className="text-[#64748b] font-normal ">
                        Sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim.
                      </h1>
                      <h1 className="text-[#64748b] font-normal ">
                        12, May 2024{" "}
                      </h1>
                    </div>
                    <div className="flex flex-col gap-4 px-4 py-2 border-2">
                      <h1 className="text-[#64748b] font-normal ">
                        Sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim.
                      </h1>
                      <h1 className="text-[#64748b] font-normal ">
                        12, May 2024{" "}
                      </h1>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="message">
            <div className="p-2 bg-[#EFF4FB] border-2 rounded-full relative">
              <TbMessageHeart color="black" size={20} onClick={openmessage} />
              {messageOpen && (
                <div className="Notication border-2  absolute top-14 z-0 right-2 bg-white w-80">
                  <h1 className="font-semibold text-base text-[#8a99af] py-3 px-4 border-2">
                    Messages
                  </h1>
                  <div className="h-96 overflow-x-auto">
                    <div className="flex flex-row items-start gap-4 px-4 py-2 border-2">
                      <div>
                        <img
                          src="/public/images/Rahul-mahto-sq.jpeg "
                          className="rounded-full"
                          width="45px"
                          alt=""
                        />
                      </div>
                      <div>
                        <h1 className="text-[#1c2434] font-semibold text-sm ">
                          Rahul Mahto
                        </h1>
                        <h1 className="text-[#64748b] text-sm  font-normal">
                          I like your confidence
                        </h1>
                        <h1 className="text-[#64748b] text-sm  font-normal">
                          2min ago
                        </h1>
                      </div>
                    </div>
                    <div className="flex flex-row items-start gap-4 px-4 py-2 border-2">
                      <div>
                        <img
                          src="/public/images/Rahul-mahto-sq.jpeg "
                          className="rounded-full"
                          width="45px"
                          alt=""
                        />
                      </div>
                      <div>
                        <h1 className="text-[#1c2434] font-semibold text-sm ">
                          Rahul Mahto
                        </h1>
                        <h1 className="text-[#64748b] text-sm  font-normal">
                          I like your confidence
                        </h1>
                        <h1 className="text-[#64748b] text-sm  font-normal">
                          2min ago
                        </h1>
                      </div>
                    </div>
                    <div className="flex flex-row items-start gap-4 px-4 py-2 border-2">
                      <div>
                        <img
                          src="/public/images/Rahul-mahto-sq.jpeg "
                          className="rounded-full"
                          width="45px"
                          alt=""
                        />
                      </div>
                      <div>
                        <h1 className="text-[#1c2434] font-semibold text-sm ">
                          Rahul Mahto
                        </h1>
                        <h1 className="text-[#64748b] text-sm  font-normal">
                          I like your confidence
                        </h1>
                        <h1 className="text-[#64748b] text-sm  font-normal">
                          2min ago
                        </h1>
                      </div>
                    </div>
                    <div className="flex flex-row items-start gap-4 px-4 py-2 border-2">
                      <div>
                        <img
                          src="/public/images/Rahul-mahto-sq.jpeg "
                          className="rounded-full"
                          width="45px"
                          alt=""
                        />
                      </div>
                      <div>
                        <h1 className="text-[#1c2434] font-semibold text-sm ">
                          Rahul Mahto
                        </h1>
                        <h1 className="text-[#64748b] text-sm  font-normal">
                          I like your confidence
                        </h1>
                        <h1 className="text-[#64748b] text-sm  font-normal">
                          2min ago
                        </h1>
                      </div>
                    </div>
                    <div className="flex flex-row items-start gap-4 px-4 py-2 border-2">
                      <div>
                        <img
                          src="/public/images/Rahul-mahto-sq.jpeg "
                          className="rounded-full"
                          width="45px"
                          alt=""
                        />
                      </div>
                      <div>
                        <h1 className="text-[#1c2434] font-semibold text-sm ">
                          Rahul Mahto
                        </h1>
                        <h1 className="text-[#64748b] text-sm  font-normal">
                          I like your confidence
                        </h1>
                        <h1 className="text-[#64748b] text-sm  font-normal">
                          2min ago
                        </h1>
                      </div>
                    </div>
                    <div className="flex flex-row items-start gap-4 px-4 py-2 border-2">
                      <div>
                        <img
                          src="/public/images/Rahul-mahto-sq.jpeg "
                          className="rounded-full"
                          width="45px"
                          alt=""
                        />
                      </div>
                      <div>
                        <h1 className="text-[#1c2434] font-semibold text-sm ">
                          Rahul Mahto
                        </h1>
                        <h1 className="text-[#64748b] text-sm  font-normal">
                          I like your confidence
                        </h1>
                        <h1 className="text-[#64748b] text-sm  font-normal">
                          2min ago
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div
            className="user-profile flex gap-2 justify-center cursor-pointer items-center"
            onClick={openProfile}
          >
            <div className="name ">
              <h1 className="font-medium text-sm text-[#1c243] flex justify-end">
                Rahul Mahto
              </h1>
              <h1 className="font-medium text-sm text-[#64748b] flex justify-end ">
                Wordpress Developer
              </h1>
            </div>
            <div>
              <img
                src="/public/images/Rahul-mahto-sq.jpeg"
                className="rounded-full"
                width="50px"
                alt=""
              />
            </div>
            <div className="relative  ">
              <FaAngleDown
                size={25}
                color="#64748b"
                className="cursor-pointer"
              />
              {profileOpen && (
                <div className="user-profile-details border-2 px-6 py-8 absolute top-14 z-0 right-2 bg-white w-64">
                  <ul className="flex flex-col gap-4">
                    <Link to="/profileuser">
                      <li className="text-[#64748b] font-bold flex gap-1 items-center hover:text-[#3c50e0] cursor-pointer">
                        <FaRegUser size={18} />
                        My Profile{" "}
                      </li>
                    </Link>
                    <li className="text-[#64748b] font-bold flex gap-1 items-center hover:text-[#3c50e0] cursor-pointer">
                      <FiBook size={18} />
                      My Contacts{" "}
                    </li>
                    <li className="text-[#64748b] font-bold flex gap-1 items-center hover:text-[#3c50e0] cursor-pointer ">
                      <IoIosSettings size={18} />
                      Account Settings{" "}
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
