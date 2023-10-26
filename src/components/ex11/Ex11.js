import {
  BrowserRouter,
  HashRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Sub01 } from "./pages/Sub01";
import { Sub02 } from "./pages/Sub02";
import { NotFound } from "./pages/NotFound";
import { Header } from "./components/Header";

export const Ex11 = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sub01" element={<Sub01 />} />
        <Route path="/sub02" element={<Sub02 />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      {/* footer은 여기에 작성! */}
    </BrowserRouter>
  );
};

// *router
// => 경로 설정
// ex)
// <BrowserRouter>
//   <Routes>
//     <Route path="경로1" element={컴포넌트1} /> (각각 라우터 설정)
//     <Route path="경로2" element={컴포넌트2} />
//     <Route path="/*" element={404에러 페이지 컴포넌트} />
//   </Routes>
// </BrowserRouter>
//
// => 링크를 사용할 때는 a태그가 아닌 Link컴포넌트를 사용함
// ex)
// <Link to={"경로"}></Link>
