// ========== ТАПСЫРМАЛАР ДЕРЕКТЕРІ ==========

const tasksData = {
    mechanics: {
        title: "🔵 Механика - Тапсырмалар",
        tasks: [
            {
                id: 'mech-task-1',
                lessonId: 'mech-1',
                title: "Тапсырма 1: Жылдамдықты есептеу",
                description: "Адам 150 метрді 30 секундта жүрді. Оның жылдамдығын табыңыз.",
                type: "calculation",
                formula: "v = s / t",
                answer: "5 м/с",
                solution: "v = 150 м / 30 с = 5 м/с",
                difficulty: "easy"
            },
            {
                id: 'mech-task-2',
                lessonId: 'mech-1',
                title: "Тапсырма 2: Жүргелік теңдеуі",
                description: "Автомобиль 90 км/сағ жылдамдықпен 2 сағ бойы жүрді. Оның жүргелігін табыңыз.",
                type: "calculation",
                formula: "s = v × t",
                answer: "180 км",
                solution: "s = 90 км/сағ × 2 сағ = 180 км",
                difficulty: "easy"
            },
            {
                id: 'mech-task-3',
                lessonId: 'mech-2',
                title: "Тапсырма 3: Күш есептеу",
                description: "Массасы 10 кг болатын нәрсеге 2 м/с² үдеу берілді. Осы нәрсеге қажетті күш қандай екенін табыңыз.",
                type: "calculation",
                formula: "F = m × a",
                answer: "20 Н",
                solution: "F = 10 кг × 2 м/с² = 20 Н",
                difficulty: "medium"
            },
            {
                id: 'mech-task-4',
                lessonId: 'mech-2',
                title: "Тапсырма 4: Салмағы",
                description: "Массасы 5 кг болатын нәрсенің салмағын табыңыз (g ≈ 10 м/с²).",
                type: "calculation",
                formula: "P = m × g",
                answer: "50 Н",
                solution: "P = 5 кг × 10 м/с² = 50 Н",
                difficulty: "easy"
            },
            {
                id: 'mech-task-5',
                lessonId: 'mech-3',
                title: "Тапсырма 5: Кинетикалық энергия",
                description: "Массасы 2 кг болатын нәрсе 5 м/с жылдамдықпен қозғалса, оның кинетикалық энергиясы қандай?",
                type: "calculation",
                formula: "E_k = (m × v²) / 2",
                answer: "25 Дж",
                solution: "E_k = (2 × 5²) / 2 = (2 × 25) / 2 = 25 Дж",
                difficulty: "medium"
            },
            {
                id: 'mech-task-6',
                lessonId: 'mech-3',
                title: "Тапсырма 6: Потенциалды энергия",
                description: "Массасы 3 кг болатын нәрсе 4 м биіліктегі тырнақта тұр. Оның потенциалды энергиясын табыңыз (g = 10 м/с²).",
                type: "calculation",
                formula: "E_p = m × g × h",
                answer: "120 Дж",
                solution: "E_p = 3 кг × 10 м/с² × 4 м = 120 Дж",
                difficulty: "medium"
            }
        ]
    },
    
    kinematics: {
        title: "🟢 Кинематика - Тапсырмалар",
        tasks: [
            {
                id: 'kin-task-1',
                lessonId: 'kin-1',
                title: "Тапсырма 1: Жалпы жүргелік",
                description: "Машина 0 м/с-тан басталап, 3 м/с² үдеуімен 10 секунд бойы қозғалды. Оның жүргелігін табыңыз.",
                type: "calculation",
                formula: "s = v₀t + (at²)/2",
                answer: "150 м",
                solution: "s = 0 × 10 + (3 × 10²)/2 = 0 + 150 = 150 м",
                difficulty: "medium"
            },
            {
                id: 'kin-task-2',
                lessonId: 'kin-1',
                title: "Тапсырма 2: Соңғы жылдамдық",
                description: "Поезд 5 м/с² үдеуімен 20 секунд қозғалса, оның соңғы жылдамдығы қандай? (Бастапқы жылдамдық 0 м/с)",
                type: "calculation",
                formula: "v = v₀ + at",
                answer: "100 м/с",
                solution: "v = 0 + 5 × 20 = 100 м/с",
                difficulty: "easy"
            },
            {
                id: 'kin-task-3',
                lessonId: 'kin-2',
                title: "Тапсырма 3: Салыстырмалы жылдамдық",
                description: "Екі машина бір-бірінің қарсысына 60 км/сағ және 40 км/сағ жылдамдықпен қозғалады. Олардың салыстырмалы жылдамдығы қандай?",
                type: "calculation",
                formula: "v_rel = v₁ + v₂",
                answer: "100 км/сағ",
                solution: "v_rel = 60 + 40 = 100 км/сағ",
                difficulty: "medium"
            },
            {
                id: 'kin-task-4',
                lessonId: 'kin-2',
                title: "Тапсырма 4: Ұстап қалу уақыты",
                description: "Машина А (80 км/сағ) машина Б-ні (60 км/сағ) ұстап қалуға қанша уақыт қажет, егер Б 2 км алдында болса?",
                type: "calculation",
                formula: "t = s / v_rel",
                answer: "0.1 сағ (6 минут)",
                solution: "v_rel = 80 - 60 = 20 км/сағ; t = 2 км / 20 км/сағ = 0.1 сағ",
                difficulty: "hard"
            }
        ]
    },
    
    molecular: {
        title: "🟡 Молекулалық физика - Тапсырмалар",
        tasks: [
            {
                id: 'mol-task-1',
                lessonId: 'mol-1',
                title: "Тапсырма 1: Молекулалар саны",
                description: "1 литр су қанша молекуладан тұрады? (M = 18 г/моль, N_A = 6.02 × 10²³)",
                type: "calculation",
                formula: "N = (m/M) × N_A",
                answer: "3.34 × 10²⁵ молекула",
                solution: "m = 1000 г; n = 1000/18 = 55.56 моль; N = 55.56 × 6.02 × 10²³ ≈ 3.34 × 10²⁵",
                difficulty: "hard"
            },
            {
                id: 'mol-task-2',
                lessonId: 'mol-1',
                title: "Тапсырма 2: Молярлық масса",
                description: "Оттегінің (O₂) молярлық массасын табыңыз. (O = 16 г/моль)",
                type: "calculation",
                formula: "M = 2 × m_атома",
                answer: "32 г/моль",
                solution: "M(O₂) = 2 × 16 = 32 г/моль",
                difficulty: "easy"
            },
            {
                id: 'mol-task-3',
                lessonId: 'mol-2',
                title: "Тапсырма 3: Газ қысымы",
                description: "Екі есе көрсетсек газдың қысымы қалай өзгереді (температура өзгермесе)?",
                type: "reasoning",
                answer: "Қысымы екі есе төмендейді",
                solution: "PV = const (Бойль-Мариотт заңы). Егер V екі есе артса, P екі есе төмендейді.",
                difficulty: "medium"
            },
            {
                id: 'mol-task-4',
                lessonId: 'mol-2',
                title: "Тапсырма 4: Идеал газ заңы",
                description: "1 моль газ 0°C температурасында және 1 атм қысымында қалпы көлемін табыңыз.",
                type: "calculation",
                formula: "V = nRT/P",
                answer: "22.4 л",
                solution: "V = (1 × 8.31 × 273) / 101325 ≈ 22.4 л",
                difficulty: "hard"
            }
        ]
    },
    
    thermodynamics: {
        title: "🔴 Термодинамика - Тапсырмалар",
        tasks: [
            {
                id: 'therm-task-1',
                lessonId: 'therm-1',
                title: "Тапсырма 1: Жылу мөлшері",
                description: "2 кг суды 20°C-тан 60°C-қа қыздыру үшін қажетті жылу мөлшерін табыңыз. (c = 4200 Дж/кг·°C)",
                type: "calculation",
                formula: "Q = m × c × ΔT",
                answer: "336,000 Дж (336 кДж)",
                solution: "Q = 2 × 4200 × (60 - 20) = 2 × 4200 × 40 = 336,000 Дж",
                difficulty: "easy"
            },
            {
                id: 'therm-task-2',
                lessonId: 'therm-1',
                title: "Тапсырма 2: Температура айырмасы",
                description: "100 г темір 5000 Дж энергия берсе, оның температурасы қанша өзгереді? (c = 460 Дж/кг·°C)",
                type: "calculation",
                formula: "ΔT = Q / (m × c)",
                answer: "108.7°C",
                solution: "ΔT = 5000 / (0.1 × 460) = 5000 / 46 ≈ 108.7°C",
                difficulty: "medium"
            },
            {
                id: 'therm-task-3',
                lessonId: 'therm-2',
                title: "Тапсырма 3: Ерме жылусы",
                description: "1 кг мұзды 0°C-та сұйық суға айналдыру үшін қажетті жылу мөлшері 330,000 Дж. Ермелік жылусы қандай?",
                type: "calculation",
                formula: "λ = Q / m",
                answer: "330,000 Дж/кг",
                solution: "λ = 330,000 Дж / 1 кг = 330,000 Дж/кг",
                difficulty: "easy"
            },
            {
                id: 'therm-task-4',
                lessonId: 'therm-2',
                title: "Тапсырма 4: Буға түлеу жылусы",
                description: "100°C температурасындағы 2 кг суды бұға айналдыру үшін қажетті жылу мөлшері 4,600,000 Дж болса, буға түлеу жылусы қандай?",
                type: "calculation",
                formula: "L = Q / m",
                answer: "2,300,000 Дж/кг",
                solution: "L = 4,600,000 Дж / 2 кг = 2,300,000 Дж/кг",
                difficulty: "medium"
            }
        ]
    },
    
    electricity: {
        title: "🟣 Электр және магнетизм - Тапсырмалар",
        tasks: [
            {
                id: 'elec-task-1',
                lessonId: 'elec-1',
                title: "Тапсырма 1: Электр зарядғы",
                description: "Екі заряд бір-бірінен 2 м қашықтықта орналасқан: q₁ = 4 μC, q₂ = 6 μC. Куломның күшін табыңыз. (k = 9 × 10⁹ Н·м²/C²)",
                type: "calculation",
                formula: "F = k × q₁ × q₂ / r²",
                answer: "0.054 Н (54 мН)",
                solution: "F = (9 × 10⁹ × 4 × 10⁻⁶ × 6 × 10⁻⁶) / 4 = 0.054 Н",
                difficulty: "hard"
            },
            {
                id: 'elec-task-2',
                lessonId: 'elec-2',
                title: "Тапсырма 2: Ом заңы",
                description: "120 В қуатында 2.4 А ток өтеді. Кедергілік қандай?",
                type: "calculation",
                formula: "R = U / I",
                answer: "50 Ом",
                solution: "R = 120 В / 2.4 А = 50 Ом",
                difficulty: "easy"
            },
            {
                id: 'elec-task-3',
                lessonId: 'elec-2',
                title: "Тапсырма 3: Электр қуаты",
                description: "48 В құрылғаға 0.6 А ток өтеді. Оның қуатын табыңыз.",
                type: "calculation",
                formula: "P = U × I",
                answer: "28.8 Вт",
                solution: "P = 48 В × 0.6 А = 28.8 Вт",
                difficulty: "easy"
            },
            {
                id: 'elec-task-4',
                lessonId: 'elec-3',
                title: "Тапсырма 4: Ампер күші",
                description: "Магнит өрісіндегі өткөндік, 5 А ток өтеді. Өткөндік ұзындығы 0.4 м, магнит индукциясы 0.5 Т. Күшті табыңыз.",
                type: "calculation",
                formula: "F = B × I × l",
                answer: "1 Н",
                solution: "F = 0.5 Т × 5 А × 0.4 м = 1 Н",
                difficulty: "medium"
            }
        ]
    },
    
    optics: {
        title: "🟠 Оптика - Тапсырмалар",
        tasks: [
            {
                id: 'opt-task-1',
                lessonId: 'opt-1',
                title: "Тапсырма 1: Жарықты жылдамдығы",
                description: "Жарық су ішінде қалай қозғалады? (су ішінде n = 1.33)",
                type: "calculation",
                formula: "v = c / n",
                answer: "225,563 км/с",
                solution: "v = 300,000 км/с / 1.33 ≈ 225,563 км/с",
                difficulty: "medium"
            },
            {
                id: 'opt-task-2',
                lessonId: 'opt-2',
                title: "Тапсырма 2: Айнадағы сағу",
                description: "Сәулі айнаға 30° бұрыш салмасында түседі. Оның сағуларының бұрышы қандай?",
                type: "reasoning",
                answer: "30°",
                solution: "Сағу заңы бойынша: түсу бұрышы = сағу бұрышы. Сағу бұрышы да 30°.",
                difficulty: "easy"
            },
            {
                id: 'opt-task-3',
                lessonId: 'opt-3',
                title: "Тапсырма 3: Линзаның фокусы",
                description: "Шоғыр линзаның өткөнек қашықтығы 10 см. Оның оптикалық күші қандай?",
                type: "calculation",
                formula: "D = 1 / f",
                answer: "10 диоптрия",
                solution: "f = 10 см = 0.1 м; D = 1 / 0.1 = 10 Д",
                difficulty: "easy"
            },
            {
                id: 'opt-task-4',
                lessonId: 'opt-3',
                title: "Тапсырма 4: Объект және сүрет",
                description: "Объект линзадан 30 см қашықтықта орналасқан. Линзаның өткөнек қашықтығы 10 см. Сүрет қайда түсетін табыңыз.",
                type: "calculation",
                formula: "1/f = 1/d_o + 1/d_i",
                answer: "15 см",
                solution: "1/10 = 1/30 + 1/d_i; 1/d_i = 1/10 - 1/30 = 2/30; d_i = 15 см",
                difficulty: "hard"
            }
        ]
    },
    
    quantum: {
        title: "⚫ Квантық физика - Тапсырмалар",
        tasks: [
            {
                id: 'quant-task-1',
                lessonId: 'quant-1',
                title: "Тапсырма 1: Фотонның энергиясы",
                description: "100 нм толқын ұзындығының фотонның энергиясын табыңыз. (h = 6.63 × 10⁻³⁴ Дж·с, c = 3 × 10⁸ м/с)",
                type: "calculation",
                formula: "E = hc / λ",
                answer: "1.99 × 10⁻¹⁸ Дж",
                solution: "E = (6.63 × 10⁻³⁴ × 3 × 10⁸) / (100 × 10⁻⁹) = 1.99 × 10⁻¹⁸ Дж",
                difficulty: "hard"
            },
            {
                id: 'quant-task-2',
                lessonId: 'quant-1',
                title: "Тапсырма 2: Жиілік",
                description: "500 нм толқын ұзындығының жарықтың жиілігін табыңыз.",
                type: "calculation",
                formula: "f = c / λ",
                answer: "6 × 10¹⁴ Гц",
                solution: "f = (3 × 10⁸) / (500 × 10⁻⁹) = 6 × 10¹⁴ Гц",
                difficulty: "medium"
            },
            {
                id: 'quant-task-3',
                lessonId: 'quant-2',
                title: "Тапсырма 3: Атомдағы электрондар",
                description: "Оттек атомында қанша электрон бар? (Z = 8)",
                type: "reasoning",
                answer: "8 электрон",
                solution: "Нейтр атомында электрондар саны = протондар саны = Z = 8",
                difficulty: "easy"
            },
            {
                id: 'quant-task-4',
                lessonId: 'quant-3',
                title: "Тапсырма 4: Радиоактивтік ажырау",
                description: "Ұраны-238 жарымағу ұмыры 4.5 млрд жыл. 9 млрд жылдан кейін атомдардың қалай бөлігі қалады?",
                type: "calculation",
                formula: "N(t) = N₀ × (1/2)^(t/T)",
                answer: "1/4 бөлігі (25%)",
                solution: "t = 2T болғанда, N = N₀ × (1/2)² = N₀/4",
                difficulty: "medium"
            }
        ]
    }
};

// Экспорт
if (typeof module !== 'undefined' && module.exports) {
    module.exports = tasksData;
}