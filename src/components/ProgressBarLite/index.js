import styles from './ProgressBar.module.css'
import ProgressBar from "@ramonak/react-progress-bar";

export default function ProgressBarLite({qtde, color, progress, ...rest}) {
  return (
    <div className={styles.container} {...rest}>
        <ProgressBar completed={progress} width={296} bgColor={color}/>
        <label className={styles.label}>Quantidade: {qtde}kg</label>
    </div>
  )
}
