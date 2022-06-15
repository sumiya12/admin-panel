import React from "react";
import { Spin, Alert } from "antd";
export default function Loading() {
  return (
    <div
      style={{
        justifyContent: "center",
        textAlign: "center",
        height: "100vh",
        alignItems: "center",
        margin: "auto",
        display: "flex",
      }}
    >
      <Spin tip="Loading..."></Spin>
    </div>
  );
}
