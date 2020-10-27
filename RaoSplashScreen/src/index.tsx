import React from "react";
import { useIntl } from 'umi';
import CarouselBlock from './blocks/carousel';
import { PropsCarousel } from './blocks/carousel/interfaces/carousel.interface';
import { dataFixture } from './fixture/dataFixture';
import { useWindowSize } from './hooks/useWindowSize';
import styles from './index.less';

interface PAGE_NAME_UPPER_CAMEL_CASEProps {
  imagesCarousel: string[];
  logo1: string;
  logo2: string;
  iconCircle: string;
}
/**
 * Pro block RegisterOtp
 *
 * @param {Props} { step,onComplete, flagFlowComplete}
 */
const PAGE_NAME_UPPER_CAMEL_CASE: React.FC<PAGE_NAME_UPPER_CAMEL_CASEProps> = (props = dataFixture) => {
  const { imagesCarousel, logo1, logo2, iconCircle } = props
  const intl = useIntl();
  let logoIcon = logo2;
  const size = useWindowSize();

  const propsCarousel: PropsCarousel = {
    options: [
      {
        img: imagesCarousel[0],
        valH1: <h1> {intl.formatMessage({ id: 'BLOCK_NAME.val1-h1' })}
          <br />{intl.formatMessage({ id: 'BLOCK_NAME.val1-h1-br' })}</h1>,
        valH3: <h3> {intl.formatMessage({ id: 'BLOCK_NAME.val1-h3' })}
          <br /> {intl.formatMessage({ id: 'BLOCK_NAME.val1-h3-br' })}</h3>
      },
      {
        img: imagesCarousel[1],
        valH1: <h1> {intl.formatMessage({ id: 'BLOCK_NAME.val2-h1' })}
          <br />{intl.formatMessage({ id: 'BLOCK_NAME.val2-h1-br' })}</h1>,
        valH3: <h3> {intl.formatMessage({ id: 'BLOCK_NAME.val2-h3' })}
          <br /> {intl.formatMessage({ id: 'BLOCK_NAME.val2-h3-br' })}</h3>
      },
      {
        img: imagesCarousel[2],
        valH1: <h1> {intl.formatMessage({ id: 'BLOCK_NAME.val3-h1' })}
          <br />{intl.formatMessage({ id: 'BLOCK_NAME.val3-h1-br' })}</h1>,
        valH3: <h3> {intl.formatMessage({ id: 'BLOCK_NAME.val3-h3' })}
          <br /> {intl.formatMessage({ id: 'BLOCK_NAME.val3-h3-br' })}</h3>
      },
    ],
    redirect: '/account-opening',
  }

  if (size.width <= 5000 && size.width >= 876) {
    logoIcon = logo1;
  } else if (size.width < 875 && size.width > 721) {
    logoIcon = logo2;
  } else {
    logoIcon = logo2;
  }


  return (
    <body className={`${styles.withBg}`} style={{ backgroundImage: `url(${iconCircle})` }}>
      <div className={`${styles.features}`} >
        <div className={`${styles.icoLogo}`} style={{ backgroundImage: `url(${logoIcon})` }} >
        </div>
        <CarouselBlock {...propsCarousel} />
      </div>
    </body>
  );
};

export default PAGE_NAME_UPPER_CAMEL_CASE;
