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
      .then((e) => {
        console.log(e);
        setOrder(e.Orders);
      });
  }, []);
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
        renderItem={(item, i) => { 
          return (
            <>
              <List.Item className="listItems" key={i}>
                <Row className="rows">
                      <Col className="cols" lg={{ span: 2, offset: 1 }}>
                        {item.date}
                      </Col>
                      <Col className="cols" lg={{ span: 2, offset: 1 }}>
                        {item.number}
                      </Col>
                      <Col className="cols" lg={{ span: 2, offset: 1 }}>
                        {item.customer}
                      </Col>
                      <Col className="cols" lg={{ span: 2, offset: 1 }}>
                        {item.order.map((e)=> {return e.name})}
                      </Col>
                      <Col className="cols" lg={{ span: 2, offset: 1 }}>
                      {parseInt(item.order.map((e)=> {return e.quantity })) * parseInt(item.order.map((e)=> {return e.price})) }
                      </Col>
                      <Col className="cols" lg={{ span: 2, offset: 1 }}>
                        {item.date}
                      </Col>
                      <Col className="cols" lg={{ span: 2, offset: 1 }}>
                        {item.date}
                      </Col>
                      <Col className="cols" lg={{ span: 2, offset: 1 }}>
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
