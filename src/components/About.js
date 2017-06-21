import React from 'react';

import {
  imageShapeInstance,circle,Col,Image,imageResponsiveInstance,responsive
} from 'react-bootstrap';
function About(){
	return(
		<div className='w3-container w3-center w3-animate-right'>
		
			<h1>Kyle Frable</h1>
			<h2>Web Developer</h2>
			<Image id='me' src="./Images/me.jpg" responsive />
			<p className='w3-container w3-center w3-animate-right'>Being that I come from multiple industries that required me to be  quick on my feet, being adaptable is something that set me apart. In being able to integrate myself into situations, doesn’t mean I compromise my values. I stand by what i’ve been taught, to always be kind and happy, and treat others with respect ,and show that i’m willing to work.</p>

		</div>

	)
}
export default About