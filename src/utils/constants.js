import introLogo from "../img/DonorSearch.png";
import introPicture from "../img/puls.png";

export const constants = {
  myUserInfo: {
    id: 127044462,
    bdate: "21.4.1998",
    bdate_visibility: 1,
    city: {
      id: 1,
      title: "Москва",
    },
    country: {
      id: 1,
      title: "Россия",
    },
    timezone: 3.0,
    photo_200:
      "https://sun1-56.userapi.com/s/v1/if2/5FD1TSuiNJi7ZCXb55ILxbaYaPf40hktZxo6hF_jkwLJUl7UcclmoXW55mTxHpG2edomdJHjEeMkQXad3fy_KvpT.jpg?quality=95&crop=268,309,293,293&as=50x50,100x100,200x200&ava=1&u=PLrJKNmufj2jMmOEBtNAgHDNJKaZbQpmR25KkObFAts&cs=200x200",
    photo_max_orig:
      "https://sun1-56.userapi.com/s/v1/ig2/4lIx7M2fRSta93JbzSNo8fpr7SFi4fN51pEzeD-xGt3L9z9ZI2pB8k1ZnOT5JIG-o0KKAduv3a9ekM42m086rLVB.jpg?size=293x293&quality=95&crop=268,309,293,293&ava=1",
    sex: 2,
    photo_100:
      "https://sun1-56.userapi.com/s/v1/if2/5FD1TSuiNJi7ZCXb55ILxbaYaPf40hktZxo6hF_jkwLJUl7UcclmoXW55mTxHpG2edomdJHjEeMkQXad3fy_KvpT.jpg?quality=95&crop=268,309,293,293&as=50x50,100x100,200x200&ava=1&u=PLrJKNmufj2jMmOEBtNAgHDNJKaZbQpmR25KkObFAts&cs=100x100",
    photo_base:
      "https://sun1-56.userapi.com/s/v1/if2/5FD1TSuiNJi7ZCXb55ILxbaYaPf40hktZxo6hF_jkwLJUl7UcclmoXW55mTxHpG2edomdJHjEeMkQXad3fy_KvpT.jpg?quality=95&crop=268,309,293,293&as=50x50,100x100,200x200&ava=1&u=PLrJKNmufj2jMmOEBtNAgHDNJKaZbQpmR25KkObFAts",
    first_name: "Илья",
    last_name: "Иванюшин",
    can_access_closed: true,
    is_closed: false,
  },
  start1: {
    logo: introLogo,
    mainPicture: introPicture,
    paragraphs: [
      '15 августа пройдёт первый фестиваль донорского движения "Пульсация" в Казани.',
      'Вокруг донорства существует множество мифов - давай узнаем, сможешь ли ты их разоблачить?"',
    ],
  },
  card: {
    title: "День донора",
    rank: {
      low: "Молодая кровь",
      medium: "Смелая кровь",
      high: "Горячая кровь",
    },
    buttonsText: {
      true: "Верю",
      false: "Не верю"
    },
    length: 10,
    cardData: [
      {
        question: "Больше всего нужны доноры с отрицательным резус-фактором",
        answer:
          "Отрицательные группы крови действительно редкие. Но и таких пациентов гораздо меньше, чем людей с распространенными группами крови. Как правило, не хватает доноров с популярной группой крови. Но кровь всех групп требуется постоянно.",
        img: "1_ishy_donora.png",
        true_answer: false,
        true_answer_text: "это миф",
        questionNumber: 0,
      },
      {
        question: "В России достаточно доноров",
        answer:
          "Это не так. Согласно исследованиям Всемирной организации здравоохранения в стране должно быть не менее 40 донаций в год на 1000 жителей, чтобы крови хватило всем нуждающимся. В России этот показатель не превышает 20 донаций на 1000 жителей.",
        img: "2_idu_sdavat.png",
        true_answer: false,
        true_answer_text: "это миф",
        questionNumber: 1,
      },
      {
        question: "Донором крови может стать каждый",
        answer:
          "Это не совсем так. Быть донорами могут лишь 10–15% населения. В России донором нельзя стать если нет 18 лет, с весом менее 50 кг или с определенными болезнями. Именно поэтому мы благодарны каждому донору за спасение жизней.",
        img: "3_odnoy_krovi.png",
        true_answer: false,
        true_answer_text: "это миф",
        questionNumber: 2,
      },
      {
        question: "От регулярной сдачи крови полнеют",
        answer:
          "Донации не влияют на вес донора. Кстати, при сдаче цельной крови организм теряет около 650 калорий, но так как сдавать цельную кровь можно не чаще, чем один раз в 60 дней, сильно на этот способ надеяться не стоит :)",
        img: "4_shok.png",
        true_answer: false,
        true_answer_text: "это миф",
        questionNumber: 3,
      },
      {
        question: "Человек с татуировкой не может быть донором",
        answer:
          "Сдавать кровь запрещено только со свежей татуировкой. Прийти на сдачу крови можно спустя год со дня ее нанесения. Такое же правило действует для пирсинга и терапий иглоукалывания. Порой доноры ставят себе донорские тату :)",
        img: "5_otvod.png",
        true_answer: false,
        true_answer_text: "это миф",
        questionNumber: 4,
      },
      {
        question: "Донорство крови полезно для здоровья",
        answer:
          "По данным ВОЗ доноры живут в среднем на 5 лет дольше! Регулярная сдача крови активизирует систему кроветворения и стимулирует иммунитет. Каждая сдача крови - это еще и бесплатный контроль здоровья - проверка на ВИЧ и гепатиты.",
        img: "6_kruto.png",
        true_answer: true,
        true_answer_text: "это факт",
        questionNumber: 5,
      },
      {
        question: "Одна сдача цельной крови спасает три жизни",
        answer:
          "Действительно! Цельную кровь не переливают. Донорскую кровь разделяют на плазму, тромбоциты и эритроциты, что чаще всего идут на переливание разным людям. Фактически, с каждой сданной цельной крови вы помогаете спасти три жизни.",
        img: "7_superhero.png",
        true_answer: true,
        true_answer_text: "это факт",
        questionNumber: 6,
      },
      {
        question: "Перед сдачей крови можно сытно покушать",
        answer:
          "Правда. Натощак сдавать кровь не нужно! Однако воздержитесь от молочного, жареного и жирного, орехов и бананов. Лучше всего –  каша на воде, сладкий чай с вареньем, соки, морсы, компоты, минеральная вода.",
        img: "8_bonus_pechenie.png",
        true_answer: true,
        true_answer_text: "это факт",
        questionNumber: 7,
      },
      {
        question:
          "Каждый третий житель земли хотя бы раз в жизни нуждается в переливании крови",
        answer:
          "Ежегодно переливания крови нужны 1.5 млн россиян. В переливании крови нуждаются очень много людей: с тяжелыми травмами и ожогами, во время хирургических операций и онкологических заболеваний, после осложненных родов.",
        img: "9_blagodary.png",
        true_answer: true,
        true_answer_text: "это факт",
        questionNumber: 8,
      },
      {
        question:
          "Стать донором крови можно только с наступления совершеннолетия",
        answer:
          "Действительно, даже с разрешения родителей до 18 лет не получится стать донором. Поэтому возьмите на сдачу крови паспорт :) За последние 10 лет доля молодых доноров заметно сократилась. Мы бы хотели исправить эту тенденцию. Стань частью донорского сообщества.",
        img: "10_nu_bivaet.png",
        true_answer: true,
        true_answer_text: "это факт",
        questionNumber: 9,
      },
    ],
  },
  cardResult: {
    title: "День донора",
    trueAnswerText: "это факт",
    falseAnswerText: "это миф",
    youAreWrongText: "Ой нет... ",
    youAreRightText: "Ты прав, ",
    buttonText: "Дальше"
  }
};
