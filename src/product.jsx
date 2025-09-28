import "./Product.css";
import Price from "./price.jsx";

function Product({title, idx}){
    let oldPrice=["12,499","9,990","15,700","599"];
    let newPrice=["9,990","7880","10,000","400"];
    let Description=[["8000 DPI","5 Programmable Buttons"],
     ["intuitive surface", "designing"], 
     ["design for ipad", "optical"],
     ["wireless", "ergonomic design"]];

    return(
        <div className="Product" >
            <h4>{title}</h4>
            <p>{Description[idx][0]}</p>
            <p>{Description[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
        </div>
    )
}

export default Product;