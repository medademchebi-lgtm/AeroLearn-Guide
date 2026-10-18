const lessons = {
  basics: {
    title: "كيف تطير الطائرة؟",
    html: `<h3>أربع قوى أساسية</h3><p>تتأثر الطائرة بأربع قوى رئيسية أثناء الطيران:</p><ul><li><b>الرفع:</b> قوة هوائية تساعد الجناح على مقاومة الوزن.</li><li><b>الوزن:</b> تأثير الجاذبية على الطائرة.</li><li><b>الدفع:</b> القوة التي تنتجها منظومة الدفع لتحريك الطائرة إلى الأمام.</li><li><b>السحب:</b> مقاومة الهواء لحركة الطائرة.</li></ul><p>يتطلب الطيران توازناً بين هذه القوى، ويتغيّر هذا التوازن بحسب حالة الطيران.</p>`,
    question: "أي قوة تعاكس حركة الطائرة خلال الهواء؟",
    options: ["الرفع", "السحب", "الدفع"], answer: 1, explain: "صحيح! السحب هو مقاومة الهواء لحركة الطائرة."
  },
  models: {
    title: "مكوّنات الطائرة اللاسلكية",
    html: `<h3>الأجزاء الرئيسية</h3><ul><li><b>الهيكل والجناح:</b> يحملان بقية المكونات ويساعد شكل الجناح على توليد الرفع.</li><li><b>المحرك والمروحة:</b> يوفران الدفع في كثير من النماذج.</li><li><b>السيرفو:</b> يحرك أسطح التحكم.</li><li><b>جهاز الاستقبال:</b> يستقبل أوامر جهاز الإرسال.</li><li><b>البطارية:</b> تزود الأنظمة بالطاقة.</li></ul><p>تعرّف على طرازك ودليله، وافحصه مع مدرّب قبل تشغيله.</p>`,
    question: "ما وظيفة السيرفو غالباً في الطائرة النموذجية؟",
    options: ["تحريك أسطح التحكم", "تلوين الهيكل", "قياس لون السماء"], answer: 0, explain: "أحسنت! السيرفو يحرك أسطح التحكم وفق أوامر نظام التحكم."
  },
  drones: {
    title: "كيف تعمل المسيّرة؟",
    html: `<h3>نظام متكامل</h3><p>تستخدم المسيّرة متعددة المراوح محركات ومراوح يولّد دورانها قوة رفع. يساعد متحكّم الطيران على تثبيت وضعية المركبة باستخدام بيانات الحساسات وأوامر التحكم.</p><ul><li><b>البطارية:</b> مصدر الطاقة.</li><li><b>متحكّم الطيران:</b> يعالج بيانات الحساسات وأوامر التحكم.</li><li><b>المحركات والمراوح:</b> تنتج قوى الرفع والتحكم.</li><li><b>نظام تحديد الموقع:</b> قد يساعد في تقدير الموقع بحسب الطراز.</li></ul><p>الأنظمة تختلف من طراز لآخر، ويجب احترام مناطق الحظر والقواعد المحلية.</p>`,
    question: "ما الدور الأساسي لمتحكّم الطيران؟",
    options: ["تثبيت وإدارة حركة المسيّرة", "شحن البطارية وحده", "استبدال جميع المراوح"], answer: 0, explain: "صحيح! متحكّم الطيران يعالج بيانات الحساسات وأوامر التحكم."
  },
  safety: {
    title: "قبل أول رحلة",
    html: `<h3>قائمة تحقق تعليمية</h3><ul><li>راجع القوانين المحلية ومناطق الطيران المسموح بها.</li><li>تدرّب مع مدرّب أو مشرف مؤهل.</li><li>افحص الهيكل والمراوح والبطارية وفق دليل الشركة.</li><li>اختر مكاناً مناسباً بعيداً عن الناس والمطارات وخطوط الكهرباء.</li><li>تحقّق من الطقس والرؤية والرياح وحدود الطراز.</li><li>احترم الخصوصية ولا تصوّر الآخرين دون إذن.</li></ul><p>هذه القائمة للتوعية ولا تغني عن دليل الطائرة أو تعليمات الجمعية والجهات المختصة.</p>`,
    question: "ماذا تفعل قبل تشغيل طائرة نموذجية؟",
    options: ["تتجاهل حالة البطارية", "تفحص الطائرة وتتبع دليلها", "تطير قرب الناس"], answer: 1, explain: "إجابة صحيحة! الفحص والالتزام بالتعليمات جزء أساسي من السلامة."
  }
};
const panel = document.getElementById("lessonPanel");
const title = document.getElementById("lessonTitle");
const lessonText = document.getElementById("lessonText");
const quizQuestion = document.getElementById("quizQuestion");
const quizOptions = document.getElementById("quizOptions");
const quizFeedback = document.getElementById("quizFeedback");
document.querySelectorAll("[data-open]").forEach(button => button.addEventListener("click", () => {
  const lesson = lessons[button.dataset.open];
  title.textContent = lesson.title;
  lessonText.innerHTML = lesson.html;
  quizQuestion.textContent = lesson.question;
  quizFeedback.textContent = "";
  quizOptions.replaceChildren();
  lesson.options.forEach((option, index) => {
    const choice = document.createElement("button");
    choice.type = "button";
    choice.textContent = option;
    choice.addEventListener("click", () => {
      quizFeedback.textContent = index === lesson.answer ? lesson.explain : "ليست الإجابة الصحيحة. جرّب مرة أخرى!";
      quizFeedback.style.color = index === lesson.answer ? "#13865c" : "#c34a4a";
    });
    quizOptions.appendChild(choice);
  });
  panel.hidden = false;
  panel.scrollIntoView({behavior:"smooth", block:"start"});
}));
document.getElementById("closeLesson").addEventListener("click", () => { panel.hidden = true; });
const speed = document.getElementById("speed"), altitude = document.getElementById("altitude");
const speedValue = document.getElementById("speedValue"), altitudeValue = document.getElementById("altitudeValue");
const speedReadout = document.getElementById("speedReadout"), altitudeReadout = document.getElementById("altitudeReadout");
const modeReadout = document.getElementById("modeReadout"), simStatus = document.getElementById("simStatus");
function updateReadouts(){speedValue.textContent = speed.value + " كم/س"; altitudeValue.textContent = altitude.value + " م"; speedReadout.innerHTML = `${speed.value} <small>كم/س</small>`; altitudeReadout.innerHTML = `${altitude.value} <small>م</small>`;}
speed.addEventListener("input", updateReadouts); altitude.addEventListener("input", updateReadouts);
document.getElementById("flyButton").addEventListener("click", () => {modeReadout.textContent = "RUNNING";simStatus.textContent = "الحالة: المحاكاة تعمل — بيانات افتراضية فقط";});
document.getElementById("resetButton").addEventListener("click", () => {speed.value=60;altitude.value=100;updateReadouts();modeReadout.textContent="STANDBY";simStatus.textContent="الحالة: جاهز للبدء";});
document.getElementById("menuToggle").addEventListener("click", () => document.getElementById("nav").classList.toggle("open"));
document.querySelectorAll("#nav a").forEach(a => a.addEventListener("click", () => document.getElementById("nav").classList.remove("open")));
