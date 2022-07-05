import React from 'react';
import styled from 'styled-components';

const Logo = () => {
  return (
    <LogoContainer>
      <LogoImage src="img/logo.png" alt="logo" />
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  width: 100%;
`;
const LogoImage = styled.img`
  width: 100%;
`;
