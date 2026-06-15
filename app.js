const sourceHighlights = [
  {
    label: "智財",
    title: "商標侵權與混淆預檢",
    detail: "對應官方案例的商標申請前風險評估與申請後混淆誤認監測。",
  },
  {
    label: "專利",
    title: "請求項比對",
    detail: "把專利文字與公開資料比對，協助新創縮短申請前的檢索時間。",
  },
  {
    label: "法務",
    title: "法規與契約解讀",
    detail: "將法規、函釋與機關 FAQ 轉成可執行的營運提醒與合約修正點。",
  },
  {
    label: "救濟",
    title: "勞動訴願類案建議",
    detail: "以公開訴願資料建立類案脈絡，協助判斷行政救濟策略。",
  },
];

const clients = [
  {
    id: "trademark-beverage",
    name: "春潮氣泡飲",
    module: "trademark",
    owner: "商標申請前評估",
    stage: "草創期",
    document: "品牌命名與商標檢索報告",
    baseScore: 64,
    sourceHint: "官方智財功能：商標申請前侵權可能與混淆誤認風險。",
    summary: "新飲品品牌準備申請商標，系統先檢查近似字樣、類別衝突與使用證據。",
    clauses: [
      {
        title: "近似商標衝突",
        status: "需處理",
        level: "high",
        note: "第 32 類飲料已有高度近似字樣，若直接申請可能遭核駁或異議。",
        recommendation: "改列三組替代名稱，並把第 32 類與第 35 類零售服務分開送審。",
        followUp: "請設計團隊回覆替代名稱，並封存商標檢索截圖。",
      },
      {
        title: "圖樣識別性不足",
        status: "待確認",
        level: "mid",
        note: "瓶身圖樣以描述性文字為主，識別性可能不足。",
        recommendation: "補強圖像元素與品牌識別說明，送出前先完成一次相似圖樣檢索。",
        followUp: "確認新版圖樣是否完成相似圖樣檢索。",
      },
      {
        title: "使用證據留存",
        status: "追蹤中",
        level: "low",
        note: "官網、包裝與社群素材已有初步留存，但缺少版本日期。",
        recommendation: "每次上市素材更新時建立日期戳與檔案雜湊。",
        followUp: "月末檢查商標使用證據資料夾。",
      },
    ],
    tasks: [
      { title: "補第 32 類競品商標清單", due: "2 天內", tag: "智財", done: false },
      { title: "寄出替代名稱給品牌顧問", due: "4 天內", tag: "申請", done: false },
    ],
    timeline: [
      { label: "匯入", detail: "匯入品牌命名表與商標檢索初稿。" },
      { label: "標記", detail: "系統標記第 32 類近似商標與圖樣識別性風險。" },
      { label: "建議", detail: "產生替代名稱與申請類別拆分建議。" },
    ],
  },
  {
    id: "patent-vision",
    name: "野火影像 AI",
    module: "patent",
    owner: "專利請求項比對",
    stage: "成長期",
    document: "影像辨識請求項草案",
    baseScore: 58,
    sourceHint: "官方智財功能：專利請求項比對，作為申請與訴訟攻防輔助。",
    summary: "團隊要申請影像辨識專利，系統比對請求項文字與公開前案。",
    clauses: [
      {
        title: "請求項 1 範圍過寬",
        status: "需處理",
        level: "high",
        note: "請求項描述的影像特徵抽取流程與三件公開前案高度重疊。",
        recommendation: "把技術特徵縮到低光源校正與邊緣裝置推論流程，降低新穎性風險。",
        followUp: "請研發負責人補低光源校正流程圖與實驗數據。",
      },
      {
        title: "從屬項支撐不足",
        status: "待確認",
        level: "mid",
        note: "從屬項 4 至 6 缺少對應實施例，後續答辯空間不足。",
        recommendation: "補兩個實施例，並在說明書中對應每個參數範圍。",
        followUp: "確認說明書是否補齊從屬項實施例。",
      },
      {
        title: "前案摘要標註",
        status: "追蹤中",
        level: "low",
        note: "前案列表完整，但尚未把差異點整理成答辯用摘要。",
        recommendation: "將差異點轉成表格，保留後續 OA 答辯使用。",
        followUp: "建立前案差異表的版本封存點。",
      },
    ],
    tasks: [
      { title: "補請求項差異表", due: "今天", tag: "專利", done: false },
      { title: "請研發回覆技術特徵縮限", due: "3 天內", tag: "研發", done: false },
    ],
    timeline: [
      { label: "比對", detail: "完成請求項與公開前案語意比對。" },
      { label: "標記", detail: "請求項 1 因範圍過寬被列為高風險。" },
      { label: "輸出", detail: "產生縮限建議與前案差異表任務。" },
    ],
  },
  {
    id: "contract-studio",
    name: "白線設計工作室",
    module: "contract",
    owner: "接案工作室",
    stage: "草創期",
    document: "品牌設計委託合約",
    baseScore: 76,
    sourceHint: "官方法務功能：精確解讀法律文件或契約，降低營運糾紛風險。",
    summary: "工作室常用委託合約已有付款與著作權條款，但授權範圍還不夠精準。",
    clauses: [
      {
        title: "著作財產權移轉",
        status: "需處理",
        level: "high",
        note: "合約未列可修改、可轉授權、素材二次使用與作品集展示權。",
        recommendation: "拆成交付物權利、品牌端使用範圍與工作室保留展示權三段。",
        followUp: "請客戶確認可轉授權範圍與作品集展示例外。",
      },
      {
        title: "驗收與付款節點",
        status: "待確認",
        level: "mid",
        note: "尾款條件只寫完成後付款，沒有驗收回覆期限。",
        recommendation: "加入 5 個工作日驗收期與逾期視為通過條款。",
        followUp: "寄出付款節點修正版給客戶窗口。",
      },
      {
        title: "需求變更費用",
        status: "已通過",
        level: "low",
        note: "額外修改輪次與報價方式已具體化。",
        recommendation: "保留現行條款，並在報價單同步列示。",
        followUp: "月末確認報價單版本與合約版本一致。",
      },
    ],
    tasks: [
      { title: "確認授權使用範圍", due: "2 天內", tag: "權利", done: false },
      { title: "寄出付款節點修正版", due: "5 天內", tag: "合約", done: false },
    ],
    timeline: [
      { label: "匯入", detail: "匯入品牌設計委託合約。" },
      { label: "比對", detail: "比對常用設計委託條款與著作權條款缺口。" },
      { label: "提醒", detail: "新增付款節點與權利確認任務。" },
    ],
  },
  {
    id: "legal-food",
    name: "巷口咖啡有限公司",
    module: "legal",
    owner: "餐飲品牌",
    stage: "成長期",
    document: "加盟合作草案 v3",
    baseScore: 70,
    sourceHint: "官方法務功能：創業初期即時獲取營運相關法規資訊。",
    summary: "品牌準備開放加盟，系統把食安、商標與教育訓練責任拆成可追蹤事項。",
    clauses: [
      {
        title: "商標使用授權",
        status: "需處理",
        level: "high",
        note: "草案未列授權範圍、地區、終止後下架期限與違約處理。",
        recommendation: "補授權附件，明確列出招牌、菜單、社群素材與終止後 14 日下架義務。",
        followUp: "補商標授權附件並寄給加盟法務窗口。",
      },
      {
        title: "食安責任分工",
        status: "待確認",
        level: "mid",
        note: "加盟方與總部的原料追溯義務需要拆成明確流程。",
        recommendation: "加入原料批號紀錄、保存期限與異常回報時限。",
        followUp: "確認加盟教育訓練是否納入原料追溯流程。",
      },
      {
        title: "展店保密條款",
        status: "已通過",
        level: "low",
        note: "核心配方與展店資料已有保密期間與違約處理。",
        recommendation: "維持現行條款，新增受訓人員簽收紀錄即可。",
        followUp: "封存受訓簽收紀錄範本。",
      },
    ],
    tasks: [
      { title: "補商標授權附件", due: "3 天內", tag: "高風險", done: false },
      { title: "更新加盟教育訓練紀錄", due: "6 天內", tag: "營運", done: false },
    ],
    timeline: [
      { label: "新增", detail: "新增加盟草案 v3。" },
      { label: "標記", detail: "標記商標授權缺口與食安分工缺口。" },
      { label: "清單", detail: "產生加盟教育訓練與原料追溯清單。" },
    ],
  },
  {
    id: "appeal-hr",
    name: "森田人資顧問",
    module: "appeal",
    owner: "勞動爭議協作",
    stage: "成熟期",
    document: "勞動訴願事實摘要",
    baseScore: 62,
    sourceHint: "官方法務功能：以勞動部訴願查詢系統資料提供類案建議。",
    summary: "客戶面臨工時與資遣爭議，系統把事實、證據與類案理由拆成策略清單。",
    clauses: [
      {
        title: "出勤紀錄證據缺口",
        status: "需處理",
        level: "high",
        note: "訴願事實摘要提到加班，但缺少打卡紀錄、排班表與主管核准證據。",
        recommendation: "先補完整出勤資料，再依類案理由拆分加班認定與管理責任。",
        followUp: "請客戶補打卡紀錄、排班表與主管核准截圖。",
      },
      {
        title: "資遣程序時序",
        status: "待確認",
        level: "mid",
        note: "通知、協商與資遣費給付日期未整理成同一條時間線。",
        recommendation: "用日期序列重建程序，標示每一節點的法定期限。",
        followUp: "完成資遣程序時序表並附上付款憑證。",
      },
      {
        title: "類案理由摘要",
        status: "追蹤中",
        level: "low",
        note: "已有三則類似訴願理由，但尚未轉成可引用摘要。",
        recommendation: "把類案事實、爭點與結果拆成三欄，避免直接複製不相干段落。",
        followUp: "完成類案摘要並標明公開資料來源。",
      },
    ],
    tasks: [
      { title: "整理出勤證據包", due: "今天", tag: "證據", done: false },
      { title: "建立類案摘要表", due: "4 天內", tag: "訴願", done: false },
    ],
    timeline: [
      { label: "匯入", detail: "匯入勞動訴願事實摘要。" },
      { label: "查找", detail: "比對公開訴願資料中的相近爭點。" },
      { label: "標記", detail: "標記出勤證據缺口與程序時序缺口。" },
    ],
  },
  {
    id: "legal-ecommerce",
    name: "拾味選品電商",
    module: "contract",
    owner: "電商零售",
    stage: "成長期",
    document: "會員條款與退貨政策",
    baseScore: 84,
    sourceHint: "官方法務功能：營運中精確解讀契約與法律文件。",
    summary: "電商條款大致完整，系統把個資告知與退貨例外改成可執行的版本控管。",
    clauses: [
      {
        title: "第三方服務告知",
        status: "待確認",
        level: "mid",
        note: "個資告知事項缺少金流、物流與客服工具的服務提供者範圍。",
        recommendation: "補第三方服務商類型、目的與資料保存期間。",
        followUp: "請營運確認金流與物流服務商清單。",
      },
      {
        title: "七日鑑賞期例外",
        status: "已通過",
        level: "low",
        note: "退貨例外、包裝限制與退款流程已有清楚說明。",
        recommendation: "維持現行條款，並與客服話術同步。",
        followUp: "月末抽查客服退貨話術版本。",
      },
      {
        title: "促銷活動限制",
        status: "已通過",
        level: "low",
        note: "折扣、效期與不得併用規則完整。",
        recommendation: "活動上線前維持版本封存流程。",
        followUp: "封存本月促銷條款版本。",
      },
    ],
    tasks: [
      { title: "補第三方服務商清單", due: "4 天內", tag: "個資", done: false },
      { title: "月末條款版本封存", due: "7 天內", tag: "稽核", done: false },
    ],
    timeline: [
      { label: "掃描", detail: "完成會員條款與退貨政策掃描。" },
      { label: "同步", detail: "同步退貨政策與客服話術。" },
      { label: "封存", detail: "建立條款版本封存點。" },
    ],
  },
  {
    id: "legal-chat",
    name: "法郎資訊工作室",
    module: "legal",
    owner: "法律諮詢整合",
    stage: "產品驗證",
    document: "公開資料來源與回覆準則",
    baseScore: 68,
    sourceHint: "官方留言回覆：法規、函釋、機關 FAQ、智財局與勞動部公開資料作為依據。",
    summary: "團隊希望以對話整合商標、專利與法律諮詢，系統先檢查資料來源與回答邊界。",
    clauses: [
      {
        title: "資料來源標示",
        status: "需處理",
        level: "high",
        note: "法規、函釋、FAQ 與訴願資料庫來源尚未在回覆中分層標示。",
        recommendation: "每次回答附上資料類型、更新時間與不可替代律師意見的提醒。",
        followUp: "補回覆模板的資料來源欄位與免責提醒。",
      },
      {
        title: "多模態輸入邊界",
        status: "待確認",
        level: "mid",
        note: "官方回覆提到目前多模態聚焦文字與圖像，語音需先轉文字再銜接。",
        recommendation: "在產品頁明確標示支援文字、圖像，不直接承諾語音專利報告。",
        followUp: "更新功能頁的多模態支援範圍。",
      },
      {
        title: "諮詢轉介條件",
        status: "追蹤中",
        level: "low",
        note: "已有高風險案件轉人工諮詢的概念，但缺少判斷條件。",
        recommendation: "把訴訟、行政救濟、侵權警告函列為人工轉介條件。",
        followUp: "確認人工轉介條件是否放入操作手冊。",
      },
    ],
    tasks: [
      { title: "補公開資料來源標示", due: "今天", tag: "資料", done: false },
      { title: "更新多模態支援範圍", due: "5 天內", tag: "產品", done: false },
    ],
    timeline: [
      { label: "教練提問", detail: "釐清資料庫來源、智財聚焦與多模態範圍。" },
      { label: "團隊回覆", detail: "確認資料來源含智財局、法規函釋、機關 FAQ 與勞動部訴願資料。" },
      { label: "待辦", detail: "建立回覆準則與來源標示任務。" },
    ],
  },
];

const moduleNames = {
  all: "全部案例",
  trademark: "商標風險",
  patent: "專利比對",
  contract: "契約解讀",
  legal: "法規諮詢",
  appeal: "訴願類案",
};

let selectedId = clients[0].id;
let auditRuns = 0;
let lastAction = null;

const clientList = document.querySelector("#clientList");
const clauseList = document.querySelector("#clauseList");
const taskList = document.querySelector("#taskList");
const timeline = document.querySelector("#timeline");
const search = document.querySelector("#clientSearch");
const industrySelect = document.querySelector("#industrySelect");
const runAudit = document.querySelector("#runAudit");
const taskForm = document.querySelector("#taskForm");
const sourceHighlightsEl = document.querySelector("#sourceHighlights");
const resolutionLog = document.querySelector("#resolutionLog");
const sidebarToggle = document.querySelector("#sidebarToggle");
const sidebarStorageKey = "lawfish.sidebarCollapsed";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function selectedClient() {
  return clients.find((client) => client.id === selectedId) || clients[0];
}

function riskText(level) {
  if (level === "high") return "高風險";
  if (level === "mid") return "中風險";
  if (level === "resolved") return "已控管";
  return "低風險";
}

function riskClass(level) {
  if (level === "high") return "risk-high";
  if (level === "mid") return "risk-mid";
  if (level === "resolved") return "risk-resolved";
  return "";
}

function openClauses(client) {
  return client.clauses.filter((clause) => !clause.handled);
}

function clientRisk(client) {
  const open = openClauses(client);
  if (open.length === 0) return "resolved";
  if (open.some((clause) => clause.level === "high")) return "high";
  if (open.some((clause) => clause.level === "mid")) return "mid";
  return "low";
}

function handledCount(client) {
  return client.clauses.filter((clause) => clause.handled).length;
}

function clientScore(client) {
  return Math.min(98, client.baseScore + handledCount(client) * 5 + auditRuns);
}

function scoreDelta(client) {
  return clientScore(client) - client.baseScore;
}

function clausePenalty(level) {
  if (level === "high") return 12;
  if (level === "mid") return 6;
  return 2;
}

function clauseScoreImpact(clause) {
  if (clause.handled) return { text: "+5 已回補", className: "score-positive" };
  return { text: `-${clausePenalty(clause.level)} 扣分`, className: "score-negative" };
}

function clientWeight(client) {
  const open = openClauses(client);
  const high = open.filter((clause) => clause.level === "high").length;
  const mid = open.filter((clause) => clause.level === "mid").length;
  return high * 10 + mid * 4 + client.tasks.filter((task) => !task.done).length;
}

function formatNow() {
  return new Intl.DateTimeFormat("zh-TW", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date());
}

function visibleClients() {
  const query = search.value.trim().toLowerCase();
  const module = industrySelect.value;
  return clients
    .filter((client) => {
      const haystack = [
        client.name,
        client.owner,
        client.document,
        client.stage,
        client.summary,
        client.sourceHint,
        moduleNames[client.module],
        ...client.clauses.flatMap((clause) => [clause.title, clause.note, clause.recommendation]),
      ].join(" ").toLowerCase();

      return (module === "all" || client.module === module) && (!query || haystack.includes(query));
    })
    .sort((a, b) => clientWeight(b) - clientWeight(a));
}

function renderSourceHighlights() {
  sourceHighlightsEl.innerHTML = sourceHighlights.map((item) => `
    <article>
      <span>${escapeHtml(item.label)}</span>
      <strong>${escapeHtml(item.title)}</strong>
      <p>${escapeHtml(item.detail)}</p>
    </article>
  `).join("");
}

function renderClients() {
  const items = visibleClients();
  if (items.length && !items.some((client) => client.id === selectedId)) {
    selectedId = items[0].id;
  }

  clientList.innerHTML = items.length
    ? items.map((client) => {
      const risk = clientRisk(client);
      const done = handledCount(client);
      const total = client.clauses.length;
      const progress = Math.round((done / total) * 100);

      return `
        <button class="client-card ${client.id === selectedId ? "active" : ""}" type="button" data-id="${escapeHtml(client.id)}">
          <span class="case-meta">${escapeHtml(moduleNames[client.module])} / ${escapeHtml(client.stage)}</span>
          <strong>${escapeHtml(client.name)}</strong>
          <span>${escapeHtml(client.owner)} / ${escapeHtml(client.document)}</span>
          <span class="client-score-line">
            <span class="score-pill">${clientScore(client)} 分</span>
            <small>${riskText(risk)}，${done}/${total} 已處理</small>
          </span>
          <span class="mini-meter" aria-hidden="true"><span style="width: ${progress}%"></span></span>
        </button>
      `;
    }).join("")
    : `<div class="empty-state"><h3>沒有符合條件的案例</h3><p>請調整服務模組或搜尋文字。</p></div>`;

  clientList.querySelectorAll(".client-card").forEach((button) => {
    button.addEventListener("click", () => {
      selectedId = button.dataset.id;
      render();
    });
  });
}

function renderMetrics() {
  const highRisk = clients.reduce((sum, client) => {
    return sum + openClauses(client).filter((clause) => clause.level === "high").length;
  }, 0);
  const deadlines = clients.reduce((sum, client) => {
    return sum + client.tasks.filter((task) => !task.done).length;
  }, 0);
  const score = Math.round(clients.reduce((sum, client) => sum + clientScore(client), 0) / clients.length);

  document.querySelector("#metricHighRisk").textContent = highRisk;
  document.querySelector("#metricDocs").textContent = clients.length;
  document.querySelector("#metricDeadlines").textContent = deadlines;
  document.querySelector("#metricScore").textContent = score;
}

function renderAnalysis() {
  const client = selectedClient();
  const risk = clientRisk(client);
  const sorted = [...clients].sort((a, b) => clientWeight(b) - clientWeight(a));
  const rank = sorted.findIndex((item) => item.id === client.id) + 1;

  document.querySelector("#selectedClientName").textContent = client.name;
  document.querySelector("#documentTitle").textContent = client.document;
  document.querySelector("#documentPriority").textContent = `第 ${rank} 件`;
  document.querySelector("#documentContext").textContent = client.sourceHint;
  document.querySelector("#selectedClientScore").textContent = `${clientScore(client)} 分`;
  document.querySelector("#selectedScoreDelta").textContent = `初始 ${client.baseScore}，目前 ${scoreDelta(client) >= 0 ? "+" : ""}${scoreDelta(client)}，已處理 ${handledCount(client)}/${client.clauses.length}`;
  document.querySelector("#selectedScoreMeter").style.width = `${clientScore(client)}%`;

  const badge = document.querySelector("#riskBadge");
  badge.textContent = riskText(risk);
  badge.className = `risk-badge ${riskClass(risk)}`;

  clauseList.innerHTML = client.clauses.map((clause, index) => {
    const effectiveRisk = clause.handled ? "resolved" : clause.level;
    const status = clause.handled ? "已處理" : clause.status;
    const impact = clauseScoreImpact(clause);
    const resolvedNote = clause.handled
      ? `<div class="handled-note"><span>處理結果</span><strong>${escapeHtml(clause.resolution)}</strong><small>${escapeHtml(clause.resolvedAt)} 更新，已新增右側追蹤任務。</small></div>`
      : "";

    return `
      <article class="clause-card ${clause.handled ? "handled" : ""}">
        <div>
          <div class="clause-title-row">
            <h3>${escapeHtml(clause.title)}</h3>
            <div class="clause-title-meta">
              <span class="score-impact ${impact.className}">${escapeHtml(impact.text)}</span>
              <span class="clause-status ${riskClass(effectiveRisk)}">${escapeHtml(status)}</span>
            </div>
          </div>
          <p>${escapeHtml(clause.note)}</p>
          <div class="clause-detail">
            <span>系統建議</span>
            <strong>${escapeHtml(clause.recommendation)}</strong>
          </div>
          <div class="clause-detail">
            <span>處理後追蹤</span>
            <strong>${escapeHtml(clause.followUp)}</strong>
          </div>
          ${resolvedNote}
        </div>
        <div class="clause-actions">
          <span class="risk-chip ${riskClass(effectiveRisk)}">${riskText(effectiveRisk)}</span>
          <button type="button" data-clause="${index}" ${clause.handled ? "disabled" : ""}>
            ${clause.handled ? "已處理" : "標為已處理"}
          </button>
        </div>
      </article>
    `;
  }).join("");

  clauseList.querySelectorAll("button[data-clause]").forEach((button) => {
    button.addEventListener("click", () => completeClause(Number(button.dataset.clause)));
  });

  renderResolutionLog(client);
}

function renderResolutionLog(client) {
  if (lastAction?.clientId === client.id) {
    resolutionLog.innerHTML = `
      <article class="action-log active">
        <span>${escapeHtml(lastAction.time)}</span>
        <strong>${escapeHtml(lastAction.title)}</strong>
        <p>${escapeHtml(lastAction.detail)}</p>
      </article>
    `;
    return;
  }

  const latestHandled = client.clauses.find((clause) => clause.handled);
  if (latestHandled) {
    resolutionLog.innerHTML = `
      <article class="action-log">
        <span>${escapeHtml(latestHandled.resolvedAt)}</span>
        <strong>最近處理：${escapeHtml(latestHandled.title)}</strong>
        <p>${escapeHtml(latestHandled.resolution)}</p>
      </article>
    `;
    return;
  }

  resolutionLog.innerHTML = `
    <article class="action-log">
      <span>處理邏輯</span>
      <strong>按下「標為已處理」後會發生三件事</strong>
      <p>該風險會降為已控管，系統會新增一筆追蹤任務，並在時間線留下可稽核的處置紀錄。</p>
    </article>
  `;
}

function completeClause(index) {
  const client = selectedClient();
  const clause = client.clauses[index];
  if (!clause || clause.handled) return;

  const previousRisk = clause.level;
  clause.handled = true;
  clause.previousLevel = previousRisk;
  clause.status = "已處理";
  clause.resolvedAt = formatNow();
  clause.resolution = `${riskText(previousRisk)}已依建議處置，後續改由任務追蹤。`;

  const taskExists = client.tasks.some((task) => task.fromClause === clause.title);
  if (!taskExists) {
    client.tasks.unshift({
      title: clause.followUp,
      due: "處理後追蹤",
      tag: riskText(previousRisk),
      done: false,
      fromClause: clause.title,
    });
  }

  client.timeline.unshift({
    label: "完成處置",
    detail: `${clause.title} 從${riskText(previousRisk)}降為已控管，並新增追蹤任務。`,
  });

  lastAction = {
    clientId: client.id,
    time: clause.resolvedAt,
    title: `已處理：${clause.title}`,
    detail: `風險狀態已更新為已控管，右側任務新增「${clause.followUp}」，時間線也保留處理紀錄。`,
  };

  render();
}

function renderTasks() {
  const client = selectedClient();
  taskList.innerHTML = client.tasks.length
    ? client.tasks.map((task) => `
      <article class="task-item ${task.fromClause ? "generated" : ""}">
        <span class="task-tag">${escapeHtml(task.tag)}</span>
        <strong>${escapeHtml(task.title)}</strong>
        <p>${escapeHtml(task.due)}</p>
      </article>
    `).join("")
    : `<div class="empty-state compact"><h3>暫無追蹤任務</h3><p>處理風險後，系統會自動新增追蹤事項。</p></div>`;

  timeline.innerHTML = client.timeline.map((event, index) => `
    <article class="timeline-item">
      <strong>${index === 0 ? "最新" : escapeHtml(event.label)}</strong>
      <p>${escapeHtml(event.detail)}</p>
    </article>
  `).join("");
}

function render() {
  renderSourceHighlights();
  renderClients();
  renderMetrics();
  renderAnalysis();
  renderTasks();
}

function setSidebarCollapsed(collapsed) {
  document.body.classList.toggle("nav-collapsed", collapsed);
  sidebarToggle.setAttribute("aria-expanded", String(!collapsed));
  sidebarToggle.setAttribute("aria-label", collapsed ? "展開側邊導覽" : "收合側邊導覽");
  sidebarToggle.setAttribute("title", collapsed ? "展開側邊導覽" : "收合側邊導覽");
  sidebarToggle.querySelector("span").textContent = collapsed ? "›" : "‹";
  try {
    localStorage.setItem(sidebarStorageKey, collapsed ? "1" : "0");
  } catch (error) {
    // Ignore storage errors; the toggle still works for the current session.
  }
}

function restoreSidebarState() {
  try {
    const stored = localStorage.getItem(sidebarStorageKey);
    setSidebarCollapsed(stored === null ? true : stored === "1");
  } catch (error) {
    setSidebarCollapsed(true);
  }
}

search.addEventListener("input", render);
industrySelect.addEventListener("change", render);

runAudit.addEventListener("click", () => {
  auditRuns += 1;
  const client = selectedClient();
  const unresolved = openClauses(client).length;
  client.timeline.unshift({
    label: "重新分析",
    detail: `第 ${auditRuns} 次重新分析完成，仍有 ${unresolved} 個未處理風險，排序已依高風險與追蹤任務更新。`,
  });
  lastAction = {
    clientId: client.id,
    time: formatNow(),
    title: "重新分析完成",
    detail: `系統重新計算 ${client.name} 的建議處理順序；已處理項目保留為追蹤，不會回到待處理。`,
  };
  render();
});

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(taskForm);
  const title = String(data.get("task") || "").trim();
  if (!title) return;

  const client = selectedClient();
  client.tasks.unshift({ title, due: "今天新增", tag: "追蹤", done: false });
  client.timeline.unshift({ label: "新增任務", detail: `新增法遵提醒：${title}` });
  lastAction = {
    clientId: client.id,
    time: formatNow(),
    title: "新增追蹤任務",
    detail: `右側任務已加入「${title}」，並同步寫入時間線。`,
  };
  taskForm.reset();
  render();
});

sidebarToggle.addEventListener("click", () => {
  setSidebarCollapsed(!document.body.classList.contains("nav-collapsed"));
});

document.querySelectorAll(".nav-item[data-target]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".nav-item").forEach((item) => {
      item.classList.toggle("active", item === button);
    });
    document.querySelector(button.dataset.target)?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

restoreSidebarState();
render();
