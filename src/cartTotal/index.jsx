import { useSelector } from "react-redux";
import { ContainerTotal } from "./styles";

const CartTotal = () => {
  const cart = useSelector((state) => state.cartReducer);
  const total = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <ContainerTotal>
      <h3>Total da compra:</h3>
      {total.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
    </ContainerTotal>
  );
};

export default CartTotal;
