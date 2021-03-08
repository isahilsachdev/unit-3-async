import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import styles from "../Css/Card.module.css";
import { singlefetch } from "../Redux/action";

export const Student = () => {
  const dispatch = useDispatch();
  var ide = useParams();
  const single = useSelector((state) => state.single);
  const history = useHistory();
  React.useEffect(() => {
    dispatch(singlefetch(ide));
  }, []);
  const handleNext = () => {
    return history.push(`student/${id + 1}`);
  };
  console.log(single);
  var { id, name, score, gender, state, school, dob } = single;
  return (
    <div className={styles.card}>
      <h1>{name}</h1>
      <h2>{id}</h2>
      <p>Score : {score}</p>
      <p>Gender : {gender}</p>
      <p>State : {state}</p>
      <p>School : {school}</p>
      <p>Dob : {dob}</p>
      {/* <button onClick={handleNext}>Next</button> */}
    </div>
  );
};
