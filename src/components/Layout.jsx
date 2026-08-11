import { Outlet } from "react-router-dom";

import Header from "@/components/Header.jsx";
import LenisProvider from "@/providers/LenisProvider.jsx";
import Preloader from "@/components/preloader/Preloader.jsx";

function Layout() {
  return (
    <LenisProvider>
      <Header />
      <Outlet />
      <Preloader />
    </LenisProvider>
  );
}

export default Layout;
