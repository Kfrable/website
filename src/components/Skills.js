import React from 'react'
import {
  imageShapeInstance,circle,Col,Image,imageResponsiveInstance,responsive,Carousel,Item,Caption,wellInstance,Well
} from 'react-bootstrap';

const Style = {
 	display:'inline',
 	padding:'15',

 }
 const Move = {
 	left:'613'
 }
const Style1={
	/*border:'black solid',*/
	'margin-left':'48%',
	width:'217',
	display:'inline-block'
    
}

const Style2={
	/*border:'black solid',*/
	'margin-left':'10',
	width:'217',
	display:'inline-block'
    
}

const gone = {
	'list-style-type':'none'
}

const im={
	height: '44'/*,
	'margin-left': '59'*/

}

function Skills(){
	return(
		<div id='skill'>
					<h1>Skills</h1>
					{/*<div  style={Style1}>	
					<ul style={gone}>*/} 
						{/*<div className='topics'><Image style={im} src="./images/javascript.png" responsive /><h1>JavaScript</h1></div>
						<div className='topics'><Image style={im} src="./images/ruby.png" responsive /><h1>Ruby</h1></div>
						<div className='topics'><Image style={im} src="./images/rails.png" responsive /><h1>Rails</h1></div>
						<div className='topics'><Image style={im} src="./images/react.png" responsive /><h1>React</h1></div>
						<div className='topics'><Image style={im} src="./images/express.png" responsive /><h1>Express</h1></div>
						<div className='topics'><Image style={im} src="./images/sql.png" responsive /><h1>SQL</h1></div>*/}
						
					
					{/*</div>
					<div  style={Style2}>
					<ul style={gone}>*/}
						{/*<div className='topics'><Image style={im} src="./images/elphant.png" responsive /><h1>Postgress</h1></div>
						<div className='topics'><Image style={im} src="./images/heroku.png" responsive /><h1>Heroku</h1></div>
						<div className='topics'><Image style={im} src="./images/boot.png" responsive /><h1>Bootstrap</h1></div>
						<div className='topics'><Image style={im} src="./images/css.png" responsive /><h1>CSS</h1></div>
						<div className='topics'><Image style={im} src="./images/html.png" responsive /><h1>HTML</h1></div>*/}
					<Carousel>
    <Carousel.Item style={Move}>
      <img width={200} height={100} style={Style} src="./images/react.png"/>
      <Carousel.Caption>
        <h3>React</h3>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item style={Move}>
      <img width={200} height={100} style={Style} src="./images/javascript.png"/>
      <Carousel.Caption>
        <h3>JavaScript</h3>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item style={Move}>
      <img width={200} height={100} style={Style} src="./images/ruby.png"/>
      <Carousel.Caption>
        <h3>Ruby</h3>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item style={Move}>
      <img width={200} height={100} style={Style} src="./images/rails.png"/>
      <Carousel.Caption>
        <h3>Ruby On Rails</h3>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item style={Move}>
      <img width={200} height={100} style={Style} src="./images/express.png"/>
      <Carousel.Caption>
        <h3>Express</h3>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item style={Move}>
      <img width={200} height={100} style={Style} src="./images/sql.png"/>
      <Carousel.Caption>
        <h3>SQL</h3>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item style={Move}>
      <img width={200} height={100} style={Style} src="./images/elphant.png"/>
      <Carousel.Caption>
        <h3>Postgress</h3>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item style={Move}>
      <img width={200} height={100} style={Style} src="./images/heroku.png"/>
      <Carousel.Caption>
        <h3>Heroku</h3>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item style={Move}>
      <img width={200} height={100} style={Style} src="./images/boot.png"/>
      <Carousel.Caption>
        <h3>Bootstrap</h3>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item style={Move}>
      <img width={200} height={100} style={Style} src="./images/css.png"/>
      <Carousel.Caption>
        <h3>CSS</h3>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item style={Move}>
      <img width={200} height={100} style={Style} src="./images/html.png"/>
      <Carousel.Caption>
        <h3>HTML</h3>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>

    
    
  </Carousel>
		</div>
	)
}
export default Skills