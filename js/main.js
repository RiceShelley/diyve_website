/* ============================================================
   main.js — diyve Website
   ============================================================ */

/* ── DIVE LOG DATA ─────────────────────────────────────────── *
 * Real data from logs_from_drysuit_pool_class/ binary files.
 * Format: [elapsed_seconds, depth_m, temp_c]
 * Binary record: <HBBBBBff (little-endian), 15 bytes each
 * ─────────────────────────────────────────────────────────── */
const DIVES = [
  {
    label: 'Dive 4',
    date: '2025-12-19',
    startTime: '17:34',
    file: 'dive_004.bin',
    entries: 734,
    // Sampled ~every 12th entry
    data: [
      [0,0.16,26],[22,1.90,26],[45,2.63,26],[67,2.57,26],[89,2.61,26],
      [112,3.28,26],[134,2.94,26],[156,2.89,26],[179,2.09,26],[201,1.40,26],
      [223,2.95,26],[246,3.11,26],[268,2.75,26],[290,2.04,26],[313,2.94,26],
      [335,3.11,26],[357,3.15,26],[380,3.11,26],[402,3.06,26],[424,3.07,26],
      [447,3.01,26],[469,3.07,26],[491,3.02,26],[514,2.99,26],[536,2.89,26],
      [558,2.84,26],[581,1.49,26],[603,2.21,26],[625,3.19,26],[648,3.10,26],
      [670,2.42,26],[692,2.82,26],[715,3.33,26],[737,3.26,26],[759,2.98,26],
      [782,3.14,26],[804,2.90,26],[826,2.90,26],[849,2.94,26],[871,3.18,26],
      [893,2.60,26],[916,3.21,26],[938,3.22,26],[960,2.40,26],[983,1.57,26],
      [1005,1.96,26],[1027,3.02,26],[1050,3.25,26],[1072,0.84,26],[1094,0.33,26],
      [1117,0.43,26],[1139,0.28,26],[1161,0.35,26],[1184,0.33,26],[1206,0.36,26],
      [1228,0.30,26],[1251,0.24,26],[1273,0.31,26],[1295,0.22,26],[1317,-0.02,26],
      [1340,-0.06,26],[1362,-0.07,26],
    ],
  },
  {
    label: 'Dive 5',
    date: '2025-12-19',
    startTime: '18:52',
    file: 'dive_005.bin',
    entries: 1662,
    // Sampled ~every 27th entry
    data: [
      [0,0.28,26],[50,1.77,26],[100,3.21,26],[150,0.38,26],[201,0.22,26],
      [251,0.31,26],[301,-0.03,26],[351,0.39,26],[402,0.24,26],[452,1.59,26],
      [502,3.37,26],[552,3.06,26],[603,2.60,26],[653,2.40,26],[703,2.97,26],
      [753,3.39,26],[804,2.40,26],[854,2.61,26],[904,3.59,26],[954,3.45,26],
      [1005,3.08,26],[1055,3.11,26],[1105,3.17,26],[1155,3.20,26],[1206,2.61,26],
      [1256,2.60,26],[1306,3.50,26],[1356,1.72,26],[1407,0.32,26],[1457,0.15,26],
      [1507,0.06,26],[1557,0.36,26],[1607,0.44,26],[1658,3.45,26],[1708,3.72,26],
      [1758,3.38,26],[1808,3.47,26],[1859,3.21,26],[1909,3.50,26],[1959,3.16,26],
      [2010,3.12,26],[2060,3.11,26],[2110,3.58,26],[2160,3.72,26],[2211,3.38,26],
      [2261,0.19,26],[2311,0.28,26],[2361,0.22,26],[2412,0.05,26],[2462,-0.01,26],
      [2512,0.05,26],[2562,0.18,26],[2612,0.40,26],[2663,0.46,26],[2713,3.64,26],
      [2763,3.61,26],[2813,3.19,26],[2864,2.48,26],[2914,3.73,26],[2964,3.26,26],
      [3014,0.27,26],[3065,0.23,26],
    ],
  },
  {
    label: 'Dive 6',
    date: '2025-12-19',
    startTime: '20:27',
    file: 'dive_006.bin',
    entries: 1317,
    // Sampled ~every 21st entry
    data: [
      [0,-0.05,22],[39,-0.05,22],[78,0.19,25],[117,0.26,26],[156,0.23,26],
      [195,0.25,26],[235,1.28,26],[274,2.56,26],[313,3.26,26],[352,3.55,26],
      [391,3.43,26],[430,3.17,26],[469,3.33,26],[508,3.35,26],[547,3.47,26],
      [586,2.99,26],[625,1.80,26],[664,2.41,26],[704,2.79,26],[743,3.23,26],
      [782,3.14,26],[821,2.15,26],[860,3.00,26],[899,3.50,26],[938,3.37,26],
      [977,3.44,26],[1016,3.24,26],[1055,1.39,26],[1094,0.36,26],[1133,0.47,26],
      [1173,0.48,26],[1212,0.44,26],[1251,0.42,26],[1290,0.47,26],[1329,0.44,26],
      [1368,0.31,26],[1407,0.43,26],[1446,0.41,26],[1485,0.42,26],[1524,0.42,26],
      [1563,0.40,26],[1602,0.42,26],[1641,0.42,26],[1680,2.80,26],[1719,3.16,26],
      [1759,2.58,26],[1798,2.17,26],[1837,2.37,26],[1876,3.33,26],[1915,3.26,26],
      [1954,3.33,26],[1993,3.13,26],[2032,3.36,26],[2071,3.29,26],[2110,1.19,26],
      [2149,0.37,26],[2188,0.40,26],[2228,0.44,26],[2267,0.35,26],[2306,0.20,26],
      [2345,0.37,26],[2384,0.25,26],[2423,0.12,26],
    ],
  },
];

/* ── CHART RENDERER ────────────────────────────────────────── */

const SVG_W = 800;
const SVG_H = 220;
const PAD = { top: 16, right: 20, bottom: 40, left: 52 };

function fmtTime(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

const M_TO_FT = 3.28084;

function renderChart(dive) {
  const data = dive.data;
  const maxTime = data[data.length - 1][0];
  const maxDepthFt = Math.max(...data.map(d => d[1])) * M_TO_FT;
  const minTemp = Math.min(...data.map(d => d[2]));
  const maxTemp = Math.max(...data.map(d => d[2]));

  // Chart drawing area
  const cw = SVG_W - PAD.left - PAD.right;
  const ch = SVG_H - PAD.top - PAD.bottom;

  const xScale = t => PAD.left + (t / maxTime) * cw;
  // Depth: 0 at top, depthMax at bottom (values already in ft)
  const depthMax = Math.max(maxDepthFt + 1, 3);
  const yDepth = d => PAD.top + Math.max(0, d / depthMax) * ch;
  // Temp mapped to full height (secondary axis)
  const tempRange = maxTemp - minTemp || 1;
  const yTemp = t => PAD.top + ch - ((t - minTemp) / tempRange) * ch * 0.6;

  // Build depth area path (convert each sample from m to ft)
  let depthPath = `M ${xScale(0)} ${PAD.top + ch}`;
  for (const [t, d] of data) {
    const y = Math.max(PAD.top, yDepth(Math.max(d * M_TO_FT, 0)));
    depthPath += ` L ${xScale(t)} ${y}`;
  }
  depthPath += ` L ${xScale(maxTime)} ${PAD.top + ch} Z`;

  // Build depth line path
  let depthLine = `M ${xScale(data[0][0])} ${yDepth(Math.max(data[0][1] * M_TO_FT, 0))}`;
  for (const [t, d] of data.slice(1)) {
    depthLine += ` L ${xScale(t)} ${Math.max(PAD.top, yDepth(Math.max(d * M_TO_FT, 0)))}`;
  }

  // Build temp line path
  let tempLine = `M ${xScale(data[0][0])} ${yTemp(data[0][2])}`;
  for (const [t, , temp] of data.slice(1)) {
    tempLine += ` L ${xScale(t)} ${yTemp(temp)}`;
  }

  // X-axis ticks (every ~5 minutes)
  const tickInterval = 300; // 5 min
  const ticks = [];
  for (let t = 0; t <= maxTime; t += tickInterval) {
    ticks.push(t);
  }
  if (ticks[ticks.length - 1] < maxTime - 60) ticks.push(maxTime);

  // Y-axis depth ticks in feet (every 2 ft)
  const depthTicks = [];
  for (let d = 0; d <= Math.ceil(depthMax); d += 2) {
    depthTicks.push(d);
  }

  // Grid lines
  let gridLines = '';
  for (const d of depthTicks) {
    const y = yDepth(d);
    if (y >= PAD.top && y <= PAD.top + ch) {
      gridLines += `<line x1="${PAD.left}" y1="${y}" x2="${PAD.left + cw}" y2="${y}" stroke="#daf0f7" stroke-width="1"/>`;
    }
  }
  for (const t of ticks) {
    const x = xScale(t);
    gridLines += `<line x1="${x}" y1="${PAD.top}" x2="${x}" y2="${PAD.top + ch}" stroke="#daf0f7" stroke-width="1"/>`;
  }

  // Axis tick labels
  let xLabels = '';
  for (const t of ticks) {
    xLabels += `<text x="${xScale(t)}" y="${PAD.top + ch + 18}" text-anchor="middle" fill="#4a9ab5" font-size="11">${fmtTime(t)}</text>`;
  }

  let yLabels = '';
  for (const d of depthTicks) {
    const y = yDepth(d);
    if (y >= PAD.top && y <= PAD.top + ch + 4) {
      yLabels += `<text x="${PAD.left - 8}" y="${y + 4}" text-anchor="end" fill="#4a9ab5" font-size="11">${d}ft</text>`;
    }
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${SVG_W} ${SVG_H}" class="chart-svg">
  <defs>
    <linearGradient id="depthGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#00b4d8" stop-opacity="0.38"/>
      <stop offset="100%" stop-color="#00b4d8" stop-opacity="0.03"/>
    </linearGradient>
    <clipPath id="chartClip">
      <rect x="${PAD.left}" y="${PAD.top}" width="${cw}" height="${ch}"/>
    </clipPath>
    <filter id="tt-shadow" x="-15%" y="-15%" width="130%" height="150%">
      <feDropShadow dx="0" dy="2" stdDeviation="5" flood-color="rgba(0,80,120,0.14)"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect x="0" y="0" width="${SVG_W}" height="${SVG_H}" fill="#ffffff"/>

  <!-- Grid -->
  <g>${gridLines}</g>

  <!-- Chart border -->
  <rect x="${PAD.left}" y="${PAD.top}" width="${cw}" height="${ch}" fill="none" stroke="#b8e6f3" stroke-width="1"/>

  <!-- Depth area fill (clipped) -->
  <g clip-path="url(#chartClip)">
    <path d="${depthPath}" fill="url(#depthGrad)"/>
    <path id="depth-line-path" d="${depthLine}" fill="none" stroke="#0096c7" stroke-width="2.5" stroke-linejoin="round"/>
    <path d="${tempLine}" fill="none" stroke="#f4845f" stroke-width="1.5" stroke-dasharray="5,3" stroke-linejoin="round"/>
  </g>

  <!-- Axis labels -->
  <g>${xLabels}</g>
  <g>${yLabels}</g>

  <!-- Axis titles -->
  <text x="${PAD.left + cw / 2}" y="${SVG_H - 2}" text-anchor="middle" fill="#85c1d4" font-size="11">Time (min:sec)</text>
  <text transform="rotate(-90)" x="${-(PAD.top + ch / 2)}" y="14" text-anchor="middle" fill="#85c1d4" font-size="11">Depth (ft)</text>

  <!-- Crosshair (hidden until hover) -->
  <line id="crosshair-v"
    x1="0" y1="${PAD.top}" x2="0" y2="${PAD.top + ch}"
    stroke="#2398b5" stroke-width="1" stroke-dasharray="4,3"
    visibility="hidden" pointer-events="none"/>

  <!-- Hover dots -->
  <circle id="depth-dot" r="5" fill="#0096c7" stroke="#ffffff" stroke-width="2"
    visibility="hidden" pointer-events="none"/>
  <circle id="temp-dot"  r="4" fill="#f4845f" stroke="#ffffff" stroke-width="2"
    visibility="hidden" pointer-events="none"/>

  <!-- Tooltip -->
  <g id="chart-tooltip" visibility="hidden" pointer-events="none">
    <rect x="0" y="0" width="118" height="70" rx="7"
      fill="white" stroke="#c8e6f0" stroke-width="1.5" filter="url(#tt-shadow)"/>
    <text id="tt-time"  x="11" y="19" font-size="10" fill="#8bbfcd" font-family="'JetBrains Mono',monospace">—</text>
    <line x1="11" y1="25" x2="107" y2="25" stroke="#e6f3f8" stroke-width="1"/>
    <text id="tt-depth" x="11" y="44" font-size="14" font-weight="700" fill="#1a3f52" font-family="system-ui,sans-serif">— ft</text>
    <text id="tt-temp"  x="11" y="61" font-size="11"              fill="#e8825a" font-family="system-ui,sans-serif">— °C</text>
  </g>

  <!-- Invisible mouse-capture rect (must be last / on top) -->
  <rect id="chart-overlay"
    x="${PAD.left}" y="${PAD.top}" width="${cw}" height="${ch}"
    fill="transparent" style="cursor:crosshair"/>
</svg>`;

  return svg;
}

/* ── CHART INTERACTION ─────────────────────────────────────── */

function initChartInteraction(dive) {
  const svg = document.querySelector('#dive-chart svg');
  if (!svg) return;

  const data      = dive.data;
  const maxTime   = data[data.length - 1][0];
  const maxDepthFt = Math.max(...data.map(d => d[1])) * M_TO_FT;
  const depthMax  = Math.max(maxDepthFt + 1, 3);
  const minTemp   = Math.min(...data.map(d => d[2]));
  const maxTemp   = Math.max(...data.map(d => d[2]));
  const tempRange = maxTemp - minTemp || 1;

  const cw = SVG_W - PAD.left - PAD.right;
  const ch = SVG_H - PAD.top - PAD.bottom;

  const xScale  = t => PAD.left + (t / maxTime) * cw;
  const yDepth  = d => PAD.top + Math.max(0, d / depthMax) * ch;
  const yTemp   = t => PAD.top + ch - ((t - minTemp) / tempRange) * ch * 0.6;

  const crosshair = svg.getElementById('crosshair-v');
  const depthDot  = svg.getElementById('depth-dot');
  const tempDot   = svg.getElementById('temp-dot');
  const tooltip   = svg.getElementById('chart-tooltip');
  const ttTime    = svg.getElementById('tt-time');
  const ttDepth   = svg.getElementById('tt-depth');
  const ttTemp    = svg.getElementById('tt-temp');
  const overlay   = svg.getElementById('chart-overlay');

  function svgX(e) {
    const rect  = svg.getBoundingClientRect();
    return (e.clientX - rect.left) * (SVG_W / rect.width);
  }

  function nearest(mouseX) {
    const t = ((mouseX - PAD.left) / cw) * maxTime;
    return data.reduce((best, pt) =>
      Math.abs(pt[0] - t) < Math.abs(best[0] - t) ? pt : best
    );
  }

  overlay.addEventListener('mousemove', e => {
    const mx  = svgX(e);
    const pt  = nearest(mx);
    const px  = xScale(pt[0]);
    const dft = Math.max(pt[1] * M_TO_FT, 0);
    const py  = yDepth(dft);
    const ty  = yTemp(pt[2]);

    crosshair.setAttribute('x1', px);
    crosshair.setAttribute('x2', px);
    crosshair.setAttribute('visibility', 'visible');

    depthDot.setAttribute('cx', px);
    depthDot.setAttribute('cy', Math.min(py, PAD.top + ch));
    depthDot.setAttribute('visibility', 'visible');

    tempDot.setAttribute('cx', px);
    tempDot.setAttribute('cy', Math.min(ty, PAD.top + ch));
    tempDot.setAttribute('visibility', 'visible');

    const m = Math.floor(pt[0] / 60);
    const s = pt[0] % 60;
    ttTime.textContent  = `${m}:${String(s).padStart(2, '0')}`;
    ttDepth.textContent = `${(pt[1] * M_TO_FT).toFixed(1)} ft`;
    ttTemp.textContent  = `${pt[2].toFixed(1)} °C`;

    // Keep tooltip inside chart
    const ttW = 118, ttH = 70;
    let ttX = px + 14;
    let ttY = py - ttH - 8;
    if (ttX + ttW > PAD.left + cw) ttX = px - ttW - 14;
    if (ttY < PAD.top) ttY = py + 14;

    tooltip.setAttribute('transform', `translate(${ttX},${ttY})`);
    tooltip.setAttribute('visibility', 'visible');
  });

  overlay.addEventListener('mouseleave', () => {
    crosshair.setAttribute('visibility', 'hidden');
    depthDot.setAttribute('visibility', 'hidden');
    tempDot.setAttribute('visibility', 'hidden');
    tooltip.setAttribute('visibility', 'hidden');
  });
}

/* ── DIVE LOG VIEWER STATE ─────────────────────────────────── */

let activeDiveIdx = 0;

function updateDiveMeta(dive) {
  const data = dive.data;
  const maxDepth = (Math.max(...data.map(d => d[1])) * M_TO_FT).toFixed(1);
  const avgTemp = (data.reduce((a, d) => a + d[2], 0) / data.length).toFixed(1);
  const duration = data[data.length - 1][0];
  const dMin = Math.floor(duration / 60);
  const dSec = duration % 60;

  document.getElementById('dive-meta-date').textContent = dive.date + ' ' + dive.startTime;
  document.getElementById('dive-meta-depth').textContent = maxDepth + ' ft';
  document.getElementById('dive-meta-temp').textContent = avgTemp + ' °C';
  document.getElementById('dive-meta-duration').textContent = `${dMin}m ${dSec}s`;
  document.getElementById('dive-meta-samples').textContent = dive.entries.toLocaleString();
  document.getElementById('dive-meta-file').textContent = dive.file;
}

function showDive(idx) {
  activeDiveIdx = idx;
  const dive = DIVES[idx];

  // Update tabs
  document.querySelectorAll('.dive-tab').forEach((tab, i) => {
    tab.classList.toggle('active', i === idx);
  });

  // Update meta
  updateDiveMeta(dive);

  // Render chart and wire up interaction
  document.getElementById('dive-chart').innerHTML = renderChart(dive);
  initChartInteraction(dive);

  // Animate depth line drawing in
  const linePath = document.getElementById('depth-line-path');
  if (linePath) {
    const len = linePath.getTotalLength();
    linePath.style.transition = 'none';
    linePath.style.strokeDasharray = len;
    linePath.style.strokeDashoffset = len;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      linePath.style.transition = 'stroke-dashoffset 1.4s cubic-bezier(0.4, 0, 0.2, 1)';
      linePath.style.strokeDashoffset = '0';
    }));
  }
}

/* ── SCROLL REVEAL ─────────────────────────────────────────── */

function initReveal() {
  const els = document.querySelectorAll('.feature-card, .sw-card, .pin-row, .acc-item, .hw-table-wrap');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  els.forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${(i % 6) * 0.08}s`;
    observer.observe(el);
  });
}

/* ── SMOOTH SCROLL + NAV HIGHLIGHT ────────────────────────── */

function initNav() {
  // Smooth scroll (redundant given CSS scroll-behavior but handles older browsers)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Active nav highlight on scroll
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));
}

/* ── ACCORDION ─────────────────────────────────────────────── */

function initAccordion() {
  document.querySelectorAll('.acc-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.acc-item');
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.acc-item.open').forEach(i => i.classList.remove('open'));

      // Open clicked if it was closed
      if (!isOpen) item.classList.add('open');
    });
  });
}

/* ── DIVE TAB INIT ─────────────────────────────────────────── */

function initDiveTabs() {
  const tabContainer = document.querySelector('.dive-tabs');
  DIVES.forEach((dive, i) => {
    const btn = document.createElement('button');
    btn.className = 'dive-tab' + (i === 0 ? ' active' : '');
    btn.textContent = dive.label;
    btn.addEventListener('click', () => showDive(i));
    tabContainer.appendChild(btn);
  });
  showDive(0);
}

/* ── FISH ──────────────────────────────────────────────────── */

const FISH_PALETTE = [
  { body: '#f4845f', fin: '#b84e28', opacity: 0.82 }, // coral
  { body: '#1fb5cc', fin: '#0b7a8a', opacity: 0.76 }, // electric teal
  { body: '#f9c644', fin: '#c88a18', opacity: 0.80 }, // sunset gold
  { body: '#5dbfa0', fin: '#258a6a', opacity: 0.78 }, // sea green
  { body: '#b09de0', fin: '#6040b8', opacity: 0.74 }, // lavender (surprise)
  { body: '#3a7bd5', fin: '#1a3e90', opacity: 0.76 }, // deep blue
];

function makeSharkSVG() {
  return `<svg viewBox="0 0 92 44" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 20 L0 7  L12 20" fill="#3d5c6e"/>
    <path d="M13 22 L2 37 L12 22" fill="#3d5c6e"/>
    <ellipse cx="47" cy="21" rx="37" ry="14" fill="#4e6e84"/>
    <ellipse cx="50" cy="26" rx="26" ry="8" fill="#c8d8e4" opacity="0.70"/>
    <path d="M44 7 L55 0 L64 8" fill="#3d5c6e" stroke="#3d5c6e" stroke-linejoin="round" stroke-width="0.8"/>
    <path d="M39 24 L28 39 L47 25" fill="#3d5c6e" opacity="0.85"/>
    <ellipse cx="80" cy="20" rx="9" ry="7" fill="#5a7e96"/>
    <circle cx="70" cy="17" r="3" fill="#080f14"/>
    <circle cx="71" cy="16.2" r="0.75" fill="rgba(255,255,255,0.32)"/>
    <path d="M58 13 L56 29" stroke="#2d4858" stroke-width="0.9" opacity="0.55"/>
    <path d="M63 12 L61 28" stroke="#2d4858" stroke-width="0.9" opacity="0.55"/>
    <path d="M68 12 L66 28" stroke="#2d4858" stroke-width="0.9" opacity="0.55"/>
  </svg>`;
}

const FISH_CONFIGS = [
  { size: 50, speed: 54,  bobAmp: 10, bobFreq: 0.44, delay: 0.4  },
  { size: 36, speed: 84,  bobAmp:  7, bobFreq: 0.62, delay: 2.6  },
  { size: 56, speed: 44,  bobAmp: 12, bobFreq: 0.36, delay: 4.8  },
  { size: 32, speed: 96,  bobAmp:  6, bobFreq: 0.72, delay: 7.2  },
  { size: 46, speed: 64,  bobAmp:  9, bobFreq: 0.50, delay: 9.5  },
  { size: 40, speed: 74,  bobAmp:  8, bobFreq: 0.55, delay: 12.0 },
];

function makeFishSVG(body, fin) {
  return `<svg viewBox="0 0 60 34" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 17 L1 5 L8 17 L1 29 Z" fill="${fin}"/>
    <ellipse cx="32" cy="17" rx="21" ry="13" fill="${body}"/>
    <path d="M24 4 Q32 -1 40 5 L38 10 Q32 5 26 10 Z" fill="${fin}" opacity="0.9"/>
    <ellipse cx="29" cy="27" rx="7" ry="3.5" fill="${fin}" opacity="0.68" transform="rotate(12,29,27)"/>
    <ellipse cx="35" cy="13" rx="10" ry="6" fill="white" opacity="0.13" transform="rotate(-12,35,13)"/>
    <circle cx="44" cy="13" r="4" fill="white"/>
    <circle cx="45" cy="13" r="2.2" fill="#1a2835"/>
    <circle cx="45.9" cy="12.1" r="0.85" fill="white"/>
    <path d="M57 17 Q60 19.5 57 21.5" stroke="${fin}" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  </svg>`;
}

function initFish() {
  const layer = document.getElementById('fish-layer');
  if (!layer) return;
  const hero = layer.parentElement;
  const W = () => hero.offsetWidth;
  const H = () => hero.offsetHeight;

  const fishes = FISH_CONFIGS.map((cfg, i) => {
    const pal = FISH_PALETTE[i];
    const w   = cfg.size;
    const h   = Math.round(cfg.size * 34 / 60);

    const el = document.createElement('div');
    el.className = 'fish-el';
    el.style.cssText = `width:${w}px;height:${h}px;opacity:${pal.opacity};`;
    el.innerHTML = `<div class="fish-body">${makeFishSVG(pal.body, pal.fin)}</div>`;
    layer.appendChild(el);

    const dir = i % 2 === 0 ? 1 : -1;
    const fish = {
      el, w, h,
      x:       dir === 1 ? -(w + 20) : W() + 20,
      baseY:   60 + Math.random() * (H() - 120),
      dir,
      speed:   cfg.speed,
      bobAmp:  cfg.bobAmp,
      bobFreq: cfg.bobFreq,
      bobPhase: Math.random() * Math.PI * 2,
      scared:  false,
      scaredTimer: 0,
      delay:   cfg.delay,
      started: false,
    };

    // Place off-screen immediately so it doesn't pile up at (0,0)
    el.style.transform = `translate(${fish.x}px,${fish.baseY}px) scaleX(${fish.dir})`;

    el.addEventListener('pointerdown', () => {
      if (fish.scared) return;
      fish.scared     = true;
      fish.scaredTimer = 0;
      fish.dir        *= -1;
      el.classList.add('fish-scared');
      setTimeout(() => {
        el.classList.remove('fish-scared');
      }, 560);
    });

    return fish;
  });

  // Add sharks — same movement loop as fish, scarier appearance
  const sharkDefs = [
    { size: 92,  speed: 36, bobAmp: 5, bobFreq: 0.26, delay: 18, dir:  1 },
    { size: 112, speed: 28, bobAmp: 4, bobFreq: 0.20, delay: 28, dir: -1 },
  ];
  for (const cfg of sharkDefs) {
    const w = cfg.size, h = Math.round(w * 44 / 92);
    const el = document.createElement('div');
    el.className = 'fish-el fish-shark';
    el.style.cssText = `width:${w}px;height:${h}px;opacity:0.82;`;
    el.innerHTML = `<div class="fish-body">${makeSharkSVG()}</div>`;
    layer.appendChild(el);

    const shark = {
      el, w, h,
      x:       cfg.dir === 1 ? -(w + 20) : W() + 20,
      baseY:   80 + Math.random() * (H() - 160),
      dir:     cfg.dir,
      speed:   cfg.speed,
      bobAmp:  cfg.bobAmp,
      bobFreq: cfg.bobFreq,
      bobPhase: Math.random() * Math.PI * 2,
      scared: false, scaredTimer: 0,
      delay: cfg.delay, started: false,
    };

    el.style.transform = `translate(${shark.x}px,${shark.baseY}px) scaleX(${shark.dir})`;

    el.addEventListener('pointerdown', () => {
      if (shark.scared) return;
      shark.scared = true; shark.scaredTimer = 0;
      shark.dir *= -1;
      el.classList.add('shark-scared');
      setTimeout(() => el.classList.remove('shark-scared'), 520);
    });

    fishes.push(shark);
  }

  // Reposition fish on resize so they stay within the hero
  window.addEventListener('resize', () => {
    for (const f of fishes) {
      if (f.started) f.baseY = 60 + Math.random() * (H() - 120);
    }
  });

  let last = null;

  function loop(ts) {
    if (last === null) last = ts;
    const dt = Math.min((ts - last) / 1000, 0.05);
    last = ts;
    const t = ts / 1000;

    for (const f of fishes) {
      // Staggered entry
      if (!f.started) {
        f.delay -= dt;
        if (f.delay > 0) continue;
        f.started = true;
      }

      // Scared timer
      if (f.scared) {
        f.scaredTimer += dt;
        if (f.scaredTimer > 2.5) { f.scared = false; f.scaredTimer = 0; }
      }

      const spd = f.scared ? f.speed * 3.2 : f.speed;
      f.x += f.dir * spd * dt;

      const bob = Math.sin(t * f.bobFreq + f.bobPhase) * f.bobAmp;
      f.el.style.transform = `translate(${f.x}px,${f.baseY + bob}px) scaleX(${f.dir})`;

      // Wrap and pick new lane
      const margin = f.w + 40;
      if (f.x > W() + margin) {
        f.dir = -1;
        f.x = W() + f.w + 10;
        f.baseY    = 60 + Math.random() * (H() - 120);
        f.bobPhase = Math.random() * Math.PI * 2;
        f.scared   = false;
      } else if (f.x < -margin) {
        f.dir = 1;
        f.x = -(f.w + 10);
        f.baseY    = 60 + Math.random() * (H() - 120);
        f.bobPhase = Math.random() * Math.PI * 2;
        f.scared   = false;
      }
    }

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
}

/* ── JELLYFISH ─────────────────────────────────────────────── */

const JELLYFISH_PALETTE = [
  { bell: 'rgba(210,138,192,0.70)', inner: 'rgba(240,185,228,0.82)', tentacle: 'rgba(195,110,168,0.60)' },
  { bell: 'rgba(105,178,228,0.66)', inner: 'rgba(155,215,242,0.78)', tentacle: 'rgba(75,148,210,0.58)'  },
  { bell: 'rgba(158,118,218,0.68)', inner: 'rgba(195,168,240,0.78)', tentacle: 'rgba(130,90,200,0.60)'  },
];

const JELLYFISH_CONFIGS = [
  { width: 52, speed: 24, driftAmp: 42, driftFreq: 0.17, delay: 3.0,  pulseDelay: '0s'      },
  { width: 40, speed: 30, driftAmp: 28, driftFreq: 0.23, delay: 8.5,  pulseDelay: '-0.9s'   },
  { width: 64, speed: 18, driftAmp: 58, driftFreq: 0.13, delay: 14.0, pulseDelay: '-1.6s'   },
];

function makeJellyfishSVG(bell, inner, tentacle) {
  return `<svg viewBox="0 0 54 78" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 28 Q4 2 27 2 Q50 2 50 28 Q50 36 27 35 Q4 36 4 28 Z" fill="${bell}"/>
    <path d="M11 26 Q11 10 27 10 Q43 10 43 26 Q43 31 27 30 Q11 31 11 26 Z" fill="${inner}" opacity="0.65"/>
    <path d="M19 11 L18 29" stroke="rgba(255,255,255,0.18)" stroke-width="0.8"/>
    <path d="M27 10 L27 29" stroke="rgba(255,255,255,0.18)" stroke-width="0.8"/>
    <path d="M35 11 L36 29" stroke="rgba(255,255,255,0.18)" stroke-width="0.8"/>
    <ellipse cx="27" cy="16" rx="11" ry="5" fill="rgba(255,255,255,0.12)"/>
    <path d="M4 28 Q9 34 14 30 Q19 35 24 30 Q27 35 30 30 Q35 35 40 30 Q45 35 50 28"
          stroke="${tentacle}" stroke-width="1.6" fill="none" opacity="0.75"/>
    <path d="M11 33 Q8  46 11 59 Q14 68 10 78" stroke="${tentacle}" stroke-width="1.4" fill="none" stroke-linecap="round" opacity="0.72"/>
    <path d="M17 35 Q14 50 17 62 Q20 70 17 78" stroke="${tentacle}" stroke-width="1.0" fill="none" stroke-linecap="round" opacity="0.58"/>
    <path d="M23 36 Q23 52 20 64 Q18 72 21 78" stroke="${tentacle}" stroke-width="1.1" fill="none" stroke-linecap="round" opacity="0.62"/>
    <path d="M31 36 Q34 51 31 63 Q28 71 31 78" stroke="${tentacle}" stroke-width="1.1" fill="none" stroke-linecap="round" opacity="0.62"/>
    <path d="M37 35 Q40 48 37 61 Q34 70 37 78" stroke="${tentacle}" stroke-width="1.0" fill="none" stroke-linecap="round" opacity="0.58"/>
    <path d="M43 33 Q46 45 43 57 Q40 66 44 76" stroke="${tentacle}" stroke-width="1.4" fill="none" stroke-linecap="round" opacity="0.72"/>
  </svg>`;
}

function initJellyfish() {
  const layer = document.getElementById('fish-layer');
  if (!layer) return;
  const hero = layer.parentElement;
  const W = () => hero.offsetWidth;
  const H = () => hero.offsetHeight;

  const jellies = JELLYFISH_CONFIGS.map((cfg, i) => {
    const pal = JELLYFISH_PALETTE[i % JELLYFISH_PALETTE.length];
    const w   = cfg.width;
    const h   = Math.round(w * 78 / 54);

    const el = document.createElement('div');
    el.className = 'jellyfish-el';
    el.style.cssText = `width:${w}px;height:${h}px;opacity:0.80;position:absolute;top:0;left:0;pointer-events:auto;cursor:pointer;will-change:transform;user-select:none;touch-action:manipulation;`;
    el.innerHTML = `<div class="jelly-body">${makeJellyfishSVG(pal.bell, pal.inner, pal.tentacle)}</div>`;
    el.querySelector('.jelly-body').style.animationDelay = cfg.pulseDelay;
    layer.appendChild(el);

    const centerX = w / 2 + Math.random() * (W() - w);
    const jelly = {
      el, w, h,
      centerX,
      y: H() + h + 40 + i * 100,
      speed: cfg.speed,
      driftAmp: cfg.driftAmp,
      driftFreq: cfg.driftFreq,
      driftPhase: Math.random() * Math.PI * 2,
      scared: false, scaredTimer: 0,
      delay: cfg.delay, started: false,
    };

    // Place below the hero immediately so it doesn't pile up at (0,0)
    el.style.transform = `translate(${centerX - w / 2}px,${jelly.y}px)`;

    el.addEventListener('pointerdown', () => {
      if (jelly.scared) return;
      jelly.scared = true; jelly.scaredTimer = 0;
      el.classList.add('jelly-scared');
      setTimeout(() => el.classList.remove('jelly-scared'), 680);
    });

    return jelly;
  });

  window.addEventListener('resize', () => {
    for (const j of jellies) {
      if (j.y < -j.h) {
        j.centerX = j.w / 2 + Math.random() * (W() - j.w);
      }
    }
  });

  let last = null;

  function loop(ts) {
    if (last === null) last = ts;
    const dt = Math.min((ts - last) / 1000, 0.05);
    last = ts;
    const t = ts / 1000;

    for (const j of jellies) {
      if (!j.started) {
        j.delay -= dt;
        if (j.delay > 0) continue;
        j.started = true;
      }

      if (j.scared) {
        j.scaredTimer += dt;
        if (j.scaredTimer > 2) { j.scared = false; j.scaredTimer = 0; }
      }

      // Float upward; when scared, sink a little then resume
      const spd = j.scared ? -j.speed * 0.5 : j.speed;
      j.y -= spd * dt;

      const x = j.centerX + Math.sin(t * j.driftFreq + j.driftPhase) * j.driftAmp;
      j.el.style.transform = `translate(${x - j.w / 2}px, ${j.y}px)`;

      // Reappear from bottom when off top of hero
      if (j.y < -(j.h + 30)) {
        j.y = H() + j.h + 20;
        j.centerX = j.w / 2 + Math.random() * (W() - j.w);
        j.driftPhase = Math.random() * Math.PI * 2;
        j.scared = false;
      }
    }

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
}

/* ── PROTOTYPE LIGHTBOX ────────────────────────────────────── */

function initLightbox() {
  const thumbs = Array.from(document.querySelectorAll('.proto-thumb'));
  if (!thumbs.length) return;

  const images = thumbs.map(a => ({
    src: a.dataset.full,
    alt: a.querySelector('img').alt,
  }));

  // Build modal DOM
  const overlay = document.createElement('div');
  overlay.id = 'lightbox';
  overlay.innerHTML = `
    <button class="lb-close" aria-label="Close">&times;</button>
    <button class="lb-arrow lb-prev" aria-label="Previous">&#8249;</button>
    <div class="lb-img-wrap">
      <img class="lb-img" src="" alt=""/>
    </div>
    <button class="lb-arrow lb-next" aria-label="Next">&#8250;</button>
    <div class="lb-counter"></div>
  `;
  document.body.appendChild(overlay);

  const lbImg     = overlay.querySelector('.lb-img');
  const lbCounter = overlay.querySelector('.lb-counter');
  const lbPrev    = overlay.querySelector('.lb-prev');
  const lbNext    = overlay.querySelector('.lb-next');
  let current = 0;

  function show(idx) {
    current = (idx + images.length) % images.length;
    lbImg.src = images[current].src;
    lbImg.alt = images[current].alt;
    lbCounter.textContent = `${current + 1} / ${images.length}`;
    lbPrev.style.display = images.length > 1 ? '' : 'none';
    lbNext.style.display = images.length > 1 ? '' : 'none';
  }

  function open(idx) {
    show(idx);
    overlay.classList.add('lb-open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.classList.remove('lb-open');
    document.body.style.overflow = '';
  }

  thumbs.forEach((a, i) => {
    a.addEventListener('click', e => { e.preventDefault(); open(i); });
  });

  lbPrev.addEventListener('click', () => show(current - 1));
  lbNext.addEventListener('click', () => show(current + 1));
  overlay.querySelector('.lb-close').addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });

  document.addEventListener('keydown', e => {
    if (!overlay.classList.contains('lb-open')) return;
    if (e.key === 'ArrowLeft')  show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
    if (e.key === 'Escape')     close();
  });
}

/* ── INIT ──────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  initFish();
  initJellyfish();
  initReveal();
  initNav();
  initAccordion();
  initDiveTabs();
  initLightbox();
});
