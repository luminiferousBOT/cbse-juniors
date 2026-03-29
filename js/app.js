document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const classSelect = document.getElementById('class-select');
    const subjectSelect = document.getElementById('subject-select');
    const chapterList = document.getElementById('chapter-list');
    
    const currentChapterTitle = document.getElementById('current-chapter-title');
    const currentChapterSubtitle = document.getElementById('current-chapter-subtitle');
    const progressContainer = document.getElementById('progress-container');
    const progressBar = document.getElementById('progress-bar');
    
    const mcqContainer = document.getElementById('mcq-container');
    const quizCompletion = document.getElementById('quiz-completion');
    const resetBtn = document.getElementById('reset-btn');

    // State
    let currentClass = classSelect.value;
    let currentSubject = subjectSelect.value;
    let currentChapterId = null;
    let currentQuestions = [];
    let currentQuestionIndex = 0;

    // Initialization
    renderChapterList();

    // Event Listeners
    classSelect.addEventListener('change', () => {
        currentClass = classSelect.value;
        resetToInitialState();
        renderChapterList();
    });

    subjectSelect.addEventListener('change', () => {
        currentSubject = subjectSelect.value;
        resetToInitialState();
        renderChapterList();
    });

    resetBtn.addEventListener('click', () => {
        if (currentChapterId) {
            startQuiz(currentChapterId);
        }
    });

    // Functions
    function renderChapterList() {
        chapterList.innerHTML = '';
        const subjectData = cbseData[currentClass]?.[currentSubject];
        
        if (subjectData && subjectData.chapters) {
            subjectData.chapters.forEach(chapter => {
                const li = document.createElement('li');
                li.className = 'chapter-item';
                li.textContent = chapter.title;
                li.dataset.id = chapter.id;
                
                li.addEventListener('click', () => {
                    // Remove active from others
                    document.querySelectorAll('.chapter-item').forEach(el => el.classList.remove('active'));
                    li.classList.add('active');
                    
                    startQuiz(chapter.id);
                });
                
                chapterList.appendChild(li);
            });
        }
    }

    function resetToInitialState() {
        currentChapterId = null;
        currentQuestions = [];
        currentQuestionIndex = 0;
        
        currentChapterTitle.textContent = "Select a Chapter";
        currentChapterSubtitle.textContent = "Choose a chapter from the sidebar to begin practicing rigorous MCQs.";
        progressContainer.style.display = 'none';
        quizCompletion.style.display = 'none';
        
        mcqContainer.innerHTML = `
            <div class="empty-state">
                <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                </svg>
                <p>Continuous learning leads to mastery.</p>
            </div>
        `;
    }

    function startQuiz(chapterId) {
        currentChapterId = chapterId;
        currentQuestionIndex = 0;
        
        const subjectData = cbseData[currentClass]?.[currentSubject];
        const chapterInfo = subjectData.chapters.find(c => c.id === chapterId);
        
        currentQuestions = subjectData.mcqs[chapterId] || [];
        
        // Update header
        currentChapterTitle.textContent = chapterInfo ? chapterInfo.title : "Chapter Selected";
        progressContainer.style.display = 'block';
        quizCompletion.style.display = 'none';
        
        if (currentQuestions.length === 0) {
            currentChapterSubtitle.textContent = "MCQs for this chapter are currently being added. Check back soon!";
            mcqContainer.innerHTML = `
                <div class="empty-state">
                    <p>No questions available yet.</p>
                </div>
            `;
            updateProgress(0, 1);
        } else {
            currentChapterSubtitle.textContent = `Question 1 of ${currentQuestions.length}`;
            renderQuestion();
            updateProgress(currentQuestionIndex, currentQuestions.length);
        }
    }

    function renderQuestion() {
        if (currentQuestionIndex >= currentQuestions.length) {
            showCompletion();
            return;
        }

        const q = currentQuestions[currentQuestionIndex];
        currentChapterSubtitle.textContent = `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;
        updateProgress(currentQuestionIndex, currentQuestions.length);

        const card = document.createElement('div');
        card.className = 'question-card';

        const qText = document.createElement('h3');
        qText.className = 'question-text';
        qText.textContent = q.question;
        card.appendChild(qText);

        const optionsList = document.createElement('div');
        optionsList.className = 'options-list';

        const letters = ['A', 'B', 'C', 'D'];

        q.options.forEach((optText, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            
            const letterSpan = document.createElement('span');
            letterSpan.className = 'option-letter';
            letterSpan.textContent = letters[index];
            
            const textNode = document.createTextNode(optText);
            
            btn.appendChild(letterSpan);
            btn.appendChild(textNode);
            
            btn.addEventListener('click', () => handleAnswerSelected(btn, index, q.answer, q.explanation, card, optionsList));
            
            optionsList.appendChild(btn);
        });

        card.appendChild(optionsList);
        
        mcqContainer.innerHTML = '';
        mcqContainer.appendChild(card);
    }

    function handleAnswerSelected(selectedBtn, selectedIndex, correctIndex, explanationText, card, optionsList) {
        // Disable all options
        const allBtns = optionsList.querySelectorAll('.option-btn');
        allBtns.forEach(btn => btn.disabled = true);

        const isCorrect = selectedIndex === correctIndex;

        // Highlight selected
        if (isCorrect) {
            selectedBtn.classList.add('correct');
        } else {
            selectedBtn.classList.add('wrong');
            // Show the correct one too
            allBtns[correctIndex].classList.add('correct');
        }

        // Show explanation
        const explanationDiv = document.createElement('div');
        explanationDiv.className = 'explanation';

        const badge = document.createElement('div');
        badge.className = `explanation-badge ${isCorrect ? 'correct' : 'wrong'}`;
        badge.textContent = isCorrect ? 'Correct' : 'Incorrect';

        const explText = document.createElement('p');
        explText.className = 'explanation-text';
        explText.textContent = explanationText;

        const nextContainer = document.createElement('div');
        nextContainer.className = 'next-btn-container';
        
        const nextBtn = document.createElement('button');
        nextBtn.className = 'primary-btn';
        nextBtn.textContent = (currentQuestionIndex === currentQuestions.length - 1) ? 'Finish' : 'Next Question';
        
        nextBtn.addEventListener('click', () => {
            currentQuestionIndex++;
            renderQuestion();
        });

        nextContainer.appendChild(nextBtn);

        explanationDiv.appendChild(badge);
        explanationDiv.appendChild(explText);
        explanationDiv.appendChild(nextContainer);

        card.appendChild(explanationDiv);
    }

    function updateProgress(current, total) {
        if (total === 0) return;
        const percentage = (current / total) * 100;
        progressBar.style.width = `${percentage}%`;
    }

    function showCompletion() {
        mcqContainer.innerHTML = '';
        currentChapterSubtitle.textContent = "All questions completed!";
        updateProgress(currentQuestions.length, currentQuestions.length);
        quizCompletion.style.display = 'block';
    }
});
