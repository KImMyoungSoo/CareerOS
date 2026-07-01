// ===============================
// CareerOS Dashboard v1.0
// ===============================

window.addEventListener("DOMContentLoaded", init);

async function init() {

    await loadDashboard();

    await loadHistory();

}

// ===============================
// Dashboard
// ===============================

async function loadDashboard() {

    const response = await fetch("dashboard.json");

    const data = await response.json();

    renderOverall(data);

    renderPhase(data);

    renderCategory(data);

    renderSubjects(data);

    renderComment(data);

}

// ===============================
// Overall
// ===============================

function renderOverall(data) {

    document.getElementById("overall-progress").textContent =
        data.overall.progress + "%";

    document.getElementById("overall-status").textContent =
        data.overall.status;

    document.getElementById("overall-bar").style.width =
        data.overall.progress + "%";

}

// ===============================
// Phase
// ===============================

function renderPhase(data) {

    document.getElementById("phase-name").textContent =
        data.phase.name;

    document.getElementById("phase-progress").textContent =
        data.phase.progress + "%";

    document.getElementById("phase-bar").style.width =
        data.phase.progress + "%";

}

// ===============================
// Category
// ===============================

function renderCategory(data) {

    const container =
        document.getElementById("category-list");

    container.innerHTML = "";

    for (const key in data.category) {

        const item = data.category[key];

        container.innerHTML += `
            <div>
                <span>${item.title}</span>
                <strong>${item.progress}%</strong>
            </div>
        `;

    }

}

// ===============================
// Subjects
// ===============================

function renderSubjects(data) {

    const container =
        document.getElementById("subject-list");

    container.innerHTML = "";

    for (const key in data.subjects) {

        const item = data.subjects[key];

        container.innerHTML += `
            <div>
                <span>${item.title}</span>
                <strong>${item.progress}%</strong>
            </div>
        `;

    }

}

// ===============================
// PM Comment
// ===============================

function renderComment(data) {

    document.getElementById("pm-comment").textContent =
        data.pmComment;

}

// ===============================
// History
// ===============================

async function loadHistory() {

    const response =
        await fetch("history.json");

    const history =
        await response.json();

    const container =
        document.getElementById("history-list");

    container.innerHTML = "";

    history.forEach(item => {

        container.innerHTML += `

        <div class="history-item">

            <div class="history-date">

                ${item.date}

            </div>

            <div>

                전체 준비도

                <strong>

                    ${item.overall}%

                </strong>

            </div>

            <div>

                ${item.comment}

            </div>

        </div>

        `;

    });

}