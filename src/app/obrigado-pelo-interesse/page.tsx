import type { Metadata } from 'next';
import { Inter, Crimson_Pro } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const crimson = Crimson_Pro({ subsets: ['latin'], weight: ['700'] });

export const metadata: Metadata = {
  title: 'Obrigado pelo interesse – César Carvalho',
  description: 'Assista ao vídeo e veja qual é o seu próximo passo.',
  robots: { index: false, follow: false },
};

const YOUTUBE_ID = 'QPIwJ-tSfaU';
const GTM_ID = 'GTM-KNKPHVXX';
const META_PIXEL_ID = '1049672798054478';
const WHATSAPP_GROUP_URL = 'https://chat.whatsapp.com/JnhDLWvJMXn3Dw7dQKvLcp';

export default function ObrigadoPeloInteresse() {
  return (
    <main className={`${inter.className} min-h-screen bg-[#FBFAF7] px-5 py-14 text-[#1B1F2A]`}>
      {/* Google Tag Manager */}
      <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      />

      {/* Meta Pixel — apenas PageView (sem Lead, para não contar desqualificados como conversão) */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`}
      </Script>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<img height="1" width="1" style="display:none" alt="" src="https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1" />`,
        }}
      />

      <div className="mx-auto flex max-w-[560px] flex-col items-center text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#A47E3E] md:text-base">
          César Carvalho
        </p>

        <h1 className={`${crimson.className} mt-8 text-[28px] leading-[1.2] md:text-[38px]`}>
          Pelo que você respondeu, entrar na consultoria agora não é o seu melhor caminho. Existe
          um passo antes.
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-[#5B6070] md:text-xl">
          Assiste o vídeo abaixo, que eu te explico qual é o seu próximo passo.
        </p>

        <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?rel=0&modestbranding=1&playsinline=1`}
            title="Qual é o seu próximo passo – César Carvalho"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        <a
          href={WHATSAPP_GROUP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 block w-full rounded-2xl bg-[#A47E3E] px-6 py-5 text-lg font-semibold text-white shadow-md transition hover:brightness-110 md:text-xl"
        >
          Entrar no grupo gratuito
        </a>

        <p className="mt-5 max-w-[460px] text-base leading-relaxed text-[#7A7F8C]">
          Todos os dias, insights de vendas, processo e previsibilidade. Para você chegar no ponto
          certo. Sem custo.
        </p>
      </div>
    </main>
  );
}
