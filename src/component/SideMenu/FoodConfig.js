import React, { useEffect } from "react";
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
    console.log(event.target.file);
    const data = {
      category_id: event.target.elements.category.value,
      name: event.target.elements.name.value,
      price: event.target.elements.price.value,
      stock: event.target.elements.stock.value,
      ingredients: event.target.elements.ingredients.value,
      status: false,
      sales: true,
      image: event.target.elements.picture.value,
      tumb_img: `https://mtars-fooddelivery.s3.ap-southeast-1.amazonaws.com{../../pictures/images/login-background1.png}`,
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
      style={{ textAlign: "center", background: "#F9F9F9" }}
    >
      <form
        action="submit"
        id="register"
        method="post"
        onSubmit={addFoods}
        className="container"
        style={{
          width: "100%",
          padding: "12px 20px",
          margin: "8px 0",
          display: "inline-block",

          borderRadius: "4px",
          boxSizing: "border-box",
        }}
      >
        <div>
          <label
            htmlFor="category"
            style={{ display: "flex", textAlign: "left" }}
          >
            category
          </label>
          <input
            type="text"
            name="category"
            style={{ width: "100%", borderRadius: "10px", border: "none" }}
          />
        </div>
        <div>
          <label htmlFor="name" style={{ display: "flex", textAlign: "left" }}>
            name
          </label>
          <input
            type="text"
            name="name"
            style={{ width: "100%", borderRadius: "10px", border: "none" }}
          />
        </div>
        <div>
          <label htmlFor="price" style={{ display: "flex", textAlign: "left" }}>
            price
          </label>
          <input
            type="number"
            name="price"
            style={{ width: "100%", borderRadius: "10px", border: "none" }}
          />
        </div>
        <div>
          <label htmlFor="stock" style={{ display: "flex", textAlign: "left" }}>
            stock
          </label>
          <input
            type="text"
            name="stock"
            style={{ width: "100%", borderRadius: "10px", border: "none" }}
          />
        </div>
        <div>
          <label
            htmlFor="ingredients"
            style={{ display: "flex", textAlign: "left" }}
          >
            ingredients
          </label>
          <input
            type="text"
            name="ingredients"
            style={{ width: "100%", borderRadius: "10px", border: "none" }}
          />
        </div>
        <div>
          <label
            htmlFor="status"
            style={{ display: "flex", textAlign: "left" }}
          >
            status
          </label>
          <input
            type="text"
            name="status"
            style={{ width: "100%", borderRadius: "10px", border: "none" }}
          />
        </div>
        <div>
          <label htmlFor="sales" style={{ display: "flex", textAlign: "left" }}>
            sales
          </label>
          <input
            type="text"
            name="sales"
            style={{ width: "100%", borderRadius: "10px", border: "none" }}
          />
        </div>
        <div>
          <label
            htmlFor="Upload image"
            style={{ display: "flex", textAlign: "left" }}
          >
            Upload image
          </label>
          <input
            type="file"
            name="picture"
            style={{ width: "100%", borderRadius: "10px", border: "none" }}
          />
        </div>

        <button type="submit" form="register">
          add
        </button>
      </form>
    </Drawer>
  );
}
