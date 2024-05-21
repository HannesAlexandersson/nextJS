'use client'
import { createContext } from 'react'
import Link from 'next/link';
import styled from 'styled-components';

const FooterMain = styled.footer`
    display: flex;
    flex-direction: column;  
    background-color: #227;
    padding: 1rem;
    position: relative;
    bottom: 0;
    margin-top: 5rem;
`;

const WrapperDiv = styled.div`
    display: flex;
    flex-direction: row;
`;

const FooterP = styled.p`
    font-size: .725em;
    color: white;
`;


export default function Footer() {
    
    return (
        <FooterMain>
            <WrapperDiv>
                    <FooterP>Sign up for an no-existing newsletter!</FooterP>
                    <FooterP>Find your way to my non-existing office!</FooterP>
            </WrapperDiv>            
                <FooterP>                    
                        &copy; 2022 Nothing is real INC. All rights reserved.                   
                </FooterP>            
        </FooterMain>
    );
  }