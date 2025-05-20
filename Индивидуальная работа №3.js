const readline = require("readline");

/**
 * Представляет обычный предмет.
 */
class Item {
    /**
     * Создаёт новый предмет.
     * @param {string} name - Название предмета.
     * @param {number} weight - Вес предмета в килограммах.
     * @param {string} rarity - Редкость предмета (common, uncommon, rare, legendary).
     */
    constructor(name, weight, rarity) {
        this.name = name;
        this.weight = weight;
        this.rarity = rarity;
    }

    /**
     * Возвращает строку с информацией о предмете.
     * @returns {string} Информация о предмете.
     */
    getInfo() {
        return `Name: ${this.name}, Weight: ${this.weight}kg, Rarity: ${this.rarity}`;
    }

    /**
     * Устанавливает новый вес предмета.
     * @param {number} newWeight - Новый вес.
     */
    setWeight(newWeight) {
        this.weight = newWeight;
    }
}

/**
 * Представляет оружие — расширение обычного предмета.
 * @extends Item
 */
class Weapon extends Item {
    /**
     * Создаёт новое оружие.
     * @param {string} name - Название оружия.
     * @param {number} weight - Вес оружия.
     * @param {string} rarity - Редкость оружия.
     * @param {number} damage - Урон, наносимый оружием.
     * @param {number} durability - Прочность оружия (от 0 до 100).
     */
    constructor(name, weight, rarity, damage, durability) {
        super(name, weight, rarity);
        this.damage = damage;
        this.durability = durability;
    }

    /**
     * Использует оружие, снижая его прочность.
     */
    use() {
        if (this.durability > 0) {
            this.durability = Math.max(0, this.durability - 10);
        } else {
            console.log(`${this.name} сломано!`);
        }
    }

    /**
     * Чинит оружие, восстанавливая прочность до 100%.
     */
    repair() {
        this.durability = 100;
    }

    /**
     * Возвращает строку с информацией об оружии.
     * @returns {string} Информация об оружии.
     */
    getInfo() {
        return `${super.getInfo()}, Damage: ${this.damage}, Durability: ${this.durability}%`;
    }
}

// === Инвентарь для хранения предметов и оружия ===
const inventory = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * Показывает главное меню и обрабатывает ввод пользователя.
 */
function menu() {
    console.log("\n=== Меню инвентаря ===");
    console.log("1. Добавить предмет");
    console.log("2. Добавить оружие");
    console.log("3. Показать инвентарь");
    console.log("4. Использовать оружие");
    console.log("5. Починить оружие");
    console.log("6. Выход");
    rl.question("Выберите опцию: ", handleMenu);
}

/**
 * Обрабатывает выбор пользователя в меню.
 * @param {string} choice - Введённая пользователем опция.
 */
function handleMenu(choice) {
    switch (choice) {
        case "1":
            addItem();
            break;
        case "2":
            addWeapon();
            break;
        case "3":
            viewInventory();
            break;
        case "4":
            useWeapon();
            break;
        case "5":
            repairWeapon();
            break;
        case "6":
            rl.close();
            break;
        default:
            console.log("Неверный выбор.");
            menu();
    }
}

/**
 * Добавляет новый обычный предмет в инвентарь.
 */
function addItem() {
    rl.question("Введите название предмета: ", name => {
        rl.question("Введите вес: ", weight => {
            rl.question("Введите редкость (common/uncommon/rare/legendary): ", rarity => {
                inventory.push(new Item(name, parseFloat(weight), rarity));
                console.log("Предмет добавлен.");
                menu();
            });
        });
    });
}

/**
 * Добавляет новое оружие в инвентарь.
 */
function addWeapon() {
    rl.question("Введите название оружия: ", name => {
        rl.question("Введите вес: ", weight => {
            rl.question("Введите редкость (common/uncommon/rare/legendary): ", rarity => {
                rl.question("Введите урон: ", damage => {
                    rl.question("Введите прочность (0-100): ", durability => {
                        inventory.push(new Weapon(name, parseFloat(weight), rarity, parseInt(damage), parseInt(durability)));
                        console.log("Оружие добавлено.");
                        menu();
                    });
                });
            });
        });
    });
}

/**
 * Показывает содержимое инвентаря.
 * @param {boolean} [showMenuAfter=true] - Показывать ли меню после вывода.
 */
function viewInventory(showMenuAfter = true) {
    if (inventory.length === 0) {
        console.log("Инвентарь пуст.");
    } else {
        inventory.forEach((item, index) => {
            console.log(`${index + 1}. ${item.getInfo()}`);
        });
    }
    if (showMenuAfter) {
        menu();
    }
}

/**
 * Позволяет пользователю использовать оружие из инвентаря.
 */
function useWeapon() {
    if (inventory.length === 0) {
        console.log("Инвентарь пуст.");
        menu();
        return;
    }

    viewInventory(false);
    rl.question("Введите номер оружия для использования: ", idx => {
        const i = parseInt(idx) - 1;
        const item = inventory[i];
        if (item instanceof Weapon) {
            item.use();
            console.log(`Оружие ${item.name} использовано. Прочность: ${item.durability}%`);
        } else {
            console.log("Это не оружие.");
        }
        menu();
    });
}

/**
 * Позволяет пользователю починить оружие из инвентаря.
 */
function repairWeapon() {
    if (inventory.length === 0) {
        console.log("Инвентарь пуст.");
        menu();
        return;
    }

    viewInventory(false);
    rl.question("Введите номер оружия для починки: ", idx => {
        const i = parseInt(idx) - 1;
        const item = inventory[i];
        if (item instanceof Weapon) {
            item.repair();
            console.log(`${item.name} отремонтировано.`);
        } else {
            console.log("Это не оружие.");
        }
        menu();
    });
}

// Запуск приложения
console.log("Система инвентаря прямо как в WORLD OF WARCRAFT!");
menu();
