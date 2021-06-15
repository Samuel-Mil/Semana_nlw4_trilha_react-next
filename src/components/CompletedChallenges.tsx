import { useContext } from 'react';
import { ChallangesContext } from '../contexts/ChallangesContext';
import styles from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges(){
    const { challangeCompleted } = useContext(ChallangesContext);
    return (
        <div className={styles.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challangeCompleted}</span>
        </div>
    );
}