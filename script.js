const scenarios = {
    scenario1: {
        title: "Scenario 1: Cross-Bank Federated System via SARIE",
        samaTarget: 88,
        pdplTarget: 90,
        ituTarget: 85,
        consoleLogs: [
            "> [RAG Query] Retrieving SAMA Framework Art 15 (Human Oversight)...",
            "> [Vector Search] Matching SDAIA PDPL Data Protection Rules...",
            "> [ITU-T Y.3172] Validating Pipeline Topology (SRC -> PP -> FO -> SINK)...",
            "> [Policy Engine] Flagging Automated Account Freeze Violation...",
            "> [Report Generation] Compiling Final Executive Audit Report..."
        ],
        findings: [
            {
                title: "Automated Account Freeze Risk (SAMA AML Regulation Gap)",
                type: "error",
                desc: "The system triggers account suspension automatically upon anomaly detection without mandatory clearance from a certified compliance officer.",
                recommendation: "Reconfigure SINK output to emit an alert to a human compliance officer in adherence to SAMA Circular Article 15."
            },
            {
                title: "Privacy & Encryption Alignment (SDAIA PDPL Compliant)",
                type: "success",
                desc: "Differential Privacy (DP-SGD) is properly integrated at local nodes to obscure weight gradients prior to central aggregation.",
                recommendation: "Maintain current differential noise configuration to meet national data sovereignty standards."
            }
        ],
        executiveSummary: "The overall architecture demonstrates robust compliance with SDAIA PDPL privacy standards. However, production deployment requires remediating the automated action engine (SINK) by enforcing Human-in-the-Loop intervention prior to executing restrictive financial actions under SAMA regulations."
    },
    scenario2: {
        title: "Scenario 2: Multi-Bank Federated Learning with Network Dropout",
        samaTarget: 75,
        pdplTarget: 85,
        ituTarget: 60,
        consoleLogs: [
            "> [Network Stress Test] Simulating Node 3 Connection Failure...",
            "> [Orchestration Check] Verifying Central Aggregator Tolerance...",
            "> [ITU-T Y.3172] Auditing Dynamic Orchestration Layer (ML-FO)...",
            "> [Warning] Global Model Stall Detected during Node Dropout.",
            "> [Report Generation] Finalizing Readiness Score..."
        ],
        findings: [
            {
                title: "Central Aggregator Stall Gap (ITU-T Y.3172 Orchestration Failure)",
                type: "error",
                desc: "When an individual bank node drops offline, the central ML-FO aggregator halts global round updates.",
                recommendation: "Implement asynchronous weight update mechanisms to guarantee federated training resilience."
            },
            {
                title: "Operational Log Readiness (SAMA Audit Trail)",
                type: "success",
                desc: "Distributed ledger logs satisfy requirements for record integrity and transaction traceability.",
                recommendation: "Continue telemetry monitoring within the SAMA Regulatory Sandbox."
            }
        ],
        executiveSummary: "While data protection mechanisms are fully functional, network fault-tolerance requires strengthening. The system must adopt an asynchronous aggregation strategy within the ML-FO orchestration layer before expanding to additional participating banks."
    },
    scenario3: {
        title: "Scenario 3: Parameter Transmission without Differential Privacy",
        samaTarget: 60,
        pdplTarget: 40,
        ituTarget: 50,
        consoleLogs: [
            "> [Privacy Analysis] Auditing Gradient Vectors for Reconstruction Vulnerabilities...",
            "> [SDAIA PDPL Check] Critical Breach: Unmasked Parameter Broadcast Detected.",
            "> [Threat Model] Model Inversion Simulation Triggered.",
            "> [High Severity Alert] Financial Transaction Leakage Vulnerability Identified.",
            "> [Report Generation] Generating Non-Compliance Audit Summary..."
        ],
        findings: [
            {
                title: "Model Inversion Vulnerability (High Privacy Risk)",
                type: "error",
                desc: "Broadcasting unmasked parameter updates allows adversarial nodes to reverse-engineer client transactions.",
                recommendation: "Enforce local DP-SGD noise injection engines (PP Node) on all participating banking nodes."
            },
            {
                title: "PDPL Article 4 Violation (Unprotected PII Derivation)",
                type: "error",
                desc: "Raw vector outputs allow inferring customer identities from model updates.",
                recommendation: "Halt aggregation servers immediately until differential privacy modules are active."
            }
        ],
        executiveSummary: "CRITICAL NON-COMPLIANCE: The current architecture presents severe data exposure risks under SDAIA PDPL regulations. Deployment must be restricted until DP-SGD noise injection modules are activated across all local banking nodes."
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
        alert("Please select a scenario to initiate inspection!");
        return;
    }

    const data = scenarios[selectedScenarioKey];
    
    if (loader) loader.style.display = "block";
    if (reportArea) reportArea.style.display = "none";
    if (consoleBox) consoleBox.innerHTML = "";

    data.consoleLogs.forEach((log, index) => {
        setTimeout(() => {
            const line = document.createElement("div");
            line.className = "console-line";
            line.innerText = log;
            consoleBox.appendChild(line);
            consoleBox.scrollTop = consoleBox.scrollHeight;
        }, index * 250);
    });

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
                    <p><strong>Description:</strong> ${f.desc}</p>
                    <p class="rec"><strong>Action Recommendation:</strong> ${f.recommendation}</p>
                </div>
            `;
        });
        document.getElementById("findingsList").innerHTML = findingsHTML;
        document.getElementById("execSummaryText").innerText = data.executiveSummary;
    }, data.consoleLogs.length * 250 + 300);
}