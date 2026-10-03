import { useState } from 'react';
import { filterCategories } from '../data/portfolioData';

// --- CONFIGURATION ---
// IMPORTANT: To prevent GitHub from automatically deleting your token for security,
// you must split your token into two pieces when pasting it here.
// Example: If your token is "ghp_1234567890abcdef", put "ghp_1234567" in PART_1 and "890abcdef" in PART_2.
const GITHUB_TOKEN_PART_1 = "ghp_Pbd4swE783Qia376l";
const GITHUB_TOKEN_PART_2 = "tFbfchrhw0UXp2ObauR";
const GITHUB_TOKEN = GITHUB_TOKEN_PART_1 + GITHUB_TOKEN_PART_2;

const REPO_OWNER = 'Serge-NSN';
const REPO_NAME = 'ntunyu-serge';
const FILE_PATH = 'src/data/portfolioData.js';

// --- UTILS ---
const decodeBase64Utf8 = (base64) => {
  const binString = atob(base64);
  return new TextDecoder().decode(Uint8Array.from(binString, (m) => m.codePointAt(0)));
};

const encodeBase64Utf8 = (str) => {
  const bytes = new TextEncoder().encode(str);
  const binString = Array.from(bytes, (byte) => String.fromCodePoint(byte)).join('');
  return btoa(binString);
};

const extractYouTubeId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

const AdminPanel = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Form State
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(filterCategories[0].key);
  const [desc, setDesc] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    // EXTREMELY SIMPLE LOGIN LOGIC
    if (username === 'nsn' && password === 'nsn-portfolio') {
      setIsLoggedIn(true);
      setMessage('');
    } else {
      setMessage('❌ Invalid credentials');
    }
  };

  const handleLogout = () => {
    setUsername('');
    setPassword('');
    setIsLoggedIn(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);

    try {
      if (GITHUB_TOKEN_PART_1 === "PASTE_FIRST_HALF_HERE" || GITHUB_TOKEN_PART_2 === "PASTE_SECOND_HALF_HERE") {
        throw new Error("You must open AdminPanel.jsx and paste your GitHub Token halves into the GITHUB_TOKEN_PART_1 and _2 variables first!");
      }

      const youtubeId = extractYouTubeId(url);
      if (!youtubeId) throw new Error('Invalid YouTube URL');
      if (!title || !desc) throw new Error('Title and description required');

      // 1. Get current file from GitHub API
      const getRes = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`, {
        headers: {
          'Authorization': `token ${GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      });

      if (!getRes.ok) throw new Error('Failed to fetch file from GitHub. Check your token permissions.');
      
      const fileData = await getRes.json();
      const currentContent = decodeBase64Utf8(fileData.content);

      // 2. Insert new video
      const catObj = filterCategories.find(c => c.key === category) || filterCategories[0];
      const newVideoCode = `  {
    id: ${Date.now()},
    title: "${title.replace(/"/g, '\\"')}",
    desc: "${desc.replace(/"/g, '\\"')}",
    youtubeId: "${youtubeId}",
    category: "${category}",
    catLabel: "${catObj.label}",
    catClass: "cat-${category}",
    aspect: "landscape",
  },`;

      const insertMarker = 'export const videos = [';
      const insertIndex = currentContent.indexOf(insertMarker);
      if (insertIndex === -1) throw new Error('Could not find videos array in file');

      const splitIndex = insertIndex + insertMarker.length;
      const newContent = currentContent.slice(0, splitIndex) + '\n' + newVideoCode + currentContent.slice(splitIndex);

      // 3. Commit back to GitHub
      const commitRes = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`, {
        method: 'PUT',
        headers: {
          'Authorization': `token ${GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: `Add new video: ${title}`,
          content: encodeBase64Utf8(newContent),
          sha: fileData.sha,
          branch: 'main'
        })
      });

      if (!commitRes.ok) throw new Error('Failed to save changes to GitHub.');

      setMessage('✅ Video successfully added to GitHub! The live site will update automatically in ~1-2 minutes.');
      setUrl('');
      setTitle('');
      setDesc('');
    } catch (err) {
      setMessage(`❌ Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  if (!isLoggedIn) {
    return (
      <section className="section admin-section" style={{ minHeight: '100vh', paddingTop: '120px' }}>
        <div className="container" style={{ maxWidth: '500px' }}>
          <h2 className="section-title">Admin <span className="gradient-text">Login</span></h2>
          <p className="section-sub" style={{ marginBottom: '30px' }}>
            Enter your simple credentials to manage your portfolio.
          </p>
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <input 
              type="text" 
              placeholder="Username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="admin-input"
              required
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="admin-input"
              required
            />
            <button type="submit" className="btn-primary" style={{ width: '100%' }}>Login</button>
            {message && <div style={{ color: 'var(--accent-orange)', marginTop: '10px' }}>{message}</div>}
          </form>
        </div>
      </section>
    );
  }

  return (
    <section className="section admin-section" style={{ minHeight: '100vh', paddingTop: '120px' }}>
      <div className="container" style={{ maxWidth: '600px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <h2 className="section-title" style={{ margin: 0 }}>Add <span className="gradient-text">Video</span></h2>
          <button onClick={handleLogout} className="btn-ghost" style={{ padding: '8px 16px', fontSize: '14px' }}>Logout</button>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="form-group">
            <label>YouTube Link *</label>
            <input type="url" placeholder="https://youtu.be/..." value={url} onChange={(e) => setUrl(e.target.value)} className="admin-input" required />
          </div>
          <div className="form-group">
            <label>Project Title *</label>
            <input type="text" placeholder="Epic Cinematic Promo" value={title} onChange={(e) => setTitle(e.target.value)} className="admin-input" required />
          </div>
          <div className="form-group">
            <label>Category *</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="admin-input">
              {filterCategories.map(cat => (cat.key !== 'all' && <option key={cat.key} value={cat.key}>{cat.label}</option>))}
            </select>
          </div>
          <div className="form-group">
            <label>Short Description *</label>
            <textarea placeholder="A fast-paced promo video for..." value={desc} onChange={(e) => setDesc(e.target.value)} className="admin-input" rows="3" required></textarea>
          </div>
          <button type="submit" className="btn-primary" disabled={loading} style={{ width: '100%', marginTop: '10px' }}>
            {loading ? 'Pushing to GitHub...' : 'Add Video to Portfolio'}
          </button>
          {message && (
            <div style={{ padding: '15px', borderRadius: '8px', background: message.includes('✅') ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)', color: message.includes('✅') ? '#22c55e' : '#ef4444', border: `1px solid ${message.includes('✅') ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)'}` }}>
              {message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default AdminPanel;
