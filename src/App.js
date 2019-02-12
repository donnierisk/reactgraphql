import React, { Component } from 'react';
import Contributions from './components/Contributions';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: rgb(51, 57, 74);
  color: white;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;
  font-family: Roboto;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Contributions />
      </Wrapper>
    );
  }
}

export default App;
