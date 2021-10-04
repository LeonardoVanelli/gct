import styles from './Button.module.css'

export default function Button({label, ...rest}) {
  return (
    <button className={styles.container} {...rest}>{label}</button>
  )
}
