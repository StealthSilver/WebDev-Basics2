import "./Product.css";
import Price from "./Price";

function Product({ title, idx }) {
    // Ensure idx is provided as a prop and is valid
    let oldPrices = ["12,495", "1,100", "1,599", "3,413"];
    let newPrices = ["11,432", "4,231", "4,234", "4,123"];

    let description = [["8000 DPI", "5 buttons" ], ["Designed for iPad PRO", "very small"], ["wireless", "hefef"], ["intutive surface", "optical"]]

    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
           
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
        </div>
    );
}

export default Product;