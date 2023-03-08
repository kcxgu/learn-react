import { useContext } from "react"
import { StoreContext } from "../context-and-reducer/StoreContext"

const Product = ({ item }) => {
    const { addToBasket } = useContext(StoreContext);

    const handleAdd = () => {
        addToBasket(item);
    }

    return (
        <div className="mx-auto px-8 border border-gray-200 rounded-lg">
            <img src={item.image} alt="glasses" />
            <div className="flex flex-row items-center justify-between py-4">
                <div>
                    <p className="text-xl">{item.name}</p>
                    <p className="text-lg">£{item.price.toFixed(2)}</p>
                </div>
                <button className="bg-indigo-500 text-white text-lg font-medium rounded-full p-4"
                    onClick={handleAdd}
                >
                    Add to basket
                </button>
            </div>
        </div>
    )
}

export default Product