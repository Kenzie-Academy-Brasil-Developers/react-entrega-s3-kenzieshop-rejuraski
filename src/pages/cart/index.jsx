import { useDispatch, useSelector } from "react-redux";
import CartTotal from "../../cartTotal";
import { removeToCartThunk } from "../../store/module/cart/thunks";
import { Button, Container, Content } from "./styles";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer);

  const handleDelete = (product) => {
    dispatch(removeToCartThunk(product));
  };

  return (
    <div>
      <Container>
        <Content>
          {cart.map((product, index) => (
            <li key={index}>
              <figure>
                <img src={product.image} alt={product.name} />
              </figure>
              <strong>{product.name}</strong>
              <span>
                {product.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
              <div>
                <Button type="button" onClick={() => handleDelete(product)}>
                  <span>Remover</span>
                </Button>
              </div>
            </li>
          ))}
        </Content>
        <CartTotal />
      </Container>
    </div>
  );

  // return (
  //   <div>
  //     <Container>
  //       <Content>
  //         {cart.map((product) => (
  //           <div key={product.id}>
  //             <div>
  //               <img src={product.image} alt={product.name} />
  //               <h2>{product.name}</h2>
  //               <p>
  //                 {product.price.toLocaleString("pt-br", {
  //                   style: "currency",
  //                   currency: "BRL",
  //                 })}
  //               </p>
  //             </div>
  //             <Button onClick={() => handleDelete(product)}>Remover</Button>
  //           </div>
  //         ))}
  //
  //       </Content>
  //     </Container>
  //   </div>
  // );
};

export default Cart;
