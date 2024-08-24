import { BrowserRouter, Route, Routes } from "react-router-dom";
import MasterLayout from "./Layout/MasterLayout";
import { customRouter } from "./Router/customRouter";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MasterLayout />}>
          {customRouter.map((item, index) => (
            <Route {...item} key={index} />
          ))}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// sayfanın iconunu değiştirmeye çalışıyorum
// kolaysa video yorumlarını eklemeye çalışacağım
// + neler ekleyebilirim
// main branch e pushlama linkedinde post
