import { Box, Typography, Stack } from '@mui/material';
import { Inbox } from '@mui/icons-material';
import PropTypes from 'prop-types';
import Button from '../../atoms/Button';

/**
 * EmptyState 컴포넌트
 * 데이터가 없을 때 표시하는 빈 상태 컴포넌트
 *
 * @param {object} props
 * @param {React.ReactNode} props.icon - 표시할 아이콘
 * @param {string} props.message - 메시지
 * @param {string} props.description - 상세 설명
 * @param {string} props.actionLabel - 액션 버튼 라벨
 * @param {function} props.onAction - 액션 버튼 클릭 핸들러
 * @param {number} props.minHeight - 최소 높이
 */
export default function EmptyState({
  icon,
  message = '데이터가 없습니다',
  description,
  actionLabel,
  onAction,
  minHeight = 300,
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight,
        p: 4,
      }}
    >
      <Stack spacing={2} alignItems="center">
        {/* 아이콘 */}
        <Box
          sx={{
            color: 'text.secondary',
            opacity: 0.3,
          }}
        >
          {icon || <Inbox sx={{ fontSize: 80 }} />}
        </Box>

        {/* 메시지 */}
        <Typography
          variant="h6"
          color="text.secondary"
          align="center"
        >
          {message}
        </Typography>

        {/* 상세 설명 */}
        {description && (
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{ maxWidth: 400 }}
          >
            {description}
          </Typography>
        )}

        {/* 액션 버튼 */}
        {actionLabel && onAction && (
          <Button
            variant="contained"
            color="primary"
            onClick={onAction}
            sx={{ mt: 2 }}
          >
            {actionLabel}
          </Button>
        )}
      </Stack>
    </Box>
  );
}

EmptyState.propTypes = {
  icon: PropTypes.node,
  message: PropTypes.string,
  description: PropTypes.string,
  actionLabel: PropTypes.string,
  onAction: PropTypes.func,
  minHeight: PropTypes.number,
};
