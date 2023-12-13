import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import ObjectDetection from "./components/ObjectDetection";
import BlurDetection from "./components/BlurDetection";
import Analytics from "./components/Analytics";
import Settings from "./components/Settings";
import AbstractSummary from "./components/AbstractSummary";
import GenAIChatbot from "./components/GenAIChatbot";
import Home from "./components/Home";
function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genAIChatbot" element={<GenAIChatbot />} />
        <Route path="/abstractSummary" element={<AbstractSummary />} />
        <Route path="/objectDetection" element={<ObjectDetection />} />
        <Route path="/blurDetection" element={<BlurDetection />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
