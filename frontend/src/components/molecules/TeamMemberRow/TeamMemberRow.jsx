import { Box, IconButton, Stack } from '@mui/material';
import { DragIndicator, Delete } from '@mui/icons-material';
import PropTypes from 'prop-types';
import Input from '../../atoms/Input';
import Select from '../../atoms/Select';
import Checkbox from '../../atoms/Checkbox';

/**
 * TeamMemberRow 컴포넌트
 * 팀원 정보를 입력하는 행 컴포넌트
 *
 * @param {object} props
 * @param {object} props.member - 팀원 정보 객체
 * @param {boolean} props.showCheckbox - 체크박스 표시 여부
 * @param {boolean} props.showDragHandle - 드래그 핸들 표시 여부
 * @param {function} props.onMemberChange - 팀원 정보 변경 핸들러
 * @param {function} props.onDelete - 삭제 핸들러
 * @param {function} props.onCheckChange - 체크박스 변경 핸들러
 * @param {Array} props.partOptions - 부서/파트 옵션 배열
 * @param {boolean} props.disabled - 비활성화 상태
 */
export default function TeamMemberRow({
  member,
  showCheckbox = false,
  showDragHandle = false,
  onMemberChange,
  onDelete,
  onCheckChange,
  partOptions = [
    { value: '남자부', label: '남자부' },
    { value: '여자부', label: '여자부' },
    { value: '혼합부', label: '혼합부' },
  ],
  disabled = false,
}) {
  const handleFieldChange = (field, value) => {
    if (onMemberChange) {
      onMemberChange({
        ...member,
        [field]: value,
      });
    }
  };

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: showCheckbox
          ? '40px 40px 1fr 120px 40px'
          : showDragHandle
          ? '40px 1fr 120px 40px'
          : '1fr 120px 40px',
        gap: 1,
        alignItems: 'center',
        py: 0.5,
      }}
    >
      {/* 체크박스 (선택적) */}
      {showCheckbox && (
        <Checkbox
          checked={member.checked || false}
          onChange={(e) => onCheckChange && onCheckChange(member.id, e.target.checked)}
          disabled={disabled}
        />
      )}

      {/* 드래그 핸들 (선택적) */}
      {showDragHandle && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'grab',
            color: 'text.secondary',
            '&:active': {
              cursor: 'grabbing',
            },
          }}
        >
          <DragIndicator fontSize="small" />
        </Box>
      )}

      {/* 이름 입력 */}
      <Input
        placeholder="이름"
        value={member.name || ''}
        onChange={(e) => handleFieldChange('name', e.target.value)}
        disabled={disabled}
        size="small"
        fullWidth
      />

      {/* 부서/파트 선택 */}
      <Select
        value={member.part || ''}
        onChange={(e) => handleFieldChange('part', e.target.value)}
        options={partOptions}
        placeholder="부서"
        disabled={disabled}
        size="small"
        fullWidth
      />

      {/* 삭제 버튼 */}
      <IconButton
        onClick={() => onDelete && onDelete(member.id)}
        disabled={disabled}
        size="small"
        color="error"
      >
        <Delete fontSize="small" />
      </IconButton>
    </Box>
  );
}

TeamMemberRow.propTypes = {
  member: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string,
    part: PropTypes.string,
    checked: PropTypes.bool,
  }).isRequired,
  showCheckbox: PropTypes.bool,
  showDragHandle: PropTypes.bool,
  onMemberChange: PropTypes.func,
  onDelete: PropTypes.func,
  onCheckChange: PropTypes.func,
  partOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  disabled: PropTypes.bool,
};
