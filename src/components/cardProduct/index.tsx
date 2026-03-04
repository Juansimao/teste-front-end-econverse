import style from './cardProduct.module.scss'
import type { Product } from '../../types/product'



interface CardProductProps {
  product: Product,
  onBuy: () => void
}


export function CardProduct({ product, onBuy }: CardProductProps){

  

  return(
    
    <article className={style.articleProduct}>
      <img src={product.photo}  alt={product.productName}  />

      <p className={style.description}>    
        {product.descriptionShort}
      </p>

      <div className={style.prices}>
          <span className={style.oldPrice}>R$ 30,90</span>
          <strong className={style.currentPrice}>{product.price.toLocaleString('pt-BR', {

                  style: 'currency',
                  currency: 'BRL',
                })}

          </strong>
      </div>

      <p className={style.payDescription}>
        ou 2x de R${(product.price / 2).toFixed(2)} sem juros
      </p>

      <span className={style.freeShipping}>
        Frete grátis
      </span>

      <button className={style.buyButton} onClick={onBuy}>
        COMPRAR
      </button>
  </article>

    )
}