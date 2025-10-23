import { FormControlLabel, Switch as MuiSwitch } from '@mui/material';
import PropTypes from 'prop-types';

/**
 * Switch 컴포넌트
 * Material-UI Switch를 래핑한 커스텀 토글 스위치
 *
 * @param {object} props
 * @param {boolean} props.checked - 스위치 상태
 * @param {function} props.onChange - 변경 핸들러
 * @param {string} props.label - 라벨 텍스트
 * @param {boolean} props.disabled - 비활성화 상태
 * @param {'primary'|'secondary'|'error'|'success'|'warning'} props.color - 스위치 색상
 * @param {'small'|'medium'} props.size - 스위치 크기
 * @param {'start'|'end'|'top'|'bottom'} props.labelPlacement - 라벨 위치
 */
export default function Switch({
  checked,
  onChange,
  label,
  disabled = false,
  color = 'primary',
  size = 'medium',
  labelPlacement = 'end',
  ...props
}) {
  const switchElement = (
    <MuiSwitch
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      color={color}
      size={size}
      {...props}
    />
  );

  // 라벨이 있으면 FormControlLabel로 감싸기
  if (label) {
    return (
      <FormControlLabel
        control={switchElement}
        label={label}
        labelPlacement={labelPlacement}
        disabled={disabled}
      />
    );
  }

  return switchElement;
}

Switch.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  color: PropTypes.oneOf(['primary', 'secondary', 'error', 'success', 'warning']),
  size: PropTypes.oneOf(['small', 'medium']),
  labelPlacement: PropTypes.oneOf(['start', 'end', 'top', 'bottom']),
};
