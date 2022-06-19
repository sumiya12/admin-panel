import React, { useEffect,useState } from "react";
// import { otherServices } from "../../services/otherServices";
import { useOrder } from "../../contexts/OrderContext";
import { useUser } from "../../contexts/UserContext";
import moment from "moment";
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
    // console.log(page);
    setCurrent(page);
  };
  return (
    <div>
      <Divider orientation="left">Захиалгууд</Divider>
      <List
        header={
          <div className="header" style={{justifyContent:'space-between',display:'flex',paddingLeft:'10px' ,marginLeft:"0px"}} lg={{ span: 2, offset: 1 }}>
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
              <List.Item className="listItems" style={{marginTop:'16px'}}>
                <Row className="rows" style={{width:'100vw',justifyContent:'space-between',display:'flex', }} >
                  <Col className="cols" lg={{ span: 2, offset: 1 }}  xs={{ span: 1, offset: 1 }} style={{ padding:'0px' ,margin:"0px 10px 0px 10px"}} >
                    {moment(item.created_date).format("YYYY/MM/DD")}
                  </Col>
                  <Col className="cols" lg={{ span: 2, offset: 1 }}  xs={{ span: 1, offset: 1 }} style={{ padding:'0px' ,margin:"0px 10px 0px 10px"}} >
                    {item.deliverman_id}
                  </Col>
                  <Col className="cols" lg={{ span: 2, offset: 1 }}  xs={{ span: 1, offset: 1 }} style={{ padding:'0px' ,margin:"0px 10px 0px 10px"}} >
                    {item.payment_type}
                  </Col>
                  <Col className="cols" lg={{ span: 2, offset: 1 }}  xs={{ span: 1, offset: 1 }} style={{ padding:'0px' ,margin:"0px 10px 0px 10px"}} >
                    {item.status}
                  </Col>
                  <Col className="cols" lg={{ span: 2, offset: 1 }}  xs={{ span: 1, offset: 1 }} style={{ padding:'0px' ,margin:"0px 10px 0px 10px"}}>
                    {item.total_price}
                  </Col>
                  <Col className="cols" lg={{ span: 2, offset: 1 }}  xs={{ span: 1, offset: 1 }} style={{ padding:'0px' ,margin:"0px 10px 0px 10px"}}>
                    {item.user_id}
                  </Col>
                  <Col className="cols" lg={{ span: 2, offset: 1 }}  xs={{ span: 1, offset: 1 }} style={{ padding:'0px' ,margin:"0px 10px 0px 10px"}}>
                    {item._v}
                  </Col>
                  <Col className="cols" lg={{ span: 2, offset: 1 }}  xs={{ span: 1, offset: 1 }} style={{ padding:'0px' ,margin:"0px 10px 0px 10px"}}>
                    {item.phone}
                  </Col>
                  <Col className="cols" lg={{ span: 2, offset: 1 }}  xs={{ span: 1, offset: 1 }} style={{ padding:'0px' ,margin:"0px 10px 0px 10px"}}>
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
