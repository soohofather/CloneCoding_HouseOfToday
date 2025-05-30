import { createContext, useContext, useState } from "react";
import "./App.css";
import Carousel from "./component/Carousel";
import ItemCard from "./component/ItemCard";
import NavBar from "./component/NavBar";
import WriteModal from "./component/WriteModal";

// 전역 상태 관리용 Context 생성
const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
};

function App() {
  const [showWriteModal, setShowWriteModal] = useState(false);

  // 초기 아이템 데이터
  const initialItems = [
    {
      id: 1,
      name: "스마트폰",
      image: "/placeholder.svg?height=200&width=200",
      price: 899000,
      category: "전자제품",
    },
    {
      id: 2,
      name: "노트북",
      image: "/placeholder.svg?height=200&width=200",
      price: 1299000,
      category: "전자제품",
    },
    {
      id: 3,
      name: "티셔츠",
      image: "/placeholder.svg?height=200&width=200",
      price: 29000,
      category: "의류",
    },
    {
      id: 4,
      name: "청바지",
      image: "/placeholder.svg?height=200&width=200",
      price: 79000,
      category: "의류",
    },
    {
      id: 5,
      name: "운동화",
      image: "/placeholder.svg?height=200&width=200",
      price: 129000,
      category: "신발",
    },
    {
      id: 6,
      name: "책",
      image: "/placeholder.svg?height=200&width=200",
      price: 15000,
      category: "도서",
    },
  ];

  const contextValue = {
    showWriteModal,
    setShowWriteModal,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="app-container">
        <NavBar />
        <main className="main-content">
          <Carousel />
          <div className="content-container">
            <div className="items-grid">
              {initialItems.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </main>
        {showWriteModal && <WriteModal />}
      </div>
    </AppContext.Provider>
  );
}

export default App;
