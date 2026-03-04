import styles from './categories.module.scss';
import { CardCategory } from '../../../../components/cardCategory';
import { categories } from '../../../../data/categories';


export function SectionCategories(){

  return(
    <section className={styles.SectionCategories}>
      <div className={styles.inner}>
        <div className={styles.gridCategory}>
          {categories.map((item) => (
            <CardCategory
              icon={item.icon}
              label={item.label}
              active={item.active}
              key={item.id}
              />
          ))}
          

        </div>
      </div>
    </section>

  )
}

