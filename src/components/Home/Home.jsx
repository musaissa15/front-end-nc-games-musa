import React from "react";
import home from '../Home/home.png'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'


export const Home = () => {
  return <div>
    <Container>
       <figure className="Position-relative">
      
      <figcaption className="welcome-message">
       <h2 >
    Welcome to NC-Games
  </h2>
 </figcaption>
   
    <Image src={home} alt=""  className=" img-fluid home-img rounded"/>
   </figure>
   </Container>
   
    
  </div>
};
