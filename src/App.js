import './style.css';
import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [musicaAtual, setMusicaAtual] = useState('./through-the-wire.mp3');
  const [input, setInput] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('white'); 
  const [h2Color, seth2Color] = useState('black'); 
  const [pColor, setpColor] = useState('black');
  const [mbdtfImageIndex, setMbdtfImageIndex] = useState(0);
  const mbdtfImages = [
    '/MBDTF.jpg',
    '/MBDTF2.jpg',
    '/MBDTF3.png',
    '/MBDTF4.webp',
    '/MBDTF5.png',
    '/MBDTF6.webp',
    '/MBDTF7.webp'
  ];
  
  const musicas = [
    { album: 'The College Dropout', musica: './through-the-wire.mp3' },
    { album: 'Late Registration', musica: './gold-digger.mp3' },
    { album: 'Graduation', musica: './flashing-lights-instrumental.mp3' },
    { album: '808s & Heartbreak', musica: './Heartless.mp3' },
    { album: 'My Beautiful Dark Twisted Fantasy', musica: './All-Of-The-Lights.mp3' },
    { album: 'Watch The Throne', musica: './In-Paris.mp3' },
    { album: 'Yezzus', musica: './On-Sight.mp3' }
  ];
  
  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition < 600) {
      setBackgroundColor('white'); // "College Dropout"
      seth2Color('gold'); // Cor do texto para "College Dropout"
      setpColor('black');
      setMusicaAtual(musicas[0].musica);
    } else if (scrollPosition >= 600 && scrollPosition < 1550) {
      setBackgroundColor('black'); // "Late Registration"
      seth2Color('white'); // Cor do texto para "Late Registration"
      setpColor('white');
      setMusicaAtual(musicas[1].musica);
    } else if (scrollPosition >= 1550 && scrollPosition < 2500) {
      setBackgroundColor('purple'); // "Graduation"
      seth2Color('pink'); // Cor do texto para "Graduation"
      setpColor('pink');
      setMusicaAtual(musicas[2].musica);
    } else if (scrollPosition >= 2500 && scrollPosition < 3400) {
      setBackgroundColor('grey'); // "808"
      seth2Color('black'); // Cor do texto para "808"
      setpColor('black');
      setMusicaAtual(musicas[3].musica);
    } else if (scrollPosition >= 3400 && scrollPosition < 4400) {
      setBackgroundColor('red'); // "MBDTF"
      seth2Color('white'); // Cor do texto para "MBDTF"
      setpColor('white');
      setMusicaAtual(musicas[4].musica);
    } else if (scrollPosition >= 4400 && scrollPosition < 5500)        {setBackgroundColor('#CD7F32'); // "WATCH"
      seth2Color('white'); // Cor do texto para "WATCH"
      setpColor('white');
      setMusicaAtual(musicas[5].musica);
    } else {setBackgroundColor('#FFF'); // "YEZZUS"
      seth2Color('red'); // Cor do texto para "YEZZUS"
      setpColor('red');
      setMusicaAtual(musicas[6].musica);
    }
  };

  // Adiciona o ouvinte de evento de scroll quando o componente for montado
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const nextImage = () => {
    setMbdtfImageIndex((prevIndex) => (prevIndex + 1) % mbdtfImages.length);
  };

  const prevImage = () => {
    setMbdtfImageIndex((prevIndex) => (prevIndex - 1 + mbdtfImages.length) % mbdtfImages.length);
  };

  // Inicialização do AOS (Animações ao rolar)
  useEffect(() => {
    AOS.init({
      duration: 2000, // Duração da animação
      easing: 'ease-out', // Tipo de transição
    });
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.5 }); // Se a seção estiver 50% visível

    sections.forEach((section) => {
      observer.observe(section);
    });

    // Limpeza
    return () => {
      observer.disconnect();
    };
  }, []);

  // Função de busca
  const handleSearch = () => {
    alert("Valor do Input: " + input);
  };

  return (
    <div className="container" style={{ backgroundColor: backgroundColor }}>   <audio key={musicaAtual} autoPlay loop>
          <source src={musicaAtual} type="audio/mp3" />
          Seu navegador não suporta o elemento de áudio.
        </audio>
      <header className="header">
        <h1 className="title" style={{ color: h2Color }}>Discografia de Kanye West</h1>
        <div className="containerInput">
          <input
            type="text"
            placeholder="Busque um Álbum..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="buttonSearch" onClick={handleSearch}>
            <FiSearch size={25} color="#000" />
          </button>
        </div>
      </header>

      {/* Seção The College Dropout */}
      <section id="college-dropout" className="section">
        <h2 style={{ color: h2Color }}>The College Dropout</h2>
        <img className="album-image" src="/Kanye1.jpg" alt="Capa de The College Dropout" />
        <p style={{ color: pColor }}>
          "The College Dropout" é o primeiro álbum de Kanye West, lançado em 2004. O álbum conta com hits como: "All Falls Down", "Spaceship" e "Jesus Walks".
        </p>
        <a href="https://open.spotify.com/album/4Uv86qWpGTxf7fU7lG5X6F?si=myEnPdRmS8eXna5KFaiEaA">
          <img className="platform-icon" src="/spotify.png" alt="Spotify" />
        </a>
        <a href="https://music.apple.com/us/album/the-college-dropout/1412872568">
          <img className="platform-icon" src="/apple.png" alt="Apple Music" />
        </a>
      </section>

      {/* Seção Late Registration */}
      <section id="late-registration" className="section">
        <h2 style={{ color: h2Color }}>Late Registration</h2>
        <img className="album-image" src="/late-registration.jpg" alt="Capa de Late Registration" />
        <p style={{ color: pColor }}>
          "Late Registration" é o segundo álbum de Kanye West, lançado em 2005. O álbum apresenta músicas como "Gold Digger", "Diamonds from Sierra Leone" e "Touch the Sky".
        </p>
        <a href="https://open.spotify.com/album/5eJfsD2dbw9wY5bYq5bD4r">
          <img className="platform-icon" src="/spotify.png" alt="Spotify" />
        </a>
        <a href="https://music.apple.com/us/album/late-registration/1440786557">
          <img className="platform-icon" src="/apple.png" alt="Apple Music" />
        </a>
      </section>

      {/* Seção Graduation */}
      <section id="graduation" className="section">
        <h2 style={{ color: h2Color }}>Graduation</h2>
        <img className="album-image" src="/graduation.jpg" alt="Capa de Graduation" />
        <p style={{ color: pColor }}>
          "Graduation" é o terceiro álbum de Kanye West, lançado em 2007. O álbum inclui faixas como "Stronger", "Good Life" e "Can't Tell Me Nothing".
        </p>
        <a href="https://open.spotify.com/album/7zsi1qDCT0DCqWnq0uMGWa">
          <img className="platform-icon" src="/spotify.png" alt="Spotify" />
        </a>
        <a href="https://music.apple.com/us/album/graduation/1440835365">
          <img className="platform-icon" src="/apple.png" alt="Apple Music" />
        </a>
      </section>

      
      {/* Seção 808s */}
      <section id="808s" className="section">
        <h2 style={{ color: h2Color }}>808's & Heartbreak</h2>
        <img className="album-image" src="/808s.jpg" alt="Capa de 808s" />
        <p style={{ color: pColor }}>
          "808s and heartbreak" é o quarto álbum de Kanye West, lançado em 2008. O álbum inclui faixas como "Heartless", "Love Lockdown" e "Paranoid".
        </p>
        <a href="https://open.spotify.com/album/7zsi1qDCT0DCqWnq0uMGWa">
          <img className="platform-icon" src="/spotify.png" alt="Spotify" />
        </a>
        <a href="https://music.apple.com/us/album/graduation/1440835365">
          <img className="platform-icon" src="/apple.png" alt="Apple Music" />
        </a>
      </section>

       {/* Seção MBDTF */}
       <section id="MBDTFs" className="section">
         <h2 style={{ color: 'black' }}>My Beautiful Dark Twisted Fantasy</h2>
        <div className="mbdtf-image-container">
        <button className="arrow left" onClick={prevImage}>{"<"}</button>

        {/* Imagem da esquerda */}
          <img
            className={`side-image ${mbdtfImageIndex === 0 ? "left-image" : ""}`}
            src={mbdtfImages[(mbdtfImageIndex - 1 + mbdtfImages.length) % mbdtfImages.length]}
            alt="Imagem lateral de MBDTF"
            />

       {/* Imagem central */}
          <img
            className={`album-image ${mbdtfImageIndex === 0 ? "visible" : ""}`}
            src={mbdtfImages[mbdtfImageIndex]}
            alt="Capa de MBDTF"
          />

        {/* Imagem da direita */}
         <img
            className={`side-image ${mbdtfImageIndex === 0 ? "right-image" : ""}`}
            src={mbdtfImages[(mbdtfImageIndex + 1) % mbdtfImages.length]}
            alt="Imagem lateral de MBDTF"
          />

        <button className="arrow right" onClick={nextImage}>{">"}</button>
        </div>
        <p>
          "My Beautiful Dark Twisted Fantasy" é o quinto álbum de Kanye West, lançado em 2010. O álbum inclui faixas como "Dark Fantasy", "Power", "Devil in A New Dress" e "Runaway".
        </p>
        <p>
          Curiosidade: O Álbum Contém um total de 7 Capas alternativas, representando uma música em especifico.
        </p>
        <a href="https://open.spotify.com/intl-pt/album/20r762YmB5HeofjMCiPMLv?si=RHC2H_vOQxOoB1JlMaqwyg">
          <img className="platform-icon" src="/spotify.png" alt="Spotify" />
        </a>
        <a href="https://music.apple.com/us/album/graduation/1440835365">
         <img className="platform-icon" src="/apple.png" alt="Apple Music" />
        </a>
      </section>
       {/* Seção Watch */}
      <section id="Watch" className="section">
        <h2 style={{ color: h2Color }}>Watch The Throne</h2>
        <img className="album-image" src="/Watch.jpg" alt="Capa de Watch The Throne" />
        <p style={{ color: pColor }}>
          "Watch The Throne" é o sexto álbum de Kanye West, lançado em colaboração com o Rapper JAY-Z,lançado em 2011. O álbum inclui faixas como "No Church In The Wild", "Ni**as In Paris" e "Why I Love You".
        </p>
        <a href="https://open.spotify.com/album/7zsi1qDCT0DCqWnq0uMGWa">
          <img className="platform-icon" src="/spotify.png" alt="Spotify" />
        </a>
        <a href="https://music.apple.com/us/album/graduation/1440835365">
          <img className="platform-icon" src="/apple.png" alt="Apple Music" />
        </a>
      </section>

      <section id="TESTE" className="section">
        <h2 style={{ color: h2Color }}>Yeezus </h2>
        <img className="album-image" src="/YEZZUS1.jpg" alt="Capa de YEZZUS" /> 
        <p style={{ color: pColor }}>
          "Yeezus" é o sétimo álbum de Kanye West, lançado em 2013. O álbum inclui faixas como "On Sight", "Black Skinhead" e "Bound 2".
        </p>
        <a href="https://open.spotify.com/intl-pt/album/7D2NdGvBHIavgLhmcwhluK?si=YmAO4QqZRRqpd3EQta4-Pw">
          <img className="platform-icon" src="/spotify.png" alt="Spotify" />
        </a>
        <a href="https://music.apple.com/us/album/graduation/1440835365">
          <img className="platform-icon" src="/apple.png" alt="Apple Music" />
        </a>
      </section>

    </div>
  );
}

export default App;
