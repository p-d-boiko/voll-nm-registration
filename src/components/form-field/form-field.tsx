import type { FC } from "react";
import classes from "clsx";
import Image from "next/image";

import { AlertIconImageData } from "@/assets/icons";

import styles from "./form-field.module.css";
import type { FormFieldProps } from "./types";

const FormField: FC<FormFieldProps> = ({
  name,
  legend,
  type = "text",
  helperText,
  label = null,
  error,
  adornment = null,
  ...handlers
}) => {
  return (
    <div className={styles.wrapper}>
      {type === "checkbox" ? (
        <div className={styles["checkbox"]}>
          <input type={type} id={name} name={name} {...handlers} />
          <label htmlFor={name} className={classes({ [styles.error]: error })}>
            {label}
          </label>
        </div>
      ) : (
        <>
          <fieldset className={styles.fieldset}>
            <legend className={classes({ [styles.error]: error })}>
              {legend}
            </legend>
            <input type={type} id={name} name={name} {...handlers} />
            {error ? (
              <Image alt="Error alert icon" {...AlertIconImageData} />
            ) : (
              adornment
            )}
          </fieldset>
          {helperText ? (
            <div
              className={classes(styles["helper-text"], {
                [styles.error]: error,
              })}
            >
              {helperText}
            </div>
          ) : null}
        </>
      )}
    </div>
  );
};

export default FormField;
