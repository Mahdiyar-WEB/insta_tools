import styles from "./panelProducts.module.css";
import product1 from "../../assets/images/product1.jpeg";
import product2 from "../../assets/images/product2.jpeg";
import PanelProduct from "./PanelProduct/PanelProduct";

const PanelProducts = () => {
  return (
    <article className={`${styles.container} row`}>
      <PanelProduct
        title="Product1"
        text={`The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.`}
        image={product1}
        price="2"
      />
      <PanelProduct
        title="Product2"
        text={`The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in London, UK.`}
        image={product2}
        price="3"
      />
    </article>
  );
};

export default PanelProducts;
