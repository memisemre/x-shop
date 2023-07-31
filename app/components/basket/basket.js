import Style from "./comp.module.scss";
import { BsFillBasket3Fill } from "react-icons/bs";
const Basket = () => {
  {
    /*TODO : Dynamic Product Piece*/
  }
  const productPiece = 0;
  return (
    <div className={Style.basketContainer}>
      <BsFillBasket3Fill />
      <p className={Style.productPiece}>{productPiece}</p>
    </div>
  );
};

export default Basket;
