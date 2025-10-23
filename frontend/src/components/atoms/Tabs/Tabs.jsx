import { Tabs as MuiTabs, Tab, Box } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';

/**
 * Tabs 컴포넌트
 * Material-UI Tabs를 래핑한 커스텀 탭
 *
 * @param {object} props
 * @param {Array<{label: string, value: string|number, icon?: React.ReactNode, disabled?: boolean}>} props.tabs - 탭 배열
 * @param {string|number} props.value - 선택된 탭 값
 * @param {function} props.onChange - 탭 변경 핸들러
 * @param {'standard'|'scrollable'|'fullWidth'} props.variant - 탭 스타일
 * @param {'primary'|'secondary'} props.indicatorColor - 인디케이터 색상
 * @param {'primary'|'secondary'} props.textColor - 텍스트 색상
 * @param {boolean} props.centered - 가운데 정렬
 * @param {'horizontal'|'vertical'} props.orientation - 탭 방향
 * @param {React.ReactNode} props.children - 탭 패널 내용 (선택)
 */
export default function Tabs({
  tabs = [],
  value,
  onChange,
  variant = 'standard',
  indicatorColor = 'primary',
  textColor = 'primary',
  centered = false,
  orientation = 'horizontal',
  children,
  ...props
}) {
  const [internalValue, setInternalValue] = useState(value ?? tabs[0]?.value ?? 0);

  const handleChange = (event, newValue) => {
    setInternalValue(newValue);
    if (onChange) {
      onChange(event, newValue);
    }
  };

  const currentValue = value ?? internalValue;

  return (
    <Box>
      <MuiTabs
        value={currentValue}
        onChange={handleChange}
        variant={variant}
        indicatorColor={indicatorColor}
        textColor={textColor}
        centered={centered}
        orientation={orientation}
        {...props}
      >
        {tabs.map((tab) => (
          <Tab
            key={tab.value}
            label={tab.label}
            value={tab.value}
            icon={tab.icon}
            disabled={tab.disabled}
          />
        ))}
      </MuiTabs>

      {/* 탭 패널 (children이 있을 때) */}
      {children && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </Box>
  );
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      icon: PropTypes.node,
      disabled: PropTypes.bool,
    })
  ).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  variant: PropTypes.oneOf(['standard', 'scrollable', 'fullWidth']),
  indicatorColor: PropTypes.oneOf(['primary', 'secondary']),
  textColor: PropTypes.oneOf(['primary', 'secondary']),
  centered: PropTypes.bool,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  children: PropTypes.node,
};
