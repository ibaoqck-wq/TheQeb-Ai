-- ==========================================
-- TheQeb-Ai Database Knowledge Base Script
-- ==========================================

-- 1. Create the database
CREATE DATABASE IF NOT EXISTS theqeb_db;
USE theqeb_db;

-- 2. Create the compliance controls table
CREATE TABLE IF NOT EXISTS compliance_controls (
    id INT AUTO_INCREMENT PRIMARY KEY,
    framework VARCHAR(100) NOT NULL,
    code VARCHAR(50) NOT NULL UNIQUE,
    title VARCHAR(255) NOT NULL,
    status VARCHAR(50) NOT NULL
);

-- 3. Clear existing rows to ensure a clean execution environment
TRUNCATE TABLE compliance_controls;

-- 4. Insert baseline compliance controls (SAMA CSF & SDAIA AI Ethics)
INSERT IGNORE INTO compliance_controls (framework, code, title, status) VALUES
('SAMA CSF', 'SAMA-1.1.1', 'Cybersecurity Strategy', 'Compliant'),
('SAMA CSF', 'SAMA-2.2.1', 'Data Encryption', 'Partially Compliant'),
('SAMA CSF', 'SAMA-3.1.2', 'Multi-Factor Authentication', 'Compliant'),
('SDAIA AI Ethics', 'AI-ETH-1.1', 'Unbiased Algorithm Audit', 'Under Review'),
('SDAIA AI Ethics', 'AI-ETH-2.1', 'Model Transparency', 'Non-Compliant');

-- 5. Aggregate compliance status analytics
SELECT 
    status AS 'Compliance Status', 
    COUNT(*) AS 'Total Controls'
FROM compliance_controls
GROUP BY status;