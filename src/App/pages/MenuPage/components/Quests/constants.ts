import { QuestsCodes, TQuest } from '../../../../types';

export const QUESTS: TQuest[] = [
  {
    active: true,
    completed: false,
    code: QuestsCodes.FILTER,
    title: 'Квест на фильтр для воды',
    description: 'Убежищу нужен новый фильтр для воды.',
  },
  {
    active: false,
    completed: false,
    code: QuestsCodes.VATS,
    title: 'Солдатами не рождаются',
    description: `Так как реальный мир - ни разу не изометрическая пошаговая РПГ, 
      то построить новый мир способен лишь тот, кто может со 100 метров 
      прострелить мошонку радтаракану. Нужно успеть научиться стрелять быстрее, чем научишься ловить пулю.`,
  },
  {
    active: false,
    completed: false,
    code: QuestsCodes.STEEL,
    title: 'Так закалялась сталь',
    description: `Ваш путь лежит в руины некогда могучей организации - Братства Сталина, которая ныне лишь тень 
      прошлого величия. Встретьтесь с их старейшиной Дроном и сделайте выбор - коммунизм или светлое будущее?`,
  },
  {
    active: false,
    completed: false,
    code: QuestsCodes.NATION,
    title: 'Государство',
    description: `Отправляйтесь в столицу НПР (Новой Пивной Республики) - город НЗБ (да, эти ребята пиздец как любят аббревиатуры). 
      Поговорите с их лидером - президентом Лапиным и решите нужны ли вам такие союзники или в вашем новом мире 
      не будет места государственному строю и крафтовому пиву.`,
  },
  {
    active: false,
    completed: false,
    code: QuestsCodes.SING,
    title: 'Пой, революция!',
    description: 'Вам нужны союзники, говорят в кафе Караоке находятся.',
  },
  {
    active: false,
    completed: false,
    code: QuestsCodes.LAST,
    title: 'Долгая счастливая жизнь',
    description: 'Говорят, пора заканчивать.',
  },
];
