import { Card as MuiCard, CardContent, CardActions, CardHeader } from '@mui/material';
import PropTypes from 'prop-types';

/**
 * Card 컴포넌트
 * Material-UI Card를 래핑한 커스텀 카드
 *
 * @param {object} props
 * @param {string} props.title - 카드 제목
 * @param {React.ReactNode} props.avatar - 아바타 요소
 * @param {React.ReactNode} props.action - 헤더 액션 요소
 * @param {React.ReactNode} props.children - 카드 내용
 * @param {React.ReactNode} props.actions - 하단 액션 버튼들
 * @param {boolean} props.raised - 그림자 효과
 * @param {object} props.sx - Material-UI sx prop
 */
export default function Card({
  title,
  avatar,
  action,
  children,
  actions,
  raised = false,
  sx,
  ...props
}) {
  return (
    <MuiCard raised={raised} sx={sx} {...props}>
      {title && (
        <CardHeader
          avatar={avatar}
          action={action}
          title={title}
        />
      )}

      <CardContent>{children}</CardContent>

      {actions && <CardActions>{actions}</CardActions>}
    </MuiCard>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  avatar: PropTypes.node,
  action: PropTypes.node,
  children: PropTypes.node,
  actions: PropTypes.node,
  raised: PropTypes.bool,
  sx: PropTypes.object,
};
