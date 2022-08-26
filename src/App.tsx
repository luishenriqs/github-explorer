import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/global";
import Dashboard from "../src/pages/Dashboard";
import Branches from "../src/pages/Branches";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="branches" element={<Branches />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
