import  logoEconverse from '../../assets/logos/logo.svg'
import style from './brandCircle.module.scss'

export function BrandCircle(){
                    
  return(
    <article className={style.articleBrand}>
      <img src={logoEconverse} alt="logo marca econverse" />
    </article>
  )
  
}
