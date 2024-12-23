import { HTMLInputTypeAttribute, ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface FormFieldPropsBase extends UseFormRegisterReturn {
  type?: HTMLInputTypeAttribute;
  error?: boolean;
  adornment?: ReactNode;
}

type FormFieldProps =
  | (FormFieldPropsBase & {
      type: "checkbox";
      legend?: never;
      helperText?: never;
      label: ReactNode;
    })
  | (FormFieldPropsBase & {
      type?: Exclude<HTMLInputTypeAttribute, "checkbox">;
      label?: never;
      legend: string;
      helperText?: string;
    });

export type { FormFieldProps };
