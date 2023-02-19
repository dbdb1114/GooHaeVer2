import "./CommonFiles/Common.css";
import { BrowserRouter, BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import Header from "./CommonFiles/Header/Header";
import Footer from "./CommonFiles/Footer/Footer";
import MainPage from "./MainPage/MainPage";
import SubPageLiving from "./SubPage/Living/SubPageLiving";
import SubPageBedroom from "./SubPage/Bedroom/subPageBedroom";
import SubPageDressroom from "./SubPage/Dressroom/SubPageDressroom";
import SubPageDining from "./SubPage/Dining/SubPageDining";
import ProductDetail from "./ProductDetail/ProductDetail";
import ScrollTopBtn from "./ScrollTopBtn/ScrollTopBtn";
import CustomerMain from './Customer/customerMain/customerMain';
import FAQ from './Customer/FAQ/FAQ';
import Notice from './Customer/notice/notice';
import Inquiry from './Customer/inquiry/Inquiry';
import ReadPage from './Customer/customerCommonComponant/readPage';
import FAQRead from './Customer/FAQ/FAQread';
import BoardWrite from './Customer/boardWrite/boardWrite';
import SearchPage from './SearchPage/SearchPage';
import { useState } from "react";

export default function App() {
  const [CategoryIdx, setCategoryIdx] = useState(),    // 카테고리 별 메뉴 진입을 위한 State변수
    [SearchKeyword, setSearchKeyword] = useState("");  // 검색 키워드를 받을 State변수

  // 헤더 카테고리 클릭 시 동작 함수
  function navEvt(e) {
    setCategoryIdx(+e.target.id.split(".")[1]);
    window.scrollTo({ top: 0 });
  }

  return (
    <>
      <BrowserRouter>
        <Header navEvt={navEvt} setSearchKeyword={setSearchKeyword} />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/subPageLiving" element={<SubPageLiving getIdx={CategoryIdx} navEvt={navEvt} />} />
          <Route path="/subPageBedroom" element={<SubPageBedroom getIdx={CategoryIdx} navEvt={navEvt} />} />
          <Route path="/subPageDining" element={<SubPageDining getIdx={CategoryIdx} navEvt={navEvt} />} />
          <Route path="/subPageDressroom" element={<SubPageDressroom getIdx={CategoryIdx} navEvt={navEvt} />} />
          <Route path="/ProductDetail" element={<ProductDetail />} />
          <Route path="/customerMain" element={<CustomerMain />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/boardWrite" element={<BoardWrite />} />
          <Route path="/ReadPage" element={<ReadPage />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/inquiry" element={<Inquiry />} />
          <Route path="/FAQRead" element={<FAQRead />} />
          <Route path="/searchPage" element={<SearchPage SearchKeyword={SearchKeyword} />} />
        </Routes>

        <Footer />
      </BrowserRouter>

      <ScrollTopBtn />
    </>
  );
}