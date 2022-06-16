import React, { useEffect , } from "react";
import { otherServices } from "../../services/otherServices";
import { useOrder } from "../../contexts/OrderContext";
import { useUser } from "../../contexts/UserContext";
import { List, Row, Col, Divider } from "antd";
import "../../style/menuStyle/orders.css";
export default function Orders(values) {
  const [order, setOrder] = useOrder();
  const [user, setUser] = useUser();
  useEffect(() => {
    otherServices
      .getAllOrders(values)
      .then((e) => e.json())
      .then((e) => {
        console.log(e);
        setOrder({
          // user_id: user?.id,
          // user_address: {
          //   district: e.target.elements.district?.value,
          //   khoroo: e.target.elements.khoroo?.value,
          //   apartment: e.target.elements.apartment?.value,
          //   additional: e.target.elements.additional?.value,
          // },
          // phone: e.target.elements.number?.value,
          // basket: basketFood,
          // payment_type: e.target[5].checked
          //   ? "CASH"
          //   : e.target[6].checked
          //   ? "CARD"
          //   : "",
          token: user?.token,
        });
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
