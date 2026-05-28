import React from 'react'

function Skills({ content }) {
    const { categories, soft } = content

    return (
        <div className="notepad-content">
            <h2>Technical Skills</h2>

            {
                categories.map((category, idx) => (
                    <div key={idx}>
                        <h3>{category.name}</h3>
                        <p>{category.skills.join(', ')}</p>
                        <hr />
                    </div>
                ))
            }

            <h2>Interpersonal Skills</h2>
            <p>{soft}</p>
        </div>
    )
}

export default Skills