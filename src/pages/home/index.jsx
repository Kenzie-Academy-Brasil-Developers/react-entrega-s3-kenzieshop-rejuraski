import { useDispatch, useSelector } from "react-redux";
import formatValue from "../../utils/formatValue";
import { addToCartThunk } from "../../store/module/cart/thunks";
import { Button, Container, Content } from "./styles";
import { toast } from "react-toastify";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer);

  const handleAdd = (product) => {
    dispatch(addToCartThunk(product));
    toast.success("Item adicionado ao carrinho!");
  };

  return (
    <div>
      <Container>
        <Content>
          {products.map((product) => (
            <li key={product.id}>
              <figure>
                <img src={product.image} alt={product.name} />
              </figure>
              <strong>{product.name}</strong>
              <span>{formatValue(product.price)}</span>
              <div>
                <Button type="button" onClick={() => handleAdd(product)}>
                  <span>Adicionar ao carrinho</span>
                </Button>
              </div>
            </li>
          ))}
        </Content>
      </Container>
    </div>
  );
};

export default Home;
