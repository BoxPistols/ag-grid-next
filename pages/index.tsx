// React
import { useState, useEffect } from "react"
// Next
import Head from "next/head"
// Chart
// import ChartBar from "@/src/components/Chart/ChartBar"

// css AgGrid
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-alpine.css"
// css local
import styles from "@/styles/Home.module.css"
import { AgBasic } from "@/src/components/AgGrid/AgBasic"
import CovidData from "@/src/components/Chart/CovidData"

const App = () => {
  return (
    <>
      {/* page meta */}
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* content */}
      <main className={styles.main}>
        <h1 className={styles.head_1}>
          React Data Grid: Get Started with AG Grid
        </h1>

        <div className={styles.grid}>
          {/* <div className={styles.box}> */}
          <div className="ag-theme-alpine" style={{ height: 800, width: 1200 }}>
            <h2 className={styles.head_2}>Covid Data Table</h2>
            <CovidData />


            <h2 className={styles.head_2} style={{marginTop: 32}}>AgGrid Table</h2>
            <AgBasic />
          </div>
        </div>
        {/* <div className={styles.box}>
            <ChartBar />
          </div> */}
        {/* </div> */}
      </main>
    </>
  )
}

export default App
