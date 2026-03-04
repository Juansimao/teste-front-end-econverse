import style from './footer.module.scss'
import logoEconverse from '../../assets/logos/logo.svg'
import iconFacebook from '../../assets/icons/facebook.svg'
import iconInstagram from '../../assets/icons/instagram.svg'
import iconLinkedin from '../../assets/icons/linkedin.svg'

export function Footer(){

  return(

    <footer>
    <div className="containerConteudo">
      <div className={style.footer}>

        {/* ----------------- section informaçoes ---------------- */}

        <section className={style.sectionInfoEconvese}>
          <img src={logoEconverse} alt="Econverse" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <div className={style.redesSociais}>
            <a href="#" aria-label="Instagram"><img src={iconInstagram} alt="" /></a>
            <a href="#" aria-label="Facebook"><img src={iconFacebook} alt="" /></a>
            <a href="#" aria-label="LinkedIn"><img src={iconLinkedin} alt="" /></a>
          </div>
        </section>

        {/* ----------------- nav Institucional ---------------- */}

        <nav className={style.navFooter}>
          <h4>Institucional</h4>
          <ul>
            <li><a href="#">Sobre nós</a></li>
            <li><a href="#">Movimento</a></li>
            <li><a href="#">Trabalhe conosco</a></li>
          </ul>
        </nav>

        {/* ----------------- nav ajuda ---------------- */}

        <nav className={style.navFooter}>
          <h4>Ajuda</h4>
          <ul>
            <li><a href="#">Suporte</a></li>
            <li><a href="#">Fale conosco</a></li>
            <li><a href="#">Perguntas frequentes</a></li>
          </ul>
        </nav>

      {/* ----------------- nav termos ---------------- */}
        
        <nav className={style.navFooter}>
          <h4>Termos</h4>
          <ul>
            <li><a href="#">Termos e Condições</a></li>
            <li><a href="#">Política de Privacidade</a></li>
            <li><a href="#">Troca e Devolução</a></li>
          </ul>
        </nav>
      </div>
    </div>
    <div className={style.bottomFooter}>
      <div className='containerConteudo' >
        <p className={style.bottomText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fugit.</p>
      </div>
   </div>
</footer>

  )

}
