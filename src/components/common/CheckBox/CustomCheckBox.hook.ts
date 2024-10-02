import { MouseEvent } from "react";

import { CheckBoxProps } from "./CustomCheckBox.type";
import useControlled from "@/hooks/useControlled";

type Props = {
  checked: CheckBoxProps["checked"];
  defaultChecked: CheckBoxProps["defaultChecked"];
  onClick: CheckBoxProps["onClick"];
};

export const useCheckBox = ({ checked, defaultChecked, onClick }: Props) => {
  const [isChecked, setIsChecked] = useControlled({
    controlled: checked,
    defaultValue: defaultChecked ?? false,
  });

  const handleClick = (
    event: MouseEvent<HTMLInputElement, globalThis.MouseEvent>
  ) => {
    setIsChecked(!isChecked);

    if (onClick) {
      onClick(event);
    }
  };

  return {
    isChecked,
    handleClick,
  };
};
