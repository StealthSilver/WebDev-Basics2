import Product from "./Product"

function ProductTab(){
    return (
        <>
         <Product title = "phone" price={3000}/>
         <Product title = "laptop" price={42300}/>
         <Product title = "pen" price={30}/>
        </>);
}

export default ProductTab;