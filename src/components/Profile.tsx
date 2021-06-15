import { useContext } from 'react';
import { ChallangesContext } from '../contexts/ChallangesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){
    const { level } = useContext(ChallangesContext);
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/samuel-mil.png" alt="Samuel Milhomens"/>
            <div>
                <strong>Samuel Milhomens</strong>
                <p>
                    <img src="icons/level.svg" alt="level arrow"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}