import React from "react";
import styled, { keyframes } from "styled-components";
import { useSelector } from "react-redux";
import Calendarjj from "../components/Calendarjj";
import DetailPost from "../components/DetailPost";
import DetailWrite from "../components/DetailWrite";

const MainCalendar = () => {
  const [is_modify, setModify] = React.useState(false);
  const day_list = useSelector((state) => state.todo.day_list);

  const GetClick = () => {};

  return (
    <React.Fragment>
      <Background>
        <AllContainer>
          <Calendarjj _showModify={setModify} />
          {is_modify ? (
            <DetailWrite date={day_list} _showModify={setModify} />
          ) : (
            <DetailPost date={day_list} _showModify={setModify} />
          )}
        </AllContainer>
      </Background>
    </React.Fragment>
  );
};
const slidein = keyframes`
 from {
  margin-left: 100%;
  width: 200%
}

to {
  margin-left: 0%;
  width: 100%;
}
 `;

const AllContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: auto;
  animation: ${slidein} 2s;
`;

const Background = styled.div`
  width: 100%;
  left: 0;
  top: 0;
  background-color: black;
`;

export default MainCalendar;
