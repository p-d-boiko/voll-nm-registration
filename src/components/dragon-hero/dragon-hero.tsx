import type { FC } from "react";
import Image from "next/image";

import DragonHeroImageData from "@/assets/images/dragon-hero.png";
import NickMineLogoImageData from "@/assets/images/nm-logo.png";

import styles from "./dragon-hero.module.css";
const DragonHero: FC = () => {
  const {
    blurHeight: _dragonBlurHeight,
    blurWidth: _dragonBlurWidth,
    ...dragonImageProps
  } = DragonHeroImageData;
  const {
    blurHeight: _logoBlurHeight,
    blurWidth: _logoBlurWidth,
    ...logoImageProps
  } = NickMineLogoImageData;

  return (
    <div className={styles.hero}>
      <Image
        alt="Nick Mine Inc logo"
        className={styles.logo}
        {...logoImageProps}
      />
      <Image
        alt="Dragon and Castle"
        className={styles.dragon}
        {...dragonImageProps}
      />
      <p className={styles.branding}>Nick Mine Inc</p>
    </div>
  );
};

export default DragonHero;
