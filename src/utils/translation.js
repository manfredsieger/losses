import lossesNames from './lossesConfig';
import { datesLanguages } from './languagesConfig';

export default {
  eng: {
    nav: {
      losses: 'Home page',
      donate: 'How can I help?',
      charts: 'Charts',
      screenshot: 'Download infographics',
      map: 'Map',
    },
    main: {
      header: {
        header: 'Losses of russian invaders in Ukraine',
        updateDate: 'Last updated:',
        language: 'en-us',
        numbersProvided: 'Numbers provided by the ',
        genStaff: 'General Staff of the AFU',
        warning: 'Some numbers are approximate and cannot be verified due to the high intensity of combat actions',
      },
      dates: {
        start: 'Start of the full-scale aggression',
        language: datesLanguages.eng,
        daysPassed: 'days of the russian full-scale aggression',
        endOfWar: 'End of the war',
        today: 'Today',
      },
      losses: {
        [lossesNames.personnel.name]: {
          name: 'Personnel',
        },
        [lossesNames.aircrafts.name]: {
          name: 'Fighter jets',
        },
        [lossesNames.helicopters.name]: {
          name: 'Helicopters',
        },
        [lossesNames.armoredVehicles.name]: {
          name: 'Armoured personnel vehicles',
        },
        [lossesNames.vehicles.name]: {
          name: 'Vehicles & fuel tanks',
        },
        [lossesNames.tanks.name]: {
          name: 'Tanks',
        },
        [lossesNames.artillery.name]: {
          name: 'Artillery systems',
        },
        [lossesNames.mlrs.name]: {
          name: 'MLRS',
          descr: 'Multiple launch rocket systems',
        },
        [lossesNames.cisterns.name]: {
          name: 'Fuel tanks',
        },
        [lossesNames.antiAir.name]: {
          name: 'Anti-aircraft warfare systems',
        },
        [lossesNames.uav.name]: {
          name: 'UAV operational-tactical level',
          descr: 'Unmanned aerial vehicles',
        },
        [lossesNames.vessels.name]: {
          name: 'Vessels',
        },
        [lossesNames.specialVehicle.name]: {
          name: 'Special equipment',
        },
        [lossesNames.srmb.name]: {
          name: 'Mobile SRBM system',
          descr: 'Short-range ballistic missiles',
        },
        [lossesNames.cruiseMissiles.name]: {
          name: 'Cruise missiles',
        },
      },
    },
    donate: {
      header: 'How can I help',
      copyIconTitle: 'Copy text',
      expandBtn: {
        open: 'Open section',
        close: 'Close section',
      },
      military: {
        header: 'Supporting Defenders of Ukraine',
        comeBackAlive: {
          orgName: 'Come Back Alive Foundation.',
          donationsOutside: {
            header: 'Donations from abroad:',
            fondy: {
              header: 'Donate via Fondy.eu',
              text: 'Fondy has the highest security rating – PCI DSS Level 1',
            },
            swift: 'Donate via SWIFT',
            crypto: 'Donate with cryptocurrencies',
          },
          donationsInside: {
            header: 'Money transfers inside Ukraine:',
            oschadbank: 'Account in Oschadbank',
            privatbank: 'Account in Privatbank',
            crypto: 'Donate with cryptocurrencies',
          },
          contacts: {
            header: 'Our Contacts',
            address: {
              header: 'Address:',
              text1: '32, Bohdana Hmelnytskoho St., office 41, Kyiv',
              text2: 'Level 1, entrance through the arch',
            },
            phone: {
              header: 'Phone:',
              tel1Caption: '+38 (044) 338-33-38',
              tel1Tel: '+380443383338',
              tel2Caption: '+38 (068) 500-88-00',
              tel2Tel: '+380685008800',
              workingHours: 'Mon.-Fri.: 10:00 - 19:00',
            },
          },
          website: {
            text: 'For more information, including financial reporting, go to: ',
          },
        },
      },
      civil: {
        header: 'Supporting Ukrainian civilians',
        eastSOS: {
          header: 'Charity organization «East-SOS».',
          usd: 'Donate in USD',
          eur: 'Donate in EUR',
          uah: 'Donate in UAH',
        },
        proliska: {
          header: 'Humanitarian Mission «Proliska».',
          anyBank: 'From any bank',
          swift: 'SWIFT',
        },
        voicesOfChildren: {
          header: 'The Voices of Children Foundation.',
          patreon: 'Support us on Patreon',
          crypto: 'Donate in crypto',
          uah: 'Bank transfer in UAH',
          usd: 'Bank transfer in USD',
          eur: 'Bank transfer in EUR',
          other: 'You can find other ways to donate on our website - ',
        },
      },
    },
    charts: {
      mainPageBtn: 'Home page',
      header: 'Charts and infographics showing russia`s losses in Ukraine',
      rotateWarning: 'Please rotate your screen to the landscape mode or use device with screen wider than 300 px',
      chartDynamics: {
        header: 'Dynamics of russia`s losses in Ukraine',
      },
      chartCompareArmies: {
        header: 'russia\'s losses in Ukraine',
        subHeader: 'compared to the active armed forces personnel in countries around the world',
        data: 'Data:',
        dataProvided: 'IISS, The Military Balance 2021',
        link: 'https://www.iiss.org/publications/the-military-balance/the-military-balance-2021',
        centerBtn: 'Center losses',
        ruLosses: 'Losses of russia',
      },
      chartMode: {
        header: 'How many lines to show on the chart:',
        showMultiple: 'Multiple lines at a time',
        showOne: 'Only one line at a time',
      },
      chartGenerals: {
        header: 'russian generals killed in Ukraine',
        subHeader: {
          part1: 'Overall up to 10 russian generals',
          part2: 'were killed',
          part3: 'in Ukraine as of May 10, 2022',
          source: 'https://edition.cnn.com/europe/live-news/russia-ukraine-war-news-05-10-22/h_5b27a015bfb714bf79b4e2986e4cadc3',
        },
        statuses: {
          header: 'Status',
          1: 'Confirmed',
          2: 'Claimed',
          3: 'Disputed',
        },
        ranks: {
          header: 'Rank',
          1: 'Major general',
          2: 'Lieutenant general',
          3: 'Colonel general',
        },
        shoulderMarks: {
          1: 'gen1.svg',
          2: 'gen2.svg',
          3: 'gen3.svg',
        },
        name: 'Name',
        source: 'Source',
        position: 'Position',
        killed: 'Killed',
        shoulderMarkCaption: 'Shoulder mark of a',
      },
    },
    screenshot: {
      header: 'Download infographics',
      downloadBtn: 'Download',
      noDownload: 'Please download infographics using Google Chrome, Mozilla Firefox or Microsoft Edge',
      warning: 'Please prefer downloading infographics using a laptop, not a tablet or a smartphone',
    },
    map: {
      header: 'Troop location map',
      legend: {
        legend: 'Legend',
        seeAllIcons1: 'Click',
        seeAllIcons2: 'on the map to see all icons',
        terrLiberated: 'Liberated territories',
        terrLiberatedMarchApril: 'Territories liberated in late March - early April',
        terrToBeClarified: 'The status of the territory needs to be clarified',
        terrSeized: 'Seized territories',
        terrCrimea: 'Temporarily occupied territories of the Crimea, Donetsk and Luhansk regions',
        terrTransnistria: 'Russian-occupied Transnistria',
        unit: 'Occupier\'s unit',
        staff: 'Occupier\'s headquarters',
        airfield: 'Occupier\'s airfield',
        fleet: 'Occupier\'s fleet',
        attackDirection1: 'Occupier\'s directions of attacks',
        attackDirection2: 'Occupier\'s directions of attacks',
      },
      centerBtn: 'Center map',
      warnings: [
        'Do not use this map to plan your evacuation routes. Follow the information on humanitarian corridors'
        + ' reported by the authorities.',
        'The map shows not exact but only approximate location of troops based on media reports.',
      ],
    },
    footer: {
      developed: {
        developedBy: 'Developed by the',
        fund: 'Come Back Alive Foundation',
        team: 'team',
      },
      design: {
        designStr: 'Designed by',
        author: 'Kyrylo Yermakov',
        authorLink: 'https://yermakov.webflow.io',
        designBasedOn: 'Design inspired by the reports of the',
        mfa: 'Ukrainian MFA',
        mfaLink: 'https://www.facebook.com/UkraineMFA',
        facebook: 'on Facebook',
      },
      iconsFrom: 'Icons: ',
    },
    modal: {
      copied: 'Copied!',
      downloadingImg: 'If the image was downloaded with errors, please try again, download it using a laptop or another browser',
      errorDownloadingImg: 'Error downloading infographic',
      errorGettingLosses: 'We were not able to get losses data =(. Please try again later',
    },
  },
  ua: {
    nav: {
      losses: 'Головна сторінка',
      donate: 'Як я можу допомогти?',
      charts: 'Графіки',
      screenshot: 'Зберегти інфографіку',
      map: 'Мапа',
    },
    main: {
      header: {
        header: 'Втрати російських загарбників в Україні',
        updateDate: 'Дані актуальні станом на:',
        language: 'uk-Ua',
        numbersProvided: 'Джерело: ',
        genStaff: 'Генеральний Штаб ЗСУ',
        warning: 'Дані уточнюються. Підрахунок ускладнюється високою інтенсивністю бойових дій',
      },
      dates: {
        start: 'Початок повномасштабної агресії',
        language: datesLanguages.ua,
        daysPassed: 'днів повномасштабної агресії росії',
        endOfWar: 'Кінець війни',
        today: 'Сьогодні',
      },
      losses: {
        [lossesNames.personnel.name]: {
          name: 'Військові',
        },
        [lossesNames.aircrafts.name]: {
          name: 'Літаки',
        },
        [lossesNames.helicopters.name]: {
          name: 'Гелікоптери',
        },
        [lossesNames.armoredVehicles.name]: {
          name: 'ББМ',
          descr: 'Бойові броньовані машини',
        },
        [lossesNames.vehicles.name]: {
          name: 'Автомобілі та цистерни з ПММ',
          descr: 'Паливно-мастильні матеріали',
        },
        [lossesNames.tanks.name]: {
          name: 'Танки',
        },
        [lossesNames.artillery.name]: {
          name: 'Артилерійські системи',
        },
        [lossesNames.mlrs.name]: {
          name: 'РСЗВ',
          descr: 'Реактивні системи залпового вогню',
        },
        [lossesNames.cisterns.name]: {
          name: 'Цистерни з ПММ',
          descr: 'Паливно-мастильні матеріали',
        },
        [lossesNames.antiAir.name]: {
          name: 'Засоби ППО',
          descr: 'Протиповітряна оборона',
        },
        [lossesNames.uav.name]: {
          name: 'БПЛА ОТР',
          descr: 'Безпілотні літальні апарати оперативно-тактичного рівня',
        },
        [lossesNames.vessels.name]: {
          name: 'Кораблі',
        },
        [lossesNames.specialVehicle.name]: {
          name: 'Спеціальна техніка',
        },
        [lossesNames.srmb.name]: {
          name: 'Пускові установки ОТРК / ТРК',
          descr: 'Оперативно-тактичні ракетні комплекси / тактичні ракетні комплекси',
        },
        [lossesNames.cruiseMissiles.name]: {
          name: 'Крилаті ракети',
        },
      },
    },
    donate: {
      header: 'Як я можу допомогти',
      copyIconTitle: 'Копіювати текст',
      expandBtn: {
        open: 'Розгорнути',
        close: 'Згорнути',
      },
      military: {
        header: 'Допомога захисникам України',
        comeBackAlive: {
          orgName: 'Фонд "Повернись Живим"',
          donationsOutside: {
            header: 'Пожертви з-за меж України',
            fondy: {
              header: 'Пожертви за допомогою Fondy.eu',
              text: 'Fondy має найвищий рівень безпеки – PCI DSS Level 1',
            },
            swift: 'Пожертви за допомогою SWIFT',
            crypto: 'Пожертви у криптовалюті',
          },
          donationsInside: {
            header: 'Перекази по Україні',
            oschadbank: 'Рахунок в Ощадбанку',
            privatbank: 'Рахунок в Приватбанку',
            crypto: 'Допомога криптою',
          },
          contacts: {
            header: 'Наші контакти',
            address: {
              header: 'Адреса:',
              text1: 'вул. Богдана Хмельницького 32, оф. 41, Київ',
              text2: 'Поверх 1, вхід через арку',
            },
            phone: {
              header: 'Телефон:',
              tel1Caption: '+38 (044) 338-33-38',
              tel1Tel: '+380443383338',
              tel2Caption: '+38 (068) 500-88-00',
              tel2Tel: '+380685008800',
              workingHours: 'Пн-Пт: 10:00 - 19:00',
            },
          },
          website: {
            text: 'Дізнайтеся більше інформації на нашому сайті включно з фінансовими звітами - ',
          },
        },
      },
      civil: {
        header: 'Допомога цивільному населенню України',
        eastSOS: {
          header: 'Благодійний фонд «Восток-СОС»',
          usd: 'Пожертви у USD',
          eur: 'Пожертви у EUR',
          uah: 'Пожертви у UAH',
        },
        proliska: {
          header: 'Гуманітарна місія «Проліска»',
          anyBank: 'Підтримати з карти будь-якого банку',
          swift: 'SWIFT',
        },
        voicesOfChildren: {
          header: 'Благодійний фонд Голоси дітей',
          patreon: 'Підтримайте нас на Patreon',
          crypto: 'Для внесків у крипті',
          uah: 'Для внесків в UAH',
          usd: 'Для внесків в USD',
          eur: 'Для внесків в EUR',
          other: 'Інші способи оплати можете знайти на нашому сайті - ',
        },
      },
    },
    charts: {
      mainPageBtn: 'Головна сторінка',
      header: 'Графіки та інфографіки, що показують втрати росії в Україні',
      rotateWarning: 'Будь ласка, поверніть екран горизонтально або використовуйте пристрій з шириною екрану більше 300 px',
      chartDynamics: {
        header: 'Динаміка втрат росії в Україні',
      },
      chartCompareArmies: {
        header: 'Втрати росії в Україні',
        subHeader: 'порівняно з кількістю діючих військовослужбовців збройних сил країн світу',
        data: 'Джерело:',
        dataProvided: 'IISS, The Military Balance 2021',
        link: 'https://www.iiss.org/publications/the-military-balance/the-military-balance-2021',
        centerBtn: 'Відцентрувати втрати',
        ruLosses: 'Втрати росії',
      },
      chartMode: {
        header: 'Скільки ліній показувати на графіку:',
        showMultiple: 'Декілька ліній',
        showOne: 'Лише одну лінію',
      },
      chartGenerals: {
        header: 'російські генерали знищені в Україні',
        subHeader: {
          part1: 'Загалом в Україні',
          part2: 'знищено',
          part3: 'до 10 російських генералів станом на 10 травня 2022',
          source: 'https://edition.cnn.com/europe/live-news/russia-ukraine-war-news-05-10-22/h_5b27a015bfb714bf79b4e2986e4cadc3',
        },
        statuses: {
          header: 'Статус',
          1: 'Підтверджено окупантами',
          2: 'Не підтверджено окупантами',
          3: 'Заперечується',
        },
        ranks: {
          header: 'Звання',
          1: 'Генерал-майор',
          2: 'Генерал-лейтенант',
          3: 'Генерал-полковник',
        },
        shoulderMarks: {
          1: 'gen1.svg',
          2: 'gen2.svg',
          3: 'gen3.svg',
        },
        name: 'Ім\'я',
        source: 'Джерело',
        position: 'Посада',
        killed: 'Знищено',
        shoulderMarkCaption: 'Погон',
      },
    },
    screenshot: {
      header: 'Завантажити інфографіку',
      downloadBtn: 'Завантажити',
      noDownload: 'Завантажте інфографіку, будь ласка, у Google Chrome, Mozilla Firefox чи Microsoft Edge',
      warning: 'Інфографіку краще завантажувати з ноутбука ніж з планшета чи смартфона',
    },
    map: {
      header: 'Мапа розташування сил',
      legend: {
        legend: 'Легенда',
        seeAllIcons1: 'Оберіть',
        seeAllIcons2: 'на мапі щоб побачити всі іконки',
        terrLiberated: 'Звільнені території',
        terrLiberatedMarchApril: 'Території звільнені наприкінці березня - початку квітня',
        terrToBeClarified: 'Статус території потребує уточнення',
        terrSeized: 'Території захоплені окупантами',
        terrCrimea: 'Тимчасово окуповані території Криму, Донецької та Луганської областей',
        terrTransnistria: 'Окуповане Придністров\'я',
        unit: 'Підрозділи окупантів',
        staff: 'Штаби окупантів',
        airfield: 'Аеродроми окупантів',
        fleet: 'Флот окупантів',
        attackDirection1: 'Напрями наступу окупантів',
        attackDirection2: 'Напрями наступу окупантів',
      },
      centerBtn: 'Відцентрувати мапу',
      warnings: [
        'Не використовуйте цю мапу для планування маршрутів евакуації. Слідкуйте за інформацією про гуманітарні'
        + ' коридори від органів влади.',
        'Мапа показує не точні але лише приблизні розташування військ на основі повідомлень у медіа.',
      ],
    },
    footer: {
      developed: {
        developedBy: 'Розроблено командою фонду',
        fund: 'Повернись Живим',
        team: '',
      },
      design: {
        designStr: 'Дизайн',
        author: 'Кирило Єрмаков',
        authorLink: 'https://yermakov.webflow.io',
        designBasedOn: 'Дизайн розроблено на основі звітів',
        mfa: 'МЗС України',
        mfaLink: 'https://www.facebook.com/UkraineMFA',
        facebook: 'у Facebook',
      },
      iconsFrom: 'Іконки взято з',
    },
    modal: {
      copied: 'Скопійовано!',
      downloadingImg: 'Якщо картинка завантажилася з помилкою, спробуйте ще раз, завантажте з комп\'ютера або у іншому браузері',
      errorDownloadingImg: 'Помилка завантаження інфографіки',
      errorGettingLosses: 'Ми не змогли отримати дані втрат =(. Будь ласка, через певний час спробуйте ще раз',
    },
  },
};
