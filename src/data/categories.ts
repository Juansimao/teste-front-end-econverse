// lista categoria para carregar no componente

import tecnologiaIcon from '../assets/icons/tecnologia.svg'
import supermercadoIcon from '../assets/icons/supermercados.svg'
import bebidasIcon from '../assets/icons/bebidas.svg'
import ferramentasIcon from '../assets/icons/ferramentas.svg'
import saudeIcon from '../assets/icons/cuidados-de-saude.svg'
import esportesIcon from '../assets/icons/corrida.svg'
import modaIcon from '../assets/icons/moda.svg'

export const categories = [
  { id: 1, label: 'Tecnologia', 
    icon: tecnologiaIcon, 
    active: true },

  { 
    id: 2, 
    label: 'Supermercado', 
    icon: supermercadoIcon },

  {
     id: 3, 
    label: 'Bebidas', 
    icon: bebidasIcon },

  {
     id: 4, 
    label: 'Ferramentas', 
    icon: ferramentasIcon },

  {
     id: 5, 
    label: 'Saúde', 
    icon: saudeIcon },

  { 
    id: 6, 
    label: 'Esportes e Fitness', 
    icon: esportesIcon },

  {
     id: 7, 
    label: 'Moda', 
    icon: modaIcon },
]