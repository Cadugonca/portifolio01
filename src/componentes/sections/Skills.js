import styles from '../sections/Skills.module.css'
import js from '../../skills/js.svg'
import css from '../../skills/css.svg'
import html from '../../skills/html.svg'
import react from '../../skills/react.svg'
import ts from '../../skills/ts.svg'
import idioma from '../../skills/Idioma.png'

function Skills(){
    return (
        <div id="Skills" className={styles.skills}>
            <h1>HABILIDADES</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
                <div>
                    <img src={js} alt='ERROR'/>
                    <img src={html} alt='ERROR'/>
                    <img src={css} alt='ERROR'/>
                    <img src={ts} alt='ERROR'/>
                    <img src={react} alt='ERROR'/>
                    <img src={idioma} alt='ERROR'/>
                </div>
        </div>
    )
}

export default Skills