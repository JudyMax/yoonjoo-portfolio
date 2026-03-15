// =============================================================
// projects.js — Projects Hub (필터 · 검색 · 정렬)
// =============================================================
import { PROJECTS, COMPANY_LABELS } from '../data/projects.js';

let filtered = [...PROJECTS];
let activeCompany = 'all';
let searchQuery = '';
let sortMode = 'recent';

export function renderProjects(container) {
    filtered = [...PROJECTS];
    activeCompany = 'all';
    searchQuery = '';
    sortMode = 'recent';



    container.innerHTML = `
    <!-- Page Header -->
    <div class="page-header">
      <div class="page-header__inner">
        <div class="page-header__eyebrow">Projects Hub</div>
        <h1 class="page-header__title">모든 프로젝트 <strong>${PROJECTS.length}개</strong></h1>
        <p class="page-header__subtitle">타이드스퀘어 · CJ ENM · 더핑크퐁컴퍼니의 전체 프로젝트를 필터·검색할 수 있습니다.</p>
      </div>
    </div>

    <!-- Filter Bar -->
    <div class="filter-bar">
      <div class="filter-bar__inner">
        <!-- 회사 필터 -->
        <div class="filter-group">
          <span class="filter-group__label">회사</span>
          <div class="filter-group__chips" id="companyChips">
            <button class="filter-chip active" data-company="all">전체</button>
            ${Object.entries(COMPANY_LABELS).map(([k, v]) =>
        `<button class="filter-chip" data-company="${k}">${v}</button>`
    ).join('')}
          </div>
        </div>



        <!-- 검색 -->
        <div style="flex:1;display:flex;flex-direction:column;gap:var(--space-02)">
          <span class="filter-group__label">검색</span>
          <div class="search-wrapper">
            <span class="search-icon">⌕</span>
            <input type="search" class="search-input" id="searchInput" placeholder="프로젝트명 · 태그 · 키워드" />
          </div>
        </div>

        <!-- 정렬 -->
        <div style="display:flex;flex-direction:column;gap:var(--space-02);align-self:flex-end;">
          <span class="filter-group__label">정렬</span>
          <select class="sort-select" id="sortSelect">
            <option value="recent">최신순</option>
            <option value="company">회사순</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Results -->
    <div id="resultsInfo" class="results-info"></div>
    <div id="projectGrid" style="max-width:var(--max-w);margin:0 auto;padding:0 var(--px) var(--sp-10);">
      <div class="card-grid" id="cardGrid"></div>
    </div>
  `;

    renderCards();
    bindEvents();
}

// ── 이벤트 바인딩 ──────────────────────────────────────────────
function bindEvents() {
    // 회사 칩
    document.getElementById('companyChips')?.addEventListener('click', e => {
        const btn = e.target.closest('[data-company]');
        if (!btn) return;
        activeCompany = btn.dataset.company;
        document.querySelectorAll('[data-company]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderCards();
    });



    // 검색
    document.getElementById('searchInput')?.addEventListener('input', e => {
        searchQuery = e.target.value.toLowerCase();
        renderCards();
    });

    // 정렬
    document.getElementById('sortSelect')?.addEventListener('change', e => {
        sortMode = e.target.value;
        renderCards();
    });
}

// ── 카드 렌더링 ────────────────────────────────────────────────
function renderCards() {
    let list = PROJECTS.filter(p => {
        // 회사 필터
        if (activeCompany !== 'all' && p.companyKey !== activeCompany) return false;
        // 검색
        if (searchQuery) {
            const haystack = [p.title, p.subtitle, p.tldr, p.company].join(' ').toLowerCase();
            if (!haystack.includes(searchQuery)) return false;
        }
        return true;
    });

    if (sortMode === 'recent') {
        // period 파싱: "2024.10"을 숫자로 (최신순)
        list.sort((a, b) => parseDate(b.period) - parseDate(a.period));
    } else if (sortMode === 'company') {
        list.sort((a, b) => a.companyKey.localeCompare(b.companyKey));
    }

    const grid = document.getElementById('cardGrid');
    const info = document.getElementById('resultsInfo');
    if (!grid || !info) return;

    info.textContent = `${list.length}개 프로젝트`;

    if (list.length === 0) {
        grid.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1;padding:var(--space-11) 0">
        <div class="empty-state__icon">⊘</div>
        <p class="empty-state__title">조건에 맞는 프로젝트가 없습니다</p>
        <p style="font-size:0.875rem;color:var(--cds-text-secondary);margin-top:8px">검색어나 필터를 변경해 보세요</p>
      </div>`;
        return;
    }

    grid.innerHTML = list.map(p => `
    <a href="#/projects/${p.slug}" class="bx--tile">
      <span class="tile-arrow">↗</span>
      <div style="display:flex;align-items:center;gap:var(--space-03);flex-wrap:wrap;">
        <span class="tile-company">${p.company}</span>
      </div>
      <div class="tile-title">${p.title}</div>
      ${p.subtitle ? `<div style="font-size:0.8rem;color:var(--cds-text-secondary);margin-top:-4px">${p.subtitle}</div>` : ''}
      <p class="tile-tldr">${p.tldr}</p>
      <div class="tile-footer">
        <span class="tile-period">${p.period}</span>
        <div></div>
      </div>
    </a>`).join('');
}

function parseDate(period) {
    const m = period.match(/(\d{4})\.(\d{2})/);
    if (!m) return 0;
    return parseInt(m[1]) * 100 + parseInt(m[2]);
}
