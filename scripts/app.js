document.addEventListener('DOMContentLoaded', () => {
    const introLessons = [
        {
            id: 1,
            title: "1. Что такое Linux?",
            content: `
                <h2>Что такое Linux?</h2>
                <p>Linux — это свободная операционная система, основанная на ядре Linux...</p>
                <div class="terminal-example"><pre>$ uname -a</pre></div>
            `
        },
        {
            id: 2,
            title: "2. Выбор дистрибутива",
            content: `
                <h2>Выбор дистрибутива</h2>
                <p>Ubuntu, Fedora, Debian, Arch — каждый подходит для разных задач...</p>
            `
        }
    ];

    const terminalLessons = [
        {
            id: 1,
            title: "1. Введение в командную строку",
            content: `
                <h2>Введение в командную строку</h2>
                <p>Командная строка — это текстовый интерфейс для взаимодействия с системой...</p>
                <div class="terminal-example"><pre>$ echo "Привет, терминал!"</pre></div>
            `
        },
        {
            id: 2,
            title: "2. Навигация по файловой системе",
            content: `
                <h2>Навигация по файловой системе</h2>
                <p>Основные команды: pwd, ls, cd...</p>
                <div class="terminal-example"><pre>$ pwd<br>/home/user</pre></div>
            `
        }
    ];

    let currentLessons = [];

    function showLesson(id) {
        const lesson = currentLessons.find(lesson => lesson.id === id);
        const contentDiv = document.getElementById('lesson-content');
        if (lesson && contentDiv) {
            contentDiv.innerHTML = lesson.content;
        } else if (contentDiv) {
            contentDiv.innerHTML = '<p>Урок не найден.</p>';
        }
    }

    function loadCategory(category) {
        const lessonList = document.getElementById('lesson-list');
        if (!lessonList) return;

        switch (category) {
            case 'intro':
                currentLessons = introLessons;
                break;
            case 'terminal':
                currentLessons = terminalLessons;
                break;
            default:
                currentLessons = terminalLessons;
        }

        const titleEl = document.getElementById('sidebar-title');
        if (titleEl) {
            titleEl.textContent =
                category === 'intro' ? 'Начало' :
                    category === 'terminal' ? 'Командная строка' :
                        'Командная строка';
        }

        lessonList.innerHTML = '';
        currentLessons.forEach(lesson => {
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.href = '#';
            link.textContent = lesson.title;
            link.addEventListener('click', (e) => {
                e.preventDefault();
                showLesson(lesson.id);
                const sidebar = document.querySelector('.sidebar');
                if (window.innerWidth <= 768 && sidebar) {
                    sidebar.classList.remove('open');
                }
            });
            li.appendChild(link);
            lessonList.appendChild(li);
        });

        if (currentLessons.length > 0) {
            showLesson(currentLessons[0].id);
        }
    }

    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category') || 'terminal';
    loadCategory(category);
});