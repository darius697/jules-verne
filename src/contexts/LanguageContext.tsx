
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ro' | 'ru';

interface LanguageContextType {
  currentLanguage: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  ro: {
    // Navbar
    home: 'Acasă',
    about: 'Despre Noi',
    programs: 'Programe',
    gallery: 'Galerie',
    contact: 'Contact',
    
    // Hero
    eliteKindergarten: 'Grădinița Privată de Elită',
    adventuresInLearning: 'Aventuri în Învățare',
    heroDescription: 'Descoperă lumea magică a învățării alături de noi! La Jules Verne, fiecare zi este o nouă aventură plină de explorări, creativitate și bucurie.',
    scheduleVisit: 'Programează o Vizită',
    discoverPrograms: 'Descoperă Programele',
    yearsExperience: 'Ani de Experiență',
    happyChildren: 'Copii Fericiți',
    dedicatedEducators: 'Educatori Dedicați',
    
    // About
    aboutJulesVerne: 'Despre Jules Verne',
    aboutDescription: 'De peste 15 ani, grădinița Jules Verne este un loc special unde copiii învață, explorează și își dezvoltă personalitatea într-un mediu sigur și stimulativ.',
    ourMission: 'Misiunea Noastră',
    missionDescription1: 'Inspirați de spiritul aventuros al lui Jules Verne, creăm pentru copii o lume plină de descoperiri și învățare. Fiecare zi la grădinița noastră este o nouă călătorie în universul cunoașterii.',
    missionDescription2: 'Valorile noastre fundamentale sunt respectul, creativitatea, colaborarea și bucuria de a învăța. Pregătim copiii pentru viitor, dezvoltându-le încrederea în sine și dragostea pentru cunoaștere.',
    aracipAccreditation: 'Acreditare ARACIP',
    approvedCurriculum: 'Curriculum aprobat de Ministerul Educației',
    satisfiedParents: 'Părinți Mulțumiți',
    innovativeEducation: 'Program Educațional Inovator',
    innovativeEducationDesc: 'Curriculum personalizat care stimulează creativitatea și curiozitatea naturală a copiilor.',
    qualifiedEducators: 'Educatori Calificați',
    qualifiedEducatorsDesc: 'Echipa noastră de profesori pasionați și certificați îi ghidează pe copii cu dragoste.',
    flexibleSchedule: 'Program Flexibil',
    flexibleScheduleDesc: 'Orar adaptat nevoilor familiei tale, cu opțiuni de prelungit și activități extra.',
    personalizedDevelopment: 'Dezvoltare Personalizată',
    personalizedDevelopmentDesc: 'Atenție individuală pentru fiecare copil, respectând ritmul său de dezvoltare.',
    
    // Programs
    ourPrograms: 'Programele Noastre Educaționale',
    programsDescription: 'Fiecare grupă de vârstă beneficiază de un program personalizat, adaptat nevoilor de dezvoltare specifice copiilor.',
    smallGroup: 'Grupa Mică',
    middleGroup: 'Grupa Mijlocie',
    bigGroup: 'Grupa Mare',
    preparatoryGroup: 'Grupa Pregătitoare',
    extracurricularActivities: 'Activități Extracurriculare',
    extracurricularDescription: 'Completăm educația cu activități opționale care dezvoltă talentele și pasiunile copiilor.',
    
    // Program details
    smallGroupAge: '2-3 ani',
    middleGroupAge: '3-4 ani',
    bigGroupAge: '4-5 ani',
    preparatoryGroupAge: '5-6 ani',
    
    smallGroupDescription: 'Primii pași în lumea educației printr-o abordare blândă și adaptată vârstei.',
    middleGroupDescription: 'Explorarea lumii prin creativitate, experimentare și activități interactive.',
    bigGroupDescription: 'Pregătirea pentru școală prin activități complexe și dezvoltarea autonomiei.',
    preparatoryGroupDescription: 'Tranziția către învățământul primar prin consolidarea competențelor dobândite.',
    
    gradualAdaptation: 'Adaptare graduală',
    sensoryGames: 'Jocuri senzoriale',
    languageDevelopment: 'Dezvoltarea limbajului',
    primarySocialization: 'Socializare primară',
    
    creativeActivities: 'Activități creative',
    readingInitiation: 'Inițiere în citire',
    funMath: 'Matematică distractivă',
    physicalEducation: 'Educație fizică',
    
    schoolPreparation: 'Pregătire pentru școală',
    thematicProjects: 'Proiecte tematice',
    englishLanguage: 'Limba engleză',
    stemActivities: 'Activități STEM',
    
    preschoolCurriculum: 'Curriculum pre-școlar',
    cognitiveDevelopment: 'Dezvoltare cognitivă',
    advancedSocialSkills: 'Abilități sociale avansate',
    psychologicalPreparation: 'Pregătire psihologică',
    
    smallGroupCapacity: '12 copii/grupă',
    middleGroupCapacity: '15 copii/grupă',
    bigGroupCapacity: '18 copii/grupă',
    preparatoryGroupCapacity: '20 copii/grupă',
    
    mainActivities: 'Activități principale',
    
    // Extracurricular activities
    english: 'Engleză',
    music: 'Muzică',
    dance: 'Dans',
    arts: 'Arte',
    swimming: 'Înot',
    karate: 'Karate',
    
    // Gallery
    ourGallery: 'Galeria Noastră',
    galleryDescription: 'Urmărește momentele speciale și activitățile zilnice ale copiilor la Jules Verne.',
    
    childrenInClassroom: 'Copii în sala de clasă',
    natureExploration: 'Explorarea naturii',
    playBreak: 'Pauza de joacă',
    creativeActivitiesGallery: 'Activități creative',
    diningRoom: 'Sala de mese',
    playground: 'Grădina de joacă',
    
    educationalActivities: 'Activități Educaționale',
    outdoorActivities: 'Activități în Aer Liber',
    freeTime: 'Timp Liber',
    artsAndCreativity: 'Arte și Creativitate',
    facilities: 'Facilități',
    
    // Contact
    contactToday: 'Contactează-ne Astăzi',
    contactDescription: 'Suntem aici să răspundem la toate întrebările tale și să te ajutăm să descoperi de ce Jules Verne este alegerea perfectă pentru copilul tău.',
    phone: 'Telefon',
    email: 'Email',
    schedule: 'Program',
    address: 'Adresă',
    mondayFriday: 'Luni - Vineri: 7:30 - 18:00',
    saturdayOnRequest: 'Sâmbătă: La cerere',
    sundayClosed: 'Duminică: Închis',
    streetAddress: 'Strada Aventurii, Nr. 15',
    sectorAddress: 'Sector 1, București',
    scheduleVisitCard: 'Programează o Vizită',
    visitDescription: 'Vino să vezi cum arată o zi la Jules Verne! Oferim vizite ghidate pentru părinți și copii.',
    reserveVisit: 'Rezervă o Vizită',
    admissionDossier: 'Dosarul de Admitere',
    admissionDescription: 'Descarcă documentele necesare pentru înscrierea copilului tău la grădinița Jules Verne.',
    downloadDocuments: 'Descarcă Documentele',
    openEnrollment: 'Înscrieri Deschise!',
    enrollmentDescription: 'Locuri disponibile pentru anul școlar 2024-2025. Contactează-ne pentru detalii!',
    
    // Footer
    footerDescription: 'Grădinița privată Jules Verne - unde fiecare copil pornește în aventura învățării într-un mediu sigur, stimulativ și plin de dragoste.',
    quickContact: 'Contact Rapid',
    allRightsReserved: '© 2024 Grădinița Jules Verne. Toate drepturile rezervate.',
    privacyPolicy: 'Politica de Confidențialitate',
    termsConditions: 'Termeni și Condiții'
  },
  ru: {
    // Navbar
    home: 'Главная',
    about: 'О нас',
    programs: 'Программы',
    gallery: 'Галерея',
    contact: 'Контакты',
    
    // Hero
    eliteKindergarten: 'Элитный частный детский сад',
    adventuresInLearning: 'Приключения в обучении',
    heroDescription: 'Откройте для себя волшебный мир обучения вместе с нами! В Жюль Верне каждый день - это новое приключение, полное исследований, творчества и радости.',
    scheduleVisit: 'Записаться на визит',
    discoverPrograms: 'Узнать о программах',
    yearsExperience: 'Лет опыта',
    happyChildren: 'Счастливых детей',
    dedicatedEducators: 'Преданных педагогов',
    
    // About
    aboutJulesVerne: 'О Жюль Верне',
    aboutDescription: 'Уже более 15 лет детский сад Жюль Верн является особым местом, где дети учатся, исследуют и развивают свою личность в безопасной и стимулирующей среде.',
    ourMission: 'Наша миссия',
    missionDescription1: 'Вдохновленные авантюрным духом Жюля Верна, мы создаем для детей мир, полный открытий и обучения. Каждый день в нашем детском саду - это новое путешествие во вселенную знаний.',
    missionDescription2: 'Наши основные ценности - это уважение, творчество, сотрудничество и радость обучения. Мы готовим детей к будущему, развивая их уверенность в себе и любовь к знаниям.',
    aracipAccreditation: 'Аккредитация ARACIP',
    approvedCurriculum: 'Учебная программа, одобренная Министерством образования',
    satisfiedParents: 'Довольных родителей',
    innovativeEducation: 'Инновационная образовательная программа',
    innovativeEducationDesc: 'Персонализированная учебная программа, которая стимулирует творчество и естественное любопытство детей.',
    qualifiedEducators: 'Квалифицированные педагоги',
    qualifiedEducatorsDesc: 'Наша команда увлеченных и сертифицированных учителей направляет детей с любовью.',
    flexibleSchedule: 'Гибкое расписание',
    flexibleScheduleDesc: 'Расписание, адаптированное к потребностям вашей семьи, с возможностями продления и дополнительными мероприятиями.',
    personalizedDevelopment: 'Персонализированное развитие',
    personalizedDevelopmentDesc: 'Индивидуальное внимание к каждому ребенку, уважая его темп развития.',
    
    // Programs
    ourPrograms: 'Наши образовательные программы',
    programsDescription: 'Каждая возрастная группа получает персонализированную программу, адаптированную к конкретным потребностям развития детей.',
    smallGroup: 'Младшая группа',
    middleGroup: 'Средняя группа',
    bigGroup: 'Старшая группа',
    preparatoryGroup: 'Подготовительная группа',
    extracurricularActivities: 'Дополнительные занятия',
    extracurricularDescription: 'Мы дополняем образование дополнительными занятиями, которые развивают таланты и увлечения детей.',
    
    // Program details
    smallGroupAge: '2-3 года',
    middleGroupAge: '3-4 года',
    bigGroupAge: '4-5 лет',
    preparatoryGroupAge: '5-6 лет',
    
    smallGroupDescription: 'Первые шаги в мире образования через мягкий и соответствующий возрасту подход.',
    middleGroupDescription: 'Исследование мира через творчество, эксперименты и интерактивные занятия.',
    bigGroupDescription: 'Подготовка к школе через сложные занятия и развитие самостоятельности.',
    preparatoryGroupDescription: 'Переход к начальному образованию через укрепление приобретенных навыков.',
    
    gradualAdaptation: 'Постепенная адаптация',
    sensoryGames: 'Сенсорные игры',
    languageDevelopment: 'Развитие речи',
    primarySocialization: 'Первичная социализация',
    
    creativeActivities: 'Творческие занятия',
    readingInitiation: 'Начальное чтение',
    funMath: 'Веселая математика',
    physicalEducation: 'Физическое воспитание',
    
    schoolPreparation: 'Подготовка к школе',
    thematicProjects: 'Тематические проекты',
    englishLanguage: 'Английский язык',
    stemActivities: 'STEM-занятия',
    
    preschoolCurriculum: 'Дошкольная программа',
    cognitiveDevelopment: 'Когнитивное развитие',
    advancedSocialSkills: 'Продвинутые социальные навыки',
    psychologicalPreparation: 'Психологическая подготовка',
    
    smallGroupCapacity: '12 детей/группа',
    middleGroupCapacity: '15 детей/группа',
    bigGroupCapacity: '18 детей/группа',
    preparatoryGroupCapacity: '20 детей/группа',
    
    mainActivities: 'Основные занятия',
    
    // Extracurricular activities
    english: 'Английский',
    music: 'Музыка',
    dance: 'Танцы',
    arts: 'Искусство',
    swimming: 'Плавание',
    karate: 'Карате',
    
    // Gallery
    ourGallery: 'Наша галерея',
    galleryDescription: 'Следите за особыми моментами и ежедневными занятиями детей в Жюль Верне.',
    
    childrenInClassroom: 'Дети в классе',
    natureExploration: 'Исследование природы',
    playBreak: 'Игровая перемена',
    creativeActivitiesGallery: 'Творческие занятия',
    diningRoom: 'Столовая',
    playground: 'Игровая площадка',
    
    educationalActivities: 'Образовательные занятия',
    outdoorActivities: 'Занятия на свежем воздухе',
    freeTime: 'Свободное время',
    artsAndCreativity: 'Искусство и творчество',
    facilities: 'Помещения',
    
    // Contact
    contactToday: 'Свяжитесь с нами сегодня',
    contactDescription: 'Мы здесь, чтобы ответить на все ваши вопросы и помочь вам понять, почему Жюль Верн - идеальный выбор для вашего ребенка.',
    phone: 'Телефон',
    email: 'Электронная почта',
    schedule: 'Расписание',
    address: 'Адрес',
    mondayFriday: 'Пн - Пт: 7:30 - 18:00',
    saturdayOnRequest: 'Суббота: по запросу',
    sundayClosed: 'Воскресенье: Закрыто',
    streetAddress: 'Улица Приключений, 15',
    sectorAddress: '1-й сектор, Бухарест',
    scheduleVisitCard: 'Запишитесь на визит',
    visitDescription: 'Приходите посмотреть, как проходит день в Жюль Верне! Мы предлагаем экскурсии для родителей и детей.',
    reserveVisit: 'Забронировать визит',
    admissionDossier: 'Документы для поступления',
    admissionDescription: 'Скачайте необходимые документы для зачисления вашего ребенка в детский сад Жюль Верн.',
    downloadDocuments: 'Скачать документы',
    openEnrollment: 'Открыта запись!',
    enrollmentDescription: 'Места доступны на 2024-2025 учебный год. Свяжитесь с нами для получения подробной информации!',
    
    // Footer
    footerDescription: 'Частный детский сад Жюль Верн - где каждый ребенок начинает приключение обучения в безопасной, стимулирующей и полной любви среде.',
    quickContact: 'Быстрый контакт',
    allRightsReserved: '© 2024 Детский сад Жюль Верн. Все права защищены.',
    privacyPolicy: 'Политика конфиденциальности',
    termsConditions: 'Условия использования'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('ro');

  const toggleLanguage = () => {
    setCurrentLanguage(prev => prev === 'ro' ? 'ru' : 'ro');
  };

  const t = (key: string): string => {
    return translations[currentLanguage][key as keyof typeof translations['ro']] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
