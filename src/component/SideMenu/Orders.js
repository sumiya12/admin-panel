import React, { useEffect, useState } from "react";
import { otherServices } from "../../services/otherServices";
import { useOrder } from "../../contexts/OrderContext";
import { useUser } from "../../contexts/UserContext";
import { List, Row, Col, Divider } from "antd";
import { Pagination } from "antd";
import "../../style/menuStyle/orders.css";
import moment from "moment";
export default function Orders(values) {
  const [order, setOrder] = useOrder();
  const [user, setUser] = useUser();
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    fetch(`https://dev-api.mstars.mn/api/orders?page=${current}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: user.token }),
    })
      .then((e) => e.json())
      .then((e) => {
        console.log(e.data.docs);
        setOrder(e.data.docs);
      });
  }, [current]);
  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };
  const showTotal = (total) => `Total ${total} items`;
  return (
    <div>
      <Divider orientation="left">Захиалгууд</Divider>
      <List
        header={
          <div className="header" lg={{ span: 3, offset: 2 }}>
            <span>Он сар өдөр</span>
            <span>Захиалга #</span>
            <span>Хэрэглэгч</span>
            <span>Захиалга</span>
            <span>Нийт дүн</span>
            <span>Төлбөр</span>
            <span>Утас</span>
            <span>Төлөв</span>
          </div>
        }
        footer={
          <div>
            <Pagination
              defaultCurrent={1}
              total={60}
              current={current}
              onChange={onChange}
              showTotal={showTotal}
            />
          </div>
        }
        bordered
        dataSource={order}
        renderItem={(item, i) => {
          return (
            <>
              <List.Item className="listItems" key={i}>
                <Row className="rows">
                  <Col className="cols" lg={{ span: 6, offset: 1 }}>
                    {moment(item.created_date).format("YYYY/DD/MM")}
                  </Col>
                  <Col className="cols" lg={{ span: 6, offset: 1 }}>
                    {item.total_price}
                  </Col>
                  <Col className="cols" lg={{ span: 6, offset: 1 }}>
                    {item.user_id}
                  </Col>
                  <Col className="cols" lg={{ span: 6, offset: 1 }}>
                    {item.status}
                  </Col>
                  <Col className="cols" lg={{ span: 6, offset: 1 }}>
                    {item.user_id}
                  </Col>
                  <Col className="cols" lg={{ span: 6, offset: 1 }}>
                    {item.date}
                  </Col>
                  <Col className="cols" lg={{ span: 6, offset: 1 }}>
                    {item.date}
                  </Col>
                  <Col className="cols" lg={{ span: 6, offset: 1 }}>
                    {item.date}
                  </Col>
                </Row>
              </List.Item>
            </>
          );
        }}
      />
    </div>
  );
}
