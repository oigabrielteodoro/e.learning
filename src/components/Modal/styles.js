import styled from 'styled-components/native';

export const Overlay = styled.View`
  position: absolute;
  z-index: 9999;

  background: rgba(0, 0, 0, 0.4);

  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

export const Container = styled.View`
  background: #fff;
  border-radius: 10px;

  padding: 25px;

  margin: auto;

  position: relative;

  width: 100%;
  max-width: 360px;
`;