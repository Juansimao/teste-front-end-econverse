import style from './cardCategory.module.scss'
import type {cardCategoryProps}  from '../../types/cardCategory'


export function CardCategory({icon, label, active = false}: cardCategoryProps){

  return(
    <article className={`${style.card} ${active ? style.active : ''}`}>
      <div className={style.icon}>
        <img src={icon} alt={label} />
      </div>

      <span className={style.label}>{label}</span>


    </article>
  )
}