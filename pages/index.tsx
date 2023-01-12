/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



export default function Home() {

  const [search, setSearch] = useState("");
  const [data, setData] = useState([])
  interface IFilms {
    Title: string;
    imdbID: string;
    Type: string;
    Poster: string;
  }
  
  class Films implements IFilms {
    Title: string;
    imdbID: string;
    Type: string;
    Poster: string;
    static filter: any

    constructor(
      Title: string,
      imdbID: string,
      Type: string,
      Poster: string
    ) {
      this.Title = Title;
      this.imdbID = imdbID;
      this.Type = Type;
      this.Poster = Poster;
    }
  }

  useEffect(()=>{
    const fetchTitles = async () =>{
      const res = await axios.get(`http://www.omdbapi.com/?s=${search}&apikey=13271c56`);
      setData(res.data.Search);
    };
    fetchTitles()
  }, [search])

  return (
    <div className={styles.container}>
      <Head>
        <title>DJS2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to DJS2
        </h1>

        <p className={styles.description}>
          Blog featuring films and series from <a href="http://www.omdbapi.com" className={styles.subtitle}>OMDb API</a>
        </p>

        <form className={styles.search}>
          <div className={styles.nope}>
            <div className={styles.search_boxes}>
                <button className={styles.btn_search}><FontAwesomeIcon icon={faSearch} className = {styles.logo_search}/></button>
                <input type="text" className={styles.input_search }onChange={(e) => setSearch(e.target.value)} placeholder="Type to Search..." />
            </div>
          </div>
        </form>

        <div className={styles.toggle_section}>
          <h2 className={styles.h2_toggle}>Movies</h2>
          <label className={styles.switch_wrap}>
            <input type="checkbox" />
            <div className={styles.switch}></div>
          </label>
          <h2 className={styles.h2_toggle}>Series</h2>
          <label className={styles.switch_wrap}>
            <input type="checkbox" />
            <div className={styles.switch}></div>
          </label>
          <h2 className={styles.h2_toggle}>Others</h2>
          <label className={styles.switch_wrap}>
            <input type="checkbox" />
            <div className={styles.switch}></div>
          </label>
        </div>

        <ul className={styles.grid}>
          {data === undefined ? "No results or queries..." : ""}
          
          {data?.map((result: Films ) => {
            return (
              <li key={result.imdbID} className={styles.card}>
                <Link href="/details/[imdbID]" as={`/details/${result.imdbID}`}>
                    <img src={result.Poster} alt={`${result.Title} Thumb`} />
                    <h3> {result.Title} </h3>
                    <h6>View more details</h6>
                </Link>
              </li>  
            )
          })}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}



