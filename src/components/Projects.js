import React from 'react'
import {
  Image
} from 'react-bootstrap';
const Style = {
	border:'black solid',
	padding:'10',
	height: '330',
    width: '448'

}

const divStyle ={
	    'margin-top': '90'
	   
}

const styleee = {
	color:'black',
	'text-shadow': 'black 2 1 2'
}
function Projects(){
	return(
		<div id='projects' style={divStyle}>
			<hr/>
			<h1>Projects</h1>

			<div id='puzzle' className='proimg'>
				<a href='https://kfrable.github.io/Kfrable.picturePuzzle.github.io/'>
					<Image src="./images/puzzle.png"id='puzzle' responsive />
						<p className='prop'>Welcome to picture Puzzle. Picture Puzzle is a game that allows you to chase a ball around 
						the board. Everytime you manage to catch the ball you fill in the picture. Once you have caught the ball enough times you get to see the finshed image. If time runs out, you loose! </p>
				</a>
			</div>


			<div id='eb' className='proimg'><a href='https://lit-dawn-82757.herokuapp.com/'><Image src="./images/Beverage.png" id='eb'responsive />
			<p className='prop'>If you're a beer lover, this is the app for you. You can enter in a name of the beer you like to see, and be given back a description, and some fun facts about the beverage.
			 If you 
			have found something you like or just want to talk about other styles of beer you can enter the chat, and communicate with others in the app.   </p></a></div>

			<div id='bi' className='proimg'><a href='https://beverage-pairing-shcdrqekeg.now.sh/'><Image src="./images/Read.png"id='bi' responsive />
			<p className='prop'>Beverage Index takes multiple beverages and allows you to search a custom built api. When something is searched, A description about the beverage is given back, as well as region or company that produces the beverage. On top of all that, a food pairing is given back so that 
			you can find out what food goes with your favorite beverage.    </p></a></div>
			
		</div>
	)
}
export default Projects