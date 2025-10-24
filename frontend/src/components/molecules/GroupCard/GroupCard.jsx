import { Box, Typography, Stack, Alert } from '@mui/material';
import { Warning, Delete } from '@mui/icons-material';
import PropTypes from 'prop-types';
import Card from '../../atoms/Card';
import Chip from '../../atoms/Chip';
import IconButton from '../../atoms/IconButton';

/**
 * GroupCard 컴포넌트
 * 조 편성 카드 - 드래그 앤 드롭으로 참가자 할당
 *
 * @param {object} props
 * @param {object} props.group - 조 정보
 * @param {function} props.onDrop - 드롭 핸들러
 * @param {function} props.onRemoveParticipant - 참가자 제거 핸들러
 * @param {boolean} props.isDragOver - 드래그 오버 상태
 * @param {Array} props.warnings - 경고 메시지 배열 (소속 중복 등)
 */
export default function GroupCard({
  group,
  onDrop,
  onRemoveParticipant,
  isDragOver = false,
  warnings = [],
}) {
  const {
    id,
    name,
    participants = [],
    maxParticipants,
  } = group;

  const isFull = participants.length >= maxParticipants;
  const hasWarnings = warnings.length > 0;

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (onDrop) {
      const participantData = e.dataTransfer.getData('participant');
      if (participantData) {
        const participant = JSON.parse(participantData);
        onDrop(id, participant);
      }
    }
  };

  return (
    <Card
      raised
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      sx={{
        minHeight: 200,
        border: isDragOver ? '2px dashed' : '2px solid',
        borderColor: isDragOver
          ? 'primary.main'
          : hasWarnings
          ? 'warning.main'
          : isFull
          ? 'error.main'
          : 'grey.300',
        bgcolor: isDragOver
          ? 'primary.light'
          : hasWarnings
          ? 'warning.light'
          : isFull
          ? 'error.light'
          : 'background.paper',
        transition: 'all 0.3s',
        opacity: isDragOver ? 0.8 : 1,
      }}
    >
      {/* 조 헤더 */}
      <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" fontWeight="bold">
            {name}
          </Typography>
          <Chip
            label={`${participants.length}/${maxParticipants}`}
            color={isFull ? 'error' : 'default'}
            size="small"
          />
        </Stack>
      </Box>

      {/* 경고 메시지 */}
      {hasWarnings && (
        <Box sx={{ p: 2 }}>
          {warnings.map((warning, index) => (
            <Alert
              key={index}
              severity="warning"
              icon={<Warning />}
              sx={{ mb: index < warnings.length - 1 ? 1 : 0 }}
            >
              {warning}
            </Alert>
          ))}
        </Box>
      )}

      {/* 참가자 목록 */}
      <Box sx={{ p: 2 }}>
        {participants.length === 0 ? (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 100,
              color: 'text.secondary',
            }}
          >
            <Typography variant="body2">
              참가자를 드래그하여 추가하세요
            </Typography>
          </Box>
        ) : (
          <Stack spacing={1}>
            {participants.map((participant) => (
              <Box
                key={participant.id}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  p: 1,
                  bgcolor: 'grey.100',
                  borderRadius: 1,
                  '&:hover': {
                    bgcolor: 'grey.200',
                  },
                }}
              >
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography variant="body2" fontWeight="medium">
                    {participant.name}
                  </Typography>
                  <Chip
                    label={participant.affiliation}
                    size="small"
                    variant="outlined"
                  />
                </Stack>

                <IconButton
                  size="small"
                  onClick={() => onRemoveParticipant && onRemoveParticipant(id, participant.id)}
                >
                  <Delete fontSize="small" />
                </IconButton>
              </Box>
            ))}
          </Stack>
        )}
      </Box>
    </Card>
  );
}

GroupCard.propTypes = {
  group: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    participants: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        name: PropTypes.string.isRequired,
        affiliation: PropTypes.string.isRequired,
      })
    ),
    maxParticipants: PropTypes.number.isRequired,
  }).isRequired,
  onDrop: PropTypes.func,
  onRemoveParticipant: PropTypes.func,
  isDragOver: PropTypes.bool,
  warnings: PropTypes.arrayOf(PropTypes.string),
};
