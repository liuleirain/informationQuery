import React from "react";

const CardItem = (props) => {
  return (
    <div className="card card-body mb-1 ">
      <h4>服务编号：{props.match.serial_number}</h4>
      <h4>主机名：{props.match.hostname}</h4>
    </div>
  );
};

export default CardItem;
