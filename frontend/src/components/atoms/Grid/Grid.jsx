import { Grid as MuiGrid } from '@mui/material';
import PropTypes from 'prop-types';

/**
 * Grid 컴포넌트
 * Material-UI Grid를 래핑한 그리드 레이아웃
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - 자식 요소
 * @param {boolean} props.container - 그리드 컨테이너 여부
 * @param {boolean} props.item - 그리드 아이템 여부
 * @param {number} props.xs - Extra small 화면 크기 (0-12)
 * @param {number} props.sm - Small 화면 크기 (0-12)
 * @param {number} props.md - Medium 화면 크기 (0-12)
 * @param {number} props.lg - Large 화면 크기 (0-12)
 * @param {number} props.xl - Extra large 화면 크기 (0-12)
 * @param {number|string} props.spacing - 간격 (container일 때)
 * @param {'flex-start'|'center'|'flex-end'|'stretch'|'baseline'} props.alignItems - 세로 정렬
 * @param {'flex-start'|'center'|'flex-end'|'space-between'|'space-around'|'space-evenly'} props.justifyContent - 가로 정렬
 * @param {'row'|'row-reverse'|'column'|'column-reverse'} props.direction - 방향
 * @param {object} props.sx - Material-UI sx prop
 */
export default function Grid({
  children,
  container = false,
  item = false,
  xs,
  sm,
  md,
  lg,
  xl,
  spacing,
  alignItems,
  justifyContent,
  direction,
  sx,
  ...props
}) {
  return (
    <MuiGrid
      container={container}
      item={item}
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
      spacing={spacing}
      alignItems={alignItems}
      justifyContent={justifyContent}
      direction={direction}
      sx={sx}
      {...props}
    >
      {children}
    </MuiGrid>
  );
}

Grid.propTypes = {
  children: PropTypes.node,
  container: PropTypes.bool,
  item: PropTypes.bool,
  xs: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['auto'])]),
  sm: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['auto'])]),
  md: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['auto'])]),
  lg: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['auto'])]),
  xl: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['auto'])]),
  spacing: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  alignItems: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'stretch', 'baseline']),
  justifyContent: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly']),
  direction: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  sx: PropTypes.object,
};
