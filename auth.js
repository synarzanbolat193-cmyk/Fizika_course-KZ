// ========== АВТОРИЗАЦИЯ ЖӘНЕ ЕСЕПТІК ЖАЗБА ==========

class AuthManager {
    constructor() {
        this.users = JSON.parse(localStorage.getItem('users')) || [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
        this.init();
    }
    
    init() {
        const authForm = document.getElementById('authForm');
        const logoutBtn = document.getElementById('logoutBtn');
        const userStatus = document.getElementById('userStatus');
        
        authForm.addEventListener('submit', (e) => this.handleAuth(e));
        logoutBtn.addEventListener('click', () => this.logout());
        
        if (this.currentUser) {
            this.showMainInterface();
        }
    }
    
    handleAuth(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        if (password.length < 6) {
            alert('Құпия сөз 6 символдан ұзын болуы керек!');
            return;
        }
        
        // Пайдаланушы табу
        let user = this.users.find(u => u.email === email);
        
        if (user) {
            // Кіру
            if (user.password === password) {
                this.currentUser = user;
                localStorage.setItem('currentUser', JSON.stringify(user));
                alert(`Қош келдіңіз, ${user.username}!`);
                this.showMainInterface();
            } else {
                alert('Құпия сөз қате!');
            }
        } else {
            // Тіркеу
            const newUser = {
                id: Date.now(),
                username,
                email,
                password,
                progress: {},
                completedLessons: 0,
                joinDate: new Date().toLocaleDateString('kk-KZ')
            };
            
            this.users.push(newUser);
            localStorage.setItem('users', JSON.stringify(this.users));
            
            this.currentUser = newUser;
            localStorage.setItem('currentUser', JSON.stringify(newUser));
            
            alert(`Ұстап шықты, ${newUser.username}! Сіздің есептік жазба құрылды.`);
            this.showMainInterface();
        }
    }
    
    showMainInterface() {
        document.getElementById('authContainer').style.display = 'none';
        document.getElementById('mainContainer').style.display = 'flex';
        document.getElementById('userStatus').textContent = `Қатысушы: ${this.currentUser.username}`;
        document.getElementById('logoutBtn').style.display = 'block';
        
        // Барлық пайдаланушылардың санын және өтті тапсырмаларды көрсету
        this.updateStats();
    }
    
    logout() {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
        document.getElementById('mainContainer').style.display = 'none';
        document.getElementById('authContainer').style.display = 'flex';
        document.getElementById('authForm').reset();
    }
    
    updateStats() {
        document.getElementById('totalUsers').textContent = this.users.length;
        
        let totalCompleted = 0;
        this.users.forEach(user => {
            totalCompleted += user.completedLessons || 0;
        });
        document.getElementById('completedLessons').textContent = totalCompleted;
    }
    
    saveProgress(moduleId, lessonId, completed) {
        if (!this.currentUser.progress[moduleId]) {
            this.currentUser.progress[moduleId] = {};
        }
        
        this.currentUser.progress[moduleId][lessonId] = completed;
        
        if (completed) {
            this.currentUser.completedLessons = (this.currentUser.completedLessons || 0) + 1;
        }
        
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
        
        // Пайдаланушыны өндіктен файлдан ойлап сақтау
        const userIndex = this.users.findIndex(u => u.id === this.currentUser.id);
        if (userIndex !== -1) {
            this.users[userIndex] = this.currentUser;
            localStorage.setItem('users', JSON.stringify(this.users));
        }
        
        this.updateStats();
    }
    
    isLessonCompleted(moduleId, lessonId) {
        return this.currentUser.progress[moduleId] && 
               this.currentUser.progress[moduleId][lessonId];
    }
}

// Инициализация
const authManager = new AuthManager();