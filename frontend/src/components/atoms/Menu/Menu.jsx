import { Menu as MuiMenu, MenuItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import PropTypes from 'prop-types';

/**
 * Menu 컴포넌트
 * Material-UI Menu를 래핑한 커스텀 드롭다운 메뉴
 *
 * @param {object} props
 * @param {boolean} props.open - 메뉴 열림 상태
 * @param {HTMLElement} props.anchorEl - 앵커 요소 (메뉴 위치 기준)
 * @param {function} props.onClose - 닫기 핸들러
 * @param {Array<{label: string, value: string, icon?: React.ReactNode, disabled?: boolean, divider?: boolean, onClick?: function}>} props.items - 메뉴 아이템 배열
 * @param {function} props.onItemClick - 아이템 클릭 핸들러
 * @param {'left'|'center'|'right'} props.anchorOrigin - 앵커 시작 위치
 * @param {'left'|'center'|'right'} props.transformOrigin - 변환 시작 위치
 */
export default function Menu({
  open,
  anchorEl,
  onClose,
  items = [],
  onItemClick,
  anchorOrigin = { vertical: 'bottom', horizontal: 'right' },
  transformOrigin = { vertical: 'top', horizontal: 'right' },
  ...props
}) {
  const handleItemClick = (item) => {
    if (item.onClick) {
      item.onClick(item);
    }
    if (onItemClick) {
      onItemClick(item);
    }
    onClose();
  };

  return (
    <MuiMenu
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
      {...props}
    >
      {items.map((item, index) => (
        <div key={item.value || index}>
          <MenuItem
            onClick={() => handleItemClick(item)}
            disabled={item.disabled}
          >
            {item.icon && (
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
            )}
            <ListItemText>{item.label}</ListItemText>
          </MenuItem>

          {/* 구분선 */}
          {item.divider && <Divider />}
        </div>
      ))}
    </MuiMenu>
  );
}

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
  anchorEl: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string,
      icon: PropTypes.node,
      disabled: PropTypes.bool,
      divider: PropTypes.bool,
      onClick: PropTypes.func,
    })
  ).isRequired,
  onItemClick: PropTypes.func,
  anchorOrigin: PropTypes.object,
  transformOrigin: PropTypes.object,
};
