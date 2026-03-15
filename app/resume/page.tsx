import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '이력서 · 김윤주 PM 포트폴리오',
  description: '김윤주 PM의 경력, 학력, 스킬 및 자격증 이력서 페이지입니다.',
};

const skills = ['Python', 'R', 'SQL', 'Notion', 'JIRA', 'Figma', 'HTML', 'Excel', 'Google Analytics', 'Adobe Photoshop', 'Slack'];

export default function ResumePage() {
  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <div className="page-header__inner">
          <div className="page-header__eyebrow">Resume</div>
          <h1 className="page-header__title">김 윤 주</h1>
          <p className="page-header__subtitle">
            <strong style={{ color: '#fff' }}>플랫폼 기획 PM</strong> · 경력 6년 6개월
            <br />
            <a href="mailto:yoonjudith1606@gmail.com" style={{ color: '#a8a8a8' }}>
              yoonjudith1606@gmail.com
            </a>{' '}
            · +82 10-4112-1606
          </p>
          <div style={{ marginTop: 'var(--sp-6)' }}>
            <a href="/김윤주_경력기술서(2026).pdf" download className="bx--btn bx--btn--primary">
              PDF 이력서 다운로드 ↓
            </a>
          </div>
        </div>
      </div>

      <div className="resume-content">
        {/* Summary */}
        <div className="resume-section">
          <h2 className="section-heading">Summary</h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--muted-foreground)' }}>
            신사업 0→1 출시부터 B2B SaaS의 1→N 확장까지, 제품의 End to End를 경험한 올라운더 PM입니다.
            복잡한 도메인 환경에서 빠르게 핵심 Pain Point를 도출하고, 비즈니스 가치를 창출하는 것이 강점입니다.
          </p>
        </div>

        {/* 경력 */}
        <div className="resume-section">
          <h2 className="section-heading">경력</h2>

          {/* 타이드스퀘어 */}
          <div className="resume-company-block">
            <div className="resume-company-name">(주)타이드스퀘어</div>
            <div className="resume-period">2024.10 – 재직 중 (1년 5개월) · Product Manager</div>
          </div>
          {[
            { slug: 'luna-coverage', title: 'Luna 제품 커버리지 확장', desc: '예약 핸들링 40→90% 커버리지 확대, 신규 파트너 7개사 연동(생산성 2.5배)' },
            { slug: 'i18n-automation', title: '다국어(i18n) 시스템 + 텍스트 관리 자동화', desc: 'AI 기반 자동화 도입, Human Error 약 30% 저감' },
            { slug: 'rbac-pci-dss', title: 'RBAC + User LifeCycle + PCI-DSS 대응', desc: '3단계 RBAC, 5단계 LifeCycle, MFA·세션 정책 도입' },
            { slug: 'ai-api-whitelabel', title: 'AI 기반 항공 API 연동 자동화 & 화이트레이블 PoC', desc: '온보딩 리드타임 3개월→2주 목표 PoC, RAG 200+ Edge Case 구조화' },
          ].map((item) => (
            <div key={item.slug} className="resume-role-item">
              <div className="resume-role-title">
                {item.title} —{' '}
                <Link href={`/projects/${item.slug}`} style={{ fontSize: '0.8rem' }}>
                  상세 보기 →
                </Link>
              </div>
              <ul className="resume-role-desc">
                <li>{item.desc}</li>
              </ul>
            </div>
          ))}

          {/* CJ ENM 신사업 */}
          <div className="resume-company-block" style={{ marginTop: 'var(--sp-7)' }}>
            <div className="resume-company-name">
              씨제이이엔엠(CJ ENM)
              <span style={{ fontWeight: 400, marginLeft: 8, color: 'var(--muted-foreground)' }}>신사업 PO</span>
            </div>
            <div className="resume-period">2022.04 – 2024.10 (2년 7개월) · 정규직</div>
          </div>
          {[
            { slug: 'cnack-launch', title: '크낵 런칭 (0→1): MVP·베타·사업화', desc: '팬메이드 굿즈 크리에이터 248명, 거래액 5.6억, 구매전환율 46%' },
            { slug: 'cnack-growth', title: '크낵 고도화 (1→N)', desc: '구매 전환율 41% 개선, 판매자 등록율 84% 개선' },
            { slug: 'cnack-bizops', title: '사업 관리·운영 + 정산/재무 프로세스', desc: '3개년 시뮬레이션, 예산 수립·집행, 재무회계·정산 프로세스 확보' },
            { slug: 'cnack-licensing', title: '사업 제휴 · IP 라이선스 소싱', desc: 'CJ ENM 내 33개 IP 권리 확보, <선재업고튀어> 팝업 1.5억 달성' },
          ].map((item) => (
            <div key={item.slug} className="resume-role-item">
              <div className="resume-role-title">
                {item.title} —{' '}
                <Link href={`/projects/${item.slug}`} style={{ fontSize: '0.8rem' }}>
                  상세 보기 →
                </Link>
              </div>
              <ul className="resume-role-desc">
                <li>{item.desc}</li>
              </ul>
            </div>
          ))}

          {/* CJ ENM 콘텐츠 */}
          <div className="resume-company-block" style={{ marginTop: 'var(--sp-7)' }}>
            <div className="resume-company-name">
              씨제이이엔엠(CJ ENM)
              <span style={{ fontWeight: 400, marginLeft: 8, color: 'var(--muted-foreground)' }}>Contents Acquisition</span>
            </div>
            <div className="resume-period">2020.01 – 2022.04 (2년 4개월) · 정규직</div>
          </div>
          {[
            { slug: 'animation-rights', title: '애니메이션 해외 부가판권 구매 및 거래처 관리', desc: '짱구·요괴워치·명탐정코난 등 TV/극장판권, 블록딜, 홀드백 관리' },
            { slug: 'global-distribution', title: 'VOD 유통 보조 및 아마존 프라임 로컬라이징 납품', desc: '짱구 더빙·자막 납품, TVING 구매 대행, VOD 로열티 정산' },
          ].map((item) => (
            <div key={item.slug} className="resume-role-item">
              <div className="resume-role-title">
                {item.title} —{' '}
                <Link href={`/projects/${item.slug}`} style={{ fontSize: '0.8rem' }}>
                  상세 보기 →
                </Link>
              </div>
              <ul className="resume-role-desc">
                <li>{item.desc}</li>
              </ul>
            </div>
          ))}

          {/* 더핑크퐁 */}
          <div className="resume-company-block" style={{ marginTop: 'var(--sp-7)' }}>
            <div className="resume-company-name">더핑크퐁컴퍼니</div>
            <div className="resume-period">2019.03 – 2019.06 (4개월) · 인턴</div>
          </div>
          <div className="resume-role-item">
            <div className="resume-role-title">
              IP 라이선스 사업 —{' '}
              <Link href="/projects/pinkfong-analysis" style={{ fontSize: '0.8rem' }}>
                상세 보기 →
              </Link>
            </div>
            <ul className="resume-role-desc">
              <li>핑크퐁·아기상어 매출 분석, 신규 라이선시 발굴·계약, 로열티 정산</li>
            </ul>
          </div>
        </div>

        {/* 학력 */}
        <div className="resume-section">
          <h2 className="section-heading">학력</h2>
          <div className="resume-company-block">
            <div className="resume-company-name">경희대학교</div>
            <div className="resume-period">2014.03 – 2020.02 졸업 · 무역학과 (GPA 3.75/4.5)</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)', marginTop: 4 }}>
              통계학 · 국제마케팅 · 국제재무관리 이수
            </div>
          </div>
          <div className="resume-company-block" style={{ marginTop: 'var(--sp-5)' }}>
            <div className="resume-company-name">한국방송통신대학교</div>
            <div className="resume-period">2021.08 – 2025.08 졸업 · 통계데이터과학과</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)', marginTop: 4 }}>
              데이터 관련 지식 함양을 위한 추가 학위
            </div>
          </div>
        </div>

        {/* 스킬 & 자격증 */}
        <div className="resume-section">
          <h2 className="section-heading">스킬 · 수상 · 자격증</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--sp-2)', marginBottom: 'var(--sp-6)' }}>
            {skills.map((s) => (
              <span key={s} className="skill-chip">{s}</span>
            ))}
          </div>
          <ul className="resume-role-desc" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)' }}>
            <li>ADsP 데이터분석준전문가 · ASsP-0210657 (2019.07, 한국데이터베이스진흥원)</li>
            <li>사회조사분석사 2급 · 19202231882L (2019.08)</li>
            <li>SQLD · SQLD-0340169 (2019.08, 한국데이터베이스진흥원)</li>
            <li>
              2019 빅데이터 콘테스트 Innovation 분야 빅데이터 포럼 의장상 —{' '}
              <Link href="/projects/bigdata-contest">상세 →</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
