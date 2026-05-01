import { useState } from "react";

const LANGUAGES = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "pt", label: "Português", flag: "🇧🇷" },
  { code: "nl", label: "Nederlands", flag: "🇳🇱" },
  { code: "pl", label: "Polski", flag: "🇵🇱" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "uk", label: "Українська", flag: "🇺🇦" },
  { code: "ar", label: "العربية", flag: "🇸🇦", rtl: true },
  { code: "hi", label: "हिन्दी", flag: "🇮🇳" },
  { code: "bn", label: "বাংলা", flag: "🇧🇩" },
  { code: "zh", label: "中文 (简体)", flag: "🇨🇳" },
  { code: "zh-TW", label: "中文 (繁體)", flag: "🇹🇼" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
  { code: "ko", label: "한국어", flag: "🇰🇷" },
  { code: "tr", label: "Türkçe", flag: "🇹🇷" },
  { code: "vi", label: "Tiếng Việt", flag: "🇻🇳" },
  { code: "th", label: "ภาษาไทย", flag: "🇹🇭" },
  { code: "id", label: "Bahasa Indonesia", flag: "🇮🇩" },
  { code: "ms", label: "Bahasa Melayu", flag: "🇲🇾" },
  { code: "fa", label: "فارسی", flag: "🇮🇷", rtl: true },
  { code: "ur", label: "اردو", flag: "🇵🇰", rtl: true },
  { code: "sw", label: "Kiswahili", flag: "🇰🇪" },
  { code: "am", label: "አማርኛ", flag: "🇪🇹" },
  { code: "ro", label: "Română", flag: "🇷🇴" },
  { code: "el", label: "Ελληνικά", flag: "🇬🇷" },
  { code: "hu", label: "Magyar", flag: "🇭🇺" },
  { code: "sv", label: "Svenska", flag: "🇸🇪" },
];

const COUNTRIES = [
  { code: "GB", name: "United Kingdom", flag: "🇬🇧" },
  { code: "US", name: "United States", flag: "🇺🇸" },
  { code: "AU", name: "Australia", flag: "🇦🇺" },
  { code: "CA", name: "Canada", flag: "🇨🇦" },
  { code: "NZ", name: "New Zealand", flag: "🇳🇿" },
  { code: "IE", name: "Ireland", flag: "🇮🇪" },
  { code: "ZA", name: "South Africa", flag: "🇿🇦" },
  { code: "IN", name: "India", flag: "🇮🇳" },
  { code: "PK", name: "Pakistan", flag: "🇵🇰" },
  { code: "BD", name: "Bangladesh", flag: "🇧🇩" },
  { code: "NG", name: "Nigeria", flag: "🇳🇬" },
  { code: "GH", name: "Ghana", flag: "🇬🇭" },
  { code: "KE", name: "Kenya", flag: "🇰🇪" },
  { code: "ET", name: "Ethiopia", flag: "🇪🇹" },
  { code: "TZ", name: "Tanzania", flag: "🇹🇿" },
  { code: "DE", name: "Germany", flag: "🇩🇪" },
  { code: "FR", name: "France", flag: "🇫🇷" },
  { code: "IT", name: "Italy", flag: "🇮🇹" },
  { code: "ES", name: "Spain", flag: "🇪🇸" },
  { code: "PT", name: "Portugal", flag: "🇵🇹" },
  { code: "NL", name: "Netherlands", flag: "🇳🇱" },
  { code: "BE", name: "Belgium", flag: "🇧🇪" },
  { code: "CH", name: "Switzerland", flag: "🇨🇭" },
  { code: "AT", name: "Austria", flag: "🇦🇹" },
  { code: "SE", name: "Sweden", flag: "🇸🇪" },
  { code: "NO", name: "Norway", flag: "🇳🇴" },
  { code: "DK", name: "Denmark", flag: "🇩🇰" },
  { code: "FI", name: "Finland", flag: "🇫🇮" },
  { code: "PL", name: "Poland", flag: "🇵🇱" },
  { code: "RO", name: "Romania", flag: "🇷🇴" },
  { code: "HU", name: "Hungary", flag: "🇭🇺" },
  { code: "GR", name: "Greece", flag: "🇬🇷" },
  { code: "RU", name: "Russia", flag: "🇷🇺" },
  { code: "UA", name: "Ukraine", flag: "🇺🇦" },
  { code: "TR", name: "Turkey", flag: "🇹🇷" },
  { code: "SA", name: "Saudi Arabia", flag: "🇸🇦" },
  { code: "AE", name: "UAE", flag: "🇦🇪" },
  { code: "EG", name: "Egypt", flag: "🇪🇬" },
  { code: "MA", name: "Morocco", flag: "🇲🇦" },
  { code: "IR", name: "Iran", flag: "🇮🇷" },
  { code: "CN", name: "China", flag: "🇨🇳" },
  { code: "JP", name: "Japan", flag: "🇯🇵" },
  { code: "KR", name: "South Korea", flag: "🇰🇷" },
  { code: "TW", name: "Taiwan", flag: "🇹🇼" },
  { code: "TH", name: "Thailand", flag: "🇹🇭" },
  { code: "VN", name: "Vietnam", flag: "🇻🇳" },
  { code: "ID", name: "Indonesia", flag: "🇮🇩" },
  { code: "MY", name: "Malaysia", flag: "🇲🇾" },
  { code: "PH", name: "Philippines", flag: "🇵🇭" },
  { code: "SG", name: "Singapore", flag: "🇸🇬" },
  { code: "BR", name: "Brazil", flag: "🇧🇷" },
  { code: "MX", name: "Mexico", flag: "🇲🇽" },
  { code: "AR", name: "Argentina", flag: "🇦🇷" },
  { code: "CO", name: "Colombia", flag: "🇨🇴" },
  { code: "CL", name: "Chile", flag: "🇨🇱" },
  { code: "PE", name: "Peru", flag: "🇵🇪" },
];

const UI = {
  en: { title:"ScamShield Recovery", tagline:"Free · Confidential · Step-by-step", fightBack:"YOU WERE WRONGED — LET'S FIGHT BACK", headline:"Get your personalised", headlineAccent:"money recovery plan", intro:"Answer a few quick questions. We'll generate a step-by-step action plan specific to your situation — and the best chance of getting your money back.", step:"STEP", of:"OF", complete:"% complete", actionPlan:"YOUR ACTION PLAN — IN ORDER OF PRIORITY", warnings:"⚠️ IMPORTANT WARNINGS", orgs:"HELPFUL ORGANISATIONS", shareMsg:"Help someone else →", shareHint:"Share this tool with anyone who needs it", startOver:"Start over", building:"Building your recovery plan...", analysing:"Analysing your situation and finding the best options", urgencyHigh:"HIGH URGENCY", urgencyMedium:"MEDIUM URGENCY", urgencyLow:"LOW URGENCY", countryQuestion:"Where are you based?", countrySubtitle:"So we can show the right reporting authorities for your country", chooseCountry:"Search countries…", tryAgain:"Try Again", errorMsg:"Something went wrong. Please try again.", printSave:"🖨️ Print / Save PDF", sharePlan:"📤 Share Plan", copyPlan:"📋 Copy plan text", copied:"✓ Copied!", whatsapp:"💬 WhatsApp", emailShare:"📧 Send by email", shareText:"I found this free scam recovery tool — it builds a personalised step-by-step plan to help get your money back:" },
  es: { title:"ScamShield Recovery", tagline:"Gratis · Confidencial · Paso a paso", fightBack:"TE HAN ESTAFADO — VAMOS A LUCHAR", headline:"Obtén tu plan personalizado de", headlineAccent:"recuperación de dinero", intro:"Responde unas preguntas. Generaremos un plan paso a paso específico para tu situación.", step:"PASO", of:"DE", complete:"% completado", actionPlan:"TU PLAN DE ACCIÓN — EN ORDEN DE PRIORIDAD", warnings:"⚠️ ADVERTENCIAS IMPORTANTES", orgs:"ORGANIZACIONES DE AYUDA", shareMsg:"Ayuda a alguien más →", shareHint:"Comparte con quien lo necesite", startOver:"Empezar de nuevo", building:"Creando tu plan...", analysing:"Analizando tu situación", urgencyHigh:"URGENCIA ALTA", urgencyMedium:"URGENCIA MEDIA", urgencyLow:"URGENCIA BAJA", countryQuestion:"¿Dónde estás?", countrySubtitle:"Para mostrarte las autoridades correctas", chooseCountry:"Buscar países…", tryAgain:"Intentar de nuevo", errorMsg:"Algo salió mal.", printSave:"🖨️ Imprimir / PDF", sharePlan:"📤 Compartir", copyPlan:"📋 Copiar texto", copied:"✓ ¡Copiado!", whatsapp:"💬 WhatsApp", emailShare:"📧 Correo electrónico", shareText:"Encontré esta herramienta gratuita de recuperación de estafas:" },
  fr: { title:"ScamShield Recovery", tagline:"Gratuit · Confidentiel · Étape par étape", fightBack:"VOUS AVEZ ÉTÉ ARNAQUÉ — BATTONS-NOUS", headline:"Obtenez votre plan personnalisé de", headlineAccent:"récupération d'argent", intro:"Répondez à quelques questions. Nous générerons un plan d'action étape par étape.", step:"ÉTAPE", of:"SUR", complete:"% complété", actionPlan:"VOTRE PLAN D'ACTION — PAR ORDRE DE PRIORITÉ", warnings:"⚠️ AVERTISSEMENTS IMPORTANTS", orgs:"ORGANISATIONS UTILES", shareMsg:"Aidez quelqu'un d'autre →", shareHint:"Partagez avec quiconque en a besoin", startOver:"Recommencer", building:"Création du plan...", analysing:"Analyse de votre situation", urgencyHigh:"URGENCE HAUTE", urgencyMedium:"URGENCE MOYENNE", urgencyLow:"URGENCE FAIBLE", countryQuestion:"Où êtes-vous basé ?", countrySubtitle:"Pour afficher les bonnes autorités", chooseCountry:"Rechercher…", tryAgain:"Réessayer", errorMsg:"Une erreur s'est produite.", printSave:"🖨️ Imprimer / PDF", sharePlan:"📤 Partager", copyPlan:"📋 Copier le texte", copied:"✓ Copié !", whatsapp:"💬 WhatsApp", emailShare:"📧 Email", shareText:"J'ai trouvé cet outil gratuit de récupération d'arnaque :" },
  de: { title:"ScamShield Recovery", tagline:"Kostenlos · Vertraulich · Schritt für Schritt", fightBack:"SIE WURDEN BETROGEN — KÄMPFEN WIR ZURÜCK", headline:"Erhalten Sie Ihren personalisierten", headlineAccent:"Geldwiederherstellungsplan", intro:"Beantworten Sie ein paar Fragen. Wir erstellen einen Aktionsplan speziell für Ihre Situation.", step:"SCHRITT", of:"VON", complete:"% abgeschlossen", actionPlan:"IHR AKTIONSPLAN — NACH PRIORITÄT", warnings:"⚠️ WICHTIGE WARNUNGEN", orgs:"HILFREICHE ORGANISATIONEN", shareMsg:"Anderen helfen →", shareHint:"Teilen Sie dieses Tool mit jedem, der es braucht", startOver:"Von vorne beginnen", building:"Plan wird erstellt...", analysing:"Analyse Ihrer Situation", urgencyHigh:"HOHE DRINGLICHKEIT", urgencyMedium:"MITTLERE DRINGLICHKEIT", urgencyLow:"NIEDRIGE DRINGLICHKEIT", countryQuestion:"Wo sind Sie ansässig?", countrySubtitle:"Um die richtigen Behörden zu zeigen", chooseCountry:"Länder suchen…", tryAgain:"Erneut versuchen", errorMsg:"Etwas ist schiefgelaufen.", printSave:"🖨️ Drucken / PDF", sharePlan:"📤 Teilen", copyPlan:"📋 Text kopieren", copied:"✓ Kopiert!", whatsapp:"💬 WhatsApp", emailShare:"📧 E-Mail", shareText:"Ich habe dieses kostenlose Tool zur Betrugswiederherstellung gefunden:" },
};
function getUI(lang) { return UI[lang] || UI["en"]; }

const STEPS = [
  { id:"type", options:[
    { value:"romance", emoji:"💔", en:"Romance / Catfish", descEn:"Someone built trust online then asked for money" },
    { value:"investment", emoji:"📈", en:"Investment / Crypto", descEn:"Fake trading platform or investment opportunity" },
    { value:"phishing", emoji:"🎣", en:"Phishing / Fake Website", descEn:"Fake bank, shop or service stole your details" },
    { value:"purchase", emoji:"🛍️", en:"Online Purchase", descEn:"Paid for goods or services that never arrived" },
    { value:"impersonation", emoji:"👮", en:"Impersonation", descEn:"Someone pretended to be from a bank, tax office, police etc." },
    { value:"other", emoji:"❓", en:"Other / Not Sure", descEn:"Something else or I'm not certain" },
  ]},
  { id:"payment", options:[
    { value:"bank_transfer", emoji:"🏦", en:"Bank Transfer", descEn:"Sent directly from your bank account" },
    { value:"card", emoji:"💳", en:"Debit or Credit Card", descEn:"Paid by card on a website or over the phone" },
    { value:"crypto", emoji:"₿", en:"Cryptocurrency", descEn:"Bitcoin, Ethereum or other crypto" },
    { value:"gift_card", emoji:"🎁", en:"Gift Cards", descEn:"iTunes, Amazon, Google Play etc." },
    { value:"cash", emoji:"💵", en:"Cash / Money Transfer", descEn:"Western Union, MoneyGram or physical cash" },
    { value:"paypal", emoji:"🅿️", en:"PayPal / Wise / Revolut", descEn:"Sent via a digital payment app" },
  ]},
  { id:"timing", options:[
    { value:"today", emoji:"⚡", en:"Today", descEn:"Within the last 24 hours" },
    { value:"week", emoji:"📅", en:"This week", descEn:"2–7 days ago" },
    { value:"month", emoji:"🗓️", en:"This month", descEn:"1–4 weeks ago" },
    { value:"older", emoji:"📆", en:"More than a month ago", descEn:"Over a month has passed" },
  ]},
  { id:"amount", options:[
    { value:"under_500", emoji:"💰", en:"Small amount", descEn:"Under ~$500 / £500 / €500" },
    { value:"500_5000", emoji:"💰💰", en:"Medium amount", descEn:"$500 – $5,000 equivalent" },
    { value:"5000_25000", emoji:"💰💰💰", en:"Large amount", descEn:"$5,000 – $25,000 equivalent" },
    { value:"over_25000", emoji:"🚨", en:"Very large amount", descEn:"Over $25,000 equivalent" },
  ]},
];

const STEP_Q = {
  en:["What kind of scam happened?","How did you send the money?","When did this happen?","Roughly how much was lost?"],
  es:["¿Qué tipo de estafa ocurrió?","¿Cómo enviaste el dinero?","¿Cuándo ocurrió?","¿Cuánto dinero se perdió?"],
  fr:["Quel type d'arnaque s'est produit ?","Comment avez-vous envoyé l'argent ?","Quand cela s'est-il passé ?","Combien d'argent a été perdu ?"],
  de:["Welche Art von Betrug ist passiert?","Wie haben Sie das Geld gesendet?","Wann ist das passiert?","Wie viel Geld wurde verloren?"],
};
const STEP_SUB = {
  en:["Select the one that best describes your situation","This determines which recovery routes are available","Recovery chances vary depending on how quickly you act","This helps prioritise the right escalation channels"],
  es:["Selecciona la que mejor describe tu situación","Esto determina qué vías de recuperación están disponibles","Las posibilidades varían según la rapidez con que actúes","Esto ayuda a priorizar los canales correctos"],
  fr:["Sélectionnez celle qui décrit le mieux votre situation","Cela détermine les voies de récupération disponibles","Les chances varient selon la rapidité d'action","Cela aide à prioriser les bons canaux"],
  de:["Wählen Sie die Option die Ihre Situation am besten beschreibt","Dies bestimmt die verfügbaren Wiederherstellungswege","Die Chancen variieren je nach Schnelligkeit","Dies hilft die richtigen Kanäle zu priorisieren"],
};

function detectLang() {
  const code = (navigator.language || "en").split("-")[0].toLowerCase();
  return LANGUAGES.find(l => l.code === code || l.code.startsWith(code))?.code || "en";
}

export default function ScamRecovery() {
  const [lang, setLang] = useState(detectLang);
  const [country, setCountry] = useState(null);
  const [countrySearch, setCountrySearch] = useState("");
  const [showLangPicker, setShowLangPicker] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [phase, setPhase] = useState("country");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [plan, setPlan] = useState(null);
  const [planError, setPlanError] = useState(null);
  const [copied, setCopied] = useState(false);

  const ui = getUI(lang);
  const isRtl = LANGUAGES.find(l => l.code === lang)?.rtl || false;
  const progress = (step / STEPS.length) * 100;
  const URGENCY_CLR = { high:"#ff3b3b", medium:"#ff9500", low:"#34c759" };
  const countryObj = COUNTRIES.find(c => c.code === country);
  const langObj = LANGUAGES.find(l => l.code === lang);
  const filtered = COUNTRIES.filter(c => c.name.toLowerCase().includes(countrySearch.toLowerCase()));

  // ─ Build printable plain text ─────────────────────────────────────────────
  function buildText() {
    if (!plan) return "";
    return [
      "🛡️ SCAMSHIELD RECOVERY PLAN",
      `${countryObj?.flag} ${countryObj?.name}  ·  ${langObj?.label}`,
      `Generated: ${new Date().toLocaleDateString()}`,
      "", `URGENCY: ${plan.urgency?.toUpperCase()}`,
      plan.headline, plan.chance,
      "", "─── ACTION STEPS ───",
      ...(plan.steps||[]).map((s,i)=>`\n${i+1}. ${s.icon} ${s.title}\n   ${s.what}\n   → ${s.how}${s.deadline?`\n   ⏱ ${s.deadline}`:""}`),
      "", "─── WARNINGS ───",
      ...(plan.warnings||[]).map(w=>`• ${w}`),
      "", "─── HELPFUL ORGANISATIONS ───",
      ...(plan.resources||[]).map(r=>`• ${r.name}: ${r.url}`),
      "", "Free tool: ScamShield Recovery",
    ].join("\n");
  }

  // ─ Print / Save PDF ───────────────────────────────────────────────────────
  function handlePrint() {
    const uc = URGENCY_CLR[plan?.urgency] || "#e63946";
    const win = window.open("","_blank");
    win.document.write(`<!DOCTYPE html><html><head><title>ScamShield Recovery Plan</title>
    <style>
      *{box-sizing:border-box}
      body{font-family:Georgia,serif;max-width:700px;margin:36px auto;color:#111;line-height:1.7;font-size:14px;padding:0 20px}
      h1{font-size:22px;border-bottom:2px solid #e63946;padding-bottom:8px;margin-bottom:4px}
      .meta{color:#777;font-size:12px;margin-bottom:18px}
      .urgbadge{display:inline-block;background:${uc};color:#fff;padding:3px 12px;border-radius:4px;font-size:11px;letter-spacing:.08em;margin-bottom:8px;font-family:monospace}
      .headline{font-size:17px;font-weight:bold;margin-bottom:5px}
      .chance{color:#555;font-size:13px;margin-bottom:22px}
      .seclabel{font-size:11px;letter-spacing:.1em;color:#888;text-transform:uppercase;margin:22px 0 10px;border-bottom:1px solid #eee;padding-bottom:6px;font-family:monospace}
      .stepcard{border:1px solid #ddd;border-radius:8px;padding:14px 16px;margin-bottom:12px;page-break-inside:avoid}
      .stepnum{display:inline-flex;align-items:center;justify-content:center;background:#e63946;color:#fff;border-radius:50%;width:22px;height:22px;font-size:11px;margin-right:8px;vertical-align:middle;font-family:monospace;font-weight:bold}
      .steptitle{font-weight:bold;font-size:14px}
      .stepwhat{color:#444;margin:6px 0;font-size:13px}
      .stephow{background:#f8f8f8;border-left:3px solid #e8c87a;padding:7px 10px;font-size:12px;color:#555;border-radius:0 4px 4px 0;margin-top:6px;font-family:monospace}
      .deadline{color:#b87800;font-size:11px;margin-top:5px;font-family:monospace}
      .warnitem{border-left:3px solid #e63946;padding:6px 10px;color:#b00;margin-bottom:6px;font-size:13px}
      .resitem{padding:8px 0;border-bottom:1px solid #eee;font-size:13px}
      .resitem a{color:#1a6abf}
      .foot{margin-top:32px;font-size:11px;color:#aaa;text-align:center;border-top:1px solid #eee;padding-top:12px;font-family:monospace}
      @media print{body{margin:0}}
    </style></head><body>
    <h1>🛡️ ScamShield Recovery Plan</h1>
    <div class="meta">${countryObj?.flag} ${countryObj?.name} &nbsp;·&nbsp; ${langObj?.label} &nbsp;·&nbsp; ${new Date().toLocaleDateString()}</div>
    <div class="urgbadge">${plan?.urgency?.toUpperCase()} URGENCY</div>
    <div class="headline">${plan?.headline||""}</div>
    <div class="chance">${plan?.chance||""}</div>
    <div class="seclabel">Action Steps</div>
    ${(plan?.steps||[]).map((s,i)=>`
      <div class="stepcard">
        <span class="stepnum">${i+1}</span><span class="steptitle">${s.icon} ${s.title}</span>
        <div class="stepwhat">${s.what}</div>
        <div class="stephow">${s.how}</div>
        ${s.deadline?`<div class="deadline">⏱ ${s.deadline}</div>`:""}
      </div>`).join("")}
    ${plan?.warnings?.length?`<div class="seclabel">⚠️ Important Warnings</div>${plan.warnings.map(w=>`<div class="warnitem">${w}</div>`).join("")}`:""}
    ${plan?.resources?.length?`<div class="seclabel">Helpful Organisations</div>${plan.resources.map(r=>`<div class="resitem"><strong>${r.name}</strong> — <a href="${r.url}">${r.url}</a><br/><span style="color:#777">${r.what}</span></div>`).join("")}`:""}
    <div class="foot">Generated by ScamShield Recovery &nbsp;·&nbsp; Free &amp; Confidential</div>
    </body></html>`);
    win.document.close();
    setTimeout(()=>win.print(), 450);
  }

  // ─ Share handlers ─────────────────────────────────────────────────────────
  async function handleShareBtn() {
    const url = window.location.href;
    if (navigator.share) {
      try { await navigator.share({ title:"ScamShield Recovery", text:ui.shareText, url }); return; } catch {}
    }
    setShowShareMenu(v=>!v);
  }

  async function copyPlanText() {
    try { await navigator.clipboard.writeText(buildText()); setCopied(true); setTimeout(()=>setCopied(false),2500); } catch {}
    setShowShareMenu(false);
  }

  function goWhatsApp() {
    window.open(`https://wa.me/?text=${encodeURIComponent(ui.shareText+" "+window.location.href)}`,"_blank");
    setShowShareMenu(false);
  }

  function goEmail() {
    window.open(`mailto:?subject=${encodeURIComponent("ScamShield Recovery Plan")}&body=${encodeURIComponent(buildText())}`,"_blank");
    setShowShareMenu(false);
  }

  // ─ Question flow ──────────────────────────────────────────────────────────
  function selectOption(value) {
    const updated = {...answers, [STEPS[step].id]: value};
    setAnswers(updated);
    if (step < STEPS.length - 1) { setTimeout(()=>setStep(step+1), 200); }
    else { generatePlan(updated); }
  }

  function buildFallbackPlan(data) {
    const isCard = data.payment === "card";
    const isBank = data.payment === "bank_transfer";
    const isCrypto = data.payment === "crypto";
    const isToday = data.timing === "today" || data.timing === "week";
    return {
      urgency: isToday ? "high" : "medium",
      headline: "Act immediately — contact your bank or payment provider now to begin the recovery process.",
      chance: isCard ? "Credit card payments have the strongest protection. A chargeback claim gives you a good chance of recovery." : isBank ? "Bank transfers can sometimes be recalled if reported quickly. Contact your bank today." : isCrypto ? "Crypto is difficult to recover, but reporting to authorities may help stop others." : "Recovery depends on how quickly you act. Follow these steps immediately.",
      steps: [
        { priority: 1, icon: "📞", title: "Contact your bank or payment provider NOW", what: "Call the fraud line on the back of your card or on your bank's website immediately.", how: "Tell them: 'I have been the victim of fraud and wish to raise a dispute / recall a payment.' Ask them to freeze any further transactions.", deadline: "Do this within the next 2 hours" },
        { priority: 2, icon: "🚔", title: "Report to your national fraud authority", what: "File an official report — this creates a crime reference number you will need for your bank.", how: "UK: Action Fraud — actionfraud.police.uk or 0300 123 2040. USA: FTC — reportfraud.ftc.gov. Australia: ReportCyber — cyber.gov.au. Canada: Canadian Anti-Fraud Centre — antifraudcentre.ca", deadline: "Within 24 hours" },
        { priority: 3, icon: "📝", title: "Write down everything", what: "Record every detail while it is fresh — dates, amounts, names, phone numbers, websites, messages.", how: "Take screenshots of all conversations, emails, and websites. Save any receipts or transaction references. This evidence is critical for your bank and police.", deadline: "Do this today" },
        { priority: 4, icon: "🔒", title: "Secure your accounts", what: "If the scammer has any of your personal details, secure your accounts immediately.", how: "Change passwords on email, banking, and social media. Enable two-factor authentication. Check your credit report at Experian, Equifax, or TransUnion for suspicious activity.", deadline: "Within 48 hours" },
        { priority: 5, icon: "🏦", title: "Request a formal chargeback or recall", what: "Formally request your money back through your bank's dispute process.", how: "Ask specifically for a 'chargeback' (card payments) or 'payment recall' (bank transfer). Put your request in writing by email or letter to create a paper trail.", deadline: "Within 7 days" },
      ],
      warnings: [
        "Do NOT pay anyone who contacts you claiming they can recover your money — this is a follow-up scam targeting victims.",
        "Do not transfer money to a 'safe account' — your real bank will never ask you to do this.",
        "Keep all evidence — do not delete messages or emails from the scammer."
      ],
      resources: [
        { name: "Action Fraud (UK)", url: "https://www.actionfraud.police.uk", what: "UK national fraud and cybercrime reporting centre" },
        { name: "FTC Report Fraud (USA)", url: "https://reportfraud.ftc.gov", what: "US Federal Trade Commission fraud reporting" },
        { name: "Citizens Advice (UK)", url: "https://www.citizensadvice.org.uk", what: "Free advice on consumer rights and next steps" },
        { name: "Which? Consumer Rights (UK)", url: "https://www.which.co.uk/consumer-rights", what: "Guidance on getting money back after fraud" },
      ]
    };
  }

  async function generatePlan(data, attempt = 1) {
    setPhase("loading");
    setPlanError(null);
    const countryName = countryObj?.name || "Unknown";
    const langLabel = langObj?.label || "English";
    const prompt = `You are a scam recovery expert. A person in ${countryName} has been scammed. Scam: ${data.type}. Payment: ${data.payment}. When: ${data.timing}. Amount: ${data.amount}. Respond ONLY with valid JSON, no markdown, no extra text. Use this structure: {"urgency":"high","headline":"text","chance":"text","steps":[{"priority":1,"title":"text","what":"text","how":"real instructions and URLs for ${countryName}","deadline":"text","icon":"emoji"}],"warnings":["text"],"resources":[{"name":"text","url":"https://...","what":"text"}]}. Rules: urgency must be high/medium/low. 4-6 steps. 2-3 warnings. 2-4 resources with real URLs. All text in ${langLabel}. Return ONLY the JSON object.`;
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 2000,
          messages: [{ role: "user", content: prompt }]
        }),
      });
      if (!res.ok) {
        const errText = await res.text();
        throw new Error("HTTP " + res.status + ": " + errText.slice(0,200));
      }
      const result = await res.json();
      if (!result.content || !result.content.length) throw new Error("Empty response from API");
      const raw = result.content.map(i => i.text || "").join("").trim();
      const cleaned = raw.replace(/^```json\s*/,"").replace(/^```\s*/,"").replace(/```\s*$/,"").trim();
      const match = cleaned.match(/\{[\s\S]*\}/);
      if (!match) throw new Error("No JSON found in: " + cleaned.slice(0,100));
      const parsed = JSON.parse(match[0]);
      if (!parsed.steps || !parsed.headline) throw new Error("Missing fields in plan");
      setPlan(parsed);
      setPhase("result");
    } catch(err) {
      console.error("ScamShield API error:", err.message);
      if (attempt < 2) {
        setTimeout(() => generatePlan(data, 2), 2000);
      } else {
        // Fallback: build a static plan based on answers so victim always gets help
        const fallback = buildFallbackPlan(data);
        setPlan(fallback);
        setPhase("result");
      }
    }
  }

  function reset() {
    setPhase("country"); setCountry(null); setCountrySearch(""); setStep(0);
    setAnswers({}); setPlan(null); setPlanError(null); setShowShareMenu(false);
  }

  // ─ Style helpers ──────────────────────────────────────────────────────────
  const card  = {background:"#111118", border:"1px solid #1e1e2e", borderRadius:10};
  const mono  = {fontFamily:"monospace"};
  const redBtn = {background:"linear-gradient(135deg,#e63946,#c1121f)", border:"none", color:"#fff", padding:"11px 18px", borderRadius:8, cursor:"pointer", fontSize:13, display:"flex", alignItems:"center", gap:7, fontFamily:"Georgia,serif", fontWeight:"bold"};
  const grayBtn = {background:"#111118", border:"1px solid #2a2a3e", color:"#bbb", padding:"11px 18px", borderRadius:8, cursor:"pointer", fontSize:13, display:"flex", alignItems:"center", gap:7, fontFamily:"Georgia,serif"};

  return (
    <div dir={isRtl?"rtl":"ltr"} style={{minHeight:"100vh", background:"#0a0a0f", fontFamily:isRtl?"'Segoe UI',Tahoma,sans-serif":"Georgia,serif", color:"#f0ede6"}}
      onClick={()=>{ setShowLangPicker(false); setShowShareMenu(false); }}>

      {/* ── Header ── */}
      <div style={{borderBottom:"1px solid #1e1e2e", padding:"14px 20px", display:"flex", alignItems:"center", justifyContent:"space-between", background:"#0d0d18", position:"sticky", top:0, zIndex:100}}>
        <div style={{display:"flex", alignItems:"center", gap:10}}>
          <div style={{width:32, height:32, background:"linear-gradient(135deg,#e63946,#c1121f)", borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center", fontSize:16}}>🛡️</div>
          <div>
            <div style={{fontSize:14, fontWeight:"bold"}}>{ui.title}</div>
            <div style={{fontSize:10, color:"#555", ...mono}}>{ui.tagline}</div>
          </div>
        </div>
        <div style={{display:"flex", gap:8, alignItems:"center"}}>
          <div style={{position:"relative"}} onClick={e=>e.stopPropagation()}>
            <button onClick={()=>setShowLangPicker(v=>!v)} style={{background:"#111118", border:"1px solid #2a2a3e", color:"#aaa", padding:"5px 10px", borderRadius:6, cursor:"pointer", fontSize:12, display:"flex", alignItems:"center", gap:5}}>
              {langObj?.flag} {langObj?.label?.split(" ")[0]} <span style={{fontSize:9}}>▾</span>
            </button>
            {showLangPicker && (
              <div style={{position:"absolute", top:"calc(100% + 6px)", right:isRtl?"auto":0, left:isRtl?0:"auto", background:"#111118", border:"1px solid #2a2a3e", borderRadius:10, padding:6, zIndex:200, maxHeight:260, overflowY:"auto", width:190, boxShadow:"0 8px 32px rgba(0,0,0,.6)"}}>
                {LANGUAGES.map(l=>(
                  <button key={l.code} onClick={()=>{setLang(l.code);setShowLangPicker(false);}} style={{display:"flex", alignItems:"center", gap:8, width:"100%", background:lang===l.code?"#1a1a2e":"none", border:"none", color:lang===l.code?"#e8c87a":"#ccc", padding:"7px 10px", borderRadius:6, cursor:"pointer", fontSize:12, textAlign:isRtl?"right":"left"}}>
                    <span>{l.flag}</span><span>{l.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          {phase!=="country" && <button onClick={reset} style={{background:"none", border:"1px solid #333", color:"#666", padding:"5px 12px", borderRadius:6, cursor:"pointer", fontSize:11, ...mono}}>{ui.startOver}</button>}
        </div>
      </div>

      <div style={{maxWidth:640, margin:"0 auto", padding:"28px 18px"}}>

        {/* ── Country phase ── */}
        {phase==="country" && (
          <div>
            <div style={{textAlign:"center", marginBottom:28}}>
              <div style={{fontSize:12, color:"#e63946", ...mono, letterSpacing:".1em", marginBottom:8}}>{ui.fightBack}</div>
              <h1 style={{fontSize:26, fontWeight:"normal", lineHeight:1.3, marginBottom:10}}>{ui.headline}<br/><em style={{color:"#e8c87a"}}>{ui.headlineAccent}</em></h1>
              <p style={{fontSize:13, color:"#777", lineHeight:1.6, maxWidth:400, margin:"0 auto"}}>{ui.intro}</p>
            </div>
            <div style={{...card, padding:"22px 20px"}}>
              <h2 style={{fontSize:17, fontWeight:"normal", marginBottom:4}}>{ui.countryQuestion}</h2>
              <p style={{fontSize:12, color:"#555", ...mono, marginBottom:16}}>{ui.countrySubtitle}</p>
              <input type="text" placeholder={ui.chooseCountry} value={countrySearch} onChange={e=>setCountrySearch(e.target.value)}
                style={{width:"100%", background:"#0d0d18", border:"1px solid #2a2a3e", color:"#f0ede6", padding:"10px 14px", borderRadius:8, fontSize:14, marginBottom:10, boxSizing:"border-box", outline:"none", fontFamily:"inherit"}}/>
              <div style={{maxHeight:280, overflowY:"auto", display:"flex", flexDirection:"column", gap:5}}>
                {filtered.map(c=>(
                  <button key={c.code} onClick={()=>{setCountry(c.code);setPhase("questions");}}
                    style={{background:"none", border:"1px solid #1e1e2e", borderRadius:8, padding:"10px 14px", color:"#f0ede6", cursor:"pointer", textAlign:isRtl?"right":"left", display:"flex", alignItems:"center", gap:10, fontSize:13, transition:"all .12s"}}
                    onMouseEnter={e=>e.currentTarget.style.borderColor="#e63946"}
                    onMouseLeave={e=>e.currentTarget.style.borderColor="#1e1e2e"}>
                    <span style={{fontSize:18}}>{c.flag}</span><span>{c.name}</span>
                  </button>
                ))}
                {filtered.length===0 && <div style={{color:"#555", fontSize:13, padding:"10px 14px", ...mono}}>No results</div>}
              </div>
            </div>
          </div>
        )}

        {/* ── Questions phase ── */}
        {phase==="questions" && (
          <div>
            <div style={{marginBottom:22}}>
              <div style={{display:"flex", justifyContent:"space-between", marginBottom:6}}>
                <span style={{fontSize:11, color:"#555", ...mono}}>{ui.step} {step+1} {ui.of} {STEPS.length}</span>
                <span style={{fontSize:11, color:"#555", ...mono}}>{Math.round(progress)}{ui.complete}</span>
              </div>
              <div style={{height:3, background:"#1a1a2e", borderRadius:2}}>
                <div style={{height:"100%", width:`${progress}%`, background:"linear-gradient(90deg,#e63946,#e8c87a)", borderRadius:2, transition:"width .4s ease"}}/>
              </div>
            </div>
            <div style={{display:"flex", alignItems:"center", gap:8, marginBottom:4}}>
              <span style={{fontSize:16}}>{countryObj?.flag}</span>
              <span style={{fontSize:12, color:"#555", ...mono}}>{countryObj?.name}</span>
            </div>
            <h2 style={{fontSize:19, fontWeight:"normal", marginBottom:5}}>{(STEP_Q[lang]||STEP_Q["en"])[step]}</h2>
            <p style={{fontSize:12, color:"#555", ...mono, marginBottom:18}}>{(STEP_SUB[lang]||STEP_SUB["en"])[step]}</p>
            <div style={{display:"flex", flexDirection:"column", gap:9}}>
              {STEPS[step].options.map(opt=>(
                <button key={opt.value} onClick={()=>selectOption(opt.value)}
                  style={{background:answers[STEPS[step].id]===opt.value?"#1a1a2e":"#111118", border:`1px solid ${answers[STEPS[step].id]===opt.value?"#e63946":"#1e1e2e"}`, borderRadius:10, padding:"13px 16px", cursor:"pointer", textAlign:isRtl?"right":"left", color:"#f0ede6", display:"flex", alignItems:"center", gap:12, transition:"all .14s"}}
                  onMouseEnter={e=>{if(answers[STEPS[step].id]!==opt.value)e.currentTarget.style.borderColor="#e63946";}}
                  onMouseLeave={e=>{if(answers[STEPS[step].id]!==opt.value)e.currentTarget.style.borderColor="#1e1e2e";}}>
                  <span style={{fontSize:22, minWidth:30}}>{opt.emoji}</span>
                  <div>
                    <div style={{fontSize:14, fontWeight:"bold", marginBottom:2}}>{opt.en}</div>
                    <div style={{fontSize:11, color:"#666", ...mono}}>{opt.descEn}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── Loading phase ── */}
        {phase==="loading" && (
          <div style={{textAlign:"center", padding:"60px 0"}}>
            <div style={{fontSize:44, marginBottom:18, animation:"pulse 1.5s infinite"}}>🔍</div>
            <div style={{fontSize:15, color:"#e8c87a", marginBottom:8}}>{ui.building}</div>
            <div style={{fontSize:12, color:"#555", ...mono}}>{ui.analysing}</div>
            <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:.35}}`}</style>
          </div>
        )}

        {/* ── Result phase ── */}
        {phase==="result" && (
          <div>
            {planError ? (
              <div style={{textAlign:"center", padding:"40px 0"}}>
                <div style={{color:"#e63946", marginBottom:16}}>{planError}</div>
                <button onClick={()=>generatePlan(answers)} style={redBtn}>{ui.tryAgain}</button>
              </div>
            ) : plan && (<>

              {/* Badge */}
              <div style={{display:"flex", alignItems:"center", gap:8, marginBottom:16}}>
                <span style={{fontSize:20}}>{countryObj?.flag}</span>
                <span style={{fontSize:12, color:"#555", ...mono}}>{countryObj?.name} · {langObj?.label}</span>
              </div>

              {/* Urgency */}
              <div style={{...card, border:`1px solid ${URGENCY_CLR[plan.urgency]||"#e63946"}`, padding:"18px 20px", marginBottom:20}}>
                <div style={{display:"inline-block", background:URGENCY_CLR[plan.urgency]||"#e63946", color:"#fff", fontSize:10, ...mono, letterSpacing:".1em", padding:"3px 10px", borderRadius:4, marginBottom:10}}>
                  {plan.urgency==="high"?ui.urgencyHigh:plan.urgency==="medium"?ui.urgencyMedium:ui.urgencyLow}
                </div>
                <div style={{fontSize:15, fontWeight:"bold", marginBottom:7, lineHeight:1.4}}>{plan.headline}</div>
                <div style={{fontSize:13, color:"#888", ...mono, lineHeight:1.5}}>{plan.chance}</div>
              </div>

              {/* ── Print + Share action bar ── */}
              <div style={{display:"flex", gap:10, marginBottom:24, flexWrap:"wrap"}}>
                <button onClick={handlePrint} style={redBtn}>{ui.printSave}</button>
                <div style={{position:"relative"}} onClick={e=>e.stopPropagation()}>
                  <button onClick={handleShareBtn} style={grayBtn}>{ui.sharePlan}</button>
                  {showShareMenu && (
                    <div style={{position:"absolute", top:"calc(100% + 8px)", left:isRtl?"auto":0, right:isRtl?0:"auto", background:"#111118", border:"1px solid #2a2a3e", borderRadius:10, padding:8, zIndex:200, minWidth:200, boxShadow:"0 8px 32px rgba(0,0,0,.7)", display:"flex", flexDirection:"column", gap:3}}>
                      <button onClick={copyPlanText} style={{background:"none", border:"none", color:copied?"#34c759":"#ccc", padding:"9px 12px", borderRadius:6, cursor:"pointer", textAlign:isRtl?"right":"left", fontSize:13}}>
                        {copied?ui.copied:ui.copyPlan}
                      </button>
                      <button onClick={goWhatsApp} style={{background:"none", border:"none", color:"#ccc", padding:"9px 12px", borderRadius:6, cursor:"pointer", textAlign:isRtl?"right":"left", fontSize:13}}>
                        {ui.whatsapp}
                      </button>
                      <button onClick={goEmail} style={{background:"none", border:"none", color:"#ccc", padding:"9px 12px", borderRadius:6, cursor:"pointer", textAlign:isRtl?"right":"left", fontSize:13}}>
                        {ui.emailShare}
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Steps */}
              <div style={{marginBottom:20}}>
                <div style={{fontSize:10, color:"#555", ...mono, letterSpacing:".1em", marginBottom:12}}>{ui.actionPlan}</div>
                <div style={{display:"flex", flexDirection:"column", gap:10}}>
                  {plan.steps?.map((s,i)=>(
                    <div key={i} style={{...card, padding:"14px 16px", display:"flex", gap:12}}>
                      <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:5}}>
                        <div style={{width:26, height:26, background:i===0?"#e63946":"#1a1a2e", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, ...mono, fontWeight:"bold", color:i===0?"#fff":"#555", flexShrink:0}}>{s.priority||i+1}</div>
                        <span style={{fontSize:16}}>{s.icon}</span>
                      </div>
                      <div style={{flex:1}}>
                        <div style={{fontSize:14, fontWeight:"bold", marginBottom:5}}>{s.title}</div>
                        <div style={{fontSize:13, color:"#aaa", marginBottom:7, lineHeight:1.5}}>{s.what}</div>
                        <div style={{fontSize:12, color:"#888", ...mono, background:"#0d0d18", borderRadius:6, padding:"7px 10px", lineHeight:1.6, borderLeft:isRtl?"none":"2px solid #e8c87a", borderRight:isRtl?"2px solid #e8c87a":"none"}}>{s.how}</div>
                        {s.deadline && <div style={{marginTop:6, fontSize:11, color:"#e8c87a", ...mono}}>⏱ {s.deadline}</div>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Warnings */}
              {plan.warnings?.length>0 && (
                <div style={{background:"#1a0f0f", border:"1px solid #3d1a1a", borderRadius:10, padding:"14px 16px", marginBottom:18}}>
                  <div style={{fontSize:11, color:"#e63946", ...mono, letterSpacing:".08em", marginBottom:10}}>{ui.warnings}</div>
                  {plan.warnings.map((w,i)=>(
                    <div key={i} style={{fontSize:13, color:"#cc8888", marginBottom:6, lineHeight:1.5, paddingLeft:isRtl?0:12, paddingRight:isRtl?12:0, borderLeft:isRtl?"none":"2px solid #e63946", borderRight:isRtl?"2px solid #e63946":"none"}}>{w}</div>
                  ))}
                </div>
              )}

              {/* Resources */}
              {plan.resources?.length>0 && (
                <div style={{marginBottom:24}}>
                  <div style={{fontSize:10, color:"#555", ...mono, letterSpacing:".1em", marginBottom:10}}>{ui.orgs}</div>
                  <div style={{display:"flex", flexDirection:"column", gap:7}}>
                    {plan.resources.map((r,i)=>(
                      <a key={i} href={r.url} target="_blank" rel="noopener noreferrer"
                        style={{...card, padding:"11px 14px", textDecoration:"none", display:"flex", justifyContent:"space-between", alignItems:"center", transition:"border-color .15s"}}
                        onMouseEnter={e=>e.currentTarget.style.borderColor="#e8c87a"}
                        onMouseLeave={e=>e.currentTarget.style.borderColor="#1e1e2e"}>
                        <div>
                          <div style={{fontSize:13, fontWeight:"bold", color:"#e8c87a", marginBottom:2}}>{r.name}</div>
                          <div style={{fontSize:11, color:"#555", ...mono}}>{r.what}</div>
                        </div>
                        <span style={{color:"#555"}}>{isRtl?"←":"→"}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Donation banner */}
              <div style={{background:"linear-gradient(135deg,#0d1a0d,#0a150a)", border:"1px solid #1e3a1e", borderRadius:12, padding:"20px 20px", marginBottom:16, textAlign:"center"}}>
                <div style={{fontSize:18, marginBottom:6}}>☕</div>
                <div style={{fontSize:14, fontWeight:"bold", color:"#f0ede6", marginBottom:4}}>This tool is completely free</div>
                <div style={{fontSize:12, color:"#6a9a6a", ...mono, marginBottom:14, lineHeight:1.5}}>
                  If it helped you, a small donation keeps it running<br/>for the next victim who needs it.
                </div>
                <a href="https://ko-fi.com/josephmason22316" target="_blank" rel="noopener noreferrer"
                  style={{display:"inline-flex", alignItems:"center", gap:8, background:"#FFDD00", color:"#000", padding:"11px 22px", borderRadius:8, textDecoration:"none", fontWeight:"bold", fontSize:14, transition:"opacity .15s"}}
                  onMouseEnter={e=>e.currentTarget.style.opacity=".85"}
                  onMouseLeave={e=>e.currentTarget.style.opacity="1"}>
                  ☕ Support on Ko-fi
                </a>
                <div style={{fontSize:10, color:"#3a5a3a", marginTop:10, ...mono}}>100% optional · No account needed · Takes 30 seconds</div>
              </div>

              {/* Footer */}
              <div style={{textAlign:"center", paddingTop:4, paddingBottom:8}}>
                <button onClick={reset} style={{background:"none", border:"1px solid #2a2a3e", color:"#666", padding:"9px 22px", borderRadius:8, cursor:"pointer", fontSize:12, ...mono}}>{ui.shareMsg}</button>
                <div style={{fontSize:11, color:"#333", marginTop:10, ...mono}}>{ui.shareHint}</div>
              </div>

            </>)}
          </div>
        )}
      </div>
    </div>
  );
}
