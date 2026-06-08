class FloatingButtons extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const emailHref = this.getAttribute('email') || 'rrhh@nycseguridad.com.ar';
    const waNumber = this.getAttribute('whatsapp') || '2974438169';
    const waText = encodeURIComponent(
      this.getAttribute('whatsapp-text') ||
      'Hola NYC. Me interesa obtener más información sobre sus servicios.'
    );

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          --color-primary: #e66108;
          --color-primary-hover: #eb751f;
          --color-text: #ffffff;
          --shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.15), 0 4px 6px -2px rgba(0, 0, 0, 0.08);
          display: block;
        }

        .container {
          position: fixed;
          bottom: 1rem;
          right: 1rem;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: flex-end;
        }

        .btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background-color: var(--color-primary);
          border-radius: 9999px;
          padding: 0.5rem 1rem 0.5rem 0.5rem;
          box-shadow: var(--shadow);
          text-decoration: none;
          transition: background-color 0.25s ease, transform 0.2s ease, box-shadow 0.2s ease;
          cursor: pointer;
          border: none;
          outline: none;
        }

        .btn:hover {
          background-color: var(--color-primary-hover);
          transform: translateY(-2px);
          box-shadow: 0 14px 20px -3px rgba(0, 0, 0, 0.18);
        }

        .btn:active {
          transform: translateY(0);
        }

        .btn:focus-visible {
          outline: 3px solid var(--color-primary);
          outline-offset: 3px;
        }

        .icon-wrapper {
          background-color: rgba(255, 255, 255, 0.2);
          border-radius: 9999px;
          padding: 0.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        svg {
          width: 1rem;
          height: 1rem;
          color: var(--color-text);
          display: block;
        }

        .label {
          color: var(--color-text);
          font-weight: 600;
          font-size: 0.75rem;
          white-space: nowrap;
          font-family: inherit;
        }

        @media (min-width: 768px) {
          svg {
            width: 1.5rem;
            height: 1.5rem;
          }

          .label {
            font-size: 0.875rem;
          }

          .container {
            bottom: 1.5rem;
            right: 1.5rem;
          }
        }
      </style>

      <div class="container">
        <a
          href="mailto:${emailHref}"
          class="btn"
          aria-label="Trabajá con Nosotros — enviar email"
        >
          <div class="icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              aria-hidden="true">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
            </svg>
          </div>
          <span class="label">Trabajá con Nosotros</span>
        </a>

        <a
          href="https://wa.me/${waNumber}?text=${waText}"
          class="btn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Solicitá tu presupuesto por WhatsApp"
        >
          <div class="icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              aria-hidden="true">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </div>
          <span class="label">Solicitá tu presupuesto</span>
        </a>
      </div>
    `;
  }
}

customElements.define('floating-buttons', FloatingButtons);