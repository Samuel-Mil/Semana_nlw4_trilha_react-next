import { useContext } from 'react';
import { ChallangesContext } from '../contexts/ChallangesContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar(){
    const { currentExperience, experienceToNextLevel } = useContext(ChallangesContext);

    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;
    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width:`${percentToNextLevel}%`,transition: '0.3s' }} />
                <span className={styles.currentExperience} style={{ left:`${percentToNextLevel}%`,transition: '0.3s' }}>
                    {currentExperience} xp
                </span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    );
}