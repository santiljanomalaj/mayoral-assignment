import Image from 'next/image';

import useUpdateParams from '../../../hooks/useUpdateParams';

import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <div className={styles.wrapper} data-testid="not-found">
      <div className={styles.container}>
        <Image src={'/images/404.png'} height={300} width={300} />
        <h2>No pudimos encontrar lo que estás buscando</h2>
      </div>
    </div>
  );
}
