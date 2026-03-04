import style from './Banner.module.scss'

export function SectionBanner(){


  return(
    <section className={style.sectionBanner}>
      <div className='containerConteudo'>
      <div className={style.containerTextos}>
        <div className={style.titulo}>
          <h1>Venha conhecer nossas promoções</h1>
        </div>
          <div className={style.subtitulo}>
            <span className={style.spanSubtitulo50off}>50% Off </span>
            <span className={style.spanSubtitulo}>nos produtos </span>
          </div>

        <div>
          <button className={style.btnVerProdutos}>Ver produto</button>
        </div>
        </div>
     </div>
    </section>

  )
}