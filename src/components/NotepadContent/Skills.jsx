import React from 'react'
import styled from 'styled-components'

const SkillsWrapper = styled.div`
  padding: 8px;
`

const CategoryBlock = styled.div`
  margin-bottom: 18px;
`

const CategoryTitle = styled.h3`
  margin-bottom: 8px;
`

const SkillLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px 10px;
  line-height: 1.6;
`

const SkillText = styled.span`
  white-space: nowrap;
`

function Skills({ content }) {
  const { categories, soft } = content

  return (
    <SkillsWrapper>
      <h2>Technical Skills</h2>

      {categories.map((category, idx) => (
        <CategoryBlock key={idx}>
          <CategoryTitle>{category.name}</CategoryTitle>

          <SkillLine>
            {category.skills.map((skill, skillIdx) => (
              <SkillText key={skillIdx}>
                {skill}
                {skillIdx < category.skills.length - 1 ? ',' : ''}
              </SkillText>
            ))}
          </SkillLine>
        </CategoryBlock>
      ))}

      <br />

      <h2>Interpersonal Skills</h2>
      <p>{soft}</p>
    </SkillsWrapper>
  )
}

export default Skills