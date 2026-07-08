import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/C5603AQFW3xiqUU_Bgw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1624901253325?e=1784764800&v=beta&t=EAVKMeCV20MCZCZEfxuLG9CSFYA2wEfHYTdbP8jU22g" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/fauzannu" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/fauzannu/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Fauzan Nusyura</h1>
          <p>Researcher | IT Enthusiast | Full Stack Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/fauzannu" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/fauzannu/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;