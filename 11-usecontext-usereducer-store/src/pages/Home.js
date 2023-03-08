import React from 'react';
import Navbar from '../components/Navbar';
import { storeData } from '../Data';
import Product from '../components/Product';

const Home = () => {
    return (
        <div>
            <Navbar />
            <h2 className='text-4xl tracking-wide py-4 pl-8'>New In</h2>
            <div className='flex flex-col items-center gap-4 lg:grid lg:grid-cols-3 px-8'>
                {storeData.map((item, i) =>
                    <Product
                        key={i}
                        item={item}
                    />
                )}
            </div>
        </div>
    )
}

export default Home