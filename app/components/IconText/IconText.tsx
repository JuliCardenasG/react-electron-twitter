import React, { ReactElement } from "react";
import { Space } from "antd";

type Props = {
  icon: any,
  text: number;
}

export default function IconText({ icon, text }: Props): ReactElement {
  return (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  )
}
