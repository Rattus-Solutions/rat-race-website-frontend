import Head from 'next/head';

interface SiteHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  imageUrl?: string;
  canonical?: string;
}

const SiteHead: React.FC<SiteHeadProps> = ({
  title = 'Rat Race SMP',
  description = 'Official website for the Rat Race SMP Minecraft server.',
  keywords = [
    'Rat Race SMP',
    'Minecraft',
    'Minecraft Server',
    'survival multiplayer',
    'gaming community',
  ],
  imageUrl = '/images/rat-race-smp-logo.png',
  canonical = 'https://ratrace.wtf',
}) => {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      {/*<link rel="apple-touch-icon" href="/apple-touch-icon.png" />*/}

      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imageUrl} />

      {/* Viewport and Rendering */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      {/* Performance and Compatibility */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Robots and Crawling */}
      <meta name="robots" content="index, follow" />

      {/* Theme and Color */}
      <meta name="theme-color" content="#000" />
      <meta name="msapplication-TileColor" content="#fff" />
    </Head>
  );
};

export default SiteHead;
