import { QuestsCodes, TQuests } from '../types';

export const INITIAL_QUESTS: TQuests = {
  [QuestsCodes.FILTER]: {
    active: true,
    completed: false,
    title: 'Квест на фильтр для воды',
    description: 'Убежищу нужен новый фильтр для воды.',
  },
  [QuestsCodes.VATS]: {
    active: true,
    completed: false,
    title: 'Солдатами не рождаются',
    description: `Так как реальный мир - ни разу не изометрическая пошаговая РПГ, 
      то построить новый мир способен лишь тот, кто может со 100 метров 
      прострелить мошонку радтаракану. Нужно успеть научиться стрелять быстрее, чем научишься ловить пулю.`,
  },
  [QuestsCodes.STEEL]: {
    active: false,
    completed: false,
    title: 'Так закалялась сталь',
    description: `Ваш путь лежит в руины некогда могучей организации - Братства Сталина, которая ныне лишь тень 
      прошлого величия. Встретьтесь с их старейшиной Дроном и сделайте выбор - коммунизм или светлое будущее?`,
  },
  [QuestsCodes.NATION]: {
    active: false,
    completed: false,
    title: 'Государство',
    description: `Отправляйтесь в столицу НПР (Новой Пивной Республики) - город НЗБ (да, эти ребята пиздец как любят аббревиатуры). 
      Поговорите с их лидером - президентом Лапиным и решите нужны ли вам такие союзники или в вашем новом мире 
      не будет места государственному строю и крафтовому пиву.`,
  },
  [QuestsCodes.SING]: {
    active: false,
    completed: false,
    title: 'Пой, революция!',
    description: 'Вам нужны союзники, говорят в кафе Караоке находятся.',
  },
  [QuestsCodes.LAST]: {
    active: false,
    completed: false,
    title: 'Долгая счастливая жизнь',
    description: 'Говорят, пора заканчивать.',
  },
};

export const QUEST_ORDER: Record<QuestsCodes, QuestsCodes | undefined> = {
  [QuestsCodes.FILTER]: undefined,
  [QuestsCodes.VATS]: QuestsCodes.STEEL,
  [QuestsCodes.STEEL]: QuestsCodes.NATION,
  [QuestsCodes.NATION]: QuestsCodes.SING,
  [QuestsCodes.SING]: QuestsCodes.LAST,
  [QuestsCodes.LAST]: undefined,
};
