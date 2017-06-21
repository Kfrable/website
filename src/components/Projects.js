import React from 'react'
import Naver from './Nav'
import {
  imageShapeInstance,circle,Col,Image,imageResponsiveInstance,responsive
} from 'react-bootstrap';
const Style = {
	/*height:'100%',
	width:'100%',*/
	border:'black solid',
	padding:'10'
}

const divStyle ={
	    'margin-top': '221'
}
function Projects(){
	return(
		<div style={divStyle}>
			<hr/>
			<h1>Projects</h1>
			<div style={Style}><a href='https://kfrable.github.io/Kfrable.picturePuzzle.github.io/'><Image src="./images/puzzle.png" responsive /></a></div>
			<div style={Style}><a href='https://lit-dawn-82757.herokuapp.com/'><Image src="./images/Beverage.png" responsive /></a></div>
			<div style={Style}><a href='https://beverage-pairing-shcdrqekeg.now.sh/'><Image src="./images/Read.png" responsive /></a></div>
			
		</div>
	)
}
export default Projects