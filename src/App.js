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

// vercel e deploy ettim ama px olarak değer verdiklerimde sorun var galiba ana sayfayı düzelttim ama shorts uzunlıgu hala hatalı
// vercel de sayfayı responsive için iyice denemem lazım
