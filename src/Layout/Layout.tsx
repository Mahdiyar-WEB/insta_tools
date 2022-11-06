import { FC, Suspense } from "react";
import Loading from "../common/Loading/Loading";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import {useSelector} from "react-redux";

interface IProps {
  children: JSX.Element;
}

const Layout: FC<IProps> = ({ children }) => {
  const {isLoggedIn} = useSelector((state:any)=> state.userDetails);

  return (
    <>
      {!isLoggedIn && <Header />}
      <Suspense fallback={<Loading/>}>{children}</Suspense>
      {!isLoggedIn && <Footer />}
    </>
  );
};

export default Layout;
