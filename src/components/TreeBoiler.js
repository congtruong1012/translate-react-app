import { DownOutlined } from "@ant-design/icons";
import { Tree } from "antd";
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

const TreeBoiler = (props) => {
  const [obj, setobj] = useState([]);
  const { onSetValue } = props;
  const valueMap = {};
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
        ? { key, title: key, value, children: getNodes(value) }
        : { key, title: key, value }
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

  const data =
    "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));

  return (
    <Router>
      <div className="mb-3">
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
        <a
          href={`data:${data}`}
          download="data.json"
          className="btn btn-success"
        >
          <i className="fas fa-download" style={{ marginRight: 10 }}></i>
          Export
        </a>
      </div>
      <Tree
        showLine
        switcherIcon={<DownOutlined />}
        onSelect={onSelect}
        treeData={obj}
      />
    </Router>
  );
};

export default TreeBoiler;
