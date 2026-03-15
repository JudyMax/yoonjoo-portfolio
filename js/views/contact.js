// =============================================================
// contact.js — Contact 페이지
// =============================================================
export function renderContact(container) {
    container.innerHTML = `
    <div class="page-header">
      <div class="page-header__inner">
        <div class="page-header__eyebrow">Contact</div>
        <h1 class="page-header__title">연락하기</h1>
        <p class="page-header__subtitle">채용 문의, 협업 제안, 커피챗 모두 환영합니다.</p>
      </div>
    </div>

    <div class="contact-section">
      <div class="contact-links">
        <a href="mailto:yoonjudith1606@gmail.com" class="contact-link-item" id="emailLink">
          <div>
            <div class="contact-link-item__label">Email</div>
            <div class="contact-link-item__value">yoonjudith1606@gmail.com</div>
          </div>
          <span class="contact-link-item__arrow">↗</span>
        </a>
        <a href="https://drive.google.com/file/d/1dsqOU7L-ykm4e9RFki3ZGQYS5gdv7Zux/view" target="_blank" rel="noopener noreferrer" class="contact-link-item" id="portfolioLink">
          <div>
            <div class="contact-link-item__label">Portfolio (Google Drive)</div>
            <div class="contact-link-item__value">drive.google.com ↗</div>
          </div>
          <span class="contact-link-item__arrow">↗</span>
        </a>
        <a href="https://www.cnack.kr" target="_blank" rel="noopener noreferrer" class="contact-link-item" id="cnackLink">
          <div>
            <div class="contact-link-item__label">크낵 (서비스)</div>
            <div class="contact-link-item__value">cnack.kr</div>
          </div>
          <span class="contact-link-item__arrow">↗</span>
        </a>
        <a href="assets/김윤주_경력기술서(2026).pdf" download class="contact-link-item" id="resumeDownloadLink">
          <div>
            <div class="contact-link-item__label">Resume PDF</div>
            <div class="contact-link-item__value">김윤주_경력기술서(2026).pdf</div>
          </div>
          <span class="contact-link-item__arrow">↓</span>
        </a>
      </div>

      <p style="font-size:0.75rem;color:var(--cds-text-placeholder);margin-top:var(--space-06);font-family:'IBM Plex Mono',monospace;">
        © 2026 김윤주 · 모든 수치는 공개 가능한 범위 내에서 표기되었습니다.
      </p>
    </div>
  `;
}
