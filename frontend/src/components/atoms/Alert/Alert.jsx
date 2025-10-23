import { Alert as MuiAlert, AlertTitle, Snackbar } from '@mui/material';
import PropTypes from 'prop-types';

/**
 * Alert 컴포넌트
 * Material-UI Alert를 래핑한 커스텀 알림
 *
 * @param {object} props
 * @param {'error'|'warning'|'info'|'success'} props.severity - 알림 타입
 * @param {string} props.title - 알림 제목
 * @param {React.ReactNode} props.children - 알림 내용
 * @param {boolean} props.isSnackbar - 스낵바 모드 (자동 사라짐)
 * @param {boolean} props.open - 스낵바 열림 상태
 * @param {function} props.onClose - 닫기 핸들러
 * @param {number} props.autoHideDuration - 자동 숨김 시간 (ms, 기본: 6000)
 * @param {'filled'|'outlined'|'standard'} props.variant - 알림 스타일
 * @param {React.ReactNode} props.icon - 커스텀 아이콘
 * @param {React.ReactNode} props.action - 액션 버튼
 * @param {'top'|'bottom'} props.vertical - 스낵바 세로 위치
 * @param {'left'|'center'|'right'} props.horizontal - 스낵바 가로 위치
 */
export default function Alert({
  severity = 'info',
  title,
  children,
  isSnackbar = false,
  open = true,
  onClose,
  autoHideDuration = 6000,
  variant = 'standard',
  icon,
  action,
  vertical = 'top',
  horizontal = 'center',
  ...props
}) {
  const alertContent = (
    <MuiAlert
      severity={severity}
      variant={variant}
      icon={icon}
      action={action}
      onClose={onClose}
      {...props}
    >
      {title && <AlertTitle>{title}</AlertTitle>}
      {children}
    </MuiAlert>
  );

  // 스낵바 모드
  if (isSnackbar) {
    return (
      <Snackbar
        open={open}
        autoHideDuration={autoHideDuration}
        onClose={onClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        {alertContent}
      </Snackbar>
    );
  }

  // 일반 Alert
  return alertContent;
}

Alert.propTypes = {
  severity: PropTypes.oneOf(['error', 'warning', 'info', 'success']),
  title: PropTypes.string,
  children: PropTypes.node,
  isSnackbar: PropTypes.bool,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  autoHideDuration: PropTypes.number,
  variant: PropTypes.oneOf(['filled', 'outlined', 'standard']),
  icon: PropTypes.node,
  action: PropTypes.node,
  vertical: PropTypes.oneOf(['top', 'bottom']),
  horizontal: PropTypes.oneOf(['left', 'center', 'right']),
};
