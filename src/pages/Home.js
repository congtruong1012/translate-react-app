import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import Header from "../components/Header";
import TreeBoiler from "../components/TreeBoiler";
import Translate from "../components/Translate";
import { Redirect } from "react-router-dom";
const Container = styled.div`
  max-width: 1200px;
  margin: 30px auto;
`;

const Home = () => {
  const [value, setValue] = useState("");

  const [translate, setTranslate] = useState({en : "", vi : "", jp : ""});

  const onSetValue = (value) => {
    setValue(value);
  };

  const onTranslate = (obj) => {
    const en = obj.en;
    const vi = obj.vi?obj.vi:obj.en;
    const jp = obj.jp?obj.jp:obj.en;
    setTranslate({...translate, en, vi, jp});
    // for (let key in value) {
    //   translate.vi[key] = obj.vi ? obj.vi : value[key];
    //   translate.jp[key] = obj.jp ? obj.jp : value[key];
    // }
    // localStorage.setItem("translate", JSON.stringify(translate));
    // console.log(JSON.parse(localStorage.getItem("translate")));
  };
  
  if (localStorage.getItem("login")) {
    return (
      <>
        <Header />
        <Container>
          <Row>
            {/* <Col span={6}>
            <SideBar />
          </Col> */}
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
