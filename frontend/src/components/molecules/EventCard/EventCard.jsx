import { Box, Typography, Chip, Stack } from '@mui/material';
import { ChevronDown } from '@mui/icons-material';
import PropTypes from 'prop-types';
import Card from '../../atoms/Card';
import Button from '../../atoms/Button';
import Accordion from '../../atoms/Accordion';

/**
 * EventCard 컴포넌트
 * 대회 종목 정보를 표시하는 카드 컴포넌트
 * Accordion 형태로 접기/펼치기 가능
 *
 * @param {object} props
 * @param {object} props.event - 종목 정보
 * @param {boolean} props.showApplyButton - 신청 버튼 표시 여부
 * @param {boolean} props.showParticipantCount - 참가자 수 표시 여부
 * @param {function} props.onApply - 신청 버튼 클릭 핸들러
 * @param {function} props.onCancel - 신청 취소 버튼 클릭 핸들러
 * @param {boolean} props.isApplied - 신청 상태
 * @param {boolean} props.defaultExpanded - 기본 펼침 상태
 */
export default function EventCard({
  event,
  showApplyButton = true,
  showParticipantCount = true,
  onApply,
  onCancel,
  isApplied = false,
  defaultExpanded = false,
}) {
  const {
    id,
    name,
    type,
    divisionRange,
    maxParticipants,
    currentParticipants = 0,
    description,
    rules,
  } = event;

  // 종목 타입별 색상
  const getTypeColor = (eventType) => {
    switch (eventType) {
      case '단식':
        return 'primary';
      case '복식':
        return 'secondary';
      case '단체전':
        return 'success';
      default:
        return 'default';
    }
  };

  // 정원 초과 여부
  const isFull = currentParticipants >= maxParticipants;

  const summaryContent = (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', pr: 2 }}>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography variant="h6">{name}</Typography>
        <Chip
          label={type}
          color={getTypeColor(type)}
          size="small"
        />
        {divisionRange && (
          <Chip
            label={divisionRange}
            variant="outlined"
            size="small"
          />
        )}
      </Stack>

      {showParticipantCount && (
        <Chip
          label={`${currentParticipants}/${maxParticipants}명`}
          color={isFull ? 'error' : 'default'}
          size="small"
        />
      )}
    </Box>
  );

  return (
    <Card raised sx={{ mb: 2 }}>
      <Accordion
        summary={summaryContent}
        defaultExpanded={defaultExpanded}
        icon={<ChevronDown />}
      >
        <Stack spacing={2}>
          {/* 종목 설명 */}
          {description && (
            <Box>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                종목 설명
              </Typography>
              <Typography variant="body2">{description}</Typography>
            </Box>
          )}

          {/* 경기 규칙 */}
          {rules && (
            <Box>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                경기 규칙
              </Typography>
              <Typography variant="body2">{rules}</Typography>
            </Box>
          )}

          {/* 신청 버튼 */}
          {showApplyButton && (
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
              {isApplied ? (
                <>
                  <Chip label="신청 완료" color="success" />
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    onClick={() => onCancel && onCancel(id)}
                  >
                    신청 취소
                  </Button>
                </>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={() => onApply && onApply(id)}
                  disabled={isFull}
                >
                  {isFull ? '정원 마감' : '신청하기'}
                </Button>
              )}
            </Box>
          )}
        </Stack>
      </Accordion>
    </Card>
  );
}

EventCard.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['단식', '복식', '단체전']).isRequired,
    divisionRange: PropTypes.string,
    maxParticipants: PropTypes.number.isRequired,
    currentParticipants: PropTypes.number,
    description: PropTypes.string,
    rules: PropTypes.string,
  }).isRequired,
  showApplyButton: PropTypes.bool,
  showParticipantCount: PropTypes.bool,
  onApply: PropTypes.func,
  onCancel: PropTypes.func,
  isApplied: PropTypes.bool,
  defaultExpanded: PropTypes.bool,
};
