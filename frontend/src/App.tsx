import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import { Layout } from "./pages/Layout";
import Login from "./pages/Login";
import Projects from "./pages/Projects";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
