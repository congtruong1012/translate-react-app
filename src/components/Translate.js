/* eslint-disable valid-typeof */
/* eslint-disable react-hooks/exhaustive-deps */
import { Form, notification } from "antd";
import React, { useState, useEffect } from "react";

const Translate = (props) => {
  const { content, onTranslate } = props;
  const [language, setLanguage] = useState({
    en: "",
    vi: "",
    jp: "",
  });
  useEffect(() => {
    for (let key in content) {
      if (typeof content[key] !== "object") {
        setLanguage({ ...language, en: content[key] });
      }
    }
  }, [content]);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setLanguage({ ...language, [name]: value });
  };

  const onHandleSubmit = (e) => {
    onTranslate(language);
    notification["success"]({
      message: "Translate Success",
    });
  };
  return (
    <>
      <div className="card  ">
        <div className="card-header text-white bg-primary">Translate</div>
        <div className="card-body p-3">
          <Form onSubmitCapture={onHandleSubmit}>
            <div className="form-group">
              <label>English</label>
              <textarea
                name="en"
                onChange={onHandleChange}
                value={language.en}
                style={{ width: "100%" }}
                row="2"
                className="form-control"
                disabled
              ></textarea>
            </div>
            <div className="form-group">
              <label>Vietnamese</label>
              <textarea
                name="vi"
                style={{ width: "100%" }}
                row="2"
                className="form-control"
                onChange={onHandleChange}
                value={language.vi}
              ></textarea>
            </div>
            <div className="form-group">
              <label>Japanese</label>
              <textarea
                name="jp"
                className="form-control"
                style={{ width: "100%" }}
                onChange={onHandleChange}
                row="2"
                value={language.jp}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Translate;
