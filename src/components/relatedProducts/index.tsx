import style from './relatedProducts.module.scss'
import { CardProduct } from '../cardProduct'
import { api } from '../../services/apiProducts'
import { useEffect, useState } from 'react'
import type { SectionProductsProps } from '../../types/relatedProducts'
import type { Product } from '../../types/product'
import { ProductModal } from '../modalProduct'



export function SectionProducts({title, showNav}: SectionProductsProps) {
  const [loading, setLoading] = useState<boolean>(true)
  const [products, setProducts] = useState<Product[]>([])
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null); //  null fecha o modal

  // ---------------------- funções abrir modal com o produto props / fechar modal --------------------

  function openModal(product: Product) {
  setSelectedProduct(product);
}

  function closeModal() {
    setSelectedProduct(null);
  }


  //------------------------ lógica slice produtos ------------------


  const visibleCount = 4
  const [startIndex, setStartIndex] = useState(0)

  const visibleProducts = products.slice(
    startIndex,
    startIndex + visibleCount
  )

  // ------------------------ botao avançar 1 card ------------------

  function handleNext() {
    if (startIndex + visibleCount < products.length) {
      setStartIndex(prev => prev + 1)
    }
  }

  // ------------------------ botao voltar 1 card -------------------

  function handlePrev() {
    if (startIndex > 0) {
      setStartIndex(prev => prev - 1)
    }
  }

  // ------------------------ chamada de api -----------------------

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await api.get("/teste-front-end/junior/tecnologia/lista-produtos")
        setProducts(response.data.products)
      } catch (error) {
        console.error('Erro ao buscar produtos', error)
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

  if (loading) return <p>Carregando...</p>
  
  return (
    
  <section className={style.relatedProducts}>
    <div className="containerConteudo">

      {/* Título da seção */}
      <h2 className={style.titleSection}>Produtos relacionados</h2>
      <h3 className={style.subtitle}>{title}</h3>

      {/* Navegação por categorias (opcional) */}
      {showNav && (
        <header className={style.relatedProductsHeader}>
          <nav
            className={style.categoriesNav}
            aria-label="Categorias de produtos"
          >
            <button type="button" className={style.active}>Celular</button>
            <button type="button">Acessórios</button>
            <button type="button">Tablets</button>
            <button type="button">Notebooks</button>
            <button type="button">TVs</button>
            <button type="button">Ver todos</button>
          </nav>
        </header>
      )}

      {/* Carrossel de produtos */}
      <div className={style.carouselWrapper}>

        {/* Botão anterior */}
        <button
          type="button"
          className={style.arrowLeft}
          onClick={handlePrev}
          disabled={startIndex === 0}
          aria-label="Produtos anteriores"
        >
          ‹
        </button>

        {/* Lista de produtos visíveis */}
        <div className={style.productsGrid}>
          {visibleProducts.map(product => (
            <CardProduct
              key={product.productName}
              product={product}
              onBuy={() => openModal(product)} 
            />
          ))}
        </div>

        {/* Botão próximo */}
        <button
          type="button"
          className={style.arrowRight}
          onClick={handleNext}
          disabled={startIndex + visibleCount >= products.length}
          aria-label="Próximos produtos"
        >
          ›
        </button>

      </div>
    </div>

     {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={closeModal} />
      )}

  </section>

)
}