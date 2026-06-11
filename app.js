const clients = [
  {
    id: "cafe",
    name: "巷口咖啡有限公司",
    industry: "food",
    owner: "餐飲品牌",
    document: "加盟合作草案 v3",
    priority: 1,
    score: 72,
    risk: "high",
    clauses: [
      { title: "商標使用授權", status: "需修正", level: "high", note: "草案未列授權範圍、地區與終止後下架期限。" },
      { title: "食安責任分工", status: "待確認", level: "mid", note: "加盟方與總部的原料追溯義務需要拆成明確流程。" },
      { title: "展店保密條款", status: "已通過", level: "low", note: "核心配方與展店資料已有保密期間與違約處理。" },
    ],
    tasks: [
      { title: "補商標授權附件", due: "3 天內", tag: "高風險" },
      { title: "更新加盟教育訓練紀錄", due: "6 天內", tag: "營運" },
    ],
    timeline: ["新增加盟草案", "標記商標授權缺口", "產生食安分工清單"],
  },
  {
    id: "studio",
    name: "白線設計工作室",
    industry: "studio",
    owner: "接案工作室",
    document: "品牌設計委託合約",
    priority: 2,
    score: 84,
    risk: "mid",
    clauses: [
      { title: "付款里程碑", status: "待確認", level: "mid", note: "尾款與驗收回覆期限尚未綁定。" },
      { title: "著作財產權移轉", status: "需修正", level: "high", note: "需明確列出可修改、可轉授權與保留作品集展示權。" },
      { title: "需求變更費用", status: "已通過", level: "low", note: "額外修改輪次與報價方式已具體化。" },
    ],
    tasks: [
      { title: "確認授權使用範圍", due: "2 天內", tag: "權利" },
      { title: "寄出付款節點修正版", due: "5 天內", tag: "合約" },
    ],
    timeline: ["匯入委託合約", "比對常用設計合約條款", "新增付款提醒"],
  },
  {
    id: "shop",
    name: "拾味選品電商",
    industry: "retail",
    owner: "電商零售",
    document: "會員條款與退貨政策",
    priority: 3,
    score: 91,
    risk: "low",
    clauses: [
      { title: "七日鑑賞期", status: "已通過", level: "low", note: "退貨例外、包裝限制與退款流程已有清楚說明。" },
      { title: "個資告知事項", status: "待確認", level: "mid", note: "需補第三方金流與物流服務提供者範圍。" },
      { title: "促銷活動限制", status: "已通過", level: "low", note: "折扣、效期與不得併用規則完整。" },
    ],
    tasks: [
      { title: "補第三方服務商清單", due: "4 天內", tag: "個資" },
      { title: "月末條款版本封存", due: "7 天內", tag: "稽核" },
    ],
    timeline: ["完成會員條款掃描", "同步退貨政策", "建立版本封存點"],
  },
];

const industryHints = {
  retail: "電商零售",
  studio: "接案工作室",
  food: "餐飲品牌",
};

let selectedId = clients[0].id;
let auditRuns = 0;

const clientList = document.querySelector("#clientList");
const clauseList = document.querySelector("#clauseList");
const taskList = document.querySelector("#taskList");
const timeline = document.querySelector("#timeline");
const search = document.querySelector("#clientSearch");
const industrySelect = document.querySelector("#industrySelect");
const runAudit = document.querySelector("#runAudit");
const taskForm = document.querySelector("#taskForm");

function selectedClient() {
  return clients.find((client) => client.id === selectedId) || clients[0];
}

function riskText(level) {
  if (level === "high") return "高風險";
  if (level === "mid") return "中風險";
  return "低風險";
}

function riskClass(level) {
  if (level === "high") return "risk-high";
  if (level === "mid") return "risk-mid";
  return "";
}

function visibleClients() {
  const query = search.value.trim().toLowerCase();
  const industry = industrySelect.value;
  return clients.filter((client) => {
    const haystack = [client.name, client.owner, client.document].join(" ").toLowerCase();
    return client.industry === industry && (!query || haystack.includes(query));
  });
}

function renderClients() {
  const items = visibleClients();
  if (!items.some((client) => client.id === selectedId)) {
    selectedId = items[0]?.id || clients[0].id;
  }

  clientList.innerHTML = items.length
    ? items.map((client) => `
      <button class="client-card ${client.id === selectedId ? "active" : ""}" type="button" data-id="${client.id}">
        <strong>${client.name}</strong>
        <span>${client.owner} / ${client.document}</span>
        <small>${riskText(client.risk)}，合規 ${client.score + auditRuns} 分</small>
      </button>
    `).join("")
    : `<div class="clause-card"><div><h3>沒有符合條件的客戶</h3><p>請調整產業情境或搜尋文字。</p></div></div>`;

  clientList.querySelectorAll(".client-card").forEach((button) => {
    button.addEventListener("click", () => {
      selectedId = button.dataset.id;
      render();
    });
  });
}

function renderMetrics() {
  const highRisk = clients.reduce((sum, client) => sum + client.clauses.filter((clause) => clause.level === "high").length, 0);
  const deadlines = clients.reduce((sum, client) => sum + client.tasks.length, 0);
  const score = Math.round(clients.reduce((sum, client) => sum + client.score, 0) / clients.length) + auditRuns;
  document.querySelector("#metricHighRisk").textContent = highRisk;
  document.querySelector("#metricDocs").textContent = clients.length * 2 + auditRuns;
  document.querySelector("#metricDeadlines").textContent = deadlines;
  document.querySelector("#metricScore").textContent = score;
}

function renderAnalysis() {
  const client = selectedClient();
  document.querySelector("#selectedClientName").textContent = client.name;
  document.querySelector("#documentTitle").textContent = client.document;
  document.querySelector("#documentPriority").textContent = `第 ${client.priority} 件`;

  const badge = document.querySelector("#riskBadge");
  badge.textContent = riskText(client.risk);
  badge.className = `risk-badge ${riskClass(client.risk)}`;

  clauseList.innerHTML = client.clauses.map((clause, index) => `
    <article class="clause-card">
      <div>
        <h3>${clause.title}</h3>
        <p>${clause.note}</p>
      </div>
      <div class="clause-actions">
        <span class="clause-status ${riskClass(clause.level)}">${clause.status}</span>
        <button type="button" data-clause="${index}">標為已處理</button>
      </div>
    </article>
  `).join("");

  clauseList.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const clause = client.clauses[Number(button.dataset.clause)];
      clause.status = "已處理";
      clause.level = "low";
      client.risk = client.clauses.some((item) => item.level === "high") ? "high" : client.clauses.some((item) => item.level === "mid") ? "mid" : "low";
      client.score = Math.min(98, client.score + 3);
      client.timeline.unshift(`處理 ${clause.title}`);
      render();
    });
  });
}

function renderTasks() {
  const client = selectedClient();
  taskList.innerHTML = client.tasks.map((task) => `
    <article class="task-item">
      <span class="task-tag">${task.tag}</span>
      <strong>${task.title}</strong>
      <p>${task.due}</p>
    </article>
  `).join("");

  timeline.innerHTML = client.timeline.map((event, index) => `
    <article class="timeline-item">
      <strong>${index === 0 ? "最新" : `T-${index}`}</strong>
      <p>${event}</p>
    </article>
  `).join("");
}

function render() {
  renderClients();
  renderMetrics();
  renderAnalysis();
  renderTasks();
}

search.addEventListener("input", render);
industrySelect.addEventListener("change", render);

runAudit.addEventListener("click", () => {
  auditRuns += 1;
  const client = selectedClient();
  client.timeline.unshift("重新跑完條款風險比對");
  render();
});

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(taskForm);
  const client = selectedClient();
  client.tasks.unshift({ title: data.get("task"), due: "今天新增", tag: "追蹤" });
  client.timeline.unshift("新增法遵提醒");
  taskForm.reset();
  render();
});

render();
