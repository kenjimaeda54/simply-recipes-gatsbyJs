# Simply recipes
Sofwtare construido em gatsby,saite de receitas

## Motivacao
Aprender o uso de gatsby para constuir saites SSG

## Feature
- Para uso de css global em gatbsy precisa importar em um arquivo que se repete, no meu caso foi o arquivo Layout
- Para lidar com páginas dinâmicas através de um evento  essencial o uso do [slug](https://www.npmjs.com/package/slug)
- Slug para evitar carácter especiais na url
- Tem duas abordagens para arquivos dinâmicos, usando api [file system route](https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/)
- E outra abordagem  [node](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/)
- Na abordagem pelo file system routes, vai se referenciar pelo grapql, no saite estava usando CMS do [contentful](https://www.gatsbyjs.com/plugins/gatsby-source-contentful/), este CMS fornece um plugin, grapql neste caso reconhece ContentfulRecipes ,por isso o arquivo {Contentful.title}.jsx
- Abordagem pelo system e através dos recursos disponíveis no graqpl
- Na abordagem do node js utiliza  a palavra reservada createPage
- Um dos recursos do node e componente, neste casso caminho do arquivo que vai gerar as paginas dinâmicas
- Preferencia e caminho absoluto para indicar os arquivos

```typescript
//com node js
const path = require("path")
const slugify = require("slugify")
//https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
//outra abordagem de criar paginas dinâmicas

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query getTags {
      allContentfulRecipes {
        nodes {
          content {
            tags
          }
        }
      }
    }
   
  `)
  result.data.allContentfulRecipes.nodes.forEach(it => {
    it.content.tags.forEach(tag => {
      createPage({
        path: `/tags/${slugify(tag, { lower: true })}`,
        //__dirname é o diretório atual e interessante usar porque
        //pega o caminho absoluto
        component: path.resolve(__dirname, "src/templates/TagPage.jsx"),
        context: {
          tag,
        },
      })
    })
  })
}

```

##

- Grapql usa em cada página variáveis de contenxto ocultas
- Podemos acessar elas para realizar logica.
- Exemplo: Caso  consultar uma query e exportar, corpo da função principal tem acesso a essa consulta
- Em cenários que nao  são paginas, precisa o uso do useStaticQuery


```typescript
//paginas

export default function About({ data }) {
  const {
    allContentfulRecipes: { nodes },
  } = data //sempre ao fazer um graphql, em uma page ja e inserido o data de forma automatica
  return (
    <Layout>
      <Seo titlePage="About" />
      <section className={Styles.section}>
        <article className={Styles.article}>
          <h2>I'm baby coloring book poke taxidermy</h2>
          <p>
            Taxidermy forage glossier letterpress heirloom before they sold out
            you probably haven't heard of them banh mi biodiesel chia.
          </p>
          <p>
            Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia
            retro.
          </p>
          <p>
            <ButtonContact>
              <Link className={Styles.contactLink} to="Contact">
                Contact
              </Link>
            </ButtonContact>
          </p>
        </article>
        {/*as e o elemento que eele vai referenciar,placeholder e fundo quando imagem esta carregando
           default e constraint   */}
        <StaticImage
          src="../../assets/images/about.jpeg"
          alt="Person pull salt bawl"
          placeholder="blurred"
          className={Styles.img}
          as="section"
        />
      </section>
      <footer className={Styles.footer}>
        <h3>Look at this Awesomesouce!</h3>
        <div>
          <RecipeList recipes={nodes} />
        </div>
      </footer>
    </Layout>
  )
}
export const query = graphql`
  {
    allContentfulRecipes(
      sort: { order: ASC, fields: title }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`
//================= componentes

export default function About({ data }) {
  const {
    allContentfulRecipes: { nodes },
  } = data //sempre ao fazer um graphql, em uma page ja e inserido o data de forma automatica
  return (
    <Layout>
      <Seo titlePage="About" />
      <section className={Styles.section}>
        <article className={Styles.article}>
          <h2>I'm baby coloring book poke taxidermy</h2>
          <p>
            Taxidermy forage glossier letterpress heirloom before they sold out
            you probably haven't heard of them banh mi biodiesel chia.
          </p>
          <p>
            Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia
            retro.
          </p>
          <p>
            <ButtonContact>
              <Link className={Styles.contactLink} to="Contact">
                Contact
              </Link>
            </ButtonContact>
          </p>
        </article>
        {/*as e o elemento que eele vai referenciar,placeholder e fundo quando imagem esta carregando
           default e constraint   */}
        <StaticImage
          src="../../assets/images/about.jpeg"
          alt="Person pull salt bawl"
          placeholder="blurred"
          className={Styles.img}
          as="section"
        />
      </section>
      <footer className={Styles.footer}>
        <h3>Look at this Awesomesouce!</h3>
        <div>
          <RecipeList recipes={nodes} />
        </div>
      </footer>
    </Layout>
  )
}
export const query = graphql`
  {
    allContentfulRecipes(
      sort: { order: ASC, fields: title }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
```

##
- Para lidar com imagens existe um plugin muito interessante
- [Gatsby image](https://www.gatsbyjs.com/plugins/gatsby-plugin-image) existe duas abordagens,o uso do StaticImage e o GatsbyImage
- StaticImage e para uso de imagens locais e o GabsyImage para uso dinâmico
- Ambos normalmente usaremos sua classe para determinar o comportamento
- GatsbyImage normalmente trabalha em conjunto com o getImage, interessante dessa abordagem que evitamos quebrar o sofwatre caso não encontrar imagem
- Outro recurso interessante e o uso da propriedade Layout, existe constrainted,fullWidth,fixed
- Constrainted se molda conforme o pai,fullWidth ocupa espaço todo e fixed literalmente fixo


```typescript
//fotos dinamicas
export default function RecipeList({ recipes = [] }) {
  return (
    <div className={Styles.container}>
      {recipes.map(it => {
        const { image, title, cookTime, content, id, prepTime } = it
        const dataImage = getImage(image) //isso evita erros caso nao econtrar igames
        const slug = slugify(title, { lower: true })
        return (
          <Link to={`/${slug}`} key={id}>
            <article className={Styles.article}>
              <GatsbyImage
                className={Styles.img}
                image={dataImage}
                alt={title}
              />
              <div>
                <h3>{title}</h3>
                <span>Prep: {prepTime}min |</span>{" "}
                <span>Cook: {cookTime}min</span>
              </div>
            </article>
          </Link>
        )
      })}
    </div>
  )
}

//===========================
//fotos estaticas

export default function Home() {
  return (
    <Layout>
      <Seo titlePage="Home" descriptionPage="This home page" />
      <header className={Styles.header}>
        <StaticImage
          src="../assets/images/main.jpeg"
          alt="main image of the site"
          className={Styles.headerImage}
          layout="fullWidth"
        />
        <div className={Styles.title}>
          <h1>Simply Recipes</h1>
          <h3>No fluff, Just recipes</h3>
        </div>
      </header>
      <footer className={Styles.footer}>
        <AllRecipes />
      </footer>
    </Layout>
  )
}





```

##
- Para lidar com fontes de forma performática e interessante o uso do [gatsby web fonts](https://www.gatsbyjs.com/plugins/gatsby-plugin-webfonts/?=gatsby%20plugin%20web%20fonts)
- Com uso desse plugin não precisara fazer uma requisição no servidor para ter as fontes disponíveis no site
- Para uso do  [contentful](https://www.gatsbyjs.com/plugins/gatsby-source-contentful/) existe um plugin ele espera no escopo api key
- Para uso de [variáveis de ambiente](https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/) que sao ideias para armazenar  api key, usamos o .env, no gatsby o arquivo denominado .env.development ou .env.production
- Existe uma maneira de compartilhar informações com todo o software inclusive consultar no graqpl para isso usamos o [metadaTa](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/)

































































































































































































































