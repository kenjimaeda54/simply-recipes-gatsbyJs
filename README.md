# Simply recipes
Sofwtare construido em gatsby,saite de receitas

## Motivacao
Aprender o uso de gatsby para constuir saites SSG

## Feature
- Para uso de css global em gatbsy precisa importar em um arquivo que se repete,no meu caso foi o arquivo Layout
- Para lidar com paginas dinamicas atraves da url usei o [slug](https://www.npmjs.com/package/slug)
- Essencial o uso do slug para evitar carcter especiais na url
- Tem duas abordagem para arquivos dinamicos, usando api [file system route](https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/)
- E outra abordagem  [node](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/)
- Na abordagem pelo file system routes, vai se referenciar pelo grapql, no saite estava usando CMS do [contentful](https://www.gatsbyjs.com/plugins/gatsby-source-contentful/),este CMS fornece um plugin, grapql neste caso reconhece ContentfulRecipes ,por isso o arquivo {Contentful.title}.jsx
- Abordagem pelo system e atraves dos recuross disnponiveis no graqpl
- Na abordagem do node js utiliza  a palavra reservada createPage
- Um dos recursos do node e componente, neste caaso caminho do arquivo que vai gerar as paginas dinamicas
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

- Grapql usa em cada pagina variavreis de contenxto ocultas
- Podemos acessar eleas para relizar logica.
- Exeplo de uso se dentro de uma pagina consultar uma query e exportar ela,o corpo da funcao principal tem acesso a essa consulta
- Em cenarios que nao sao paginas , precisa o uso do useStaticQuery


```typesscript
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


































































































































































































































