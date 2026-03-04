import style from './brands.module.scss'
import { BrandCircle } from '../../../../components/brandCircle'


export function SectionMarcas(){

  const brandsItens: string[]= ["item1", "item2", "item3", "item4", "item5"];

  return(

  <section className={style.sectionMarcas}>
    <div className='containerConteudo'>

      <div className={style.topBrands}>
        <h3>Navegue por marcas</h3>
      </div>

      {/* Renderização das brands conforme lista string */}

      <div className={style.gridBrands}>

        {brandsItens.map((index) => (
            <BrandCircle key={index} />
          ))}

      </div>
    </div>
  </section>
  )
}