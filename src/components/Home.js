import React from 'react'
import "./Home.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Home = () => {
  return (
    <>

      <div className='Home'>

        <div className='container'>
          <div className='home-display-img'>
            <img src='./images/tabletalk.png' alt='image' />

            <div className='company__name'><h1>Apps Genii <br></br>Technologies</h1></div>
          </div>

        </div>


      </div>

      <div className='row'>
        <center><h2>Our Business Strategy</h2></center>
        <div className='col-66 p-45 my-5'>
          <h3> Why We Prefer Team Work</h3>
          <p>If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough,
            the next logical step is to find a random paragraph. We created the Random Paragraph Generator with you in mind.
            The process is quite simple. Choose the number of random paragraphs you'd like to see and click the button.
            Your chosen number of paragraphs will instantly appear.
            <br></br>
            A few examples of how some people use this generator are listed in the following paragraphs.
            If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough,
            the next logical step is to find a random paragraph. We created the Random Paragraph Generator with you in mind.
            The process is quite simple. Choose the number of random paragraphs you'd like to see and click the button.
            Your chosen number of paragraphs will instantly appear.
            While it may not be obvious to everyone,<br></br>
            there are a number of reasons creating random paragraphs can be useful.
            A few examples of how some people use this generator are listed in the following paragraphs.
            there are a number of reasons creating random paragraphs can be useful.
            A few examples of how some people use this generator are listed in the following paragraphs.</p>
          <div className='btn'>
            <a href='/' className='btn-text'> Read More </a>
          </div>


        </div>


        <div className='col-6 my-5'>
          <div>
            <img src="../images/team.jpg" width="100%" height="500vh" alt="image" />
          </div>

        </div>

      </div>




    </>
  )
}

export default Home









