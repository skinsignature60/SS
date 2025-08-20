import React from 'react';

export default function SampleComponent() {
  return (
    <section style={{
      margin: '2rem auto',
      maxWidth: 500,
      padding: '2rem',
      border: '1px solid #eee',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
      background: '#fafcff'
    }}>
      <h2>Hello from SampleComponent!</h2>
      <p>
        This is a reference React component for <strong>SkinSignature</strong>.
      </p>
      <ul>
        <li>Easy to customize</li>
        <li>Styled with inline CSS</li>
        <li>Ready for Vercel deployment</li>
      </ul>
    </section>
  );
} 
