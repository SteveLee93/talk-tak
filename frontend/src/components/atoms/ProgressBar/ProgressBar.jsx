import { LinearProgress, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

/**
 * ProgressBar 컴포넌트
 * Material-UI LinearProgress를 래핑한 커스텀 진행률 바
 *
 * @param {object} props
 * @param {number} props.value - 진행률 (0-100)
 * @param {'determinate'|'indeterminate'|'buffer'|'query'} props.variant - 진행 바 타입
 * @param {'primary'|'secondary'|'error'|'success'|'warning'|'info'} props.color - 색상
 * @param {boolean} props.showLabel - 퍼센트 라벨 표시
 * @param {string} props.label - 커스텀 라벨
 * @param {number} props.height - 진행 바 높이 (px)
 * @param {number} props.valueBuffer - 버퍼 값 (variant='buffer'일 때)
 */
export default function ProgressBar({
  value = 0,
  variant = 'determinate',
  color = 'primary',
  showLabel = false,
  label,
  height = 4,
  valueBuffer,
  ...props
}) {
  return (
    <Box sx={{ width: '100%' }}>
      {/* 라벨 (위) */}
      {(showLabel || label) && (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
          {label && (
            <Typography variant="body2" color="text.secondary">
              {label}
            </Typography>
          )}
          {showLabel && variant === 'determinate' && (
            <Typography variant="body2" color="text.secondary">
              {`${Math.round(value)}%`}
            </Typography>
          )}
        </Box>
      )}

      {/* 진행 바 */}
      <LinearProgress
        variant={variant}
        value={value}
        valueBuffer={valueBuffer}
        color={color}
        sx={{
          height: height,
          borderRadius: height / 2,
        }}
        {...props}
      />
    </Box>
  );
}

ProgressBar.propTypes = {
  value: PropTypes.number,
  variant: PropTypes.oneOf(['determinate', 'indeterminate', 'buffer', 'query']),
  color: PropTypes.oneOf(['primary', 'secondary', 'error', 'success', 'warning', 'info']),
  showLabel: PropTypes.bool,
  label: PropTypes.string,
  height: PropTypes.number,
  valueBuffer: PropTypes.number,
};
