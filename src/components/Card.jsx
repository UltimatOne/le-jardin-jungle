import "../styles/Card.css"
function Cart(){
    const monsteraPrice = 8;
    const ivyPrice = 10;
    const flowerPrice = 15;
    return (<div className="lmj-cart">
        <h2>Panier</h2>
        <ul>
            <li>Monstera : {monsteraPrice}€</li>
            <li>Lierre : {ivyPrice}€</li>
            <li>fleurs : {flowerPrice}€</li>
        </ul>
        total : {monsteraPrice + ivyPrice + flowerPrice}€
    </div>)
}
export default Cart;