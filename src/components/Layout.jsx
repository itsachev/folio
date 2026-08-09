import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import Header from "@/components/Header.jsx";
import LenisProvider from "@/providers/LenisProvider.jsx";
import Preloader from "@/components/preloader/Preloader.jsx";

function Layout() {
  const isLoading = useSelector((state) => state.app.isLoading);

  useEffect(() => {
    document.body.classList.toggle("js-scroll-disabled", isLoading);
  }, [isLoading]);

  return (
    <LenisProvider>
      <Header />
      <Outlet />
      <Preloader />
    </LenisProvider>
  );
}

export default Layout;
