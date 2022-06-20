import React from "react";
import { useState } from "react";
import { otherServices } from "../../services/otherServices";
import { Drawer } from "antd";
import { useFood } from "../../contexts/FoodContext";
export default function FoodConfig(props) {
  const[foods, setFoods] = useFood()
//   debugger
  console.log(foods.name);

  return (
    <Drawer
      title="Хоолны мэдээлэл"
      width={450}
      closable={false}
      onClose={props.onClose}
      visible={props.visible}
      style={{ textAlign: "center" }}
    >
      
        <h1>{foods.map((p,i)=>{
            return (<div key={i}>{p.name}</div>)
        })}</h1>
     
    </Drawer>
  );
}
