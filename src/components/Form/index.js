import Banner from '../Banner';
import Input from '../Input';
import TextContent from '../TextContent';
import './Form.css'
const Form = () =>{
    return(
        <section>
            <form className='container'>
                <div className='flex-row'>
                    <div id="banner">
                        <Banner />
                    </div>
                    <div id="content">
                        <TextContent jumbo={'Parabéns! Conquiste Seu Certificado de Conclusão do Curso de Filosofia🧠'} bodyText={'Sua jornada de aprendizado e reflexão chegou a um momento especial. Estamos entusiasmados em parabenizá-lo por concluir nosso curso de filosofia. Agora, é hora de reconhecer e celebrar seu esforço com um certificado de conclusão oficial.'}/>
                        <Input placeholder={"Digite seu melhor e-mail"} label={'Enviar'} required={true}/>
                    </div>
                </div>
            </form>
        </section>
    )
}
export default Form;