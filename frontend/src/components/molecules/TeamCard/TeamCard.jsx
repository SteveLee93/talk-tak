import { Box, Typography, Stack, IconButton } from '@mui/material';
import { ExpandMore, Phone, Person } from '@mui/icons-material';
import PropTypes from 'prop-types';
import Card from '../../atoms/Card';
import Accordion from '../../atoms/Accordion';
import Checkbox from '../../atoms/Checkbox';
import Chip from '../../atoms/Chip';

/**
 * TeamCard 컴포넌트
 * 소속(팀) 정보 및 팀원 목록을 표시하는 카드 컴포넌트
 * Accordion 형태로 접기/펼치기 가능
 *
 * @param {object} props
 * @param {object} props.team - 팀 정보
 * @param {boolean} props.showPaymentCheckbox - 결제 체크박스 표시 여부
 * @param {function} props.onPaymentChange - 결제 체크 변경 핸들러
 * @param {function} props.onTeamClick - 팀 클릭 핸들러
 * @param {boolean} props.defaultExpanded - 기본 펼침 상태
 */
export default function TeamCard({
  team,
  showPaymentCheckbox = false,
  onPaymentChange,
  onTeamClick,
  defaultExpanded = false,
}) {
  const {
    id,
    affiliation,
    representative,
    phone,
    isIndividual = false,
    participants = [],
    paymentStatus = {},
  } = team;

  // 팀 전체 결제 완료 여부
  const allPaid = participants.every((p) => paymentStatus[p.id]);

  const summaryContent = (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', pr: 2 }}>
      <Stack direction="row" spacing={2} alignItems="center">
        {/* 개인/단체 구분 */}
        <Chip
          label={isIndividual ? '개인' : '단체'}
          color={isIndividual ? 'secondary' : 'primary'}
          size="small"
        />

        {/* 소속명 */}
        <Typography variant="subtitle1" fontWeight="bold">
          {affiliation}
        </Typography>

        {/* 대표자 정보 */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Person fontSize="small" color="action" />
          <Typography variant="body2" color="text.secondary">
            {representative}
          </Typography>
        </Box>

        {/* 연락처 */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Phone fontSize="small" color="action" />
          <Typography variant="body2" color="text.secondary">
            {phone}
          </Typography>
        </Box>
      </Stack>

      {/* 참가자 수 */}
      <Chip
        label={`${participants.length}명`}
        variant="outlined"
        size="small"
      />
    </Box>
  );

  const handlePaymentChange = (participantId, checked) => {
    if (onPaymentChange) {
      onPaymentChange(id, participantId, checked);
    }
  };

  return (
    <Card
      raised
      sx={{ mb: 2 }}
      onClick={() => onTeamClick && onTeamClick(id)}
    >
      <Accordion
        summary={summaryContent}
        defaultExpanded={defaultExpanded}
        icon={<ExpandMore />}
      >
        <Stack spacing={1}>
          {/* 팀원 목록 */}
          {participants.map((participant, index) => (
            <Box
              key={participant.id}
              sx={{
                display: 'grid',
                gridTemplateColumns: showPaymentCheckbox ? '40px 40px 1fr 100px 150px' : '40px 1fr 100px 150px',
                gap: 2,
                alignItems: 'center',
                py: 1,
                px: 2,
                bgcolor: index % 2 === 0 ? 'grey.50' : 'white',
                borderRadius: 1,
              }}
            >
              {/* 결제 체크박스 */}
              {showPaymentCheckbox && (
                <Checkbox
                  checked={paymentStatus[participant.id] || false}
                  onChange={(e) => handlePaymentChange(participant.id, e.target.checked)}
                  size="small"
                />
              )}

              {/* 순번 */}
              <Typography variant="body2" color="text.secondary" align="center">
                {index + 1}
              </Typography>

              {/* 이름 */}
              <Typography variant="body2">
                {participant.name}
              </Typography>

              {/* 부서/파트 */}
              <Chip
                label={participant.part || '-'}
                size="small"
                variant="outlined"
              />

              {/* 참가 종목 */}
              <Typography variant="caption" color="text.secondary">
                {participant.events?.join(', ') || '-'}
              </Typography>
            </Box>
          ))}

          {/* 전체 결제 상태 */}
          {showPaymentCheckbox && (
            <Box
              sx={{
                mt: 2,
                p: 1.5,
                bgcolor: allPaid ? 'success.light' : 'warning.light',
                borderRadius: 1,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography variant="body2" fontWeight="bold">
                결제 현황
              </Typography>
              <Chip
                label={allPaid ? '전체 완료' : `${Object.values(paymentStatus).filter(Boolean).length}/${participants.length} 완료`}
                color={allPaid ? 'success' : 'warning'}
                size="small"
              />
            </Box>
          )}
        </Stack>
      </Accordion>
    </Card>
  );
}

TeamCard.propTypes = {
  team: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    affiliation: PropTypes.string.isRequired,
    representative: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    isIndividual: PropTypes.bool,
    participants: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        name: PropTypes.string.isRequired,
        part: PropTypes.string,
        events: PropTypes.arrayOf(PropTypes.string),
      })
    ),
    paymentStatus: PropTypes.object,
  }).isRequired,
  showPaymentCheckbox: PropTypes.bool,
  onPaymentChange: PropTypes.func,
  onTeamClick: PropTypes.func,
  defaultExpanded: PropTypes.bool,
};
