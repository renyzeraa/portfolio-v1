import { Container, Campo, Button } from './style'
import { useState, useEffect } from 'react'
import { Header } from '../../components/Header'
import { Socials } from '../../components/Socials'
import { Footer } from '../../components/Footer'
import { Title } from '../../components/Title'
import axios from 'axios'

export function Contact() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Atualizar a cada segundo

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formattedDate = currentDate.toLocaleString();

  const code = `
    const button = document.querySelector('#sendBtn'); 
    
    const message = { 
      name: "${nome}", 
      email: "${email}", 
      message: "${mensagem}", 
      date: "${formattedDate}" 
    } 
    
    button.addEventListener('click', () => { 
      form.send(message); 
    });`;

  const lines = code.split('\n');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/enviar-email', {
        nome,
        email,
        mensagem,
      });

      console.log('Email enviado com sucesso!', response.data);
    } catch (error) {
      console.error('Erro ao enviar o email', error);
    }
  };

  return (
    <Container>
      <Socials />
      <Header />
      <main className='main-container'>
        <Title>Sobre</Title>
        <div className='container'>
          <form className='form-container' onSubmit={handleSubmit}>
            <Campo>
              <label>_nome:</label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </Campo>
            <Campo>
              <label>_email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Campo>
            <Campo>
              <label>_mensagem:</label>
              <textarea
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                rows="6"
                required
              />
            </Campo>
            <Button type="submit">Enviar</Button>
          </form>
            <div className="code-card">
              <div className="line-numbers">
                {lines.map((_, index) => (
                  <div key={index + 1} className="line-number">
                    {index + 1}
                  </div>
                ))}
              </div>
              <div className="code-content">
                {lines.map((line, index) => (
                  <div key={index} className="code-line">
                    {line}
                  </div>
                ))}
              </div>
            </div>
        </div>
      </main>
      <Footer />
    </Container>
  )
}
