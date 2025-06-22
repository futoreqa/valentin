<h1 align="center">
  <br>
  <a href="#"><img src="https://dcassetcdn.com/design_img/74969/85609/85609_1313227_74969_image.png" alt="Apex API" width="200"></a>
  <br>
  Apex API
  <br>
</h1>
<h4 align="center">Задание : Программа с использованием Express js , Node js , CRUD api ,Должна быть 1 модель 2 таблицы база данных с 2 энтити .</h4>
<h4 align="center">A CRUD API for managing products and orders using Node.js and Express.</h4>

<p align="center">
  <a href="https://badge.fury.io/js/apex-api">
    <img src="https://img.shields.io/badge/version-1.0.0-blue.svg" alt="Version">
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/status-active-brightgreen.svg" alt="Status">
  </a>
  <a href="https://saythanks.io/to/your-email@example.com">
    <img src="https://img.shields.io/badge/SayThanks.io-%E2%98%BC-1EAEDB.svg" alt="Say Thanks">
  </a>
</p>

<p align="center">
  <a href="#key-features">Возможности</a> •
  <a href="#how-to-use">Как использовать</a> •
  <a href="#Работа-с-API-через-Postman">Postman</a> •
</p>

![screenshot](PHOTO/cd9fc68e-a157-4be8-9991-b4c36478bcfb.png)

## Key Features

* Полный CRUD API для продуктов и заказов
* База данных SQLite в оперативной памяти
* Построено с помощью Node.js, Express.js и Sequelize
* Легкий и простой в установке
* Тестирование готового к использованию PostMan
* Поддерживает формат данных JSON
* Простая и минималистичная структура для обучения

---

## How To Use

Для клонирования и использования вам понадобится [Git](https://git-scm.com) и [Node.js](https://nodejs.org/en/download/) установленном на вашем компютере. Из вашей командной строки:

```bash
# Clone this repository
$ git clone https://github.com/futoreqa/valentin.git

# Go into the repository
$ cd EXAM

# Install dependencies
$ npm install

# Run the server
$ npm start

```
---
## Работа с API через Postman

Для тестирования API можно использовать [Postman](https://www.postman.com/).

📦 Примеры запросов

### Получить все продукты
```bash


Метод: GET
URL - http://localhost:3000/products
```
![screenshot](PHOTO/3.png)
![screenshot](PHOTO/4.png)

### Вставить продукт
```bash

Метод: POST
URL - http://localhost:3000/products

Raw - Body:
{
  "name": "Клавиатура",
  "price": 1500,
  "description": "Механическая клавиатура"
}
```
![screenshot](PHOTO/7.png)

### Изменить продукт
```bash

Метод: PUT
URL - http://localhost:3000/products/1

Raw - Body:
{
  "name": "Клавиатура",
  "price": 3455,
  "description": "Механическая клавиатура"
}
```
![screenshot](PHOTO/2.png)

### Удалить продукт
```bash

Метод: DELETE
URL - http://localhost:3000/products/1

```
![screenshot](PHOTO/5.png)
![screenshot](PHOTO/6.png)

---

### Добавить продукт в энтити заказов

```bash

Метод: POST
URL - http://localhost:3000/orders

и тп команды

```
![image](https://github.com/user-attachments/assets/5768fc06-d441-4bf6-a4c6-0263c71be827)
