import { ForwardedRef, forwardRef } from "react";

import * as S from "./CustomButton.style";
import { ButtonProps } from "./CustomButton.type";

const CustomButton = forwardRef(
  (
    { children, variant, isLoading, ...rest }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    if (isLoading) {
      return (
        <S.Button
          ref={ref}
          $variant={variant ?? "primary"}
          $isLoading={isLoading}
          {...rest}
        >
          <S.SpinnerWrapper>
            <S.SpinnerImage
              width={15}
              height={15}
              src="/icon-loading.png"
              alt="Loading spinner"
            />
            Loading
          </S.SpinnerWrapper>
        </S.Button>
      );
    }

    return (
      <S.Button ref={ref} $variant={variant ?? "primary"} {...rest}>
        {children}
      </S.Button>
    );
  }
);

CustomButton.displayName = "Button";

export default CustomButton;
