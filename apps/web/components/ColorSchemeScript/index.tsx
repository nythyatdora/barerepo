const script = (defaultColorScheme = "light"): string => `
(function() {
	const colorScheme = localStorage.getItem("color-scheme");
	const light = window.matchMedia("(prefers-color-scheme: light)").matches;
	const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	
	if(colorScheme) {
		document.documentElement.classList.toggle('dark', colorScheme === 'dark');
	} else if(light) {
		document.documentElement.classList.toggle('dark', false);
		localStorage.setItem("color-scheme", "light");
	} else if(dark) {
		document.documentElement.classList.toggle('dark', true);
		localStorage.setItem("color-scheme", "dark");
	} else {
		document.documentElement.classList.toggle('dark', ${
      defaultColorScheme === "dark"
    });
		localStorage.setItem("color-scheme", "${defaultColorScheme}");
	}

  document.documentElement.classList.toggle("bg-dark", colorScheme === "dark");
})();
`;

function ColorSchemeScript(): JSX.Element {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: script(),
      }}
    />
  );
}

export { ColorSchemeScript };
