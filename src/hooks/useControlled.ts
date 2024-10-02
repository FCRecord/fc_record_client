import { useState, useRef, useCallback } from "react";

interface UseControlledProps<T> {
  controlled?: T;
  defaultValue: T;
  onChange?: (value: T) => void;
}

const useControlled = <T>({
  controlled,
  defaultValue,
  onChange,
}: UseControlledProps<T>): [T, (newValue: T) => void] => {
  const isControlled = useRef(controlled !== undefined).current;

  const [valueState, setValueState] = useState(defaultValue);

  const value = isControlled ? (controlled as T) : valueState;

  const setValue = useCallback(
    (newValue: T) => {
      if (!isControlled) {
        setValueState(newValue);
      }

      if (onChange) {
        onChange(newValue);
      }
    },
    [isControlled, onChange]
  );

  return [value, setValue];
};

export default useControlled;
