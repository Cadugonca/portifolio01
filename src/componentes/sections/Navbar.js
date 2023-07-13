import styles from './Navbar.module.css'
import { FaInstagram, FaLinkedin, FaGithub, } from "react-icons/fa"
import Nav from 'react-bootstrap/Nav'

function Navbar(){
    return (
        <div className={styles.navbar}>
            <ul>
               <li><Nav.Link href='#Presentation'>APRESENTAÇÃO</Nav.Link></li>
               <li><Nav.Link href='#Skills'>HABILIDADES</Nav.Link></li>
               <li><Nav.Link href='#Projects'>PROJETOS</Nav.Link></li>
            </ul>
            <ul>
               <li><a href='https://www.instagram.com.br/cadugonca/'><FaInstagram size={30}/></a></li>
               <li><a href='https://www.linkedin.com/in/carlos-santos-03b5b3201/'><FaLinkedin size={30}/></a></li>
               <li><a href='https://github.com/Cadugonca'><FaGithub size={30}/></a></li>
            </ul>
        </div>
    )
}

export default Navbar