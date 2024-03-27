import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

{
}

const Navbar = () => {
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

  return (
    <div>
      <div>
        <div className="login-button">
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>
      </div>
      <div className="nav-section">
        <img
          width={100}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/709px-H%26M-Logo.svg.png"
        />
      </div>
      <div className="menu-area">
        <ul className="menu">
          {menuList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="search">
          <FontAwesomeIcon icon={faSearch} />
          <input id="search-input" type="text" placeholder="검색" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
