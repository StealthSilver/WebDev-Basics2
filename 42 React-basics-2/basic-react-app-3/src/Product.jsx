import "./Product.css"

function Product({title, price, features}){
    //rendering arrays
    // const list features.map((feature) => <li>{feature}</li>)
    let styles = {backgroundColor : price > 3000 ?  "blue": "red"};
    
    return(
        <div className="Product" style = {styles}>
            <h3>{title}</h3>
            <h5>Price : {price}</h5>
            {price > 30000 ? <p>"Discount of 5%"</p> : null}
            
        </div>
        
    );
}

export default Product;