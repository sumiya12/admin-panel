import React, { useEffect, useState } from "react";
import { otherServices } from "../../services/otherServices";
import FoodConfig from "../SideMenu/FoodConfig";
import { useUser } from "../../contexts/UserContext";
import { List, Row, Col, Divider, Dropdown, Menu } from "antd";
import { useFood } from "../../contexts/FoodContext";

export default function FoodMenu() {
  const [foods, setFoods] = useFood();
  const [user, setUser] = useUser();
  const [data, setData] = useState();
  const [visible, setVisible] = useState(false);
  const click_ref = React.useRef(null);

  useEffect(() => {
    otherServices
      .getAllFood()
      .then((e) => e.json())
      .then((e) => {
        console.log(e.data);
        setFoods(e.data);
      });
    function deleteFood() {
      otherServices
        .deleteFood({ token: user.token }, data)
        .then((e) => e.json())
        .then((e) => {
          console.log(e.data);
          setFoods(e.data);
        });
    }
    click_ref.current = deleteFood;
  }, [data]);

  const showDrawer = () => {
    setVisible(true);
  };
  const addFood = () => {
    showDrawer();
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  const menu = (
    <Menu>
      <Menu.Item>
        <a type="primary">Засах</a>
        <FoodConfig onClose={() => onClose()} visible={visible} />
      </Menu.Item>
      <Menu.Item onClick={() => click_ref.current()}>Устгах</Menu.Item>
    </Menu>
  );
  const number = 0;
  return (
    <div>
      <div>
        <Divider orientation="left">ХООЛНЫ ЦЭС</Divider>
        <div style={{ justifyContent: "space-between", display: "flex" }}>
          <input value="Хайх"></input>
          <button onClick={addFood}>Хоол нэмэх</button>
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
              <span></span>
            </div>
          }
          footer={
            <div style={{ marginTop: "auto" }}>
              {/* <Pagination
                current={current}
                total={50}
                onChange={onChange}
                style={{ marginTop: "auto" }}
              /> */}
            </div>
          }
          bordered
          dataSource={foods}
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
                      {
                        <Dropdown overlay={menu}>
                          <a
                            key={i}
                            onClick={() => {
                              setData(item._id);
                            }}
                            key={i}
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              padding: "2px",
                              border: "none",
                            }}
                          >
                            <span
                              style={{
                                border: "1px solid #F17228",
                                width: "5px",
                                height: "5px",
                                background: "#F17228",
                                borderRadius: "50%",
                              }}
                            ></span>
                            <span
                              style={{
                                border: "1px solid #F17228",
                                width: "5px",
                                height: "5px",
                                background: "#F17228",
                                borderRadius: "50%",
                                paddingTop: "1px",
                              }}
                            ></span>
                            <span
                              style={{
                                border: "1px solid #F17228",
                                width: "5px",
                                height: "5px",
                                background: "#F17228",
                                borderRadius: "50%",
                                paddingTop: "1px",
                              }}
                            ></span>
                          </a>
                        </Dropdown>
                      }
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
