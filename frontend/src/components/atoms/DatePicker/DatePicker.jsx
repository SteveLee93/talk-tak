import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import PropTypes from 'prop-types';
import 'dayjs/locale/ko';

/**
 * DatePicker 컴포넌트
 * Material-UI DatePicker를 래핑한 커스텀 날짜 선택기
 *
 * @param {object} props
 * @param {string} props.label - 라벨
 * @param {Date|dayjs} props.value - 선택된 날짜
 * @param {function} props.onChange - 변경 핸들러
 * @param {Date|dayjs} props.minDate - 최소 날짜
 * @param {Date|dayjs} props.maxDate - 최대 날짜
 * @param {boolean} props.disabled - 비활성화 상태
 * @param {string} props.format - 날짜 형식 (기본: YYYY-MM-DD)
 * @param {string} props.error - 에러 메시지
 * @param {string} props.helperText - 도움말 텍스트
 */
export default function DatePicker({
  label,
  value,
  onChange,
  minDate,
  maxDate,
  disabled = false,
  format = 'YYYY-MM-DD',
  error,
  helperText,
  ...props
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
      <MuiDatePicker
        label={label}
        value={value}
        onChange={onChange}
        minDate={minDate}
        maxDate={maxDate}
        disabled={disabled}
        format={format}
        slotProps={{
          textField: {
            error: !!error,
            helperText: error || helperText,
            fullWidth: true,
          },
        }}
        {...props}
      />
    </LocalizationProvider>
  );
}

DatePicker.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  minDate: PropTypes.any,
  maxDate: PropTypes.any,
  disabled: PropTypes.bool,
  format: PropTypes.string,
  error: PropTypes.string,
  helperText: PropTypes.string,
};
