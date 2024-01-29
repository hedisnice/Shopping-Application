import Item from "./Item";
import {useCart} from "../context/CartContext"
export default function Cart(){
    const {products,total,formatMoney} = useCart()
    return(
        <div className="cart">
            <h1 style={{textAlign:"center"}}>
                {products.length > 0 ? `ยอดชำระเงินรวม : ${formatMoney(total)} บาท` : "ไม่มีสินค้าในตะกร้า"}
            </h1>
            {products.map((data)=>{
                return <Item key={data.id} {...data}/>
            })}
        </div>
    );
}