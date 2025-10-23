import { Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';

/**
 * Modal 컴포넌트
 * Material-UI Dialog를 래핑한 커스텀 모달
 *
 * @param {object} props
 * @param {boolean} props.open - 모달 열림 상태
 * @param {function} props.onClose - 닫기 핸들러
 * @param {string} props.title - 모달 제목
 * @param {React.ReactNode} props.children - 모달 내용
 * @param {React.ReactNode} props.actions - 액션 버튼들
 * @param {'xs'|'sm'|'md'|'lg'|'xl'} props.maxWidth - 최대 너비
 * @param {boolean} props.fullWidth - 전체 너비 사용
 * @param {boolean} props.fullScreen - 전체 화면
 * @param {boolean} props.showCloseButton - 닫기 버튼 표시
 */
export default function Modal({
  open,
  onClose,
  title,
  children,
  actions,
  maxWidth = 'sm',
  fullWidth = true,
  fullScreen = false,
  showCloseButton = true,
  ...props
}) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
      fullScreen={fullScreen}
      {...props}
    >
      {title && (
        <DialogTitle
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {title}
          {showCloseButton && (
            <IconButton
              onClick={onClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
              }}
            >
              <CloseIcon />
            </IconButton>
          )}
        </DialogTitle>
      )}

      <DialogContent dividers>{children}</DialogContent>

      {actions && <DialogActions>{actions}</DialogActions>}
    </Dialog>
  );
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
  actions: PropTypes.node,
  maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  fullWidth: PropTypes.bool,
  fullScreen: PropTypes.bool,
  showCloseButton: PropTypes.bool,
};
