import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import image from '../assets/fasade.jpg';

const Styles = styled.div`
.overlayz {
  background-color: #f803fc;
  opacity: 0.08;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
}
`
export const ColorFilter = () => (
  <Styles>
    <div className="overlayz"></div>
  </Styles>
)
