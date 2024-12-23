import type { FC } from "react";
import Image from "next/image";

import DragonHeroImageData from "@/assets/images/dragon-hero.png";
import NickMineLogoImageData from "@/assets/images/nm-logo.png";

import styles from "./dragon-hero.module.css";

const DragonHero: FC = () => {
  return (
    <div className={styles.hero}>
      <Image
        className={styles.logo}
        alt="Nick Mine Inc logo"
        {...NickMineLogoImageData}
      />
      <Image alt="Dragon and Castle" {...DragonHeroImageData} />
      <p className={styles.branding}>Nick Mine Inc</p>
    </div>
  );
};

export default DragonHero;
