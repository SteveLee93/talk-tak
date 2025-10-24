import { Box, Stack } from '@mui/material';
import { FilterList } from '@mui/icons-material';
import PropTypes from 'prop-types';
import Select from '../../atoms/Select';
import Checkbox from '../../atoms/Checkbox';
import Chip from '../../atoms/Chip';

/**
 * FilterBar 컴포넌트
 * 다양한 필터 옵션을 제공하는 필터 바
 *
 * @param {object} props
 * @param {Array} props.filters - 필터 설정 배열
 * @param {object} props.selectedFilters - 선택된 필터 값 객체
 * @param {function} props.onFilterChange - 필터 변경 핸들러
 * @param {boolean} props.showIcon - 필터 아이콘 표시 여부
 */
export default function FilterBar({
  filters = [],
  selectedFilters = {},
  onFilterChange,
  showIcon = true,
}) {
  const handleSelectChange = (filterKey, value) => {
    if (onFilterChange) {
      onFilterChange({
        ...selectedFilters,
        [filterKey]: value,
      });
    }
  };

  const handleCheckboxChange = (filterKey, checked) => {
    if (onFilterChange) {
      onFilterChange({
        ...selectedFilters,
        [filterKey]: checked,
      });
    }
  };

  const handleChipClick = (filterKey, value) => {
    // 멀티 선택 칩 필터
    const currentValues = selectedFilters[filterKey] || [];
    const newValues = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value];

    if (onFilterChange) {
      onFilterChange({
        ...selectedFilters,
        [filterKey]: newValues,
      });
    }
  };

  const renderFilter = (filter) => {
    const { key, type, label, options, placeholder } = filter;

    switch (type) {
      case 'select':
        return (
          <Select
            key={key}
            label={label}
            value={selectedFilters[key] || ''}
            onChange={(e) => handleSelectChange(key, e.target.value)}
            options={options}
            placeholder={placeholder}
            size="small"
            sx={{ minWidth: 200 }}
          />
        );

      case 'checkbox':
        return (
          <Checkbox
            key={key}
            label={label}
            checked={selectedFilters[key] || false}
            onChange={(e) => handleCheckboxChange(key, e.target.checked)}
          />
        );

      case 'chips':
        return (
          <Stack key={key} direction="row" spacing={1} flexWrap="wrap">
            {options.map((option) => {
              const isSelected = (selectedFilters[key] || []).includes(option.value);
              return (
                <Chip
                  key={option.value}
                  label={option.label}
                  variant={isSelected ? 'filled' : 'outlined'}
                  color={isSelected ? 'primary' : 'default'}
                  onClick={() => handleChipClick(key, option.value)}
                  clickable
                  size="small"
                />
              );
            })}
          </Stack>
        );

      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        p: 2,
        bgcolor: 'background.paper',
        borderRadius: 1,
        boxShadow: 1,
      }}
    >
      {showIcon && (
        <FilterList color="action" />
      )}

      <Stack
        direction="row"
        spacing={2}
        flexWrap="wrap"
        sx={{ flex: 1, alignItems: 'center' }}
      >
        {filters.map(renderFilter)}
      </Stack>
    </Box>
  );
}

FilterBar.propTypes = {
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['select', 'checkbox', 'chips']).isRequired,
      label: PropTypes.string,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
          label: PropTypes.string.isRequired,
        })
      ),
      placeholder: PropTypes.string,
    })
  ).isRequired,
  selectedFilters: PropTypes.object,
  onFilterChange: PropTypes.func,
  showIcon: PropTypes.bool,
};
