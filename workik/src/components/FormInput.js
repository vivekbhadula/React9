import React from "react";
import { Form, Input, Cascader, Select, Button, Checkbox } from "antd";

const { Option } = Select;

const FormInput = () => {
  const [form] = Form.useForm();

  const onFinish = () => {};

  return (
    <Form form={form} name="register" onFinish={onFinish}>
      <Form.Item name="email" label="E-mail">
        <Input />
      </Form.Item>
    </Form>
  );
};

export default FormInput;
