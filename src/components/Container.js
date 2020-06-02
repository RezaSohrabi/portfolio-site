import React from 'react'
import Profile from '../components/Profile'
import Card from '../components/Card'
import LifeStory from './LifeStory';
import SkillContainer from './AbilityContainer';

class Container extends React.Component {
    render(){
        const data = this.props.data;
        return(
            <div className='container'>
                <Profile profile={data.profile}/>
                <main>
                    <Card title='Life Story'>
                        {data.lifeStories.map((story, index) => <LifeStory key={index} story={story}/>)}
                    </Card>
                    <Card title='Abilities'>
                        {data.abilities.map((ability, index) => <SkillContainer key={index} ability={ability}/>)}
                    </Card>
                </main>
              
            </div>
        )
    }
}

export default Container