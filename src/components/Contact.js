import React from 'react'
const Style = {
	'text-align':'center'
}
function Contact(){
	return(
		<div  id='contact'style={Style}>
		
			<h1>Contact</h1>
			<div id='about-me'>
			    <div className='contact-container'><img id ='phone' className='contacth2' src='http://www.streetsoftanasbourne.com/wp-content/plugins/imaginuity-centers3/js/themes/JLL/lib/img/store-phone-icon.png'></img>
			    <h3>(570)209-0518</h3></div>
				<div className='contact-container'><a href='https://github.com/Kfrable'> <img src='http://balzer82.github.io/github.png' className='contacth2'/></a>
				<h3>www.github.com/Kfrable</h3></div>
				<div className='contact-container'><a href='kcfrable@gmail.com'> <img src='https://cdn1.iconfinder.com/data/icons/MetroStation-PNG/256/MB__gmail-copy.png' id = 'kmail'className='contacth2'/></a>
				<h3>kcfrable@gmail.com</h3></div>
				<div className='contact-container'><a href='https://www.linkedin.com/in/kyle-frable'> <img src='https://www.scottsolutions.us/wp-content/uploads/2016/05/linkedin-logo.png' className='contacth2'/></a>
				<h3>www.linkedin.com/in/kyle-frable</h3></div>
			</div>
				
               
		</div>
	)
}
export default Contact