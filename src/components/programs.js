import React from "react"
import StyledLink from "../components/styledLink"

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

export default Programs
