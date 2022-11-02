import { FC } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

interface IProps {
  children: JSX.Element;
}

const Layout: FC<IProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
