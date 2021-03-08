import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styles from "../Css/Card.module.css";
export const Card = ({
  id,
  name,
  score,
  gender,
  state,
  school,
  dob,
  handleDelete
}) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/student/${id}`);
  };
  return (
    <div className={styles.card} onClick={() => handleClick(id)}>
      <h1>{name}</h1>
      <p>Score : {score}</p>
      <p>Gender : {gender}</p>
      <p>State : {state}</p>
      <p>School : {school}</p>
      <p>Dob : {dob}</p>
    </div>
  );
};
