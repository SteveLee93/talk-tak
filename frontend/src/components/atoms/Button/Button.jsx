import { Button as MuiButton, CircularProgress } from '@mui/material';
import PropTypes from 'prop-types';

/**
 * Button 컴포넌트
 * Material-UI Button을 래핑한 커스텀 버튼
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - 버튼 내용
 * @param {'contained'|'outlined'|'text'} props.variant - 버튼 스타일
 * @param {'primary'|'secondary'|'error'|'success'|'warning'|'info'} props.color - 버튼 색상
 * @param {'small'|'medium'|'large'} props.size - 버튼 크기
 * @param {React.ReactNode} props.startIcon - 시작 아이콘
 * @param {React.ReactNode} props.endIcon - 끝 아이콘
 * @param {boolean} props.fullWidth - 전체 너비 사용
 * @param {boolean} props.loading - 로딩 상태
 * @param {boolean} props.disabled - 비활성화 상태
 * @param {function} props.onClick - 클릭 핸들러
 */
export default function Button({
  children,
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  startIcon,
  endIcon,
  fullWidth = false,
  loading = false,
  disabled = false,
  onClick,
  ...props
}) {
  return (
    <MuiButton
      variant={variant}
      color={color}
      size={size}
      startIcon={!loading && startIcon}
      endIcon={!loading && endIcon}
      fullWidth={fullWidth}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading ? (
        <CircularProgress
          size={size === 'small' ? 16 : size === 'large' ? 24 : 20}
          color="inherit"
        />
      ) : (
        children
      )}
    </MuiButton>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  color: PropTypes.oneOf(['primary', 'secondary', 'error', 'success', 'warning', 'info']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  fullWidth: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};
