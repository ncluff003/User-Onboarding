import React from "react";
import styled from "styled-components";

export const Form = styled.form`
  position: relative;
  height: max-content;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  padding-top: 2rem;
  border-top: 0.2rem groove #ddddddaa;
`;

/*

  @Form
  @ 1. Name (First, Last)
  @ 2. Email
  @ 3. Password
  @ 4. Terms Of Service (Checkbox)
  @ 5. Submit Button (To Send Form Data To The Server)

*/
