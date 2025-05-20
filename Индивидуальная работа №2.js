// Шаг 1. Массив транзакций
const transactions = [
    {
        transaction_id: "1",
        transaction_date: "2019-01-01",
        transaction_amount: 100.0,
        transaction_type: "debit",
        transaction_description: "Payment for groceries",
        merchant_name: "SuperMart",
        card_type: "Visa",
    },
    {
        transaction_id: "2",
        transaction_date: "2019-01-02",
        transaction_amount: 50.0,
        transaction_type: "credit",
        transaction_description: "Refund for returned item",
        merchant_name: "OnlineShop",
        card_type: "MasterCard",
    },
    {
        transaction_id: "3",
        transaction_date: "2019-01-03",
        transaction_amount: 75.0,
        transaction_type: "debit",
        transaction_description: "Dinner with friends",
        merchant_name: "RestaurantABC",
        card_type: "Amex",
    },
    {
        transaction_id: "4",
        transaction_date: "2019-01-04",
        transaction_amount: 120.0,
        transaction_type: "debit",
        transaction_description: "Shopping at Mall",
        merchant_name: "FashionStoreXYZ",
        card_type: "Discover",
    },
    {
        transaction_id: "5",
        transaction_date: "2019-01-05",
        transaction_amount: 25.0,
        transaction_type: "credit",
        transaction_description: "Returned defective product",
        merchant_name: "ElectronicsShop",
        card_type: "Visa",
    }
];

/**
 * @typedef {Object} Transaction
 * @property {string} transaction_id - Уникальный идентификатор транзакции
 * @property {string} transaction_date - Дата транзакции в формате YYYY-MM-DD
 * @property {number} transaction_amount - Сумма транзакции
 * @property {string} transaction_type - Тип транзакции ("debit" или "credit")
 * @property {string} transaction_description - Описание транзакции
 * @property {string} merchant_name - Название продавца
 * @property {string} card_type - Тип карты
 */

/**
 * Возвращает уникальные типы транзакций.
 * @param {Transaction[]} transactions - Массив транзакций
 * @returns {string[]} Уникальные типы транзакций
 */
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

console.log("Уникальные типы транзакций:");
console.log(getUniqueTransactionTypes(transactions));

console.log("\nОбщая сумма всех транзакций:");
console.log(calculateTotalAmount(transactions));

console.log("\nОбщая сумма за 2019-01-01:");
console.log(calculateTotalAmountByDate(transactions, 2019 ,1, 1));

console.log("\nВсе дебетовые транзакции:");
console.log(getTransactionByType(transactions, "debit"));

console.log("\nТранзакции с 2019-01-01 по 2019-01-03:");
console.log(getTransactionsInDateRange(transactions, "2019-01-01", "2019-01-03"));

console.log("\nТранзакции от FashionStoreXYZ:");
console.log(getTransactionsByMerchant(transactions, "FashionStoreXYZ"));

console.log("\nСредняя сумма транзакций:");
console.log(calculateAverageTransactionAmount(transactions));

console.log("\nТранзакции с суммой от 50 до 130:");
console.log(getTransactionsByAmountRange(transactions, 50, 130));

console.log("\nОбщая сумма дебетовых транзакций:");
console.log(calculateTotalDebitAmount(transactions));

console.log("\nМесяц с наибольшим количеством транзакций:");
console.log(findMostTransactionsMonth(transactions));

console.log("\nМесяц с наибольшим количеством дебетовых транзакций:");
console.log(findMostDebitTransactionMonth(transactions));

console.log("\nТип транзакций, которых больше:");
console.log(mostTransactionTypes(transactions));

console.log("\nТранзакции до 2019-01-03:");
console.log(getTransactionsBeforeDate(transactions, "2019-01-03"));

console.log("\nПоиск транзакции с ID = 2:");
console.log(findTransactionById(transactions, "2"));

console.log("\nОписание всех транзакций:");
console.log(mapTransactionDescriptions(transactions));