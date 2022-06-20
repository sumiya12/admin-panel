import React, { useEffect, useState } from "react";
import { otherServices } from "../../services/otherServices";

import { useOrder } from "../../contexts/OrderContext";
import { useUser } from "../../contexts/UserContext";
import moment from "moment";
import { List, Row, Col, Divider, Pagination, Checkbox } from "antd";
export default function FoodMenu() {
  const [food, setFood] = useState();
  const [current, setCurrent] = useState(1);
  useEffect(() => {
    otherServices
      .getAllFood()
      .then((e) => e.json())
      .then((e) => {
        console.log(e.data);
        setFood(e.data);
      });
  }, [current]);
  const onChange = (page) => {
    // console.log(page);
    setCurrent(page);
  };
  const number = 0;
  return (
    <div>
      <div>
        <Divider orientation="left">ХООЛНЫ ЦЭС</Divider>
        <div style={{ justifyContent: "space-between", display: "flex" }}>
          <input value="haih"></input>
          <button>Hool nemeh</button>
        </div>
        <List
          header={
            <div
              className="header"
              style={{
                justifyContent: "space-between",
                display: "flex",
                paddingLeft: "10px",
                marginLeft: "0px",
                marginBottom: "10px",
              }}
              lg={{ span: 2, offset: 1 }}
            >
              <span>#</span>
              <span>Зураг</span>
              <span>Хоолны нэр</span>
              <span>Тайлбар</span>
              <span>Порц</span>
              <span>Үнэ</span>
              <span>Категори</span>
              <span>
                <img
                  src="../../pictures/icons/3vantseg.png"
                  alt=""
                  style={{ width: "20px", height: "20px" }}
                />
              </span>
            </div>
          }
          footer={
            <div style={{ marginTop: "auto" }}>
              <Pagination
                current={current}
                total={50}
                onChange={onChange}
                style={{ marginTop: "auto" }}
              />
            </div>
          }
          bordered
          dataSource={food}
          renderItem={(item, i) => {
            return (
              <>
                <List.Item
                  className="listItems"
                  style={{ marginTop: "0px", background: "white" }}
                >
                  <Row
                    className="rows"
                    style={{
                      width: "100vw",
                      justifyContent: "space-between",
                      display: "flex",
                    }}
                  >
                    <Col
                      className="cols"
                      lg={{ span: 2, offset: 1 }}
                      xs={{ span: 1, offset: 1 }}
                      style={{ padding: "0px", margin: "0px 0px 0px 0px" }}
                    >
                      {i + 1}
                    </Col>
                    <Col
                      className="cols"
                      lg={{ span: 2, offset: 1 }}
                      xs={{ span: 1, offset: 1 }}
                      style={{ padding: "0px", margin: "0px 10px 0px 10px" }}
                    >
                      <img
                        src={`https://mtars-fooddelivery.s3.ap-southeast-1.amazonaws.com${item.image}`}
                        alt={item.image}
                        style={{
                          width: "88px",
                          height: "51px",
                          borderRadius: "10px",
                        }}
                      />
                    </Col>
                    <Col
                      className="cols"
                      lg={{ span: 2, offset: 1 }}
                      xs={{ span: 1, offset: 1 }}
                      style={{ padding: "0px", margin: "0px 10px 0px 10px" }}
                    >
                      {item.name}
                    </Col>
                    <Col
                      className="cols"
                      lg={{ span: 2, offset: 1 }}
                      xs={{ span: 1, offset: 1 }}
                      style={{ padding: "0px", margin: "0px 10px 0px 10px" }}
                    >
                      Орц:{item.ingredients.slice(0, 10)}...
                    </Col>
                    <Col
                      className="cols"
                      lg={{ span: 2, offset: 1 }}
                      xs={{ span: 1, offset: 1 }}
                      style={{ padding: "0px", margin: "0px 10px 0px 10px" }}
                    >
                      {item.portion}
                    </Col>
                    <Col
                      className="cols"
                      lg={{ span: 2, offset: 1 }}
                      xs={{ span: 1, offset: 1 }}
                      style={{ padding: "0px", margin: "0px 10px 0px 10px" }}
                    >
                      {item.price}
                    </Col>
                    <Col
                      className="cols"
                      lg={{ span: 2, offset: 1 }}
                      xs={{ span: 1, offset: 1 }}
                      style={{ padding: "0px", margin: "0px 10px 0px 10px" }}
                    >
                      {item.category}
                    </Col>
                    <Col
                      className="cols"
                      lg={{ span: 2, offset: 1 }}
                      xs={{ span: 1, offset: 1 }}
                      style={{ padding: "0px", margin: "0px 10px 0px 10px" }}
                    >
                      {}
                    </Col>
                  </Row>
                </List.Item>
              </>
            );
          }}
        />
      </div>
    </div>
  );
}
