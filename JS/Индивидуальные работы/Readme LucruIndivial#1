Инструкция по запуску проекта:

  📁 Инструкция по запуску проекта
  Убедитесь, что у вас установлен Node.js.

  Клонируйте репозиторий:

  git clone https://github.com/futoreqa/valentin.git
  cd valentin/JS/Индивидуальные работы/Индивидуальная работа №2.js
  Запустите проект:
  Откройте файл Индивидуальная работа №2.js в любом редакторе кода (например, VS Code).
  Запустите файл с помощью Node.js:
  node "Индивидуальная работа №2.js"

Описание лабораторной работы : 
  Цель лабораторной работы — реализовать и протестировать функциональность 
  анализа массива финансовых транзакций. Проект демонстрирует навыки работы с JavaScript, 
  включая обработку массивов, фильтрацию, агрегацию данных и работу с датами.

Краткая документация к проекту
  Структура транзакции
  Каждая транзакция — объект со следующими свойствами:
{
  transaction_id: string,           // Уникальный идентификатор
  transaction_date: string,         // Дата в формате YYYY-MM-DD
  transaction_amount: number,       // Сумма транзакции
  transaction_type: "debit"|"credit", // Тип: дебетовая или кредитная
  transaction_description: string,  // Описание
  merchant_name: string,            // Название продавца
  card_type: string                 // Тип карты (Visa, MasterCard и др.)
}
Перечень функций 
1. getUniqueTransactionTypes(transactions) Возвращает массив уникальных типов транзакций. Пример: ["debit", "credit"] 
2. calculateTotalAmount(transactions) Возвращает общую сумму всех транзакций. Пример: 370.0 
3. calculateTotalAmountByDate(transactions, year, month, day) Вычисляет сумму транзакций за указанную дату, месяц или год. 
4. getTransactionByType(transactions, type) Возвращает транзакции заданного типа ("debit" или "credit"). 
5. getTransactionsInDateRange(transactions, startDate, endDate) Фильтрует транзакции, попадающие в заданный диапазон дат. Формат дат: YYYY-MM-DD 
6. getTransactionsByMerchant(transactions, merchantName) Возвращает транзакции, совершённые у указанного продавца. 
7. calculateAverageTransactionAmount(transactions) Вычисляет среднюю сумму всех транзакций. Пример: 74.0 
8. getTransactionsByAmountRange(transactions, minAmount, maxAmount) Фильтрация по диапазону сумм. Пример: getTransactionsByAmountRange(transactions, 50, 100); 
9. calculateTotalDebitAmount(transactions) Возвращает сумму всех дебетовых транзакций. 
10. findMostTransactionsMonth(transactions) Возвращает месяц (в формате YYYY-MM), в который было больше всего транзакций. 
11. findMostDebitTransactionMonth(transactions) Возвращает месяц с наибольшим количеством дебетовых транзакций. 
12. mostTransactionTypes(transactions) Возвращает тип транзакции, который встречается чаще: "debit" "credit" "equal" — если их количество одинаково 
13. getTransactionsBeforeDate(transactions, date) Возвращает транзакции, совершённые до указанной даты. 
14. findTransactionById(transactions, id) Находит транзакцию по её идентификатору. Пример: js Копировать Редактировать findTransactionById(transactions, "3"); 
15. mapTransactionDescriptions(transactions) Возвращает массив строк — описаний транзакций.

Примеры использования проекта с приложением скриншотов или фрагментов кода
function getUniqueTransactionTypes(transactions) {
    return [...new Set(transactions.map(t => t.transaction_type))];
}

/**
 * Вычисляет общую сумму всех транзакций.
 * @param {Transaction[]} transactions - Массив транзакций
 * @returns {number} Общая сумма
 */
function calculateTotalAmount(transactions) {
    return transactions.reduce((sum, t) => sum + t.transaction_amount, 0);
}

/**
 * Вычисляет общую сумму транзакций за определённую дату.
 * @param {Transaction[]} transactions - Массив транзакций
 * @param {number} [year] - Год
 * @param {number} [month] - Месяц (1-12)
 * @param {number} [day] - День месяца
 * @returns {number} Общая сумма
 */
function calculateTotalAmountByDate(transactions, year, month, day) {
    return transactions
        .filter(t => {
            const d = new Date(t.transaction_date);
            return  (!year  || d.getFullYear() === year) &&
                    (!month || d.getMonth() + 1 === month) &&
                    (!day   || d.getDate() === day);
        })
        .reduce((sum, t) => sum + t.transaction_amount, 0);
}

/**
 * Возвращает транзакции определённого типа.
 * @param {Transaction[]} transactions - Массив транзакций
 * @param {string} type - Тип транзакции
 * @returns {Transaction[]} Отфильтрованные транзакции
 */
function getTransactionByType(transactions, type) {
    return transactions.filter(t => t.transaction_type === type);
}

/**
 * Возвращает транзакции в пределах заданного диапазона дат.
 * @param {Transaction[]} transactions - Массив транзакций
 * @param {string} startDate - Начальная дата (в формате YYYY-MM-DD)
 * @param {string} endDate - Конечная дата (в формате YYYY-MM-DD)
 * @returns {Transaction[]} Отфильтрованные транзакции
 */
function getTransactionsInDateRange(transactions, startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    return transactions.filter(t => {
        const d = new Date(t.transaction_date);
        return d >= start && d <= end;
    });
}

/**
 * Возвращает транзакции от указанного продавца.
 * @param {Transaction[]} transactions - Массив транзакций
 * @param {string} merchantName - Название продавца
 * @returns {Transaction[]} Отфильтрованные транзакции
 */
function getTransactionsByMerchant(transactions, merchantName) {
    return transactions.filter(t => t.merchant_name === merchantName);
}

/**
 * Вычисляет среднюю сумму транзакций.
 * @param {Transaction[]} transactions - Массив транзакций
 * @returns {number} Средняя сумма
 */
function calculateAverageTransactionAmount(transactions) {
    if (transactions.length === 0) return 0;
    return calculateTotalAmount(transactions) / transactions.length;
}

/**
 * Возвращает транзакции в заданном диапазоне сумм.
 * @param {Transaction[]} transactions - Массив транзакций
 * @param {number} minAmount - Минимальная сумма
 * @param {number} maxAmount - Максимальная сумма
 * @returns {Transaction[]} Отфильтрованные транзакции
 */
function getTransactionsByAmountRange(transactions, minAmount, maxAmount) {
    return transactions.filter(t =>
        t.transaction_amount >= minAmount && t.transaction_amount <= maxAmount
    );
}

/**
 * Вычисляет общую сумму дебетовых транзакций.
 * @param {Transaction[]} transactions - Массив транзакций
 * @returns {number} Сумма дебетовых транзакций
 */
function calculateTotalDebitAmount(transactions) {
    return transactions
        .filter(t => t.transaction_type === "debit")
        .reduce((sum, t) => sum + t.transaction_amount, 0);
}

/**
 * Находит месяц с наибольшим количеством транзакций.
 * @param {Transaction[]} transactions - Массив транзакций
 * @returns {string} Месяц в формате YYYY-MM
 */
function findMostTransactionsMonth(transactions) {
    const counts = {};
    transactions.forEach(t => {
        const month = new Date(t.transaction_date).toISOString().slice(0, 7);
        counts[month] = (counts[month] || 0) + 1;
    });
    return Object.entries(counts).reduce((a, b) => (b[1] > a[1] ? b : a))[0];
}

/**
 * Находит месяц с наибольшим количеством дебетовых транзакций.
 * @param {Transaction[]} transactions - Массив транзакций
 * @returns {string} Месяц в формате YYYY-MM
 */
function findMostDebitTransactionMonth(transactions) {
    const counts = {};
    transactions
        .filter(t => t.transaction_type === "debit")
        .forEach(t => {
            const month = new Date(t.transaction_date).toISOString().slice(0, 7);
            counts[month] = (counts[month] || 0) + 1;
        });
    return Object.entries(counts).reduce((a, b) => (b[1] > a[1] ? b : a))[0];
}

/**
 * Определяет, какого типа транзакций больше: debit или credit.
 * @param {Transaction[]} transactions - Массив транзакций
 * @returns {string} "debit", "credit" или "equal"
 */
function mostTransactionTypes(transactions) {
    const counts = { debit: 0, credit: 0 };
    transactions.forEach(t => {
        if      (t.transaction_type === "debit") counts.debit++;
        else if (t.transaction_type === "credit") counts.credit++;
    });

    if (counts.debit  > counts.credit) return "debit";
    if (counts.credit > counts.debit) return "credit";
    return "equal";
}

/**
 * Возвращает транзакции, совершённые до заданной даты.
 * @param {Transaction[]} transactions - Массив транзакций
 * @param {string} date - Граничная дата (в формате YYYY-MM-DD)
 * @returns {Transaction[]} Отфильтрованные транзакции
 */
function getTransactionsBeforeDate(transactions, date) {
    const cutoff = new Date(date);
    return transactions.filter(t => new Date(t.transaction_date) < cutoff);
}

/**
 * Ищет транзакцию по её идентификатору.
 * @param {Transaction[]} transactions - Массив транзакций
 * @param {string} id - Идентификатор транзакции
 * @returns {Transaction|undefined} Найденная транзакция или undefined
 */
function findTransactionById(transactions, id) {
    return transactions.find(t => t.transaction_id === id);
}

/**
 * Возвращает массив описаний транзакций.
 * @param {Transaction[]} transactions - Массив транзакций
 * @returns {string[]} Массив описаний
 */
function mapTransactionDescriptions(transactions) {
    return transactions.map(t => t.transaction_description);
}


Ответы на контрольные вопросы

1. Методы массивов для обработки объектов в JavaScript
При работе с массивами объектов в JavaScript часто используют следующие методы:
.forEach(callback) — перебирает каждый элемент массива без возврата нового массива. Используется для побочных эффектов.
.map(callback) — возвращает новый массив, содержащий результат применения callback к каждому элементу.
.filter(callback) — возвращает новый массив, содержащий только те элементы, для которых callback вернул true
.reduce(callback, initialValue) — агрегирует значения в одно, например, сумму всех транзакций.
.find(callback) — возвращает первый элемент, удовлетворяющий условию, либо undefined.
.some(callback) / .every(callback) — проверяет, удовлетворяют ли некоторые / все элементы условию. 
.sort(callback) — сортирует массив на месте, можно использовать для сортировки по дате или сумме.

2. Как сравнивать даты в строковом формате
Если даты представлены в формате ISO (например, "2024-05-20T10:00:00"), их можно сравнивать напрямую как строки или преобразовывать в объекты Date

3. Разница между .map(), .filter() и .reduce()
.map() — для преобразования каждого элемента. 
.filter() — для выбора нужных элементов.
.reduce() — для подсчёта или объединения всех элементов в одно значение.
















































P.S : НО ЭТО НЕ ТОЧНО
