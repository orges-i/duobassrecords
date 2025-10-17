import { motion } from 'motion/react';
import { Play, ExternalLink, Youtube } from 'lucide-react';
import { Button } from '../components/ui/button';

interface WorkProps {
  language: string;
}

const content = {
  al: {
    title: 'Puna Jonë',
    subtitle: 'Eksploro disa nga projektet tona më të fundit',
    bestWork: 'Eksploro disa nga projektet tona',
    viewChannel: 'Shiko Kanalin Tonë',
    watchOn: 'Shiko në YouTube'
  },
  en: {
    title: 'Our Work',
    subtitle: 'Explore some of our latest projects',
    bestWork: 'Explore some of our projects',
    viewChannel: 'View Our Channel',
    watchOn: 'Watch on YouTube'
  }
};

// Featured videos from DuoBass Records YouTube channel
const videos = [
  {
    id: 'RbigzLduO9o',
    title: 'Albina Kelmendi - Na qeli prap thana',
    thumbnail: 'https://i.ytimg.com/an_webp/RbigzLduO9o/mqdefault_6s.webp?du=3000&sqp=CLbKyscG&rs=AOn4CLCkYYHiU0MuV1O87Aa5pegJ7Vpzww',
    url: 'https://www.youtube.com/watch?v=RbigzLduO9o'
  },
  {
    id: 'GevDAS3vQ10',
    title: 'Dod Kalaj - Dashnia (Prod.Duo Bass Records)',
    thumbnail: 'https://i.ytimg.com/an_webp/GevDAS3vQ10/mqdefault_6s.webp?du=3000&sqp=CNHOyscG&rs=AOn4CLC_h6AOlakAb7fogvm9vJzU0E24OA',
    url: 'https://www.youtube.com/watch?v=GevDAS3vQ10'
  },
  {
    id: 'RLOtZ7D6N_I',
    title: 'Duo Bass Records - Mora fjale (Remix)',
    thumbnail: 'https://i.ytimg.com/an_webp/RLOtZ7D6N_I/mqdefault_6s.webp?du=3000&sqp=CNq-yscG&rs=AOn4CLAiYkjBWyGy_LMEbyJ9-BTaqgmeFw',
    url: 'https://www.youtube.com/watch?v=RLOtZ7D6N_I'
  },
  {
    id: 'ts0WzdGIGNA',
    title: 'Fatoni & Florioni & Atalanta Band - Qefe qefe kjo dynja',
    thumbnail: 'https://i.ytimg.com/an_webp/ts0WzdGIGNA/mqdefault_6s.webp?du=3000&sqp=CKDHyscG&rs=AOn4CLCMT9F2-VWC7Xyqc3N3BCm8KirYUg',
    url: 'https://www.youtube.com/watch?v=ts0WzdGIGNA'
  },
  {
    id: 'TFi9ru3X9eQ',
    title: 'Denik Prizreni - Do t\'kthehem ne Prishtine (COVER)',
    thumbnail: 'https://i.ytimg.com/vi/TFi9ru3X9eQ/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAz6FZwBSreJYgoS37nLR5zL232qA',
    url: 'https://www.youtube.com/watch?v=TFi9ru3X9eQ'
  },
  {
    id: 'EOrbGyR08V4',
    title: 'Linda Hakaj & Fatoni & Florioni - Atalanta Band - Potpuri',
    thumbnail: 'https://i.ytimg.com/an_webp/EOrbGyR08V4/mqdefault_6s.webp?du=3000&sqp=CPCvyscG&rs=AOn4CLBZnzcg6Y40lDienzZP7UPcIeW-fA',
    url: 'https://www.youtube.com/watch?v=EOrbGyR08V4'
  },
  {
    id: 'AYS43EpTHQI',
    title: 'Fatoni & Florioni - Atalanta Band & Koki Surle - Le t\'kallet Mahalla',
    thumbnail: 'https://i.ytimg.com/an_webp/AYS43EpTHQI/mqdefault_6s.webp?du=3000&sqp=CNy3yscG&rs=AOn4CLAO4thJjUNcxJ87eDGeQ-7n9lrQWQ',
    url: 'https://www.youtube.com/watch?v=AYS43EpTHQI'
  },
  {
    id: 'Hoki0Ylojcg',
    title: 'Faton Isufi & Dani - Marshi i Agimit (prod.Duo Bass Records)',
    thumbnail: 'https://i.ytimg.com/an_webp/Hoki0Ylojcg/mqdefault_6s.webp?du=3000&sqp=CIjKyscG&rs=AOn4CLDJ-VaBhyk79BdVigXR9tTy02I4Wg',
    url: 'https://www.youtube.com/watch?v=Hoki0Ylojcg'
  },
  {
    id: 'obbHRHIVd2I',
    title: 'Fatos Hoxha ft. Ramadan Krasniqi - Një letër (COVER)',
    thumbnail: 'https://i.ytimg.com/an_webp/obbHRHIVd2I/mqdefault_6s.webp?du=3000&sqp=COq4yscG&rs=AOn4CLDGsgbGACagaCPL2Fva3gbVpkWX1A',
    url: 'https://www.youtube.com/watch?v=obbHRHIVd2I'
  }
];

export default function Work({ language }: WorkProps) {
  const t = content[language as keyof typeof content];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-black">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-white mb-6">{t.title}</h1>
          <p className="text-white/60 max-w-2xl mx-auto mb-8">
            {t.subtitle}
          </p>
          <a 
            href="https://www.youtube.com/@duobassrecords/videos" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="bg-[#E4213E] hover:bg-[#c01b33] text-white group">
              <Youtube className="mr-2 h-5 w-5" />
              {t.viewChannel}
              <ExternalLink className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
          </a>
        </motion.div>

        {/* Best Work Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-white mb-8">{t.bestWork}</h2>
        </motion.div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <a 
                href={video.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative aspect-video bg-zinc-900 rounded-xl overflow-hidden mb-4 border border-white/5 group-hover:border-[#E4213E]/50 transition-all duration-300">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#E4213E] rounded-full flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform">
                      <Play className="h-8 w-8 text-white ml-1" fill="white" />
                    </div>
                  </div>
                </div>

                <h3 className="text-white group-hover:text-[#E4213E] transition-colors line-clamp-2 mb-2">
                  {video.title}
                </h3>
                
                <div className="flex items-center gap-2 text-sm text-white/40 group-hover:text-white/60 transition-colors">
                  <Youtube className="h-4 w-4" />
                  <span>{t.watchOn}</span>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA to YouTube Channel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-gradient-to-br from-zinc-900 to-black p-12 rounded-2xl border border-white/10">
            <Youtube className="h-16 w-16 text-[#E4213E] mx-auto mb-6" />
            <h3 className="text-white mb-4">
              {language === 'al' ? 'Shiko Më Shumë në YouTube' : 'Watch More on YouTube'}
            </h3>
            <p className="text-white/60 mb-8 max-w-md">
              {language === 'al' 
                ? 'Vizito kanalin tonë për të parë të gjitha projektet dhe produksionet tona'
                : 'Visit our channel to see all our projects and productions'}
            </p>
            <a 
              href="https://www.youtube.com/@duobassrecords/videos" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-[#E4213E] hover:bg-[#c01b33] text-white group">
                {t.viewChannel}
                <ExternalLink className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
