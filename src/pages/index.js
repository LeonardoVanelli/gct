import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Carousel01 from '../../public/images/carousel01.png'
import Carousel02 from '../../public/images/carousel02.png'
import Carousel03 from '../../public/images/carousel03.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      <title>Green Companies of Tomorrow</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.containerCarousel}>
            <div className={styles.item}>
              <Image src={Carousel01} alt="Carousel01" height={104} width={104}></Image>
            </div>
            <div className={styles.item}>
            <Image src={Carousel02} alt="Carousel02" height={104} width={104}></Image>
            </div>
            <div className={styles.item}>
            <Image src={Carousel03} alt="Carousel03" height={104} width={104}></Image>
            </div>
          </div>         

          <div className={styles.bannerImage}>
            <p>Faça parte você também!</p>
            <div className={styles.bannerButton}>
              <a>Comece</a>
            </div>
          </div>
        </div>

        <div>
          <h1 className={styles.rankingTitle}>Ranking por Porte</h1>
        </div>
        <div className={styles.rankings}>
          <div className={styles.ranking}>
            <div className={styles.rankingHeader}>
              <h4>Grande Porte</h4>            
            </div>
            <div className={styles.content}>
              <table className={styles.rankingTable}>
                <tr>
                  <th>Nº</th>
                  <th>Empresa</th>                  
                </tr>
                <tr>
                  <td>1º</td>
                  <td>Company S.A.</td>
                </tr>
                <tr>
                  <td>2º</td>
                  <td>Business</td>
                </tr>
                <tr>
                  <td>3º</td>
                  <td>Industry S.A.</td>
                </tr>
              </table>
            </div>
          </div>
          <div className={styles.ranking}>
            <div className={styles.rankingHeader}>
              <h4>Medio Porte</h4>            
            </div>
            <div className={styles.content}>
            <table className={styles.rankingTable}>
                <tr>
                  <th>Nº</th>
                  <th>Empresa</th>                  
                </tr>
                <tr>
                  <td>1º</td>
                  <td>Carrosel LTDA</td>
                </tr>
                <tr>
                  <td>2º</td>
                  <td>Winx Corp</td>
                </tr>
                <tr>
                  <td>3º</td>
                  <td>Tunis</td>
                </tr>
              </table>
            </div>
          </div>
          <div className={styles.ranking}>
            <div className={styles.rankingHeader}>
              <h4>Pequeno Porte</h4>            
            </div>
            <div className={styles.content}>
            <table className={styles.rankingTable}>
                <tr>
                  <th>Nº</th>
                  <th>Empresa</th>                  
                </tr>
                <tr>
                  <td>1º</td>
                  <td>Zorcko</td>
                </tr>
                <tr>
                  <td>2º</td>
                  <td>Mainni Group</td>
                </tr>
                <tr>
                  <td>3º</td>
                  <td>Expo</td>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <div className={styles.details}>
          <div className={styles.detail}>
            <div className={styles.detailsCircle} style={{background: "#016BAD"}}>
              Reduzir
            </div>
            <div className={styles.detailsText}>
              Redução do desperdício e consumo consciente
            </div>
          </div>
          <div className={styles.detail}>
            <div className={styles.detailsCircle} style={{background: "#00AD52"}}>
              Reutilizar
            </div>
            <div className={styles.detailsText}>
              Ampliação de vida útil do material
            </div>
          </div>
          <div className={styles.detail}>
            <div className={styles.detailsCircle} style={{background: "#E40513"}}>
              Reciclar
            </div>
            <div className={styles.detailsText}>
              Converter um produto usado em algo novo, renovação
            </div>
          </div>
          <div className={styles.detail}>
            <div className={styles.detailsCircle} style={{background: "#FBC007"}}>
              Repensar
            </div>
            <div className={styles.detailsText}>
              Sobre hábitos de consumo e meio ambiente
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
