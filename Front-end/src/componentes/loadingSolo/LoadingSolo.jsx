import style from './loadingSolo.module.css'

export default function LoadingSolo () {
  return (
    <div className={style.contenedor_loadingSolo}>
      <div className={style.loadingSolo}></div>
    </div>
  )
}