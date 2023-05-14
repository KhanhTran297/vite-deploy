import { Button, Col, Form, Input, Row, Select } from "antd";
import React from "react";
import useAdmin from "@/hook/useAdmin";

const SearchForm = (props) => {
  const { fieldSearch } = props;
  const [form] = Form.useForm();
  const { setParams } = useAdmin();
  const handleSearch = (value) => {
    const params = new URLSearchParams();
    Object.keys(value).forEach((key) => {
      if (value[key] !== undefined && value[key] !== "") {
        //object bao gồm các key và value của các field có trên search form,
        params.set(key, value[key]);
      }
      setParams(params);
    });
  };
  const handleClearSearch = () => {
    form.resetFields();

    // form.resetFields();
    setParams("");
  };
  return (
    <Form onFinish={handleSearch} layout="horizontal" form={form}>
      <Row gutter={10}>
        {fieldSearch.map((field) => {
          return (
            <Col key={field.key}>
              <Form.Item name={field.key}>
                {field.type == "Select" ? (
                  <Select
                    options={field.options}
                    placeholder={field.placeholder}
                    allowClear={true}
                    className=" !w-[200px]"
                  />
                ) : (
                  <Input placeholder={field.placeholder} />
                )}
              </Form.Item>
            </Col>
          );
        })}
        <Col>
          <Form.Item>
            <Button htmlType="submit" className=" bg-blue-500">
              Search
            </Button>
          </Form.Item>
        </Col>
        <Col>
          <Form.Item>
            <Button onClick={handleClearSearch} className=" bg-red-500">
              Reset
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchForm;
