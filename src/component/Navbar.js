import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M HOME",
    "Sale",
    "지속가능성",
  ];
  const navigate = useNavigate();

  const goToLogin = () => {
    if (authenticate) {
      setAuthenticate(false);
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
      setIsOpen(false);
    }
  };

  return (
    <div>
      <div className="login-section">
        <div className="m-section">
          <FontAwesomeIcon
            onClick={() => setIsOpen(true)}
            className="ham-bar"
            icon={faBars}
          />
          <img
            className="logo-m"
            onClick={() => navigate("/")}
            width={30}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/709px-H%26M-Logo.svg.png"
          />
        </div>

        <div className="login-button" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>{authenticate === false ? "sign-in" : "sign-out"}</div>
        </div>
      </div>
      <div className="nav-section">
        <img
          className="logo"
          onClick={() => navigate("/")}
          width={70}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/709px-H%26M-Logo.svg.png"
        />
      </div>
      {isOpen && (
        <div className="menu-area-m">
          <div className="search-m">
            <FontAwesomeIcon icon={faSearch} />
            <input
              id="search-input"
              type="text"
              placeholder="검색"
              onKeyPress={(event) => search(event)}
            />
          </div>
          <ul className="menu-m">
            {menuList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <button onClick={() => setIsOpen(false)}>x</button>
        </div>
      )}

      {/*  */}

      <div className="menu-area">
        <ul className="menu">
          {menuList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="search">
          <FontAwesomeIcon icon={faSearch} />
          <input
            id="search-input"
            type="text"
            placeholder="검색"
            onKeyPress={(event) => search(event)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
