import React from 'react'


class AbilityContainer extends React.Component {

    render(){
     const ability = this.props.ability;

        return(
            <section className='ability-container'>
                <div>{ability.field}</div>
                {ability.skills.map((skill, index)=> (
                    <a href={skill.site}>
                        <img src={skill.icon} />
                        <div>{skill.name}</div>
                    </a>
                ))}
            </section>
        )
    }
}

export default AbilityContainer