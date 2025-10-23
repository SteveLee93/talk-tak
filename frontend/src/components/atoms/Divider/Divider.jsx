import { Divider as MuiDivider } from '@mui/material';
import PropTypes from 'prop-types';

/**
 * Divider 컴포넌트
 * Material-UI Divider를 래핑한 커스텀 구분선
 *
 * @param {object} props
 * @param {'horizontal'|'vertical'} props.orientation - 구분선 방향
 * @param {'fullWidth'|'inset'|'middle'} props.variant - 구분선 스타일
 * @param {boolean} props.flexItem - flex 컨테이너에서 사용
 * @param {React.ReactNode} props.children - 구분선 중간에 표시할 텍스트
 * @param {'left'|'center'|'right'} props.textAlign - 텍스트 정렬
 */
export default function Divider({
  orientation = 'horizontal',
  variant = 'fullWidth',
  flexItem = false,
  children,
  textAlign = 'center',
  ...props
}) {
  return (
    <MuiDivider
      orientation={orientation}
      variant={variant}
      flexItem={flexItem}
      textAlign={textAlign}
      {...props}
    >
      {children}
    </MuiDivider>
  );
}

Divider.propTypes = {
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  variant: PropTypes.oneOf(['fullWidth', 'inset', 'middle']),
  flexItem: PropTypes.bool,
  children: PropTypes.node,
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),
};
