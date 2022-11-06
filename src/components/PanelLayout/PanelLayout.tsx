import PanelHeader from "./PanelHeader/PanelHeader";
import { FC, Suspense, useEffect, useState } from "react";
import loading from "../../assets/images/loading.svg";
import styles from "./panelLayout.module.css";

interface IProps {
  children: JSX.Element;
}

const PanelLayout: FC<IProps> = ({ children }) => {
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  }, []);

  return (
    <>
      {isShow && <PanelHeader />}
      <Suspense
        fallback={
          <div
            className={styles.loading}
          >
            <img src={loading} alt="loading" />
          </div>
        }
      >
        {children}
      </Suspense>
    </>
  );
};

export default PanelLayout;
