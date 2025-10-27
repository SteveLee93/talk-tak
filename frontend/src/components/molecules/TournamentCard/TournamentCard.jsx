import { Card, CardContent, CardActions, Typography, Chip, Box, IconButton } from '@mui/material';
import { CalendarToday, LocationOn, MoreVert } from '@mui/icons-material';
import PropTypes from 'prop-types';

/**
 * TournamentCard 컴포넌트
 * 대회 정보를 카드 형태로 표시
 *
 * @param {object} props
 * @param {object} props.tournament - 대회 정보
 * @param {string} props.tournament.name - 대회 이름
 * @param {string} props.tournament.startDate - 시작일 (YYYY-MM-DD)
 * @param {string} props.tournament.endDate - 종료일 (YYYY-MM-DD)
 * @param {string} props.tournament.venue - 장소
 * @param {string} props.tournament.status - 상태 (upcoming, ongoing, completed)
 * @param {function} props.onClick - 카드 클릭 핸들러
 * @param {function} props.onMenuClick - 메뉴 버튼 클릭 핸들러
 */
export default function TournamentCard({
  tournament,
  onClick,
  onMenuClick,
}) {
  const statusConfig = {
    upcoming: {
      label: '예정',
      color: 'default',
    },
    ongoing: {
      label: '진행중',
      color: 'primary',
    },
    completed: {
      label: '완료',
      color: 'success',
    },
  };

  const status = statusConfig[tournament.status] || statusConfig.upcoming;

  // 날짜 포맷팅
  const formatDate = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const startStr = `${start.getMonth() + 1}/${start.getDate()}`;
    const endStr = `${end.getMonth() + 1}/${end.getDate()}`;

    if (startDate === endDate) {
      return startStr;
    }
    return `${startStr} - ${endStr}`;
  };

  return (
    <Card
      sx={{
        cursor: onClick ? 'pointer' : 'default',
        '&:hover': onClick ? {
          boxShadow: 3,
          transform: 'translateY(-2px)',
          transition: 'all 0.2s',
        } : {},
      }}
      onClick={onClick}
    >
      <CardContent>
        {/* 상단: 제목 + 상태 + 메뉴 */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" component="div" gutterBottom>
              {tournament.name}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <Chip
              label={status.label}
              color={status.color}
              size="small"
            />
            {onMenuClick && (
              <IconButton
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  onMenuClick(tournament);
                }}
              >
                <MoreVert />
              </IconButton>
            )}
          </Box>
        </Box>

        {/* 날짜 */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <CalendarToday fontSize="small" color="action" />
          <Typography variant="body2" color="text.secondary">
            {formatDate(tournament.startDate, tournament.endDate)}
          </Typography>
        </Box>

        {/* 장소 */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <LocationOn fontSize="small" color="action" />
          <Typography variant="body2" color="text.secondary">
            {tournament.venue}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

TournamentCard.propTypes = {
  tournament: PropTypes.shape({
    name: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    venue: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['upcoming', 'ongoing', 'completed']).isRequired,
  }).isRequired,
  onClick: PropTypes.func,
  onMenuClick: PropTypes.func,
};
