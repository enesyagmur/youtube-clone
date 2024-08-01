import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import MasterLayout from "./Layout/MasterLayout";
import { customRouter } from "./Router/customRouter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<MasterLayout />}>
          {customRouter.map((item, index) => (
            <Route {...item} key={index} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
