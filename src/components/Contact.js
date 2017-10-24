import React from 'react'
const Style = {
	'text-align':'center',
	    height: '66'
	    
}


function Contact(){
	return(
		<div  id='contact'style={Style}>
		
			
			<div id='about-me' >
			    
				<div className='contact-container'><a href='https://github.com/Kfrable'> <img src='http://balzer82.github.io/github.png' className='contacth2'/></a>
				</div>
				<div className='contact-container'><a href='mailto:kcfrable@gmail.com'><img src='https://cdn1.iconfinder.com/data/icons/MetroStation-PNG/256/MB__gmail-copy.png' id = 'kmail'className='contacth2'/></a>
				</div>
				<div className='contact-container'><a href='https://www.linkedin.com/in/kyle-frable'> <img src='https://www.scottsolutions.us/wp-content/uploads/2016/05/linkedin-logo.png' className='contacth2'/></a>
				</div>

			</div>
				
               
		</div>
	)
}
export default Contact