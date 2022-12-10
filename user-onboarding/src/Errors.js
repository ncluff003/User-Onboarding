import React from "react";
import styled from "styled-components";

export const ErrorContainer = styled.div`
  position: relative;
  height: max-content;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem;
`;

export const Error = styled.li`
  position: relative;
  height: max-content;
  width: 100%;
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  text-align: center;
  font-size: 1.6rem;
  color: #cf352e;
`;
