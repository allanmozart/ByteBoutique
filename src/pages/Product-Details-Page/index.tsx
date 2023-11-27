import NavBar from "../../components/NavBar";
import ProductDetailsDisplay from "../../components/Product-Details";
import { Page } from "../style";

function ProductDescriptionPage() {
  return (
    <>
      <NavBar />
      <Page>
        <ProductDetailsDisplay></ProductDetailsDisplay>
      </Page>
    </>
  );
}

export default ProductDescriptionPage;
