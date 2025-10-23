import { FormControlLabel, Checkbox as MuiCheckbox } from '@mui/material';
import PropTypes from 'prop-types';

/**
 * Checkbox 컴포넌트
 * Material-UI Checkbox를 래핑한 커스텀 체크박스
 *
 * @param {object} props
 * @param {boolean} props.checked - 체크 상태
 * @param {function} props.onChange - 변경 핸들러
 * @param {string} props.label - 라벨 텍스트
 * @param {boolean} props.disabled - 비활성화 상태
 * @param {'default'|'primary'|'secondary'|'error'|'success'|'warning'} props.color - 체크박스 색상
 * @param {'small'|'medium'} props.size - 체크박스 크기
 * @param {boolean} props.indeterminate - 불확정 상태 (일부 선택)
 */
export default function Checkbox({
  checked,
  onChange,
  label,
  disabled = false,
  color = 'primary',
  size = 'medium',
  indeterminate = false,
  ...props
}) {
  const checkbox = (
    <MuiCheckbox
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      color={color}
      size={size}
      indeterminate={indeterminate}
      {...props}
    />
  );

  // 라벨이 있으면 FormControlLabel로 감싸기
  if (label) {
    return (
      <FormControlLabel
        control={checkbox}
        label={label}
        disabled={disabled}
      />
    );
  }

  return checkbox;
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  color: PropTypes.oneOf(['default', 'primary', 'secondary', 'error', 'success', 'warning']),
  size: PropTypes.oneOf(['small', 'medium']),
  indeterminate: PropTypes.bool,
};
