import type { FC } from "react";
import Image from "next/image";

import DragonHero from "@/components/dragon-hero/dragon-hero";
import RegistrationForm from "@/containers/registration-form";
import { HeadPhonesIconImageData } from "@/assets/icons";

import styles from "./page.module.css";

const Home: FC = () => {
  return (
    <div className={styles.page}>
      <DragonHero />
      <main className={styles.main}>
        <hgroup>
          <h1>
            Create an account<span>.</span>
          </h1>
          <p>
            Already have an acount? <a href="#">Sign in</a>
          </p>
        </hgroup>
        <RegistrationForm />
        <footer className={styles.footer}>
          <a href="">Have Promo Code?</a>
          <a href="">
            <Image alt="Head-phones icon" {...HeadPhonesIconImageData} />{" "}
            Contact Support
          </a>
        </footer>
      </main>
    </div>
  );
};

export default Home;
