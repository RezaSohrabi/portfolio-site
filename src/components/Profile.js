import React from 'react'
import './Profile.scss'
import PrifleImage from '../images/ProfileImage.jpg'
import SocialMedia from './SocialMedia'

class Profile extends React.Component {

    render(){
        const profile = this.props.profile;
        const medias = !!profile.socialMedias && profile.socialMedias.map((media, index) => <SocialMedia media={media} key={index}/>)

        return(
            <section className='profile section'>
                <img className='profile__image' src={PrifleImage} />
                <h1>{profile.author}</h1>
                <p>{profile.aboutMe}</p>
                <hr/>
                <div>{profile.email}</div>
                <div>{profile.location}</div>
                <div>{medias}</div>
                <div>@copyrights Developed by heart</div>
            </section>
        )
    }
}

export default Profile