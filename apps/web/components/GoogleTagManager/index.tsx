import Script from "next/script";

function GoogleTagManager(props): JSX.Element {
  const { measurementId } = props;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${measurementId}');
        `}
      </Script>
    </>
  );
}

export { GoogleTagManager };
