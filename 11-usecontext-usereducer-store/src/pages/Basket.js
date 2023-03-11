import { useContext } from 'react'
import BasketProduct from '../components/BasketProduct';
import Navbar from '../components/Navbar'
import { StoreContext } from '../context-and-reducer/StoreContext'

const Basket = () => {
    const { products, total } = useContext(StoreContext);

    return (
        <div className="w-full max-w-3xl mx-auto">
            <Navbar />
            <div className="flex flex-row items-center justify-between mt-2 py-6 px-10 text-xl font-medium">
                <h3>Your Basket</h3>
                <p>Total: £{total.toFixed(2)}</p>
            </div>
            {products.map((product, i) =>
                <BasketProduct
                    key={i}
                    item={product}
                />
            )}
        </div>
    )
}

export default Basket