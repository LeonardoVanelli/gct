import styles from './Label.module.css'

export default function Label({text, color, ...rest}) {
  return (
    <div className={styles.container} style={{borderColor: color}}>
        <div style={{background: color}} className={styles.icon}/>
        <label {...rest}>{text}</label>
    </div>
  )
}
