import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import PropTypes from 'prop-types';

/**
 * RadioButton 컴포넌트
 * Material-UI Radio를 래핑한 커스텀 라디오 버튼 그룹
 *
 * @param {object} props
 * @param {string} props.label - 그룹 라벨
 * @param {Array<{value: string|number, label: string}>} props.options - 라디오 옵션 배열
 * @param {string|number} props.value - 선택된 값
 * @param {function} props.onChange - 변경 핸들러
 * @param {'row'|'column'} props.direction - 배치 방향
 * @param {boolean} props.disabled - 비활성화 상태
 * @param {'primary'|'secondary'|'error'|'success'|'warning'} props.color - 라디오 색상
 * @param {'small'|'medium'} props.size - 라디오 크기
 */
export default function RadioButton({
  label,
  options = [],
  value,
  onChange,
  direction = 'column',
  disabled = false,
  color = 'primary',
  size = 'medium',
  ...props
}) {
  return (
    <FormControl disabled={disabled} {...props}>
      {label && <FormLabel>{label}</FormLabel>}
      <RadioGroup
        value={value}
        onChange={onChange}
        row={direction === 'row'}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio color={color} size={size} />}
            label={option.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

RadioButton.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  direction: PropTypes.oneOf(['row', 'column']),
  disabled: PropTypes.bool,
  color: PropTypes.oneOf(['primary', 'secondary', 'error', 'success', 'warning']),
  size: PropTypes.oneOf(['small', 'medium']),
};
