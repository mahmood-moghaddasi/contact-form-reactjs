import React from "react";
import styles from "./styles/Form.module.css";
import comps from "styled-components";
const Input = comps.input`
  width:300px;
  height:35px;
  border: 1px rgb(110, 110, 110) solid;
  border-radius:4px;
  outline:none;
  padding-left:5px;
  &:focus{
  border: 2px rgb(0, 180, 156) solid;
  }
  
`;
const Btn = comps.button`
  width:616px;
  height:40px;
  border: none;
  border-radius:4px;
  background-color:rgb(0, 180, 156);
  color:white;
  cursor:pointer;
  font-size:14px
`;
function Form() {
  return (
    <div className={styles.container}>
      <form>
        <Input type="text" placeholder="Name" />
        <Input type="text" placeholder="Last Name" />
        <Input type="text" placeholder="Email" />
        <Input type="text" placeholder="Phone" />
        <Btn>Add Contact</Btn>
      </form>
    </div>
  );
}

export default Form;
