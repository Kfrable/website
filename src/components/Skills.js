import React from 'react'
import {
 Image
} from 'react-bootstrap';

let style = {
  'margin-top': '90'
}
 

function Skills(){

	return(
		<div id='skill' className="skill-bg" style={style}>
					
					
  <div id='outerSkills'>
                  <h1>Skills</h1>
  <div className='allSkills'>
        
        <Image className='skillImg' id='react'src="https://devico.io/images/react-logo-dark.svg" responsive />

        <Image className='skillImg' id='node'src="https://nodejs.org/static/images/logos/nodejs-new-white.png" responsive />
        <Image className='skillImg' id='js'src="https://8sph.azureedge.net/media/Default/_Profiles/8f14fafe/5dca490f/nodejs.png?v=636119959950000000" responsive />
  </div>

  <div className='allSkills'>

        <Image className='skillImg' id='jquery'src="http://stridecoder.com/wp-content/uploads/2016/04/jquery.png" responsive />
        <Image className='skillImg' id='ruby'src="http://www.rodrigonardi.com/assets/ruby-2bf0c0471cc17e51d3f7c2e32c2be55b.png" responsive />
        <Image className='skillImg' id='rails'src="http://moonahmed.com/assets/images/theme_images/programming-icons/rails.png" responsive />
  </div>

  <div className='allSkills'>
  <Image className='skillImg' id='express'src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/landscape/expressjslogo.png?1499962460" responsive />
  <Image className='skillImg' id='sql'src="https://cdn3.iconfinder.com/data/icons/ui-9/512/database-512.png" responsive />
  <Image className='skillImg' id='Postgress'src="http://www.scrumtastic.io/assets/postgres-icon-a18cfa29b691b2adff795addf2ae18888d7e6305312181255ba36227f062f429.png" responsive />
  </div>

  <div>
    
     <div className='allSkills'>
        <Image className='skillImg' id= 'heroku' src="https://maxcdn.icons8.com/iOS7/PNG/512/Logos/heroku-512.png" responsive />
        <Image className='skillImg' id= 'github' src="https://maxcdn.icons8.com/Share/icon/p1em/Logos//github1600.png" responsive />
        <Image className='skillImg' id= 'css' src="https://maxcdn.icons8.com/Android_L/PNG/512/Logos/css3-512.png" responsive />
     </div>


    <div className='allSkills'>
        <Image className='skillImg' id= 'html' src="https://maxcdn.icons8.com/Android_L/PNG/512/Logos/html_5-512.png" responsive />
        <Image className='skillImg' id= 'bootstrap' src="http://www.fallingmonocle.com/assets/bootstrap_logo_white@2x.png" responsive />
        
  </div>
    
  </div>
  </div>
		</div>
	)
}
export default Skills