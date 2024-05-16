'use client'
import { createContext } from 'react'

import Link from 'next/link';
import styled from 'styled-components';


const Nav = styled.nav`
  background-color: #382;
  padding: 1rem;
`;

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

const Li = styled.li`
  margin-right: 1rem;
`;

const StyledLink = styled.a`
  color: white;
  text-decoration: none;
`;


export default function Navbar() {
    return (
     <Nav>
        <Ul>
            <Li>
                <StyledLink href="/">Home</StyledLink>
            </Li>
            <Li>
                <StyledLink href="/about">About</StyledLink>
            </Li>      
        </Ul>
     </Nav>
    );
  }