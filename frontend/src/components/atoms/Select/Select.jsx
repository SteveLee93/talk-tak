import { TextField, MenuItem } from '@mui/material';
import PropTypes from 'prop-types';

/**
 * Select 컴포넌트
 * Material-UI Select를 래핑한 커스텀 드롭다운
 *
 * @param {object} props
 * @param {string} props.label - 선택 필드 라벨
 * @param {Array<{value: string|number, label: string}>} props.options - 선택 옵션 배열
 * @param {string|number} props.value - 선택된 값
 * @param {function} props.onChange - 변경 핸들러
 * @param {string} props.error - 에러 메시지
 * @param {string} props.helperText - 도움말 텍스트
 * @param {boolean} props.required - 필수 선택 여부
 * @param {boolean} props.disabled - 비활성화 상태
 * @param {boolean} props.fullWidth - 전체 너비 사용
 * @param {string} props.placeholder - 플레이스홀더
 */
export default function Select({
  label,
  options = [],
  value,
  onChange,
  error,
  helperText,
  required = false,
  disabled = false,
  fullWidth = true,
  placeholder,
  ...props
}) {
  return (
    <TextField
      select
      label={label}
      value={value}
      onChange={onChange}
      error={!!error}
      helperText={error || helperText}
      required={required}
      disabled={disabled}
      fullWidth={fullWidth}
      placeholder={placeholder}
      {...props}
    >
      {placeholder && (
        <MenuItem value="" disabled>
          {placeholder}
        </MenuItem>
      )}
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}

Select.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  error: PropTypes.string,
  helperText: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  placeholder: PropTypes.string,
};
