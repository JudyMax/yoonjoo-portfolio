'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { PROJECTS, COMPANY_LABELS, Project } from '@/lib/projects';

export default function ProjectsPage() {
  const [activeCompany, setActiveCompany] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortMode, setSortMode] = useState('recent');

  const companyOrder = ['tidesquare', 'cjenm-cnack', 'cjenm-content', 'pinkfong', 'etc'];

  const filtered = useMemo(() => {
    let list = [...PROJECTS];

    // 회사 필터
    if (activeCompany !== 'all') {
      list = list.filter((p) => p.companyKey === activeCompany);
    }

    // 검색 필터
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.tldr.toLowerCase().includes(q) ||
          p.company.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    // 정렬
    if (sortMode === 'company') {
      list.sort((a, b) => companyOrder.indexOf(a.companyKey) - companyOrder.indexOf(b.companyKey));
    }

    return list;
  }, [activeCompany, searchQuery, sortMode]);

  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <div className="page-header__inner">
          <div className="page-header__eyebrow">Projects Hub</div>
          <h1 className="page-header__title">
            모든 프로젝트 <strong>{PROJECTS.length}개</strong>
          </h1>
          <p className="page-header__subtitle">
            타이드스퀘어 · CJ ENM · 더핑크퐁컴퍼니의 전체 프로젝트를 필터·검색할 수 있습니다.
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="filter-bar">
        <div className="filter-bar__inner">
          {/* 회사 필터 */}
          <div className="filter-group">
            <span className="filter-group__label">회사</span>
            <div className="filter-group__chips">
              <button
                className={`filter-chip${activeCompany === 'all' ? ' active' : ''}`}
                onClick={() => setActiveCompany('all')}
              >
                전체
              </button>
              {Object.entries(COMPANY_LABELS).map(([k, v]) => (
                <button
                  key={k}
                  className={`filter-chip${activeCompany === k ? ' active' : ''}`}
                  onClick={() => setActiveCompany(k)}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* 검색 */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 'var(--sp-2)' }}>
            <span className="filter-group__label">검색</span>
            <div className="search-wrapper">
              <span className="search-icon">⌕</span>
              <input
                type="search"
                className="search-input"
                placeholder="프로젝트명 · 태그 · 키워드"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* 정렬 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-2)', alignSelf: 'flex-end' }}>
            <span className="filter-group__label">정렬</span>
            <select
              className="sort-select"
              value={sortMode}
              onChange={(e) => setSortMode(e.target.value)}
            >
              <option value="recent">최신순</option>
              <option value="company">회사순</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="results-info">
        {filtered.length}개 표시 중 (전체 {PROJECTS.length}개)
      </div>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 var(--px) var(--sp-10)' }}>
        {filtered.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state__icon">⊘</div>
            <p className="empty-state__title">검색 결과가 없습니다</p>
          </div>
        ) : (
          <div className="card-grid">
            {filtered.map((p) => (
              <ProjectTile key={p.slug} p={p} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

function ProjectTile({ p }: { p: Project }) {
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
