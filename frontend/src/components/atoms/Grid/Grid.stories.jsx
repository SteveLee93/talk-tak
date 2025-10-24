import Grid from './Grid';
import Card from '../Card';

export default {
  title: 'Atoms/Grid',
  component: Grid,
  tags: ['autodocs'],
  argTypes: {
    spacing: {
      control: { type: 'range', min: 0, max: 10, step: 1 },
    },
    direction: {
      control: 'select',
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
    },
    alignItems: {
      control: 'select',
      options: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
    },
    justifyContent: {
      control: 'select',
      options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
    },
  },
};

const Item = ({ children }) => (
  <div style={{
    padding: '16px',
    backgroundColor: '#e3f2fd',
    border: '1px solid #1976d2',
    textAlign: 'center',
  }}>
    {children}
  </div>
);

export const Default = {
  render: () => (
    <Grid container spacing={2}>
      <Grid item xs={12}><Item>xs=12</Item></Grid>
      <Grid item xs={6}><Item>xs=6</Item></Grid>
      <Grid item xs={6}><Item>xs=6</Item></Grid>
      <Grid item xs={4}><Item>xs=4</Item></Grid>
      <Grid item xs={4}><Item>xs=4</Item></Grid>
      <Grid item xs={4}><Item>xs=4</Item></Grid>
    </Grid>
  ),
};

export const EqualColumns = {
  render: () => (
    <Grid container spacing={2}>
      <Grid item xs={3}><Item>1/4</Item></Grid>
      <Grid item xs={3}><Item>1/4</Item></Grid>
      <Grid item xs={3}><Item>1/4</Item></Grid>
      <Grid item xs={3}><Item>1/4</Item></Grid>
    </Grid>
  ),
};

export const TwoColumns = {
  render: () => (
    <Grid container spacing={2}>
      <Grid item xs={6}><Item>50%</Item></Grid>
      <Grid item xs={6}><Item>50%</Item></Grid>
    </Grid>
  ),
};

export const ThreeColumns = {
  render: () => (
    <Grid container spacing={2}>
      <Grid item xs={4}><Item>33.3%</Item></Grid>
      <Grid item xs={4}><Item>33.3%</Item></Grid>
      <Grid item xs={4}><Item>33.3%</Item></Grid>
    </Grid>
  ),
};

export const Responsive = {
  render: () => (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Item>Responsive</Item>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Item>Responsive</Item>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Item>Responsive</Item>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Item>Responsive</Item>
      </Grid>
    </Grid>
  ),
};

export const VariableSpacing = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h4>Spacing: 1</h4>
        <Grid container spacing={1}>
          <Grid item xs={4}><Item>Item</Item></Grid>
          <Grid item xs={4}><Item>Item</Item></Grid>
          <Grid item xs={4}><Item>Item</Item></Grid>
        </Grid>
      </div>
      <div>
        <h4>Spacing: 2</h4>
        <Grid container spacing={2}>
          <Grid item xs={4}><Item>Item</Item></Grid>
          <Grid item xs={4}><Item>Item</Item></Grid>
          <Grid item xs={4}><Item>Item</Item></Grid>
        </Grid>
      </div>
      <div>
        <h4>Spacing: 4</h4>
        <Grid container spacing={4}>
          <Grid item xs={4}><Item>Item</Item></Grid>
          <Grid item xs={4}><Item>Item</Item></Grid>
          <Grid item xs={4}><Item>Item</Item></Grid>
        </Grid>
      </div>
    </div>
  ),
};

export const Alignment = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h4>justifyContent: flex-start</h4>
        <Grid container spacing={2} justifyContent="flex-start">
          <Grid item xs={2}><Item>Item</Item></Grid>
          <Grid item xs={2}><Item>Item</Item></Grid>
          <Grid item xs={2}><Item>Item</Item></Grid>
        </Grid>
      </div>
      <div>
        <h4>justifyContent: center</h4>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={2}><Item>Item</Item></Grid>
          <Grid item xs={2}><Item>Item</Item></Grid>
          <Grid item xs={2}><Item>Item</Item></Grid>
        </Grid>
      </div>
      <div>
        <h4>justifyContent: flex-end</h4>
        <Grid container spacing={2} justifyContent="flex-end">
          <Grid item xs={2}><Item>Item</Item></Grid>
          <Grid item xs={2}><Item>Item</Item></Grid>
          <Grid item xs={2}><Item>Item</Item></Grid>
        </Grid>
      </div>
      <div>
        <h4>justifyContent: space-between</h4>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={2}><Item>Item</Item></Grid>
          <Grid item xs={2}><Item>Item</Item></Grid>
          <Grid item xs={2}><Item>Item</Item></Grid>
        </Grid>
      </div>
    </div>
  ),
};

export const Direction = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px' }}>
      <div style={{ flex: 1 }}>
        <h4>Row (기본)</h4>
        <Grid container spacing={2} direction="row">
          <Grid item><Item>1</Item></Grid>
          <Grid item><Item>2</Item></Grid>
          <Grid item><Item>3</Item></Grid>
        </Grid>
      </div>
      <div style={{ flex: 1 }}>
        <h4>Column</h4>
        <Grid container spacing={2} direction="column">
          <Grid item><Item>1</Item></Grid>
          <Grid item><Item>2</Item></Grid>
          <Grid item><Item>3</Item></Grid>
        </Grid>
      </div>
    </div>
  ),
};

export const DashboardLayout = {
  render: () => (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card title="대시보드 헤더">
          전체 너비 헤더
        </Card>
      </Grid>
      <Grid item xs={12} md={8}>
        <Card title="메인 콘텐츠">
          주요 콘텐츠 영역 (데스크톱 8칸, 모바일 전체)
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card title="사이드바">
          사이드바 영역 (데스크톱 4칸, 모바일 전체)
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card>통계 1</Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card>통계 2</Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card>통계 3</Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card>통계 4</Card>
      </Grid>
    </Grid>
  ),
};

export const CardGrid = {
  render: () => (
    <Grid container spacing={2}>
      {[1, 2, 3, 4, 5, 6].map((num) => (
        <Grid item xs={12} sm={6} md={4} key={num}>
          <Card
            title={`대회 ${num}`}
            actions={
              <>
                <button>자세히</button>
                <button>신청</button>
              </>
            }
          >
            대회 정보가 여기에 표시됩니다.
          </Card>
        </Grid>
      ))}
    </Grid>
  ),
};

export const TournamentList = {
  render: () => (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} lg={4}>
        <Card title="2024 서울시 탁구 선수권">
          <p><strong>일시:</strong> 2024.03.15</p>
          <p><strong>참가:</strong> 15 / 32명</p>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Card title="2024 경기도 오픈">
          <p><strong>일시:</strong> 2024.04.20</p>
          <p><strong>참가:</strong> 28 / 32명</p>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Card title="2024 인천시 선수권">
          <p><strong>일시:</strong> 2024.05.10</p>
          <p><strong>참가:</strong> 32 / 32명 (마감)</p>
        </Card>
      </Grid>
    </Grid>
  ),
};

export const NestedGrid = {
  render: () => (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Item>
          <Grid container spacing={1}>
            <Grid item xs={6}><div style={{ padding: '8px', background: '#fff' }}>내부 1</div></Grid>
            <Grid item xs={6}><div style={{ padding: '8px', background: '#fff' }}>내부 2</div></Grid>
          </Grid>
        </Item>
      </Grid>
      <Grid item xs={6}><Item>외부 1</Item></Grid>
      <Grid item xs={6}><Item>외부 2</Item></Grid>
    </Grid>
  ),
};

export const ComplexLayout = {
  render: () => (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Item>헤더 (전체 너비)</Item>
      </Grid>
      <Grid item xs={12} md={3}>
        <Item>사이드바 (1/4)</Item>
      </Grid>
      <Grid item xs={12} md={6}>
        <Item>메인 콘텐츠 (1/2)</Item>
      </Grid>
      <Grid item xs={12} md={3}>
        <Item>광고 (1/4)</Item>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Item>1/4</Item>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Item>1/4</Item>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Item>1/4</Item>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Item>1/4</Item>
      </Grid>
      <Grid item xs={12}>
        <Item>푸터 (전체 너비)</Item>
      </Grid>
    </Grid>
  ),
};
