import { Col, Row, notification } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import fetchAPI from "../Api/fetchAPI";
import Header from "../components/Header";
import Translate from "../components/Translate";
import TreeBoiler from "../components/TreeBoiler";
import { Redirect } from "react-router-dom";
const Container = styled.div`
  max-width: 1200px;
  margin: 30px auto;
`;

const Home = () => {
  const [value, setValue] = useState("");

  const onSetValue = (value) => {
    setValue(value);
  };

  const onTranslate = (obj) => {
    const en = obj.en;
    const vi = obj.vi ? obj.vi : obj.en;
    const jp = obj.jp ? obj.jp : obj.en;
    const translate = {en, vi, jp}
    for (let key in value) {
      if (key !== "en") {
        fetchAPI("/language", "POST", {
          key: key,
          message: translate,
        }).then((res) =>{
          notification["success"]({
            message: "Translate Success",
          });
        });
      }
    }
  };

  if (localStorage.getItem("cool-token")) {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col span={12} lg={12} md={24} xs={24}>
            <TreeBoiler onSetValue={onSetValue} />
          </Col>
          <Col span={12} lg={12} md={24} xs={24}>
            <Translate content={value} onTranslate={onTranslate} />
          </Col>
        </Row>
      </Container>
    </>
  );
  } else {
    return <Redirect to="/login" />;
  }
};

export default Home;
