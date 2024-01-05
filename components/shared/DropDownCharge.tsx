import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type DropdownChargeProps = {
  value?: string;
  onChangeHandler?: () => void;
};

const DropDownCharge = ({ value, onChangeHandler }: DropdownChargeProps) => {
  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
      <SelectTrigger className="select-field">
        <SelectValue placeholder="Fuel Type" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="true">Is Charging</SelectItem>
        <SelectItem value="false">Not Charging</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default DropDownCharge;
