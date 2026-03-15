'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PROJECTS, Project } from '@/lib/projects';

// ── 프로젝트 카드 ──────────────────────────────────────────
function ProjectCard({ p }: { p: Project }) {
  return (
    <Link href={`/projects/${p.slug}`} className="bx--tile">
      <span className="tile-arrow">↗</span>
      <div className="tile-company">{p.company}</div>
      <div className="tile-title">{p.title}</div>
      <p className="tile-tldr">{p.tldr}</p>
      <div className="tile-footer">
        <span className="tile-period">{p.period}</span>
        <div />
      </div>
    </Link>
  );
}

// ── 경력 블록 (접기/펼치기) ──────────────────────────────
interface ExpBlock {
  company: string;
  dataCompany: string;
  title: string;
  period: string;
  projects: { title: string; bullets: string[]; highlight?: string }[];
}

function ExperienceBlock({ block }: { block: ExpBlock }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`exp-block${open ? '' : ' collapsed'}`} data-company={block.dataCompany}>
      <div className="exp-block__header">
        <div>
          <div className="exp-block__title">{block.title}</div>
          <div className="exp-block__company">{block.company}</div>
          <div className="exp-block__period">{block.period}</div>
        </div>
        <button
          className="exp-block__toggle"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="exp-block__toggle-text">{open ? '접기' : '펼치기'}</span> ‹
        </button>
      </div>
      <div className="exp-block__body">
        {block.projects.map((proj, i) => (
          <div key={i} className="exp-project">
            <h4 className="exp-project__title">{proj.title}</h4>
            <ul className="exp-project__list">
              {proj.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
              {proj.highlight && (
                <li className="exp-project__highlight">✨ {proj.highlight}</li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── 홈 페이지 ─────────────────────────────────────────────
const skills = ['Notion', 'JIRA', 'Figma', 'Confluence', 'Python', 'R', 'SQL', 'Google Analytics', 'HTML', 'Excel', 'Slack'];

const expBlocks: ExpBlock[] = [
  {
    title: 'Product Manager',
    company: '(주) 타이드스퀘어',
    dataCompany: 'tidesquare',
    period: '2024.10 – 재직 중',
    projects: [
      {
        title: '항공 Aggregator 플랫폼 – 국내 최초 NDC Aggregator 플랫폼 Halo 내 운영 대시보드 LUNA 기획 총괄',
        bullets: [
          'API 서비스 및 고객 니즈 분석을 통한 프로젝트 범위 선정 및 요구사항 수립',
          '예약/취소/환불/변경 등 항공권 사후처리 프로세스 시스템화',
          '운영 효율화 기능 설계',
        ],
        highlight: '예약 핸들링 커버리지 40% → 90% 확대, 신규 파트너 7개사 연동 (생산성 2.5배)',
      },
      {
        title: '다국어(i18n) 시스템 + 텍스트 관리 자동화',
        bullets: ['다국어 운영 체계 설계 및 AI 기반 번역 자동화 도입'],
        highlight: 'Human Error 약 30% 저감',
      },
      {
        title: 'RBAC + User LifeCycle + PCI-DSS 대응',
        bullets: ['3단계 RBAC, 5단계 LifeCycle, MFA · 세션 정책 도입', 'PCI-DSS 보안 인증 대응 기획'],
      },
      {
        title: 'AI 기반 항공 API 연동 자동화 & 화이트레이블 PoC',
        bullets: ['신규 항공사 온보딩 리드타임 3개월→2주 단축 목표 PoC', 'RAG 200+ Edge Case 구조화'],
      },
    ],
  },
  {
    title: '신사업 PO',
    company: '씨제이이엔엠 (CJ ENM) · 크낵',
    dataCompany: 'cjenm-cnack',
    period: '2022.04 – 2024.10 · 2년 7개월',
    projects: [
      {
        title: '크낵 런칭 (0→1): MVP · 베타 · 사업화',
        bullets: ['팬덤 시장의 저작권 Pain Point 발견 → C2C 팬메이드 굿즈 거래 플랫폼 기획 · 런칭', '정량 설문 200명, 정성 인터뷰 30건 기반 MVP 설계'],
        highlight: '크리에이터 248명, 거래액 5.6억, 구매전환율 46%',
      },
      {
        title: '크낵 고도화 (1→N)',
        bullets: ['구매 퍼널 분석 기반 UX 개선, 판매자 등록 프로세스 최적화'],
        highlight: '구매 전환율 41% 개선, 판매자 등록율 84% 개선',
      },
      {
        title: '사업 관리 · 운영 + 정산/재무 프로세스',
        bullets: ['사내벤처 3개년 시뮬레이션, 예산 수립 · 집행', '재무회계 · 정산 프로세스 확보'],
      },
      {
        title: '사업 제휴 · IP 라이선스 소싱',
        bullets: ['CJ ENM 내 33개 IP 권리 확보'],
        highlight: '<선재업고튀어> 팝업 1.5억 달성',
      },
    ],
  },
  {
    title: 'Contents Acquisition',
    company: '씨제이이엔엠 (CJ ENM) · 콘텐츠세일즈',
    dataCompany: 'cjenm-content',
    period: '2020.01 – 2022.04 · 2년 4개월',
    projects: [
      {
        title: '애니메이션 해외 부가판권 구매 및 거래처 관리',
        bullets: ['짱구 · 요괴워치 · 명탐정코난 등 TV/극장판권, 블록딜, 홀드백 관리', 'BCWW · MIPCOM 등 글로벌 마켓 참가 경험'],
      },
      {
        title: 'VOD 유통 보조 및 아마존 프라임 로컬라이징 납품',
        bullets: ['짱구 더빙 · 자막 납품, TVING 구매 대행, VOD 로열티 정산'],
      },
    ],
  },
  {
    title: '인턴 / IP라이선스',
    company: '더핑크퐁컴퍼니',
    dataCompany: 'pinkfong',
    period: '2019.03 – 2019.06 · 4개월',
    projects: [
      {
        title: 'IP 라이선스 사업',
        bullets: ['핑크퐁 · 아기상어 매출 분석, 신규 라이선시 발굴 · 계약', '로열티 정산 보조'],
      },
    ],
  },
];

export default function HomePage() {
  const featuredProjects = PROJECTS.filter((p) => p.depth === 'A').slice(0, 4);
  const otherProjects = PROJECTS.filter((p) => p.depth !== 'A').slice(0, 4);

  const handleContactScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* ═══ 01. Hero ═══ */}
      <section className="hero" id="hero">
        <div className="hero__inner">
          <div className="hero__eyebrow">Product Manager · 경력 6년 6개월</div>
          <h1 className="hero__title">
            신사업 <em>0→1</em>부터<br />
            B2B SaaS <em>1→N</em>까지,<br />
            End-to-End PM
          </h1>
          <p className="hero__subtitle">
            복잡한 도메인에서 핵심 Pain Point를 빠르게 도출하고, 비즈니스 가치를 창출하는 올라운더 PM 김윤주입니다.<br /><br />
            회원/인증, 어드민 시스템 기획, 다국어 자동화에 역량을 갖추고 있으며,
            스프린트 협업과 유관부서 커뮤니케이션을 통해 실행력 높은 제품을 만들어 왔습니다.
          </p>
          <div className="btn-group">
            <a href="/김윤주_경력기술서(2026).pdf" download className="bx--btn bx--btn--primary">
              이력서 다운로드
            </a>
            <a href="#contact-section" className="bx--btn bx--btn--ghost" onClick={handleContactScroll}>
              연락하기
            </a>
          </div>
        </div>
      </section>

      {/* ═══ 02. 핵심 역량 ═══ */}
      <section className="bx--section" id="skills">
        <div className="bx--section__inner">
          <h2 className="section-heading">핵심 역량</h2>
          <div className="strength-grid">
            <div className="strength-item">
              <div className="strength-item__icon">01 · Discovery</div>
              <div className="strength-item__title">문제 정의 능력</div>
              <p className="strength-item__desc">VOC · 데이터 · 인터뷰를 조합해 표면 이면의 근본 문제를 찾아내고, 연역적 논리로 솔루션 방향을 결정합니다.</p>
            </div>
            <div className="strength-item">
              <div className="strength-item__icon">02 · Execution</div>
              <div className="strength-item__title">End-to-End 실행</div>
              <p className="strength-item__desc">기획→개발 협업→QA→배포→운영 전 단계를 혼자서도 끌고 갈 수 있는 실행력. 사내벤처 0→1 경험이 증명합니다.</p>
            </div>
            <div className="strength-item">
              <div className="strength-item__icon">03 · Domain</div>
              <div className="strength-item__title">도메인 적응력</div>
              <p className="strength-item__desc">항공 예약 B2B SaaS, 팬덤 C2C 플랫폼, 콘텐츠 세일즈, IP 라이선스까지 다양한 도메인 경험을 보유하고 있습니다.</p>
            </div>
          </div>
          <div style={{ marginTop: 'var(--sp-8)' }}>
            <div className="skills-grid" style={{ justifyContent: 'center' }}>
              {skills.map((s) => (
                <span key={s} className="skill-chip">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 03. 경력 사항 ═══ */}
      <section className="bx--section bx--section--alt" id="experience">
        <div className="bx--section__inner">
          <h2 className="section-heading">경력 사항</h2>
          <div className="exp-detail-list">
            {expBlocks.map((block) => (
              <ExperienceBlock key={block.dataCompany} block={block} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 04. 주요 프로젝트 ═══ */}
      <section className="featured-section" id="projects">
        <div className="featured-section__inner">
          <div className="featured-header">
            <h2 className="featured-header__title">주요 프로젝트</h2>
            <Link href="/projects" className="bx--btn bx--btn--ghost bx--btn--sm">
              전체 프로젝트 보기 →
            </Link>
          </div>
          <div className="card-grid">
            {featuredProjects.map((p) => (
              <ProjectCard key={p.slug} p={p} />
            ))}
          </div>
          {otherProjects.length > 0 && (
            <div style={{ marginTop: 'var(--sp-10)' }}>
              <div className="featured-header">
                <h2 className="featured-header__title" style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)' }}>
                  기타 프로젝트
                </h2>
              </div>
              <div className="card-grid">
                {otherProjects.map((p) => (
                  <ProjectCard key={p.slug} p={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ═══ 05. 학력 / 자격증 ═══ */}
      <section className="bx--section bx--section--alt" id="education">
        <div className="bx--section__inner">
          <h2 className="section-heading">학력 · 자격증</h2>
          <div className="experience-list">
            <div className="experience-item">
              <div className="experience-item__header">
                <div>
                  <div className="experience-item__company">경희대학교</div>
                  <div className="experience-item__role">무역학과 (GPA 3.75/4.5)</div>
                </div>
                <div className="experience-item__period">2014.03 – 2020.02</div>
              </div>
            </div>
            <div className="experience-item">
              <div className="experience-item__header">
                <div>
                  <div className="experience-item__company">한국방송통신대학교</div>
                  <div className="experience-item__role">통계데이터과학과</div>
                </div>
                <div className="experience-item__period">2021.08 – 2025.08</div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 'var(--sp-8)' }}>
            <div className="section-heading" style={{ fontSize: '0.9375rem' }}>자격증 · 수상</div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-2)', fontSize: '0.875rem', color: 'var(--muted-foreground)' }}>
              {['ADsP 데이터분석준전문가 (2019)', '사회조사분석사 2급 (2019)', 'SQLD (2019)', '2019 빅데이터 콘테스트 Innovation 분야 의장상'].map((c) => (
                <li key={c} style={{ paddingLeft: 'var(--sp-4)', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0 }}>·</span>{c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ 06. 연락처 ═══ */}
      <section className="bx--section" id="contact-section">
        <div className="bx--section__inner" style={{ maxWidth: '560px' }}>
          <h2 className="section-heading">연락</h2>
          <p style={{ color: 'var(--muted-foreground)', marginBottom: 'var(--sp-6)', fontSize: '0.9375rem' }}>
            채용 문의, 협업 제안, 커피챗 모두 환영합니다.
          </p>
          <div className="contact-links">
            <a href="mailto:yoonjudith1606@gmail.com" className="contact-link-item">
              <div>
                <div className="contact-link-item__label">Email</div>
                <div className="contact-link-item__value">yoonjudith1606@gmail.com</div>
              </div>
              <span className="contact-link-item__arrow">↗</span>
            </a>
            <a href="https://drive.google.com/file/d/1dsqOU7L-ykm4e9RFki3ZGQYS5gdv7Zux/view" target="_blank" rel="noopener noreferrer" className="contact-link-item">
              <div>
                <div className="contact-link-item__label">Portfolio</div>
                <div className="contact-link-item__value">Google Drive ↗</div>
              </div>
              <span className="contact-link-item__arrow">↗</span>
            </a>
            <a href="https://www.cnack.kr" target="_blank" rel="noopener noreferrer" className="contact-link-item">
              <div>
                <div className="contact-link-item__label">크낵 (서비스)</div>
                <div className="contact-link-item__value">cnack.kr</div>
              </div>
              <span className="contact-link-item__arrow">↗</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
