import React from "react";
import styled from "styled-components";

export const Button = styled.button`
  position: relative;
  height: max-content;
  min-height: 6rem;
  width: 50%;
  padding: 1rem;
  border: 0.2rem solid #0047abcc;
  border-radius: 1.5rem;
  background-color: #0047ab33;
  margin: 2rem 0;
  font-size: 2rem;
  color: #0047abcc;

  &:hover {
    cursor: pointer;
    border-color: #0047ab;
    background-color: #0047ab;
    color: #fefefe;
    transition: background-color 0.5s, border 0.5s, color 0.5s;
  }

  &:active {
    border-color: #ffd700;
    background-color: #ffd700;
    color: #222222;
  }
`;
