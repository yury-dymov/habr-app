# React isomorphic / universal front-end application with authentication tutorial for HabraHabr
Эта ветка соответствует состоянию приложения из [третьей части статьи для Хабрахабра](https://habrahabr.ru/post/310952)

Состояние приложения из [первой части](https://habrahabr.ru/post/309958/) можно найти в [ветке v1](https://github.com/yury-dymov/habr-app/tree/v1)

Состояние приложения из [второй части](https://habrahabr.ru/post/310284/) можно найти в [ветке v2](https://github.com/yury-dymov/habr-app/tree/v2)


# React Tutorial
Я написал цикл из трех статей для [habrahabr](https://habrahabr.ru), который поможет новичкам собрать стек React-приложения с нуля, добавляя шаг за шагом различные библиотеки и компоненты с полным пониманием того, что и зачем делается. К концу третьей части статьи получается сайт, который ничем не отличается от существующих крупных и успешных проектов с точки зрения архитектуры и механизмов работы с пользователями и внешними информационными системами.

## Ключевые слова
* react
* redux
* isomorphic / universal web-application
* server-side rendering
* authentication
* omniauth
* API
* node.js

## Установка и запуск
1. Устанавливаем зависимости
```
npm instal
```
2. Запускаем серверную часть
```
npm run nodemon
```
3. Запускаем webpack-dev-server, который будет отдавать клиентские js, css и другие ресурсы
```
npm run webpack-devserver
```
Приложение будет доступно по адресу http://localhost:3001
*Внимание:* для корректной работы необходимо, чтобы nodemon и webpack-dev-server были запущены одновременно!

# Содержание
## [Первая часть](https://habrahabr.ru/post/309958/)
* Создаем node.js приложение
* Добавляем express и пишем заготовку для серверной части изоморфного приложения
* Добавляем и настраиваем babel
* Добавляем webpack, пишем конфиг сборки клиентского JavaScript
* Добавляем eslint и определяем требования к исходному коду
* Добавляем react и react-dom
* Создаем компонент "Hello World"

## [Вторая часть](https://habrahabr.ru/post/309958/)
* Добавляем react-bootstrap и создаем общий layout приложения
* Создаем несколько страниц
* Добавляем react-router и настраиваем навигацию для сайта
* Добавляем redux и учимся работать с состоянием

## [Третья часть](https://habrahabr.ru/post/310284/)
* Добавляем redux-devtools
* Добавляем redux-oauth и реализуем аутификацию
* Реализуем взаимодействие с внешними источниками данных
* Добавляем запросы к API в server-side rendering

# Copyright
Yury Dymov, 2016.
