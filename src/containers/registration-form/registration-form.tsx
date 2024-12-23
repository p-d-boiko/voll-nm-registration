"use client";

import type { FC } from "react";
import Image from "next/image";
import { useForm, type SubmitHandler } from "react-hook-form";

import {
  AccountIconImageData,
  EmailIconImageData,
  PasswordIconImageData,
  UserIdIconImageData,
} from "@/assets/icons";
import FormField from "@/components/form-field";
import type { RegistrationFormData } from "@/types/index";

import styles from "./registration-form.module.css";

const RegistrationForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    mode: "onChange",
    defaultValues: {
      "user-id": "",
      password: "",
      account: "",
      email: "",
      verification: "",
      "service-terms": false,
      "privacy-policy": false,
      "promotions-consent": false,
    },
  });
  const sendRegistrationForm: SubmitHandler<RegistrationFormData> = (
    formData
  ) => {
    console.log("Congratulations!", { formData });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(sendRegistrationForm)}>
      <FormField
        {...register("user-id", { required: true })}
        adornment={<Image alt="User ID field icon" {...UserIdIconImageData} />}
        error={!!errors["user-id"]}
        legend="User ID"
        helperText={errors["user-id"]?.message}
      />
      <FormField
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters",
          },
        })}
        adornment={
          <Image alt="Password field icon" {...PasswordIconImageData} />
        }
        type="password"
        error={!!errors.password}
        legend="Password"
        helperText={errors.password?.message || "8 characters minimun"}
      />
      <FormField
        {...register("account", { required: true })}
        adornment={<Image alt="Account field icon" {...AccountIconImageData} />}
        error={!!errors.account}
        legend="Account Name"
        helperText={
          errors.account?.message || "Visible nickname for your profile"
        }
      />
      <FormField
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        })}
        adornment={<Image alt="Email field icon" {...EmailIconImageData} />}
        error={!!errors.email}
        type="email"
        legend="Email"
        helperText={errors.email?.message}
      />
      <FormField
        {...register("verification", { required: true })}
        adornment={
          <Image alt="Verification field icon" {...EmailIconImageData} />
        }
        error={!!errors.verification}
        legend="Verification Code"
        helperText={errors.verification?.message}
      />
      <FormField
        {...register("service-terms", { required: true })}
        error={!!errors["service-terms"]}
        type="checkbox"
        label={
          <>
            [Required] I read the <a href="#">Terms of Service</a> and I agree
            to the terms.
          </>
        }
      />
      <FormField
        {...register("privacy-policy", { required: true })}
        error={!!errors["privacy-policy"]}
        type="checkbox"
        label={
          <>
            [Required] I read the <a href="#">Privacy Policy</a> and I agree to
            the terms.
          </>
        }
      />
      <FormField
        {...register("promotions-consent")}
        error={!!errors["promotions-consent"]}
        type="checkbox"
        label="[Optional] I would like to receive promotional emails."
      />
      <input type="submit" value="Create Account" />
    </form>
  );
};

export default RegistrationForm;
