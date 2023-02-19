import ProductContainer from "../ForProduct/ProductContainer/ProductContainer";
import ProductBox from "../ForProduct/ProductBox/ProductBox";
import "./SearchPageProducts.css";

export default function SearchPageProducts({ getData }) {
    return (
        <>
            <section className="SearchBest">
                <h2>Best Product</h2>

                <ProductContainer>
                    <ProductBox getData={getData.Best} />
                </ProductContainer>
            </section>

            <section className="SearchProduct">
                <h3>Products</h3>

                <ProductContainer>
                    <ProductBox getData={getData.Product1} />
                </ProductContainer>

                <ProductContainer>
                    <ProductBox getData={getData.Product2} />
                </ProductContainer>
            </section>
        </>
    );
}