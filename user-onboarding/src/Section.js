import React from "react";
import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  height: max-content;
  width: 100%;
  display: flex;
  flex-flow: column-reverse nowrap;
  justify-content: center;
  /* align-items: flex-start; */
  align-items: center;
  /* padding-left: 3rem; */
  /* margin: 1rem 0; */
`;

export const CheckboxSection = styled(Section)`
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`;
