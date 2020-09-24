import React from 'react'
import '../../style.css'
import me from '../../pictures/me.jpg'
import { Button } from  'reactstrap'

const Home = () => {
  return (
      <>
    <h2 className='myName'>Eric Park</h2>
    <h5 className='jobTitle'>Full Stack Web Developer</h5>
    <img className='myPicture' src = {me} alt='Eric Park'/>
    <hr/>
    <div>
    <section className="col-12">
                        <h1>About Me</h1>
                        <p>
                            I am a current student in the Full Stack Web Development bootcamp at the University of California-Irvine. 
                            <br/>
                            <p><Button className='col-4' color="success"><a href="https://docs.google.com/document/d/1fhR-W9pTb3rxZCmACeilp7PmBP4LjCNYnFZe8KachOY/edit?usp=sharing" className="btn btn-success" target='_blank'> Online Resume</a></Button></p>
                            <p><Button className='col-4' color ='info'><a href="https://www.linkedin.com/in/eric-park-7122821b6/" className="btn btn-info" target='_blank'>Linkedin</a></Button></p>
                            <p><Button className='col-4' color ='secondary'><a href="https://github.com/E-Park8" className="btn btn-secondary" target='_blank'>Github Profile</a></Button> </p>
                        </p>

                    </section>
    </div>
    </>
  )
}

export default Home