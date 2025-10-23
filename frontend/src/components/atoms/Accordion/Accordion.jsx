import {
  Accordion as MuiAccordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';

/**
 * Accordion 컴포넌트
 * Material-UI Accordion를 래핑한 커스텀 아코디언
 *
 * @param {object} props
 * @param {string} props.title - 아코디언 제목
 * @param {React.ReactNode} props.children - 펼쳐지는 내용
 * @param {boolean} props.expanded - 펼침 상태 (제어 컴포넌트)
 * @param {boolean} props.defaultExpanded - 기본 펼침 상태
 * @param {function} props.onChange - 상태 변경 핸들러
 * @param {boolean} props.disabled - 비활성화 상태
 * @param {React.ReactNode} props.icon - 커스텀 아이콘 (기본: ExpandMoreIcon)
 * @param {React.ReactNode} props.summary - 커스텀 요약 내용 (title 대신)
 */
export default function Accordion({
  title,
  children,
  expanded,
  defaultExpanded = false,
  onChange,
  disabled = false,
  icon,
  summary,
  ...props
}) {
  return (
    <MuiAccordion
      expanded={expanded}
      defaultExpanded={defaultExpanded}
      onChange={onChange}
      disabled={disabled}
      {...props}
    >
      <AccordionSummary
        expandIcon={icon || <ExpandMoreIcon />}
      >
        {summary || <Typography>{title}</Typography>}
      </AccordionSummary>

      <AccordionDetails>
        {children}
      </AccordionDetails>
    </MuiAccordion>
  );
}

Accordion.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  expanded: PropTypes.bool,
  defaultExpanded: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  summary: PropTypes.node,
};
