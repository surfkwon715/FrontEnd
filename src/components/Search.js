import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as todoActions } from "../redux/modules/todo";
import { history } from "../redux/configureStore";
import moment from "moment";

const Search = (props) => {
  const dispatch = useDispatch();
  const today = moment();
  const [year, setYear] =React.useState("");
  const [month, setMonth] =React.useState("");
  const [day, setDay] =React.useState("");
  
  const onSearch = (e) => {
    if (e.key == "Enter") {
      let myDate = new Date(`${year}-${month}-${day}`);

      props._showModify(false);
      dispatch(
        todoActions.getOnePostAX(moment(myDate).format("YYYY-MM-DD"))
      );
      dispatch(
        todoActions.changeToday(moment(myDate).format("YYYY-MM-DD"))
      )}
  };

  return (
    <React.Fragment>
      {year.length==4 ? document.getElementById("second").focus():null}
      {month.length==2 ? document.getElementById("third").focus():null}
      <ModalComponent>
      <InputBox 
        id ="first"
        onChange={(e) => {
          setYear(e.target.value);
        }}
        placeholder={moment(today).format("YYYY")}
      />

      <InputBox
        onChange={(e) => {
          setMonth(e.target.value);
        }}
        placeholder={moment(today).format("MM")}
        value={month}
        maxLength="2" 
        id="second"
      
      />
      <InputBox
        onChange={(e) => {
          setDay(e.target.value);
        }}
        placeholder={moment(today).format("DD")}
        value={day}
        maxLength="2"
        id="third"
        onKeyPress={onSearch}
      />


  

      <ReturnBtn onClick={()=>{
        props._showModify(false);
        dispatch(
          todoActions.getOnePostAX(moment(today).format("YYYY-MM-DD"))
        );
        dispatch(
          todoActions.changeToday(moment(today).format("YYYY-MM-DD"))
        )}
      }>TODAY</ReturnBtn>
      </ModalComponent>
    </React.Fragment>
  );
};

const InputBox = styled.input`
  background-color: white;
  padding: 15px;
  border: 0.5px solid rgba(76, 76, 76, 0.3);
  border-radius: 10px;
  outline: none;
  font-size: 12px;
  font-weight: bold;
  color: black;
  margin-right: 0.5rem;
  width: 15%;
  height: 20%;
  opacity: 0.5;
  ::placeholder {
    font-size: 13px;
  }
`;

const ReturnBtn =styled.button`
background-color: black;
margin-left: 1rem;
color: white;
border-radius: 10px;
width :12%;
height : 100%;
`

const ModalComponent = styled.div`
  width: 100%;
  height: 100%;

`;

export default Search;
