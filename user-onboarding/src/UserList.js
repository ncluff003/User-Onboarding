import React from "react";
import styled from "styled-components";
import { DateTime } from "luxon";

export const UserList = styled.section`
  position: relative;
  height: max-content;
  width: 100%;
  padding: 2rem;
  border-top: 0.2rem groove #ddddddaa;
`;

const StyledUser = styled.div`
  position: relative;
  height: max-content;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.5rem;
  border: 0.2rem solid #0047abcc;
  margin-bottom: 1.5rem;
`;

const StyledUserHeader = styled.header`
  position: relative;
  height: max-content;
  min-height: 4rem;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  background-color: #0047abcc;
  
  & p {
    font-size: 1.6rem;
    color #FEFEFE;
  }
`;

const StyledUserInformation = styled.div`
  position: relative;
  height: max-content;
  min-height: 4rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  & p {
    font-size: 1.2rem;
    color: #0047abcc;
  }
`;

export const User = function (props) {
  const { id, name, email, agree, password, createdAt } = props.user;
  return (
    <StyledUser>
      <StyledUserHeader>
        <p>{`${id}  |  ${name}`}</p>
        <p>{`Joined: ${DateTime.fromISO(createdAt).toLocaleString(DateTime.DATE_HUGE)}`}</p>
      </StyledUserHeader>
      <StyledUserInformation>
        <p>{`Email: ${email}`}</p>
        <p>{`Password: ${password
          .split("")
          .map((letter) => {
            return "*";
          })
          .join("")}`}</p>
      </StyledUserInformation>
    </StyledUser>
  );
};
