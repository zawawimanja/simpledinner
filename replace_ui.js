const fs = require('fs');
let code = fs.readFileSync('app.js', 'utf8');

const targetStr = `dom.modalActionsBar.innerHTML = \`
    <div class="social-share-btns" style="display: flex; gap: 0.5rem; margin-right: auto;">
      <button class="btn-social" id="shareWABtn" aria-label="Share to WhatsApp" style="background: #25D366; color: white; border: none; border-radius: 9999px; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 1.2rem; box-shadow: 0 4px 10px rgba(0,0,0,0.2); transition: 0.2s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'" title="WhatsApp">📱</button>
      <button class="btn-social" id="shareXBtn" aria-label="Share to X" style="background: #000000; color: white; border: 1px solid rgba(255,255,255,0.2); border-radius: 9999px; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 1.2rem; box-shadow: 0 4px 10px rgba(0,0,0,0.2); transition: 0.2s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'" title="X (Twitter)">🐦</button>
      <button class="btn-social" id="shareFBBtn" aria-label="Share to Facebook" style="background: #1877F2; color: white; border: none; border-radius: 9999px; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 1.2rem; box-shadow: 0 4px 10px rgba(0,0,0,0.2); transition: 0.2s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'" title="Facebook">📘</button>
    </div>
    <button class="btn-share" id="shareModalBtn" aria-label="Copy Link" style="padding: 0.65rem 1.2rem; font-size: 0.95rem; background: rgba(255, 255, 255, 0.08); color: var(--text-main); border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 9999px; cursor: pointer; display: flex; align-items: center; gap: 0.5rem; transition: all 0.3s ease;">
      <span>🔗</span> Salin Pautan
    </button>
    <a href="\${ytLink}" target="_blank" class="btn-yt-video">
      <span>▶️</span> Tonton Video YT
    </a>
    <button class="btn-spin-globe" onclick="closeRecipeModal()" style="padding: 0.65rem 1.6rem; font-size: 0.95rem;">
      Dah Nampak, Nak Masak Sekarang! 😋
    </button>
  \`;`;

const replaceStr = `dom.modalActionsBar.innerHTML = \`
    <div style="display: flex; flex-direction: column; gap: 1rem; width: 100%;">
      <button class="btn-spin-globe" onclick="closeRecipeModal()" style="width: 100%; padding: 0.8rem; font-size: 1.1rem; border-radius: 12px; box-shadow: 0 4px 15px rgba(217, 119, 6, 0.4);">
        Dah Nampak, Nak Masak Sekarang! 😋
      </button>
      
      <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; flex-wrap: wrap; gap: 1rem;">
        <a href="\${ytLink}" target="_blank" style="display: flex; align-items: center; gap: 0.5rem; color: #ef4444; background: rgba(239, 68, 68, 0.1); padding: 0.5rem 1rem; border-radius: 9999px; text-decoration: none; font-weight: 600; font-size: 0.9rem; transition: 0.2s;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
          Tonton Video
        </a>

        <div style="display: flex; gap: 0.5rem; align-items: center;">
          <span style="font-size: 0.85rem; color: var(--text-dim); margin-right: 0.2rem;">Kongsi:</span>
          <button id="shareModalBtn" aria-label="Copy Link" style="background: rgba(255,255,255,0.1); color: var(--text-main); border: 1px solid rgba(255,255,255,0.2); border-radius: 50%; width: 38px; height: 38px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.2)'" onmouseout="this.style.background='rgba(255,255,255,0.1)'" title="Salin Pautan">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          </button>
          <button id="shareWABtn" aria-label="WhatsApp" style="background: #25D366; color: white; border: none; border-radius: 50%; width: 38px; height: 38px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: 0.2s; box-shadow: 0 4px 10px rgba(37,211,102,0.3);" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'" title="WhatsApp">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.89-4.443 9.893-9.892.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.738-.974zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
          </button>
          <button id="shareXBtn" aria-label="X (Twitter)" style="background: #000000; color: white; border: 1px solid rgba(255,255,255,0.2); border-radius: 50%; width: 38px; height: 38px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: 0.2s; box-shadow: 0 4px 10px rgba(0,0,0,0.3);" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'" title="X (Twitter)">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </button>
          <button id="shareFBBtn" aria-label="Facebook" style="background: #1877F2; color: white; border: none; border-radius: 50%; width: 38px; height: 38px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: 0.2s; box-shadow: 0 4px 10px rgba(24,119,242,0.3);" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'" title="Facebook">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
          </button>
        </div>
      </div>
    </div>
  \`;`;

let target = fs.readFileSync('scratch_target.txt', 'utf8');

if (code.includes(target)) {
  code = code.replace(target, replaceStr);
  fs.writeFileSync('app.js', code);
  console.log('Successfully applied UI update!');
} else {
  console.log('Target string NOT FOUND in app.js!');
}
