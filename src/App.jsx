import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Attendance from "./pages/Attendance";
import HomePage from "./pages/HomePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0">
        <Header />
      </div>

      <main className="mt-[52px]">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<Attendance />} />
        </Routes>
        </BrowserRouter>
        
      </main>
      <div className="fixed bottom-0 right-0 left-0">
        <Footer />
      </div>
    </>
  );
}

export default App;
