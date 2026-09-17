import React, { useState } from 'react';
import { X, CheckCircle, FileText, Upload, Send, ShieldCheck, Sun, ArrowRight, Phone } from 'lucide-react';

export default function ProposalModal({ isOpen, onClose, initialData }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    email: '',
    fileAttached: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const data = initialData || {
    billValue: 850,
    propertyType: 'Residencial',
    savingsMonthly: 790,
    savings25Years: 237000,
    panelsCount: 8,
    paybackYears: 3.2,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = `Olá! Meu nome é *${formData.name || 'Cliente'}* de *${formData.city || 'São Paulo'}*.\n\nFiz uma simulação no site da Onda Verde:\n- Conta Atual: R$ ${data.billValue}/mês\n- Economia Estimada: R$ ${data.savingsMonthly}/mês\n- Painéis Sugeridos: ${data.panelsCount} unidades\n- Payback Estimado: ${data.paybackYears} anos\n\nGostaria de receber a proposta técnica oficial!`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/5511999999999?text=${encoded}`, '_blank');
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="glass-card modal-container" onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose}>
          <X size={22} />
        </button>

        {!submitted ? (
          <div className="modal-body">
            
            {/* Header */}
            <div className="modal-header">
              <div className="badge-eco">
                <Sun size={14} />
                <span>PROPOSTA PERSONALIZADA GRÁTIS</span>
              </div>
              <h2>Sua Proposta Técnica está Pronta!</h2>
              <p>Preencha os dados abaixo para receber o estudo de viabilidade completo em PDF e falar com nosso engenheiro solar.</p>
            </div>

            {/* Quick Summary Pill */}
            <div className="modal-summary-card">
              <div className="summary-item">
                <span className="sum-label">Economia Mensal</span>
                <span className="sum-val text-gradient-green">R$ {data.savingsMonthly?.toLocaleString('pt-BR')}</span>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-item">
                <span className="sum-label">Painéis Recomendados</span>
                <span className="sum-val">{data.panelsCount} Unidades</span>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-item">
                <span className="sum-label">Retorno Estimado</span>
                <span className="sum-val">~{data.paybackYears} Anos</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-row">
                <div className="modal-field">
                  <label>Seu Nome Completo *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Roberto Silva"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="modal-field">
                  <label>WhatsApp / Celular *</label>
                  <input
                    type="tel"
                    required
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="modal-field">
                  <label>Cidade / Estado *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Campinas / SP"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  />
                </div>
                <div className="modal-field">
                  <label>E-mail para Envio da Proposta</label>
                  <input
                    type="email"
                    placeholder="seuemail@exemplo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              {/* Upload Dropzone Simulation */}
              <div className="modal-field">
                <label>Anexar Fatura de Energia (Opcional - Acelera o projeto)</label>
                <div 
                  className={`dropzone ${formData.fileAttached ? 'attached' : ''}`}
                  onClick={() => setFormData({ ...formData, fileAttached: true })}
                >
                  <Upload size={22} className={formData.fileAttached ? 'highlight-green' : ''} />
                  <span>
                    {formData.fileAttached 
                      ? '✓ Fatura_Energia_Anexada.pdf (Clique para trocar)' 
                      : 'Clique para anexar foto ou PDF da sua conta de luz'}
                  </span>
                </div>
              </div>

              <div className="modal-actions">
                <button type="submit" className="btn-primary w-full btn-modal-submit">
                  <span>Gerar Minha Proposta Técnica Gratuitamente</span>
                  <Send size={18} />
                </button>
              </div>

              <div className="modal-security-note">
                <ShieldCheck size={16} className="highlight-green" />
                <span>Seus dados estão 100% seguros (LGPD). Não enviamos SPAM.</span>
              </div>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="modal-success-screen">
            <div className="success-icon-box">
              <CheckCircle size={60} className="highlight-green" />
            </div>
            <h2>Proposta Gerada com Sucesso!</h2>
            <p>
              Obrigado, <strong>{formData.name}</strong>! Nosso sistema gerou o relatório inicial de economia para a sua região em <strong>{formData.city}</strong>.
            </p>

            <div className="success-action-box">
              <p className="sub-text">Para receber o PDF completo imediatamente no seu WhatsApp com a lista de componentes:</p>
              <button className="btn-primary btn-whatsapp btn-hero w-full" onClick={handleWhatsAppRedirect}>
                <Phone size={20} />
                <span>Abrir Proposta no WhatsApp Agora</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}

      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(4, 10, 18, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-container {
          width: 100%;
          max-width: 680px;
          background: rgba(10, 25, 47, 0.95);
          border: 1px solid var(--border-glass-bright);
          border-radius: 24px;
          padding: 36px;
          position: relative;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 25px 50px rgba(0,0,0,0.8), 0 0 30px rgba(0, 230, 118, 0.2);
        }

        .modal-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.08);
          border: none;
          color: var(--text-muted);
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }

        .modal-close-btn:hover {
          background: rgba(239, 68, 68, 0.2);
          color: #EF4444;
        }

        .modal-header h2 {
          font-size: 1.8rem;
          margin: 10px 0 6px 0;
        }

        .modal-header p {
          font-size: 0.95rem;
          color: var(--text-muted);
        }

        .modal-summary-card {
          background: linear-gradient(135deg, rgba(0, 230, 118, 0.1) 0%, rgba(0, 180, 216, 0.05) 100%);
          border: 1px solid var(--border-glass);
          border-radius: 14px;
          padding: 16px;
          margin: 20px 0;
          display: flex;
          justify-content: space-around;
          align-items: center;
          text-align: center;
        }

        .summary-item {
          display: flex;
          flex-direction: column;
        }

        .sum-label {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .sum-val {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.2rem;
        }

        .summary-divider {
          width: 1px;
          height: 30px;
          background: var(--border-glass);
        }

        .modal-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .modal-field label {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-muted);
          margin-bottom: 6px;
        }

        .modal-field input {
          width: 100%;
          padding: 12px 14px;
          background: rgba(7, 15, 24, 0.8);
          border: 1px solid var(--border-glass);
          border-radius: 10px;
          color: var(--text-main);
          font-size: 0.95rem;
          outline: none;
        }

        .modal-field input:focus {
          border-color: var(--green-primary);
        }

        .dropzone {
          border: 2px dashed var(--border-glass);
          background: rgba(255, 255, 255, 0.02);
          border-radius: 12px;
          padding: 16px;
          text-align: center;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 0.85rem;
          color: var(--text-muted);
          transition: all 0.25s;
        }

        .dropzone:hover {
          border-color: var(--green-primary);
          background: rgba(0, 230, 118, 0.05);
        }

        .dropzone.attached {
          border-color: var(--green-primary);
          background: rgba(0, 230, 118, 0.1);
          color: var(--green-primary);
          font-weight: 600;
        }

        .btn-modal-submit {
          padding: 16px;
          font-size: 1rem;
        }

        .modal-security-note {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-top: 10px;
        }

        /* Success screen */
        .modal-success-screen {
          text-align: center;
          padding: 20px 0;
        }

        .success-icon-box {
          margin-bottom: 16px;
          animation: pulseGlow 2s infinite alternate;
        }

        .modal-success-screen h2 {
          font-size: 2rem;
          margin-bottom: 10px;
        }

        .modal-success-screen p {
          color: var(--text-muted);
          margin-bottom: 24px;
        }

        .success-action-box {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: 16px;
          padding: 20px;
        }

        .sub-text {
          font-size: 0.9rem;
          color: var(--text-main);
          margin-bottom: 14px;
        }

        @media (max-width: 640px) {
          .form-row {
            grid-template-columns: 1fr;
          }
          .modal-container {
            padding: 24px;
          }
        }
      `}</style>
    </div>
  );
}
