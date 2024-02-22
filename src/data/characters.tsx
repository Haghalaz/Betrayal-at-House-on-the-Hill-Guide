interface Character {
  id: number;
  picture: string;
  name: string;
  age: number;
  title: string;
  birthday: string;
  gender: string;
  weight: string;
  height: string;
  specie: string;
  hobbies: string;
  fears: string;
  history: string;
  velocity: {
    value: [number, number, number, number, number, number, number, number, number];
    startIndex: number;
  };
  strength: {
    value: [number, number, number, number, number, number, number, number, number];
    startIndex: number;
  };
  knowledge: {
    value: [number, number, number, number, number, number, number, number, number];
    startIndex: number;
  };
  sanity: {
    value: [number, number, number, number, number, number, number, number, number];
    startIndex: number;
  };
}

const charactersList: Character[] = [
  {
    id: 0,
    picture: '',
    name: 'Heather Granville',
    age: 18,
    title: 'A Perfeição',
    birthday: '2 de agosto',
    gender: 'Feminino',
    weight: '54 kg',
    height: '1,57 m',
    specie: 'Humano',
    hobbies: 'Televisão, Compras',
    fears: 'Atelofobia',
    history:
      'Heather sempre foi perfeita - perfeitamente pequena, perfeitamente loira, perfeitamente educada. Se algo na vida dela não for perfeito, isso dá a Heather uma dor de cabeça. Às vezes, suas dores de cabeça são tão fortes que parecem que algo está tentando sair do crânio dela. Mas nem isso tira o sorriso perfeito do rosto dela. Heather tem uma irmã mais velha que é amiga de Jenny, embora Heather não saiba bem por quê. Afinal, Jenny não é perfeita. Heather conhece Flash e Professor Longfellow da escola. Vivian é amiga da mãe dela há anos. O maior medo de Heather é que ela não seja realmente perfeita.',
    velocity: {
      value: [0, 3, 3, 4, 5, 6, 6, 7, 8],
      startIndex: 4,
    },
    strength: {
      value: [0, 3, 3, 3, 4, 5, 6, 7, 8],
      startIndex: 4,
    },
    knowledge: {
      value: [0, 2, 3, 3, 4, 5, 6, 7, 8],
      startIndex: 6,
    },
    sanity: {
      value: [0, 3, 3, 3, 4, 5, 6, 6, 6],
      startIndex: 4,
    },
  },
  {
    id: 1,
    picture: '',
    name: 'Jenny LeClerc',
    age: 21,
    title: 'A Leitora',
    birthday: '4 de março',
    gender: 'Feminino',
    weight: '64,4 kg',
    height: '1,70 m',
    specie: 'Humano',
    hobbies: 'Leitura, Futebol',
    fears: 'Agorafobia',
    history:
      'Jenny é uma garota quieta. Ela adora futebol, mas às vezes é muito tímida para cooperar com seus colegas de equipe como deveria. O maior prazer de Jenny é se enrolar sozinha em um lugar pequeno lendo um livro gigantesco - quanto mais antigo o livro, melhor. Os livros a impedem de pensar no desaparecimento de sua mãe, naquele dia há catorze anos quando mamãe foi à loja e nunca mais voltou, deixando Jenny sozinha. Sozinha para sempre. O único amigo real de Jenny é Caitlyn, irmã mais velha de Heather. Jenny também conhece Ox, já que cresceu apenas algumas portas de distância dele na Mulberry Lane. E Jenny conhece Madame Zostra da biblioteca, um lugar que ambos adoram. O maior medo de Jenny é ficar presa em uma multidão ou perdida ao ar livre.',
    velocity: {
      value: [0, 2, 3, 4, 4, 4, 5, 6, 8],
      startIndex: 4,
    },
    strength: {
      value: [0, 3, 4, 4, 4, 4, 5, 6, 8],
      startIndex: 3,
    },
    knowledge: {
      value: [0, 2, 3, 3, 4, 4, 5, 6, 8],
      startIndex: 3,
    },
    sanity: {
      value: [0, 1, 1, 2, 4, 4, 4, 5, 6],
      startIndex: 5,
    },
  },
  {
    id: 2,
    picture: '',
    name: 'Ox Bellows',
    age: 23,
    title: 'O Gigante',
    birthday: '18 de outubro',
    gender: 'Masculino',
    weight: '131 kg',
    height: '1,93 m',
    specie: 'Humano',
    hobbies: 'Futebol Americano, Objetos Brilhantes',
    fears: 'Nictofobia',
    history:
      'Ox Bellows sempre foi um garoto grande. Nunca foi espancado. Sempre foi o agressor... mas apenas quando precisava. (Bem, exceto aquela vez.) Ox não gosta de pensar nisso, mas o sangue e os gritos se infiltram em seus sonhos em noites frias e solitárias. Seu maior medo é do escuro. Ox conhece Jenny desde que eram crianças crescendo na Rua Mulberry. Ele conheceu o Professor Longfellow na Universidade de Greenwich. Ox conhece o Padre Rhinehardt desde sempre. Ele confessa seus pecados ao padre desde pequeno (exceto por aquele pecado do qual ele não gosta de falar).',
    velocity: {
      value: [0, 2, 2, 2, 3, 4, 5, 5, 6],
      startIndex: 5,
    },
    strength: {
      value: [0, 4, 5, 5, 6, 6, 7, 8, 8],
      startIndex: 3,
    },
    knowledge: {
      value: [0, 2, 2, 3, 3, 5, 5, 6, 6],
      startIndex: 3,
    },
    sanity: {
      value: [0, 2, 2, 3, 4, 5, 5, 6, 7],
      startIndex: 3,
    },
  },
  {
    id: 3,
    picture: '',
    name: 'Darrin “Flash” Williams',
    age: 20,
    title: 'O Velocista',
    birthday: '6 de junho',
    gender: 'Masculino',
    weight: '85 kg',
    height: '1,80 m',
    specie: 'Humano',
    hobbies: 'Atletismo, Música, Literatura Shakespeareana',
    fears: 'Diocofobia',
    history:
      'Flash não é o nome mais original para alguém tão rápido quanto Darrin. Mas ele gosta. É confortável e combina com ele, assim como seu par de tênis de corrida favorito. Darrin vive para correr e corre para viver. Quando não está correndo, Darrin sente que algo está vindo atrás dele... algo Não Bom. Mesmo quando ele corre, o vento às vezes sussurra em seus ouvidos, e ele jura que consegue ouvir a Coisa Não Boa se aproximando por trás - rápido. Não é de admirar que ele seja o astro da equipe de atletismo. Flash conhece Jenny do bairro. Ela é legal, mas é muito quieta. Ele conhece Madame Zostra a vida toda. Afinal, ele é sobrinho dela. Zoe é sua prima, mas ele só a viu algumas vezes. O maior medo de Darrin é ser pego pela Coisa Não Boa (seja lá o que for).',
    velocity: {
      value: [0, 4, 4, 4, 5, 6, 7, 7, 8],
      startIndex: 5,
    },
    strength: {
      value: [0, 2, 3, 3, 4, 5, 6, 6, 7],
      startIndex: 3,
    },
    knowledge: {
      value: [0, 2, 3, 3, 4, 5, 5, 5, 7],
      startIndex: 3,
    },
    sanity: {
      value: [0, 1, 2, 3, 4, 5, 5, 5, 7],
      startIndex: 3,
    },
  },
  {
    id: 4,
    picture: '',
    name: 'Vivian Lopez',
    age: 42,
    title: '',
    birthday: '11 de janeiro',
    gender: 'Feminino',
    weight: '64 kg',
    height: '1,65 m',
    specie: 'Humano',
    hobbies: 'Filmes Antigos, Cavalos',
    fears: 'Pirofobia',
    history:
      'O dia perfeito de Vivian é acordar tarde, tomar café e rosquinhas e depois cavalgar o dia todo em um de seus cavalos. Infelizmente, ela não consegue passar muitos dias assim, já que está ocupada tentando manter sua pequena livraria de livros usados funcionando. Alguns dias ela fica tão frustrada que tem vontade de queimar o lugar, ou talvez apenas o galpão nos fundos... ou a escola. Mas ela nunca faria algo assim. Ainda assim, às vezes ela tem pesadelos em que acende o fósforo... Vivian é amiga da mãe de Heather, Sarah. Ela também conhece Madame Zostra e o Padre Rhinehardt como clientes de sua pequena livraria, Algo Escrito. Para ganhar um dinheiro extra, Vivian cuida de Missy Dubourde pelo menos uma vez por mês há alguns anos. O maior medo de Vivian é do fogo... e sua fascinação por ele.',
    velocity: {
      value: [0, 3, 4, 4, 4, 4, 6, 7, 8],
      startIndex: 4,
    },
    strength: {
      value: [0, 2, 2, 2, 4, 4, 5, 6, 6],
      startIndex: 3,
    },
    knowledge: {
      value: [0, 4, 5, 5, 5, 5, 6, 6, 7],
      startIndex: 4,
    },
    sanity: {
      value: [0, 4, 4, 4, 5, 6, 7, 8, 8],
      startIndex: 3,
    },
  },
  {
    id: 5,
    picture: '',
    name: 'Madame Zostra',
    age: 37,
    title: 'A Leitora das Estrelas',
    birthday: '10 de dezembro',
    gender: 'Feminino',
    weight: '68 kg',
    height: '1,52 m',
    specie: 'Humano',
    hobbies: 'Astrologia, Culinária, Beisebol',
    fears: 'Tanatofobia',
    history:
      "Madame Zostra, ou 'Belladina' (como sua mãe a chamava), é uma leitora de tarô e borra de café desde a faculdade. Ela começou trabalhando meio período sentada na janela de uma livraria oculta, mas agora tem seu próprio negócio de astrologia em casa. Embora Madame Zostra leia cartas para viver, ela nunca lerá suas próprias cartas. Ela teme ver sua própria morte nas cartas, algo que não consegue suportar pensar. Madame Zostra conhece Vivian e Padre Rhinehardt por vê-los na livraria de Vivian. Flash é seu sobrinho, e ela nunca deixa de comprar presentes de aniversário e Natal para ele. Ela vê Jenny regularmente na biblioteca. A mãe de Zoe vai a Madame Zostra para leituras de tarô. Madame Zostra teme a morte... especialmente a própria.",
    velocity: {
      value: [0, 2, 3, 3, 5, 5, 6, 6, 7],
      startIndex: 3,
    },
    strength: {
      value: [0, 2, 3, 3, 4, 5, 5, 5, 6],
      startIndex: 4,
    },
    knowledge: {
      value: [0, 1, 3, 4, 4, 4, 5, 6, 6],
      startIndex: 4,
    },
    sanity: {
      value: [0, 4, 4, 4, 5, 6, 7, 8, 8],
      startIndex: 3,
    },
  },
  {
    id: 6,
    picture: '',
    name: 'Missy Dubourde',
    age: 9,
    title: 'A Jovem Médica',
    birthday: '14 de fevereiro',
    gender: 'Feminino',
    weight: '28 kg',
    height: '1,27 m',
    specie: 'Humano',
    hobbies: 'Natação, Medicina',
    fears: 'Necrofobia',
    history:
      "Missy não se lembra de querer ser nada além de médica. O presente favorito dela em todo o mundo foi o seu primeiro kit médico. Ela pratica 'medicina' em qualquer um que a deixe. Ela até dissecou sapos mortos e coisas que ela encontra em seu quintal. Mas às vezes isso fica ruim, e ela sonha com sapos mortos pulando em sua cama à noite e sufocando-a. Então ela grita. Missy conhece Peter (e sua coleção nojenta de insetos) da escola. Ela conhece Padre Rhinehardt da escola dominical (ele fala estranho e cheira a chocolate). Missy mora no mesmo bairro de Brandon. Ele entrega o jornal da família dela, mas ela não o conhece muito bem. (Ela acha ele fofo, porém.) O maior medo de Missy é de coisas mortas voltando à vida e a caçando.",
    velocity: {
      value: [0, 3, 4, 5, 6, 6, 6, 7, 7],
      startIndex: 3,
    },
    strength: {
      value: [0, 2, 3, 3, 3, 4, 5, 6, 7],
      startIndex: 4,
    },
    knowledge: {
      value: [0, 2, 3, 4, 4, 5, 6, 6, 6],
      startIndex: 4,
    },
    sanity: {
      value: [0, 1, 2, 3, 4, 5, 5, 6, 7],
      startIndex: 3,
    },
  },
  {
    id: 7,
    picture: '',
    name: 'Zoe Ingstrom',
    age: 8,
    title: 'A Jovem das Bonecas',
    birthday: '5 de novembro',
    gender: 'Feminino',
    weight: '22 kg',
    height: '1,14 m',
    specie: 'Humano',
    hobbies: 'Bonecas, Música',
    fears: 'Bogifobia',
    history:
      'Zoe gosta de brincar em seu quarto com suas bonecas. Cada boneca tem seu próprio nome, família, história, animais de estimação e tudo mais que uma boneca precisa para ser feliz. Zoe ajuda suas bonecas a encenarem pequenos dramas, principalmente felizes, mas às vezes as bonecas ficam bravas uma com a outra e batem. Não que os papais batessem nas mamães. Isso não acontece. Pelo menos você não deve falar sobre isso quando acontece. Então, Zoe brinca com suas bonecas. Flash é primo de Zoe, mas ela não o conhece muito bem. A mãe de Zoe vai a Madame Zostra para leituras de cartas de tarô. Zoe gosta de brincar com suas bonecas embaixo da mesa lá. A família de Zoe às vezes acampa com a família de Brandon. Mas Zoe não gosta, então ela geralmente fica na barraca e brinca com suas bonecas. O maior medo de Zoe é do bicho-papão... seja lá quem for.',
    velocity: {
      value: [0, 4, 4, 4, 4, 5, 6, 8, 8],
      startIndex: 4,
    },
    strength: {
      value: [0, 2, 2, 3, 3, 4, 4, 6, 7],
      startIndex: 4,
    },
    knowledge: {
      value: [0, 1, 2, 3, 4, 4, 5, 5, 5],
      startIndex: 3,
    },
    sanity: {
      value: [0, 3, 4, 5, 5, 6, 6, 7, 8],
      startIndex: 3,
    },
  },
  {
    id: 8,
    picture: '',
    name: 'Peter Akimoto',
    age: 13,
    title: 'O Insetólogo',
    birthday: '3 de setembro',
    gender: 'Masculino',
    weight: '44 kg',
    height: '1,50 m',
    specie: 'Humano',
    hobbies: 'Insetos, Basquete',
    fears: 'Cleitrofobia',
    history:
      'Os dois lugares favoritos de Peter no mundo são a quadra de basquete e debaixo de sua casa. Ele gosta da quadra de basquete porque é onde pode jogar seu jogo favorito. Ele gosta de ficar embaixo da casa porque é um ótimo lugar para caçar insetos, além de ser um bom lugar para evitar seus cinco irmãos mais velhos. Claro, todos os irmãos mais velhos implicam com os irmãos mais novos, mas os irmãos de Peter realmente implicam com ele. Mas o que são alguns ossos quebrados entre família? Peter ama insetos e quer ser entomologista quando crescer - um entomologista que nunca precisa falar com os irmãos dele. Peter ganha dinheiro extra cuidando do jardim do Professor Longfellow (e encontrando insetos legais - bônus!). Ele conhece Missy da escola. Ela gosta de fazer exames médicos falsos nele e verificar seus ossos quebrados de verdade, mas não gosta quando ele mostra sua coleção de insetos. O maior medo de Peter é ficar preso em algum lugar e nunca conseguir escapar.',
    velocity: {
      value: [0, 3, 3, 3, 4, 6, 6, 7, 7],
      startIndex: 4,
    },
    strength: {
      value: [0, 2, 3, 3, 4, 5, 5, 6, 8],
      startIndex: 3,
    },
    knowledge: {
      value: [0, 3, 4, 4, 5, 6, 6, 7, 8],
      startIndex: 3,
    },
    sanity: {
      value: [0, 3, 4, 4, 4, 5, 6, 6, 7],
      startIndex: 4,
    },
  },
  {
    id: 9,
    picture: '',
    name: 'Brandon Jaspers',
    age: 12,
    title: 'O Campista',
    birthday: '21 de maio',
    gender: 'Masculino',
    weight: '49 kg',
    height: '1,55 m',
    specie: 'Humano',
    hobbies: 'Computadores, Acampamento, Hóquei',
    fears: 'Pupafobia',
    history:
      'Brandon adora computadores e acampamento. Ele leva seu novo laptop para onde quer que vá. Assim, ele pode programar E acampar ao mesmo tempo. Legal. Brandon nunca gostou de brincar com brinquedos normais, bonecos de ação ou esse tipo de coisa. Na verdade, ele odeia marionetes. Ele tinha um boneco de palhaço quando era pequeno, e algumas manhãs quando acordava, ele descobria que ele tinha se aproximado mais dele. Uma vez, ele até tinha uma faca de cozinha na mão. Brandon tem certeza de que seu irmão mais velho, Chris, estava mexendo com ele. Mas ele ainda odeia marionetes. Às vezes, Brandon vê a família de Zoe quando eles vão acampar. Zoe geralmente se esconde na barraca com suas bonecas, no entanto. Que nojo. Brandon entrega o jornal para o Professor Longfellow (na sua casa grande e velha) e para a família de Missy. O maior medo de Brandon são os bonecos, especialmente os bonecos de palhaço.',
    velocity: {
      value: [0, 3, 4, 4, 4, 5, 6, 7, 8],
      startIndex: 4,
    },
    strength: {
      value: [0, 2, 3, 3, 4, 5, 6, 6, 7],
      startIndex: 4,
    },
    knowledge: {
      value: [0, 1, 3, 3, 5, 5, 6, 6, 7],
      startIndex: 3,
    },
    sanity: {
      value: [0, 3, 3, 3, 4, 5, 6, 7, 8],
      startIndex: 4,
    },
  },
  {
    id: 10,
    picture: '',
    name: 'Josiah Longfellow',
    age: 57,
    title: 'O Professor',
    birthday: '18 de dezembro',
    gender: 'Masculino',
    weight: '69,4 kg',
    height: '1,80 m',
    specie: 'Humano',
    hobbies: 'Música Gaélica, Drama, Vinhos Finos',
    fears: 'Aticofobia',
    history:
      'O professor Josiah Longfellow tem muito orgulho de suas raízes aristocráticas. Sua família costumava ter dinheiro... pelo menos até seu pai perder tudo em jogos de azar e álcool. O professor ainda vive com sua mãe idosa na casa vitoriana em ruínas que costumava ser a melhor casa da cidade. Seu pai desapareceu um dia. Fugiu. Sua mãe tem uma apólice de seguro de vida bastante grande, mas é claro que ele não quer recebê-la tão cedo, por melhor que seja o dinheiro. O professor Longfellow conhece Ox, Flash e Heather da universidade. Brandon é seu entregador de jornais, Peter corta a grama do quintal e cuida de outras pequenas tarefas da casa. O maior medo do professor é perder tudo o que tem, provando a todos que ele não é melhor do que seu pai caloteiro.',
    velocity: {
      value: [0, 2, 2, 4, 4, 5, 5, 6, 6],
      startIndex: 4,
    },
    strength: {
      value: [0, 1, 2, 3, 4, 5, 5, 6, 6],
      startIndex: 3,
    },
    knowledge: {
      value: [0, 4, 5, 5, 5, 6, 6, 7, 8],
      startIndex: 4,
    },
    sanity: {
      value: [0, 1, 3, 3, 4, 5, 5, 6, 7],
      startIndex: 3,
    },
  },
  {
    id: 11,
    picture: '',
    name: 'Reginald Rhinehardt',
    age: 62,
    title: 'O Padre',
    birthday: '29 de abril',
    gender: 'Masculino',
    weight: '83,9 kg',
    height: '1,75 m',
    specie: 'Humano',
    hobbies: 'Esgrima, Jardinagem',
    fears: 'Frenofobia',
    history:
      'O Padre Rhinehardt nasceu em München, Alemanha (ou Munique, como os americanos a chamam). Ele se mudou com a família para os Estados Unidos quando tinha 15 anos... e depois foi espancado durante os três anos seguintes. Padre Rhinehardt buscou na religião os motivos pelos quais as pessoas o tratavam tão mal. Por fim, ele entrou para o seminário e se tornou padre. Desde aquele dia, há muito tempo, muitas pessoas confessaram seus pecados a ele. Mas há um homem que o assombra, a cada poucos anos, um estranho que se senta no confessionário e sussurra sobre assassinato e loucura. Nos últimos anos, o Padre Rhinehardt descobriu que estava começando a concordar com os argumentos do louco. Sangue, dor, morte - tudo isso faz parte da vida, do plano de Deus, não é mesmo? O Padre Rhinehardt conhece Vivian e Madame Zostra por tê-las visto na livraria Something Written. Ele conhece Ox por tê-lo ouvido confessar seus pequenos pecados. Ele também conhece Missy por suas aparições na escola dominical. Mais do que tudo, Father Rhinehardt teme enlouquecer.',
    velocity: {
      value: [0, 2, 3, 3, 4, 5, 6, 7, 7],
      startIndex: 3,
    },
    strength: {
      value: [0, 1, 2, 2, 4, 4, 5, 5, 7],
      startIndex: 3,
    },
    knowledge: {
      value: [0, 1, 3, 3, 4, 5, 6, 6, 8],
      startIndex: 4,
    },
    sanity: {
      value: [0, 3, 4, 5, 5, 6, 7, 7, 8],
      startIndex: 5,
    },
  },
];

export default charactersList;
