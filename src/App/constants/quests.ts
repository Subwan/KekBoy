import { VAULT_NUMBER } from './';

import { QuestsCodes, TQuests } from '../types';

export const INITIAL_QUESTS: TQuests = {
  [QuestsCodes.FILTER]: {
    active: true,
    completed: false,
    title: 'Новое начало',
    description: `Потребность в воде всегда была ключевым фактором выживания. 
      Вам придётся покинуть родное убежище и отправиться в полное опасностью путешествие 
      дабы добыть заветный фильтр.`,
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
      прошлого величия. Встретьтесь с их старейшиной Дроном в убежище 1917 и сделайте выбор - коммунизм или светлое будущее?`,
  },
  [QuestsCodes.SING]: {
    active: false,
    completed: false,
    title: 'Пой, революция!',
    description: `Без определённых манипуляций голосовыми связками никакие дела не делаются. 
      Придётся пойти в Las Palmas и своими вокальными данными призвать людей к действию.`,
  },
  [QuestsCodes.NATION]: {
    active: false,
    completed: false,
    title: 'Государство',
    description: `Отправляйтесь в столицу НПР (Новой Пивной Республики) - город НЗБ (да, эти ребята пиздец как любят аббревиатуры). 
      Поговорите с их лидером - президентом (с огромным хуем) Радиоактивным Андрюхой и решите нужны ли вам такие союзники или в вашем новом мире 
      не будет места государственному строю и крафтовому пиву.`,
  },
  [QuestsCodes.LAST]: {
    active: false,
    completed: false,
    title: 'Долгая счастливая жизнь',
    description:
      'Вам пора определятся с союзниками и выдвигаться в последний бой в Underlock.',
  },
  [QuestsCodes.ENDLESS]: {
    active: false,
    completed: false,
    title: 'Счастливы вместе ',
    description: `Фильтр у вас в руках и пора возвращаться в ваше родное убежище ${VAULT_NUMBER}. 
      Хотя, если вы опоздаете на пару часиков, ничего же не случится?`,
  },
};

export const QUEST_ORDER: Record<QuestsCodes, QuestsCodes | undefined> = {
  [QuestsCodes.FILTER]: undefined,
  [QuestsCodes.VATS]: QuestsCodes.STEEL,
  [QuestsCodes.STEEL]: QuestsCodes.SING,
  [QuestsCodes.SING]: QuestsCodes.NATION,
  [QuestsCodes.NATION]: QuestsCodes.LAST,
  [QuestsCodes.LAST]: QuestsCodes.ENDLESS,
  [QuestsCodes.ENDLESS]: undefined,
};
