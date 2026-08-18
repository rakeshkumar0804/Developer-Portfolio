// Web Audio procedural sound synthesizer for Blueprint UI feedback
// Zero external assets, zero latency, works offline and on all devices

let audioCtx = null;
let audioEnabled = false;

export const initAudio = () => {
  if (!audioCtx && typeof window !== 'undefined') {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
};

export const getAudioState = () => audioEnabled;

export const setAudioState = (enabled) => {
  audioEnabled = enabled;
  if (enabled) {
    initAudio();
  }
  return audioEnabled;
};

export const toggleAudioState = () => {
  return setAudioState(!audioEnabled);
};

export const playTick = () => {
  if (!audioEnabled || !audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    const now = audioCtx.currentTime;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, now);
    osc.frequency.exponentialRampToValueAtTime(440, now + 0.03);

    gain.gain.setValueAtTime(0.04, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.03);
  } catch (e) {
    // audio fallback
  }
};

export const playBlip = (frequency = 1200, duration = 0.06) => {
  if (!audioEnabled || !audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    const now = audioCtx.currentTime;

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(frequency, now);
    osc.frequency.exponentialRampToValueAtTime(frequency * 0.7, now + duration);

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(now);
    osc.stop(now + duration);
  } catch (e) {
    // audio fallback
  }
};

export const playBootBeep = (stage = 1) => {
  if (!audioEnabled || !audioCtx) return;
  try {
    const baseFreq = 500 + stage * 120;
    playBlip(baseFreq, 0.05);
  } catch (e) {}
};

export const playPurr = () => {
  if (!audioEnabled || !audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const lfo = audioCtx.createOscillator();
    const lfoGain = audioCtx.createGain();
    const gain = audioCtx.createGain();
    const now = audioCtx.currentTime;

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(140, now);

    lfo.frequency.setValueAtTime(26, now);
    lfoGain.gain.setValueAtTime(30, now);

    lfo.connect(lfoGain);
    lfoGain.connect(osc.frequency);

    gain.gain.setValueAtTime(0.06, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    lfo.start(now);
    osc.start(now);
    lfo.stop(now + 0.25);
    osc.stop(now + 0.25);
  } catch (e) {}
};
