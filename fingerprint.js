// 지문 SVG 패턴 4종 (조금씩 다른 모양)
const prints = [
  `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="60" viewBox="0 0 48 60">
    <ellipse cx="24" cy="30" rx="10" ry="13" fill="none" stroke="#d4c9b0" stroke-width="1.2"/>
    <ellipse cx="24" cy="30" rx="14" ry="17" fill="none" stroke="#d4c9b0" stroke-width="1"/>
    <ellipse cx="24" cy="30" rx="18" ry="21" fill="none" stroke="#d4c9b0" stroke-width="0.9"/>
    <ellipse cx="24" cy="30" rx="21" ry="25" fill="none" stroke="#d4c9b0" stroke-width="0.8"/>
    <path d="M14 18 Q24 10 34 18" fill="none" stroke="#d4c9b0" stroke-width="0.8"/>
  </svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="60" viewBox="0 0 48 60">
    <ellipse cx="24" cy="32" rx="9" ry="12" fill="none" stroke="#d4c9b0" stroke-width="1.2"/>
    <ellipse cx="24" cy="32" rx="13" ry="16" fill="none" stroke="#d4c9b0" stroke-width="1"/>
    <ellipse cx="24" cy="31" rx="17" ry="20" fill="none" stroke="#d4c9b0" stroke-width="0.9"/>
    <ellipse cx="24" cy="30" rx="20" ry="24" fill="none" stroke="#d4c9b0" stroke-width="0.8"/>
    <path d="M16 20 Q24 13 32 20" fill="none" stroke="#d4c9b0" stroke-width="0.8"/>
    <path d="M12 26 Q24 8 36 26" fill="none" stroke="#d4c9b0" stroke-width="0.7"/>
  </svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="60" viewBox="0 0 48 60">
    <ellipse cx="24" cy="30" rx="8" ry="11" fill="none" stroke="#d4c9b0" stroke-width="1.2"/>
    <ellipse cx="24" cy="30" rx="12" ry="15" fill="none" stroke="#d4c9b0" stroke-width="1"/>
    <ellipse cx="23" cy="30" rx="16" ry="19" fill="none" stroke="#d4c9b0" stroke-width="0.9"/>
    <ellipse cx="23" cy="29" rx="20" ry="23" fill="none" stroke="#d4c9b0" stroke-width="0.8"/>
    <path d="M15 19 Q24 11 33 19" fill="none" stroke="#d4c9b0" stroke-width="0.8"/>
  </svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="60" viewBox="0 0 48 60">
    <ellipse cx="24" cy="31" rx="10" ry="12" fill="none" stroke="#d4c9b0" stroke-width="1.2"/>
    <ellipse cx="24" cy="31" rx="14" ry="16" fill="none" stroke="#d4c9b0" stroke-width="1"/>
    <ellipse cx="24" cy="30" rx="17" ry="20" fill="none" stroke="#d4c9b0" stroke-width="0.9"/>
    <ellipse cx="24" cy="30" rx="21" ry="24" fill="none" stroke="#d4c9b0" stroke-width="0.8"/>
    <path d="M13 22 Q24 12 35 22" fill="none" stroke="#d4c9b0" stroke-width="0.75"/>
    <path d="M11 28 Q24 9 37 28" fill="none" stroke="#d4c9b0" stroke-width="0.65"/>
  </svg>`
];

document.addEventListener('click', function (e) {
  const el = document.createElement('div');
  el.className = 'fingerprint';

  // 랜덤 지문 모양
  el.innerHTML = prints[Math.floor(Math.random() * prints.length)];

  // 랜덤 회전
  const rotate = Math.random() * 360;
  el.style.left = e.clientX + 'px';
  el.style.top = e.clientY + 'px';
  el.style.transform = `translate(-50%, -50%) rotate(${rotate}deg)`;

  document.body.appendChild(el);

  // 3초 후 제거
  setTimeout(() => el.remove(), 3000);
});
