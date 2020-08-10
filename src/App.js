import { Col, Row } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import Translate from "./components/Translate";
import TreeBoiler from "./components/TreeBoiler";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 30px;
`;

function App() {
  const [value, setValue] = useState("");
  const [translate, setTranslate] = useState({ vi: {}, jp: {} });
  const onSetValue = (value) => {
    setValue(value);
  };
  const onTranslate = (obj) => {
    for (let key in value) {
      translate.vi[key] = obj.vi?obj.vi:value[key];
      translate.jp[key] = obj.jp?obj.jp:value[key];
      
    }
    localStorage.setItem("translate", JSON.stringify(translate) )
    console.log(JSON.parse(localStorage.getItem("translate")));
  };
  return (
    <>
      <Container>
        <Row>
          {/* <Col span={6}>
          <SideBar />
        </Col> */}
          <Col span={12}>
            <TreeBoiler onSetValue={onSetValue} />
          </Col>
          <Col span={12}>
            <Translate content={value} onTranslate={onTranslate} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
