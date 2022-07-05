import React from 'react';
import styled from 'styled-components';
import Logo from '../common/Logo';
import { BiSearch } from 'react-icons/bi';
import { MdHomeFilled } from 'react-icons/md';
import { FiHeart } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';

const GNB = () => {
  return (
    <GNBContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <GNBInputContainer>
        <BiSearch size="27" />
        <GNBInput placeholder="검색" />
      </GNBInputContainer>
      <GNBIconsContainer>
        <Icon>
          <MdHomeFilled />
        </Icon>
        <Icon>
          <FiHeart />
        </Icon>
        <Icon>
          <CgProfile />
        </Icon>
      </GNBIconsContainer>
    </GNBContainer>
  );
};

export default GNB;

const GNBContainer = styled.div`
  position: sticky;
  top: 0;
  height: 60px;
  width: 100%;
  padding: 0.2rem 0.5rem;
  border-bottom: 0.1px solid var(--color-border);
  background: var(--color-white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  padding: 0 8rem;
`;

const LogoContainer = styled.div`
  width: 100px;
`;

const GNBInputContainer = styled.div`
  display: none;

  @media only screen and (min-width: 769px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    padding: 0 0.5rem;
    width: 250px;
    border-color: var(--color-border);
    border-radius: 3px;
    background: var(--color-dark-gray);
    font-weight: bold;
  }
`;

const GNBInput = styled.input`
  display: none;

  @media only screen and (min-width: 769px) {
    display: inline;
    width: 250px;
    padding: 0.8rem 0.5rem;
    background: var(--color-dark-gray);
    margin-left: 0.5rem;
    border-radius: 5px;
  }
  &::placeholder {
    color: var(--color-GNB-placehloder);
    //font-weight: lighter;
  }
`;

const GNBIconsContainer = styled.div`
  width: auto;
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.div`
  margin: 0 10px;
  display: inline-block;
  font-size: 1.5rem;
  cursor: pointer;
`;
