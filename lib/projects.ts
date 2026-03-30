// =============================================================
// projects.ts — 포트폴리오 프로젝트 데이터 (Next.js용)
// =============================================================

export interface Outcome {
  label: string;
  value: string;
  unit: string;
  desc: string;
}

export interface ApproachItem {
  title: string;
  desc: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  company: string;
  companyKey: string;
  period: string;
  role: string;
  team: string;
  depth: string;
  tags: string[];
  confidentiality: string;
  collaboration?: string;
  tldr: string;
  problem?: string;
  goal?: string;
  approach?: ApproachItem[];
  flow?: { before: string; after: string };
  execution?: string;
  outcome?: Outcome[];
  retrospective?: string;
  collaboration_detail?: string;
  lunaFixed?: boolean;
}

export const PROJECTS: Project[] = [
  // ─────────────────────────────────────────
  // TIDESQUARE
  // ─────────────────────────────────────────
  {
    slug: 'luna-coverage',
    title: 'Luna 제품 커버리지 확장',
    subtitle: '예약 핸들링 고도화 및 신규 파트너 연동',
    company: '타이드스퀘어',
    companyKey: 'tidesquare',
    period: '2024.10 – 재직 중',
    role: 'Product Manager',
    team: '기획 1 · 개발 n · QA',
    depth: 'A',
    tags: ['B2B SaaS', 'Platform', 'Automation', 'Aviation', 'API'],
    confidentiality: 'redacted',
    collaboration: '개발팀 API 스펙 협의, 항공사 연동 워크플로우 공동 정의',
    tldr: '항공 예약 핸들링 커버리지를 40→90%로 확대하고, 신규 파트너 7개사를 추가 연동하여 SaaS 세일즈 기회와 고객 유치 기반을 대폭 넓혔다.',
    problem: `OTA 파트너사를 위한 항공 예약관리 백오피스 'Luna'는 단순 즉시 발권·취소만 지원했다. 좌석/수하물 구매, 여정 변경, 탑승객 정보 변경 등 실무에서 빈번히 발생하는 핸들링 케이스를 커버하지 못해 고객사가 별도 시스템을 병행 운용했고, 이것이 API 기술 도입 장벽으로 작용했다.`,
    goal: `1) 예약 핸들링 커버리지 40→90% 달성 (API 기술 도입 장벽 제거)\n2) 신규 항공사 추가 연동으로 판매 가능 Content 풀 확대\n3) 연동 생산성 개선 — 사별 데이터 구조 표준화로 온보딩 비용 감소`,
    approach: [
      { title: 'API Transaction 단위 표준 워크플로우 재정의', desc: '복잡한 항공사별 프론트 연결 프로세스를 "API Transaction 단위"로 분해·표준화하여 개발팀이 재사용 가능한 로직 블록으로 구현할 수 있게 정의했다.' },
      { title: '자사 표준 API(PolarHub) 데이터 스키마 매핑 정책 수립', desc: '항공사별로 상이한 운임/발권 데이터 구조를 분석하고, PolarHub 스키마로의 매핑 정책을 문서화했다.' },
      { title: 'Ticket 대시보드 & Raw Data 다운로드', desc: '고객사 티켓 정산을 위한 대시보드와 Raw Data 다운로드 기능을 기획해 운영 업무 의존성을 낮추었다.' },
      { title: '단계별 기능 확장 (우선순위 기반)', desc: '핸들링 빈도·고객 임팩트 기준으로 30여 가지 핸들링 케이스에 우선순위를 부여하고, 스프린트 단위로 롤아웃했다.' },
    ],
    flow: { before: '단순 즉시 발권·취소만 지원. 고객사가 좌석/수하물/여정변경을 위해 별도 시스템 병행.', after: '좌석·수하물 구매, 여정 변경, 탑승객 정보 변경 포함 90% 커버리지 달성.' },
    execution: `— 핸들링 케이스 전수 분석: 항공사별 API 문서·고객 VOC 바탕으로 30+ 케이스 목록화\n— PolarHub 스키마 매핑 정책 문서 작성\n— 신규 항공사 7개사 연동: 연동 생산성 2.5배 개선 달성`,
    outcome: [
      { label: '커버리지', value: '40 → 90', unit: '%', desc: 'API 기술 도입 장벽 제거' },
      { label: '운영 효율', value: '30', unit: '%', desc: '운영팀 업무 처리 속도 개선' },
      { label: '에스컬레이션', value: '70', unit: '%↓', desc: '월 평균 에스컬레이션 감소' },
      { label: '신규 리텐율', value: '20', unit: '%↑', desc: 'SaaS 세일즈 신규 거래처' },
    ],
    retrospective: '핸들링 케이스 우선순위 결정이 가장 어려웠다. 데이터 기반(VOC + 항공사 API 오류율)으로 우선순위를 매기되, 스프린트 경계에서 유연하게 조정하는 방식으로 해결했다.',
    collaboration_detail: '항공사 API 스펙·데이터 구조 분석은 개발팀과 공동 수행. 스키마 매핑 정책 초안은 PM이 작성, 개발팀 리뷰를 통해 확정.',
  },
  {
    slug: 'i18n-automation',
    title: '다국어(i18n) 시스템 구축 및 텍스트 관리 자동화',
    subtitle: '키 표준화 · 타입 분류 · AI 기반 자동화',
    company: '타이드스퀘어',
    companyKey: 'tidesquare',
    period: '2024.10 – 재직 중',
    role: 'Product Manager',
    team: '기획 1 · 개발 n · AI 활용',
    depth: 'A',
    tags: ['Automation', 'i18n', 'AI', 'B2B SaaS', 'Process'],
    confidentiality: 'redacted',
    collaboration: '개발팀 키 네이밍 규칙 협의, 번역 작업 조율',
    tldr: '글로벌 채널(Amazon Marketplace) 대응을 위해 i18n 인프라를 구축하고, AI 기반 텍스트 관리 자동화로 Human Error 약 30% 저감 및 개발 리드타임 단축 효과를 확보했다.',
    problem: '글로벌 세일즈 확장을 위해 다국어 지원이 필요했으나, 텍스트 키 관리 체계가 없었다. 개발자마다 키 네이밍 규칙이 달라 소스 일관성이 없었다.',
    goal: `1) 글로벌 채널 확장 대응 가능한 i18n 인프라 구축\n2) AI 기반 텍스트 관리 자동화로 Human Error 약 30% 저감\n3) 텍스트 키 표준화 및 타입 분류로 소스 관리 일관성 확보`,
    approach: [
      { title: '키(Key) 네이밍 표준화', desc: '키 생성 규칙을 컴포넌트-타입-의미 3단 구조로 수립.' },
      { title: '텍스트 타입 분류 체계 (Alert/Action/Info/Label)', desc: '사용 목적에 따라 4가지 타입으로 분류하고, UI 맥락에 최적화된 번역 가이드를 적용했다.' },
      { title: 'AI 활용 텍스트 관리 자동화', desc: '화면설계서 기반 텍스트 추출 → 중복·유사도 체크 → 신규 여부 판단 → 자동 Key값 부여까지 자동화 파이프라인을 구축했다.' },
    ],
    flow: { before: '키 네이밍 규칙 无, 수동 중복 확인, 문맥 무시 번역.', after: '컴포넌트-타입-의미 표준 키, AI 자동 중복 체크, 타입별 번역 가이드 적용.' },
    execution: `— 키 네이밍 규칙 수립: 컴포넌트-타입-의미 3단 구조\n— 안티그래비티 활용 자동화 파이프라인 설계 및 테스트\n— 번역 품질 가이드(타입별 어조·길이 제한) 작성\n— 글로벌 데모 MVP 완성 (Amazon Marketplace 채널용)`,
    outcome: [
      { label: '해외 미팅 수', value: '5', unit: '건+', desc: '월 5건 이상' },
      { label: 'Human Error', value: '30', unit: '%↓', desc: 'AI 텍스트 자동 검증' },
      { label: '응답 국가', value: '3', unit: '개국+', desc: '신규 지역 아웃리치 반응' },
    ],
    retrospective: '자동화 파이프라인 구축 과정에서 화면설계서의 텍스트 추출 정확도가 핵심 변수였다.',
    collaboration_detail: '키 네이밍 규칙은 PM 초안 → 개발팀 리뷰 → 최종 확정. 자동화 파이프라인의 프롬프트 설계·테스트는 PM 주도.',
  },
  {
    slug: 'rbac-pci-dss',
    title: 'RBAC + User LifeCycle + PCI-DSS 대응',
    subtitle: 'B2B SaaS 사용자 권한 관리 및 보안 컴플라이언스',
    company: '타이드스퀘어',
    companyKey: 'tidesquare',
    period: '2024.10 – 재직 중',
    role: 'Product Manager',
    team: '기획 1 · 개발 n · 보안 담당',
    depth: 'A',
    tags: ['Compliance', 'Security', 'RBAC', 'PCI-DSS', 'B2B SaaS'],
    confidentiality: 'redacted',
    collaboration: '보안팀 PCI-DSS 요건 검토, 개발팀 UI+API 이중 제어 구현 협의',
    tldr: '카드 결제 도입을 위한 PCI-DSS 보안 요건에 대응하여 3단계 RBAC, User LifeCycle 정책, MFA 등 인증 고도화를 기획했다.',
    problem: '카드 결제 기능 도입을 위해 PCI-DSS 보안 요건 충족이 필요했으나, 기존 권한 체계는 단순 있음/없음 이분법이었다.',
    goal: `1) PCI-DSS 보안 요건 대응: 역할 기반 접근 제어 및 계정 LifeCycle/Status 체계 정립\n2) 엔터프라이즈급 제품 신뢰도 확보로 B2B 세일즈 제약 해소\n3) UI + API 이중 제어로 비인가자 데이터 접근 차단`,
    approach: [
      { title: '3단계 RBAC 설계 (조직 관리/예약 실무/조회 및 정산)', desc: '고객사 업무 흐름을 분석하여 3가지 역할로 정의하고, 각 역할별 화면·API 접근 범위를 명세했다.' },
      { title: 'User LifeCycle 정책 정의', desc: '최초 생성→추가→잠금→비활성→삭제까지 각 상태 전환 조건과 운영 프로세스를 명세했다.' },
      { title: '인증 정책 고도화 (MFA, 세션, Tenant ID 제거)', desc: 'Tenant ID 입력 절차 제거로 UX 개선. MFA(2차 인증) 도입, 유휴 시간 감지·세션 만료/연장 정책 설계.' },
    ],
    flow: { before: '단일 권한 체계(있음/없음). LifeCycle 기준 없음. MFA 없음.', after: '3단계 RBAC + UI/API 이중 제어. 5단계 LifeCycle + 자동 잠금. MFA + 세션 만료 정책.' },
    execution: `— 역할 정의 워크숍: 고객사 CS 케이스 분석 + 내부 세일즈팀 인터뷰\n— 역할별 권한 매트릭스 작성 (화면 × 기능 × 역할)\n— PCI-DSS 체크리스트 대조 검증`,
    outcome: [
      { label: 'RBAC 역할', value: '3', unit: '단계', desc: '조직관리/예약실무/조회·정산' },
      { label: '상태 코드', value: '6', unit: '단계', desc: 'LifeCycle 및 12개 전이경로' },
      { label: 'PCI-DSS', value: '19', unit: '건', desc: '미충족 보안 요건 개선 완료' },
    ],
    retrospective: '권한 범위 결정 과정에서 고객사별로 요구가 달랐다. PCI-DSS 요건을 레퍼런스로 삼아 설득력 있는 근거를 제시했다.',
    collaboration_detail: '역할 정의는 PM 주도. API 이중 제어 구현 방식은 개발팀과 공동 설계.',
  },
  {
    slug: 'ai-api-whitelabel',
    title: '항공권 예약 API MCP PoC 참여',
    subtitle: 'AI 에이전트가 자연어로 항공권 예약/핸들링 API를 호출할 수 있는 MCP 제공',
    company: '타이드스퀘어',
    companyKey: 'tidesquare',
    period: '2024.10 – 재직 중',
    role: 'Product Manager / PoC 리드',
    team: '기획 1 · 개발 n',
    depth: 'A',
    tags: ['AI', 'Automation', 'PoC', 'WhiteLabel', 'Aviation', 'MCP'],
    confidentiality: 'redacted',
    collaboration: 'AI 모델 선정 및 프롬프트 개발팀과 공동 설계',
    tldr: 'AI 에이전트를 통해 자연어로 항공권 예약과 핸들링을 수행하는 MCP(Model Context Protocol) PoC를 성공적으로 완료했습니다.',
    problem: '복잡한 기존 항공 예약 시스템을 LLM이 쉽게 제어할 수 있는 표준 매핑 워크플로우 부재.',
    goal: `1) 자연어 예약 요청 → API 호출 자동화 PoC 완료\n2) 항공사 API 엔드포인트 명세 분석 및 MCP Tool 정의`,
    approach: [
      { title: '자연어-API 매핑 및 대화 흐름 설계', desc: '예약/핸들링 API 기능 기반으로 유저의 자연어 시나리오 리스팅 및 매핑' },
      { title: '엣지 케이스 모호성 제어', desc: '다중 기능 요청, 불명확 제약, 중의적 요청 의도 명확화 및 대응 흐름 정의' },
      { title: '프롬프트 가이드라인', desc: 'AI 에이전트 응답 품질 개선을 위한 프롬프트 작성 및 테스트' },
    ],
    flow: { before: '기존의 복잡한 GUI 기반 예약 관리 프로세스', after: '자연어로 명령하면 AI 에이전트가 알아서 API를 매핑해 처리' },
    execution: `— 유선/텍스트 예약 채널의 고객 발화 패턴 분석\n— 모델별 응답 품질 테스트 (Claude, GPT-4)\n— PoC 결과 보고서 작성 및 데모 시연`,
    outcome: [
      { label: 'PoC 완료', value: '100', unit: '%', desc: 'API 호출 자동화 성공' },
      { label: '모호성 제어', value: 'Edge Case', unit: '', desc: '중의적 요청 해결' },
      { label: 'MCP 구성', value: '표준화', unit: '', desc: 'API Tool 정의' },
    ],
    retrospective: '자연어의 모호성을 API 제약사항과 매핑하는 조건문 설계가 핵심 역량이었다.',
    collaboration_detail: 'RAG 구조 설계는 개발팀·PM 공동. In-Out 정의 및 검증 기준은 PM 주도.',
  },
  // ─────────────────────────────────────────
  // CJ ENM 크낵
  // ─────────────────────────────────────────
  {
    slug: 'cnack-launch',
    title: '크낵 런칭 (0→1): MVP · 베타 · 사업화',
    subtitle: 'CJ ENM 최초 사내벤처 C2C 팬메이드 굿즈 플랫폼',
    company: 'CJ ENM (신사업 PO)',
    companyKey: 'cjenm-cnack',
    period: '2022.04 – 2024.10',
    role: '신사업 PO (기여도 100%)',
    team: 'PO 1 · 개발 아웃소싱 · 디자인',
    depth: 'A',
    tags: ['Platform', '0to1', 'Product', 'C2C', 'MVP', 'Fandom'],
    confidentiality: 'public',
    collaboration: '개발 아웃소싱 PM, CJ ENM 법무·마케팅팀 협업',
    tldr: '팬덤 시장의 저작권 Pain Point를 발견하고 C2C 팬메이드 굿즈 거래 플랫폼 크낵을 0→1로 기획·런칭했다. 베타 기간 회원 1.3만명·구매전환율 46%, 사업화 2년 후 거래액 5.6억 달성.',
    problem: '팬들은 비공식 굿즈를 제작·판매하고 싶었지만 저작권 문제로 불법 영역에 머물렀다.',
    goal: `1) 팬 크리에이터가 공식 저작권 활용해 굿즈를 제작·판매할 수 있는 C2C 플랫폼 MVP 구축\n2) 베타 기간 크리에이터 100+ 명 유치, 회원 전환율 40% 이상\n3) 사업화 전환을 위한 거래액·수익 구조 검증`,
    approach: [
      { title: '가설 설정 및 유저 분석 (문제→솔루션)', desc: '15명 인터뷰 기반 5W 유저 시나리오·저니맵을 도출해 검증.' },
      { title: '합법적 2차 창작 거래 구조 확립', desc: 'IP홀더 협의를 통한 저작권 에셋 공식 제공, 디자인 심사/피드백 절차를 설계.' },
      { title: 'ICE Score 기반 우선순위 산출 및 PRD 작성', desc: '전략/리소스/고객 필요도를 기준으로 개발 우선순위를 결정.' },
      { title: '아웃소싱 매니지먼트 및 GTM', desc: '외부 개발사 선정부터 배포까지 PM 전담.' },
    ],
    flow: { before: '팬 굿즈 = 불법 영역. 저작권자·팬 크리에이터 모두 수익화 불가.', after: '공식 라이선스 기반 C2C 거래. 크리에이터 248명, 거래액 5.6억.' },
    execution: `— 시장조사 + 사용자 인터뷰(15명) → 가설 검증\n— MVP 범위 정의 및 와이어프레임 작성 (기여도 100%)\n— 베타 런칭: 크리에이터 140명, 회원 1.3만명, 구매전환율 46%\n— 사업화 전환: 거래액 2.6억(1년) → 5.6억(2년)`,
    outcome: [
      { label: '거래액', value: '5.6', unit: '억', desc: '사업화 2년 누적' },
      { label: '크리에이터', value: '250', unit: '명', desc: '팬메이드 굿즈 제작' },
      { label: '누적 회원수', value: '11,668', unit: '명', desc: '지속적인 유저 유입' },
    ],
    retrospective: '0→1 과정에서 가장 어려웠던 것은 저작권 협의 속도였다. 내부 IP를 먼저 확보하고 외부 IP를 단계적으로 추가하는 전략으로 리스크를 분산했다.',
    collaboration_detail: '플랫폼 기획·PM은 PO 단독. 법무팀과 이용약관·저작권 정책 협의.',
  },
  {
    slug: 'cnack-growth',
    title: '크낵 고도화 (1→N): 구매 퍼널 · 판매자 등록 · 운영 자동화',
    subtitle: '유저 데이터 기반 전환율 개선 및 운영 효율화',
    company: 'CJ ENM (신사업 PO)',
    companyKey: 'cjenm-cnack',
    period: '2022.04 – 2024.10',
    role: '신사업 PO',
    team: 'PO 1 · 개발 · 디자인',
    depth: 'A',
    tags: ['Platform', 'Growth', 'UX', 'Analytics', 'Funnel', 'Operations'],
    confidentiality: 'public',
    collaboration: '데이터 분석팀, 개발 아웃소싱',
    tldr: '유저 VOC·데이터 분석으로 문제를 정의하고, 구매 퍼널 전환율 41% 개선, 판매자 상품 등록율 84% 개선, 관리자 상품 자동 업로드 도입으로 플랫폼 고도화를 달성했다.',
    problem: '베타 운영 중 VOC 파악 및 데이터 분석 결과 주요 병목을 발견했다. 구매자 결제 CTA 이탈, 판매자 폼 기반 제출 불편, 관리자 수동 업로드 지연 등.',
    goal: `1) 구매자 '상세페이지→결제시도' 퍼널 전환율 개선\n2) 판매자 상품 등록율 개선\n3) 관리자 운영 효율성 향상 (자동 업로드)`,
    approach: [
      { title: '구매자 결제 퍼널 개선 (UI/UX)', desc: '결제 모달을 스크롤 시에도 시선 내 머물도록(우측 Sticky, 모바일 하단 Fixed) 개선.' },
      { title: '판매자 상품 아카이빙 페이지 (노코드 툴)', desc: 'Stacker(노코드 툴)를 활용해 판매자가 본인이 제출한 상품 정보를 다시 보고 수정할 수 있는 개인 아카이빙 페이지를 구축.' },
      { title: '관리자 자동 상품 업로드 체계 (API 연동)', desc: 'NHN커머스 API를 활용, 판매자 제출 정보 DB와 플랫폼 DB의 데이터를 매칭해 자동 업로드 시스템 구축.' },
    ],
    flow: { before: '높은 상세페이지 이탈율, 낮은 판매자 등록율, 수동 관리자 업로드.', after: '구매 전환율 41% 개선, 판매자 등록율 84% 개선, 자동 업로드 도입.' },
    execution: `— 퍼널 분석(GA+내부 로그) 및 인터뷰를 통한 OKR 설정\n— 구매자 결제 UI A/B 테스트 및 레이아웃 개선 기획\n— NHN커머스 API 데이터 매핑 필드 정의`,
    outcome: [
      { label: '결제 시도 방어율', value: '41', unit: '%↑', desc: '결제 모달 UI 개선' },
      { label: '판매자 등록율', value: '84', unit: '%↑', desc: '아카이빙 페이지 도입 효과' },
      { label: '상품 업로드량', value: '3', unit: '배↑', desc: '1.7일 → 0.4일 단축' },
    ],
    retrospective: '데이터와 인터뷰를 병행해야 정확한 문제 진단이 가능했다.',
    collaboration_detail: '데이터 분석은 PO 주도(GA + 내부 로그). 개발 구현은 아웃소싱사.',
  },
  {
    slug: 'cnack-bizops',
    title: '크낵 사업 관리 · 운영 · 정산/재무 프로세스 수립',
    subtitle: '신사업 3개년 시뮬레이션 및 재무회계 프로세스 확보',
    company: 'CJ ENM (신사업 PO)',
    companyKey: 'cjenm-cnack',
    period: '2022.04 – 2024.10',
    role: '신사업 PO',
    team: 'PO 1 · 재무팀 · 법무팀',
    depth: 'B',
    tags: ['BizOps', 'Finance', 'Operations', 'Planning'],
    confidentiality: 'redacted',
    collaboration: '재무팀 정산 프로세스 협의, 법무팀 계약 검토',
    tldr: '사내벤처 사업화 전환을 위한 3개년 매출 시뮬레이션, 예산 수립/집행, 재무회계 프로세스, 국세청 통신판매위탁거래 신고 등 사업 운영 기반을 확보했다.',
    problem: '사내벤처의 사업화 전환과 지속적인 운영을 위해 예산 체계, 정산 프로세스, 재무 보고 구조가 필요했다.',
    goal: '사업화 전환 및 지속 운영을 위한 매출 정산·재무 프로세스 확보',
    approach: [
      { title: '3개년·7개년 시뮬레이션', desc: '성장 시나리오별 매출·비용 시뮬레이션 및 로드맵 수립' },
      { title: '예산 수립·집행·통제', desc: '분기별 예산 계획 및 집행 현황 관리' },
      { title: '재무회계 프로세스 협의', desc: '재무팀과 수익 구조·정산 방식 협의 및 프로세스 제정' },
    ],
    execution: `— 3개년/7개년 매출 시뮬레이션\n— 국세청 통신판매위탁거래 신고 프로세스 협의\n— 재무회계 처리 방식 및 정산 주기 확정`,
    outcome: [
      { label: '누적 거래액', value: '5.6', unit: '억', desc: '사업화 2년 기준' },
      { label: '거래 유형', value: '위탁', unit: '판매', desc: '국세청 신고 프로세스 확립' },
    ],
    collaboration_detail: '시뮬레이션 및 예산 수립은 PO 주도. 재무회계·정산 프로세스는 재무팀과 공동 협의.',
  },
  {
    slug: 'cnack-licensing',
    title: '크낵 사업 제휴 · IP 라이선스 소싱',
    subtitle: '저작권 확보 및 프로모션 성과',
    company: 'CJ ENM (신사업 PO)',
    companyKey: 'cjenm-cnack',
    period: '2022.04 – 2024.10',
    role: '신사업 PO',
    team: 'PO 1',
    depth: 'B',
    tags: ['Licensing', 'BizDev', 'IP', 'Partnership'],
    confidentiality: 'public',
    collaboration: 'CJ ENM 내 저작권 담당자, 외부 IP 홀더',
    tldr: 'CJ ENM 내 33개 콘텐츠 상품화 권리 확보. 드라마 <선재업고튀어> IP 팝업 행사 기간 내 거래액 1.5억 달성.',
    outcome: [
      { label: 'IP 권리 확보', value: '33', unit: '개', desc: 'CJ ENM 내 콘텐츠' },
      { label: '팝업 거래액', value: '1.5', unit: '억', desc: '<선재업고튀어> 기간 내' },
    ],
    collaboration_detail: '저작권 담당자 특성별 사업 제안서 작성 및 외부 제안.',
  },
  // ─────────────────────────────────────────
  // CJ ENM 콘텐츠세일즈
  // ─────────────────────────────────────────
  {
    slug: 'animation-rights',
    title: '해외 애니메이션 부가판권 구매 및 거래처 관리',
    subtitle: '짱구·요괴워치·명탐정코난 등 극장판·블록딜·서브라이선스',
    company: 'CJ ENM (Contents Sales)',
    companyKey: 'cjenm-content',
    period: '2020.01 – 2022.04',
    role: 'Contents Acquisition',
    team: '영업팀',
    depth: 'B',
    tags: ['Sales', 'Licensing', 'Global', 'Animation', 'Rights'],
    confidentiality: 'public',
    collaboration: '일본 원작사, 국내 방송사·OTT',
    tldr: '짱구·요괴워치·카드캡터체리 등 TV 시리즈 계약(기여도 100%), 니켈로디언 블록딜 참여, 극장판 판권 리드 등 해외 애니 판권을 구매하고 서브라이선스·홀드백 관리를 담당했다.',
    problem: '글로벌 애니 판권 구매 시 원작사와의 협상, 채널·OTT 간 홀드백 조율, 서브라이선스 관리가 복잡하게 얽혀 있었다.',
    goal: '국내 방영권·VOD 유통·서브라이선스 판매를 통한 콘텐츠 사업 성과 달성',
    approach: [
      { title: '판권 계약 리드', desc: 'TV 시리즈·극장판 계약 협상 및 조건 조율 (기여도 100%)' },
      { title: '서브라이선스 및 홀드백 관리', desc: '채널/OTT 간 방영 홀드백 설정 및 서브라이선스 판매' },
      { title: '콘텐츠 마켓 참가', desc: 'BCWW, MIPCOM, TIFFCOM 등 글로벌 마켓 참가 및 신규 콘텐츠 비딩' },
    ],
    execution: `— 짱구/요괴워치/토마스/카드캡터체리 TV 시리즈 계약 [기여도 100%]\n— 니켈로디언 콘텐츠 블록딜 참여 [기여도 60%]\n— 서브라이선스 판권 판매 및 채널/OTT 홀드백 관리`,
    outcome: [
      { label: '계약 시리즈', value: '4', unit: '작품', desc: 'TV 시리즈 단독 기여' },
      { label: '극장판 리드', value: '2', unit: '작품', desc: '짱구·명탐정코난' },
    ],
    collaboration_detail: '원작사 협상은 팀 주도, 개별 계약 건 기여도 표기.',
  },
  {
    slug: 'global-distribution',
    title: 'VOD 유통 보조 및 아마존 프라임 로컬라이징 납품',
    subtitle: '짱구는못말려 더빙·자막 제작 및 아마존 납품',
    company: 'CJ ENM (Contents Sales)',
    companyKey: 'cjenm-content',
    period: '2020.01 – 2022.04',
    role: 'Contents Acquisition',
    team: '영업팀',
    depth: 'C',
    tags: ['Distribution', 'Localization', 'VOD', 'Amazon', 'OTT'],
    confidentiality: 'public',
    collaboration: '로컬라이징 업체, Amazon Prime 납품팀',
    tldr: '짱구는못말려 아마존 프라임 더빙·자막 로컬라이징 납품 리드. TVING 구매 대행, VOD 로열티 정산, 세일러문 자막 라이선스 판매.',
    outcome: [
      { label: '플랫폼', value: 'Amazon Prime', unit: '', desc: '짱구 로컬라이징 납품' },
      { label: '업무 범위', value: 'VOD·정산·자막판매', unit: '', desc: '다채널 유통 경험' },
    ],
    collaboration_detail: '로컬라이징 업체 관리 및 품질 감수는 단독.',
  },
  // ─────────────────────────────────────────
  // 더핑크퐁컴퍼니
  // ─────────────────────────────────────────
  {
    slug: 'pinkfong-analysis',
    title: '핑크퐁·아기상어 IP 상품 매출 분석 및 방향 제안',
    subtitle: '캐릭터별 상품군 조합 및 라이선스 전략 도출',
    company: '더핑크퐁컴퍼니',
    companyKey: 'pinkfong',
    period: '2019.03 – 2019.06',
    role: 'IP라이선스사업 인턴',
    team: '라이선스팀',
    depth: 'C',
    tags: ['Licensing', 'Analytics', 'IP', 'Strategy'],
    confidentiality: 'redacted',
    collaboration: '라이선스 팀',
    tldr: '핑크퐁·아기상어 캐릭터를 별도 분류 후 캐릭터·라이선시·상품군 변수로 매출 분석하여 시너지 높은 상품군 조합을 도출하고 콘텐츠 제작·라이선스 상품 방향을 제안했다.',
    outcome: [
      { label: '분석 캐릭터', value: '2', unit: '개', desc: '핑크퐁·아기상어 분리 분석' },
      { label: '도출 상품군', value: '조합', unit: '제안', desc: '캐릭터별 시너지 기반' },
    ],
    collaboration_detail: '매출 분석 및 방향 제안은 인턴 단독.',
  },
  {
    slug: 'pinkfong-licensing',
    title: '핑크퐁 신규 라이선시 발굴 및 로열티 정산',
    subtitle: '본죽·배럴 등 신규 계약 및 증지 관리',
    company: '더핑크퐁컴퍼니',
    companyKey: 'pinkfong',
    period: '2019.03 – 2019.06',
    role: 'IP라이선스사업 인턴',
    team: '라이선스팀',
    depth: 'C',
    tags: ['Licensing', 'B2B', 'IP', 'Sales'],
    confidentiality: 'public',
    collaboration: '라이선스팀, 계약 업체',
    tldr: '본죽·배럴 등 신규 라이선시 발굴·계약 [기여도 100%]. 광천김 해외 수출 계약 참여 [50%]. 핑크퐁 증지 관리 및 로열티 정산서 발송.',
    outcome: [
      { label: '신규 라이선시', value: '2+', unit: '개사', desc: '본죽·배럴 (기여도 100%)' },
      { label: '정산 업무', value: '증지·로열티', unit: '', desc: '정기 발송' },
    ],
    collaboration_detail: '신규 라이선시 발굴·계약은 단독.',
  },
  {
    slug: 'bigdata-contest',
    title: '2019 빅데이터 콘테스트 수상',
    subtitle: '미세먼지 기반 서울 유동인구 분석 및 비즈니스 아이디어',
    company: '기타',
    companyKey: 'etc',
    period: '2019.12',
    role: '팀 참여 (분석·기획)',
    team: '팀 프로젝트',
    depth: 'C',
    tags: ['Analytics', 'Award', 'BigData', 'Geospatial'],
    confidentiality: 'public',
    collaboration: '팀원',
    tldr: '서울시 인구 유동량 데이터와 미세먼지 데이터를 결합 분석하여 서울 내 공기청정 광고판 최적 설치 위치 도출. Innovation 분야 빅데이터 포럼 의장상 수상.',
    outcome: [
      { label: '수상', value: '의장상', unit: '', desc: 'Innovation 분야 · 빅데이터 포럼' },
      { label: '분석 대상', value: '서울시', unit: '', desc: '인구 유동량 + 미세먼지' },
    ],
    collaboration_detail: '데이터 분석 및 비즈니스 아이디어 기획 팀 공동 수행.',
  },
];

export const COMPANY_LABELS: Record<string, string> = {
  tidesquare: '타이드스퀘어',
  'cjenm-cnack': 'CJ ENM · 크낵',
  'cjenm-content': 'CJ ENM · 콘텐츠',
  pinkfong: '더핑크퐁컴퍼니',
  etc: '기타',
};

export function getProjectBySlug(slug: string): Project | null {
  return PROJECTS.find((p) => p.slug === slug) || null;
}
