interface ImportMetaEnv {
  /** İletişim formunun WhatsApp numarası; yalnızca test için (bkz. .env.example, src/config/site.ts) */
  readonly PUBLIC_FORM_WHATSAPP?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
