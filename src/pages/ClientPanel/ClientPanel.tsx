import { Route, Routes } from "react-router-dom";
import PanelAside from "../../components/PanelAside/PanelAside";
import { lazy, useEffect, useState } from "react";
import PanelLayout from "../../components/PanelLayout/PanelLayout";
import { useDispatch } from "react-redux";
import { handleLoggedIn } from "../../features/userSlice/userSlice";
import PanelProfile from "../../components/PanelProfile/PanelProfile";
import PanelWallet from "../../components/PanelWallet/PanelWallet";
const PanelDialog = lazy(
  () => import("../../components/PanelDialog/PanelDialog")
);
const PanelProducts = lazy(
  () => import("../../components/PanelProducts/PanelProducts")
);
const PanelHistory = lazy(
  () => import("../../components/PanelHistory/PanelHistory")
);

const ClientPanel = () => {
  const [isShow, setIsShow] = useState(false);
  const dispatch = useDispatch();

  const handleCheckShow = () => {
    if (window.innerWidth >= 1024) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  };

  useEffect(() => {
    handleCheckShow();
    dispatch(handleLoggedIn());
  }, []);

  return (
    <main className="d-flex ClientPanel bg-white">
      {isShow && <PanelAside />}
      <PanelLayout>
        <Routes>
          <Route path="/" element={<PanelDialog />} />
          <Route path="/products" element={<PanelProducts />} />
          <Route path="/history" element={<PanelHistory />} />
        </Routes>
      </PanelLayout>
      <PanelProfile />
      <PanelWallet />
    </main>
  );
};

export default ClientPanel;