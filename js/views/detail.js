// =============================================================
// detail.js — 프로젝트 상세 페이지 (Depth A/B/C 차등)
// =============================================================
import { getProjectBySlug } from '../data/projects.js';

export function renderDetail(container, slug) {
    const p = getProjectBySlug(slug);

    if (!p) {
        container.innerHTML = `
      <div class="empty-state" style="padding:var(--space-13) var(--space-05)">
        <div class="empty-state__icon">⊘</div>
        <p class="empty-state__title">프로젝트를 찾을 수 없습니다</p>
        <a href="#/projects" class="bx--btn bx--btn--primary bx--btn--sm" style="margin-top:var(--space-05)">목록으로</a>
      </div>`;
        return;
    }

    container.innerHTML = `
    <!-- Breadcrumb -->
    <div style="background:var(--cds-layer-01);border-bottom:1px solid var(--cds-border-subtle-00)">
      <nav class="breadcrumb" aria-label="breadcrumb">
        <a href="#/">Home</a>
        <span class="breadcrumb__sep">/</span>
        <a href="#/projects">Projects</a>
        <span class="breadcrumb__sep">/</span>
        <span style="color:var(--cds-text-primary)">${p.title}</span>
      </nav>
    </div>

    <!-- Page Header (dark) -->
    <div class="page-header">
      <div class="page-header__inner">
        <div class="page-header__eyebrow">${p.companyKey === 'tidesquare' ? '타이드스퀘어' : p.company} · ${p.period}</div>
        <h1 class="page-header__title">${p.title}</h1>
        ${p.subtitle ? `<p class="page-header__subtitle">${p.subtitle}</p>` : ''}
        <div style="display:flex;flex-wrap:wrap;gap:var(--space-03);margin-top:var(--space-06);">
        </div>
      </div>
    </div>

    <!-- Body -->
    <div class="${p.depth === 'C' ? 'bx--grid' : ''}" style="${p.depth !== 'C' ? '' : 'padding-top:var(--space-09);padding-bottom:var(--space-10);max-width:var(--max-width);margin:0 auto;'}">
      ${p.depth === 'A' ? renderDepthA(p) : p.depth === 'B' ? renderDepthB(p) : renderDepthC(p)}
    </div>
  `;
}

// ═══════════════════════════════════════
// Depth A — Case Study 전체 섹션
// ═══════════════════════════════════════
function renderDepthA(p) {
    return `
    <div class="detail-layout">
      <!-- Main content -->
      <div>
        <!-- Luna 고정: 민감정보 알림 -->
        ${p.lunaFixed ? `<div class="collab-box" style="margin-bottom:var(--space-07)">
          <div class="collab-box__label">⚙ Luna 고정 요구사항 (PRD §10)</div>
          <div class="collab-box__text">이 페이지는 Luna 제품의 핵심 섹션을 모두 포함합니다: 운영 대시보드 · Fallback · 데이터 소스 · 안정성/확장성 · 장애 대응.</div>
        </div>` : ''}

        <!-- TL;DR -->
        <div class="tldr-box">
          <div class="tldr-box__label">TL;DR</div>
          <p class="tldr-box__text">${p.tldr}</p>
        </div>

        <!-- 01 문제 정의 -->
        <div class="detail-section">
          <div class="detail-section__header">
            <span class="detail-section__num">01</span>
            <h2 class="detail-section__title">문제 정의</h2>
          </div>
          <div class="detail-section__body">
            ${formatText(p.problem)}
          </div>
        </div>

        <!-- 02 목표 -->
        <div class="detail-section">
          <div class="detail-section__header">
            <span class="detail-section__num">02</span>
            <h2 class="detail-section__title">목표</h2>
          </div>
          <div class="detail-section__body">
            ${formatText(p.goal)}
          </div>
        </div>

        <!-- 03 접근/전략 -->
        ${p.approach?.length ? `
        <div class="detail-section">
          <div class="detail-section__header">
            <span class="detail-section__num">03</span>
            <h2 class="detail-section__title">접근 / 핵심 결정</h2>
          </div>
          <div class="detail-section__body">
            <table class="decision-table">
              <thead><tr><th style="width:30%">결정</th><th>내용</th></tr></thead>
              <tbody>
                ${p.approach.map(a => `<tr><td><strong>${a.title}</strong></td><td>${a.desc}</td></tr>`).join('')}
              </tbody>
            </table>
          </div>
        </div>` : ''}

        <!-- 04 Before / After -->
        ${p.flow ? `
        <div class="detail-section">
          <div class="detail-section__header">
            <span class="detail-section__num">04</span>
            <h2 class="detail-section__title">Flow (Before / After)</h2>
          </div>
          <div class="before-after">
            <div class="before-after__panel">
              <div class="before-after__label">Before</div>
              <p class="before-after__text">${p.flow.before}</p>
            </div>
            <div class="before-after__panel before-after__panel--after">
              <div class="before-after__label">After</div>
              <p class="before-after__text">${p.flow.after}</p>
            </div>
          </div>
        </div>` : ''}

        <!-- 05 실행 -->
        ${p.execution ? `
        <div class="detail-section">
          <div class="detail-section__header">
            <span class="detail-section__num">05</span>
            <h2 class="detail-section__title">실행</h2>
          </div>
          <div class="detail-section__body">
            ${formatText(p.execution)}
          </div>
        </div>` : ''}

        <!-- 06 성과 -->
        ${p.outcome?.length ? `
        <div class="detail-section">
          <div class="detail-section__header">
            <span class="detail-section__num">06</span>
            <h2 class="detail-section__title">성과</h2>
          </div>
          <div class="kpi-grid">
            ${p.outcome.map(o => `
              <div class="kpi-item">
                <div class="kpi-item__label">${o.label}</div>
                <div class="kpi-item__value">${o.value}<span class="kpi-item__unit">${o.unit}</span></div>
                ${o.desc ? `<div class="kpi-item__desc">${o.desc}</div>` : ''}
              </div>`).join('')}
          </div>
        </div>` : ''}

        <!-- Luna 고정 섹션 (PRD §10) -->
        ${p.lunaFixed && p.lunaFixedSections ? renderLunaFixed(p.lunaFixedSections) : ''}

        <!-- 07 회고 -->
        ${p.retrospective ? `
        <div class="detail-section">
          <div class="detail-section__header">
            <span class="detail-section__num">07</span>
            <h2 class="detail-section__title">회고 · 배운 점</h2>
          </div>
          <div class="detail-section__body">${formatText(p.retrospective)}</div>
        </div>` : ''}

        <!-- 08 함께한 범위 -->
        ${p.collaboration_detail ? `
        <div class="detail-section">
          <div class="detail-section__header">
            <span class="detail-section__num">08</span>
            <h2 class="detail-section__title">함께한 범위</h2>
          </div>
          <div class="collab-box">
            <div class="collab-box__label">공동 작업 투명 공개</div>
            <div class="collab-box__text">${p.collaboration_detail}</div>
          </div>
        </div>` : ''}
      </div>

      <!-- Sidebar Meta -->
      <aside class="detail-meta">
        <div class="detail-meta__row">
          <span class="detail-meta__label">회사</span>
          <span class="detail-meta__value">${p.company}</span>
        </div>
        <div class="detail-meta__row">
          <span class="detail-meta__label">기간</span>
          <span class="detail-meta__value">${p.period}</span>
        </div>
        <div class="detail-meta__row">
          <span class="detail-meta__label">역할</span>
          <span class="detail-meta__value">${p.role}</span>
        </div>
        ${p.team ? `<div class="detail-meta__row">
          <span class="detail-meta__label">팀 구성</span>
          <span class="detail-meta__value">${p.team}</span>
        </div>` : ''}


        <div class="detail-meta__row">
          <a href="#/projects" class="bx--btn bx--btn--ghost bx--btn--sm" style="width:100%;justify-content:center">← 목록으로</a>
        </div>
      </aside>
    </div>
  `;
}

// ═══════════════════════════════════════
// Luna 고정 섹션 (PRD §10)
// ═══════════════════════════════════════
function renderLunaFixed(s) {
    return `
    <div class="detail-section">
      <div class="detail-section__header">
        <span class="detail-section__num" style="color:#0f62fe">★</span>
        <h2 class="detail-section__title">운영 대시보드 · 안정성 (Luna 고정)</h2>
      </div>
      <div class="detail-section__body">
        ${[
            { label: '운영 대시보드', text: s.operationDashboard },
            { label: 'Fallback 정책', text: s.fallback },
            { label: '데이터 소스 관리', text: s.dataSource },
            { label: '안정성 · 확장성', text: s.stability },
            { label: '장애 대응 체계', text: s.incident },
        ].map(item => `
          <div style="margin-bottom:var(--space-06)">
            <div style="font-family:'IBM Plex Mono',monospace;font-size:0.6875rem;letter-spacing:1px;text-transform:uppercase;color:var(--cds-interactive);margin-bottom:var(--space-02)">${item.label}</div>
            <p>${item.text}</p>
          </div>`).join('')}
      </div>
    </div>`;
}

// ═══════════════════════════════════════
// Depth B — Standard (핵심 섹션만)
// ═══════════════════════════════════════
function renderDepthB(p) {
    return `
    <div class="detail-layout">
      <div>
        <div class="tldr-box">
          <div class="tldr-box__label">TL;DR</div>
          <p class="tldr-box__text">${p.tldr}</p>
        </div>

        ${p.problem ? `
        <div class="detail-section">
          <div class="detail-section__header">
            <span class="detail-section__num">01</span>
            <h2 class="detail-section__title">문제 정의</h2>
          </div>
          <div class="detail-section__body">${formatText(p.problem)}</div>
        </div>` : ''}

        ${p.approach?.length ? `
        <div class="detail-section">
          <div class="detail-section__header">
            <span class="detail-section__num">02</span>
            <h2 class="detail-section__title">접근 / 핵심 결정</h2>
          </div>
          <div class="detail-section__body">
            <ul>
              ${p.approach.map(a => `<li><strong>${a.title}</strong> — ${a.desc}</li>`).join('')}
            </ul>
          </div>
        </div>` : ''}

        ${p.execution ? `
        <div class="detail-section">
          <div class="detail-section__header">
            <span class="detail-section__num">03</span>
            <h2 class="detail-section__title">실행</h2>
          </div>
          <div class="detail-section__body">${formatText(p.execution)}</div>
        </div>` : ''}

        ${p.outcome?.length ? `
        <div class="detail-section">
          <div class="detail-section__header">
            <span class="detail-section__num">04</span>
            <h2 class="detail-section__title">성과</h2>
          </div>
          <div class="kpi-grid">
            ${p.outcome.map(o => `
              <div class="kpi-item">
                <div class="kpi-item__label">${o.label}</div>
                <div class="kpi-item__value">${o.value}<span class="kpi-item__unit">${o.unit}</span></div>
                ${o.desc ? `<div class="kpi-item__desc">${o.desc}</div>` : ''}
              </div>`).join('')}
          </div>
        </div>` : ''}

        ${p.collaboration_detail ? `
        <div class="detail-section">
          <div class="detail-section__header">
            <span class="detail-section__num">05</span>
            <h2 class="detail-section__title">함께한 범위</h2>
          </div>
          <div class="collab-box">
            <div class="collab-box__label">공동 작업 투명 공개</div>
            <div class="collab-box__text">${p.collaboration_detail}</div>
          </div>
        </div>` : ''}
      </div>

      <!-- Sidebar -->
      <aside class="detail-meta">
        ${metaRows(p)}

        <div class="detail-meta__row">
          <a href="#/projects" class="bx--btn bx--btn--ghost bx--btn--sm" style="width:100%;justify-content:center">← 목록으로</a>
        </div>
      </aside>
    </div>
  `;
}

// ═══════════════════════════════════════
// Depth C — Snapshot (5~8줄)
// ═══════════════════════════════════════
function renderDepthC(p) {
    return `
    <div style="max-width:720px;margin:var(--space-09) auto;padding:0 var(--space-05)">
      <div class="tldr-box" style="margin-bottom:var(--space-07)">
        <div class="tldr-box__label">TL;DR</div>
        <p class="tldr-box__text">${p.tldr}</p>
      </div>

      <!-- 역할 & 기간 -->
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:1px;background:var(--cds-border-subtle-00);border:1px solid var(--cds-border-subtle-00);margin-bottom:var(--space-07)">
        <div style="background:var(--cds-layer-01);padding:var(--space-05)">
          <div class="detail-meta__label">역할</div>
          <div class="detail-meta__value" style="margin-top:4px">${p.role}</div>
        </div>
        <div style="background:var(--cds-layer-01);padding:var(--space-05)">
          <div class="detail-meta__label">기간</div>
          <div class="detail-meta__value" style="margin-top:4px">${p.period}</div>
        </div>
        ${p.team ? `<div style="background:var(--cds-layer-01);padding:var(--space-05)">
          <div class="detail-meta__label">팀</div>
          <div class="detail-meta__value" style="margin-top:4px">${p.team}</div>
        </div>` : ''}
      </div>

      <!-- 결과 -->
      ${p.outcome?.length ? `
      <div class="kpi-grid" style="margin-bottom:var(--space-07)">
        ${p.outcome.map(o => `
          <div class="kpi-item">
            <div class="kpi-item__label">${o.label}</div>
            <div class="kpi-item__value">${o.value}<span class="kpi-item__unit">${o.unit}</span></div>
            ${o.desc ? `<div class="kpi-item__desc">${o.desc}</div>` : ''}
          </div>`).join('')}
      </div>` : ''}

      <!-- 함께한 범위 -->
      ${p.collaboration_detail ? `
      <div class="collab-box" style="margin-bottom:var(--space-07)">
        <div class="collab-box__label">함께한 범위</div>
        <div class="collab-box__text">${p.collaboration_detail}</div>
      </div>` : ''}

      <div style="display:flex;gap:var(--space-04);align-items:center;flex-wrap:wrap;">
        <a href="#/projects" class="bx--btn bx--btn--ghost bx--btn--sm" style="margin-left:auto">← 목록으로</a>
      </div>
    </div>
  `;
}

// ── 유틸 ──────────────────────────────────────────────────────
function metaRows(p) {
    return `
    <div class="detail-meta__row">
      <span class="detail-meta__label">회사</span>
      <span class="detail-meta__value">${p.company}</span>
    </div>
    <div class="detail-meta__row">
      <span class="detail-meta__label">기간</span>
      <span class="detail-meta__value">${p.period}</span>
    </div>
    <div class="detail-meta__row">
      <span class="detail-meta__label">역할</span>
      <span class="detail-meta__value">${p.role}</span>
    </div>
    <div class="detail-meta__row">
      <span class="detail-meta__label">태그</span>
      <div class="tag-group" style="margin-top:4px">
        ${p.tags.map(t => `<span class="bx--tag bx--tag--cool-gray">${t}</span>`).join('')}
      </div>
    </div>`;
}

function formatText(text) {
    if (!text) return '';
    return text
        .split('\n')
        .map(line => line.trim())
        .filter(Boolean)
        .map(line => {
            if (line.startsWith('—') || line.startsWith('-')) {
                return `<ul><li>${line.replace(/^[—\-]\s*/, '')}</li></ul>`;
            }
            if (/^\d+\)/.test(line)) {
                return `<ol><li>${line.replace(/^\d+\)\s*/, '')}</li></ol>`;
            }
            return `<p>${line}</p>`;
        })
        .join('');
}
