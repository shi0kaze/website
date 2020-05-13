
const replacePath = require('./utils')
const path = require("path")

module.exports = exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const page = path.resolve(`src/templates/page.tsx`)
  const post = path.resolve(`src/templates/post.tsx`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: replacePath(node.fields.slug),
        component: node.fields.slug.match("/blog/") ? post : page,
        context: {}, // additional data can be passed via context
      })
    })
  })
}
