import React from "react";
import "./WriteModal.css";
import { useAppContext } from "../App";
import { X } from "lucide-react";

const WriteModal = () => {
  const { setShowWriteModal } = useAppContext();

  const handCloseHandler = () => {
    setShowWriteModal(false);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">상품 등록</h2>
          <button className="modal-close" onClick={handCloseHandler}>
            <X style={{ width: "1.5rem", height: "1.5rem" }} />
          </button>
        </div>
        <form className="modal-form">
          <div className="form-group">
            <label>상품명</label>
            <input
              className="form-input"
              type="text"
              name="name"
              placeholder="상품명을 입력하세요"
            />
          </div>
          <div className="form-group">
            <label>이미지</label>
            <input
              className="form-input"
              type="url"
              name="image"
              placeholder="이미지 url을 입력하세요"
            />
          </div>
          <div className="form-group">
            <label>가격</label>
            <input
              className="form-input"
              type="number"
              name="price"
              placeholder="가격을 입력하세요"
            />
          </div>
          <div className="form-group">
            <label>카테고리</label>
            <select>
              <option value="">카테고리를 선택하세요</option>
              <option value="전자제품">전자제품</option>
              <option value="의류">의류</option>
              <option value="신발">신발</option>
              <option value="도서">도서</option>
              <option value="기타">기타</option>
            </select>
          </div>
          <button className="form-submit">상품 등록</button>
        </form>
      </div>
    </div>
  );
};

export default WriteModal;
