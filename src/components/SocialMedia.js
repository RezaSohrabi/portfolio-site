import React from 'react'

class Profile extends React.Component {

    render(){
        const media = this.props.media;
        return(
           <a href={media.link}>
               <img src={media.name}/>
               <span>{media.name}</span>
           </a>
        )
    }
}

export default Profile