import { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import Button from '../Button';

export default {
  title: 'Atoms/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['determinate', 'indeterminate', 'buffer', 'query'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'success', 'warning', 'info'],
    },
    showLabel: {
      control: 'boolean',
    },
  },
};

export const Default = {
  args: {
    value: 50,
  },
};

export const WithLabel = {
  args: {
    value: 75,
    showLabel: true,
  },
};

export const WithCustomLabel = {
  args: {
    value: 60,
    label: '다운로드 중...',
    showLabel: true,
  },
};

export const Indeterminate = {
  args: {
    variant: 'indeterminate',
  },
};

export const AllColors = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <ProgressBar value={75} color="primary" showLabel />
      <ProgressBar value={75} color="secondary" showLabel />
      <ProgressBar value={75} color="error" showLabel />
      <ProgressBar value={75} color="success" showLabel />
      <ProgressBar value={75} color="warning" showLabel />
      <ProgressBar value={75} color="info" showLabel />
    </div>
  ),
};

export const AllValues = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <ProgressBar value={0} showLabel />
      <ProgressBar value={25} showLabel />
      <ProgressBar value={50} showLabel />
      <ProgressBar value={75} showLabel />
      <ProgressBar value={100} showLabel />
    </div>
  ),
};

export const DifferentHeights = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <ProgressBar value={75} height={2} label="height: 2px" />
      <ProgressBar value={75} height={4} label="height: 4px (기본)" />
      <ProgressBar value={75} height={8} label="height: 8px" />
      <ProgressBar value={75} height={12} label="height: 12px" />
    </div>
  ),
};

export const BufferVariant = {
  args: {
    variant: 'buffer',
    value: 60,
    valueBuffer: 80,
  },
};

export const Interactive = {
  render: () => {
    const [progress, setProgress] = useState(0);

    const handleIncrease = () => {
      setProgress((prev) => Math.min(prev + 10, 100));
    };

    const handleDecrease = () => {
      setProgress((prev) => Math.max(prev - 10, 0));
    };

    const handleReset = () => {
      setProgress(0);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <ProgressBar value={progress} showLabel />
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button onClick={handleDecrease} disabled={progress === 0}>
            -10%
          </Button>
          <Button onClick={handleIncrease} disabled={progress === 100}>
            +10%
          </Button>
          <Button onClick={handleReset}>리셋</Button>
        </div>
      </div>
    );
  },
};

export const AutoProgress = {
  render: () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            return 0;
          }
          const diff = Math.random() * 10;
          return Math.min(oldProgress + diff, 100);
        });
      }, 500);

      return () => {
        clearInterval(timer);
      };
    }, []);

    return <ProgressBar value={progress} label="자동 진행" showLabel />;
  },
};

export const UploadExample = {
  render: () => {
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleUpload = () => {
      setUploading(true);
      setProgress(0);

      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            setTimeout(() => setUploading(false), 500);
            return 100;
          }
          return prev + 10;
        });
      }, 300);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Button onClick={handleUpload} disabled={uploading} variant="contained">
          파일 업로드
        </Button>
        {uploading && (
          <ProgressBar
            value={progress}
            label="업로드 중..."
            showLabel
            color="success"
          />
        )}
        {progress === 100 && !uploading && (
          <div style={{ padding: '12px', backgroundColor: '#e8f5e9', borderRadius: '4px', color: '#2e7d32' }}>
            업로드가 완료되었습니다!
          </div>
        )}
      </div>
    );
  },
};

export const ParticipantProgress = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <ProgressBar value={46.875} label="남자 단식 (15/32)" showLabel color="primary" />
      <ProgressBar value={87.5} label="여자 복식 (28/32)" showLabel color="secondary" />
      <ProgressBar value={100} label="혼합 단체전 (32/32)" showLabel color="success" />
      <ProgressBar value={25} label="남자 복식 (8/32)" showLabel color="warning" />
    </div>
  ),
};

export const TaskProgress = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '500px' }}>
      <div>
        <h4 style={{ margin: '0 0 12px 0' }}>대회 준비 진행 상황</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '14px' }}>참가자 등록</span>
              <span style={{ fontSize: '14px', color: '#666' }}>완료</span>
            </div>
            <ProgressBar value={100} color="success" />
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '14px' }}>조 편성</span>
              <span style={{ fontSize: '14px', color: '#666' }}>진행 중</span>
            </div>
            <ProgressBar value={65} color="primary" />
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '14px' }}>일정 배정</span>
              <span style={{ fontSize: '14px', color: '#666' }}>대기 중</span>
            </div>
            <ProgressBar value={0} color="default" />
          </div>
        </div>
      </div>
    </div>
  ),
};

export const SkillLevelExample = {
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <h4>참가자 실력 분포</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <ProgressBar value={40} label="1부 (고급)" showLabel color="error" height={8} />
        <ProgressBar value={30} label="2부 (중급)" showLabel color="warning" height={8} />
        <ProgressBar value={20} label="3부 (초중급)" showLabel color="info" height={8} />
        <ProgressBar value={10} label="4부 (초급)" showLabel color="success" height={8} />
      </div>
    </div>
  ),
};

export const LoadingStates = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4>Determinate (확정적)</h4>
        <ProgressBar value={70} showLabel />
      </div>
      <div>
        <h4>Indeterminate (불확정적)</h4>
        <ProgressBar variant="indeterminate" label="로딩 중..." />
      </div>
      <div>
        <h4>Buffer (버퍼링)</h4>
        <ProgressBar variant="buffer" value={60} valueBuffer={80} label="버퍼링..." />
      </div>
    </div>
  ),
};
