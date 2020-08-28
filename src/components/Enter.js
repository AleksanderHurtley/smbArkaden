import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import image from '../assets/fasade.jpg';

const Styles = styled.div`
  .jumbo {
    background: url(${image});
    background-size: cover;
    color: #42f55d;
    height: 500px;
    width: 500px;
    left: 50%;
    position: absolute;
    z-index: -2;
    font-family: "Comic Sans MS", cursive, sans-serif;
  }
  .overlay {
    background-color: #f803fc;
    opacity: 0.08;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
  .text {
    text-align: center;
    }
`;

export const Enter = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <div className="text">
      </div>
    </Jumbo>
  </Styles>
)