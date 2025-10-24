import { useState } from 'react';
import Alert from './Alert';
import Button from '../Button';
import { CheckCircle, Info, Warning, Error } from '@mui/icons-material';

export default {
  title: 'Atoms/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    severity: {
      control: 'select',
      options: ['error', 'warning', 'info', 'success'],
    },
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'standard'],
    },
    vertical: {
      control: 'select',
      options: ['top', 'bottom'],
    },
    horizontal: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
  },
};

export const Default = {
  args: {
    children: '기본 알림 메시지입니다.',
  },
};

export const AllSeverities = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Alert severity="success">성공 메시지입니다.</Alert>
      <Alert severity="info">정보 메시지입니다.</Alert>
      <Alert severity="warning">경고 메시지입니다.</Alert>
      <Alert severity="error">오류 메시지입니다.</Alert>
    </div>
  ),
};

export const WithTitle = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Alert severity="success" title="성공">
        참가 신청이 완료되었습니다.
      </Alert>
      <Alert severity="info" title="안내">
        대회는 2024년 3월 15일에 진행됩니다.
      </Alert>
      <Alert severity="warning" title="주의">
        신청 마감이 3일 남았습니다.
      </Alert>
      <Alert severity="error" title="오류">
        필수 항목을 모두 입력해주세요.
      </Alert>
    </div>
  ),
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4>Standard (기본)</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Alert severity="success" variant="standard">성공</Alert>
          <Alert severity="info" variant="standard">정보</Alert>
          <Alert severity="warning" variant="standard">경고</Alert>
          <Alert severity="error" variant="standard">오류</Alert>
        </div>
      </div>

      <div>
        <h4>Filled</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Alert severity="success" variant="filled">성공</Alert>
          <Alert severity="info" variant="filled">정보</Alert>
          <Alert severity="warning" variant="filled">경고</Alert>
          <Alert severity="error" variant="filled">오류</Alert>
        </div>
      </div>

      <div>
        <h4>Outlined</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Alert severity="success" variant="outlined">성공</Alert>
          <Alert severity="info" variant="outlined">정보</Alert>
          <Alert severity="warning" variant="outlined">경고</Alert>
          <Alert severity="error" variant="outlined">오류</Alert>
        </div>
      </div>
    </div>
  ),
};

export const WithAction = {
  render: () => {
    const [show, setShow] = useState(true);

    return show ? (
      <Alert
        severity="info"
        title="새로운 대회 안내"
        onClose={() => setShow(false)}
        action={
          <Button size="small" variant="text">
            자세히 보기
          </Button>
        }
      >
        2024 서울시 탁구 선수권 대회 신청이 시작되었습니다.
      </Alert>
    ) : (
      <Button onClick={() => setShow(true)}>알림 다시 표시</Button>
    );
  },
};

export const WithCustomIcon = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Alert severity="success" icon={<CheckCircle />}>
        커스텀 체크 아이콘
      </Alert>
      <Alert severity="info" icon={<Info />}>
        커스텀 정보 아이콘
      </Alert>
      <Alert severity="warning" icon={<Warning />}>
        커스텀 경고 아이콘
      </Alert>
      <Alert severity="error" icon={<Error />}>
        커스텀 오류 아이콘
      </Alert>
    </div>
  ),
};

export const WithoutIcon = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Alert severity="success" icon={false}>
        아이콘 없는 성공 메시지
      </Alert>
      <Alert severity="info" icon={false}>
        아이콘 없는 정보 메시지
      </Alert>
    </div>
  ),
};

export const Snackbar = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>스낵바 표시</Button>
        <Alert
          isSnackbar
          open={open}
          onClose={() => setOpen(false)}
          severity="success"
          autoHideDuration={3000}
        >
          참가 신청이 완료되었습니다!
        </Alert>
      </>
    );
  },
};

export const SnackbarPositions = {
  render: () => {
    const [position, setPosition] = useState(null);

    const positions = [
      { vertical: 'top', horizontal: 'left', label: '상단 왼쪽' },
      { vertical: 'top', horizontal: 'center', label: '상단 가운데' },
      { vertical: 'top', horizontal: 'right', label: '상단 오른쪽' },
      { vertical: 'bottom', horizontal: 'left', label: '하단 왼쪽' },
      { vertical: 'bottom', horizontal: 'center', label: '하단 가운데' },
      { vertical: 'bottom', horizontal: 'right', label: '하단 오른쪽' },
    ];

    return (
      <>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
          {positions.map((pos) => (
            <Button
              key={`${pos.vertical}-${pos.horizontal}`}
              onClick={() => setPosition(pos)}
              size="small"
            >
              {pos.label}
            </Button>
          ))}
        </div>

        {position && (
          <Alert
            isSnackbar
            open={!!position}
            onClose={() => setPosition(null)}
            severity="info"
            vertical={position.vertical}
            horizontal={position.horizontal}
            autoHideDuration={2000}
          >
            {position.label} 스낵바
          </Alert>
        )}
      </>
    );
  },
};

export const FormValidation = {
  render: () => {
    const [errors, setErrors] = useState([]);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = () => {
      const newErrors = [];

      // 가상의 유효성 검사
      const randomError = Math.random();
      if (randomError < 0.3) {
        newErrors.push('이름을 입력해주세요');
      }
      if (randomError > 0.3 && randomError < 0.6) {
        newErrors.push('이메일 형식이 올바르지 않습니다');
      }
      if (randomError > 0.6 && randomError < 0.8) {
        newErrors.push('전화번호를 입력해주세요');
      }

      if (newErrors.length > 0) {
        setErrors(newErrors);
        setShowSuccess(false);
      } else {
        setErrors([]);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
      }
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Button onClick={handleSubmit}>제출</Button>

        {errors.length > 0 && (
          <Alert severity="error" title="입력 오류" onClose={() => setErrors([])}>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </Alert>
        )}

        {showSuccess && (
          <Alert severity="success" title="제출 완료">
            신청서가 성공적으로 제출되었습니다.
          </Alert>
        )}
      </div>
    );
  },
};

export const TournamentNotifications = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Alert severity="success" title="참가 신청 완료" variant="filled">
        남자부 단식 경기에 성공적으로 신청되었습니다.
      </Alert>

      <Alert severity="info" title="일정 안내">
        대회는 2024년 3월 15일 오전 9시에 시작됩니다.<br />
        경기 시작 30분 전까지 도착해주세요.
      </Alert>

      <Alert severity="warning" title="신청 마감 임박" onClose={() => {}}>
        신청 마감까지 3일 남았습니다. 서둘러 신청해주세요!
      </Alert>

      <Alert severity="error" title="결제 실패" variant="outlined">
        결제 처리 중 오류가 발생했습니다. 다시 시도해주세요.
      </Alert>
    </div>
  ),
};

export const InlineMessages = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '500px' }}>
      <div>
        <h4>참가 신청</h4>
        <Alert severity="info" variant="outlined" icon={false}>
          모든 필드는 필수 입력 항목입니다.
        </Alert>
      </div>

      <div>
        <h4>결제 정보</h4>
        <Alert severity="warning" variant="outlined">
          취소는 대회 3일 전까지만 가능합니다.
        </Alert>
      </div>

      <div>
        <h4>참가 자격</h4>
        <Alert severity="success" variant="outlined" icon={false}>
          ✓ 만 18세 이상<br />
          ✓ 신청서 작성 완료<br />
          ✓ 참가비 결제 완료
        </Alert>
      </div>
    </div>
  ),
};
