import React from 'react';
import AuditForm from './components/AuditForm';

export default function App() {
  return (
    <div style={{ maxWidth: 900, margin: '40px auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Quantum-Enhanced AI Auditor</h1>
      <p>Upload a recruitment dataset CSV (must contain a `HiringDecision` column).</p>
      <AuditForm />
    </div>
  );
}
