import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import {useEffect,useState} from 'react'

function Presentation(){
    const [text, setText] = useState('');
    const toRotate = ['Carlos Santos!', 'Dev Front End'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 100;
    const [delta, setdelta] = useState(100);


    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        }, delta)
        return()=> {clearInterval(ticker)}

    }, [text])

    const toType = () =>{
        let i = loop % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1);

        setText(updatedText);

        if(!isDeleting && updatedText === fullText ){
            setIsDeleting(true);
            setdelta(period);
        }else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setdelta(period);
            setLoop(loop+1);
        }
    }

    return (
        <div className={styles.Presentation}  id="Presentation">
            <h4><strong>Bem-vindo ao meu Portifólio</strong></h4>
            <h1>Olá, eu sou {text}</h1>
            <p> Sou apaixonado por tecnologia e inovação. <br/>
                Tenho o compromisso de resolver problemas complexos com <br/>
                soluções excepcionais para seus negócios! <br/>
                Estou sempre em busca de desafios para me superar <br/>
            </p>
            <ButtonA link='https://wa.me/5511991836350' text='Fale comigo!'/>
            
   </div>
    )
}

export default Presentation