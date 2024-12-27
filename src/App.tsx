import HomePage from "@/pages/home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Adicione novas rotas aqui */}
        {/* <Route path="/about" element={<AboutPage />} /> */}
        {/* <Route path="/contact" element={<ContactPage />} /> */}
        {/* <Route path="/sign-in" element={<SignInPage />} /> */}
        {/* <Route path="/sign-up" element={<SignUpPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
