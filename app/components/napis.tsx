import React from 'react'
import Image from "next/image";
import styles from "../Slike.module.css";

const Napis = () => {
  return (
    <div className={styles.conteiner}>
      
      <img src="white.png"
        alt= "hite"
        className = {styles.napis}

       />

    </div>
  )
}

export default Napis
