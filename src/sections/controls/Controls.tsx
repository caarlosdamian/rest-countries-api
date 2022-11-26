import React from "react";
import { Select } from "../../components/select/Select";
import { TextInput } from "../../components/textInput/TextInput";
import "./Controls.scss";

export const Controls = () => {
  return (
    <div className="controls-container">
      <TextInput />
      <Select />
    </div>
  );
};
