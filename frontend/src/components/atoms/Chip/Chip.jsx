import { Chip as MuiChip } from '@mui/material';
import PropTypes from 'prop-types';

/**
 * Chip 컴포넌트
 * Material-UI Chip을 래핑한 커스텀 칩 (상태, 라벨 표시용)
 *
 * @param {object} props
 * @param {string} props.label - 칩 라벨
 * @param {'default'|'primary'|'secondary'|'error'|'warning'|'success'|'info'} props.color - 칩 색상
 * @param {'filled'|'outlined'} props.variant - 칩 스타일
 * @param {'small'|'medium'} props.size - 칩 크기
 * @param {React.ReactNode} props.icon - 아이콘
 * @param {function} props.onDelete - 삭제 핸들러 (삭제 버튼 표시)
 * @param {function} props.onClick - 클릭 핸들러
 * @param {boolean} props.clickable - 클릭 가능 여부
 */
export default function Chip({
  label,
  color = 'default',
  variant = 'filled',
  size = 'medium',
  icon,
  onDelete,
  onClick,
  clickable,
  ...props
}) {
  return (
    <MuiChip
      label={label}
      color={color}
      variant={variant}
      size={size}
      icon={icon}
      onDelete={onDelete}
      onClick={onClick}
      clickable={clickable || !!onClick}
      {...props}
    />
  );
}

Chip.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['default', 'primary', 'secondary', 'error', 'warning', 'success', 'info']),
  variant: PropTypes.oneOf(['filled', 'outlined']),
  size: PropTypes.oneOf(['small', 'medium']),
  icon: PropTypes.node,
  onDelete: PropTypes.func,
  onClick: PropTypes.func,
  clickable: PropTypes.bool,
};
