import React from "react";
import { PlusCircle, Search, ShoppingCart, User } from "lucide-react";
import "./NavBar.css";
import { useAppContext } from "../App";

const NavBar = () => {
  const { setShowWriteModal } = useAppContext();
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          {/* 왼쪽 로고 */}
          <div className="navbar-logo">
            <h1>내일의집</h1>
          </div>

          {/* 가운데 검색창 */}
          <div className="navbar-search">
            <div className="search-container">
              <Search className="search-icon" />
              <input
                className="search-input"
                type="text"
                placeholder="상품 검색"
              />
            </div>
          </div>

          {/* 오른쪽 버튼들 */}
          <div className="navbar-actions">
            {/* 장바구니 */}
            <button className="cart-button">
              <ShoppingCart style={{ width: "1.5rem", height: "1.5rem" }} />
            </button>

            {/* 로그인, 로그아웃 */}
            <div className="auth-buttons">
              <button className="login-button">
                <User style={{ width: "1rem", height: "1rem" }} />
                <span>로그인</span>
              </button>
              <button className="signup-button">회원가입</button>
            </div>

            {/* 글쓰기 */}
            <button
              className="write-button"
              onClick={() => setShowWriteModal(true)}
            >
              <PlusCircle style={{ width: "1.25rem", height: "1.25rem" }} />
              <span>글쓰기</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
