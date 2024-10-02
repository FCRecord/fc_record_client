import Image from "next/image";
import { forwardRef, useRef } from "react";
import { useCheckBox } from "./CustomCheckBox.hook";
import * as S from "./CustomCheckBox.style";
import { CheckBoxProps } from "./CustomCheckBox.type";

const CustomCheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
  (
    {
      styles,
      imageSrc,
      imagePropsWithoutSrc,
      gap,
      label,
      disabled,
      defaultChecked,
      checked,
      onClick,
      ...rest
    }: CheckBoxProps,
    propRef
  ) => {
    const selfRef = useRef<HTMLInputElement>(null);
    const ref = propRef || selfRef;
    const { isChecked, handleClick } = useCheckBox({
      checked,
      defaultChecked,
      onClick,
    });

    return (
      <S.Wrapper
        style={styles?.wrapper}
        $disabled={disabled ?? false}
        $gap={gap}
        onClick={(event) => {
          event.preventDefault();

          if (disabled) {
            return;
          }

          if (ref && "current" in ref && ref.current) {
            ref.current.click();
          }
        }}
      >
        <S.CheckImageWrapper
          style={styles?.imageWrapper}
          $checked={isChecked}
          $disabled={disabled ?? false}
        >
          <Image
            style={{ opacity: isChecked ? 1 : 0 }}
            src={imageSrc ?? "/check-mark.png"}
            width={12}
            height={12}
            alt="체크"
            {...imagePropsWithoutSrc}
          />
        </S.CheckImageWrapper>
        {label}
        <input
          readOnly
          ref={ref}
          style={{ position: "absolute", opacity: 0, pointerEvents: "none" }}
          type="checkbox"
          defaultChecked={defaultChecked}
          checked={checked}
          onClick={(event) => {
            event.stopPropagation();
            handleClick(event);
          }}
          {...rest}
        />
      </S.Wrapper>
    );
  }
);

CustomCheckBox.displayName = "CheckBox";

export default CustomCheckBox;
