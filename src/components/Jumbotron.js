  
import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import image from '../assets/arcade2.jpg';

const Styles = styled.div`
  .jumbo {
    background: url(${image}) center;
    background-size: cover;
    color: #42f55d;
    height: 200px;
    position: relative;
    z-index: -2;
    font-family: "Comic Sans MS", cursive, sans-serif;
  }
  .overlay {
    background-color: #f803fc;
    opacity: 0.1;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
      </Container>
    </Jumbo>
  </Styles>
)