import { Skeleton as MuiSkeleton, Box } from '@mui/material';
import PropTypes from 'prop-types';

/**
 * Skeleton 컴포넌트
 * Material-UI Skeleton을 래핑한 커스텀 로딩 스켈레톤
 *
 * @param {object} props
 * @param {'text'|'rectangular'|'rounded'|'circular'} props.variant - 스켈레톤 모양
 * @param {number|string} props.width - 너비
 * @param {number|string} props.height - 높이
 * @param {'pulse'|'wave'|false} props.animation - 애니메이션 타입
 * @param {number} props.count - 반복 개수
 * @param {number} props.spacing - 반복 간격 (count > 1일 때)
 */
export default function Skeleton({
  variant = 'text',
  width,
  height,
  animation = 'pulse',
  count = 1,
  spacing = 1,
  ...props
}) {
  // 단일 스켈레톤
  if (count === 1) {
    return (
      <MuiSkeleton
        variant={variant}
        width={width}
        height={height}
        animation={animation}
        {...props}
      />
    );
  }

  // 여러 개 스켈레톤
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: spacing }}>
      {Array.from({ length: count }).map((_, index) => (
        <MuiSkeleton
          key={index}
          variant={variant}
          width={width}
          height={height}
          animation={animation}
          {...props}
        />
      ))}
    </Box>
  );
}

Skeleton.propTypes = {
  variant: PropTypes.oneOf(['text', 'rectangular', 'rounded', 'circular']),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  animation: PropTypes.oneOf(['pulse', 'wave', false]),
  count: PropTypes.number,
  spacing: PropTypes.number,
};
