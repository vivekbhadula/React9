import React from "react";
import { Form, Input, Cascader, Select, Button, Checkbox } from "antd";

const { Option } = Select;

const FormInput = () => {
  const [form] = Form.useForm();

  const residences = [
    {
      value: "india",
      label: "india",
    },
    {
      value: "usa",
      label: "usa",
    },
    {
      value: "ireland",
      label: "Ireland",
    },
  ];

  const onFinish = () => {};

  return (
    <Form form={form} name="register" onFinish={onFinish}>
      <Form.Item name="email" label="E-mail" style={{ width: "400px" }}>
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        style={{ width: "400px" }}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        style={{ width: "400px" }}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>
      <Form.Item name="nickname" label="Nickname" style={{ width: "400px" }}>
        <Input />
      </Form.Item>
      <Form.Item
        name="country"
        label="Country"
        style={{ width: "250px", marginLeft: "45px" }}
      >
        <Cascader options={residences} style={{ marginLeft: "45px" }} />
      </Form.Item>
    </Form>
  );
};

export default FormInput;
