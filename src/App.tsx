// import { useState } from 'react'

import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import CreateFeedback from "./pages/createFeedback";
import EditFeedback from "./pages/editFeedback";
import FeedBackDetail from "./pages/feedbackDetail";
const Home = lazy(() => import("./pages/home"));

function App() {
  return (
    <div className=" min-h-screen bg-white-300 px-48 pt-16 ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-feedback" element={<CreateFeedback />} />
        <Route path="/edit-feedback" element={<EditFeedback />} />
        <Route path="/feedback-detail" element={<FeedBackDetail />} />
      </Routes>
    </div>
  );
}

export default App;
