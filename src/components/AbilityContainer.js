import React from 'react'


class AbilityContainer extends React.Component {

    render(){
     const ability = this.props.ability;

        return(
            <section className='ability-wrapper'>
                <div className='header'>{ability.field}</div>
                <div className='skill-wrapper'>
                    {ability.skills.map((skill, index)=> (
                        <a className='skill' href={skill.link} target='_blank'>
                            <img className='skill__image' src={skill.icon} />
                            <div>{skill.name}</div>
                        </a>
                    ))}
                </div>
            </section>
        )
    }
}

export default AbilityContainer