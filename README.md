# Econverse Front-End Case

Este projeto foi desenvolvido como parte de um **desafio técnico para a vaga de estágio Front-End na Econverse**.

A aplicação consiste em uma **interface de e-commerce**, com listagem de produtos e visualização dos itens em um modal com suas principais informações, seguindo o layout proposto no case.

O objetivo do projeto é demonstrar boas práticas de desenvolvimento front-end, como componentização e organização de código.

---


## Deploy do projeto 

A aplicação está disponivel no link abaixo:

https://teste-front-end-econverse-five.vercel.app/


---

## Tecnologias Utilizadas

* React
* TypeScript
* Vite
* SCSS Modules
* Axios

---

## Funcionalidades

* Listagem de produtos
* Modal de visualização de produto
* Consumo de API (com fallback para mock local)
* Componentização da interface
* Organização modular de estilos
* Layout responsivo

---

## Estrutura geral do Projeto

```
src
 ├── assets
 ├── components
 │   ├── cardProduct
 │   ├── modalProduct
 │   ├── header
 │   └── footer
 │
 ├── pages
 │   └── home
 │       └── sectionsLocal
 │           ├── banner
 │           ├── categories
 │           ├── brands
 │           ├── partners
 │           └── newsletter
 │
 ├── services
 │   └── apiProducts.ts
 │
 ├── styles
 │   ├── designSystem.scss
 │   ├── global.scss
 │   └── mixins.scss
 │
 ├── types
 │   └── product.ts
 │
 └── data
```

A estrutura foi organizada separando:

* **components** → elementos reutilizáveis da interface
* **sections** → seções específicas da página
* **services** → comunicação com API
* **styles** → design system e mixins globais
* **data** → dados mockados
* **types** → tipagens TypeScript utilizadas para a estrutura de dados da aplicação

---

## Como rodar o projeto

Clone o repositório

```
git clone https://github.com/Juansimao/teste-front-end-econverse.git
```

Entre na pasta do projeto

```
cd teste-front-end-econverse
```

Instale as dependências

```
npm install
```

Execute o projeto

```
npm run dev
```

A aplicação estará disponível em:

```
http://localhost:5173
```

## Build do projeto

Para gerar a versão de produção da aplicação execute:

```
npm run build
```

Após o build, os arquivos otimizados serão gerados na pasta:

dist

Para visualizar o build localmente:

```
npm run preview
```

---

## Autor

Juan Simão

GitHub
https://github.com/Juansimao

LinkedIn
www.linkedin.com/in/juansimão


