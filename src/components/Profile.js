import React from 'react'
import ProfileImage from '../ProfileImage.jpg'
import SocialMedia from './SocialMedia'
class Profile extends React.Component {


    render(){
        const profile = this.props.profile
          const medias = !!profile.socialMedias && profile.socialMedias.map((media, index) => <SocialMedia media={media} key={index}/>)

        return(
            <section className='profile section'>
                <div className='profile-wrapper'>
                    <img className='profile__image' src={ProfileImage} />
                    <h1>{profile.author}</h1>
                    <div className='profile__content'>
                        <p>{profile.aboutMe}</p>
                        <hr/>
                        <div>Email : {profile.email}</div>
                        <div>Location : {profile.location}</div>
                        <div className='icon-wrapper'>{medias}</div>
                    </div>
                    <div className='copyrights'>Copyrights <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> 2020  Developed by heart</div>
                </div>
            </section>
        )
    }
}

export default Profile