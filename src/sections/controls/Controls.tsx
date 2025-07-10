import React from "react";
import { TextInput } from "../../components/textInput/TextInput";
import "./Controls.scss";
import { Select } from "../../components/Select/Select";

export const Controls = () => {
  return (
    <div className="controls-container">
      <TextInput />
      <Select />
    </div>
  );
};
