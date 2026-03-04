import { Header } from '../../components/header'
import { SectionBanner } from './sectionsLocal/banner/index'
import { Footer } from '../../components/footer'
import { SectionsNewsletter } from './sectionsLocal/newsletter'
import { SectionMarcas } from './sectionsLocal/brands'
import { SectionsParteners } from './sectionsLocal/partners'
import { SectionCategories } from './sectionsLocal/categories'
import { SectionProducts } from '../../components/relatedProducts'
//import { ProductModal } from '../../components/modalProduct'

export function Home(){

  return(
    <>
    <Header/>
    <main>
      <SectionBanner/>
      <SectionCategories/>
      <SectionProducts showNav={true}/>
      <SectionsParteners/>
      <SectionProducts title='Ver mais' showNav={false}/>
      <SectionsParteners/>
      <SectionMarcas/>
      <SectionProducts title='Ver todos' showNav={false}/>      
    </main>
    <SectionsNewsletter/>
    <Footer/>
    </>
  )
}