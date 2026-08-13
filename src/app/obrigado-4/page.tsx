import { ObrigadoTemplate, ObrigadoVideo } from '@/components/ObrigadoTemplate';

// Cole a URL do YouTube em cada "url" quando os vídeos forem escolhidos.
const videos: ObrigadoVideo[] = [
  { title: 'Vídeo 1' },
  { title: 'Vídeo 2' },
  { title: 'Vídeo 3' },
];

export default function Obrigado4Page() {
  return <ObrigadoTemplate videos={videos} />;
}
