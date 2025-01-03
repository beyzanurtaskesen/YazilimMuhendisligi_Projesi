"use client";
import React, { useState } from "react";
import styles from "./Navbar.module.css"
import ForexComponent from "@/app/components/forexComponent/ForexComponent"

export default function Navbar() {
  return (
    <nav className={styles.navContainer}>
      <ul className={styles.list}>
        <li className={styles.dropdown}> <img id="kt" src="KT_navbar.png"></img> </li>
        <li className={styles.dropdown}> <a class = "navIndexs" href="http://localhost:3000/">Anasayfa</a></li>
        <li className={styles.dropdown}> <a class = "navIndexs" href=" ">Biz Kimiz</a>
          
          <ul className={styles.dropdownMenu}>
            <li> <a className={styles.dropdownMenuLinks} href=" "> Vizyonumuz </a> </li>
            <li> <a className={styles.dropdownMenuLinks} href="#"> Misyonumuz </a> </li>
            <li> <a className={styles.dropdownMenuLinks} href="#"> Kapsam </a> </li>
            <li> <a className={styles.dropdownMenuLinks} href="#"> Kültürümüz </a> </li>
            <li> <a className={styles.dropdownMenuLinks} href="#"> Ayrıcalıklarımız </a> </li>
            <li> <a className={styles.dropdownMenuLinks} href="#"> Hedeflerimiz </a> </li>
            <li> <a className={styles.dropdownMenuLinks} href="#"> Değerlerimiz </a>  </li>
          </ul></li>
        
        <li className={styles.dropdown}> <a className={styles.navIndexs} href=" ">Ürünlerimiz</a> </li>
        <li className={styles.dropdown}> <a className={styles.navIndexs} href=" ">Hizmetlerimiz</a> </li>
        <li className={styles.KT}> <a className={styles.navIndexs} href=" ">KaliTeli Ticaret</a></li>
      </ul>
    </nav>
  );
};



