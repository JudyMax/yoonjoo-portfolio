// =============================================================
// home.js — 원페이지 홈 (Hero + 역량 + 경력(상세) + 프로젝트 + 연락처)
// =============================================================
import { PROJECTS } from '../data/projects.js';

export function renderHome(container) {
  const featuredProjects = PROJECTS.filter(p => p.depth === 'A').slice(0, 4);
  const otherProjects = PROJECTS.filter(p => p.depth !== 'A').slice(0, 4);

  container.innerHTML = `
    <!-- ═══ 01. Hero ═══ -->
    <section class="hero" id="hero">
      <div class="hero__inner">
        <div class="hero__eyebrow">Product Manager · 경력 6년 6개월</div>
        <h1 class="hero__title">
          신사업 <em>0→1</em>부터<br>
          B2B SaaS <em>1→N</em>까지,<br>
          End-to-End PM
        </h1>
        <p class="hero__subtitle">
          복잡한 도메인에서 핵심 Pain Point를 빠르게 도출하고, 비즈니스 가치를 창출하는 올라운더 PM 김윤주입니다.<br><br>
          회원/인증, 어드민 시스템 기획, 다국어 자동화에 역량을 갖추고 있으며,
          스프린트 협업과 유관부서 커뮤니케이션을 통해 실행력 높은 제품을 만들어 왔습니다.
        </p>
        <div class="btn-group">
          <a href="assets/김윤주_경력기술서(2026).pdf" download class="bx--btn bx--btn--primary">이력서 다운로드</a>
          <a href="#contact-section" class="bx--btn bx--btn--ghost" onclick="event.preventDefault(); document.getElementById('contact-section').scrollIntoView({behavior:'smooth'})">연락하기</a>
        </div>
      </div>
    </section>

    <!-- ═══ 02. 핵심 역량 ═══ -->
    <section class="bx--section" id="skills">
      <div class="bx--section__inner">
        <h2 class="section-heading">핵심 역량</h2>
        <div class="strength-grid">
          <div class="strength-item">
            <div class="strength-item__icon">01 · Discovery</div>
            <div class="strength-item__title">문제 정의 능력</div>
            <p class="strength-item__desc">VOC · 데이터 · 인터뷰를 조합해 표면 이면의 근본 문제를 찾아내고, 연역적 논리로 솔루션 방향을 결정합니다.</p>
          </div>
          <div class="strength-item">
            <div class="strength-item__icon">02 · Execution</div>
            <div class="strength-item__title">End-to-End 실행</div>
            <p class="strength-item__desc">기획→개발 협업→QA→배포→운영 전 단계를 혼자서도 끌고 갈 수 있는 실행력. 사내벤처 0→1 경험이 증명합니다.</p>
          </div>
          <div class="strength-item">
            <div class="strength-item__icon">03 · Domain</div>
            <div class="strength-item__title">도메인 적응력</div>
            <p class="strength-item__desc">항공 예약 B2B SaaS, 팬덤 C2C 플랫폼, 콘텐츠 세일즈, IP 라이선스까지 다양한 도메인 경험을 보유하고 있습니다.</p>
          </div>
        </div>
        <div style="margin-top: var(--sp-8)">
          <div class="skills-grid" style="justify-content:center;">
            ${['Notion', 'JIRA', 'Figma', 'Confluence', 'Python', 'R', 'SQL', 'Google Analytics', 'HTML', 'Excel', 'Slack'].map(s => `<span class="skill-chip">${s}</span>`).join('')}
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ 03. 경력 사항 (상세 프로젝트 포함) ═══ -->
    <section class="bx--section bx--section--alt" id="experience">
      <div class="bx--section__inner">
        <h2 class="section-heading">경력 사항</h2>
        <div class="exp-detail-list">

          <!-- ── 타이드스퀘어 ── -->
          <div class="exp-block collapsed" data-company="tidesquare">
            <div class="exp-block__header">
              <div>
                <div class="exp-block__title">Product Manager</div>
                <div class="exp-block__company">(주) 타이드스퀘어</div>
                <div class="exp-block__period">2024.10 – 재직 중</div>
              </div>
              <button class="exp-block__toggle" aria-expanded="false" onclick="this.setAttribute('aria-expanded', this.getAttribute('aria-expanded')==='true'?'false':'true'); this.closest('.exp-block').classList.toggle('collapsed')">
                <span class="exp-block__toggle-text">펼치기</span> ‹
              </button>
            </div>
            <div class="exp-block__body">
              <div class="exp-project">
                <h4 class="exp-project__title">항공 Aggregator 플랫폼 – 국내 최초 NDC Aggregator 플랫폼 Halo 내 운영 대시보드 LUNA 기획 총괄</h4>
                <ul class="exp-project__list">
                  <li>API 서비스 및 고객 니즈 분석을 통한 프로젝트 범위 선정 및 요구사항 수립</li>
                  <li>예약/취소/환불/변경 등 항공권 사후처리 프로세스 시스템화</li>
                  <li>운영 효율화 기능 설계</li>
                  <li class="exp-project__highlight">✨ 예약 핸들링 커버리지 40% → 90% 확대, 신규 파트너 7개사 연동 (생산성 2.5배)</li>
                </ul>
              </div>
              <div class="exp-project">
                <h4 class="exp-project__title">항공 Aggregator 플랫폼 – 항공사 개발환경 셋업 및 UAT 진행</h4>
                <ul class="exp-project__list">
                  <li>Use Case/Work Flow 및 XML Logs 검증 및 시뮬레이션</li>
                </ul>
              </div>
              <div class="exp-project">
                <h4 class="exp-project__title">항공 Aggregator 플랫폼 – 운영</h4>
                <ul class="exp-project__list">
                  <li>온라인 여행사 및 커머스 사업자(스카이스캐너, 카약, 네이버) 서비스 제공을 위한 항공사별 Use Case/Work Flow 수립</li>
                  <li>🤝 스프린트 운영으로 기획, 개발, 디자인, 사업 등 유관부서와 협력 리딩 (스프린트 계획, 요구사항 정의, 테스트 기획)</li>
                </ul>
              </div>
              <div class="exp-project">
                <h4 class="exp-project__title">다국어(i18n) 시스템 + 텍스트 관리 자동화</h4>
                <ul class="exp-project__list">
                  <li>다국어 운영 체계 설계 및 AI 기반 번역 자동화 도입</li>
                  <li class="exp-project__highlight">✨ Human Error 약 30% 저감</li>
                </ul>
              </div>
              <div class="exp-project">
                <h4 class="exp-project__title">RBAC + User LifeCycle + PCI-DSS 대응</h4>
                <ul class="exp-project__list">
                  <li>3단계 RBAC, 5단계 LifeCycle, MFA · 세션 정책 도입</li>
                  <li>PCI-DSS 보안 인증 대응 기획</li>
                </ul>
              </div>
              <div class="exp-project">
                <h4 class="exp-project__title">AI 기반 항공 API 연동 자동화 & 화이트레이블 PoC</h4>
                <ul class="exp-project__list">
                  <li>신규 항공사 온보딩 리드타임 3개월→2주 단축 목표 PoC</li>
                  <li>RAG 200+ Edge Case 구조화</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- ── CJ ENM 크낵 ── -->
          <div class="exp-block collapsed" data-company="cjenm-cnack">
            <div class="exp-block__header">
              <div>
                <div class="exp-block__title">신사업 PO</div>
                <div class="exp-block__company">씨제이이엔엠 (CJ ENM) · 크낵</div>
                <div class="exp-block__period">2022.04 – 2024.10 · 2년 7개월</div>
              </div>
              <button class="exp-block__toggle" aria-expanded="false" onclick="this.setAttribute('aria-expanded', this.getAttribute('aria-expanded')==='true'?'false':'true'); this.closest('.exp-block').classList.toggle('collapsed')">
                <span class="exp-block__toggle-text">펼치기</span> ‹
              </button>
            </div>
            <div class="exp-block__body">
              <div class="exp-project">
                <h4 class="exp-project__title">크낵 런칭 (0→1): MVP · 베타 · 사업화</h4>
                <ul class="exp-project__list">
                  <li>팬덤 시장의 저작권 Pain Point 발견 → C2C 팬메이드 굿즈 거래 플랫폼 기획 · 런칭</li>
                  <li>정량 설문 200명, 정성 인터뷰 30건 기반 MVP 설계</li>
                  <li class="exp-project__highlight">✨ 크리에이터 248명, 거래액 5.6억, 구매전환율 46%</li>
                </ul>
              </div>
              <div class="exp-project">
                <h4 class="exp-project__title">크낵 고도화 (1→N)</h4>
                <ul class="exp-project__list">
                  <li>구매 퍼널 분석 기반 UX 개선, 판매자 등록 프로세스 최적화</li>
                  <li class="exp-project__highlight">✨ 구매 전환율 41% 개선, 판매자 등록율 84% 개선</li>
                </ul>
              </div>
              <div class="exp-project">
                <h4 class="exp-project__title">사업 관리 · 운영 + 정산/재무 프로세스</h4>
                <ul class="exp-project__list">
                  <li>사내벤처 3개년 시뮬레이션, 예산 수립 · 집행</li>
                  <li>재무회계 · 정산 프로세스 확보</li>
                </ul>
              </div>
              <div class="exp-project">
                <h4 class="exp-project__title">사업 제휴 · IP 라이선스 소싱</h4>
                <ul class="exp-project__list">
                  <li>CJ ENM 내 33개 IP 권리 확보</li>
                  <li class="exp-project__highlight">✨ &lt;선재업고튀어&gt; 팝업 1.5억 달성</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- ── CJ ENM 콘텐츠 ── -->
          <div class="exp-block collapsed" data-company="cjenm-content">
            <div class="exp-block__header">
              <div>
                <div class="exp-block__title">Contents Acquisition</div>
                <div class="exp-block__company">씨제이이엔엠 (CJ ENM) · 콘텐츠세일즈</div>
                <div class="exp-block__period">2020.01 – 2022.04 · 2년 4개월</div>
              </div>
              <button class="exp-block__toggle" aria-expanded="false" onclick="this.setAttribute('aria-expanded', this.getAttribute('aria-expanded')==='true'?'false':'true'); this.closest('.exp-block').classList.toggle('collapsed')">
                <span class="exp-block__toggle-text">펼치기</span> ‹
              </button>
            </div>
            <div class="exp-block__body">
              <div class="exp-project">
                <h4 class="exp-project__title">애니메이션 해외 부가판권 구매 및 거래처 관리</h4>
                <ul class="exp-project__list">
                  <li>짱구 · 요괴워치 · 명탐정코난 등 TV/극장판권, 블록딜, 홀드백 관리</li>
                  <li>BCWW · MIPCOM 등 글로벌 마켓 참가 경험</li>
                </ul>
              </div>
              <div class="exp-project">
                <h4 class="exp-project__title">VOD 유통 보조 및 아마존 프라임 로컬라이징 납품</h4>
                <ul class="exp-project__list">
                  <li>짱구 더빙 · 자막 납품, TVING 구매 대행, VOD 로열티 정산</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- ── 더핑크퐁컴퍼니 ── -->
          <div class="exp-block collapsed" data-company="pinkfong">
            <div class="exp-block__header">
              <div>
                <div class="exp-block__title">인턴 / IP라이선스</div>
                <div class="exp-block__company">더핑크퐁컴퍼니</div>
                <div class="exp-block__period">2019.03 – 2019.06 · 4개월</div>
              </div>
              <button class="exp-block__toggle" aria-expanded="false" onclick="this.setAttribute('aria-expanded', this.getAttribute('aria-expanded')==='true'?'false':'true'); this.closest('.exp-block').classList.toggle('collapsed')">
                <span class="exp-block__toggle-text">펼치기</span> ‹
              </button>
            </div>
            <div class="exp-block__body">
              <div class="exp-project">
                <h4 class="exp-project__title">IP 라이선스 사업</h4>
                <ul class="exp-project__list">
                  <li>핑크퐁 · 아기상어 매출 분석, 신규 라이선시 발굴 · 계약</li>
                  <li>로열티 정산 보조</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ═══ 04. 주요 프로젝트 ═══ -->
    <section class="featured-section" id="projects">
      <div class="featured-section__inner">
        <div class="featured-header">
          <h2 class="featured-header__title">주요 프로젝트</h2>
          <a href="#/projects" class="bx--btn bx--btn--ghost bx--btn--sm">전체 프로젝트 보기 →</a>
        </div>
        <div class="card-grid">
          ${featuredProjects.map(p => projectCard(p)).join('')}
        </div>
        ${otherProjects.length > 0 ? `
        <div style="margin-top: var(--sp-10)">
          <div class="featured-header">
            <h2 class="featured-header__title" style="font-size:0.9375rem; color:var(--muted-foreground)">기타 프로젝트</h2>
          </div>
          <div class="card-grid">
            ${otherProjects.map(p => projectCard(p)).join('')}
          </div>
        </div>` : ''}
      </div>
    </section>

    <!-- ═══ 05. 학력 / 자격증 ═══ -->
    <section class="bx--section bx--section--alt" id="education">
      <div class="bx--section__inner">
        <h2 class="section-heading">학력 · 자격증</h2>
        <div class="experience-list">
          <div class="experience-item">
            <div class="experience-item__header">
              <div>
                <div class="experience-item__company">경희대학교</div>
                <div class="experience-item__role">무역학과 (GPA 3.75/4.5)</div>
              </div>
              <div class="experience-item__period">2014.03 – 2020.02</div>
            </div>
          </div>
          <div class="experience-item">
            <div class="experience-item__header">
              <div>
                <div class="experience-item__company">한국방송통신대학교</div>
                <div class="experience-item__role">통계데이터과학과</div>
              </div>
              <div class="experience-item__period">2021.08 – 2025.08</div>
            </div>
          </div>
        </div>
        <div style="margin-top: var(--sp-8)">
          <div class="section-heading" style="font-size:0.9375rem">자격증 · 수상</div>
          <ul style="display:flex;flex-direction:column;gap:var(--sp-2);font-size:0.875rem;color:var(--muted-foreground);">
            <li style="padding-left:var(--sp-4);position:relative;"><span style="position:absolute;left:0">·</span>ADsP 데이터분석준전문가 (2019)</li>
            <li style="padding-left:var(--sp-4);position:relative;"><span style="position:absolute;left:0">·</span>사회조사분석사 2급 (2019)</li>
            <li style="padding-left:var(--sp-4);position:relative;"><span style="position:absolute;left:0">·</span>SQLD (2019)</li>
            <li style="padding-left:var(--sp-4);position:relative;"><span style="position:absolute;left:0">·</span>2019 빅데이터 콘테스트 Innovation 분야 의장상</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ═══ 06. 연락처 ═══ -->
    <section class="bx--section" id="contact-section">
      <div class="bx--section__inner" style="max-width:560px;">
        <h2 class="section-heading">연락</h2>
        <p style="color:var(--muted-foreground);margin-bottom:var(--sp-6);font-size:0.9375rem;">
          채용 문의, 협업 제안, 커피챗 모두 환영합니다.
        </p>
        <div class="contact-links">
          <a href="mailto:yoonjudith1606@gmail.com" class="contact-link-item">
            <div>
              <div class="contact-link-item__label">Email</div>
              <div class="contact-link-item__value">yoonjudith1606@gmail.com</div>
            </div>
            <span class="contact-link-item__arrow">↗</span>
          </a>
          <a href="https://drive.google.com/file/d/1dsqOU7L-ykm4e9RFki3ZGQYS5gdv7Zux/view" target="_blank" rel="noopener noreferrer" class="contact-link-item">
            <div>
              <div class="contact-link-item__label">Portfolio</div>
              <div class="contact-link-item__value">Google Drive ↗</div>
            </div>
            <span class="contact-link-item__arrow">↗</span>
          </a>
          <a href="https://www.cnack.kr" target="_blank" rel="noopener noreferrer" class="contact-link-item">
            <div>
              <div class="contact-link-item__label">크낵 (서비스)</div>
              <div class="contact-link-item__value">cnack.kr</div>
            </div>
            <span class="contact-link-item__arrow">↗</span>
          </a>
        </div>
      </div>
    </section>
  `;

  // 접기/펼치기 텍스트 업데이트
  container.querySelectorAll('.exp-block__toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const label = btn.querySelector('.exp-block__toggle-text');
      label.textContent = btn.getAttribute('aria-expanded') === 'true' ? '접기' : '펼치기';
    });
  });
}

// ── 프로젝트 카드 ──────────────────────────────────────────
function projectCard(p) {
  return `
    <a href="#/projects/${p.slug}" class="bx--tile">
      <span class="tile-arrow">↗</span>
      <div class="tile-company">${p.company}</div>
      <div class="tile-title">${p.title}</div>
      <p class="tile-tldr">${p.tldr}</p>
      <div class="tile-footer">
        <span class="tile-period">${p.period}</span>
        <div></div>
      </div>
    </a>`;
}
