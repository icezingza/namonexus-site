import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginPageProps {
  onLogin: () => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Simple password - can be changed
  const CORRECT_PASSWORD = 'namonexus2026';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate auth delay
    setTimeout(() => {
      if (password === CORRECT_PASSWORD) {
        // Store auth token in localStorage
        localStorage.setItem('classroom_auth', 'true');
        onLogin();
        navigate('/teacher');
      } else {
        setError('รหัสผ่านไม่ถูกต้อง');
        setPassword('');
      }
      setLoading(false);
    }, 500);
  };

  return (
    <div style={{
      background: 'linear-gradient(180deg, #0A0F2C 0%, #060918 100%)',
      color: '#FFFFFF',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '"Poppins", "Noto Sans Thai", system-ui, sans-serif',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Noto+Sans+Thai:wght@400;500;600;700&display=swap');

        .login-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(0, 224, 255, 0.28);
          border-radius: 20px;
          padding: 48px 36px;
          max-width: 420px;
          width: 100%;
          box-shadow: 0 24px 80px rgba(0, 224, 255, 0.14);
        }

        .login-card h1 {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 12px;
          text-align: center;
        }

        .login-card .subtitle {
          color: #B0B3C1;
          text-align: center;
          margin-bottom: 32px;
          font-size: 0.95rem;
        }

        .form-group {
          margin-bottom: 24px;
        }

        .form-group label {
          display: block;
          font-weight: 600;
          margin-bottom: 8px;
          font-size: 0.9rem;
          color: #FFFFFF;
        }

        .form-group input {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid rgba(0, 224, 255, 0.28);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.05);
          color: #FFFFFF;
          font-size: 1rem;
          font-family: inherit;
          transition: border-color 0.2s ease, background 0.2s ease;
        }

        .form-group input:focus {
          outline: none;
          border-color: #00E0FF;
          background: rgba(0, 224, 255, 0.1);
        }

        .form-group input::placeholder {
          color: rgba(176, 179, 193, 0.6);
        }

        .btn-login {
          width: 100%;
          padding: 12px 24px;
          background: #00E0FF;
          color: #0A0F2C;
          border: none;
          border-radius: 8px;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: transform 0.18s ease, background 0.18s ease;
          font-family: inherit;
        }

        .btn-login:hover:not(:disabled) {
          background: #66ECFF;
          transform: translateY(-2px);
        }

        .btn-login:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .error-message {
          color: #FF6B6B;
          margin-top: 16px;
          padding: 12px 16px;
          background: rgba(255, 107, 107, 0.1);
          border: 1px solid rgba(255, 107, 107, 0.3);
          border-radius: 8px;
          font-size: 0.9rem;
          text-align: center;
        }

        .info-message {
          color: #B0B3C1;
          margin-top: 24px;
          padding: 12px 16px;
          background: rgba(0, 224, 255, 0.05);
          border: 1px solid rgba(0, 224, 255, 0.2);
          border-radius: 8px;
          font-size: 0.85rem;
          text-align: center;
        }
      `}</style>

      <div className="login-card">
        <h1>🎓 Smart Classroom</h1>
        <p className="subtitle">ระบบจัดการการเรียนการสอน</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="password">รหัสผ่าน:</label>
            <input
              id="password"
              type="password"
              placeholder="กรุณาใส่รหัสผ่าน"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              disabled={loading}
              autoFocus
            />
          </div>

          <button
            type="submit"
            className="btn-login"
            disabled={loading || !password}
          >
            {loading ? 'กำลังตรวจสอบ...' : 'เข้าสู่ระบบ'}
          </button>

          {error && <div className="error-message">⚠️ {error}</div>}
        </form>

        <div className="info-message">
          💡 สำหรับผู้ใช้ทดสอบ: ลองใส่รหัสผ่าน<br/>
          <strong>(ติดต่อผู้ดูแลระบบเพื่อเรียนรู้รหัสผ่าน)</strong>
        </div>
      </div>
    </div>
  );
}
