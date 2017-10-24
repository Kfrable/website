import React from 'react';

import {
  imageShapeInstance,circle,Col,Image,imageResponsiveInstance,responsive
} from 'react-bootstrap';


let style ={
	    'margin-left': '-1000',
	    'margin-top':'26',
	    'color':'black'
}

let style2 ={
	    height: '655'
	        
}

function About(){
	return(
		<div className='w3-container w3-center w3-animate-right' className="fixed-bg" id='about' style={style2}>
			<ul className='nav'>
          <li className = 'list'><a href="#about">Kyle Frable</a></li>
          <li className = 'list'><a href="#contact">Contact</a></li>
          <li className = 'list'><a href="#projects">Projects</a></li>
          <li className = 'list'><a href="#skill">Skills</a></li>
        </ul>

			
			
			<div id='aboutDiv'>
			<Image id='me' src="./images/me.png" responsive />
			<h1 style={style}>Kyle Frable</h1>
			<h2 style={style}>Web Developer</h2>
			<div id='about-container'>
			<p className='w3-container w3-center w3-animate-right'>Being that I come from multiple industries that required me to be  quick on my feet, being adaptable is something that set me apart. In being able to integrate myself into situations, doesn’t mean I compromise my values. I stand by what i’ve been taught, to always be kind and happy, and treat others with respect ,and show that i’m willing to work.</p>
			</div>
			</div>
		</div>

	)
}
export default About