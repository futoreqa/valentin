        const loginMenuWrapper = document.getElementById('loginMenuWrapper');
        const applicationContainer = document.getElementById('applicationContainer');
        const loginButton = document.getElementById('loginButton');
        const logoutLink = document.getElementById('logoutLink');
        const userAvatar = document.getElementById('userAvatar');
        const userDropdown = document.getElementById('userDropdown');
        const settingsLink = document.getElementById('settingsLink');
        const backToHomePageFromSettings = document.getElementById('backToHomePageFromSettings');

        const homeLink = document.getElementById('homeLink');
        const serverLink = document.getElementById('serverLink');
        const configLink = document.getElementById('configLink');
        const myVpnLink = document.getElementById('myVpnLink');
        const filesLink = document.getElementById('filesLink');

        const homeContentWrapper = document.getElementById('homeContentWrapper');
        const settingsContentWrapper = document.getElementById('settingsContentWrapper');
        const serverContentWrapper = document.getElementById('serverContentWrapper');
        const configContentWrapper = document.getElementById('configContentWrapper');
        const myVpnContentWrapper = document.getElementById('myVpnContentWrapper');
        const filesContentWrapper = document.getElementById('filesContentWrapper');

        const usernameLoginToggle = document.getElementById('usernameLoginToggle');
        const phoneLoginToggle = document.getElementById('phoneLoginToggle');
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const usernameIcon = document.getElementById('usernameIcon');
        const phoneIcon = document.getElementById('phoneIcon');

        const serverStatusIndicator = document.getElementById('serverStatusIndicator');
        const serverPageStatus = document.getElementById('serverPageStatus');

        const darkModeToggleLogin = document.getElementById('darkModeToggleLogin');
        const darkModeToggleMain = document.getElementById('darkModeToggleMain');

        function applyTheme(isDarkMode) {
            if (isDarkMode) {
                document.body.classList.add('dark-mode');
                darkModeToggleLogin.textContent = '☀️'; 
                darkModeToggleMain.textContent = '☀️';
            } else {
                document.body.classList.remove('dark-mode');
                darkModeToggleLogin.textContent = '🌙'; 
                darkModeToggleMain.textContent = '🌙';
            }
            localStorage.setItem('darkMode', isDarkMode);
        }

        const savedDarkMode = localStorage.getItem('darkMode');
        if (savedDarkMode === 'true') {
            applyTheme(true);
        } else {
            applyTheme(false);
        }

        darkModeToggleLogin.addEventListener('click', () => {
            const isDarkMode = document.body.classList.contains('dark-mode');
            applyTheme(!isDarkMode);
        });

        darkModeToggleMain.addEventListener('click', () => {
            const isDarkMode = document.body.classList.contains('dark-mode');
            applyTheme(!isDarkMode);
        });

        function showPage(pageId) {
            const pages = [
                homeContentWrapper,
                settingsContentWrapper,
                serverContentWrapper,
                configContentWrapper,
                myVpnContentWrapper,
                filesContentWrapper
            ];

            pages.forEach(page => {
                if (page.id === pageId) {
                    page.classList.add('active-page');
                    page.classList.remove('hidden-page'); 
                } else {
                    // Используем setTimeout, чтобы сначала сработала анимация fade-out,
                    // а затем элемент скрылся из потока (display: none)
                    if (page.classList.contains('active-page')) {
                        page.classList.remove('active-page');
                        setTimeout(() => {
                            page.classList.add('hidden-page');
                        }, 500); // Время должно совпадать с transition в CSS
                    } else {
                        page.classList.add('hidden-page'); // Если не активна, сразу скрываем
                    }
                }
            });

            // Обновление активной ссылки в навигации
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            const activeLink = document.querySelector(`#${pageId.replace('ContentWrapper', 'Link')}`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }

        // Эмуляция проверки статуса сервера
        function checkServerStatus() {
            serverStatusIndicator.classList.remove('connected', 'disconnected');
            serverStatusIndicator.classList.add('checking');
            serverStatusIndicator.textContent = 'Проверка подключения...';
            serverPageStatus.textContent = 'Загрузка...';

            setTimeout(() => {
                const isConnected = Math.random() > 0.3; // 70% шанс на подключение
                if (isConnected) {
                    serverStatusIndicator.classList.remove('checking', 'disconnected');
                    serverStatusIndicator.classList.add('connected');
                    serverStatusIndicator.textContent = 'Сервер: Онлайн';
                    serverPageStatus.textContent = 'Онлайн';
                } else {
                    serverStatusIndicator.classList.remove('checking', 'connected');
                    serverStatusIndicator.classList.add('disconnected');
                    serverStatusIndicator.textContent = 'Сервер: Оффлайн';
                    serverPageStatus.textContent = 'Оффлайн';
                }
            }, 1500);
        }

        // Изначальная проверка статуса при загрузке
        checkServerStatus();


        // Обработчик кнопки логина
        loginButton.addEventListener('click', () => {
            // Здесь должна быть логика проверки логина/пароля
            // Для примера просто скрываем меню логина
            loginMenuWrapper.classList.add('login-menu-hidden');
            applicationContainer.style.display = 'block'; // Показываем основное приложение
            checkServerStatus(); // Запускаем проверку статуса сервера после входа
        });

        // Обработчик ссылки "Выход"
        logoutLink.addEventListener('click', (e) => {
            e.preventDefault();
            userDropdown.classList.remove('show'); // Скрываем выпадающее меню
            applicationContainer.style.display = 'none'; // Скрываем основное приложение
            loginMenuWrapper.classList.remove('login-menu-hidden'); // Показываем меню логина
            // Сбрасываем поля формы логина
            usernameInput.value = '';
            passwordInput.value = '';
            // Возвращаем на домашнюю страницу при выходе
            showPage('homeContentWrapper');
        });

        // Обработчик для аватара пользователя (показать/скрыть выпадающее меню)
        userAvatar.addEventListener('click', (e) => {
            e.stopPropagation(); // Предотвращаем закрытие при клике на сам аватар
            userDropdown.classList.toggle('show');
        });

        // Закрытие выпадающего меню при клике вне его
        document.addEventListener('click', (e) => {
            if (!userDropdown.contains(e.target) && !userAvatar.contains(e.target)) {
                userDropdown.classList.remove('show');
            }
        });

        // Навигация по страницам
        homeLink.addEventListener('click', (e) => {
            e.preventDefault();
            showPage('homeContentWrapper');
            userDropdown.classList.remove('show');
        });
        serverLink.addEventListener('click', (e) => {
            e.preventDefault();
            showPage('serverContentWrapper');
            userDropdown.classList.remove('show');
        });
        configLink.addEventListener('click', (e) => {
            e.preventDefault();
            showPage('configContentWrapper');
            userDropdown.classList.remove('show');
        });
        myVpnLink.addEventListener('click', (e) => {
            e.preventDefault();
            showPage('myVpnContentWrapper');
            userDropdown.classList.remove('show');
        });
        filesLink.addEventListener('click', (e) => {
            e.preventDefault();
            showPage('filesContentWrapper');
            userDropdown.classList.remove('show');
        });
        settingsLink.addEventListener('click', (e) => {
            e.preventDefault();
            showPage('settingsContentWrapper');
            userDropdown.classList.remove('show');
        });
        backToHomePageFromSettings.addEventListener('click', (e) => {
            e.preventDefault();
            showPage('homeContentWrapper');
        });

        // Переключение между логином по имени пользователя и номеру телефона
        usernameLoginToggle.addEventListener('click', () => {
            usernameLoginToggle.classList.add('active');
            phoneLoginToggle.classList.remove('active');
            usernameIcon.classList.remove('hidden');
            phoneIcon.classList.add('hidden');
            usernameInput.placeholder = 'Username';
            usernameInput.type = 'text';
        });

        phoneLoginToggle.addEventListener('click', () => {
            phoneLoginToggle.classList.add('active');
            usernameLoginToggle.classList.remove('active');
            phoneIcon.classList.remove('hidden');
            usernameIcon.classList.add('hidden');
            usernameInput.placeholder = 'Phone number';
            usernameInput.type = 'tel'; // Изменяем тип поля для номера телефона
        });