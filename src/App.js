import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, useAsyncError } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductAll from "./page/ProductAll";
import ProductDetail from "./page/ProductDetail";
import Login from "./page/Login";
import Navbar from "./component/Navbar";
import PrivateRoute from "./route/PrivateRoute";

// 1. 전체 상품 페이지, 로그인, 상품 상세 페이지
// 1-1 네이게이션 바 만들기
// 2. 전체 상품 페이지 -> 전체 상품 볼 수 있음
// 3. 로그인 버튼을 누르면 로그인 페이지 나옴
// 4. 상품 디테일을 눌렀을때, 로그인 안되있을경우 로그인 페이지 나온다
//    로그인이 되있을 경우 상품 디테일 페이지를 볼 수 있음
// 5. 로그아웃 버튼 클릭하면 로그아웃이 된다
// 6. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없고 다시 로그인 페이지가 보임
// 7. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그아웃이 보임
// 8. 상품을 검색할 수 있다

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  useEffect(() => {
    console.log(authenticate);
    if (authenticate) {
    }
  }, [authenticate]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
