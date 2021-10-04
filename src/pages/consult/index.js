import Head from 'next/head'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Label from '../../components/Label'
import ProgressBarLite from '../../components/ProgressBarLite'
import styles from './Consult.module.css'

export default function consult() {
  return (
    <div className={styles.container}>
        <Head>
            <title>gct - consulte</title>
        </Head>
        <div className={styles.title}>
            <h1>Que bom ter você aqui, Mainni Group!</h1>
        </div>
        <div className={styles.position}>
            <div className={styles.positionTitle}>
                <h1>Ranking</h1>
            </div>
            <div className={styles.positionForm}>            
                <Input label="Data Inicial"/>
                <Input label="Data Final"/>
                <Button label="Consultar"/>
            </div>

            <div className={styles.positionIndices}>
                <div className={styles.positionIndice}>
                    <Label text="Mainni Group" color="#E6F16C"/>
                </div>
                <div className={styles.positionIndice}>
                    <Label text="Business" color="#6CF1E1"/>
                </div>
                <div className={styles.positionIndice}>
                    <Label text="Industry S.A" color="#F16CE4"/>
                </div>
                <div className={styles.positionIndice}>
                    <Label text="Tunis" color="#F28231"/>
                </div>
            </div>

            <div className={styles.positionGraph}>
                <div>
                    <p>Papel</p>
                    <ProgressBarLite color="#6CF1E1" qtde={300} progress={88}/>
                    <ProgressBarLite color="#E6F16C" qtde={2100} progress={78}/>
                    <ProgressBarLite color="#F16CE4" qtde={2700} progress={100}/>
                    <ProgressBarLite color="#F28231" qtde={180} progress={50}/>
                </div>
                <div>
                    <p>Plastico</p>
                    <ProgressBarLite color="#6CF1E1" qtde={250} progress={60}/>
                    <ProgressBarLite color="#E6F16C" qtde={2100} progress={90}/>
                    <ProgressBarLite color="#F16CE4" qtde={2700} progress={100}/>
                    <ProgressBarLite color="#F28231" qtde={180} progress={70}/>
                </div>
                <div>
                    <p>Metal</p>
                    <ProgressBarLite color="#6CF1E1" qtde={300} progress={95}/>
                    <ProgressBarLite color="#E6F16C" qtde={2100} progress={83}/>
                    <ProgressBarLite color="#F16CE4" qtde={2700} progress={100}/>
                    <ProgressBarLite color="#F28231" qtde={180} progress={60}/>
                </div>
            </div>
        </div>
    </div>
  )
}
