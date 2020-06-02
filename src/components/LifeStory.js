import React from 'react'


class LifeStory extends React.Component {

    render(){
     const story = this.props.story;

        return(
            <section className='story'>
                <div>{console.log(story)}
                    <div>{story.time}</div>
                </div>
                <div>
                    <img src={story.image} />
                </div>
                <div>
                    <div>{story.title}</div>
                    <div>From 
                        <a href={story.fromLink} >
                            {story.from}  
                        </a>
                    </div>
                    <div>{story.description}</div>
                </div>
      
            </section>
        )
    }
}

export default LifeStory