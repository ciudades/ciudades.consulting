import { IAboutUs } from '../../fixtures/about-us-fixture'
import styles from './about-us.module.scss'
import Points from '../../assets/about-us-assets/points.png'
import ImgRight1 from '../../assets/about-us-assets/img-right1.jpg'
import ImgRight2 from '../../assets/about-us-assets/img-right2.jpg'
import ImgRight3 from '../../assets/about-us-assets/img-right3.jpg'
import Image from 'next/image'

function AboutUs({ aboutUsTitle, aboutUsDescription }: IAboutUs): JSX.Element {
  return (
    <div className={styles["aboutus-container"]}>
      <div className={styles.container}>
        <div className={styles["aboutus-text-container"]}>
          <h2 className={styles["aboutus-title"]}>{aboutUsTitle}</h2>
          <div className={styles["aboutus-description"]}>
            {aboutUsDescription.map((item, index) => <p key={index}>{item}</p>)}
          </div>
        </div>
        <div className={styles["aboutus-images-right"]}>
          <div className={styles.points}>
            <Image src={Points} width={126} height={206} alt="" />
          </div>
          <div className={styles['img-right1']}>
            <Image src={ImgRight1} width={265} height={265} alt="" />
          </div>
          <div className={styles['img-right2']}>
            <Image src={ImgRight2} width={265} height={265} alt="" />
          </div>
          <div className={styles['img-right3']}>
            <Image src={ImgRight3} width={265} height={265} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
 
export default AboutUs;
