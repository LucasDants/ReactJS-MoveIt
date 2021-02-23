import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/Luksdantas.png" alt="Lucas Dantas"/>
        <div>
            <strong>Lucas Dantas</strong>
            <p>
                <img src="icons/level.svg" alt="Lvel"/>
                Level 1
            </p>
        </div>
        </div>
    )
}