import type { Metadata } from 'next';
import { Roboto, Sora, Montserrat, Roboto_Slab } from 'next/font/google';
import Script from 'next/script';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });
const sora = Sora({ subsets: ['latin'], weight: ['400', '700'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });
const slab = Roboto_Slab({ subsets: ['latin'], weight: ['600'] });

export const metadata: Metadata = {
  title: 'Aplicação Concluída – César Carvalho',
  description: 'Sua aplicação foi recebida. Assista ao recado e à aula especial enquanto analisamos.',
  robots: { index: false, follow: false },
};

const YOUTUBE_ID = 'QPIwJ-tSfaU';
const GTM_ID = 'GTM-KNKPHVXX';
const META_PIXEL_ID = '1049672798054478';

const WHATSAPP_URL =
  'https://wa.me/5511913205982?text=' +
  encodeURIComponent(
    'Gostaria de mais informações sobre o Programa de Acompanhamento Comercial com César Carvalho.',
  );

// Depoimentos: coloque os arquivos em /public/images/depoimentos/ e troque
// cada null pelo caminho (ex.: '/images/depoimentos/depoimento-1.jpg').
const DEPOIMENTOS: (string | null)[] = [null, null, null, null, null, null];

const goldText =
  'bg-[radial-gradient(at_0%_0%,#C6985B,#AD7F5C)] bg-clip-text text-transparent';

const greenButton =
  'inline-block rounded-[5px] bg-[radial-gradient(at_0%_0%,#1FB436_6%,#135418_100%)] px-6 py-4 text-center font-bold uppercase text-white shadow-lg transition hover:brightness-110';

function YouTubeEmbed({ title }: { title: string }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden bg-black">
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?rel=0&modestbranding=1&playsinline=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

export default function AplicacaoConcluida() {
  return (
    <main className="min-h-screen bg-white text-[#141414]">
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

      {/* Meta Pixel — PageView + Lead (página de obrigado pós-conversão) */}
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
fbq('track', 'PageView');
fbq('track', 'Lead');`}
      </Script>
      {/* noscript como HTML bruto: o React não cria o <img> no cliente, evitando Lead em dobro */}
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<img height="1" width="1" style="display:none" alt="" src="https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=Lead&noscript=1" />`,
        }}
      />

      {/* Topo: mensagem de confirmação */}
      <section className={`${roboto.className} bg-white px-4 py-10`}>
        <div className="mx-auto max-w-[1120px] space-y-4 text-lg leading-7">
          <p className="text-2xl font-bold">Parabéns por ter chegado até aqui!</p>
          <p className="text-2xl font-bold">
            A análise da sua aplicação acontecerá nas próximas 24 a 72 horas, caso você seja
            aprovado nós enviaremos uma mensagem.
          </p>
          <p className="text-base italic text-[#444]">
            (IMPORTANTE: Seja rápido para responder o nosso time, as vagas são escassas e ultra
            concorridas)
          </p>
          <p className="text-lg">
            Enquanto isso, <strong>tenho um Recado</strong>, e logo abaixo uma{' '}
            <strong>Masterclass Especial</strong> que resolvi liberar como um{' '}
            <strong className="underline">Presente</strong>
          </p>
        </div>
      </section>

      {/* Recado + botão WhatsApp */}
      <section className={`${sora.className} bg-black px-4 py-8 text-white`}>
        <div className="mx-auto flex max-w-[740px] flex-col items-center text-center">
          <div className="w-full max-w-[640px]">
            <YouTubeEmbed title="Recado do César Carvalho" />
          </div>
          <p className="mt-6 max-w-[560px] text-lg">
            Se você é como eu e gosta de velocidade, <strong>você pode TENTAR pular a fila de
            atendimento.</strong>
          </p>
          <p className="mt-4 max-w-[600px] text-lg">
            Para acelerar o processo da sua aplicação, você pode{' '}
            <span className="underline">tentar pular a fila</span> de atendimento, clicando no
            botão abaixo
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${montserrat.className} ${greenButton} mt-6 w-full max-w-[700px] text-lg md:text-2xl`}
          >
            Clique aqui para ir direto para o WhatsApp
          </a>
        </div>
      </section>

      {/* Masterclass */}
      <section
        className={`${sora.className} px-4 py-12 text-white`}
        style={{
          backgroundColor: '#061622',
          backgroundImage:
            'radial-gradient(ellipse at 50% 0%, rgba(198,152,91,0.18), transparent 60%), radial-gradient(ellipse at 100% 100%, rgba(173,127,92,0.12), transparent 50%)',
        }}
      >
        <div className="mx-auto max-w-[1124px] text-center">
          <p className="text-lg">Enquanto isso, Assista:</p>
          <h2 className={`${slab.className} ${goldText} mt-4 text-2xl leading-tight md:text-3xl`}>
            3 dicas infalíveis para você fechar uma venda ainda hoje!
          </h2>
          <div className="mx-auto mt-6 w-full max-w-[1000px]">
            <YouTubeEmbed title="3 dicas infalíveis para você fechar uma venda ainda hoje" />
          </div>
        </div>
      </section>

      {/* Resultados / depoimentos */}
      <section
        className="px-4 py-16 text-white"
        style={{
          backgroundColor: '#061622',
          backgroundImage:
            'radial-gradient(ellipse at 0% 0%, rgba(198,152,91,0.10), transparent 55%), radial-gradient(ellipse at 100% 60%, rgba(198,152,91,0.10), transparent 50%)',
        }}
      >
        <div className="mx-auto max-w-[1066px] rounded-xl border border-[#C6985B]/25 px-4 py-10 md:px-8">
          <h2 className={`${slab.className} ${goldText} text-center text-2xl leading-tight md:text-3xl`}>
            Resultados gerados pelo Programa de Acompanhamento Comercial com César Carvalho.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
            {DEPOIMENTOS.map((src, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-lg border border-white/10 bg-black/40 p-3"
              >
                {src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={src} alt={`Depoimento ${i + 1}`} className="h-auto w-full rounded" />
                ) : (
                  <div className="flex aspect-[3/5] w-full items-center justify-center rounded border-2 border-dashed border-white/15 text-sm text-white/30">
                    Depoimento {i + 1}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conheça seu mentor */}
      <section
        className="px-4 py-16"
        style={{ backgroundImage: 'radial-gradient(at 0% 100%, #A0A0A0 0%, #FFFFFF 50%)' }}
      >
        <div className="mx-auto grid max-w-[1120px] items-center gap-10 md:grid-cols-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/cesar-dobra3.png"
            alt="César Carvalho"
            className="mx-auto w-full max-w-[508px] rounded-[10px] shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
          />
          <div className={`${montserrat.className} text-lg leading-[1.6] md:text-xl text-black`}>
            <h2 className={`${slab.className} ${goldText} text-3xl`}>CONHEÇA SEU MENTOR:</h2>
            <div className="mt-6 space-y-4">
              <p>
                <strong>Meu nome é César Carvalho.</strong> Sou estrategista comercial, mentor e
                formador de líderes. Ao longo da minha trajetória, trabalhei com empresários e
                equipes que tinham potencial real mas enfrentavam um problema em comum:{' '}
                <strong>nenhum método para transformar esse potencial em resultado consistente.</strong>
              </p>
              <p>Meu trabalho não é vender soluções prontas.</p>
              <p>
                É enxergar o que está travando sua operação, reorganizar as bases, construir um
                processo comercial funcional e acompanhar a evolução com precisão.
              </p>
              <p>
                Meu trabalho une ciência comportamental, neurovendas e liderança estratégica em uma{' '}
                <strong>metodologia que respeita quem você é e onde você quer chegar.</strong>
              </p>
              <p className="border-l-2 border-[#C6985B] pl-4 italic">
                &quot;Vender é um ato de consciência. Liderar é despertar grandeza em outros. Minha
                missão é guiar empresários a expandirem seus resultados através da performance, da
                verdade e da estrutura.&quot;
              </p>
            </div>
            <div className="mt-8 text-center">
              <a
                href="https://www.instagram.com/cesarcarvalho7/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${greenButton} text-lg normal-case md:text-2xl`}
              >
                Ir para o Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className={`${sora.className} bg-black px-4 py-10 text-center text-base leading-7 text-white md:text-lg`}>
        <div className="mx-auto flex max-w-[740px] flex-col items-center gap-4">
          <p>
            Esta apresentação fornecerá etapas práticas para escalar a sua empresa. Ao final da
            sessão estratégica, será oferecida uma oportunidade de aprender mais.
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo-nome-branco.png"
            alt="César Carvalho"
            className="h-24 w-auto object-contain"
          />
          <p>© {new Date().getFullYear()} – Todos os direitos reservados</p>
        </div>
      </footer>
    </main>
  );
}
