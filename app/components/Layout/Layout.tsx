import React, { ReactNode } from 'react';
import styles from './Layout.css';


export type LayoutProps = {
  children: ReactNode;
};

export default function Layout(props: LayoutProps): JSX.Element {
  const { children } = props;

  return (
    <div className={styles.mainLayout}>
      {children}
    </div>
  )
}
