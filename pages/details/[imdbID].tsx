/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUndo } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';



export default function Page(this: any) {

  interface IPosts {
    
    Title: string;
    Year: string;
    Type: string;
    Poster: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    DVD: string;
    BoxOffice: string;
  }
  
  class Posts implements IPosts {
    
    Title: string;
    Year: string;
    Type: string;
    Poster: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    DVD: string;
    BoxOffice: string;
  
    constructor(
    
    Title: string,
    Year: string,
    Type: string,
    Poster: string,
    Released: string,
    Runtime: string,
    Genre: string,
    Director: string,
    Writer: string,
    Actors: string,
    Plot: string,
    Language: string,
    Country: string,
    Awards: string,
    Metascore: string,
    imdbRating: string,
    imdbVotes: string,
    imdbID: string,
    DVD: string,
    BoxOffice: string
    ) {
      this.Title = Title;
      this.Year = Year;
      this.Type = Type;
      this.Released = Released;
      this.Genre = Genre;
      this.Poster = Poster;
      this.Director = Director;
      this.Runtime = Runtime;
      this.Writer = Writer;
      this.Actors = Actors;
      this.Plot = Plot;
      this.Language = Language;
      this.Country = Country;
      this.Awards = Awards;
      this.Metascore = Metascore;
      this.imdbRating = imdbRating;
      this.imdbVotes = imdbVotes;
      this.imdbID = imdbID;
      this.DVD = DVD;
      this.BoxOffice = BoxOffice;
    }
  }

    const router = useRouter()
    const imdbID = router.query.imdbID
    const [data, setData] = useState<Posts>()

    useEffect(() => {
      const fetchID = async () => {
        const res = await axios.get(`http://www.omdbapi.com/?i=${imdbID}&apikey=13271c56`);
        setData(res.data);
      };
      fetchID()
    }, [imdbID])
    
  return (

    <div className={styles.container}>
      <Head>
        <title>DJS2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title_page}>{data?.Title}</h1>
        <div className={styles.profile}>
          <div className={styles.profile_image}>
            <img src={data?.Poster} alt={data?.Title} />
          </div>
          <div className={styles.profile_details}>
            <h2>Details</h2>
            <ul>
              <li>
                <strong>Title:</strong>   {data?.Title}
              </li>
              <li>
                <strong>Year:</strong>   {data?.Year}
              </li>
              <li>
                <strong>Released:</strong>   {data?.Released}
              </li>
              <li>
                <strong>Runtime:</strong>   {data?.Runtime}
              </li>
              <li>
                <strong>Genre:</strong>   {data?.Genre}
              </li>
              <li>
                <strong>Director:</strong>   {data?.Director}
              </li> 
              <li>
                <strong>Writer:</strong>   {data?.Writer}
              </li>
              <li>
                <strong>Actors:</strong>   {data?.Actors}
              </li>
              <li>
                <strong>Language:</strong>   {data?.Language}
              </li>
              <li>
                <strong>Country:</strong>   {data?.Country}
              </li>
              <li>
                <strong>Awards:</strong>   {data?.Awards}
              </li>
              <li>
                <strong>Metascore:</strong>   {data?.Metascore}
              </li>
              <li>
                <strong>imdbRating:</strong>   {data?.imdbRating}
              </li>
              <li>
                <strong>imdbVotes:</strong>   {data?.imdbVotes}
              </li>
              <li>
                <strong>imdbID:</strong>   {data?.imdbID}
              </li>
              <li>
                <strong>Type:</strong>   {data?.Type}
              </li>
              <li>
                <strong>DVD:</strong>   {data?.DVD}
              </li>
              <li>
                <strong>BoxOffice:</strong>    {data?.BoxOffice}
              </li>
            </ul>
          </div>
          <div className={styles.card_plot}>
            <h2 className={styles.plot}>Plot</h2>
            <p>{data?.Plot}</p>
          </div>
        </div>
        <div className={styles.frame}>
          <Link href="../"><button className={styles.button_86}><h3>Go Back</h3><FontAwesomeIcon icon={faUndo} className = {styles.logo_undo}/></button></Link>
        </div>
      </main>
    </div>
  )

}