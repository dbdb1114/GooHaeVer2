import ProductContainer from "../ForProduct/ProductContainer/ProductContainer";
import ProductBox from "../ForProduct/ProductBox/ProductBox";
import "./SubPageProducts.css";

// getData : 카테고리 하위 메뉴 별 데이터를 받음
export default function SubPageProducts({ getData }) {
    return (
        <>
            <section className="categoryBest">
                <h2>Best Product</h2>

                <ProductContainer>
                    <ProductBox getData={getData.Best} />
                </ProductContainer>
            </section>

            <section className="categoryProducts">
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