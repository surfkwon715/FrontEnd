import React from "react";
import styled from "styled-components";
import { actionCreators as todoActions } from "../redux/modules/todo";
import { useDispatch, useSelector } from "react-redux";

import beer from "../image/beer.jpg";
import overeat from "../image/overeat.jpg";
import work from "../image/work.jpg";
import workout from "../image/workout.jpg";

import bad from "../image/bad-condition.jpg";
import good from "../image/good-condition.jpg";
import soso from "../image/soso-condition.jpg";

//글씨 이미지로 바꾸기
const mapKeywordToImg = {
  음주: beer,
  야식: overeat,
  야근: work,
  운동: workout,
};

const ToDo = (props) => {
  console.log(props.conditions);
  console.log(props.tag);

  const myCon = String(props.conditions);
  console.log(myCon);

  return (
    <React.Fragment>
      <Container>
        <TopInfo>
          <div style={{ padding: "5px" }}>
            {myCon === "1" && <img width="20px" height="20px" src={good}></img>}
            {myCon === "2" && <img width="20px" height="20px" src={soso}></img>}
            {myCon === "3" && <img width="20px" height="20px" src={bad}></img>}
          </div>
          <div style={{ padding: "5px" }}>
            {props.totalSleepHour}H{props.totalSleepMinute}M
          </div>
          <div>
            {props.tag.map((currentTag, idx) => {
              return (
                <img
                  key={idx}
                  width="20px"
                  height="20px"
                  src={mapKeywordToImg[currentTag]}
                ></img>
              );
            })}
          </div>
        </TopInfo>
        <BottomInfo></BottomInfo>
      </Container>
    </React.Fragment>
  );
};

ToDo.defaultProps = {};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  /* background-color: pink; */
  border-radius: 8px;
  /* box-shadow: rgb(0 0 0 / 10%) 0px 4px 10px 0px; */

  justify-content: center;

  :hover {
    box-shadow: rgb(0 0 0 / 15%) 0px 4px 10px 0px;
    transition: box-shadow 0.2s ease-in 0s;
  }

  cursor: pointer;
  position: relative;
`;

const TopInfo = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  /* justify-content: center; */
`;

const BottomInfo = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  /* justify-content: center; */

  /* font-size: 2px; */
  background-color: white;
`;

export default ToDo;
