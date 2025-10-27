import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CustomerRouters from "./Routers/CustomerRouters";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<CustomerRouters />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

