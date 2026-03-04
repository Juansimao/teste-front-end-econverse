import logoEconverse from '../../assets/logos/logo.svg'
import style from './header.module.scss'

//import icons conforme layout 
import iconTruck from '../../assets/icons/Truck.svg'
import iconHeart from '../../assets/icons/Heart.svg'
import iconShield from '../../assets/icons/ShieldCheck.svg'
import iconProfile from '../../assets/icons/UserCircle.svg'
import iconPacket from '../../assets/icons/packet.svg'
import iconShop from '../../assets/icons/ShoppingCart.svg'
import iconCart from '../../assets/icons/CreditCard.svg'
import iconSearch from '../../assets/icons/MagnifyingGlass.svg'
import iconcrown from '../../assets/icons/assinantes.svg'


export function Header(){

  return(
    <header>
      <div className='containerConteudo'>
         <div className={style.headerHeight}>

        {/* ------ Header top -------- */}

        <div className={style.topText}>
          
          <div className={style.topItem}>
            <img src={iconShield} alt="icone compra segura" aria-hidden />
            <span className={style.highlightFirst}>Compra </span>
            <span className={style.textFirst}>100% segura</span>
          </div>

          <div className={style.topItem}>
            <img src={iconTruck} alt="icone caminhão de entregas" aria-hidden />
            <span className={style.highlight}>Frete grátis</span>
            <span> acima de R$ 200</span>
          </div>

          <div className={style.topItem}>
            <img src={iconCart} alt="icone cartão" aria-hidden />
             <span className={style.highlight}>Parcele</span>
            <span> suas compras</span>
          </div>

        </div>

          {/* ------ Header main -------- */}
        
        <div className={style.headerMain}>
          <img  className={style.imgLogoHeader} src={logoEconverse} alt="logo da empresa econverse" />
          <form className={style.searchForm}>
            <div>
              <input
                type="text"
                placeholder="O que você está buscando?"
                aria-label="Buscar produtos"/>

                <img src={iconSearch} alt="icone pesquisar " />
            </div>
          </form>
        
          <div className={style.iconsHeader}>
            <button className={style.iconButton} aria-label="Favoritos">
              <img src={iconPacket} className={style.iconPacket} alt="icone pacote" aria-hidden />
            </button>

            <button className={style.iconButton} aria-label="Favoritos">
              <img src={iconHeart} alt="icone coração" aria-hidden />
            </button>

            <button className={style.iconButton} aria-label="Favoritos">
              <img src={iconProfile} alt="icone perfil" aria-hidden />
            </button>

            <button className={style.iconButton} aria-label="Favoritos">
              <img src={iconShop} alt="icone carrinho" aria-hidden />
            </button>
            
          </div>
        </div>
          

          {/* ------ Header menu -------- */}

        <nav className={style.headerMenu}>
          <ul>
            <li><a href="#">Todas categorias</a></li>
            <li><a href="#">Supermercado</a></li>
            <li><a href="#">Livros</a></li>
            <li><a href="#">Moda</a></li>
            <li><a href="#">Lançamentos</a></li>
            <li><a className={style.itemNav} href="#">Ofertas do dia</a></li>
            <li><a href="#"><img  className={style.iconCrown} src={iconcrown} alt="" />Assinatura</a></li>
          </ul>

        </nav>
      </div>
    </div>
  
  

    </header>
  )
}