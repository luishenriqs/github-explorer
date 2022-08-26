import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/global";
import Dashboard from "../src/pages/Dashboard";
import Repository from "../src/pages/Repository";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="repository" element={<Repository />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
