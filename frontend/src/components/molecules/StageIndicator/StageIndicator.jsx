import { Stack } from '@mui/material';
import PropTypes from 'prop-types';
import Chip from '../../atoms/Chip';

/**
 * StageIndicator 컴포넌트
 * 다단계 프로세스의 진행 상황을 표시하는 컴포넌트
 *
 * @param {object} props
 * @param {Array} props.stages - 단계 배열
 * @param {number} props.currentStage - 현재 단계 (0부터 시작)
 */
export default function StageIndicator({
  stages = [],
  currentStage = 0,
}) {
  return (
    <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
      {stages.map((stage, index) => {
        const isActive = index === currentStage;
        const isCompleted = index < currentStage;

        return (
          <Chip
            key={index}
            label={`${index + 1}. ${stage}`}
            color={isActive ? 'primary' : isCompleted ? 'success' : 'default'}
            variant={isActive ? 'filled' : 'outlined'}
            size="medium"
          />
        );
      })}
    </Stack>
  );
}

StageIndicator.propTypes = {
  stages: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentStage: PropTypes.number,
};
