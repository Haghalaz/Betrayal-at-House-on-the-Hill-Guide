import AMomentOfHope from '@assets/img/cards/events/AMomentOfHope.jpg';
import FerociousEntity from '@assets/img/cards/events/FerociousEntity.jpg';
import BloodyVision from '@assets/img/cards/events/BloodyVision.jpg';
import ManOnFire from '@assets/img/cards/events/ManOnFire.jpg';
import CubicleDoor from '@assets/img/cards/events/CubicleDoor.jpg';
import CreepyCrawlers from '@assets/img/cards/events/CreepyCrawlers.jpg';
import CreepyPuppet from '@assets/img/cards/events/CreepyPuppet.jpg';
import Debris from '@assets/img/cards/events/Debris.jpg';
import EerieSounds from '@assets/img/cards/events/EerieSounds.jpg';
import Dripping from '@assets/img/cards/events/Dripping.jpg';
import Footsteps from '@assets/img/cards/events/Footsteps.jpg';
import Funeral from '@assets/img/cards/events/Funeral.jpg';
import ShadowDust from '@assets/img/cards/events/ShadowDust.jpg';

interface DiceRoll {
  [key: string]: string;
}

interface EventsCardProps {
  id: number;
  titleEn: string;
  titlePt: string;
  description: string;
  action: string;
  diceRoll: DiceRoll | null;
  image: string;
}

const eventsCardList: EventsCardProps[] = [
  {
    id: 0,
    titleEn: 'A Moment of Hope',
    titlePt: 'Um Momento de Esperança',
    description: 'Sente-se algo estranhamente bom neste cômodo. Algo está resistindo ao mal da casa.',
    action:
      'Coloque o marcador Abençoado (Blessing token) neste cômodo. Cada herói rola 1 dado adicional (máximo de 8 dados) em todas as rolagens de atributo enquanto estiver neste cômodo.',
    diceRoll: null,
    image: AMomentOfHope,
  },
  {
    id: 1,
    titleEn: 'Ferocious Entity',
    titlePt: 'Entidade Raivosa',
    description: 'Ele emerge do limo na parede próxima a você.',
    action: 'Você deve tentar uma rolagem de Rapidez:',
    diceRoll: {
      '5+': 'Você escapa. Ganhe 1 ponto de Rapidez.',
      '2-4': 'Sofra 1 dado de danos mentais.',
      '0-1': 'Sofra 1 dado de danos mentais e 1 dado de danos físicos.',
    },
    image: FerociousEntity,
  },
  {
    id: 2,
    titleEn: 'Bloody Vision',
    titlePt: 'Visão Sangrenta',
    description:
      'As paredes deste cômodo estão úmidas com sangue. O sangue goteja do teto, escorre pelas paredes, cobre a mobília, e chega a seus sapatos. Numa piscadela, tudo se vai.',
    action: 'Você deve tentar uma rolagem de Sanidade:',
    diceRoll: {
      '4+': 'Você se fortalece. Ganhe 1 ponto de Sanidade.',
      '2-3': 'Perca 1 ponto de Sanidade.',
      '0-1':
        'Se um explorador ou monstro estiver em seu cômodo ou em um adjacente, você deve atacá-lo (se puder). Escolha o explorador com a menor Força, se possível.',
    },
    image: BloodyVision,
  },

  {
    id: 3,
    titleEn: 'Burning Man',
    titlePt: 'Homem em Chamas',
    description:
      'Um homem em chamas corre através do cômodo. Sua pele borbulha e racha, caindo e revelando um esqueleto flamejante que se arrasta pelo chão, se sacode, rola, e desaparece.',
    action: 'Você deve tentar uma rolagem de Sanidade:',
    diceRoll: {
      '4+': 'Você sente uma ardência sob o colarinho, mas tudo está bem. Ganhe 1 ponto de Sanidade.',
      '2-3': 'Sair, sair, você deve sair. Coloque seu explorador no Saguão de Entrada.',
      '0-1': 'Você irrompe em chamas! Sofra 1 dado de danos físicos. Então sofra 1 dado de danos mentais ao apagar as chamas.',
    },
    image: ManOnFire,
  },
  {
    id: 4,
    titleEn: 'Cubicle Door',
    titlePt: 'Porta do Cubículo',
    description: 'A porta daquele cubículo está aberta... apenas uma fresta. Deve haver algo lá dentro.',
    action:
      'Coloque o marcador do Cubículo (Closet token) neste cômodo. Uma vez durante o turno de um explorador, ele pode rolar 2 dados para abrir o Cubículo:',
    diceRoll: {
      '4': 'Compre uma carta de item.',
      '2-3': 'Compre uma carta de evento.',
      '0-1': 'Compre uma carta de evento e remova o marcador do Cubículo.',
    },
    image: CubicleDoor,
  },
  {
    id: 5,
    titleEn: 'Creepy Crawlers',
    titlePt: 'Coisinhas Rastejantes',
    description: 'Milhares de insetos espalham-se sobre sua pele, dentro das roupas e em seu cabelo.',
    action: 'Você deve tentar uma rolagem de Sanidade:',
    diceRoll: {
      '5+': 'Você pisca, e tudo se vai. Ganhe 1 ponto de Sanidade.',
      '1-4': 'Perca 1 ponto de Sanidade.',
      '0': 'Perca 2 pontos de Sanidade.',
    },
    image: CreepyCrawlers,
  },
  {
    id: 6,
    titleEn: 'Creepy Puppet',
    titlePt: 'Marionete Arrepiante',
    description: 'Você vê um daqueles bonecos que lhe deixam apreensivo. Ele salta em sua direção com uma pequena lança.',
    action:
      'O jogador à sua direita rola um ataque de Força 4 para a Marionete Arrepiante. Você se defende contra este ataque normalmente, rolando dados pela sua Força. Se você sofrer qualquer dano deste ataque, o explorador com a Lança ganha 2 pontos de Força (exceto se você tiver a Lança).',
    diceRoll: {},
    image: CreepyPuppet,
  },
  {
    id: 7,
    titleEn: 'Debris',
    titlePt: 'Escombros',
    description: 'Argamassa cai das paredes e do teto.',
    action: 'Você deve tentar uma rolagem de Rapidez:',
    diceRoll: {
      '3+': 'Você se desvia da argamassa. Ganhe 1 ponto de Rapidez.',
      '1-2': 'Você foi soterrado pelos escombros. Sofra 1 dado de danos físicos.',
      '0': 'Você foi soterrado pelos escombros. Sofra 2 dados de danos físicos. Se você foi soterrado, mantenha esta carta. Você não poderá fazer nada até se libertar. Uma vez durante o turno de um explorador, ele pode tentar uma rolagem de Força para libertar você. (Você também pode tentar esta rolagem.) Um 4+ é um sucesso. Após 3 tentativas falhas, você se liberta automaticamente em seu próximo turno, e o realiza normalmente. Descarte esta carta quando você estiver livre.',
    },
    image: Debris,
  },
  {
    id: 8,
    titleEn: 'Eerie Sounds',
    titlePt: 'Sons Inquietantes',
    description: 'Um bebê chora, perdido e abandonado. Um grito. O estilhaçar de vidro quebrando. Então silêncio.',
    action:
      'Role 6 dados. Se o resultado for igual ou maior que o número de cartas de Presságio reveladas, você ganha 1 ponto de Sanidade. Se não, sofra 1 dado de danos mentais.',
    diceRoll: {},
    image: EerieSounds,
  },
  {
    id: 9,
    titleEn: 'Dripping...',
    titlePt: 'Ping... Ping... Ping...',
    description: 'Um som ritmado que alfineta seu cérebro.',
    action:
      'Coloque o marcador de Goteira (Drip token) neste cômodo. Cada explorador rola 1 dado a menos (mínimo de 1 dado) em todas as rolagens de atributo enquanto estiver neste cômodo.',
    diceRoll: {},
    image: Dripping,
  },
  {
    id: 10,
    titleEn: 'Footsteps',
    titlePt: 'Passos',
    description: 'O assoalho range lentamente. A poeira aumenta. Pegadas aparecem no piso sujo. E então, ao alcançarem você, elas param.',
    action: 'Role 1 dado. (Um explorador na Capela rola 1 dado adicional nesta rolagem.)',
    diceRoll: {
      '4': 'Você e o explorador mais próximo ganham 1 ponto de Força.',
      '3': 'Você ganha 1 ponto de Força, e o explorador mais próximo perde 1 de Sanidade.',
      '2': 'Perca 1 ponto de Sanidade.',
      '1': 'Perca 1 ponto de Rapidez.',
      '0': 'Cada explorador perde 1 ponto de um atributo de sua escolha.',
    },
    image: Footsteps,
  },
  {
    id: 11,
    titleEn: 'Funeral',
    titlePt: 'Funeral',
    description: 'Você vê um caixão aberto. Você está dentro dele.',
    action: 'Você deve tentar uma rolagem de Sanidade:',
    diceRoll: {
      '4+': 'Você pisca, e tudo se foi. Ganhe 1 ponto de Sanidade.',
      '2-3': 'A visão o perturba. Perca 1 ponto de Sanidade.',
      '0-1':
        'Você realmente está no caixão. Perca 1 ponto de Sanidade e 1 de Força conforme você escava para sair. Se o Cemitério ou a Cripta foram encontrados, coloque seu explorador em um destes cômodos (você escolhe em qual).',
    },
    image: Funeral,
  },
  {
    id: 12,
    titleEn: 'Shadow Dust',
    titlePt: 'Poeira Sombria',
    description: 'Este cômodo está coberto por uma espessa camada de poeira. Você tosse quando ela atinge sua pele e seus pulmões.',
    action: 'Você deve tentar uma rolagem de Força:',
    diceRoll: {
      '4+': 'Você se sacode. Ganhe 1 ponto de Força.',
      '0-3':
        'Algo está errado. Mantenha esta carta. Sofra 1 ponto de dano físico no começo de cada um de seus turnos. Descarte esta carta se uma carta de item aumentar um de seus atributos ou se você terminar seu turno na Sacada, nos Jardins, no Cemitério, no Ginásio, na Despensa, no Pátio, ou na Torre.',
    },
    image: ShadowDust,
  },
];

export default eventsCardList;
