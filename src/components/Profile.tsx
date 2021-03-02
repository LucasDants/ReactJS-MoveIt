import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContexts'
import styles from '../styles/components/Profile.module.css'

interface ProfileProps {
    username: string;
    userImage: string;
}

export function Profile(props: ProfileProps) {
    const {level} = useContext(ChallengesContext)
    return (
        <div className={styles.profileContainer}>
            <img src={props.userImage} alt={props.username}/>
        <div>
            <strong>{props.username}</strong>
            <p>
                <img src="icons/level.svg" alt="Level"/>
                Level {level}
            </p>
        </div>
        </div>
    )
}