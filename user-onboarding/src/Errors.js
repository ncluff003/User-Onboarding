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
  width: max-content;
  padding: 0.5rem;
`;
