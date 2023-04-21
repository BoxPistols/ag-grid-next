import Head from 'next/head'
import 'ag-grid-enterprise'
// css AgGrid
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
// css local
import { AgBasic } from '@/src/components/AgGrid/AgBasic'
// import CovidDataBasic from "@/src/components/Chart/CovidDataBasic"
import CovidData from '@/src/components/AgGrid/CovidData'
import ChartBar from '@/src/components/Chart/ChartBar'
import Typography from '@mui/material/Typography'
import styles from '@/styles/Home.module.css'

const App = () => {
  return (
    <>
      {/* page meta */}
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* content */}
      <main className={styles.main}>
        {/* <div className={styles.grid}> */}
        <h2 className={styles.head_2} style={{ marginTop: 16 }}>
          Chart
        </h2>
        <ChartBar />

        <div
          className="ag-theme-alpine"
          style={{ minHeight: 800, width: '100%', padding: '2vh 4vw' }}
        >
          <h2 className={styles.head_2} style={{ marginTop: 8 }}>
            AgGrid Table (covid19api)
          </h2>
          <Typography variant="caption" color="initial" gutterBottom>
            covid19apiを通して、シンプルなデータでAgGrid
            Tableを検証する。取得出来ない時はリロードしてください
          </Typography>

          <CovidData />

          <h2 className={styles.head_2} style={{ marginTop: 32 }}>
            AgGrid Table (olympic-winners)
          </h2>
          <p>olympic-winnersを通して、大きなデータでAgGrid Tableを検証する</p>
          <AgBasic />
        </div>
        {/* </div> */}
      </main>
    </>
  )
}

export default App
