import { IconButton as MuiIconButton } from '@mui/material';
import PropTypes from 'prop-types';

/**
 * IconButton 컴포넌트
 * Material-UI IconButton을 래핑한 커스텀 아이콘 버튼
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - 아이콘 요소
 * @param {'default'|'inherit'|'primary'|'secondary'|'error'|'success'|'warning'|'info'} props.color - 버튼 색상
 * @param {'small'|'medium'|'large'} props.size - 버튼 크기
 * @param {boolean} props.disabled - 비활성화 상태
 * @param {function} props.onClick - 클릭 핸들러
 * @param {'start'|'end'} props.edge - 컨테이너 가장자리 배치
 */
export default function IconButton({
  children,
  color = 'default',
  size = 'medium',
  disabled = false,
  onClick,
  edge,
  ...props
}) {
  return (
    <MuiIconButton
      color={color}
      size={size}
      disabled={disabled}
      onClick={onClick}
      edge={edge}
      {...props}
    >
      {children}
    </MuiIconButton>
  );
}

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary', 'error', 'success', 'warning', 'info']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  edge: PropTypes.oneOf(['start', 'end', false]),
};
