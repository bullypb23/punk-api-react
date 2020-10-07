import styled, { keyframes } from 'styled-components';


const spinner1 = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

const spinner3 = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0);
  }
`;

const spinner2 = keyframes`
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(24px, 0);
  }
`;

export const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  > div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #40514e;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
`;

export const First = styled.div`
  left: 8px;
  animation: ${spinner1} 0.6s infinite;
`;

export const Second = styled.div`
  left: 8px;
  animation: ${spinner2} 0.6s infinite;
`;

export const Third = styled.div`
  left: 32px;
  animation: ${spinner2} 0.6s infinite;
`;

export const Fourth = styled.div`
  left: 56px;
  animation: ${spinner3} 0.6s infinite;
`;
