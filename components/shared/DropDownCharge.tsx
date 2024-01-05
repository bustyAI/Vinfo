import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type DropdownChargeProps = {
  value?: boolean;
  onChangeHandler?: () => void;
};

const DropDownCharge = ({ value, onChangeHandler }: DropdownChargeProps) => {
  return (
    <Select
      onValueChange={onChangeHandler}
      defaultValue={value ? "true" : "false"}
    >
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
