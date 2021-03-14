import React, {useState} from 'react'
import s from './pokemon.module.css'


const PokemonCard = ({name, id, type, values, img, bg }) => {
console.log(img)
const [isActive, setIsActive] = useState(true)
const handleClicked = () => {
    setIsActive(!isActive)
}
return (
    <div className={s.root} onClick={handleClicked} >
        <div className={isActive ? `${s.pokemonCard}` : null}>
            <div className={s.cardFront}>
                <div className={`${s.wrap} ${s.front}`}>
                    <div className={s.pokemon}>
                        <div className={s.values}>
                            <div className={`${s.count} ${s.top}`}>{values.top}</div>
                            <div className={`${s.count} ${s.right}`}>{values.right}</div>
                            <div className={`${s.count} ${s.bottom}`}>{values.bottom}</div>
                            <div className={`${s.count} ${s.left}`}>{values.left}</div>
                        </div>
                        <div className={s.imgContainer}>
                            <img src={img} alt={name} />
                        </div>
                        <div className={s.info}>
                            <span className={s.number}>{id}</span>
                            <h3 className={s.name}>{name}</h3>
                            <small className={s.type}>Type: <span>{type}</span></small>
                        </div>
                    </div>
                </div>
            </div>

            <div className={s.cardBack}>
                <div className={`${s.wrap} ${s.back}`}>
                    <img src={bg} alt={name}/>
                </div>
            </div>

        </div>
    </div>
    )
}

export default PokemonCard