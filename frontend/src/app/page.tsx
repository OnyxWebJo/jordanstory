'use client';

import { useEffect } from 'react';

export default function RootPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  useEffect(() => {
    window.location.replace(`${basePath}/en`);
  }, [basePath]);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0a0a0c',
      color: '#e5e7eb',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <meta httpEquiv="refresh" content={`0; url=${basePath}/en`} />
      <div style={{
        width: '42px',
        height: '42px',
        border: '3px solid rgba(217, 119, 6, 0.2)',
        borderTopColor: '#d97706',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite'
      }} />
      <p style={{ marginTop: '16px', fontSize: '15px', color: '#9ca3af' }}>
        Entering Jordan Story Tours... (<a href={`${basePath}/en`} style={{ color: '#d97706', textDecoration: 'underline' }}>Click here if not redirected</a>)
      </p>
      <style dangerouslySetInnerHTML={{ __html: '@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }' }} />
    </div>
  );
}
