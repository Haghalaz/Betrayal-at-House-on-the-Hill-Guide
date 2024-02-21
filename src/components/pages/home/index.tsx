const Home = () => {
  return (
    <div className="absolute top-0 z-40 flex h-full w-full flex-col justify-center gap-8 px-16 md:gap-16 md:px-32 lg:gap-32 lg:px-64">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold md:text-5xl">Betrayal at House on the Hill</h1>
        <p className="text-xl font-light opacity-90">Traição na Casa da Colina</p>
      </div>

      <div className="hidden space-y-4 text-justify md:block">
        <p>
          Em Betrayal at House on the Hill, cada jogador escolhe um explorador para investigar uma arrepiante casa antiga. Conforme você explora a casa, você
          descobre novos cômodos. Você pode encontrar algo a cada vez que entra em um novo cômodo... ou algo pode encontrar você. Os exploradores podem mudar
          durante o jogo &#40;para melhor ou para pior&#41;, dependendo de como eles lidem com as surpresas encontradas na casa. A casa é construída de uma
          forma diferente a cada partida que você jogar.
        </p>
        <p>
          Em algum momento aleatório durante o jogo, um dos exploradores disparará as condições que iniciarão um dos cenários do jogo, chamados maldições.
          Quando a maldição é revelada, um dos exploradores se torna um traidor, que normalmente tentará derrotar os seus companheiros de exploração. O restante
          dos exploradores tornam-se heróis lutando para sobreviver.
        </p>
        <p>
          A partir de então, o jogo torna-se um embate entre o traidor e os heróis, frequentemente mortal. Este jogo contém 50 Maldições, cada um com uma
          história diferente. Em cada uma delas você poderá viver ou morrer na Casa da Colina...
        </p>
      </div>

      <div className="block space-y-4 text-center text-sm md:hidden">
        <p>
          Em Betrayal at House on the Hill, os jogadores escolhem exploradores para investigar uma casa antiga e arrepiante, descobrindo novos cômodos e
          enfrentando surpresas, podendo mudar durante o jogo, dependendo de suas escolhas
        </p>

        <p>
          Em um ponto aleatório, um explorador se torna um traidor, enquanto os outros se tornam heróis lutando pela sobrevivência. O jogo inclui 50 Maldições,
          cada uma com sua própria história de vida ou morte na Casa da Colina.
        </p>
      </div>
    </div>
  );
};

export default Home;
