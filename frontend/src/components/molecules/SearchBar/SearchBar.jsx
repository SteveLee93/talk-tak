import { Search, Clear } from '@mui/icons-material';
import { InputAdornment, IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import Input from '../../atoms/Input';

/**
 * SearchBar 컴포넌트
 * 검색 기능을 제공하는 입력 바
 *
 * @param {object} props
 * @param {string} props.value - 검색어
 * @param {function} props.onChange - 변경 핸들러
 * @param {function} props.onClear - 클리어 핸들러
 * @param {string} props.placeholder - 플레이스홀더
 * @param {boolean} props.fullWidth - 전체 너비 사용
 * @param {object} props.sx - Material-UI sx prop
 */
export default function SearchBar({
  value = '',
  onChange,
  onClear,
  placeholder = '검색...',
  fullWidth = false,
  sx,
}) {
  const handleClear = () => {
    if (onClear) {
      onClear();
    }
    if (onChange) {
      onChange({ target: { value: '' } });
    }
  };

  return (
    <Input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      fullWidth={fullWidth}
      size="small"
      startAdornment={
        <InputAdornment position="start">
          <Search color="action" />
        </InputAdornment>
      }
      endAdornment={
        value && (
          <InputAdornment position="end">
            <IconButton
              size="small"
              onClick={handleClear}
              edge="end"
            >
              <Clear fontSize="small" />
            </IconButton>
          </InputAdornment>
        )
      }
      sx={{
        bgcolor: 'background.paper',
        ...sx,
      }}
    />
  );
}

SearchBar.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  placeholder: PropTypes.string,
  fullWidth: PropTypes.bool,
  sx: PropTypes.object,
};
