# 🚀 ThaQeb-AI Engine | National Regulatory & Federated Audit Engine

> **The Sovereign National Platform for Regulatory Compliance & Collaborative AI Audit in the Saudi Banking Sector.**

![Compliance Status](https://img.shields.io/badge/Compliance-SAMA%7CSDAIA%7CITU--T%20Y.3172-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Stable%20v1.0%20Demo-success?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-orange?style=for-the-badge)

---

## 📌 Overview

**ThaQeb-AI** is a smart engine for regulatory and technical compliance audit of Federated Learning systems in banks and financial sectors. It matches architectures, outputs, and Anti-Money Laundering (AML) models with national and international regulations in real-time using Retrieval-Augmented Generation (RAG).

### 📑 Adopted Regulatory Frameworks & Standards:
* **SAMA Circulars:** Cybersecurity and governance regulations issued by the Saudi Central Bank.
* **SDAIA PDPL:** Personal Data Protection Law and AI Ethics principles issued by SDAIA.
* **ITU-T Y.3172 Framework:** ITU standard for architectural framework for machine learning in future networks ($DP-SGD$).

---

## 🌟 Core Features (v1.0)

* **Interactive RAG Console Simulation:** Live view of vector search operations and real-time retrieval of regulatory clauses during audit.
* **Dynamic Compliance Metrics:** Real-time calculation and modeling of compliance ratios with SAMA, SDAIA, and ITU-T.
* **Gaps & Mitigation Recommendations:** Automatic classification of regulatory violations (Red) and compliant implementation examples (Green) with actionable mitigation solutions.
* **ITU-T Y.3172 Structured Audit Table:** Maps federal system components ($SRC, C, PP, M, P, ML-FO, ML-SB, SINK$) to banking regulation requirements.
* **Glassmorphic Dark UI:** A highly responsive and interactive user interface built with modern dark aesthetics for high visual clarity.

---

## 📂 Project Structure

```text
ThaQeb-AI/
├── knowledge-base/
│   ├── database/
│   │   └── schema_and_data.sql     # SQL schema & baseline compliance controls
│   ├── raw-documents/              # Official SAMA, SDAIA, and ITU-T PDFs
│   └── processed-data/            # Vectorized knowledge base (data.json)
├── src/                            # Source code (HTML, CSS, JS)
│   ├── index.html
│   ├── style.css
│   └── script.js
└── README.md                       # Main documentation