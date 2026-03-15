import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PROJECTS, getProjectBySlug, Project } from '@/lib/projects';
import type { Metadata } from 'next';

// SSG: 빌드 시 모든 슬러그에 대해 정적 페이지 생성
export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

// Next.js 15: params must be awaited
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProjectBySlug(slug);
  if (!p) return {};
  return {
    title: `${p.title} · 김윤주 포트폴리오`,
    description: p.tldr,
  };
}

function formatText(text?: string) {
  if (!text) return null;
  return text.split('\n').map((line, i) => (
    <span key={i}>
      {line}
      <br />
    </span>
  ));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const p = getProjectBySlug(slug);
  if (!p) notFound();

  return (
    <>
      {/* Breadcrumb */}
      <div style={{ background: 'var(--background)', borderBottom: '1px solid var(--border)' }}>
        <nav className="breadcrumb" aria-label="breadcrumb">
          <Link href="/">Home</Link>
          <span className="breadcrumb__sep">/</span>
          <Link href="/projects">Projects</Link>
          <span className="breadcrumb__sep">/</span>
          <span style={{ color: 'var(--foreground)' }}>{p.title}</span>
        </nav>
      </div>

      {/* Page Header */}
      <div className="page-header">
        <div className="page-header__inner">
          <div className="page-header__eyebrow">
            {p.companyKey === 'tidesquare' ? '타이드스퀘어' : p.company} · {p.period}
          </div>
          <h1 className="page-header__title">{p.title}</h1>
          {p.subtitle && <p className="page-header__subtitle">{p.subtitle}</p>}
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: 'var(--sp-10) var(--px)' }}>
        <ProjectDetail p={p} />
      </div>
    </>
  );
}

function ProjectDetail({ p }: { p: Project }) {
  const isFullDepth = p.depth === 'A';
  const isStandardDepth = p.depth === 'B';

  return (
    <div className="detail-layout" style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
      <div>
        <div className="tldr-box">
          <div className="tldr-box__label">TL;DR</div>
          <p className="tldr-box__text">{p.tldr}</p>
        </div>

        {p.problem && (
          <div className="detail-section">
            <div className="detail-section__header">
              <span className="detail-section__num">01</span>
              <h2 className="detail-section__title">문제 정의</h2>
            </div>
            <div className="detail-section__body">{formatText(p.problem)}</div>
          </div>
        )}

        {isFullDepth && p.goal && (
          <div className="detail-section">
            <div className="detail-section__header">
              <span className="detail-section__num">02</span>
              <h2 className="detail-section__title">목표</h2>
            </div>
            <div className="detail-section__body">{formatText(p.goal)}</div>
          </div>
        )}

        {p.approach && p.approach.length > 0 && (
          <div className="detail-section">
            <div className="detail-section__header">
              <span className="detail-section__num">03</span>
              <h2 className="detail-section__title">접근 / 핵심 결정</h2>
            </div>
            <div className="detail-section__body">
              <table className="decision-table">
                <thead>
                  <tr>
                    <th style={{ width: '30%' }}>결정</th>
                    <th>내용</th>
                  </tr>
                </thead>
                <tbody>
                  {p.approach.map((a, i) => (
                    <tr key={i}>
                      <td><strong>{a.title}</strong></td>
                      <td>{a.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {isFullDepth && p.flow && (
          <div className="detail-section">
            <div className="detail-section__header">
              <span className="detail-section__num">04</span>
              <h2 className="detail-section__title">Flow (Before / After)</h2>
            </div>
            <div className="before-after">
              <div className="before-after__panel">
                <div className="before-after__label">Before</div>
                <p className="before-after__text">{p.flow.before}</p>
              </div>
              <div className="before-after__panel before-after__panel--after">
                <div className="before-after__label">After</div>
                <p className="before-after__text">{p.flow.after}</p>
              </div>
            </div>
          </div>
        )}

        {isFullDepth && p.execution && (
          <div className="detail-section">
            <div className="detail-section__header">
              <span className="detail-section__num">05</span>
              <h2 className="detail-section__title">실행</h2>
            </div>
            <div className="detail-section__body">{formatText(p.execution)}</div>
          </div>
        )}

        {p.outcome && p.outcome.length > 0 && (
          <div className="detail-section">
            <div className="detail-section__header">
              <span className="detail-section__num">06</span>
              <h2 className="detail-section__title">성과</h2>
            </div>
            <div className="kpi-grid">
              {p.outcome.map((o, i) => (
                <div key={i} className="kpi-item">
                  <div className="kpi-item__label">{o.label}</div>
                  <div className="kpi-item__value">
                    {o.value}
                    <span className="kpi-item__unit">{o.unit}</span>
                  </div>
                  {o.desc && <div className="kpi-item__desc">{o.desc}</div>}
                </div>
              ))}
            </div>
          </div>
        )}

        {(isFullDepth || isStandardDepth) && p.retrospective && (
          <div className="detail-section">
            <div className="detail-section__header">
              <span className="detail-section__num">07</span>
              <h2 className="detail-section__title">회고 · 배운 점</h2>
            </div>
            <div className="detail-section__body">{formatText(p.retrospective)}</div>
          </div>
        )}

        {p.collaboration_detail && (
          <div className="detail-section">
            <div className="detail-section__header">
              <span className="detail-section__num">08</span>
              <h2 className="detail-section__title">함께한 범위</h2>
            </div>
            <div className="collab-box">
              <div className="collab-box__label">공동 작업 투명 공개</div>
              <div className="collab-box__text">{p.collaboration_detail}</div>
            </div>
          </div>
        )}
      </div>

      <aside className="detail-meta">
        <div className="detail-meta__row">
          <span className="detail-meta__label">회사</span>
          <span className="detail-meta__value">{p.company}</span>
        </div>
        <div className="detail-meta__row">
          <span className="detail-meta__label">기간</span>
          <span className="detail-meta__value">{p.period}</span>
        </div>
        <div className="detail-meta__row">
          <span className="detail-meta__label">역할</span>
          <span className="detail-meta__value">{p.role}</span>
        </div>
        {p.team && (
          <div className="detail-meta__row">
            <span className="detail-meta__label">팀 구성</span>
            <span className="detail-meta__value">{p.team}</span>
          </div>
        )}
        <div className="detail-meta__row" style={{ marginTop: 'var(--sp-4)' }}>
          <Link
            href="/projects"
            className="bx--btn bx--btn--ghost bx--btn--sm"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            ← 목록으로
          </Link>
        </div>
      </aside>
    </div>
  );
}
