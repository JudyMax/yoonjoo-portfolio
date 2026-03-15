// =============================================================
// about.js — About 페이지
// =============================================================
export function renderAbout(container) {
    const skills = [
        { category: '기획/PM', items: ['Notion', 'JIRA', 'Figma', 'Confluence'] },
        { category: '데이터/분석', items: ['Python', 'R', 'SQL', 'Google Analytics'] },
        { category: '기타', items: ['HTML', 'Excel', 'Adobe Photoshop', 'Slack'] },
    ];

    const certs = [
        'ADsP 데이터분석준전문가 (2019)',
        '사회조사분석사 2급 (2019)',
        'SQLD (2019)',
        '2019 빅데이터 콘테스트 · 의장상 (Innovation)',
    ];

    container.innerHTML = `
    <div class="page-header">
      <div class="page-header__inner">
        <div class="page-header__eyebrow">About</div>
        <h1 class="page-header__title">김 윤 주 · <em>PM</em></h1>
        <p class="page-header__subtitle">신사업 0→1 출시부터 B2B SaaS 1→N 확장까지. End-to-End PM.</p>
      </div>
    </div>

    <div class="about-layout">
      <!-- 왼쪽: 소개 + 스킬 -->
      <div>
        <div class="detail-section">
          <div class="detail-section__header">
            <span class="detail-section__num">01</span>
            <h2 class="detail-section__title">소개</h2>
          </div>
          <div class="detail-section__body">
            <p>6년 6개월간 CJ ENM 사내벤처(크낵)와 B2B SaaS 스타트업(타이드스퀘어)을 거치며,
            제품의 기획부터 배포·운영까지 End-to-End를 경험했습니다.</p>
            <p>복잡한 도메인에서 핵심 Pain Point를 빠르게 찾아 비즈니스 가치로 연결하는 것을 좋아합니다.
            데이터와 사용자 인터뷰를 병행해 의사결정의 근거를 만들고, 개발·디자인·사업팀과 밀도 높게 협업합니다.</p>
            <p>언어: <strong>영어 비즈니스 레벨</strong> (BCWW·MIPCOM 등 글로벌 마켓 참가 경험)</p>
          </div>
        </div>

        <div class="detail-section">
          <div class="detail-section__header">
            <span class="detail-section__num">02</span>
            <h2 class="detail-section__title">스킬</h2>
          </div>
          <div class="detail-section__body">
            ${skills.map(g => `
              <div style="margin-bottom:var(--space-05)">
                <div style="font-family:'IBM Plex Mono',monospace;font-size:0.6875rem;letter-spacing:1px;text-transform:uppercase;color:var(--cds-text-secondary);margin-bottom:var(--space-03)">${g.category}</div>
                <div class="skills-grid">
                  ${g.items.map(s => `<span class="skill-chip">${s}</span>`).join('')}
                </div>
              </div>`).join('')}
          </div>
        </div>

        <div class="detail-section">
          <div class="detail-section__header">
            <span class="detail-section__num">03</span>
            <h2 class="detail-section__title">수상 · 자격증</h2>
          </div>
          <div class="detail-section__body">
            <ul>
              ${certs.map(c => `<li>${c}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>

      <!-- 오른쪽: 링크 & 연락처 -->
      <aside>
        <div class="detail-meta">
          <div class="detail-meta__row">
            <span class="detail-meta__label">이메일</span>
            <a href="mailto:yoonjudith1606@gmail.com" class="detail-meta__value" style="color:var(--cds-interactive)">yoonjudith1606@gmail.com</a>
          </div>
          <div class="detail-meta__row">
            <span class="detail-meta__label">연락처</span>
            <span class="detail-meta__value">+82 10-4112-1606</span>
          </div>
          <div class="detail-meta__row">
            <span class="detail-meta__label">크낵</span>
            <a href="https://www.cnack.kr" target="_blank" rel="noopener noreferrer" class="detail-meta__value" style="color:var(--cds-interactive)">cnack.kr ↗</a>
          </div>
          <div class="detail-meta__row">
            <span class="detail-meta__label">포트폴리오</span>
            <a href="https://drive.google.com/file/d/1dsqOU7L-ykm4e9RFki3ZGQYS5gdv7Zux/view" target="_blank" rel="noopener noreferrer" class="detail-meta__value" style="color:var(--cds-interactive)">Google Drive ↗</a>
          </div>
          <div class="detail-meta__row">
            <a href="#/contact" class="bx--btn bx--btn--primary" style="width:100%;justify-content:center">Contact →</a>
          </div>
          <div class="detail-meta__row">
            <a href="assets/김윤주_경력기술서(2026).pdf" download class="bx--btn bx--btn--secondary" style="width:100%;justify-content:center">Resume PDF ↓</a>
          </div>
        </div>
      </aside>
    </div>
  `;
}
