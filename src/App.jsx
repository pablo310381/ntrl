import React from 'react';
import SakuraBackground from './SakuraBackground';
import './App.css';
import {
  FaTelegramPlane,
  FaSpotify,
  FaTiktok,
  FaInstagram,
  FaSteam,
  FaUserNinja,
  FaMusic,
  FaGamepad,
  FaQuoteLeft,
  FaFireAlt,
  FaHeadphonesAlt,
  FaHeart
} from 'react-icons/fa';

function App() {
  const socialLinks = [
    { id: 'tg', name: 'Telegram', url: 'https://t.me/Notreal_J_Pididi', icon: <FaTelegramPlane />, tag: 'Channel' },
    { id: 'spotify', name: 'Spotify', url: 'https://open.spotify.com/user/31ojp2gvrosvc57drvcthrks7lpy?si=q3cJz5eVRrChNUe-jrClYQ', icon: <FaSpotify />, tag: 'Music' },
    { id: 'tiktok', name: 'TikTok', url: 'https://www.tiktok.com/@notreal_j_0_0?_r=1&_t=ZS-97e9y8hQKHv', icon: <FaTiktok />, tag: 'Videos' },
    { id: 'instagram', name: 'Instagram', url: 'https://www.instagram.com/notreal_j0_0?igsh=NTUwaTlndHRyYzQz', icon: <FaInstagram />, tag: 'Photos' },
    { id: 'steam', name: 'Steam', url: 'https://steamcommunity.com/id/Notreal_J/', icon: <FaSteam />, tag: 'Gaming' },
    // { id: 'info', name: 'My info', url: 'https://t.me/Notreal_Info', icon: <FaUserNinja />, tag: 'About' },
  ];

  const musicList = [
    { artist: 'Linkin Park', song: 'Fighting Myself', genre: 'Nu-Metal' },
    { artist: 'Limp Bizkit', song: 'Dirty Rotten Bizkit', genre: 'Rapcore' },
    { artist: 'Papa Roach', song: 'See U In Hell', genre: 'Alt Rock' },
    { artist: 'Casey Edwards', song: 'Bury The Light', genre: 'OST / Metal' },
    { artist: 'CG5', song: 'Wrong Side Out', genre: 'Electronic' },
    { artist: 'Mick Gordon', song: 'The Only Thing They Fear Is You', genre: 'Industrial' },
    { artist: 'AC/DC', song: 'Shoot To Thrill', genre: 'Hard Rock' },
  ];

  const fandoms = [
    'Devil May Cry',
    'Undertale',
    'Underverse',
    'F1 🏎️',
    'Murder Drones',
    'Poppy Playtime',
  ];

  const kinns = [
    { fandom: 'Devil May Cry', characters: ['Nero', 'Vergil'] },
    { fandom: 'Undertale', characters: ['Sans', 'Chara'] },
    { fandom: 'Underverse', characters: ['Cross', 'Error'] },
    { fandom: 'F1', characters: ['Kimi Antonelli', 'Max Verstappen'] },
    { fandom: 'Murder Drones', characters: ['J'] },
    { fandom: 'Poppy Playtime', characters: ['Doctor Harley Sawyer'] },
  ];

  const facts = [
    'Я не умею переносить одиночество, я всегда хочу с кем-то общаться',
    'Я люблю группу Linkin Park',
    'Всегда рад новым знакомствам :3',
    'Начинаю заниматься косплеем и пока получается очень плохо ((',
    'Зависим от фанты и от чужого мнения...',
  ];

  return (
    <SakuraBackground>
      <div className="neo-card">
        {/* Шапка */}
        <header className="header-box">
          <div className="avatar-wrapper">
            <div className="avatar-ring" />
            <div className="avatar-inner">🌸</div>
            <span className="status-dot" title="Online" />
          </div>

          <h1 className="brand-name">Notreal_Info</h1>
          <p className="brand-tag">@Notreal_Info • Personal Space</p>

          <a
            href="https://t.me/Notreal_Info"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-tg-btn"
          >
            <div className="btn-glow" />
            <FaTelegramPlane className="btn-icon" />
            <span>Подписаться на канал</span>
          </a>
        </header>

        {/* Ссылки на соцсети */}
        <section className="glass-section">
          <div className="section-title">
            <span className="neon-bullet" />
            <h2>Социальные сети</h2>
          </div>
          <div className="social-grid">
            {socialLinks.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-pill social-${item.id}`}
              >
                <div className="shine-fx" />
                <span className="social-icon">{item.icon}</span>
                <div className="social-meta">
                  <span className="social-title">{item.name}</span>
                  <span className="social-badge">{item.tag}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Факты */}
        <section className="glass-section">
          <div className="section-title">
            <FaQuoteLeft className="header-icon" />
            <h2>Факты обо мне</h2>
          </div>
          <div className="facts-deck">
            {facts.map((fact, idx) => (
              <div key={idx} className="fact-item">
                <span className="fact-accent" />
                <p>{fact}</p>
              </div>
            ))}
          </div>
          <span className="hint-label">* пост может обновиться в любой момент</span>
        </section>

        {/* Музыка */}
        <section className="glass-section">
          <div className="section-title">
            <FaHeadphonesAlt className="header-icon" />
            <h2>Любимые треки</h2>
          </div>
          <div className="track-deck">
            {musicList.map((item, idx) => (
              <div key={idx} className="track-card">
                <div className="track-num">{(idx + 1).toString().padStart(2, '0')}</div>
                <div className="track-info">
                  <span className="track-name">{item.song}</span>
                  <span className="track-artist">{item.artist}</span>
                </div>
                <span className="genre-pill">{item.genre}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Фандомы & Кинны */}
        <section className="glass-section">
          <div className="section-title">
            <FaGamepad className="header-icon" />
            <h2>My Fandoms</h2>
          </div>
          <div className="tags-cloud">
            {fandoms.map((fan, idx) => (
              <span key={idx} className="fandom-tag">
                <FaFireAlt className="tag-icon" /> {fan}
              </span>
            ))}
          </div>

          <div className="section-title" style={{ marginTop: '24px' }}>
            <FaHeart className="header-icon pink-icon" />
            <h2>My Kinns</h2>
          </div>
          <div className="kinn-deck">
            {kinns.map((kinn, idx) => (
              <div key={idx} className="kinn-row">
                <span className="kinn-fandom">{kinn.fandom}</span>
                <div className="kinn-chars">
                  {kinn.characters.map((char, cIdx) => (
                    <span key={cIdx} className="char-badge">{char}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </SakuraBackground>
  );
}

export default App;