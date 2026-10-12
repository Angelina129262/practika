const articles = [
  { id: 'art-001', title: 'Запуск нового редакционного календаря', excerpt: 'Как мы планируем выпуски на квартал вперёд', slug: 'editorial-calendar', category: 'company', status: 'published', author: 'Иванов А.', updatedAt: '2026-10-07T08:55:00Z', priority: 'medium', stats: { words: 820, readMinutes: 4, images: 3 }, tags: ['процессы', 'планирование'] },
  { id: 'art-002', title: 'Обзор новой версии редактора', excerpt: 'Что изменилось в визуальном редакторе и стоит ли обновляться', slug: 'editor-review', category: 'reviews', status: 'published', author: 'Петрова М.', updatedAt: '2026-10-07T08:30:00Z', priority: 'medium', stats: { words: 1450, readMinutes: 7, images: 6 }, tags: ['обзор', 'редактор'] },
  { id: 'art-003', title: 'Как ускорить загрузку страниц в два раза', excerpt: 'Практическое руководство по оптимизации изображений и кэша', slug: 'speed-up-pages', category: 'guides', status: 'review', author: 'Сидоров К.', updatedAt: '2026-10-07T08:10:00Z', priority: 'high', stats: { words: 2300, readMinutes: 11, images: 9 }, tags: ['скорость', 'кэш'] },
  { id: 'art-004', title: 'Итоги осеннего релиза платформы', excerpt: 'Главные новости и изменения за сезон', slug: 'autumn-release', category: 'news', status: 'published', author: 'Козлова Е.', updatedAt: '2026-10-06T17:20:00Z', priority: 'high', stats: { words: 960, readMinutes: 5, images: 4 }, tags: ['релиз', 'новости'] },
  { id: 'art-005', title: 'Интервью с главным редактором', excerpt: 'О будущем медиа и работе с авторами', slug: 'chief-editor-interview', category: 'interviews', status: 'review', author: 'Новиков Д.', updatedAt: '2026-10-07T07:40:00Z', priority: 'high', stats: { words: 3100, readMinutes: 14, images: 5 }, tags: ['интервью', 'медиа'] },
  { id: 'art-006', title: 'Безголовая CMS: что это и зачем', excerpt: 'Разбираем архитектуру headless и её плюсы', slug: 'headless-cms', category: 'tech', status: 'draft', author: 'Иванов А.', updatedAt: '2026-10-07T06:15:00Z', priority: 'medium', stats: { words: 540, readMinutes: 3, images: 1 }, tags: ['headless', 'архитектура'] },
  { id: 'art-007', title: 'Руководство по SEO для авторов', excerpt: 'Заголовки, описания и структура текста, которые любят поисковики', slug: 'seo-for-authors', category: 'guides', status: 'published', author: 'Петрова М.', updatedAt: '2026-10-05T12:00:00Z', priority: 'high', stats: { words: 2750, readMinutes: 13, images: 8 }, tags: ['seo', 'авторам'] },
  { id: 'art-008', title: 'Новые правила комментирования', excerpt: 'Что изменилось в модерации обсуждений', slug: 'comment-rules', category: 'news', status: 'review', author: 'Козлова Е.', updatedAt: '2026-10-07T08:46:00Z', priority: 'high', stats: { words: 610, readMinutes: 3, images: 0 }, tags: ['модерация', 'правила'] },
  { id: 'art-009', title: 'Тест трёх конструкторов лендингов', excerpt: 'Сравниваем скорость, цену и удобство', slug: 'landing-builders', category: 'reviews', status: 'published', author: 'Сидоров К.', updatedAt: '2026-10-04T10:30:00Z', priority: 'medium', stats: { words: 1980, readMinutes: 9, images: 12 }, tags: ['обзор', 'лендинг'] },
  { id: 'art-010', title: 'Искусственный интеллект в редакции', excerpt: 'Где нейросети помогают, а где мешают авторам', slug: 'ai-in-newsroom', category: 'tech', status: 'draft', author: 'Новиков Д.', updatedAt: '2026-10-07T05:50:00Z', priority: 'medium', stats: { words: 1200, readMinutes: 6, images: 2 }, tags: ['ии', 'редакция'] },
  { id: 'art-011', title: 'Архив: итоги прошлого года', excerpt: 'Подборка лучших материалов за 2025 год', slug: 'year-2025', category: 'company', status: 'archived', author: 'Иванов А.', updatedAt: '2026-01-10T09:00:00Z', priority: 'low', stats: { words: 4200, readMinutes: 18, images: 15 }, tags: ['архив', 'итоги'] },
  { id: 'art-012', title: 'Как написать цепляющий заголовок', excerpt: 'Десять приёмов, которые работают в любой нише', slug: 'catchy-headlines', category: 'guides', status: 'published', author: 'Козлова Е.', updatedAt: '2026-10-03T14:10:00Z', priority: 'low', stats: { words: 1100, readMinutes: 5, images: 2 }, tags: ['заголовки', 'авторам'] },
  { id: 'art-013', title: 'Старая инструкция по публикации', excerpt: 'Материал устарел и ждёт переписывания', slug: 'old-publish-guide', category: 'guides', status: 'archived', author: 'Петрова М.', updatedAt: '2025-11-20T11:00:00Z', priority: 'low', stats: { words: 780, readMinutes: 4, images: 1 }, tags: ['архив', 'инструкция'] },
  { id: 'art-014', title: 'Новый сервис рассылок для читателей', excerpt: 'Подписка на дайджесты по любимым категориям', slug: 'newsletter-service', category: 'news', status: 'draft', author: 'Сидоров К.', updatedAt: '2026-10-07T07:05:00Z', priority: 'low', stats: { words: 430, readMinutes: 2, images: 0 }, tags: ['рассылка', 'новости'] },
  { id: 'art-015', title: 'Как мы работаем с внештатными авторами', excerpt: 'Договоры, гонорары и редакторская поддержка', slug: 'freelance-authors', category: 'company', status: 'published', author: 'Новиков Д.', updatedAt: '2026-10-02T16:40:00Z', priority: 'medium', stats: { words: 1650, readMinutes: 8, images: 3 }, tags: ['авторы', 'процессы'] },
];

const articleStats = [
  { id: 'stat-001', articleId: 'art-001', seoScore: 78, readability: 84, views: 1240, viewsHistory: [120, 210, 310, 280, 320], thresholds: { low: 40, high: 70 } },
  { id: 'stat-002', articleId: 'art-002', seoScore: 66, readability: 72, views: 2980, viewsHistory: [400, 520, 610, 700, 750], thresholds: { low: 40, high: 70 } },
  { id: 'stat-003', articleId: 'art-003', seoScore: 58, readability: 49, views: 0, viewsHistory: [0, 0, 0, 0, 0], thresholds: { low: 40, high: 70 } },
  { id: 'stat-004', articleId: 'art-004', seoScore: 88, readability: 90, views: 5410, viewsHistory: [900, 1300, 1250, 1100, 860], thresholds: { low: 40, high: 70 } },
  { id: 'stat-005', articleId: 'art-005', seoScore: 71, readability: 63, views: 0, viewsHistory: [0, 0, 0, 0, 0], thresholds: { low: 40, high: 70 } },
  { id: 'stat-006', articleId: 'art-006', seoScore: 35, readability: 58, views: 0, viewsHistory: [0, 0, 0, 0, 0], thresholds: { low: 40, high: 70 } },
  { id: 'stat-007', articleId: 'art-007', seoScore: 94, readability: 81, views: 8760, viewsHistory: [1500, 1700, 1800, 1900, 1860], thresholds: { low: 40, high: 70 } },
  { id: 'stat-008', articleId: 'art-008', seoScore: 52, readability: 76, views: 0, viewsHistory: [0, 0, 0, 0, 0], thresholds: { low: 40, high: 70 } },
  { id: 'stat-009', articleId: 'art-009', seoScore: 82, readability: 69, views: 4120, viewsHistory: [700, 820, 900, 850, 850], thresholds: { low: 40, high: 70 } },
  { id: 'stat-010', articleId: 'art-010', seoScore: 44, readability: 61, views: 0, viewsHistory: [0, 0, 0, 0, 0], thresholds: { low: 40, high: 70 } },
  { id: 'stat-011', articleId: 'art-011', seoScore: 73, readability: 55, views: 15200, viewsHistory: [30, 25, 28, 22, 20], thresholds: { low: 40, high: 70 } },
  { id: 'stat-012', articleId: 'art-012', seoScore: 85, readability: 92, views: 3300, viewsHistory: [500, 640, 700, 780, 680], thresholds: { low: 40, high: 70 } },
  { id: 'stat-013', articleId: 'art-013', seoScore: 29, readability: 47, views: 910, viewsHistory: [5, 3, 4, 2, 1], thresholds: { low: 40, high: 70 } },
  { id: 'stat-014', articleId: 'art-014', seoScore: 40, readability: 70, views: 0, viewsHistory: [0, 0, 0, 0, 0], thresholds: { low: 40, high: 70 } },
  { id: 'stat-015', articleId: 'art-015', seoScore: 67, readability: 77, views: 1980, viewsHistory: [250, 380, 420, 480, 450], thresholds: { low: 40, high: 70 } },
];

const moderationCases = [
  { id: 'mod-001', title: 'Спам в комментариях', description: 'Под статьёй появились однотипные комментарии со ссылками на сторонний сайт', severity: 'critical', status: 'pending', articleId: 'art-002', createdAt: '2026-10-07T08:41:00Z', resolvedAt: null, assignee: 'Петрова М.', tags: ['спам', 'комментарии'] },
  { id: 'mod-002', title: 'Жалоба на плагиат', description: 'Читатель сообщил о совпадении текста с материалом другого издания', severity: 'critical', status: 'inProgress', articleId: 'art-004', createdAt: '2026-10-07T06:44:00Z', resolvedAt: null, assignee: 'Иванов А.', tags: ['плагиат', 'проверка'] },
  { id: 'mod-003', title: 'Нет описания для SEO', description: 'У статьи не заполнено мета-описание, поисковики покажут случайный фрагмент', severity: 'warning', status: 'pending', articleId: 'art-003', createdAt: '2026-10-07T08:30:00Z', resolvedAt: null, assignee: 'Козлова Е.', tags: ['seo', 'метаданные'] },
  { id: 'mod-004', title: 'Битые ссылки', description: 'В тексте найдено три ссылки, которые ведут на несуществующие страницы', severity: 'warning', status: 'pending', articleId: 'art-007', createdAt: '2026-10-07T08:12:00Z', resolvedAt: null, assignee: 'Сидоров К.', tags: ['ссылки', 'качество'] },
  { id: 'mod-005', title: 'Фото без авторства', description: 'К изображению не указан источник, нужна подпись или замена', severity: 'warning', status: 'inProgress', articleId: 'art-009', createdAt: '2026-10-07T07:55:00Z', resolvedAt: null, assignee: 'Петрова М.', tags: ['изображения', 'права'] },
  { id: 'mod-006', title: 'Оскорбления в обсуждении', description: 'Двое пользователей нарушают правила общения, нужна блокировка', severity: 'critical', status: 'pending', articleId: 'art-008', createdAt: '2026-10-07T08:46:00Z', resolvedAt: null, assignee: 'Иванов А.', tags: ['комментарии', 'правила'] },
  { id: 'mod-007', title: 'Проверка перед публикацией', description: 'Интервью отправлено на финальную вычитку редактором', severity: 'info', status: 'inProgress', articleId: 'art-005', createdAt: '2026-10-07T07:05:00Z', resolvedAt: null, assignee: 'Козлова Е.', tags: ['вычитка'] },
  { id: 'mod-008', title: 'Опечатки в тексте', description: 'Найдены ошибки в заголовке и двух абзацах', severity: 'warning', status: 'done', articleId: 'art-001', createdAt: '2026-10-06T21:20:00Z', resolvedAt: '2026-10-06T22:05:00Z', assignee: 'Сидоров К.', tags: ['корректура'] },
  { id: 'mod-009', title: 'Устаревшая информация', description: 'В статье указаны цены прошлого года, нужно обновить данные', severity: 'info', status: 'pending', articleId: 'art-012', createdAt: '2026-10-07T05:00:00Z', resolvedAt: null, assignee: 'Петрова М.', tags: ['актуальность'] },
  { id: 'mod-010', title: 'Рекламная ссылка без пометки', description: 'Партнёрская ссылка не отмечена как реклама', severity: 'warning', status: 'done', articleId: 'art-015', createdAt: '2026-10-06T18:10:00Z', resolvedAt: '2026-10-06T18:50:00Z', assignee: 'Иванов А.', tags: ['реклама', 'закон'] },
  { id: 'mod-011', title: 'Слишком длинный заголовок', description: 'Заголовок не помещается в сниппет поисковой выдачи', severity: 'info', status: 'done', articleId: 'art-006', createdAt: '2026-10-06T14:30:00Z', resolvedAt: '2026-10-06T15:10:00Z', assignee: 'Сидоров К.', tags: ['заголовок', 'seo'] },
  { id: 'mod-012', title: 'Неверная категория', description: 'Материал о релизе размещён в разделе «Гайды», а должен быть в «Новостях»', severity: 'warning', status: 'done', articleId: 'art-014', createdAt: '2026-10-06T12:00:00Z', resolvedAt: '2026-10-06T13:20:00Z', assignee: 'Козлова Е.', tags: ['категории'] },
];

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const validators = {
  title(value, context) {
    const text = value.trim();
    if (!text) return 'Укажите заголовок';
    if (text.length < 3) return 'Минимум 3 символа';
    if (text.length > 80) return 'Максимум 80 символов';
    if (context.titles.includes(text.toLowerCase())) return 'Статья с таким заголовком уже есть';
    return '';
  },
  slug(value, context) {
    const text = value.trim();
    if (!text) return 'Укажите адрес страницы';
    if (text.length < 3) return 'Минимум 3 символа';
    if (!SLUG_PATTERN.test(text)) return 'Только строчные латинские буквы, цифры и дефис, например: new-release';
    if (context.slugs.includes(text)) return 'Этот адрес уже занят';
    return '';
  },
  category: (value) => (value ? '' : 'Выберите категорию'),
  email(value) {
    const text = value.trim();
    if (!text) return 'Укажите email автора';
    if (text.length > 60) return 'Максимум 60 символов';
    if (!EMAIL_PATTERN.test(text)) return 'Неверный формат email, пример: name@company.com';
    return '';
  },
  excerpt: (value) => (value.length > 160 ? 'Максимум 160 символов' : ''),
};

const dateFormatter = new Intl.DateTimeFormat('ru-RU', { dateStyle: 'short', timeStyle: 'short', timeZone: 'UTC' });

const ARTICLE_STATUS = { published: 'Опубликовано', review: 'На модерации', draft: 'Черновик', archived: 'В архиве' };
const CASE_STATUS = { pending: 'Ожидает', inProgress: 'В работе', done: 'Решено' };
const PRIORITY = { high: 'Высокий', medium: 'Средний', low: 'Низкий' };
const CATEGORY_LABELS = { news: 'Новости', tech: 'Технологии', guides: 'Гайды', reviews: 'Обзоры', interviews: 'Интервью', company: 'О компании' };
const SEVERITY_PRIORITY = { critical: 'high', warning: 'medium', info: 'low' };
const TABLE_COLUMNS = [['title', 'Заголовок'], ['category', 'Категория'], ['author', 'Автор'], ['priority', 'Приоритет'], ['status', 'Статус'], ['updatedAt', 'Изменено']];

const makeElement = (tag, { text, cls, attrs = {} } = {}, children = []) => {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (text !== undefined) node.textContent = text;
  for (const [name, value] of Object.entries(attrs)) node.setAttribute(name, value);
  node.append(...children);
  return node;
};

const renderTime = (iso) => makeElement('time', { text: `${dateFormatter.format(new Date(iso))} UTC`, attrs: { datetime: iso } });
const renderBadge = (kind, label) => makeElement('span', { text: label, cls: `badge badge--${kind}` });
const renderPriority = (level) =>
  makeElement('span', { text: PRIORITY[level], cls: `priority priority--${level}`, attrs: { title: `Приоритет: ${PRIORITY[level].toLowerCase()}` } });

const renderMeter = (label, value, { low, high }) =>
  makeElement('p', { cls: 'meter' }, [
    makeElement('span', { text: label, cls: 'meter__label' }),
    makeElement('meter', { attrs: { min: 0, max: 100, low, high, optimum: 100, value, 'aria-label': `${label} ${value}%` } }),
    makeElement('span', { text: `${value}%`, cls: 'meter__value' }),
  ]);

const renderTags = (tags) => makeElement('ul', { cls: 'tags' }, tags.map((tag) => makeElement('li', { text: tag })));
const renderFields = (pairs) =>
  makeElement('dl', { cls: 'fields' }, pairs.flatMap(([name, value]) => [makeElement('dt', { text: name }), makeElement('dd', {}, [value])]));

const renderSummary = (articleList, caseList) => {
  const items = [
    ['Опубликовано', articleList.filter((a) => a.status === 'published').length, 'success'],
    ['На модерации', articleList.filter((a) => a.status === 'review').length, 'warning'],
    ['Черновиков', articleList.filter((a) => a.status === 'draft').length, 'info'],
    ['Жалоб в ожидании', caseList.filter((c) => c.status === 'pending').length, 'danger'],
  ];
  return makeElement('ul', { cls: 'summary' }, items.map(([label, value, kind]) =>
    makeElement('li', { cls: `summary__item summary__item--${kind}` }, [
      makeElement('strong', { text: String(value), cls: 'summary__value', attrs: { 'data-count': value } }),
      makeElement('span', { text: label }),
    ])));
};

const renderArticleCard = (article, stat, index = 0) =>
  makeElement('article', { cls: `card card--${article.status}`, attrs: { 'data-kind': 'article', 'data-id': article.id, style: `--i:${index}` } }, [
    makeElement('header', { cls: 'card__head' }, [
      makeElement('p', { text: article.id, cls: 'card__id' }),
      makeElement('h3', {}, [makeElement('button', { text: article.title, cls: 'link-btn', attrs: { type: 'button' } })]),
      renderBadge(article.status, ARTICLE_STATUS[article.status]),
    ]),
    makeElement('p', { text: article.excerpt, cls: 'card__desc' }),
    renderFields([['Категория', CATEGORY_LABELS[article.category]], ['Адрес', `/${article.slug}`], ['Объём', `${article.stats.words} слов`]]),
    renderMeter('SEO', stat.seoScore, stat.thresholds),
    renderMeter('Читаем.', stat.readability, stat.thresholds),
    makeElement('footer', { cls: 'card__meta' }, [
      renderTime(article.updatedAt),
      makeElement('span', { text: `Автор: ${article.author}` }),
      renderPriority(article.priority),
      renderTags(article.tags),
    ]),
  ]);

const renderArticleCards = (articleList, statList) =>
  makeElement('div', { cls: 'cards' }, articleList.map((article, index) => renderArticleCard(article, statList.find((s) => s.articleId === article.id), index)));

const tableCell = (label, content) => makeElement('td', { attrs: { 'data-label': label } }, [content]);

const renderArticlesTable = (articleList, sort) => {
  const ariaSort = (key) => (sort.key === key ? (sort.dir === 'asc' ? 'ascending' : 'descending') : 'none');
  const table = makeElement('table', { cls: 'table' }, [
    makeElement('caption', { text: 'Реестр статей' }),
    makeElement('thead', {}, [makeElement('tr', {}, TABLE_COLUMNS.map(([key, label]) =>
      makeElement('th', { attrs: { scope: 'col', 'aria-sort': ariaSort(key) } }, [
        makeElement('button', { text: label, cls: 'sort-btn', attrs: { type: 'button', 'data-sort': key } }),
      ])))]),
    makeElement('tbody', {}, articleList.map((article) =>
      makeElement('tr', { attrs: { 'data-kind': 'article', 'data-id': article.id } }, [
        makeElement('th', { attrs: { scope: 'row' } }, [makeElement('button', { text: article.title, cls: 'link-btn', attrs: { type: 'button' } })]),
        tableCell('Категория', CATEGORY_LABELS[article.category]),
        tableCell('Автор', article.author),
        tableCell('Приоритет', renderPriority(article.priority)),
        tableCell('Статус', renderBadge(article.status, ARTICLE_STATUS[article.status])),
        tableCell('Изменено', renderTime(article.updatedAt)),
      ]))),
  ]);
  return makeElement('div', { cls: 'table-wrap' }, [table]);
};

const renderCaseCard = (moderationCase, article, index = 0) =>
  makeElement('article', { cls: `card alert alert--${moderationCase.severity}`, attrs: { 'data-kind': 'case', 'data-id': moderationCase.id, style: `--i:${index}` } }, [
    makeElement('header', { cls: 'card__head' }, [
      makeElement('p', { text: moderationCase.id, cls: 'card__id' }),
      makeElement('h3', {}, [makeElement('button', { text: moderationCase.title, cls: 'link-btn', attrs: { type: 'button' } })]),
      renderBadge(moderationCase.status, CASE_STATUS[moderationCase.status]),
    ]),
    makeElement('p', { text: moderationCase.description, cls: 'card__desc' }),
    renderFields([['Статья', article ? article.title : 'неизвестно']]),
    makeElement('footer', { cls: 'card__meta' }, [
      renderTime(moderationCase.createdAt),
      makeElement('span', { text: `Модератор: ${moderationCase.assignee}` }),
      renderPriority(SEVERITY_PRIORITY[moderationCase.severity]),
      renderTags(moderationCase.tags),
    ]),
  ]);

const renderCaseList = (caseList, articleList) =>
  makeElement('ol', { cls: 'alerts' }, caseList.map((moderationCase, index) =>
    makeElement('li', {}, [renderCaseCard(moderationCase, articleList.find((a) => a.id === moderationCase.articleId), index)])));

const renderArticleDetails = (article, stat, relatedCases) =>
  makeElement('section', { cls: 'details' }, [
    makeElement('p', { text: article.excerpt }),
    renderFields([
      ['Статус', renderBadge(article.status, ARTICLE_STATUS[article.status])],
      ['Приоритет', renderPriority(article.priority)],
      ['Категория', CATEGORY_LABELS[article.category]],
      ['Автор', article.author],
      ['Адрес', `/${article.slug}`],
      ['Объём', `${article.stats.words} слов, ${article.stats.readMinutes} мин чтения, изображений: ${article.stats.images}`],
      ['Просмотры', String(stat.views)],
      ['Последнее изменение', renderTime(article.updatedAt)],
    ]),
    renderMeter('SEO', stat.seoScore, stat.thresholds),
    renderMeter('Читаем.', stat.readability, stat.thresholds),
    makeElement('h3', { text: 'Просмотры за последние 5 дней' }),
    makeElement('ol', { cls: 'history' }, stat.viewsHistory.map((value) => makeElement('li', { text: String(value) }))),
    makeElement('h3', { text: 'Обращения по модерации' }),
    relatedCases.length
      ? makeElement('ul', { cls: 'related' }, relatedCases.map((item) => makeElement('li', {}, [`${item.title} `, renderBadge(item.status, CASE_STATUS[item.status])])))
      : renderEmpty('Обращений по этой статье нет.'),
    renderTags(article.tags),
  ]);

const renderCaseDetails = (moderationCase, article) =>
  makeElement('section', { cls: 'details' }, [
    makeElement('p', { text: moderationCase.description }),
    renderFields([
      ['Статус', renderBadge(moderationCase.status, CASE_STATUS[moderationCase.status])],
      ['Приоритет', renderPriority(SEVERITY_PRIORITY[moderationCase.severity])],
      ['Статья', article ? `${article.title} (/${article.slug})` : 'неизвестно'],
      ['Модератор', moderationCase.assignee],
      ['Создано', renderTime(moderationCase.createdAt)],
      ['Решено', moderationCase.resolvedAt ? renderTime(moderationCase.resolvedAt) : 'ещё не решено'],
    ]),
    renderTags(moderationCase.tags),
  ]);

const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
const makeSvgElement = (tag, attrs) => {
  const node = document.createElementNS(SVG_NAMESPACE, tag);
  for (const [name, value] of Object.entries(attrs)) node.setAttribute(name, value);
  return node;
};

const renderEmptyIcon = () => {
  const svg = makeSvgElement('svg', { viewBox: '0 0 64 64', fill: 'none', stroke: 'currentColor', 'stroke-width': 3, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'aria-hidden': 'true', focusable: 'false' });
  svg.append(
    makeSvgElement('rect', { x: 12, y: 8, width: 40, height: 48, rx: 4 }),
    makeSvgElement('path', { d: 'M20 22h24M20 32h24M20 42h14' }),
  );
  return svg;
};

const renderEmpty = (title, hint) =>
  makeElement('div', { cls: 'empty' }, [renderEmptyIcon(), makeElement('p', { text: title, cls: 'empty__title' }), ...(hint ? [makeElement('p', { text: hint, cls: 'empty__hint' })] : [])]);

const skeletonBar = (width, height = 14) => makeElement('span', { cls: 'skeleton', attrs: { style: `width:${width};height:${height}px` } });
const renderSkeletonCard = () => makeElement('article', { cls: 'card card--skeleton' }, [skeletonBar('35%'), skeletonBar('70%', 22), skeletonBar('100%'), skeletonBar('100%'), skeletonBar('55%')]);

const renderSkeleton = (kind, count = 6) => {
  const cards = Array.from({ length: count }, renderSkeletonCard);
  const body = kind === 'summary'
    ? makeElement('ul', { cls: 'summary', attrs: { 'aria-hidden': 'true' } }, Array.from({ length: 4 }, () => makeElement('li', { cls: 'summary__item' }, [skeletonBar('60%', 32), skeletonBar('80%')])))
    : kind === 'list'
      ? makeElement('ol', { cls: 'alerts', attrs: { 'aria-hidden': 'true' } }, cards.map((card) => makeElement('li', {}, [card])))
      : makeElement('div', { cls: 'cards', attrs: { 'aria-hidden': 'true' } }, cards);
  return makeElement('div', {}, [makeElement('p', { text: 'Загрузка данных…', cls: 'sr-only' }), body]);
};

const renderPageItem = (label, page, { current = false, disabled = false, name } = {}) =>
  makeElement('li', {}, [disabled
    ? makeElement('span', { text: label, cls: 'page-link is-disabled', attrs: { 'aria-disabled': 'true' } })
    : makeElement('a', { text: label, cls: 'page-link', attrs: { href: `?page=${page}`, 'data-page': page, ...(name ? { 'aria-label': name } : {}), ...(current ? { 'aria-current': 'page' } : {}) } })]);

const renderPagination = (page, pages) =>
  makeElement('ul', { cls: 'pagination' }, [
    renderPageItem('Назад', page - 1, { disabled: page <= 1 }),
    ...Array.from({ length: pages }, (_, index) => renderPageItem(String(index + 1), index + 1, { current: index + 1 === page, name: `Страница ${index + 1}` })),
    renderPageItem('Вперёд', page + 1, { disabled: page >= pages }),
  ]);

const renderToast = (message, kind = 'info') =>
  makeElement('div', { cls: `toast toast--${kind}` }, [
    makeElement('p', { text: message, cls: 'toast__text' }),
    makeElement('button', { text: '\u00d7', cls: 'btn btn--ghost btn--icon toast__close', attrs: { type: 'button', 'aria-label': 'Закрыть уведомление' } }),
  ]);

const root = document.documentElement;
const THEMES = ['light', 'dark', 'contrast'];
const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const FOCUSABLE_SELECTOR = 'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

const storage = {
  get: (key) => { try { return localStorage.getItem(key); } catch { return null; } },
  set: (key, value) => { try { localStorage.setItem(key, value); } catch {} },
  remove: (key) => { try { localStorage.removeItem(key); } catch {} },
};

const hexToRgb = (hex) => {
  const match = /^#?([0-9a-f]{6})$/i.exec(hex);
  if (!match) return null;
  const number = parseInt(match[1], 16);
  return [(number >> 16) & 255, (number >> 8) & 255, number & 255];
};
const rgbToHex = ([r, g, b]) => `#${[r, g, b].map((channel) => channel.toString(16).padStart(2, '0')).join('')}`;
const relativeLuminance = ([r, g, b]) => {
  const linear = (channel) => { channel /= 255; return channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4; };
  return 0.2126 * linear(r) + 0.7152 * linear(g) + 0.0722 * linear(b);
};
const textColorForAccent = (rgb) => (relativeLuminance(rgb) > 0.179 ? '#0b1320' : '#ffffff');

let themeTransitionTimer;
function withThemeTransition(change) {
  if (prefersReducedMotion()) { change(); return; }
  root.classList.add('theme-transition');
  change();
  clearTimeout(themeTransitionTimer);
  themeTransitionTimer = setTimeout(() => root.classList.remove('theme-transition'), 400);
}

const getSavedTheme = () => { const theme = storage.get('theme'); return THEMES.includes(theme) ? theme : 'auto'; };
const resolveTheme = (choice) => (choice === 'auto' ? (systemDarkMode.matches ? 'dark' : 'light') : choice);

function setTheme(choice) {
  if (choice === 'auto') storage.remove('theme'); else storage.set('theme', choice);
  withThemeTransition(() => root.setAttribute('data-theme', resolveTheme(choice)));
}

const readAccentFromCss = () => {
  const styles = getComputedStyle(root);
  return ['--accent-r', '--accent-g', '--accent-b'].map((name) => Number(styles.getPropertyValue(name)));
};

function setAccent(hex) {
  const rgb = hexToRgb(hex);
  if (!rgb) return;
  const [r, g, b] = rgb;
  const textColor = textColorForAccent(rgb);
  withThemeTransition(() => {
    root.style.setProperty('--accent-r', r);
    root.style.setProperty('--accent-g', g);
    root.style.setProperty('--accent-b', b);
    root.style.setProperty('--on-accent', textColor);
  });
  storage.set('accent', JSON.stringify({ hex, r, g, b, on: textColor }));
}

function resetAccent() {
  withThemeTransition(() => ['--accent-r', '--accent-g', '--accent-b', '--on-accent'].forEach((name) => root.style.removeProperty(name)));
  storage.remove('accent');
}

function initTheme() {
  const themeSelect = document.getElementById('theme-select');
  const accentPicker = document.getElementById('accent');
  const accentHexOutput = document.getElementById('accent-hex');
  const accentResetButton = document.getElementById('accent-reset');
  const themeMenu = document.getElementById('theme-menu');

  const syncAccentPicker = () => {
    const customAccent = storage.get('accent');
    const hex = customAccent ? JSON.parse(customAccent).hex : rgbToHex(readAccentFromCss());
    accentPicker.value = hex;
    accentHexOutput.textContent = hex.toUpperCase();
    accentResetButton.disabled = !customAccent;
  };

  themeSelect.value = getSavedTheme();
  syncAccentPicker();

  themeSelect.addEventListener('change', () => { setTheme(themeSelect.value); syncAccentPicker(); });
  accentPicker.addEventListener('input', () => { setAccent(accentPicker.value); syncAccentPicker(); });
  accentResetButton.addEventListener('click', () => { resetAccent(); syncAccentPicker(); accentPicker.focus(); });

  systemDarkMode.addEventListener('change', () => {
    if (getSavedTheme() !== 'auto') return;
    withThemeTransition(() => root.setAttribute('data-theme', resolveTheme('auto')));
    syncAccentPicker();
  });

  document.addEventListener('click', (event) => { if (themeMenu.open && !themeMenu.contains(event.target)) themeMenu.open = false; });
  themeMenu.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && themeMenu.open) { themeMenu.open = false; themeMenu.querySelector('summary').focus(); }
  });
}

const debounce = (callback, delay) => {
  let timeoutId;
  return (...args) => { clearTimeout(timeoutId); timeoutId = setTimeout(() => callback(...args), delay); };
};

function initTabs(tablist, onSelect) {
  const tabs = [...tablist.querySelectorAll('[role="tab"]')];
  const selectTab = (selectedTab, focus = false) => {
    tabs.forEach((tab) => {
      const isActive = tab === selectedTab;
      tab.setAttribute('aria-selected', String(isActive));
      tab.tabIndex = isActive ? 0 : -1;
    });
    if (focus) selectedTab.focus();
    onSelect(selectedTab);
  };
  tablist.addEventListener('click', (event) => {
    const tab = event.target.closest('[role="tab"]');
    if (tab) selectTab(tab);
  });
  tablist.addEventListener('keydown', (event) => {
    const index = tabs.indexOf(document.activeElement);
    if (index < 0) return;
    const nextIndex = { ArrowRight: (index + 1) % tabs.length, ArrowLeft: (index - 1 + tabs.length) % tabs.length, Home: 0, End: tabs.length - 1 }[event.key];
    if (nextIndex === undefined) return;
    event.preventDefault();
    selectTab(tabs[nextIndex], true);
  });
  selectTab(tabs.find((tab) => tab.getAttribute('aria-selected') === 'true') ?? tabs[0]);
}

function createToastManager(container, { liveRegion, maxToasts = 3, lifetime = 4500 } = {}) {
  const supportsPopover = typeof container.showPopover === 'function';
  const removeToast = (toastNode) => {
    if (!toastNode.isConnected) return;
    toastNode.classList.add('is-leaving');
    setTimeout(() => {
      toastNode.remove();
      if (!container.children.length && supportsPopover) { try { container.hidePopover(); } catch {} }
    }, prefersReducedMotion() ? 0 : 200);
  };
  container.addEventListener('click', (event) => {
    const closeButton = event.target.closest('.toast__close');
    if (closeButton) removeToast(closeButton.closest('.toast'));
  });
  return (message, kind = 'info') => {
    while (container.children.length >= maxToasts) container.firstElementChild.remove();
    const toastNode = renderToast(message, kind);
    container.append(toastNode);
    if (supportsPopover) {
      try { if (container.matches(':popover-open')) container.hidePopover(); container.showPopover(); } catch {}
    }
    if (liveRegion) { liveRegion.textContent = ''; setTimeout(() => { liveRegion.textContent = message; }, 50); }
    setTimeout(() => removeToast(toastNode), lifetime);
  };
}

function createDialogController(dialog, { onClose } = {}) {
  let openerButton = null;
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog || event.target.closest('[data-close]')) dialog.close();
  });
  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') { event.preventDefault(); dialog.close(); return; }
    if (event.key !== 'Tab') return;
    const focusable = [...dialog.querySelectorAll(FOCUSABLE_SELECTOR)];
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });
  dialog.addEventListener('close', () => {
    root.classList.remove('scroll-locked');
    openerButton?.focus();
    onClose?.();
  });
  return {
    open(trigger) {
      openerButton = trigger ?? document.activeElement;
      root.classList.add('scroll-locked');
      dialog.showModal();
    },
    close: () => dialog.close(),
  };
}

function animateCounters(container, duration = 800) {
  container.querySelectorAll('[data-count]').forEach((node) => {
    const target = Number(node.dataset.count);
    if (prefersReducedMotion() || target === 0) { node.textContent = String(target); return; }
    const startTime = performance.now();
    node.textContent = '0';
    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      node.textContent = String(Math.round(target * (1 - (1 - progress) ** 3)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}

function initArticleForm(form, { getContext, onSubmit }) {
  const fields = [...form.querySelectorAll('[data-validate]')];
  const counter = form.querySelector('#f-excerpt-count');
  const validationTimers = new Map();

  const updateCounter = () => { counter.textContent = `${form.elements.excerpt.value.length} / 160`; };

  function showValidationResult(input, message) {
    const errorNode = form.querySelector(`#${input.id}-error`);
    errorNode.textContent = message;
    errorNode.hidden = !message;
    input.setAttribute('aria-invalid', String(Boolean(message)));
    input.classList.toggle('is-invalid', Boolean(message));
  }

  function validateField(input) {
    const message = validators[input.name](input.value, getContext());
    showValidationResult(input, message);
    return !message;
  }

  form.addEventListener('input', (event) => {
    const input = event.target.closest('[data-validate]');
    if (!input) return;
    if (input.name === 'excerpt') updateCounter();
    clearTimeout(validationTimers.get(input));
    validationTimers.set(input, setTimeout(() => validateField(input), 350));
  });

  form.addEventListener('focusout', (event) => {
    const input = event.target.closest('[data-validate]');
    if (!input || event.relatedTarget?.closest?.('[data-close]')) return;
    clearTimeout(validationTimers.get(input));
    validateField(input);
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const invalidFields = fields.filter((field) => !validateField(field));
    if (invalidFields.length) { invalidFields[0].focus(); return; }
    onSubmit(Object.fromEntries(new FormData(form)));
  });

  return {
    reset() {
      validationTimers.forEach((timerId) => clearTimeout(timerId));
      form.reset();
      fields.forEach((field) => showValidationResult(field, ''));
      updateCounter();
    },
  };
}

const byId = (id) => document.getElementById(id);
const PAGE_SIZE = 6;
const PRIORITY_RANK = { high: 3, medium: 2, low: 1 };
const newestFirst = (a, b) => b.createdAt.localeCompare(a.createdAt);

function getPageFromUrl() {
  const page = Number(new URLSearchParams(location.search).get('page'));
  return Number.isInteger(page) && page > 0 ? page : 1;
}

const state = {
  query: '',
  status: 'all',
  category: 'all',
  priorities: new Set(['high', 'medium', 'low']),
  view: 'cards',
  sort: { key: 'updatedAt', dir: 'desc' },
  page: getPageFromUrl(),
  loaded: false,
};
const DEFAULT_SORT = { key: 'updatedAt', dir: 'desc' };
let lastRenderKey = '';
let activeTab = null;

function syncPageInUrl(historyMethod) {
  const url = new URL(location.href);
  if (state.page > 1) url.searchParams.set('page', state.page); else url.searchParams.delete('page');
  if (url.href === location.href) return;
  try { history[historyMethod]({ page: state.page }, '', url); } catch {}
}

const showToast = createToastManager(byId('toasts'), { liveRegion: byId('live') });

function getSortValue(article, key) {
  if (key === 'priority') return PRIORITY_RANK[article.priority];
  if (key === 'category') return CATEGORY_LABELS[article.category];
  return article[key];
}

function getVisibleArticles() {
  const query = state.query;
  return articles
    .filter((article) => state.status === 'all' || article.status === state.status)
    .filter((article) => state.category === 'all' || article.category === state.category)
    .filter((article) => state.priorities.has(article.priority))
    .filter((article) => !query || [article.title, article.slug, article.excerpt, article.author, CATEGORY_LABELS[article.category], ...article.tags].some((value) => value.toLowerCase().includes(query)))
    .sort((a, b) => {
      const first = getSortValue(a, state.sort.key), second = getSortValue(b, state.sort.key);
      const result = typeof first === 'number' ? first - second : String(first).localeCompare(String(second), 'ru', { numeric: true });
      return state.sort.dir === 'asc' ? result : -result;
    });
}

function renderArticles({ focusSort, focusPage, force } = {}) {
  if (!state.loaded) return;
  const list = getVisibleArticles();
  const pages = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
  state.page = Math.min(Math.max(1, state.page), pages);
  const pageItems = list.slice((state.page - 1) * PAGE_SIZE, state.page * PAGE_SIZE);

  byId('result-count').textContent = list.length
    ? `Найдено: ${list.length} из ${articles.length}. Страница ${state.page} из ${pages}`
    : 'Ничего не найдено';
  byId('reset').disabled = !(state.query || state.status !== 'all' || state.category !== 'all' || state.priorities.size !== 3 || state.view !== 'cards');

  const renderKey = [state.view, state.sort.key, state.sort.dir, state.page, pages, pageItems.map((a) => a.id + a.status).join()].join('|');
  if (force || renderKey !== lastRenderKey) {
    lastRenderKey = renderKey;
    const view = !pageItems.length ? renderEmpty('Статьи не найдены', 'Измените запрос или сбросьте фильтры.')
      : state.view === 'cards' ? renderArticleCards(pageItems, articleStats) : renderArticlesTable(pageItems, state.sort);
    byId('article-view').replaceChildren(view);
    byId('pagination').hidden = pages <= 1;
    byId('pagination').replaceChildren(...(pages > 1 ? [renderPagination(state.page, pages)] : []));
  }
  if (focusSort) byId('article-view').querySelector(`[data-sort="${focusSort}"]`)?.focus();
  if (focusPage) byId('pagination').querySelector('[aria-current="page"]')?.focus({ preventScroll: true });
}

function readFilters() {
  const form = byId('filters');
  state.query = byId('q').value.trim().toLowerCase();
  state.status = byId('status').value;
  state.category = byId('category').value;
  state.priorities = new Set([...form.querySelectorAll('input[name="priority"]:checked')].map((input) => input.value));
  state.view = form.querySelector('input[name="view"]:checked').value;
}

function applyFilters() {
  readFilters();
  state.page = 1;
  syncPageInUrl('replaceState');
  renderArticles();
}
const applyFiltersDebounced = debounce(applyFilters, 200);

byId('filters').addEventListener('input', (event) => (event.target.id === 'q' ? applyFiltersDebounced() : applyFilters()));
byId('filters').addEventListener('reset', () => {
  state.sort = { ...DEFAULT_SORT };
  setTimeout(() => { applyFilters(); byId('q').focus(); }, 0);
});
byId('filters').addEventListener('submit', (event) => event.preventDefault());

byId('article-view').addEventListener('click', (event) => {
  const sortButton = event.target.closest('[data-sort]');
  if (!sortButton) return;
  const key = sortButton.dataset.sort;
  state.sort = { key, dir: state.sort.key === key && state.sort.dir === 'asc' ? 'desc' : 'asc' };
  renderArticles({ focusSort: key });
});

byId('pagination').addEventListener('click', (event) => {
  const link = event.target.closest('a[data-page]');
  if (!link) return;
  event.preventDefault();
  state.page = Number(link.dataset.page);
  syncPageInUrl('pushState');
  renderArticles({ focusPage: true });
  byId('articles').scrollIntoView({ block: 'start' });
});
window.addEventListener('popstate', () => { state.page = getPageFromUrl(); renderArticles(); });

const countCases = (status) => (status === 'all' ? moderationCases.length : moderationCases.filter((item) => item.status === status).length);

function renderCaseTab() {
  if (!state.loaded || !activeTab) return;
  const status = activeTab.dataset.status;
  const list = moderationCases.filter((item) => status === 'all' || item.status === status).sort(newestFirst);
  const panel = byId('tabpanel');
  panel.setAttribute('aria-labelledby', activeTab.id);
  panel.replaceChildren(list.length ? renderCaseList(list, articles) : renderEmpty('Обращений нет', 'В этой категории пока ничего не найдено.'));
}

initTabs(byId('tablist'), (tab) => { activeTab = tab; renderCaseTab(); });

const detailDialog = createDialogController(byId('modal'));
let openedItem = null;

function openDetails(kind, id, trigger) {
  const body = byId('modal-body');
  if (kind === 'article') {
    const article = articles.find((item) => item.id === id);
    byId('modal-title').textContent = article.title;
    body.replaceChildren(renderArticleDetails(article, articleStats.find((s) => s.articleId === id), moderationCases.filter((c) => c.articleId === id)));
  } else {
    const moderationCase = moderationCases.find((item) => item.id === id);
    byId('modal-title').textContent = moderationCase.title;
    body.replaceChildren(renderCaseDetails(moderationCase, articles.find((a) => a.id === moderationCase.articleId)));
  }
  openedItem = { id };
  detailDialog.open(trigger);
}

document.addEventListener('click', (event) => {
  if (event.target.closest('dialog')) return;
  const item = event.target.closest('[data-kind]');
  if (item && !item.classList.contains('card--skeleton')) openDetails(item.dataset.kind, item.dataset.id, item.querySelector('.link-btn'));
});

byId('modal-copy').addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(openedItem.id); showToast(`ID ${openedItem.id} скопирован`, 'success'); }
  catch { showToast('Не удалось скопировать ID', 'error'); }
});

const formDialog = createDialogController(byId('form-modal'), { onClose: () => articleForm.reset() });
const articleForm = initArticleForm(byId('article-form'), {
  getContext: () => ({ titles: articles.map((a) => a.title.toLowerCase()), slugs: articles.map((a) => a.slug) }),
  onSubmit: addArticle,
});
byId('add-article').addEventListener('click', (event) => formDialog.open(event.currentTarget));

function addArticle(data) {
  const nextNumber = Math.max(...articles.map((a) => Number(a.id.slice(4)))) + 1;
  const paddedNumber = String(nextNumber).padStart(3, '0');
  const now = new Date().toISOString();
  const title = data.title.trim();
  articles.push({
    id: `art-${paddedNumber}`, title,
    excerpt: data.excerpt.trim() || `Новая статья в категории «${CATEGORY_LABELS[data.category]}»`,
    slug: data.slug.trim(), category: data.category, status: 'draft', author: data.email.trim(),
    updatedAt: now, priority: 'medium', stats: { words: 0, readMinutes: 0, images: 0 },
    tags: ['новая', CATEGORY_LABELS[data.category].toLowerCase()],
  });
  articleStats.push({ id: `stat-${paddedNumber}`, articleId: `art-${paddedNumber}`, seoScore: 0, readability: 0, views: 0, viewsHistory: [0, 0, 0, 0, 0], thresholds: { low: 40, high: 70 } });
  formDialog.close();
  const index = getVisibleArticles().findIndex((a) => a.title === title);
  if (index >= 0) { state.page = Math.floor(index / PAGE_SIZE) + 1; syncPageInUrl('pushState'); }
  showSummary();
  renderArticles({ force: true });
  showToast(`Статья «${title}» добавлена как черновик`, 'success');
}

const BUSY_BLOCKS = ['summary', 'article-view', 'moderation-panel', 'tabpanel'];

function showSummary() {
  byId('summary').replaceChildren(renderSummary(articles, moderationCases));
  animateCounters(byId('summary'));
}

function showSkeletons() {
  BUSY_BLOCKS.forEach((id) => byId(id).setAttribute('aria-busy', 'true'));
  byId('summary').replaceChildren(renderSkeleton('summary'));
  byId('article-view').replaceChildren(renderSkeleton('cards'));
  byId('moderation-panel').replaceChildren(renderSkeleton('list', 3));
  byId('tabpanel').replaceChildren(renderSkeleton('list', 3));
}

function finishLoading() {
  state.loaded = true;
  showSummary();
  byId('moderation-panel').replaceChildren(renderCaseList(moderationCases.filter((c) => c.status !== 'done').sort(newestFirst), articles));
  document.querySelectorAll('.tab').forEach((tab) => { tab.querySelector('.tab__count').textContent = countCases(tab.dataset.status); });
  renderCaseTab();
  renderArticles({ force: true });
  syncPageInUrl('replaceState');
  BUSY_BLOCKS.forEach((id) => byId(id).setAttribute('aria-busy', 'false'));
}

const burgerButton = byId('burger');
const sidebar = byId('sidebar');
const isWideScreen = window.matchMedia('(min-width: 768px)');
const isMenuOpen = () => root.classList.contains('menu-open');

function setMenu(open, returnFocus = false) {
  root.classList.toggle('menu-open', open);
  burgerButton.setAttribute('aria-expanded', String(open));
  burgerButton.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
  if (open) sidebar.querySelector('a').focus();
  else if (returnFocus) burgerButton.focus();
}

burgerButton.addEventListener('click', () => setMenu(!isMenuOpen(), true));
byId('overlay').addEventListener('click', () => setMenu(false, true));
sidebar.addEventListener('click', (event) => { if (event.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && isMenuOpen()) setMenu(false, true); });
isWideScreen.addEventListener('change', (event) => { if (event.matches && isMenuOpen()) setMenu(false); });

initTheme();

const navLinks = [...sidebar.querySelectorAll('a[href^="#"]')];
const sectionObserver = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    navLinks.forEach((link) => link.removeAttribute('aria-current'));
    sidebar.querySelector(`a[href="#${entry.target.id}"]`)?.setAttribute('aria-current', 'true');
  }
}, { rootMargin: '-30% 0px -60% 0px' });
document.querySelectorAll('main section[id]').forEach((section) => sectionObserver.observe(section));

readFilters();
finishLoading();