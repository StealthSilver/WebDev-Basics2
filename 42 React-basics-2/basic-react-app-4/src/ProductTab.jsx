import Product from "./Product"

function ProductTab(){
    let features = ["hi tech" , "durable", "fast"];
    // let options = {a: "high tech", b:"durable", c:"fast"};
    // rendering arrays
    // let options = [<li>"hi-tech"</li>, <li>"hi-tech"</li>,<li>"hi-tech"</li>];
    return (
        <>
         <Product title = "phone" price={3000} features = {features} 
         />
         <Product title = "laptop" price={42300}/>
         <Product title = "pen" price={30}/>
        </>);
}

export default ProductTab;