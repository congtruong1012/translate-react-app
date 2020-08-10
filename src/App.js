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
  const [value, setValue ] = useState('')
  const onSetValue = (value) => {
    setValue(value);
  }
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
          <Translate content={value} />
        </Col>
      </Row>
      
    </Container>
    </>
    
  );
}

export default App;
