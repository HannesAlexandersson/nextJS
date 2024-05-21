import style from './prod.module.css'
import Image from 'next/image';




export default async function Merch() {
   
           const products = await fetch('https://dummyjson.com/products')
           .then(res => res.json())
                    
    

    if(!products){
        return<><p>Loading...</p></>
    }

    return (
        <>
        <h1>My Products:</h1>
        <div className={style.prodCont}>
            {products.products.map((product) => (
                <div key={product.id} className={style.prodWrap}>
                  <div className={style.prodBox}>
                    <h3>{product.title}</h3>
                    <p>From: {product.brand}</p>
                    <p>Price: {product.price}</p>
                    <p>Stock left: {product.stock} </p> 
                    </div>                
                  <button className={style.btn}>BUY</button>
                </div>
            ))}
            </div>
        </>
    );
}

   