import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login"
import Home from "./pages/Home"
import Translator from "./pages/Translator"
import About from "./pages/About"
import Faq from "./pages/Faq"
import Chat from "./pages/Chat"
import CreateFaq from "./pages/CreateFaq"




function App() {
  const [user, setUser] = useState(null);

  return (
    
      <Router>
        
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/translator" element={<Translator/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/faq" element={<Faq/>}/>
          <Route path="/chat" element={<Chat/>}/>
          <Route path="/createFaq" element={<CreateFaq/>}/>
        </Routes>
      </Router>
    
  );
}

export default App;