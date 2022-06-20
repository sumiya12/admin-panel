import React, { useEffect, useState } from "react";
// import { otherServices } from "../../services/otherServices";

import { useOrder } from "../../contexts/OrderContext";
import { useUser } from "../../contexts/UserContext";
import moment from "moment";
import { List, Row, Col, Divider, Pagination, Checkbox } from "antd";
import "../../style/menuStyle/orders.css";
export default function Orders(values) {
  const [order, setOrder] = useOrder();
  const [user, setUser] = useUser();
  const [current, setCurrent] = useState(1);
  const [checkedList, setCheckedList] = useState();
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);
  const CheckboxGroup = Checkbox.Group;
  const plainOptions = [];
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
    // console.log(page);
    setCurrent(page);
  };
  const onChanged = (list) => {
    // debugger;
    setCheckedList(list);
    console.log(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    console.log(list.length);
    // setCheckAll(list.length === plainOptions.length);
  };
  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    console.log(e.target.checked);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  return (
    <div>
      <Divider orientation="left">Захиалгууд</Divider>
      <List
        header={
          <Checkbox
            indeterminate={indeterminate}
            onChange={onCheckAllChange}
            checked={checkAll}
            className="header"
            style={{
              justifyContent: "space-between",
              display: "flex",
              paddingLeft: "10px",
              marginLeft: "0px",
            }}
            lg={{ span: 2, offset: 1 }}
          >
            <span>Он сар өдөр</span>
            <span>Захиалга #</span>
            <span>Хэрэглэгч</span>
            <span>Захиалга</span>
            <span>Нийт дүн</span>
            <span>Төлбөр</span>
            <span>Утас</span>
            <span>Төлөв</span>
          </Checkbox>
        }
        footer={
          <div style={{ marginTop: "auto" }}>
            <Pagination current={current} total={50} onChange={onChange} />
          </div>
        }
        bordered
        dataSource={order}
        renderItem={(item) => {
          return (
            <>
              <List.Item
                className="listItems"
                style={{
                  marginTop: "0px",
                  background: "white",
                  // borderBottom: "none",
                }}
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
                    style={{ padding: "0px", margin: "0px 10px 0px 10px" }}
                  >
                    <Checkbox
                      indeterminate={indeterminate}
                      onChange={onChanged}
                      checked={checkAll}
                      value={checkedList}
                    >
                      {moment(item.created_date).format("YYYY/MM/DD")}
                    </Checkbox>
                    {/* <CheckboxGroup
                      options={plainOptions}
                      value={checkedList}
                      onChange={onCheckAllChange}
                    /> */}
                  </Col>
                  <Col
                    className="cols"
                    lg={{ span: 2, offset: 1 }}
                    xs={{ span: 1, offset: 1 }}
                    style={{ padding: "0px", margin: "0px 10px 0px 10px" }}
                  >
                    {item.deliverman_id}
                  </Col>
                  <Col
                    className="cols"
                    lg={{ span: 2, offset: 1 }}
                    xs={{ span: 1, offset: 1 }}
                    style={{ padding: "0px", margin: "0px 10px 0px 10px" }}
                  >
                    {item.payment_type}
                  </Col>
                  <Col
                    className="cols"
                    lg={{ span: 2, offset: 1 }}
                    xs={{ span: 1, offset: 1 }}
                    style={{ padding: "0px", margin: "0px 10px 0px 10px" }}
                  >
                    {item.status}
                  </Col>
                  <Col
                    className="cols"
                    lg={{ span: 2, offset: 1 }}
                    xs={{ span: 1, offset: 1 }}
                    style={{ padding: "0px", margin: "0px 10px 0px 10px" }}
                  >
                    {item.total_price}
                  </Col>
                  <Col
                    className="cols"
                    lg={{ span: 2, offset: 1 }}
                    xs={{ span: 1, offset: 1 }}
                    style={{ padding: "0px", margin: "0px 10px 0px 10px" }}
                  >
                    {item.user_id}
                  </Col>
                  <Col
                    className="cols"
                    lg={{ span: 2, offset: 1 }}
                    xs={{ span: 1, offset: 1 }}
                    style={{ padding: "0px", margin: "0px 10px 0px 10px" }}
                  >
                    {item._v}
                  </Col>
                  <Col
                    className="cols"
                    lg={{ span: 2, offset: 1 }}
                    xs={{ span: 1, offset: 1 }}
                    style={{ padding: "0px", margin: "0px 10px 0px 10px" }}
                  >
                    {item.phone}
                  </Col>
                  <Col
                    className="cols"
                    lg={{ span: 2, offset: 1 }}
                    xs={{ span: 1, offset: 1 }}
                    style={{ padding: "0px", margin: "0px 10px 0px 10px" }}
                  >
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
