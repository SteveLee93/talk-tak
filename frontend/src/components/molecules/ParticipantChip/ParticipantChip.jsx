import { Box, Typography } from '@mui/material';
import { DragIndicator, Close } from '@mui/icons-material';
import PropTypes from 'prop-types';
import Chip from '../../atoms/Chip';
import IconButton from '../../atoms/IconButton';

/**
 * ParticipantChip 컴포넌트
 * 참가자 정보를 표시하는 칩 (드래그 가능)
 * 조 편성 시 사용
 *
 * @param {object} props
 * @param {object} props.participant - 참가자 정보
 * @param {boolean} props.draggable - 드래그 가능 여부
 * @param {boolean} props.hasWarning - 경고 상태 (소속 중복 등)
 * @param {function} props.onDragStart - 드래그 시작 핸들러
 * @param {function} props.onDragEnd - 드래그 종료 핸들러
 * @param {function} props.onRemove - 제거 핸들러
 * @param {boolean} props.showRemoveButton - 제거 버튼 표시 여부
 */
export default function ParticipantChip({
  participant,
  draggable = true,
  hasWarning = false,
  onDragStart,
  onDragEnd,
  onRemove,
  showRemoveButton = false,
}) {
  const {
    id,
    name,
    affiliation,
  } = participant;

  const handleDragStart = (e) => {
    if (draggable) {
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('participant', JSON.stringify(participant));
      if (onDragStart) {
        onDragStart(participant);
      }
    }
  };

  const handleDragEnd = (e) => {
    if (onDragEnd) {
      onDragEnd(participant);
    }
  };

  return (
    <Box
      draggable={draggable}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 0.5,
        p: 1,
        pr: showRemoveButton ? 0.5 : 1,
        bgcolor: hasWarning ? 'warning.light' : 'grey.100',
        border: 1,
        borderColor: hasWarning ? 'warning.main' : 'grey.300',
        borderRadius: 2,
        cursor: draggable ? 'grab' : 'default',
        transition: 'all 0.2s',
        '&:hover': draggable ? {
          bgcolor: hasWarning ? 'warning.main' : 'grey.200',
          boxShadow: 2,
        } : {},
        '&:active': draggable ? {
          cursor: 'grabbing',
          opacity: 0.7,
        } : {},
      }}
    >
      {/* 드래그 핸들 */}
      {draggable && (
        <DragIndicator
          fontSize="small"
          sx={{ color: 'text.secondary' }}
        />
      )}

      {/* 참가자 이름 */}
      <Typography
        variant="body2"
        fontWeight="medium"
        sx={{ color: hasWarning ? 'warning.dark' : 'text.primary' }}
      >
        {name}
      </Typography>

      {/* 소속 */}
      <Chip
        label={affiliation}
        size="small"
        variant="outlined"
        color={hasWarning ? 'warning' : 'default'}
        sx={{
          height: 20,
          '& .MuiChip-label': {
            px: 1,
            fontSize: '0.75rem',
          },
        }}
      />

      {/* 제거 버튼 */}
      {showRemoveButton && (
        <IconButton
          size="small"
          onClick={() => onRemove && onRemove(id)}
          sx={{
            ml: 0.5,
            p: 0.25,
            '&:hover': {
              bgcolor: 'error.light',
            },
          }}
        >
          <Close fontSize="small" />
        </IconButton>
      )}
    </Box>
  );
}

ParticipantChip.propTypes = {
  participant: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    affiliation: PropTypes.string.isRequired,
  }).isRequired,
  draggable: PropTypes.bool,
  hasWarning: PropTypes.bool,
  onDragStart: PropTypes.func,
  onDragEnd: PropTypes.func,
  onRemove: PropTypes.func,
  showRemoveButton: PropTypes.bool,
};
