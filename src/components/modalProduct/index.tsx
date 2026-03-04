import { useState } from "react";
import type { Product } from "../../types/product";
import styles from "./modalProduct.module.scss";
import {BiX} from "react-icons/bi";

type card = {
  product: Product,
  onClose: () => void
}

export function ProductModal({product, onClose}: card) {

  const [counter, setCounter] = useState<number>(1)

  // ------------------ função contador aumentar item selecionado ----------------

  function counterDown(){
    if (counter == 1){
    setCounter(1)

    }
    else{
      setCounter(down => down - 1)
    }
    }
    
  // ------------------ função contador diminuir item selecionado ----------------
  
  function counterUp(){
    setCounter(up => up + 1)
  }

  
  
  return (
    // Overlay do modal
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>

        {/* Botão de fechar */}
        <button
          type="button"
          className={styles.closeButton}
          aria-label="Fechar modal"
          onClick={onClose}>

            <BiX/>
            
        </button>

        {/* Conteúdo do modal */}
        <div className={styles.modalLeft}>
          <img src={product.photo} alt={product.productName} />
        </div>

        <div className={styles.modalRight}>

          {/* Informações do produto */}
          <div>
            <h2 className={styles.modalTitle}>
              {product.productName}
            </h2>

            <p className={styles.modalPrice}>{product.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
            </p>

            <p className={styles.modalDescription}>
              {product.descriptionShort}
            </p>

            <a href="#" className={styles.modalLink}>
              Veja mais detalhes do produto &gt;
            </a>
          </div>

          {/* Ações */}
          <div className={styles.modalActions}>
            <div className={styles.quantity}>
              <button onClick={counterDown}>−</button>
              <span>{counter}</span>
              <button onClick={counterUp}>+</button>
            </div>

            <button className={styles.buyButton} onClick={() => 
            (onClose(), alert(`${product.productName} foi adicionado ao carrinho!`)
            )}>
            COMPRAR
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}