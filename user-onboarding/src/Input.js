import React from "react";
import styled from "styled-components";

export const Input = styled.input`
  position: relative;
  height: max-content;
  min-height: 4rem;
  width: calc(100% - 4rem);
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 0 0 0 2rem;
  font-size: 2rem;

  border: none;
  border-bottom: 0.2rem solid #22222277;

  &:focus {
    outline: none;
    border-color: #0047ab;
    color: #0047ab;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const CheckboxInput = styled(Input)`
  width: 10%;
  &:hover {
    cursor: pointer;
  }
`;
