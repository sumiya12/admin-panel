import React, { useEffect,useState } from "react";
// import { otherServices } from "../../services/otherServices";
import { useOrder } from "../../contexts/OrderContext";
import { useUser } from "../../contexts/UserContext";
import { List, Row, Col, Divider, Pagination } from "antd";
import "../../style/menuStyle/orders.css";
export default function Orders(values ) {
  const [order, setOrder] = useOrder();
  const [user, setUser] = useUser();
  const [current, setCurrent] = useState(1);
  
  useEffect(() => {
    fetch(`https://dev-api.mstars.mn/api/orders?page=${current}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token: user.token } )
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
  return (
    <div>
      <Divider orientation="left">Захиалгууд</Divider>
      <List
        header={
          <div className="header" lg={{ span: 2, offset: 1 }}>
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
        footer={<div><Pagination current={current} total={50} onChange={onChange} /></div>}
        bordered
        dataSource={order}
        renderItem={(item) => {
          return (
            <>
              <List.Item className="listItems">
                <Row className="rows">
                  <Col className="cols" lg={{ span: 2, offset: 1 }}>
                    {item.created_date}
                  </Col>
                  <Col className="cols" lg={{ span: 2, offset: 1 }}>
                    {item.deliverman_id}
                  </Col>
                  <Col className="cols" lg={{ span: 2, offset: 1 }}>
                    {item.payment_type}
                  </Col>
                  <Col className="cols" lg={{ span: 2, offset: 1 }}>
                    {item.status}
                  </Col>
                  <Col className="cols" lg={{ span: 2, offset: 1 }}>
                    {item.total_price}
                  </Col>
                  <Col className="cols" lg={{ span: 2, offset: 1 }}>
                    {item.user_id}
                  </Col>
                  <Col className="cols" lg={{ span: 2, offset: 1 }}>
                    {item._v}
                  </Col>
                  <Col className="cols" lg={{ span: 2, offset: 1 }}>
                    {item._id}
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
