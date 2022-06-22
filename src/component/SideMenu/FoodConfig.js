import React from "react";
import { useState } from "react";
import { otherServices } from "../../services/otherServices";
import { Drawer } from "antd";
import { useFood } from "../../contexts/FoodContext";
import { useUser } from "../../contexts/UserContext";
export default function FoodConfig(props) {
  const [foods, setFoods] = useFood();
  const [view, setView] = useState();
  const [user, setUser] = useUser();
  const addFoods = async (event) => {
    event.preventDefault();
    console.log(event.target.elements.name.value);
    const data = {
      category_id: event.target.elements.category.value,
      name: event.target.elements.name.value,
      price: event.target.elements.price.value,
      stock: event.target.elements.stock.value,
      ingredients: event.target.elements.ingredients.value,
      status: false,
      sales: true,
      image: foods.image,
      tumb_img: "../../pictures/images/login-background1.png",
      token: user.token,
    };

    otherServices
      .addFood(data)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.success === true) {
          console.log("amjilttai");
        }
      })
      .catch((e) => console.log(e.message))
      .finally(() => {});
  };

  // console.log(props.food);

  return (
    <Drawer
      title="Хоолны нэмэх"
      width={450}
      closable={false}
      onClose={props.onClose}
      visible={props.visible}
      style={{ textAlign: "center" }}
    >
      <form action="submit" id="register" method="post" onSubmit={addFoods}>
        <div>
          <label htmlFor="category">category</label>
          <input type="text" name="category" />
        </div>
        <div>
          <label htmlFor="name">name</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="price">price</label>
          <input type="number" name="price" />
        </div>
        <div>
          <label htmlFor="stock">stock</label>
          <input type="text" name="stock" />
        </div>
        <div>
          <label htmlFor="ingredients">ingredients</label>
          <input type="text" name="ingredients" />
        </div>
        <div>
          <label htmlFor="status">status</label>
          <input type="text" name="status" />
        </div>
        <div>
          <label htmlFor="sales">sales</label>
          <input type="text" name="sales" />
        </div>

        <button type="submit" form="register">
          add
        </button>
      </form>
    </Drawer>
  );
}