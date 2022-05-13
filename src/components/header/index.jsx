import { IoEnterOutline, IoCartOutline } from "react-icons/io5";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Container, Content } from "./styles";

const Header = () => {
  const history = useHistory();

  return (
    <Container>
      <Content>
        <h1 onClick={() => history.push("/")}>
          Kenzie <strong>Shop</strong>
        </h1>
        <ul>
          <li onClick={() => history.push("/cart")}>
            <IoCartOutline size={28} />
            <span>Carrinho</span>
          </li>
          <li>
            <IoEnterOutline size={28} />
            <span>Entrar</span>
          </li>
        </ul>
      </Content>
    </Container>
  );
};

export default Header;
