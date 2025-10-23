import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

/**
 * Input 컴포넌트
 * Material-UI TextField를 래핑한 커스텀 입력 필드
 *
 * @param {object} props
 * @param {string} props.label - 입력 필드 라벨
 * @param {'text'|'number'|'email'|'password'|'tel'|'url'} props.type - 입력 타입
 * @param {string|number} props.value - 입력 값
 * @param {function} props.onChange - 변경 핸들러
 * @param {string} props.error - 에러 메시지
 * @param {string} props.helperText - 도움말 텍스트
 * @param {boolean} props.required - 필수 입력 여부
 * @param {boolean} props.disabled - 비활성화 상태
 * @param {boolean} props.fullWidth - 전체 너비 사용
 * @param {string} props.placeholder - 플레이스홀더
 * @param {React.ReactNode} props.startAdornment - 시작 장식 요소
 * @param {React.ReactNode} props.endAdornment - 끝 장식 요소
 * @param {boolean} props.multiline - 여러 줄 입력
 * @param {number} props.rows - 기본 행 수 (multiline일 때)
 * @param {number} props.maxRows - 최대 행 수 (multiline일 때)
 */
export default function Input({
  label,
  type = 'text',
  value,
  onChange,
  error,
  helperText,
  required = false,
  disabled = false,
  fullWidth = true,
  placeholder,
  startAdornment,
  endAdornment,
  multiline = false,
  rows,
  maxRows,
  ...props
}) {
  return (
    <TextField
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      error={!!error}
      helperText={error || helperText}
      required={required}
      disabled={disabled}
      fullWidth={fullWidth}
      placeholder={placeholder}
      multiline={multiline}
      rows={rows}
      maxRows={maxRows}
      InputProps={{
        startAdornment,
        endAdornment,
      }}
      {...props}
    />
  );
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(['text', 'number', 'email', 'password', 'tel', 'url']),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  error: PropTypes.string,
  helperText: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  placeholder: PropTypes.string,
  startAdornment: PropTypes.node,
  endAdornment: PropTypes.node,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  maxRows: PropTypes.number,
};
