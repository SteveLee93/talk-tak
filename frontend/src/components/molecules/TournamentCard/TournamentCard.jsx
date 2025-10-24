import { Box, Typography, Stack, IconButton, Menu, MenuItem } from '@mui/material';
import { MoreVert, CalendarToday, LocationOn } from '@mui/icons-material';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '../../atoms/Card';
import Chip from '../../atoms/Chip';
import Badge from '../../atoms/Badge';

/**
 * TournamentCard 컴포넌트
 * 대회 정보를 표시하는 카드 컴포넌트
 *
 * @param {object} props
 * @param {object} props.tournament - 대회 정보
 * @param {function} props.onView - 상세보기 클릭 핸들러
 * @param {function} props.onEdit - 수정 클릭 핸들러
 * @param {function} props.onDelete - 삭제 클릭 핸들러
 * @param {function} props.onManageParticipants - 참가자 관리 클릭 핸들러
 * @param {function} props.onManageSchedule - 일정 관리 클릭 핸들러
 */
export default function TournamentCard({
  tournament,
  onView,
  onEdit,
  onDelete,
  onManageParticipants,
  onManageSchedule,
}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const {
    id,
    name,
    date,
    city,
    location,
    participantCount = 0,
    status = '예정', // 예정, 진행중, 완료
  } = tournament;

  // 지역별 색상
  const cityColors = {
    서울: { bg: 'rgb(219, 234, 254)', text: 'rgb(29, 78, 216)', border: 'rgb(147, 197, 253)' },
    경기: { bg: 'rgb(254, 226, 226)', text: 'rgb(185, 28, 28)', border: 'rgb(252, 165, 165)' },
    인천: { bg: 'rgb(209, 250, 229)', text: 'rgb(5, 150, 105)', border: 'rgb(110, 231, 183)' },
    부산: { bg: 'rgb(254, 243, 199)', text: 'rgb(180, 83, 9)', border: 'rgb(253, 224, 71)' },
  };

  const cityColor = cityColors[city] || cityColors['서울'];

  // 상태별 색상
  const getStatusColor = (statusValue) => {
    switch (statusValue) {
      case '예정':
        return 'primary';
      case '진행중':
        return 'success';
      case '완료':
        return 'default';
      default:
        return 'default';
    }
  };

  const handleMenuOpen = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuAction = (action) => {
    handleMenuClose();
    if (action) action(id);
  };

  return (
    <Card
      raised
      onClick={() => onView && onView(id)}
      sx={{
        cursor: 'pointer',
        transition: 'all 0.3s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 4,
        },
        position: 'relative',
      }}
    >
      {/* 날짜 배지 */}
      <Box
        sx={{
          position: 'absolute',
          top: 8,
          left: 8,
          zIndex: 1,
        }}
      >
        <Chip
          label={date}
          icon={<CalendarToday fontSize="small" />}
          size="small"
          color="primary"
        />
      </Box>

      {/* 더보기 메뉴 */}
      <Box
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          zIndex: 1,
        }}
      >
        <IconButton
          size="small"
          onClick={handleMenuOpen}
        >
          <MoreVert />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={() => handleMenuAction(onView)}>상세보기</MenuItem>
          <MenuItem onClick={() => handleMenuAction(onEdit)}>수정</MenuItem>
          <MenuItem onClick={() => handleMenuAction(onManageParticipants)}>참가자 관리</MenuItem>
          <MenuItem onClick={() => handleMenuAction(onManageSchedule)}>일정 관리</MenuItem>
          <MenuItem onClick={() => handleMenuAction(onDelete)}>삭제</MenuItem>
        </Menu>
      </Box>

      {/* 카드 내용 */}
      <Stack spacing={2} sx={{ mt: 4 }}>
        {/* 대회명 */}
        <Typography variant="h6" fontWeight="bold">
          {name}
        </Typography>

        {/* 지역 및 장소 */}
        <Stack direction="row" spacing={1} alignItems="center">
          <Chip
            label={city}
            size="small"
            sx={{
              bgcolor: cityColor.bg,
              color: cityColor.text,
              borderColor: cityColor.border,
              border: '1px solid',
            }}
          />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <LocationOn fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              {location}
            </Typography>
          </Box>
        </Stack>

        {/* 하단 정보 */}
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Chip
            label={status}
            color={getStatusColor(status)}
            size="small"
          />

          <Badge
            badgeContent={participantCount}
            color="primary"
            max={999}
          >
            <Typography variant="body2" color="text.secondary">
              참가자
            </Typography>
          </Badge>
        </Stack>
      </Stack>
    </Card>
  );
}

TournamentCard.propTypes = {
  tournament: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    participantCount: PropTypes.number,
    status: PropTypes.oneOf(['예정', '진행중', '완료']),
  }).isRequired,
  onView: PropTypes.func,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  onManageParticipants: PropTypes.func,
  onManageSchedule: PropTypes.func,
};
