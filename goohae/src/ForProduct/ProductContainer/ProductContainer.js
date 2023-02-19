import "./ProductContainer.css";

export default function ProductContainer ({children}) {
    return (
        <div className="productContainer">
            {children}
        </div>
    );
}