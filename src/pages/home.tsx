import Head from "next/head";
import { GetServerSideProps } from "next";

import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import styles from "../styles/pages/Home.module.css";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContexts";
import { ChallengesProvider } from "../contexts/ChallengesContexts";

//só a home page precisa do countdown e só alguns componentes dela precisam

interface HomeProps {
  username: string
  userImage: string
  level: number
  currentExperience: number
  challengesCompleted: number
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider level={props.level} currentExperience={props.currentExperience} challengesCompleted={props.challengesCompleted}>
      <div className={styles.container}>
        <Head>
          <title>Home | move.it</title>
        </Head>
        <ExperienceBar />
        <CountdownProvider>
          <section>
            <div>
              <Profile username={props.username} userImage={props.userImage} />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}

//so funciona no pages, manipular quais dados são passado da camada do next pra camada do frontend
// no método faz essa chamada no server node e antes da tela ser construída
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { username, userImage, level, currentExperience, challengesCompleted } = context.req.cookies;

  return {
    props: {
      username: username ?? '',
      userImage: userImage ?? '',
      level: Number(level ?? 1),
      currentExperience: Number(currentExperience ?? 0),
      challengesCompleted: Number(challengesCompleted ?? 0),

    },
  };
};
