// ปุ่ม Say Hello (จากโจทย์ต้นฉบับ)
document.querySelector('#helloBtn').addEventListener('click', () => {
  document.querySelector('#status').textContent = 'Hello from GitHub Pages!';
});

// Exercise 3: ปุ่ม Toggle Theme (สลับโหมดสว่าง/มืด)
const themeBtn = document.querySelector('#themeBtn');
themeBtn.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  themeBtn.textContent = isDark ? '☀️ Light' : '🌙 Dark';
});
