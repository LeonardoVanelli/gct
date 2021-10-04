import styles from './Input.module.css'

export default function Input({label, ...rest}) {
  return (
    <div className={styles.container}>
        <label>{label}</label>
        <input {...rest} />
    </div>
  )
}
