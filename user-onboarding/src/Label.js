import React from "react";
import styled from "styled-components";

export const Label = styled.label`
  position: relative;
  height: max-content;
  min-height: 4rem;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 0 0 0 3rem;
  font-size: 1.6rem;
`;

export const CheckboxLabel = styled(Label)`
  width: 40%;
  padding: 0;
  align-items: center;
`;
