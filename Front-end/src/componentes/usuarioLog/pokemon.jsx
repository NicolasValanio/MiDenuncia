
import style from '../usuarioLog/usuarioLog.module.css'


function Pokemon({pokemones,id}) {
    return(
        <div className={style.pokemon}>
            <h2>{pokemones} {id}</h2>
        </div>
    )
}

export default Pokemon;