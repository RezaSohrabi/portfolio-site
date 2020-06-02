import React from 'react'

class Card extends React.Component {
    render(){
        return(
            <section className='section'>
                <h2>{this.props.title}</h2>
                {this.props.children}
            </section>
        )
    }
}

export default Card