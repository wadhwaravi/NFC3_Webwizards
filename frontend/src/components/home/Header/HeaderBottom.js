import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaSearch, FaUser, FaCaretDown } from "react-icons/fa";
import Flex from "../../designLayouts/Flex";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderBottom = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const navigate = useNavigate();
  const ref = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShowMenu(false);
      }
    });
  }, [ref]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);

  // Get ration cards from Redux store; default to empty array if undefined
  const rationCards = useSelector((state) => state.ration?.cards || []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(
    () => {
      const filtered = rationCards.filter((card) =>
        card.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      // setFilteredCards(filtered);
    },
    [
      /* searchQuery, rationCards */
    ]
  );

  return (
    <div className="w-full bg-[#F5F5F3] relative">
      <div className="max-w-container mx-auto">
        <Flex className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full px-4 pb-4 lg:pb-0 h-full lg:h-24">
          {/* Menu Section for Ration Card Management */}
          <div
            onClick={() => setShowMenu(!showMenu)}
            ref={ref}
            className="flex h-14 cursor-pointer items-center gap-2 text-primeColor"
          >
            <HiOutlineMenuAlt4 className="w-5 h-5" />
            <p className="text-[14px] font-normal">Manage Ration Cards</p>

            {showMenu && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-36 z-50 bg-primeColor w-auto text-[#767676] h-auto p-4 pb-6"
              >
                <Link to="/apply">
                  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Apply for Ration Card
                  </li>
                </Link>
                <Link to="/track">
                  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Track Application
                  </li>
                </Link>
                <Link to="/renew">
                  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Renew Ration Card
                  </li>
                </Link>
                <Link to="/help">
                  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Help & Support
                  </li>
                </Link>
              </motion.ul>
            )}
          </div>
          {/* Search Section for Ration Cards */}
          <div className="relative w-full lg:w-[600px] h-[50px] text-base text-primeColor bg-white flex items-center gap-2 justify-between px-6 rounded-xl">
            <input
              className="flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px]"
              type="text"
              onChange={handleSearch}
              value={searchQuery}
              placeholder="Search Ration Cards"
            />
            <FaSearch className="w-5 h-5" />
            {searchQuery && (
              <div
                className={`w-full mx-auto h-96 bg-white top-16 absolute left-0 z-50 overflow-y-scroll shadow-2xl scrollbar-hide cursor-pointer`}
              >
                {filteredCards.map((card) => (
                  <div
                    onClick={() => {
                      navigate(`/card/${card.id}`, {
                        state: { card },
                      });
                      setSearchQuery("");
                    }}
                    key={card.id}
                    className="max-w-[600px] h-28 bg-gray-100 mb-3 flex items-center gap-3"
                  >
                    <div className="flex flex-col gap-1 p-4">
                      <p className="font-semibold text-lg">{card.name}</p>
                      <p className="text-xs">
                        {card.details.length > 100
                          ? `${card.details.slice(0, 100)}...`
                          : card.details}
                      </p>
                      <p className="text-sm">
                        Expiry:{" "}
                        <span className="text-primeColor font-semibold">
                          {card.expiryDate}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* User Menu Section */}
          <div className="flex gap-4 mt-2 lg:mt-0 items-center pr-6 cursor-pointer relative">
            <div onClick={() => setShowUser(!showUser)} className="flex">
              <FaUser />
              <FaCaretDown />
            </div>
            {showUser && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-6 left-0 z-50 bg-primeColor w-44 text-[#767676] h-auto p-4 pb-6"
              >
                <Link to="/profile">
                  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Profile
                  </li>
                </Link>
                <Link onClick={() => setShowUser(false)} to="/settings">
                  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Settings
                  </li>
                </Link>
                <Link onClick={() => setShowUser(false)} to="/logout">
                  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Logout
                  </li>
                </Link>
              </motion.ul>
            )}
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default HeaderBottom;
