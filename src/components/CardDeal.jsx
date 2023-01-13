import React from 'react';
import { card } from '../assets';
import styles, {layout} from '../style';
import Button from './Button';

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal<br className='sm:block hidden'></br> in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[600px] mt-5`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor. Aliquet ultrices ac, ametau.</p>
        <Button styles="mt-10" />
      </div>
      <div className={layout.sectionImg}>
        <img className='w-[100%] h-[100%]' src={card} alt="card" />
      </div>
    </section>
  )
}

export default CardDeal