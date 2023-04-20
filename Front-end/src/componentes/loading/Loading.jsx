import style from './loading.module.css'
import { createPortal } from 'react-dom'

export default function Loading () {
  return createPortal(
    <div className={style.contenedor_loading}>
      <div className={style.loading}></div>
    </div>,
    document.getElementById('renderiza_loading')
  )
}