import ButtonB from '../elements/ButtonB'
import styles from './Projects.module.css'
import Card from '../elements/Card'
import ccxp from '../../Cards/CCXP.png'


function Projects(){
    return (
        <div className={styles.Projects}>
            <h1> Projetos </h1> <br/>
            <Card class="card" img={ccxp} title="CCXP 2022" tech="HTML, CSS e JS" description="Desenvolvido uma LP para a CCXP 2022" repo="https://github.com/Cadugonca/ccxp2022" site="https://ccxp2022.netlify.app"/>
            <ButtonB link='https://github.com/Cadugonca' text='Veja o Repositório Completo'/>
        </div>
    )
}

export default Projects