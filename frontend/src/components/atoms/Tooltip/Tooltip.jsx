import { Tooltip as MuiTooltip } from '@mui/material';
import PropTypes from 'prop-types';

/**
 * Tooltip 컴포넌트
 * Material-UI Tooltip을 래핑한 커스텀 툴팁
 *
 * @param {object} props
 * @param {string} props.title - 툴팁 내용
 * @param {React.ReactNode} props.children - 툴팁을 표시할 요소
 * @param {'bottom-end'|'bottom-start'|'bottom'|'left-end'|'left-start'|'left'|'right-end'|'right-start'|'right'|'top-end'|'top-start'|'top'} props.placement - 툴팁 위치
 * @param {boolean} props.arrow - 화살표 표시
 */
export default function Tooltip({
  title,
  children,
  placement = 'top',
  arrow = true,
  ...props
}) {
  return (
    <MuiTooltip
      title={title}
      placement={placement}
      arrow={arrow}
      {...props}
    >
      {children}
    </MuiTooltip>
  );
}

Tooltip.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.element.isRequired,
  placement: PropTypes.oneOf([
    'bottom-end',
    'bottom-start',
    'bottom',
    'left-end',
    'left-start',
    'left',
    'right-end',
    'right-start',
    'right',
    'top-end',
    'top-start',
    'top',
  ]),
  arrow: PropTypes.bool,
};
