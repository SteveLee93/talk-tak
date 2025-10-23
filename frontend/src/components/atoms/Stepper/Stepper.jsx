import { Stepper as MuiStepper, Step, StepLabel, StepContent } from '@mui/material';
import PropTypes from 'prop-types';

/**
 * Stepper 컴포넌트
 * Material-UI Stepper를 래핑한 커스텀 단계 표시기
 *
 * @param {object} props
 * @param {Array<{label: string, description?: string, icon?: React.ReactNode}>} props.steps - 단계 배열
 * @param {number} props.activeStep - 현재 활성 단계 (0부터 시작)
 * @param {'horizontal'|'vertical'} props.orientation - 방향
 * @param {boolean} props.alternativeLabel - 라벨을 아이콘 아래 표시 (horizontal일 때)
 * @param {boolean} props.nonLinear - 비선형 단계 (자유롭게 이동)
 * @param {React.ReactNode} props.children - StepContent 내용 (vertical일 때)
 */
export default function Stepper({
  steps = [],
  activeStep = 0,
  orientation = 'horizontal',
  alternativeLabel = false,
  nonLinear = false,
  children,
  ...props
}) {
  return (
    <MuiStepper
      activeStep={activeStep}
      orientation={orientation}
      alternativeLabel={alternativeLabel}
      nonLinear={nonLinear}
      {...props}
    >
      {steps.map((step, index) => (
        <Step key={index}>
          <StepLabel icon={step.icon}>
            {step.label}
            {step.description && orientation === 'horizontal' && (
              <span style={{ display: 'block', fontSize: '0.875rem', color: 'text.secondary' }}>
                {step.description}
              </span>
            )}
          </StepLabel>

          {/* Vertical Stepper의 경우 StepContent */}
          {orientation === 'vertical' && (
            <StepContent>
              {step.description}
              {children && children[index]}
            </StepContent>
          )}
        </Step>
      ))}
    </MuiStepper>
  );
}

Stepper.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      description: PropTypes.string,
      icon: PropTypes.node,
    })
  ).isRequired,
  activeStep: PropTypes.number,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  alternativeLabel: PropTypes.bool,
  nonLinear: PropTypes.bool,
  children: PropTypes.node,
};
