import { CircularProgress, Box } from '@mui/material';
import PropTypes from 'prop-types';
import Typography from '../Typography';

/**
 * Spinner 컴포넌트
 * Material-UI CircularProgress를 래핑한 로딩 스피너
 *
 * @param {object} props
 * @param {'small'|'medium'|'large'} props.size - 스피너 크기
 * @param {'primary'|'secondary'|'error'|'success'|'warning'|'info'|'inherit'} props.color - 스피너 색상
 * @param {string} props.message - 로딩 메시지
 * @param {boolean} props.fullScreen - 전체 화면 로딩
 * @param {number} props.thickness - 스피너 두께
 */
export default function Spinner({
  size = 'medium',
  color = 'primary',
  message,
  fullScreen = false,
  thickness = 3.6,
  ...props
}) {
  const sizeMap = {
    small: 24,
    medium: 40,
    large: 60,
  };

  const spinnerSize = typeof size === 'number' ? size : sizeMap[size];

  const spinner = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <CircularProgress
        size={spinnerSize}
        color={color}
        thickness={thickness}
        {...props}
      />
      {message && (
        <Typography variant="body2" color="text.secondary">
          {message}
        </Typography>
      )}
    </Box>
  );

  // 전체 화면 로딩
  if (fullScreen) {
    return (
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 9999,
        }}
      >
        {spinner}
      </Box>
    );
  }

  return spinner;
}

Spinner.propTypes = {
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['small', 'medium', 'large']),
    PropTypes.number,
  ]),
  color: PropTypes.oneOf(['primary', 'secondary', 'error', 'success', 'warning', 'info', 'inherit']),
  message: PropTypes.string,
  fullScreen: PropTypes.bool,
  thickness: PropTypes.number,
};
