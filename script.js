// ================= Skills dictionary =================
const SKILL_ALIASES = {
  "react":"React","reactjs":"React","react.js":"React",
  "node":"Node.js","nodejs":"Node.js","node.js":"Node.js",
  "express":"Express.js","expressjs":"Express.js","express.js":"Express.js",
  "mongo":"MongoDB","mongodb":"MongoDB",
  "js":"JavaScript","javascript":"JavaScript",
  "ts":"TypeScript","typescript":"TypeScript",
  "html":"HTML","html5":"HTML","css":"CSS","css3":"CSS",
  "tailwind":"Tailwind CSS","tailwindcss":"Tailwind CSS","bootstrap":"Bootstrap",
  "next":"Next.js","nextjs":"Next.js","next.js":"Next.js",
  "redux":"Redux","graphql":"GraphQL",
  "rest":"REST APIs","rest api":"REST APIs","restful":"REST APIs",
  "sql":"SQL","mysql":"MySQL","postgres":"PostgreSQL","postgresql":"PostgreSQL",
  "docker":"Docker","kubernetes":"Kubernetes","k8s":"Kubernetes",
  "aws":"AWS","azure":"Azure","gcp":"GCP",
  "git":"Git","github":"Git","ci/cd":"CI/CD","cicd":"CI/CD","jenkins":"Jenkins",
  "python":"Python","django":"Django","flask":"Flask",
  "java":"Java","spring":"Spring Boot","spring boot":"Spring Boot",
  "c++":"C++","c#":"C#",".net":".NET","php":"PHP","laravel":"Laravel",
  "vue":"Vue.js","vuejs":"Vue.js","vue.js":"Vue.js","angular":"Angular",
  "firebase":"Firebase","pandas":"Pandas","numpy":"NumPy",
  "excel":"Excel","power bi":"Power BI","powerbi":"Power BI","tableau":"Tableau",
  "machine learning":"Machine Learning","ml":"Machine Learning",
  "deep learning":"Deep Learning","tensorflow":"TensorFlow","pytorch":"PyTorch",
  "data analysis":"Data Analysis","data visualization":"Data Visualization",
  "jira":"Jira","agile":"Agile","scrum":"Scrum","figma":"Figma",
  "webpack":"Webpack","jest":"Jest","mocha":"Mocha","unit testing":"Unit Testing",
  "linux":"Linux","socket.io":"Socket.IO","socketio":"Socket.IO",
  "jwt":"JWT / Auth","oauth":"JWT / Auth"
};

const ROLE_SKILLS = {
  "MERN Stack Developer": ["React","Node.js","Express.js","MongoDB","JavaScript","HTML","CSS","REST APIs","Git","TypeScript"],
  "Frontend Developer": ["React","JavaScript","HTML","CSS","Redux","Tailwind CSS","Git","TypeScript","Next.js","Webpack"],
  "Backend Developer": ["Node.js","Express.js","MongoDB","SQL","REST APIs","Docker","AWS","Git","JWT / Auth","CI/CD"],
  "Full Stack Developer": ["React","Node.js","Express.js","MongoDB","SQL","JavaScript","Docker","AWS","Git","REST APIs"],
  "Data Analyst": ["SQL","Excel","Python","Power BI","Tableau","Data Analysis","Data Visualization","Pandas","NumPy"],
  "Data Scientist": ["Python","Machine Learning","Pandas","NumPy","SQL","Deep Learning","TensorFlow","PyTorch","Data Visualization"],
  "DevOps Engineer": ["Docker","Kubernetes","AWS","CI/CD","Jenkins","Linux","Git","Azure","GCP"],
  "Java Developer": ["Java","Spring Boot","SQL","REST APIs","Git","Docker"]
};

const RELATED_SKILLS = {
  "React":["Redux","Next.js","TypeScript","Tailwind CSS"],
  "Node.js":["Express.js","MongoDB","Docker","JWT / Auth"],
  "MongoDB":["Express.js","Docker"],
  "Python":["Pandas","NumPy","Machine Learning"],
  "SQL":["PostgreSQL","MySQL","Excel"],
  "Docker":["Kubernetes","CI/CD","AWS"],
  "AWS":["Docker","CI/CD","Kubernetes"]
};

// ================= Preparation guide =================
// What to actually go learn/build for each missing skill.
// Falls back to a generic 3-step plan for anything not listed here.
const PREP_GUIDE = {
  "React": ["Build 1 project with hooks (useState/useEffect) + routing (React Router)","Learn component composition and lifting state up","Add it to resume with a live project link"],
  "Node.js": ["Build a REST API from scratch (no framework) to understand the runtime","Learn async/await, event loop basics, and npm ecosystem","Deploy one small Node app (Render/Railway) to show it live"],
  "Express.js": ["Build CRUD routes with middleware, error handling, and validation","Learn how to structure routes/controllers/models cleanly","Add JWT-based auth to one Express project"],
  "MongoDB": ["Learn schema design with Mongoose (relationships, indexing basics)","Practice aggregation pipeline queries","Connect it to a real project instead of just tutorials"],
  "JavaScript": ["Get solid on closures, promises, async/await, array methods","Solve 20-30 DSA problems in JS to prove fluency","Avoid relying only on frameworks — show vanilla JS understanding"],
  "TypeScript": ["Convert one existing JS project to TypeScript","Learn interfaces, generics, and type narrowing","Use it in a new project end-to-end, not just config files"],
  "Tailwind CSS": ["Rebuild one UI you've made in plain CSS using Tailwind utility classes","Learn responsive design with Tailwind breakpoints","Use it in your most recent portfolio project"],
  "Redux": ["Learn Redux Toolkit (modern standard, not legacy Redux)","Build one app with global state (cart, auth, theme)","Understand when Redux is overkill vs Context API"],
  "Next.js": ["Build one project using file-based routing + API routes","Learn SSR vs SSG vs client-side rendering differences","Deploy on Vercel to show a live link"],
  "GraphQL": ["Learn queries/mutations basics with Apollo Client or urql","Build one small API with a GraphQL layer over REST/DB","Understand when GraphQL is preferred over REST"],
  "REST APIs": ["Design proper REST endpoints (nouns, status codes, versioning)","Practice with Postman/Insomnia for testing","Document one API with Swagger/OpenAPI"],
  "SQL": ["Practice joins, subqueries, window functions on a real dataset","Learn indexing basics and query optimization","Do 15-20 SQL problems on a practice platform"],
  "MySQL": ["Set up a local MySQL DB and design normalized tables","Practice writing complex joins and stored procedures","Connect it to a backend project"],
  "PostgreSQL": ["Learn Postgres-specific features (JSONB, CTEs, window functions)","Practice schema design with foreign keys and constraints","Use it in place of MongoDB in one project to compare"],
  "Docker": ["Containerize one existing project (write your own Dockerfile)","Learn docker-compose for multi-container apps (app + DB)","Push an image to Docker Hub and document the steps"],
  "Kubernetes": ["Learn core concepts: pods, deployments, services first","Run a local cluster with Minikube and deploy a sample app","Don't skip Docker fundamentals before this"],
  "AWS": ["Get AWS Free Tier account and deploy one project (EC2 or Elastic Beanstalk)","Learn S3, IAM basics, and one compute service well","Consider AWS Cloud Practitioner cert as proof if time permits"],
  "Azure": ["Set up free Azure account, deploy one app via App Service","Learn Azure Blob Storage and basic IAM/RBAC concepts","Compare with AWS if you already know one cloud"],
  "GCP": ["Use GCP free tier to deploy via App Engine or Cloud Run","Learn Cloud Storage and basic IAM","Pick one cloud provider and go deep rather than shallow on three"],
  "CI/CD": ["Set up a GitHub Actions pipeline for one of your projects (test + deploy)","Learn the concept of build/test/deploy stages","Add a status badge to your README to show it in action"],
  "Jenkins": ["Set up a local Jenkins instance and create one pipeline job","Learn Jenkinsfile syntax for stages","Understand it's often used alongside Docker/Kubernetes in real jobs"],
  "Python": ["Get comfortable with core syntax, list/dict comprehensions, functions","Build one script-based project (automation or data task)","If for data roles, pair with Pandas immediately"],
  "Django": ["Build one CRUD app with Django's ORM and admin panel","Learn Django REST Framework if the role needs APIs","Deploy it so you have a live demo link"],
  "Flask": ["Build a small REST API with Flask + SQLAlchemy","Learn blueprints for structuring larger apps","Compare with Express/Django to explain trade-offs in interviews"],
  "Java": ["Solidify OOP concepts with a real project, not just theory","Practice DSA in Java if targeting product companies","Pair with Spring Boot if the role is backend-focused"],
  "Spring Boot": ["Build one REST API with Spring Boot + Spring Data JPA","Learn dependency injection and application.properties config","Add basic security with Spring Security"],
  "Machine Learning": ["Complete one end-to-end project: data cleaning to model evaluation","Learn scikit-learn basics (regression, classification, metrics)","Publish the project notebook on GitHub with clear explanation"],
  "Deep Learning": ["Build one neural network project with TensorFlow or PyTorch","Understand backpropagation and common architectures (CNN/RNN) conceptually","Don't skip the ML fundamentals before this"],
  "TensorFlow": ["Complete one image or text classification project","Learn the Keras API (it's the easiest entry point)","Compare briefly with PyTorch so you can discuss trade-offs"],
  "PyTorch": ["Build one project using PyTorch's tensor + autograd basics","Learn DataLoader and training loop structure","Many research-heavy roles prefer this over TensorFlow — worth knowing"],
  "Power BI": ["Build one interactive dashboard from a public dataset","Learn DAX basics for calculated fields/measures","Publish and share a report to show real usage"],
  "Tableau": ["Build one dashboard with filters and interactive elements","Learn calculated fields and different chart types","Use Tableau Public to host a shareable portfolio piece"],
  "Excel": ["Get fluent in pivot tables, VLOOKUP/XLOOKUP, and basic macros","Practice with a messy real dataset, not a clean tutorial one","Show one Excel-based analysis in your portfolio"],
  "Data Analysis": ["Pick a public dataset and do a full analysis: clean, explore, visualize, conclude","Learn to tell a story with data, not just produce charts","Document your process in a short write-up"],
  "Data Visualization": ["Practice with matplotlib/seaborn (Python) or a BI tool","Learn which chart types suit which data (avoid pie-chart overuse)","Recreate one dashboard you admire to learn the techniques"],
  "Pandas": ["Practice groupby, merge, pivot_table on real datasets","Learn to handle missing data and data type conversions","Use it as the backbone of one full data-analysis project"],
  "NumPy": ["Get comfortable with array operations, broadcasting, and vectorization","Understand why it's faster than plain Python loops","Usually learned alongside Pandas — pair the two"],
  "Firebase": ["Build one project with Firebase Auth + Firestore","Learn real-time listeners and security rules basics","Good quick win if you already know React/JS"],
  "Git": ["Practice branching, merging, and resolving conflicts (not just add/commit/push)","Learn rebase vs merge conceptually","Keep a clean commit history on your existing projects"],
  "Linux": ["Get comfortable with the terminal: file permissions, process management, piping","Practice basic shell scripting","Useful baseline for almost every backend/DevOps role"],
  "Jira": ["Use it (or a free equivalent) to manage your own project tasks","Learn sprint/board terminology so you're not lost in interviews","Mention it only if you've genuinely used it in team settings"],
  "Agile": ["Understand sprint cycles, standups, retrospectives conceptually","If you've worked in any team setting, map that experience to Agile terms","Don't just list it — be ready to explain how you've worked in sprints"],
  "Scrum": ["Learn the core ceremonies and roles (Scrum Master, Product Owner, etc.)","Consider a free intro course if targeting product companies","Pair with real project experience where possible"],
  "Figma": ["Recreate one existing UI in Figma to learn components/auto-layout","Learn basic handoff workflow (specs, assets) for devs","Useful even for developers who collaborate with designers"],
  "Webpack": ["Set up a project's build config manually (not just CRA/Vite defaults)","Learn loaders, plugins, and code-splitting basics","Understand why tools like Vite exist as an alternative"],
  "Jest": ["Write unit tests for one existing project's core logic","Learn mocking and snapshot testing basics","Aim for meaningful coverage on critical functions, not 100% everywhere"],
  "Unit Testing": ["Pick one testing framework for your stack and write tests for one project","Learn the difference between unit, integration, and e2e tests","Show test files in your GitHub repos as proof"],
  "JWT / Auth": ["Implement login/signup with JWT in one project end-to-end","Learn access vs refresh token patterns and secure storage","Understand common pitfalls (storing tokens in localStorage vs httpOnly cookies)"],
  "Socket.IO": ["Build one real-time feature (chat, live notifications) with Socket.IO","Learn rooms/namespaces for scaling real-time features","Pair with a Node/Express backend project"],
  "CSS": ["Get comfortable with Flexbox and Grid without a framework first","Practice responsive design with media queries","Rebuild a design from scratch to prove fundamentals, not just Bootstrap classes"],
  "HTML": ["Learn semantic HTML (proper tags, accessibility basics)","Practice forms and validation without JS frameworks","Small gap to close, but shows attention to fundamentals"]
};

function genericPrep(skill){
  return [
    `Learn ${skill} fundamentals through official docs or one solid course`,
    `Build one small project that actually uses ${skill}, not just a tutorial copy`,
    `Add it to your resume with a specific example of how you used it`
  ];
}

function getPrepPlan(skill){
  return PREP_GUIDE[skill] || genericPrep(skill);
}

// ================= Report card grade =================
function computeGrade(overallScore){
  if(overallScore>=90) return {letter:"A+", note:"Excellent — you're a strong match and interview-ready."};
  if(overallScore>=80) return {letter:"A", note:"Very good match — small gaps left to close."};
  if(overallScore>=70) return {letter:"B", note:"Solid foundation — a few targeted skills will boost this a lot."};
  if(overallScore>=55) return {letter:"C", note:"Workable, but noticeable gaps — follow the prep plan below."};
  if(overallScore>=40) return {letter:"D", note:"Significant gaps for this role — consider a closer-fit role too."};
  return {letter:"F", note:"Large mismatch with this role/JD right now — that's fixable with focused prep."};
}

// ================= Progress history (localStorage) =================
const HISTORY_KEY = "resumeRadarHistory";

function loadHistory(){
  try{ return JSON.parse(localStorage.getItem(HISTORY_KEY)) || []; }
  catch(e){ return []; }
}

function saveHistoryEntry(entry){
  const history = loadHistory();
  history.unshift(entry);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0,10)));
  return history;
}

function findPreviousForRole(history, roleLabel){
  return history.find(h => h.roleLabel === roleLabel) || null;
}

// Builds a small multi-line SVG chart plotting Overall/Match/ATS scores
// across attempts (oldest to newest, left to right). No external
// library needed — plain SVG.
function buildProgressChartSVG(history){
  const chrono = [...history].reverse(); // oldest -> newest
  const w = 640, h = 220;
  const padL = 34, padR = 12, padT = 14, padB = 28;
  const plotW = w - padL - padR, plotH = h - padT - padB;
  const n = chrono.length;

  const xFor = (i) => n === 1 ? padL + plotW/2 : padL + (i/(n-1)) * plotW;
  const yFor = (val) => padT + plotH - (val/100) * plotH;

  const lines = [
    { key: "overallScore", color: "var(--teal)", label: "Overall" },
    { key: "matchPercentage", color: "var(--violet)", label: "Match %" },
    { key: "atsScore", color: "var(--coral)", label: "ATS" },
  ];

  const gridlines = [0,25,50,75,100].map(v => `
    <line x1="${padL}" y1="${yFor(v)}" x2="${w-padR}" y2="${yFor(v)}" stroke="var(--border)" stroke-width="1" />
    <text x="${padL-8}" y="${yFor(v)+4}" font-size="10" fill="var(--muted)" text-anchor="end" font-family="var(--mono)">${v}</text>
  `).join("");

  const pathsAndDots = lines.map(line => {
    const points = chrono.map((h,i) => `${xFor(i)},${yFor(h[line.key])}`).join(" ");
    const dots = chrono.map((h,i) => `<circle cx="${xFor(i)}" cy="${yFor(h[line.key])}" r="3" fill="${line.color}" />`).join("");
    return `<polyline points="${points}" fill="none" stroke="${line.color}" stroke-width="2" />` + dots;
  }).join("");

  const xLabels = chrono.map((entry,i) => {
    if(n > 6 && i % Math.ceil(n/6) !== 0 && i !== n-1) return "";
    return `<text x="${xFor(i)}" y="${h-padB+18}" font-size="9" fill="var(--muted)" text-anchor="middle" font-family="var(--mono)">${entry.date}</text>`;
  }).join("");

  const legend = lines.map((l,i) => `
    <span style="display:inline-flex; align-items:center; gap:5px; margin-right:14px;">
      <span style="width:9px; height:9px; border-radius:50%; background:${l.color}; display:inline-block;"></span>
      <span style="font-size:0.8rem; color:var(--muted);">${l.label}</span>
    </span>
  `).join("");

  return `
    <div style="margin-bottom:8px;">${legend}</div>
    <svg viewBox="0 0 ${w} ${h}" style="width:100%; height:auto;">
      ${gridlines}
      ${pathsAndDots}
      ${xLabels}
    </svg>
  `;
}

function renderHistoryPanel(){
  const history = loadHistory();
  const panel = document.getElementById("historyPanel");
  const chartWrap = document.getElementById("historyChart");
  const list = document.getElementById("historyList");
  if(history.length === 0){ panel.style.display = "none"; return; }

  panel.style.display = "block";

  chartWrap.innerHTML = history.length >= 2
    ? buildProgressChartSVG(history)
    : `<p class="hint" style="margin:0 0 12px;">Analyze at least once more to start seeing a trend chart here.</p>`;

  list.innerHTML = history.map(h=>`
    <div class="history-row">
      <span class="h-date">${h.date}</span>
      <span class="h-role">${h.roleLabel}</span>
      <span class="h-score">${h.overallScore}/100 (${h.grade})</span>
    </div>
  `).join("");
}

document.getElementById("clearHistoryBtn").addEventListener("click", ()=>{
  localStorage.removeItem(HISTORY_KEY);
  renderHistoryPanel();
});

renderHistoryPanel();

// ================= Text extraction helpers =================
function extractSkills(text){
  if(!text) return [];
  const lower = text.toLowerCase();
  const found = new Set();
  const keys = Object.keys(SKILL_ALIASES).sort((a,b)=>b.length-a.length);
  for(const key of keys){
    const esc = key.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
    const pattern = new RegExp(`(^|[^a-z0-9+.#])${esc}($|[^a-z0-9+.#])`,"i");
    if(pattern.test(lower)) found.add(SKILL_ALIASES[key]);
  }
  return Array.from(found);
}

function detectSections(text){
  const patterns = {
    contact:/(email|phone|linkedin|github|@)/i,
    summary:/(summary|objective|profile)/i,
    experience:/(experience|employment|work history)/i,
    education:/(education|degree|university|college|b\.?tech|m\.?tech|bachelor|master)/i,
    skills:/(skills|technologies|tech stack)/i,
    projects:/(projects?)/i,
    certifications:/(certification|certificate)/i
  };
  const out = {};
  for(const [k,p] of Object.entries(patterns)) out[k]=p.test(text);
  return out;
}

function extractContactInfo(text){
  const email = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
  const phone = text.match(/(\+?\d{1,3}[-.\s]?)?\(?\d{3,5}\)?[-.\s]?\d{3,4}[-.\s]?\d{3,4}/);
  const linkedin = text.match(/linkedin\.com\/[a-zA-Z0-9\-_/]+/i);
  return { email: !!email, phone: !!phone, linkedin: !!linkedin };
}

// ================= Matching + scoring =================
function computeMatch(resumeSkills, requiredSkills){
  const resumeSet = new Set(resumeSkills);
  const required = Array.from(new Set(requiredSkills));
  const matched = required.filter(s=>resumeSet.has(s));
  const missing = required.filter(s=>!resumeSet.has(s));
  const total = required.length || 1;
  const matchPercentage = Math.round((matched.length/total)*100);

  const suggested = [...missing].sort((a,b)=>{
    const aRel = resumeSkills.some(rs=>(RELATED_SKILLS[rs]||[]).includes(a));
    const bRel = resumeSkills.some(rs=>(RELATED_SKILLS[rs]||[]).includes(b));
    return (bRel?1:0)-(aRel?1:0);
  }).slice(0,3);

  const potentialPercentage = Math.min(100, Math.round(((matched.length+suggested.length)/total)*100));

  return { totalRequired: required.length, matchedCount: matched.length, matchPercentage, matched, missing, suggested, potentialPercentage };
}

function computeAtsScore(resumeText, matchPercentage){
  const sections = detectSections(resumeText);
  const contact = extractContactInfo(resumeText);
  const wordCount = resumeText.trim().split(/\s+/).length;
  let score = 0;
  const tips = [];

  const weights = {contact:6,summary:5,experience:10,education:6,skills:8,projects:5};
  for(const [k,w] of Object.entries(weights)){
    if(sections[k]) score+=w; else tips.push(`Missing "${k}" section — add it to help ATS parsing.`);
  }

  let cScore=0;
  if(contact.email) cScore+=4; else tips.push("No email address detected — make sure it's plain text, not an image.");
  if(contact.phone) cScore+=3;
  if(contact.linkedin) cScore+=3; else tips.push("No LinkedIn URL detected — add one near your contact info.");
  score+=cScore;

  if(wordCount>=250 && wordCount<=900) score+=10;
  else if(wordCount<250){ score+=4; tips.push("Resume looks short — ATS and recruiters may see it as thin on detail."); }
  else { score+=6; tips.push("Resume looks long — consider trimming to 1-2 pages."); }

  const bulletCount = (resumeText.match(/(^|\n)\s*[•\-\*]/g)||[]).length;
  if(bulletCount>=5) score+=10;
  else { score+=3; tips.push("Few bullet points detected — use bullets for experience/projects instead of paragraphs."); }

  score += Math.round((matchPercentage/100)*30);
  score = Math.min(100, score);

  return { atsScore: score, sections, wordCount, tips };
}

// ================= LinkedIn link builder =================
function buildLinkedInUrl({role, topSkills=[], location="", workType, experienceLevel}){
  const keywords = [role, ...topSkills.slice(0,3)].filter(Boolean).join(" ");
  const params = new URLSearchParams();
  if(keywords) params.set("keywords", keywords);
  if(location) params.set("location", location);
  const wt = {onsite:"1",remote:"2",hybrid:"3"};
  if(workType && wt[workType]) params.set("f_WT", wt[workType]);
  const exp = {internship:"1",entry:"2",associate:"3","mid-senior":"4"};
  if(experienceLevel && exp[experienceLevel]) params.set("f_E", exp[experienceLevel]);
  return `https://www.linkedin.com/jobs/search/?${params.toString()}`;
}

function buildJobLinks({role, matched=[], location, workType, experienceLevel}){
  const links = [];
  links.push({label:`${role||"Matching"} roles`, url: buildLinkedInUrl({role, location, workType, experienceLevel})});
  if(matched.length){
    links.push({label:`${role||"Roles"} + top matched skills`, url: buildLinkedInUrl({role, topSkills:matched, location, workType, experienceLevel})});
  }
  if(matched.length>=2){
    links.push({label:`Skill-focused search (${matched.slice(0,2).join(", ")})`, url: buildLinkedInUrl({role:"", topSkills:matched.slice(0,3), location, workType, experienceLevel})});
  }
  return links;
}

// ================= File extraction =================
pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

async function extractTextFromFile(file){
  const ext = file.name.split(".").pop().toLowerCase();
  const buf = await file.arrayBuffer();

  if(ext === "pdf"){
    const pdf = await pdfjsLib.getDocument({data: buf}).promise;
    let text = "";
    for(let i=1;i<=pdf.numPages;i++){
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      text += content.items.map(it=>it.str).join(" ") + "\n";
    }
    return text;
  }
  if(ext === "docx"){
    const result = await mammoth.extractRawText({arrayBuffer: buf});
    return result.value;
  }
  throw new Error("Unsupported file type. Please upload a PDF or DOCX.");
}

// ================= Wiring =================
const roleSelect = document.getElementById("roleSelect");
roleSelect.innerHTML = `<option value="">-- Select a job role (optional if pasting JD) --</option>` +
  Object.keys(ROLE_SKILLS).map(r=>`<option value="${r}">${r}</option>`).join("");

const dropzone = document.getElementById("dropzone");
const fileInput = document.getElementById("fileInput");
const fileStatus = document.getElementById("fileStatus");
const runBtn = document.getElementById("runBtn");
let selectedFile = null;

dropzone.addEventListener("click", ()=>fileInput.click());
fileInput.addEventListener("change", (e)=>{
  selectedFile = e.target.files[0] || null;
  if(selectedFile){
    dropzone.classList.add("filled");
    dropzone.textContent = `📄 ${selectedFile.name}`;
    fileStatus.textContent = "Ready to analyze.";
  }
  updateRunState();
});

const jdInput = document.getElementById("jdInput");
[roleSelect, jdInput].forEach(el=>el.addEventListener("input", updateRunState));

function updateRunState(){
  const hasTarget = roleSelect.value || jdInput.value.trim().length >= 20;
  runBtn.disabled = !(selectedFile && hasTarget);
}

function scoreColor(pct){
  if(pct>=75) return "var(--teal)";
  if(pct>=50) return "var(--coral)";
  return "#f06565";
}

runBtn.addEventListener("click", async ()=>{
  const errorBox = document.getElementById("errorBox");
  const results = document.getElementById("results");
  errorBox.innerHTML = "";
  results.innerHTML = "";
  runBtn.disabled = true;
  runBtn.textContent = "Analyzing...";

  try{
    const resumeText = await extractTextFromFile(selectedFile);
    if(!resumeText || resumeText.trim().length < 20){
      throw new Error("Could not extract readable text from this file.");
    }

    const jobRole = roleSelect.value;
    const jd = jdInput.value.trim();
    let requiredSkills, source;
    if(jd.length >= 20){
      requiredSkills = extractSkills(jd); source = "jd";
    } else {
      requiredSkills = ROLE_SKILLS[jobRole] || []; source = "role";
    }
    if(requiredSkills.length === 0){
      throw new Error("Please select a job role or paste a job description so we know what to match against.");
    }

    const resumeSkills = extractSkills(resumeText);
    const match = computeMatch(resumeSkills, requiredSkills);
    const ats = computeAtsScore(resumeText, match.matchPercentage);
    const jobLinks = buildJobLinks({
      role: jobRole,
      matched: match.matched,
      location: document.getElementById("locInput").value.trim(),
      workType: document.getElementById("workType").value,
      experienceLevel: document.getElementById("expLevel").value
    });

    const overallScore = Math.round(match.matchPercentage*0.6 + ats.atsScore*0.4);
    const grade = computeGrade(overallScore);
    const roleLabel = jobRole || (source === "jd" ? "Pasted JD" : "Unspecified role");

    const historyBefore = loadHistory();
    const previous = findPreviousForRole(historyBefore, roleLabel);

    renderResults({match, ats, source, jobLinks, overallScore, grade, previous, roleLabel});

    saveHistoryEntry({
      date: new Date().toLocaleDateString('en-IN', {day:'2-digit', month:'short', year:'numeric'}),
      roleLabel,
      matchPercentage: match.matchPercentage,
      atsScore: ats.atsScore,
      overallScore,
      grade: grade.letter
    });
    renderHistoryPanel();

    document.getElementById("reportActions").style.display = "flex";
    document.getElementById("printDate").textContent =
      `Role: ${roleLabel} — Generated ${new Date().toLocaleDateString('en-IN', {day:'2-digit', month:'long', year:'numeric'})}`;
    window.__lastReport = {match, ats, overallScore, grade, roleLabel};
  }catch(err){
    errorBox.innerHTML = `<div class="err">${err.message}</div>`;
  }finally{
    runBtn.disabled = false;
    runBtn.textContent = "Analyze Resume";
    updateRunState();
  }
});

function renderResults({match, ats, source, jobLinks, overallScore, grade, previous, roleLabel}){
  const results = document.getElementById("results");

  const deltaHtml = previous
    ? (() => {
        const diff = overallScore - previous.overallScore;
        const cls = diff > 0 ? "up" : diff < 0 ? "down" : "";
        const arrow = diff > 0 ? "▲" : diff < 0 ? "▼" : "—";
        return `<div class="delta ${cls}">${arrow} ${Math.abs(diff)} pts vs your last attempt for "${roleLabel}" (${previous.date})</div>`;
      })()
    : `<div class="delta" style="color:var(--muted);">First analysis saved for "${roleLabel}" — next time you'll see your progress here.</div>`;

  const gradeBoxHtml = `
    <div class="panel">
      <div class="grade-box">
        <div class="grade-letter" style="color:${scoreColor(overallScore)};">${grade.letter}</div>
        <div class="grade-copy">
          <div class="grade-title">Overall Readiness: ${overallScore}/100</div>
          <div class="grade-sub">${grade.note}</div>
          ${deltaHtml}
        </div>
      </div>
    </div>
  `;

  const sectionLabels = {contact:"Contact",summary:"Summary",experience:"Experience",education:"Education",skills:"Skills",projects:"Projects",certifications:"Certifications"};
  const sectionRows = Object.entries(ats.sections).map(([k,ok])=>
    `<div class="section-row"><span class="dot ${ok?'ok':'no'}"></span>${sectionLabels[k]||k}</div>`
  ).join("");

  const tipsHtml = ats.tips.length
    ? `<h3 class="sub-h">Improvement suggestions</h3><ul class="tips">${ats.tips.map(t=>`<li>${t}</li>`).join("")}</ul>`
    : "";

  const chipsHtml = (arr, cls, sign) => arr.length
    ? arr.map(s=>`<span class="chip ${cls}">${sign} ${s}</span>`).join("")
    : `<span style="color:var(--muted); font-size:0.9rem;">None</span>`;

  const jobLinksHtml = jobLinks.map(l=>
    `<a class="joblink" href="${l.url}" target="_blank" rel="noreferrer"><span>${l.label}</span><span class="go">OPEN ↗</span></a>`
  ).join("");

  // Preparation plan: one card per missing skill with concrete next steps
  const prepHtml = match.missing.length
    ? match.missing.map(skill=>{
        const steps = getPrepPlan(skill);
        return `
          <div class="prep-card">
            <div class="prep-title"><span class="flag">PREPARE</span> ${skill}</div>
            <ul>${steps.map(s=>`<li>${s}</li>`).join("")}</ul>
          </div>`;
      }).join("")
    : `<p class="hint" style="margin:0;">Nothing missing — you already cover every required skill for this role/JD.</p>`;

  results.innerHTML = `
    ${gradeBoxHtml}
    <div class="panel">
      <div class="readouts">
        <div class="readout">
          <div class="num" style="color:${scoreColor(match.matchPercentage)}">${match.matchPercentage}%</div>
          <div class="label">Skill match — ${match.matchedCount}/${match.totalRequired}</div>
          <div class="sub">source: ${source === 'jd' ? 'pasted job description' : 'selected role preset'}</div>
        </div>
        <div class="readout">
          <div class="num" style="color:${scoreColor(ats.atsScore)}">${ats.atsScore}</div>
          <div class="label">ATS score /100</div>
          <div class="sub">${ats.wordCount} words</div>
        </div>
      </div>
      ${match.suggested.length ? `<p class="hint" style="margin-top:14px;">Add ${match.suggested.join(", ")} → potential match ~${match.potentialPercentage}%</p>` : ""}
    </div>

    <div class="panel">
      <h3 class="sub-h">✅ Matched skills</h3>
      <div class="chips">${chipsHtml(match.matched,'m','✓')}</div>
      <h3 class="sub-h">❌ Missing skills</h3>
      <div class="chips">${chipsHtml(match.missing,'x','✗')}</div>
      <h3 class="sub-h">⚠️ Suggested to add</h3>
      <div class="chips">${chipsHtml(match.suggested,'s','+')}</div>
    </div>

    <div class="panel">
      <h3 class="sub-h" style="margin-top:0;">🎯 What to prepare for this job</h3>
      <p class="hint" style="margin-top:0;">Concrete next steps for each missing skill — not just "learn X".</p>
      ${prepHtml}
    </div>

    <div class="panel">
      <h3 class="sub-h">Section checklist</h3>
      ${sectionRows}
      ${tipsHtml}
    </div>

    <div class="panel">
      <h3 class="sub-h" style="margin-top:0;">🔎 LinkedIn job search links</h3>
      <div class="disclosure">Pre-filled LinkedIn search links built from your matched skills + role — live listings aren't scraped (against LinkedIn's terms), so this opens a properly filtered search instead.</div>
      ${jobLinksHtml}
    </div>
  `;
}

// ================= Download report (PDF via print) =================
document.getElementById("downloadBtn").addEventListener("click", ()=>{
  window.print();
});

// ================= Copy summary =================
document.getElementById("copyBtn").addEventListener("click", async ()=>{
  const r = window.__lastReport;
  if(!r) return;
  const text = [
    `Resume Radar — Analysis Summary`,
    `Role: ${r.roleLabel}`,
    `Overall Readiness: ${r.overallScore}/100 (Grade ${r.grade.letter})`,
    `Skill Match: ${r.match.matchedCount}/${r.match.totalRequired} (${r.match.matchPercentage}%)`,
    `ATS Score: ${r.ats.atsScore}/100`,
    ``,
    `Matched: ${r.match.matched.join(", ") || "None"}`,
    `Missing: ${r.match.missing.join(", ") || "None"}`,
    `Suggested to add: ${r.match.suggested.join(", ") || "None"}`,
  ].join("\n");

  const btn = document.getElementById("copyBtn");
  try{
    await navigator.clipboard.writeText(text);
    btn.textContent = "✅ Copied!";
    btn.classList.add("copied");
  }catch(e){
    btn.textContent = "Couldn't copy - select text manually";
  }
  setTimeout(()=>{
    btn.textContent = "📋 Copy Summary";
    btn.classList.remove("copied");
  }, 2000);
});
