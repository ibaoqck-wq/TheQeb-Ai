const scenarios = {
    scenario1: {
        title: "السيناريو 1: نظام فيدرالي بين بنكين عبر 'سريع'",
        samaTarget: 88,
        pdplTarget: 90,
        ituTarget: 85,
        consoleLogs: [
            "> [RAG Query] Retrieving SAMA AML Circular Art 15...",
            "> [Vector Search] Matching SDAIA PDPL Privacy Constraints...",
            "> [ITU-T Y.3172] Parsing ML-Pipeline Topology (SRC -> PP -> FO -> SINK)...",
            "> [Policy Engine] Flagging Automated Freeze Action Violation...",
            "> [Report Generation] Finalizing Compliance Score..."
        ],
        findings: [
            {
                title: "ثغرة تجميد الحسابات الآلي (SAMA AML Gap)",
                type: "error",
                desc: "النظام يتخذ قرار تجميد الحسابات تلقائياً عند اكتشاف الشبهة دون اعتماد من مسؤول الامتثال البشري.",
                recommendation: "تعديل مخرجات الـ SINK لتصبح تنبيهاً لمسؤول الامتثال البشري وفق المادة 15 من لائحة SAMA."
            },
            {
                title: "توافق الخصوصية (SDAIA PDPL Alignment)",
                type: "success",
                desc: "يتم استخدام التشفير التفاضلي (Differential Privacy) بنجاح لتشويش الأوزان ومنع عكس البيانات.",
                recommendation: "مطابق لمعايير ضوابط سدايا لحماية البيانات المالية الحساسة."
            }
        ]
    },
    scenario2: {
        title: "السيناريو 2: تعلم فيدرالي بين 4 بنوك مع انقطاع الشبكة",
        samaTarget: 75,
        pdplTarget: 85,
        ituTarget: 60,
        consoleLogs: [
            "> [Network Stress Test] Simulating Node 3 Dropout...",
            "> [Orchestration Check] Testing Central Aggregator Asynchronous Tolerance...",
            "> [ITU-T Y.3172] Validating Dynamic Orchestration Layer (ML-FO)...",
            "> [Warning] Aggregator Stall Detected during Dropout Phase.",
            "> [Report Generation] Score Calculation Complete."
        ],
        findings: [
            {
                title: "ثغرة انقطاع الاتصال بالعقدة المركزية (ITU-T Y.3172 Dynamic Orchestration)",
                type: "error",
                desc: "عند انقطاع بنك واحد، يفشل محرك التجميع (Central Aggregator) في استكمال الجولة التدريبية.",
                recommendation: "تفعيل خوارزمية asynchronous weight update لضمان مرونة التدريب التشاركي."
            },
            {
                title: "جاهزية الامتثال التشغيلي (Operational Readiness)",
                type: "success",
                desc: "استيفاء شروط الحفاظ على موثوقية السجلات المالية وتوزع العقد المصرفية.",
                recommendation: "الاستمرار في مراقبة زمن الاستجابة في البيئة التجريبية SAMA Sandbox."
            }
        ]
    },
    scenario3: {
        title: "السيناريو 3: ثغرة نقل الأوزان بدون تشفير تفاضلي (DP Risk)",
        samaTarget: 60,
        pdplTarget: 40,
        ituTarget: 50,
        consoleLogs: [
            "> [Privacy Analysis] Scanning Gradient Vectors for PII Inversion Risks...",
            "> [SDAIA PDPL Check] Section 4 Breach Detected: Raw Gradient Transmission.",
            "> [Threat Model] Model Inversion Attack Simulation Executed.",
            "> [Alert] High Privacy Exposure on Inter-Bank Channel.",
            "> [Report Generation] Critical Vulnerability Status Emitted."
        ],
        findings: [
            {
                title: "خطر استرجاع البيانات الحساسة (Model Inversion Attack)",
                type: "error",
                desc: "نقل أوزان الخوارزميات بدون إضافة ضوضاء (Noise Injection) يتيح فك تشفير المعاملات المالية للعملاء.",
                recommendation: "تطبيق معيار DP-SGD عند كل عقدة مصرفية (PP Node) قبل إرسال التحديثات."
            },
            {
                title: "مخالفة نظام حماية البيانات الشخصية (PDPL Non-Compliance)",
                type: "error",
                desc: "إمكانية الاستدلال على هوية المتعاملين الماليين من خلال المتجهات الخام.",
                recommendation: "إيقاف خوادم التجميع لحين دمج طبقة التشويش التفاضلي المعتمدة."
            }
        ]
    }
};

document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("startBtn");
    if (btn) btn.addEventListener("click", runInspection);
});

function animateCounter(id, target) {
    let current = 0;
    const elem = document.getElementById(id);
    const step = Math.ceil(target / 25);
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        elem.innerText = current + "%";
    }, 30);
}

function runInspection() {
    const selectElem = document.getElementById("scenarioSelect");
    const selectedScenarioKey = selectElem ? selectElem.value : "";
    const reportArea = document.getElementById("reportArea");
    const loader = document.getElementById("loader");
    const consoleBox = document.getElementById("consoleLogs");

    if (!selectedScenarioKey) {
        alert("يرجى اختيار سيناريو للفحص أولاً من القائمة!");
        return;
    }

    const data = scenarios[selectedScenarioKey];
    
    // إعادة ضبط الواجهة
    if (loader) loader.style.display = "block";
    if (reportArea) reportArea.style.display = "none";
    if (consoleBox) consoleBox.innerHTML = "";

    // إظهار أسطر البرمجة التفاعلية لحظياً
    data.consoleLogs.forEach((log, index) => {
        setTimeout(() => {
            const line = document.createElement("div");
            line.className = "console-line";
            line.innerText = log;
            consoleBox.appendChild(line);
            consoleBox.scrollTop = consoleBox.scrollHeight;
        }, index * 300);
    });

    // إظهار التقرير النهائي بعد انتهاء المحاكاة
    setTimeout(() => {
        if (loader) loader.style.display = "none";
        if (reportArea) reportArea.style.display = "block";

        animateCounter("samaScore", data.samaTarget);
        animateCounter("pdplScore", data.pdplTarget);
        animateCounter("ituScore", data.ituTarget);

        let findingsHTML = "";
        data.findings.forEach(f => {
            findingsHTML += `
                <div class="card ${f.type === 'error' ? 'card-error' : 'card-success'}">
                    <h4>${f.title}</h4>
                    <p><strong>المشكلة/التوصيف:</strong> ${f.desc}</p>
                    <p class="rec"><strong>التوصية:</strong> ${f.recommendation}</p>
                </div>
            `;
        });
        document.getElementById("findingsList").innerHTML = findingsHTML;
    }, data.consoleLogs.length * 300 + 400);
}