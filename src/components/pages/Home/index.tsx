import { useContext, useState } from "react";
import Modal from "react-modal";

//services
import { UserContext } from "../../../services/contexts";
import { useAppSelector } from "../../../services/hooks/useStore";

//common components
import ProductModal from "../../common/ProductModal";

//types
import { ProductProps } from "../../../services/redux/features/Products";

//styles
import logoutImg from "../../../assets/logout.svg";
import {
  Container,
  Content,
  Header,
  Main,
  UserInfo,
  UserName,
  IconButton,
  GridProducts,
} from "./styles";

Modal.setAppElement("#root");

const Home = () => {
  const { user, logout } = useContext(UserContext);
  const products: ProductProps[] = useAppSelector(
    (state) => state.products.value
  );

  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [product, setProduct] = useState<ProductProps>();

  const handleLogout = () => {
    logout();
  };

  const handleEditProduct = (selectedProduct: ProductProps) => {
    setProduct(selectedProduct);
    handleOpenProductModal();
  };

  const handleOpenProductModal = () => {
    setIsProductModalOpen(true);
  };

  const handleCloseProductModal = () => {
    setIsProductModalOpen(false);
  };

  return (
    <Container>
      <Content>
        <Header>
          <UserInfo>
            <span>
              Bem vindo, <UserName>{user.name}!</UserName>
            </span>
            <IconButton onClick={handleLogout}>
              <img src={logoutImg} alt="logout icon" />
            </IconButton>
          </UserInfo>
        </Header>
        <Main>
          <GridProducts>
            {products.map((product, index) => (
              <div
                className="product"
                key={index}
                onClick={() => handleEditProduct(product)}
              >
                <h4>{product.name}</h4>
                <span>{product.description}</span>
                <img src={product.img} alt={"fruit img" + product.name} />
              </div>
            ))}
          </GridProducts>
        </Main>
        <ProductModal
          isOpen={isProductModalOpen}
          onRequestClose={handleCloseProductModal}
          product={product}
        />
      </Content>
    </Container>
  );
};

export default Home;
