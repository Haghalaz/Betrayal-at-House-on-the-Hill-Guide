import Header from './components/header';
import Navigation from './components/navigation';

import House from '@assets/img/House.png';

function App() {
  return (
    <>
      <Header />

      <main className="bg-main relative h-[90%] w-full">
        <div className="absolute top-0 z-40 flex h-full w-full flex-col justify-center gap-32 px-64">
          <div className="space-y-4 text-center">
            <h1 className="text-5xl font-bold">Betrayal at House on the Hill</h1>
            <p className="text-xl font-light opacity-90">Traição na Casa da Colina</p>
          </div>

          <div className="space-y-4 text-justify">
            <p>
              Em Betrayal at House on the Hill, cada jogador escolhe um explorador para investigar uma arrepiante casa antiga. Conforme você explora a casa,
              você descobre novos cômodos. Você pode encontrar algo a cada vez que entra em um novo cômodo... ou algo pode encontrar você. Os exploradores podem
              mudar durante o jogo &#40;para melhor ou para pior&#41;, dependendo de como eles lidem com as surpresas encontradas na casa. A casa é construída
              de uma forma diferente a cada partida que você jogar.
            </p>
            <p>
              Em algum momento aleatório durante o jogo, um dos exploradores disparará as condições que iniciarão um dos cenários do jogo, chamados maldições.
              Quando a maldição é revelada, um dos exploradores se torna um traidor, que normalmente tentará derrotar os seus companheiros de exploração. O
              restante dos exploradores tornam-se heróis lutando para sobreviver.
            </p>
            <p>
              A partir de então, o jogo torna-se um embate entre o traidor e os heróis, frequentemente mortal. Este jogo contém 50 Maldições, cada um com uma
              história diferente. Em cada uma delas você poderá viver ou morrer na Casa da Colina...
            </p>
          </div>
        </div>

        <img className="absolute top-0  h-full w-full object-cover opacity-20" src={House} alt="" />
      </main>

      <Navigation />
    </>
  );
}

export default App;
