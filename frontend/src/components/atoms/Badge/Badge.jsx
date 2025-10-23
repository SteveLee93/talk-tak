import { Badge as MuiBadge } from '@mui/material';
import PropTypes from 'prop-types';

/**
 * Badge 컴포넌트
 * Material-UI Badge를 래핑한 커스텀 뱃지
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - 뱃지를 표시할 요소
 * @param {number|string} props.badgeContent - 뱃지 내용 (숫자 또는 텍스트)
 * @param {'primary'|'secondary'|'error'|'success'|'warning'|'info'|'default'} props.color - 뱃지 색상
 * @param {'standard'|'dot'} props.variant - 뱃지 스타일
 * @param {number} props.max - 최대 표시 숫자 (기본: 99)
 * @param {boolean} props.showZero - 0일 때도 표시
 * @param {boolean} props.invisible - 뱃지 숨김
 */
export default function Badge({
  children,
  badgeContent,
  color = 'primary',
  variant = 'standard',
  max = 99,
  showZero = false,
  invisible = false,
  ...props
}) {
  return (
    <MuiBadge
      badgeContent={badgeContent}
      color={color}
      variant={variant}
      max={max}
      showZero={showZero}
      invisible={invisible}
      {...props}
    >
      {children}
    </MuiBadge>
  );
}

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  badgeContent: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.oneOf(['primary', 'secondary', 'error', 'success', 'warning', 'info', 'default']),
  variant: PropTypes.oneOf(['standard', 'dot']),
  max: PropTypes.number,
  showZero: PropTypes.bool,
  invisible: PropTypes.bool,
};
