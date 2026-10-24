interface ImportMetaEnv {
  /** Web3Forms erişim anahtarı — iletişim formu için (bkz. .env.example) */
  readonly PUBLIC_WEB3FORMS_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
