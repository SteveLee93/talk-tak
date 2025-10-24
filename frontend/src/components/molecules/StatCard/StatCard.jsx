import { Box, Typography, Stack } from '@mui/material';
import PropTypes from 'prop-types';
import Card from '../../atoms/Card';

/**
 * StatCard 컴포넌트
 * 통계 정보를 표시하는 작은 카드 컴포넌트
 *
 * @param {object} props
 * @param {string} props.label - 통계 라벨
 * @param {number|string} props.value - 통계 값
 * @param {React.ReactNode} props.icon - 아이콘
 * @param {string} props.color - 카드 테마 색상
 * @param {string} props.trend - 증감 추세 (up, down, neutral)
 * @param {string} props.trendValue - 증감 수치
 * @param {function} props.onClick - 클릭 핸들러
 */
export default function StatCard({
  label,
  value,
  icon,
  color = 'primary',
  trend,
  trendValue,
  onClick,
}) {
  // 색상 매핑
  const getColorScheme = (themeColor) => {
    const schemes = {
      primary: {
        bg: 'primary.light',
        text: 'primary.main',
        iconBg: 'primary.main',
      },
      secondary: {
        bg: 'secondary.light',
        text: 'secondary.main',
        iconBg: 'secondary.main',
      },
      success: {
        bg: 'success.light',
        text: 'success.main',
        iconBg: 'success.main',
      },
      error: {
        bg: 'error.light',
        text: 'error.main',
        iconBg: 'error.main',
      },
      warning: {
        bg: 'warning.light',
        text: 'warning.main',
        iconBg: 'warning.main',
      },
      info: {
        bg: 'info.light',
        text: 'info.main',
        iconBg: 'info.main',
      },
    };
    return schemes[themeColor] || schemes.primary;
  };

  const colorScheme = getColorScheme(color);

  // 증감 추세 색상
  const getTrendColor = (trendType) => {
    switch (trendType) {
      case 'up':
        return 'success.main';
      case 'down':
        return 'error.main';
      default:
        return 'text.secondary';
    }
  };

  return (
    <Card
      raised
      onClick={onClick}
      sx={{
        cursor: onClick ? 'pointer' : 'default',
        transition: 'all 0.3s',
        '&:hover': onClick ? {
          transform: 'translateY(-4px)',
          boxShadow: 4,
        } : {},
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center">
        {/* 아이콘 영역 */}
        {icon && (
          <Box
            sx={{
              width: 56,
              height: 56,
              borderRadius: 2,
              bgcolor: colorScheme.iconBg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
            }}
          >
            {icon}
          </Box>
        )}

        {/* 통계 정보 영역 */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {label}
          </Typography>
          <Typography variant="h4" color={colorScheme.text} fontWeight="bold">
            {value}
          </Typography>

          {/* 증감 추세 */}
          {trend && trendValue && (
            <Typography
              variant="caption"
              color={getTrendColor(trend)}
              sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}
            >
              {trend === 'up' && '↑'}
              {trend === 'down' && '↓'}
              {trend === 'neutral' && '→'}
              {' '}
              {trendValue}
            </Typography>
          )}
        </Box>
      </Stack>
    </Card>
  );
}

StatCard.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  icon: PropTypes.node,
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'warning', 'info']),
  trend: PropTypes.oneOf(['up', 'down', 'neutral']),
  trendValue: PropTypes.string,
  onClick: PropTypes.func,
};
