import { useState } from 'react';
import Spinner from './Spinner';
import Button from '../Button';

export default {
  title: 'Atoms/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'success', 'warning', 'info', 'inherit'],
    },
    thickness: {
      control: { type: 'range', min: 1, max: 10, step: 0.1 },
    },
    fullScreen: {
      control: 'boolean',
    },
  },
};

export const Default = {
  args: {},
};

export const Small = {
  args: {
    size: 'small',
  },
};

export const Medium = {
  args: {
    size: 'medium',
  },
};

export const Large = {
  args: {
    size: 'large',
  },
};

export const WithMessage = {
  args: {
    size: 'medium',
    message: '데이터를 불러오는 중입니다...',
  },
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
      <Spinner size="small" />
      <Spinner size="medium" />
      <Spinner size="large" />
    </div>
  ),
};

export const AllColors = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
      <div style={{ textAlign: 'center' }}>
        <Spinner color="primary" />
        <p style={{ fontSize: '12px', marginTop: '8px' }}>Primary</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Spinner color="secondary" />
        <p style={{ fontSize: '12px', marginTop: '8px' }}>Secondary</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Spinner color="error" />
        <p style={{ fontSize: '12px', marginTop: '8px' }}>Error</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Spinner color="success" />
        <p style={{ fontSize: '12px', marginTop: '8px' }}>Success</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Spinner color="warning" />
        <p style={{ fontSize: '12px', marginTop: '8px' }}>Warning</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Spinner color="info" />
        <p style={{ fontSize: '12px', marginTop: '8px' }}>Info</p>
      </div>
    </div>
  ),
};

export const WithMessages = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <Spinner message="로딩 중..." color="primary" />
      <Spinner message="데이터를 가져오는 중입니다..." color="secondary" />
      <Spinner message="처리 중입니다. 잠시만 기다려주세요..." color="info" />
    </div>
  ),
};

export const CustomThickness = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
      <div style={{ textAlign: 'center' }}>
        <Spinner thickness={2} />
        <p style={{ fontSize: '12px', marginTop: '8px' }}>얇음 (2)</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Spinner thickness={3.6} />
        <p style={{ fontSize: '12px', marginTop: '8px' }}>기본 (3.6)</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Spinner thickness={6} />
        <p style={{ fontSize: '12px', marginTop: '8px' }}>두꺼움 (6)</p>
      </div>
    </div>
  ),
};

export const InButton = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Button variant="contained" disabled>
        <Spinner size={20} color="inherit" />
        <span style={{ marginLeft: '8px' }}>로딩 중...</span>
      </Button>
      <Button variant="outlined" disabled>
        <Spinner size={20} />
        <span style={{ marginLeft: '8px' }}>저장 중...</span>
      </Button>
    </div>
  ),
};

export const InCard = {
  render: () => (
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '32px',
      minHeight: '200px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Spinner message="대회 정보를 불러오는 중..." />
    </div>
  ),
};

export const LoadingStates = {
  render: () => {
    const [loading, setLoading] = useState({
      participants: false,
      schedule: false,
      results: false,
    });

    const handleLoad = (key) => {
      setLoading({ ...loading, [key]: true });
      setTimeout(() => {
        setLoading({ ...loading, [key]: false });
      }, 2000);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button onClick={() => handleLoad('participants')} disabled={loading.participants}>
            참가자 로드
          </Button>
          {loading.participants && <Spinner size="small" message="참가자 목록 로딩 중..." />}
        </div>

        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button onClick={() => handleLoad('schedule')} disabled={loading.schedule}>
            일정 로드
          </Button>
          {loading.schedule && <Spinner size="small" message="일정 정보 로딩 중..." color="secondary" />}
        </div>

        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button onClick={() => handleLoad('results')} disabled={loading.results}>
            결과 로드
          </Button>
          {loading.results && <Spinner size="small" message="경기 결과 로딩 중..." color="success" />}
        </div>
      </div>
    );
  },
};

export const FullScreenExample = {
  render: () => {
    const [showFullScreen, setShowFullScreen] = useState(false);

    return (
      <div>
        <Button onClick={() => setShowFullScreen(true)}>
          전체 화면 로딩 표시
        </Button>

        {showFullScreen && (
          <div>
            <Spinner
              fullScreen
              size="large"
              message="데이터를 처리하고 있습니다..."
            />
            {/* 3초 후 자동으로 닫기 */}
            {setTimeout(() => setShowFullScreen(false), 3000)}
          </div>
        )}

        <p style={{ marginTop: '16px', color: '#666' }}>
          버튼을 클릭하면 3초간 전체 화면 로딩이 표시됩니다
        </p>
      </div>
    );
  },
};
