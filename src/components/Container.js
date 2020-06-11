import React from 'react'
import Profile from '../components/Profile'
import Card from '../components/Card'
import LifeStory from './LifeStory';
import AbilityContainer from './AbilityContainer';

class Container extends React.Component {
    render(){
        return(
            <div className='container'>
                <Profile profile={this.props.profile}/>
                <div className='separator'></div>
                <main className='main'>
                    <Card title='Life Story' style={{marginBottom : '15px'}}>
                        <div className='timeline'></div>
                        {this.props.lifeStories.map((story, index) => <LifeStory key={index} story={story}/>)}
                    </Card>
                    <Card title='Abilities'>
                        {this.props.abilities.map((ability, index) => <AbilityContainer key={index} ability={ability}/>)}
                    </Card>
                </main>
            </div>
        )
    }
}

export default Container