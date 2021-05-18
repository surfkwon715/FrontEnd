import React, { useEffect } from "react";
import { Grid, Button, Text } from "../elements/Styles";
import MToDo from "../mobile/MToDo";
import moment from "moment";
import { setCookie, deleteCookie, getCookie } from "../shared/Cookie";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as todoActions } from "../redux/modules/todo";
import styled, { keyframes } from "styled-components";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import "../components/Font.css";

// import HattonLight from "../fonts/Hatton-Light.ttf";

const MCalendar = (props) => {
  const dispatch = useDispatch();
  const today = useSelector((state) => state.todo.today);
  const todo_list = useSelector((state) => state.todo.todo_list);

  React.useEffect(() => {
    dispatch(todoActions.getAllPostAX());
  }, []);

  const start_week = moment(today).startOf("month").week();
  const end_week = moment(today).endOf("month").week();
  const week_num =
    (start_week > end_week ? 53 - start_week : end_week - start_week) + 1;
  const _week_arr = Array.from({ length: week_num }, (v, i) => start_week + i);

  const week_arr = _week_arr.map((week_index) => {
    return (
      <CalendarContainer
        key={`${moment(today).format("MM")}_week_${week_index}`}
      >
        {Array.from({ length: 7 }, (v, i) => i).map((day_index) => {
          let _day = today
            .clone()
            .startOf("year")
            .week(week_index)
            .startOf("week")
            .add(day_index, "day");

          const is_today =
            moment().format("YYYY-MM-DD") === _day.format("YYYY-MM-DD");

          const _list = todo_list.filter((item, idx) => {
            if (item.selectedAt == _day.format("YYYY-MM-DD"))
              return item.selectedAt;
          });

          const list = _list.map((_l, idx) => {
            // 일정을 뿌려줘요!
            return (
              <DailyGrid key={`${_l.selectedAt}_${_l.id}`}>
                {/* 한 칸에 들어갈 것들 */}
                {_l.selectedAt.split("-")[1] === moment(today).format("MM") ? (
                  <MToDo {..._l}></MToDo>
                ) : (
                  ""
                )}
              </DailyGrid>
            );
          });

          //여기 코드 쓸모없는게 많음(다시 수정)
          if (_day.format("MM") !== today.format("MM")) {
            return (
              <DayGrid
                key={`${moment(today).format(
                  "MM"
                )}_week_${week_index}_day_${day_index}`}
               
              ></DayGrid>
            );
          } else {
            return (
              <DayGrid
                key={`${moment(today).format(
                  "MM"
                )}_week_${week_index}_day_${day_index}`}
                bg={"#FFFFFF"}
                // bg={
                //   is_today && moment(today).format("MM") === _day.format("MM")
                //     ? "gray"
                //     : "#FFFFFF"
                // }

                onClick={() => {
                  props._showModify(false);
                  dispatch(todoActions.getOnePostAX(_day.format("YYYY-MM-DD")));
                }}
              >
                <TextBox>
                <DayText
                  className="Helvetica"
                  bg={is_today ? "black" : null}
                  font_c={is_today ? "white" : "black"}
                  br={is_today ? "50%" : "null"}
                >
                  {_day.format("DD")}
                </DayText>
                </TextBox>
                <ListBox>
                {_list && list}
                </ListBox>
              </DayGrid>
            );
          }
        })}
      </CalendarContainer>
    );
  });

  // 요일이 나올 배열도 만들어주기!
  const nomal_week = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const move_month = parseInt(moment(today).format("M"));
  return (
    <AllContainer>
      <TopContainer>
        <MoveLButton
          onClick={() => {
            dispatch(
              todoActions.changeToday(
                moment(today).clone().subtract(1, "month")
              )
            );
          }}
        >
          <ChevronLeftIcon style={{width:"50%", height:"40%", color:"grey"}}/>
          <MText1 className="Helvetica">
            {move_month - 1 === 0
              ? parseInt(moment(today).format("YYYY")) - 1 + "." + 12
              : moment(today).format("YYYY") +
                "." +
                (move_month <= 10 ? "0" + (move_month - 1) : move_month - 1)}
          </MText1>
        </MoveLButton>

        <TitleText className="Helvetica">
          {moment(today).format("YYYY")}. {moment(today).format("MM")}
        </TitleText>

        <MoveRButton
          onClick={() => {
            dispatch(
              todoActions.changeToday(moment(today).clone().add(1, "month"))
            );
          }}
        ><ChevronRightIcon style={{width:"50%", height:"40%", color:"grey"}}/>
          <MText2 className="Helvetica">
            {move_month + 1 === 13
              ? parseInt(moment(today).format("YYYY")) + 1 + "." + "01"
              : moment(today).format("YYYY") +
                "." +
                (move_month < 9 ? "0" + (move_month + 1) : move_month + 1)}
          </MText2>
          
        </MoveRButton>
      </TopContainer>
      
      <Container>

      <WeekGrid>
          <WEEK className="Helvetica" style={{ color: "#C7A2A2" }}>
            Sun
          </WEEK>
          {nomal_week.map((_d, idx) => {
            return (
              <WEEK className="Helvetica" key={idx} style={{ color: "white" }}>
                {_d}
              </WEEK>
            );
          })}
          <WEEK className="Helvetica" style={{ color: "#B8C5E9" }}>
            Sat
          </WEEK>
        </WeekGrid>

      {week_arr}

      </Container>
    </AllContainer>
  );
};

const AllContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 93%;
  min-width: 50px;
  margin: auto;
  align-items: center;
  justify-content: flex-start;
  
`;

// @media (max-width: 975px) {
//   width: auto;
// }

const TopContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: 102%;
  align-items: bottom;
  height: 5vh;
  justify-content: space-between;
  margin-top: 3%;
`;

//TopContainer 내부
const TitleText= styled.div`
  display:flex;
  margin-top:0.5%;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 6vw;
  font-weight: bold;
  color: #495465;
  width: 60vw;
  text-shadow: rgb(10 50 10 / 40%) 1px 1px 1px;
`

const MText1 =styled.div`
  font-weight: bold;
  color: #121212;
  border-bottom: 1px solid #121212;
  opacity: 60%;
  margin-left: 5%;
  text-shadow: rgb(10 50 10 / 40%) 0.5px 0.5px 0.5px;
 `

 
 const MText2 =styled.div`
  font-weight: bold;
  font-family: "Helvetica";
  color: #121212;
  border-bottom: 1px solid #121212;
  opacity: 60%;
  margin-right: 5%;
  text-shadow: rgb(10 50 10 / 40%) 0.5px 0.5px 0.5px;
` 

const MoveLButton = styled.button`
 width: 15%;
 font-size: 70%;
 background-color:#F3F3F3;
 border: none;
 display:flex;
 flex-direction: row;
 align-items: center;
 cursor: pointer;
`;

const MoveRButton = styled.button`
 width: 15%;
 font-size: 2.5vw;
 background-color:#F3F3F3;
 display:flex;
 border: none;
 flex-direction: row-reverse;
 align-items: center;
 text-align: right;
 cursor: pointer;
`;

const MMText = styled.div`
 text-align: center;
 border: 1px solid red;
 width: 55%;
 height: 50%;
  color: #000000 ;
  opacity: 60%;
  text-shadow: rgb(10 50 10 / 40%) 0.1% 0.1% 0.1%;
`;
//

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
`;

const WEEK = styled.div`
  background-color: #4a5566;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height:2.4vh;
  padding-top: 1%;
  font-size: 1vh;
  font-weight: bold;
`

//캘린더 내부의 선을 최대한 얇게하려고 있는 Con
const CalendarContainer = styled.div`
  box-sizing: border-box;
  flex-direction: row;
  display: flex;
  width: 100%;
  height: 90%;
  align-items: center;
  border-right: 1px solid #AAAAAA;
`;

//요일묶음 Grid
const WeekGrid = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-width: 50px;
  height: 10%;
`;

//날짜 묶음 Grid
const DayGrid = styled.div`
  box-sizing: border-box;
  flex-direction: column;
  display: flex;
  width: 100%;
  height: 7.3vh;
  border-left: 0.1px #AAAAAA solid;
  border-bottom: 0.1px #AAAAAA solid;
  align-items: flex-end;
  :hover {
    box-shadow: rgb(82 82 82/ 60%)  0px 4px 10px 0px;
    transition: box-shadow 0.2s ease-in 0s;
  }
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
`;

const TextBox = styled.div`
 display:flex;
 width:100%;
 height:23%;
 justify-content: flex-end;
 

`;

const ListBox = styled.div`
 width:100%;
 height:75%;
`;


//날짜 텍스트
const DayText = styled.div`
  color: ${(props) => props.font_c};
  background-color: ${(props) => props.bg};
  border-radius: ${(props) => props.br};
  height:90%;
  width:28%;

  margin-right: 1.5%;
  margin-top: 4%;
  font-size: 60%;
  font-weight: 550;
  opacity:90%;
`;

//Todo들어가는 부분
const DailyGrid = styled.div`
  flex-direction: row;
  height: 100%;
  margin: 1px 0px;
  flex-wrap: nowrap;
  width: 100%;
`;





export default MCalendar;
