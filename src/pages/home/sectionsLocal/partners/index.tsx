import style from './partners.module.scss'
import { PartnersRetangule } from '../../../../components/partnersRetangle'


export function SectionsParteners(){


  return(
   <section>
      <div className='containerConteudo'>
        <div className={style.sectionPartners}>
          <PartnersRetangule/>
          <PartnersRetangule/>
        </div>
    </div>

   </section>
  )
}