import { createContext, ReactNode, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import challanges from '../../challanges.json';
import { LevelUpModal } from '../components/LevelUpModal';

interface Challange{
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallangesContextData{
    level: number;
    currentExperience: number;
    experienceToNextLevel: number;
    challangeCompleted: number;
    isLevelUpModalUp: boolean;
    activeChallange: Challange;
    levelUp: () => void;
    startNewChallange: () => void;
    resetChallange: () => void;
    completeChallange: () => void;
    closeLevelmodal: () => void;
}

interface ChallangesProviderProps{
    children: ReactNode;
    level: number;
    currentExperience: number;
    challangesCompleted: number;
}

export const ChallangesContext = createContext({} as ChallangesContextData);

export function ChallangesProvider({ children, ...rest }: ChallangesProviderProps){
    const [level, setLevel] = useState(rest.level ?? 1);
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
    const [challangeCompleted, setChallangeCompleted] = useState(rest.challangesCompleted ?? 0);

    const [activeChallange, setActiveChallange] = useState(null);
    const [isLevelUpModalUp, setIsLevelUpModalUp] = useState(false);

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

    useEffect(()=>{
        Notification.requestPermission();
    }, []);

    useEffect(()=>{
        Cookies.set('level', String(level));
        Cookies.set('currentExperience', String(currentExperience));
        Cookies.set('challangesCompleted', String(challangeCompleted));
    }, [level, currentExperience, challangeCompleted]);

    function levelUp(){
        setLevel(level + 1);
        setIsLevelUpModalUp(true);
    }

    function closeLevelmodal(){
        setIsLevelUpModalUp(false);
    }

    function startNewChallange(){
        const ramdomChallangesIndex = Math.floor(Math.random() * challanges.length);
        const challange = challanges[ramdomChallangesIndex];

        setActiveChallange(challange);
        
        new Audio('/notification.mp3').play();

        if(Notification.permission === 'granted'){
            new Notification('Novo desafio! :3',{
                body: `Valendo ${challange.amount}xp!`,
            })
        }
    }

    function resetChallange(){
        setActiveChallange(null);
    }

    function completeChallange(){
        if(!activeChallange){
            return;
        }

        const { amount } = activeChallange;

        let finalExperience = currentExperience + amount;

        if(finalExperience >= experienceToNextLevel){
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();   
        }

        setCurrentExperience(finalExperience);
        setActiveChallange(null);
        setChallangeCompleted(challangeCompleted + 1);
    }

    return (
        <ChallangesContext.Provider 
            value={{ 
                level, 
                currentExperience,
                experienceToNextLevel,
                challangeCompleted, 
                activeChallange,
                isLevelUpModalUp,
                levelUp,
                startNewChallange,
                resetChallange,
                completeChallange,
                closeLevelmodal,
            }}
        >
            { children }

            { isLevelUpModalUp && <LevelUpModal />}
        </ChallangesContext.Provider>
    );
}