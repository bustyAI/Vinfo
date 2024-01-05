import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type DropdownProps = {
  value?: string;
  onChangeHandler?: () => void;
};

const Dropdown = ({ value, onChangeHandler }: DropdownProps) => {
  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
      <SelectTrigger className="select-field">
        <SelectValue placeholder="Fuel Type" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Gas">Gas</SelectItem>
        <SelectItem value="Diesel">Diesel</SelectItem>
        <SelectItem value="Electric">Electric</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default Dropdown;
