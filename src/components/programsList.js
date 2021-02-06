import React from "react"
import StyledLink from "../components/styledLink"
import { StaticQuery, graphql } from "gatsby"

const Programs = ({ programs }) =>
  programs.map(program => (
    <StyledLink
      id={program.node.slug}
      href={program.node.acf.program.url.source_url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <p
        dangerouslySetInnerHTML={{
          __html: program.node.title,
        }}
      />
    </StyledLink>
  ))

const ProgramsList = ({ programs }) => (
  <StaticQuery
    query={graphql`
      query ProgramsListQuery {
        allWordpressWpPrograms(sort: { order: DESC, fields: modified }) {
          edges {
            node {
              title
              slug
              acf {
                program {
                  title
                  url {
                    source_url
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Programs programs={data.allWordpressWpPrograms.edges} />}
  />
)
export default ProgramsList
