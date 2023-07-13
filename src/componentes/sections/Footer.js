import { FaInstagram, FaLinkedin, FaGithub, } from "react-icons/fa"
import styles from './Footer.module.css'

function Footer(){
    return (
        <div className={styles.footer}>
           <ul>
               <li><a href='https://www.instagram.com.br/cadugonca/'><FaInstagram size={30}/></a></li>
               <li><a href='https://www.linkedin.com/in/carlos-santos-03b5b3201/'><FaLinkedin size={30}/></a></li>
               <li><a href='https://github.com/Cadugonca'><FaGithub size={30}/></a></li>
            </ul>
            <p>carlos22santos03@gmail.com</p>
            <p>Carlos Santos | Todos os direitos reservados </p>
        </div>
    )
}

export default Footer