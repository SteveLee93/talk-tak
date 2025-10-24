import IconButton from './IconButton';
import {
  Delete, Edit, Add, Favorite, Share, Menu, Search, Close,
  Settings, Info, MoreVert, ArrowBack, ArrowForward,
  Visibility, VisibilityOff, Download, Upload,
} from '@mui/icons-material';

export default {
  title: 'Atoms/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'inherit', 'primary', 'secondary', 'error', 'success', 'warning', 'info'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export const Default = {
  render: () => (
    <IconButton>
      <Favorite />
    </IconButton>
  ),
};

export const AllColors = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <IconButton color="default"><Favorite /></IconButton>
      <IconButton color="primary"><Favorite /></IconButton>
      <IconButton color="secondary"><Favorite /></IconButton>
      <IconButton color="error"><Delete /></IconButton>
      <IconButton color="success"><Add /></IconButton>
      <IconButton color="warning"><Info /></IconButton>
      <IconButton color="info"><Info /></IconButton>
    </div>
  ),
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <IconButton size="small"><Favorite /></IconButton>
      <IconButton size="medium"><Favorite /></IconButton>
      <IconButton size="large"><Favorite /></IconButton>
    </div>
  ),
};

export const Disabled = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <IconButton disabled><Favorite /></IconButton>
      <IconButton disabled color="primary"><Favorite /></IconButton>
      <IconButton disabled color="error"><Delete /></IconButton>
    </div>
  ),
};

export const CommonActions = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <IconButton color="primary"><Add /></IconButton>
      <IconButton color="primary"><Edit /></IconButton>
      <IconButton color="error"><Delete /></IconButton>
      <IconButton><Share /></IconButton>
      <IconButton><MoreVert /></IconButton>
    </div>
  ),
};

export const Interactive = {
  render: () => {
    const [liked, setLiked] = React.useState(false);

    return (
      <IconButton
        color={liked ? 'error' : 'default'}
        onClick={() => setLiked(!liked)}
      >
        <Favorite />
      </IconButton>
    );
  },
};

export const AppBar = {
  render: () => (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '8px 16px',
      backgroundColor: '#1976d2',
      color: 'white',
    }}>
      <IconButton edge="start" color="inherit">
        <Menu />
      </IconButton>
      <h3 style={{ margin: 0 }}>탁구 대회</h3>
      <div>
        <IconButton color="inherit">
          <Search />
        </IconButton>
        <IconButton color="inherit">
          <Settings />
        </IconButton>
      </div>
    </div>
  ),
};

export const Navigation = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <IconButton><ArrowBack /></IconButton>
      <span>페이지 1 / 10</span>
      <IconButton><ArrowForward /></IconButton>
    </div>
  ),
};

export const CardActions = {
  render: () => (
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '16px',
      maxWidth: '400px',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h4 style={{ margin: '0 0 8px 0' }}>2024 서울시 탁구 선수권</h4>
          <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>2024.03.15</p>
        </div>
        <div>
          <IconButton size="small">
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
        <IconButton size="small" color="primary">
          <Info />
        </IconButton>
        <IconButton size="small">
          <Edit />
        </IconButton>
        <IconButton size="small" color="error">
          <Delete />
        </IconButton>
        <IconButton size="small">
          <Share />
        </IconButton>
      </div>
    </div>
  ),
};

export const PasswordToggle = {
  render: () => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="비밀번호"
          style={{ padding: '8px', flex: 1 }}
        />
        <IconButton
          onClick={() => setShowPassword(!showPassword)}
          edge="end"
        >
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </div>
    );
  },
};

export const FileActions = {
  render: () => (
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      <span>참가자_명단.xlsx</span>
      <div style={{ display: 'flex', gap: '8px' }}>
        <IconButton size="small" color="primary">
          <Download />
        </IconButton>
        <IconButton size="small" color="error">
          <Delete />
        </IconButton>
      </div>
    </div>
  ),
};

export const SearchBox = {
  render: () => (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      border: '1px solid #e0e0e0',
      borderRadius: '24px',
      padding: '4px 8px',
      maxWidth: '300px',
    }}>
      <IconButton size="small" edge="start">
        <Search />
      </IconButton>
      <input
        type="text"
        placeholder="검색..."
        style={{
          border: 'none',
          outline: 'none',
          flex: 1,
          padding: '8px',
        }}
      />
      <IconButton size="small" edge="end">
        <Close />
      </IconButton>
    </div>
  ),
};

export const TournamentActions = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', padding: '8px' }}>
      <IconButton color="primary" title="새 대회 만들기">
        <Add />
      </IconButton>
      <IconButton title="검색">
        <Search />
      </IconButton>
      <IconButton title="설정">
        <Settings />
      </IconButton>
      <IconButton title="업로드">
        <Upload />
      </IconButton>
      <IconButton title="다운로드">
        <Download />
      </IconButton>
    </div>
  ),
};

export const ListItemActions = {
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      {['김철수', '이영희', '박민수'].map((name, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 16px',
            borderBottom: '1px solid #e0e0e0',
          }}
        >
          <span>{name}</span>
          <div>
            <IconButton size="small">
              <Edit />
            </IconButton>
            <IconButton size="small" color="error">
              <Delete />
            </IconButton>
          </div>
        </div>
      ))}
    </div>
  ),
};
