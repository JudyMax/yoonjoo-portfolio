// =============================================================
// app.js — Hash Router + 전역 네비게이션 관리
// =============================================================
import { renderHome } from './views/home.js';
import { renderProjects } from './views/projects.js';
import { renderDetail } from './views/detail.js';
import { renderResume } from './views/resume.js';
import { renderAbout } from './views/about.js';
import { renderContact } from './views/contact.js';

const app = document.getElementById('app');

// ── 라우팅 테이블 ─────────────────────────────────────────────
const routes = [
    { pattern: /^#\/$/, render: () => renderHome(app) },
    { pattern: /^#\/projects$/, render: () => renderProjects(app) },
    { pattern: /^#\/projects\/(.+)$/, render: (m) => renderDetail(app, m[1]) },
    { pattern: /^#\/resume$/, render: () => renderResume(app) },
    { pattern: /^#\/about$/, render: () => { location.hash = '#/'; } },  // 홈으로 리다이렉트
    { pattern: /^#\/contact$/, render: () => renderContact(app) },
];

// ── 라우터 ────────────────────────────────────────────────────
function route() {
    const hash = location.hash || '#/';
    let matched = false;

    for (const r of routes) {
        const m = hash.match(r.pattern);
        if (m) {
            r.render(m);
            matched = true;
            break;
        }
    }

    if (!matched) {
        app.innerHTML = `
      <div class="empty-state" style="padding:var(--space-13) var(--space-05)">
        <div class="empty-state__icon">404</div>
        <p class="empty-state__title">페이지를 찾을 수 없습니다</p>
        <a href="#/" class="bx--btn bx--btn--primary bx--btn--sm" style="margin-top:var(--space-05)">홈으로</a>
      </div>`;
    }

    updateNav(hash);
    window.scrollTo({ top: 0, behavior: 'instant' });
}

// ── 네비게이션 활성 상태 ───────────────────────────────────────
function updateNav(hash) {
    document.querySelectorAll('[data-nav]').forEach(el => {
        el.classList.remove('active');
    });

    const navMap = {
        home: '#/',
        projects: '#/projects',
        resume: '#/resume',
        contact: '#/contact',
    };

    for (const [key, prefix] of Object.entries(navMap)) {
        if (hash === prefix || (key === 'projects' && hash.startsWith('#/projects'))) {
            document.querySelector(`[data-nav="${key}"]`)?.classList.add('active');
            break;
        }
    }
}

// ── 모바일 햄버거 ─────────────────────────────────────────────
function initMobileNav() {
    const toggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    const nav = navLinks?.closest('.bx--header__nav');

    toggle?.addEventListener('click', () => {
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!expanded));
        nav?.classList.toggle('open', !expanded);
    });

    // 링크 클릭 시 메뉴 닫기
    document.querySelectorAll('.bx--header__menu-item').forEach(el => {
        el.addEventListener('click', () => {
            toggle?.setAttribute('aria-expanded', 'false');
            nav?.classList.remove('open');
        });
    });
}

// ── 초기화 ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    initMobileNav();
    // hash가 없으면 기본 #/ 로
    if (!location.hash) {
        history.replaceState(null, '', '#/');
    }
    route();
});

window.addEventListener('hashchange', route);
