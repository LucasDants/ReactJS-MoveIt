import Head from "next/head";
import { GetServerSideProps } from "next";
import { useRouter } from 'next/router'
import axios from 'axios'

import styles from "../styles/pages/SignIn.module.css";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

interface SignInProps {
  username: string
  userImage: string
}

export default function SignIn(props: SignInProps) {
  const [username, setUsername] = useState('')
  const [hasError, setHasError] = useState(false)
  const router = useRouter()


    useEffect(() => {
      if(props.username && props.userImage) {
        setUsername(props.username)
      }
    }, [])

  function signIn() {
    if(props.username && props.userImage) {
      router.push('/home')
    }

    setHasError(false)
    const url = `https://api.github.com/users/${username}`
    axios.get(url).then(response => {
      Cookies.set("username", response.data.login)
      Cookies.set("userImage", response.data.avatar_url)
      router.push('/home')
    }).catch(err => {
      setHasError(true)
    })
  }

  return (
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>
        <div className={styles.signInContainer}>

          <img src="/logo-full.svg" alt=""/>
          <h1>Bem-vindo</h1>
          <p> 
            <img src="/icons/github.svg" alt="" />
            Faça login com seu o Github para começar
          </p>

          <div className={styles.signInInput}>
            <input type="text" placeholder="Digite seu username" value={username} onChange={event => setUsername(event.target.value)}/>
            <button type="button" onClick={signIn} style={username ? { background: "#4CD62B"} : {}}>
                <img src="/icons/arrow-left.svg" alt="arrow-left"/>
            </button>
          </div>
          {
            hasError && <p>Erro ao encontrar o perfil do Github!</p>
          }
        </div>
      </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { username, userImage } = context.req.cookies;

  return {
    props: {
      username,
      userImage,
    },
  };
};
