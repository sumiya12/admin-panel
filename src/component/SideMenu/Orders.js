import React, { useEffect } from "react";
import { otherServices } from "../../services/otherServices";
import { useOrder } from "../../contexts/OrderContext";
import { List, Row, Col, Divider } from "antd";
import "../../style/menuStyle/orders.css";
export default function Orders() {
  const [order, setOrder] = useOrder();
  useEffect(() => {
    otherServices
      .getAllOrders()
      .then((e) => e.json())
      .then((e) => setOrder(e.Orders));
  }, []);

  console.log(order);
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
        footer={<div>Footer</div>}
        bordered
        dataSource={order}
        renderItem={(item) => {
          return (
            <>
              <List.Item className="listItems">
                <Row className="rows">
                  <Col className="cols" lg={{ span: 3, offset: 1 }}>
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
