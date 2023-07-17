import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReposWrapper from "./components/ReposWrapper";
import RepoDetails from "./components/RepoDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReposWrapper></ReposWrapper>} />
        <Route path="/repo/:repoName" element={<RepoDetails></RepoDetails>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
