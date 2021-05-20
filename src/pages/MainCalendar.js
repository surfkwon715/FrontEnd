import React from "react";
import styled, { keyframes } from "styled-components";
import { useSelector } from "react-redux";
import Calendarjj from "../components/Calendarjj";
import DetailPost from "../components/DetailPost";
import DetailWrite from "../components/DetailWrite";
import Search from "../components/Search";
import MMainCalendar from "../mobile/MMainCalendar";

import { debounce } from "lodash";

const MainCalendar = (props) => {
  const [is_modify, setModify] = React.useState(false);
  const day_list = useSelector((state) => state.todo.day_list);
  const [windowSize, setWindowSize] = React.useState(window.innerWidth);

  const handleResize = debounce(() => {
    setWindowSize(window.innerWidth);
  }, 100);

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  if (windowSize < 970) {
    return (
      <>
        <MMainCalendar />
      </>
    );
  } else {
    return (
      <>
        <Background>
          <AllContainer>
            <CalendarContainer>
              <Calendarjj _showModify={setModify} />
            </CalendarContainer>
            <RightContainer>
              <PostContainer>
                {is_modify ? (
                  <DetailWrite date={day_list} _showModify={setModify} />
                ) : (
                  <DetailPost date={day_list} _showModify={setModify} />
                )}
              </PostContainer>
              <SearchContainer>
                <Search _showModify={setModify} />
              </SearchContainer>
            </RightContainer>
          </AllContainer>
        </Background>
      </>
    );
  }
};

const fadein = keyframes`
from {opacity:0}
to {opacity: 1;}

`;

const AllContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 97%;
  height: 90%;
  margin-top: 2%;
  animation: ${fadein} 1s;
`;

//캘린더 배경
const CalendarContainer = styled.div`
  width: 66%;
  height: 94vh;
  background-color: #f3f3f3;
  margin-top: 1%;
  margin-right: 2%;
  margin-left: 5%;
  border-radius: 15px;
  padding-bottom: 1.5%;
  box-shadow: rgb(82 82 82/ 40%) 0px 5px 8px 0px;
`;

// 카드와 검색
const RightContainer = styled.div`
  display: flex;
  width: 25%;
  height: 126vh;
  margin-top: 0.3%;
  flex-direction: column;
`;

const PostContainer = styled.div`
  display: flex;
  width: 100%;
  height: 77%;
  margin-left: 3%;
  margin-top: 10px;
  background-color: #f3f3f3;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: rgb(82 82 82/ 40%) 0px 5px 8px 0px;
`;
const SearchContainer = styled.div`
  display: flex;
  width: 100%;

  margin-left: 5%;
  margin-top: 10px;
  align-content: center;
  border-radius: 20px;
  // box-shadow: rgb(82 82 82/ 40%) 0px 5px 8px 0px;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: #dbdbdb;
`;

export default MainCalendar;
