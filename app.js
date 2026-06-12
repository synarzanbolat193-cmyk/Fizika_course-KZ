// ========== НЕГІЗГІ ИНТЕРФЕЙС ЛОГИКАСЫ ==========

let currentModule = null;
let currentLesson = null;

function loadModule(moduleId, element) {
    // Модульді белгілеу
    document.querySelectorAll('.module-item').forEach(item => {
        item.style.borderLeftColor = 'transparent';
    });
    if (element) {
        element.style.borderLeftColor = '#667eea';
    }
    
    currentModule = moduleId;
    const module = coursesData[moduleId];
    
    if (!module) return;
    
    let html = `<h2>${module.title}</h2><p>${module.description}</p>`;
    html += '<div class="lessons-list">';
    
    module.lessons.forEach(lesson => {
        const isCompleted = authManager.isLessonCompleted(moduleId, lesson.id);
        const completedMark = isCompleted ? '✅' : '📖';
        html += `
            <div class="lesson-item" onclick="openLesson('${moduleId}', '${lesson.id}')">
                <span class="lesson-status">${completedMark}</span>
                <span class="lesson-title">${lesson.title}</span>
            </div>
        `;
    });
    
    html += '</div>';
    
    document.getElementById('lessonContainer').innerHTML = html;
    updateProgressBar();
}

function openLesson(moduleId, lessonId) {
    const module = coursesData[moduleId];
    const lesson = module.lessons.find(l => l.id === lessonId);
    
    if (!lesson) return;
    
    currentModule = moduleId;
    currentLesson = lessonId;
    
    let html = `<div class="lesson">`;
    html += `<h2>${lesson.title}</h2>`;
    html += `<div class="lesson-content">`;
    html += `<div class="lesson-description">${lesson.description}</div>`;
    
    // Формулалар
    if (lesson.formulas && lesson.formulas.length > 0) {
        html += '<div class="formulas">';
        html += '<h3>🧮 Формулалар:</h3>';
        lesson.formulas.forEach(f => {
            html += `
                <div class="formula-item">
                    <strong>${f.formula}</strong>
                    <div class="formula-description">${f.desc}</div>
                </div>
            `;
        });
        html += '</div>';
    }
    
    // Тестілер
    if (lesson.quiz && lesson.quiz.length > 0) {
        html += '<div class="quiz-section">';
        html += '<h3>📝 Тесттер:</h3>';
        lesson.quiz.forEach((q, idx) => {
            html += `
                <div class="quiz-question">
                    <p><strong>Сұрақ ${idx + 1}:</strong> ${q.question}</p>
            `;
            q.options.forEach((opt, optIdx) => {
                html += `
                    <div class="quiz-option">
                        <input type="radio" name="q${idx}" value="${optIdx}" id="opt${idx}_${optIdx}">
                        <label for="opt${idx}_${optIdx}">${opt}</label>
                    </div>
                `;
            });
            html += '</div>';
        });
        html += '<button class="quiz-btn" onclick="checkQuiz()">✓ Тексеру</button>';
        html += '</div>';
    }
    
    // Өтті деп белгілеу
    const isCompleted = authManager.isLessonCompleted(moduleId, lessonId);
    const btnText = isCompleted ? '✅ Өтті' : '✓ Өтті деп белгілеу';
    const btnClass = isCompleted ? 'mark-complete-btn completed' : 'mark-complete-btn';
    html += `<button class="${btnClass}" onclick="markComplete('${moduleId}', '${lessonId}')" ${isCompleted ? 'disabled' : ''}>${btnText}</button>`;
    
    html += '</div></div>';
    
    document.getElementById('lessonContainer').innerHTML = html;
}

function checkQuiz() {
    const module = coursesData[currentModule];
    const lesson = module.lessons.find(l => l.id === currentLesson);
    
    if (!lesson || !lesson.quiz) return;
    
    let correctCount = 0;
    const totalQuestions = lesson.quiz.length;
    
    lesson.quiz.forEach((q, idx) => {
        const selected = document.querySelector(`input[name="q${idx}"]:checked`);
        if (selected && parseInt(selected.value) === q.correct) {
            correctCount++;
        }
    });
    
    const percentage = Math.round((correctCount / totalQuestions) * 100);
    const isPass = percentage >= 60;
    
    let resultHtml = `
        <div class="quiz-result ${isPass ? '' : 'incorrect'}">
            <h4>${isPass ? '✅ Ызды!' : '❌ Әлімөл'}</h4>
            <p>Сіз ${correctCount}/${totalQuestions} сұрақты дұрыс жауап бердіңіз.</p>
            <p>Пайызы: ${percentage}%</p>
            ${isPass ? '<p>Сабақты өтіп кеттіңіз!</p>' : '<p>Қайта көңіл бөлінгілер және қайта сынап көріңіз.</p>'}
        </div>
    `;
    
    // Нәтижелерді қосу
    const quizSection = document.querySelector('.quiz-section');
    const existingResult = document.querySelector('.quiz-result');
    if (existingResult) existingResult.remove();
    quizSection.insertAdjacentHTML('afterend', resultHtml);
}

function markComplete(moduleId, lessonId) {
    authManager.saveProgress(moduleId, lessonId, true);
    alert('Сабақ өтті деп белгіленді! ✅');
    openLesson(moduleId, lessonId);
    updateProgressBar();
}

function updateProgressBar() {
    if (!currentModule) return;
    
    const module = coursesData[currentModule];
    const totalLessons = module.lessons.length;
    
    let completedCount = 0;
    module.lessons.forEach(lesson => {
        if (authManager.isLessonCompleted(currentModule, lesson.id)) {
            completedCount++;
        }
    });
    
    const percentage = Math.round((completedCount / totalLessons) * 100);
    document.getElementById('progressFill').style.width = percentage + '%';
    document.getElementById('progressText').textContent = `${percentage}% өтті`;
    document.getElementById(`progress-${currentModule}`).textContent = percentage + '%';
    
    // Жалпы прогрес
    let totalCompleted = 0;
    let totalAll = 0;
    
    Object.keys(coursesData).forEach(modId => {
        const mod = coursesData[modId];
        totalAll += mod.lessons.length;
        mod.lessons.forEach(lesson => {
            if (authManager.isLessonCompleted(modId, lesson.id)) {
                totalCompleted++;
            }
        });
    });
    
    const overallPercentage = Math.round((totalCompleted / totalAll) * 100);
    document.getElementById('progressFill').style.width = overallPercentage + '%';
    document.getElementById('progressText').textContent = `${overallPercentage}% өтті`;
}

// Инициализация
window.addEventListener('load', () => {
    updateProgressBar();
});