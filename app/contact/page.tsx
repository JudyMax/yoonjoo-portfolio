import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '연락 · 김윤주 PM 포트폴리오',
  description: '채용 문의, 협업 제안, 커피챗 모두 환영합니다.',
};

export default function ContactPage() {
  return (
    <section className="bx--section" id="contact-section">
      <div className="bx--section__inner" style={{ maxWidth: '560px' }}>
        <h1 className="section-heading">연락</h1>
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
          <a
            href="https://drive.google.com/file/d/1dsqOU7L-ykm4e9RFki3ZGQYS5gdv7Zux/view"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link-item"
          >
            <div>
              <div className="contact-link-item__label">Portfolio</div>
              <div className="contact-link-item__value">Google Drive ↗</div>
            </div>
            <span className="contact-link-item__arrow">↗</span>
          </a>
          <a
            href="https://www.cnack.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link-item"
          >
            <div>
              <div className="contact-link-item__label">크낵 (서비스)</div>
              <div className="contact-link-item__value">cnack.kr</div>
            </div>
            <span className="contact-link-item__arrow">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
