import { DownOutlined } from "@ant-design/icons";
import { Tree } from "antd";
import React, { useState } from "react";

const TreeBoiler = (props) => {
  const [obj, setobj] = useState([]);

  const [language, setlanguage] = useState("");

  const { onSetValue } = props;

  const valueMap = {};

  const randomString = e =>{
    const le = e || 32;
    const str ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
    let st = '';
    for(let i = 0 ; i < le ; i++){
      st += str.charAt(Math.floor(Math.random()*str.length))
    }
    
    return st;
  }

  const loops = (list, parent) => {
    return (list || []).map(({ children, key }) => {
      const node = (valueMap[key] = {
        parent,
        key,
      });
      node.children = loops(children, node);
      return node;
    });
  };

  loops(obj);

  const getPath = (key) => {
    const path = [];
    let current = valueMap[key];
    while (current) {
      path.unshift(current.key);
      current = current.parent;
    }
    return path;
  };

  const onSelect = (selectedKeys, info) => {
    const arr = getPath(info.node.title);
    const key = arr.join(".");
    const value = info.node.value;
    onSetValue({ [key]: value });
  };

  const getNodes = (object) => {
    return Object.entries(object).map(([key, value]) =>
      value && typeof value === "object"
        ? { key : randomString(10) , title: key, value, children: getNodes(value) }
        : { key : randomString(10), title: key, value }
    );
  };

  const onData = (e) => {
    let file = e.target.files;
    let reader = new FileReader();
    reader.readAsText(file[0]);
    reader.onload = (e) => {
      const json = JSON.parse(e.target.result);
      setobj(getNodes(json));
    };
  };


  const onHandleChange = (e) => {
    setlanguage(e.target.value);
  };

  const fileData = JSON.parse(localStorage.getItem("translate"));

  const data =
    language &&
    fileData &&
    "text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(fileData[language]));

  return (
    <>
      <div className="d-flex justify-content-between mb-3 mx-lg-3">
        <label
          htmlFor="import"
          className="btn btn-primary"
          style={{ marginBottom: 0, marginRight: 10 }}
        >
          <i className="fas fa-upload" style={{ marginRight: 10 }}></i>
          Import
        </label>
        <input
          type="file"
          name="file"
          onChange={onData}
          accept=".json"
          id="import"
          style={{ display: "none" }}
        />
        <div className="d-flex">
          <select
            className="form-control mr-2"
            name="language"
            style={{ width: 200 }}
            value={language}
            onChange={onHandleChange}
          >
            <option value="">Chọn ngôn ngữ</option>
            <option value="vi">Việt Nam</option>
            <option value="jp">Nhật Bản</option>
          </select>
          <a
            href={`data:${data}`}
            download="data.json"
            className="btn btn-success"
            disabled={!language}
          >
            <i className="fas fa-download" style={{ marginRight: 10 }}></i>
            Export
          </a>
        </div>

      </div>
      <Tree
        showLine
        switcherIcon={<DownOutlined />}
        onSelect={onSelect}
        treeData={obj}
      />
    </>
  );
};

export default TreeBoiler;


