import React from "react";
import { useState } from "react";
import { Drawer } from "antd";
export default function Config(props) {
  const onSubmit = () => {};
  return (
    <Drawer
      title="Тохиргоо"
      width={450}
      closable={false}
      onClose={props.onClose}
      visible={props.visible}
      style={{ textAlign: "center" }}
    >
      <form
        action="form"
        onSubmit={() => {
          onSubmit();
        }}
      >
        <div style={{ display: "block" }}>
          <label htmlFor="email">И-майл хаяг</label>
          <br />
          <input type="email" />
        </div>
        <div style={{ display: "block" }}>
          <label htmlFor="password">Нууц үг</label>
          <br />
          <input type="password" />
        </div>
        <div style={{ display: "block" }}>
          <label htmlFor="password">Нууц үг</label>
          <br />
          <input type="password" />
        </div>
        <button>Хадгалах</button>
      </form>
    </Drawer>
  );
}
