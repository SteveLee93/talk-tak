import { Box as MuiBox } from '@mui/material';
import PropTypes from 'prop-types';

/**
 * Box 컴포넌트
 * Material-UI Box를 래핑한 레이아웃 컨테이너
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - 자식 요소
 * @param {object} props.sx - Material-UI sx prop (스타일)
 * @param {string} props.component - HTML 태그 (기본: 'div')
 */
export default function Box({ children, sx, component = 'div', ...props }) {
  return (
    <MuiBox component={component} sx={sx} {...props}>
      {children}
    </MuiBox>
  );
}

Box.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
  component: PropTypes.string,
};
