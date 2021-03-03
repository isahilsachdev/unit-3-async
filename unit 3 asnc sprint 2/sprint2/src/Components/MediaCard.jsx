import React from 'react';
import styled from 'styled-components';

const wrapper = styled.div`
  width: 600px;
  height: 300px;
  display: flex;
  margin: 20px auto;
  color: green;
  border: 1px solid black;
  background-color: red;
  > div {
    background-color: red;
  }
`;

const MediaCard = ({ title, description, image }) => {
  return (
    <>
      <wrapper>
        <div>
          <img width='160px' src={image} alt='' />
        </div>
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </wrapper>
      {/* <div */}
      {/* style={{
          backgroundColor: "lightgrey",
          width: "600px",
          margin: "20px auto",
          border: "1px solid red",
          padding: "10px",
        }}
      > */}
      {/* </div> */}
    </>
  );
};

export default MediaCard;
