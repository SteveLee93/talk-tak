import { Avatar as MuiAvatar } from '@mui/material';
import PropTypes from 'prop-types';

/**
 * Avatar 컴포넌트
 * Material-UI Avatar를 래핑한 커스텀 아바타
 *
 * @param {object} props
 * @param {string} props.src - 이미지 URL
 * @param {string} props.alt - 대체 텍스트
 * @param {number|'small'|'medium'|'large'} props.size - 아바타 크기
 * @param {'circular'|'rounded'|'square'} props.variant - 아바타 모양
 * @param {React.ReactNode} props.children - 이미지가 없을 때 표시할 내용 (텍스트, 아이콘)
 */
export default function Avatar({
  src,
  alt,
  size = 'medium',
  variant = 'circular',
  children,
  ...props
}) {
  const sizeMap = {
    small: 32,
    medium: 40,
    large: 56,
  };

  const avatarSize = typeof size === 'number' ? size : sizeMap[size];

  return (
    <MuiAvatar
      src={src}
      alt={alt}
      variant={variant}
      sx={{
        width: avatarSize,
        height: avatarSize,
      }}
      {...props}
    >
      {children}
    </MuiAvatar>
  );
}

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['small', 'medium', 'large']),
    PropTypes.number,
  ]),
  variant: PropTypes.oneOf(['circular', 'rounded', 'square']),
  children: PropTypes.node,
};
