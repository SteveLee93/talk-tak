import { CalendarToday } from '@mui/icons-material';
import PropTypes from 'prop-types';
import Chip from '../../atoms/Chip';

/**
 * DateBadge 컴포넌트
 * 날짜를 표시하는 배지 컴포넌트
 *
 * @param {object} props
 * @param {string} props.date - 날짜 문자열
 * @param {string} props.format - 날짜 포맷 ('full', 'short', 'custom')
 * @param {'primary'|'secondary'|'default'} props.color - 배지 색상
 * @param {'small'|'medium'} props.size - 배지 크기
 * @param {boolean} props.showIcon - 아이콘 표시 여부
 * @param {object} props.sx - Material-UI sx prop
 */
export default function DateBadge({
  date,
  format = 'full',
  color = 'primary',
  size = 'small',
  showIcon = true,
  sx,
}) {
  // 날짜 포맷팅
  const formatDate = (dateStr, formatType) => {
    if (!dateStr) return '';

    if (formatType === 'custom') {
      return dateStr; // 이미 포맷된 문자열
    }

    try {
      const dateObj = new Date(dateStr);

      if (formatType === 'short') {
        // MM.DD 형식
        const month = String(dateObj.getMonth() + 1).padStart(2, '0');
        const day = String(dateObj.getDate()).padStart(2, '0');
        return `${month}.${day}`;
      }

      // 'full' - YYYY.MM.DD 형식
      const year = dateObj.getFullYear();
      const month = String(dateObj.getMonth() + 1).padStart(2, '0');
      const day = String(dateObj.getDate()).padStart(2, '0');
      return `${year}.${month}.${day}`;
    } catch (error) {
      return dateStr; // 파싱 실패 시 원본 반환
    }
  };

  const formattedDate = formatDate(date, format);

  return (
    <Chip
      label={formattedDate}
      icon={showIcon ? <CalendarToday fontSize="small" /> : undefined}
      color={color}
      size={size}
      sx={sx}
    />
  );
}

DateBadge.propTypes = {
  date: PropTypes.string.isRequired,
  format: PropTypes.oneOf(['full', 'short', 'custom']),
  color: PropTypes.oneOf(['default', 'primary', 'secondary', 'error', 'warning', 'success', 'info']),
  size: PropTypes.oneOf(['small', 'medium']),
  showIcon: PropTypes.bool,
  sx: PropTypes.object,
};
