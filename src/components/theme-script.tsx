export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              var theme = localStorage.getItem('theme');
              if (!theme) theme = 'system';
              if (theme === 'system') {
                theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
              }
              document.documentElement.classList.remove('dark', 'light');
              document.documentElement.classList.add(theme);
            } catch(e) {}
          })();
        `,
      }}
    />
  );
}
