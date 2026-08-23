// Minimal Web Audio API sound generator (no external audio assets required)
let audioCtx = null;
let lastTickTime = 0;

function getAudioContext() {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) {
      audioCtx = new AudioCtx();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function isAudioEnabled() {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('rk_audio_enabled') === 'true';
}

export function setAudioEnabled(enabled) {
  if (typeof window === 'undefined') return;
  localStorage.setItem('rk_audio_enabled', enabled ? 'true' : 'false');
}

// Gentle, subtle key-tick sound for IDE typing
export function playKeyTick() {
  if (!isAudioEnabled()) return;
  const now = performance.now();
  if (now - lastTickTime < 60) return; // Throttle ticks
  lastTickTime = now;

  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    // Gentle frequency randomized slightly
    osc.frequency.setValueAtTime(1400 + Math.random() * 300, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.02);

    gain.gain.setValueAtTime(0.018, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.02);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.02);
  } catch (e) {
    // Ignore audio failures
  }
}

// Subtle mechanical click on button press
export function playButtonClick() {
  if (!isAudioEnabled()) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(520, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(180, ctx.currentTime + 0.035);

    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.035);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.035);
  } catch (e) {
    // Ignore audio failures
  }
}
