import { Typography as MuiTypography } from '@mui/material';
import PropTypes from 'prop-types';

/**
 * Typography 컴포넌트
 * Material-UI Typography를 래핑한 커스텀 텍스트 컴포넌트
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - 텍스트 내용
 * @param {'h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'subtitle1'|'subtitle2'|'body1'|'body2'|'caption'|'button'|'overline'} props.variant - 텍스트 스타일
 * @param {'inherit'|'primary'|'secondary'|'textPrimary'|'textSecondary'|'error'} props.color - 텍스트 색상
 * @param {'left'|'center'|'right'|'justify'} props.align - 텍스트 정렬
 * @param {boolean} props.gutterBottom - 하단 여백
 * @param {boolean} props.noWrap - 줄바꿈 방지
 * @param {boolean} props.paragraph - 문단 스타일
 */
export default function Typography({
  children,
  variant = 'body1',
  color = 'inherit',
  align = 'left',
  gutterBottom = false,
  noWrap = false,
  paragraph = false,
  ...props
}) {
  return (
    <MuiTypography
      variant={variant}
      color={color}
      align={align}
      gutterBottom={gutterBottom}
      noWrap={noWrap}
      paragraph={paragraph}
      {...props}
    >
      {children}
    </MuiTypography>
  );
}

Typography.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'caption',
    'button',
    'overline',
  ]),
  color: PropTypes.oneOf(['inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary', 'error']),
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  gutterBottom: PropTypes.bool,
  noWrap: PropTypes.bool,
  paragraph: PropTypes.bool,
};
