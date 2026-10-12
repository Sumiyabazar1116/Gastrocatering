const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('inquiryForm');
const statusEl = document.getElementById('formStatus');

form?.addEventListener('submit', async (event) => {
  event.preventDefault();
  statusEl.className = 'form-status';
  statusEl.textContent = 'Илгээж байна...';

  const submitButton = form.querySelector('button[type="submit"]');
  submitButton.disabled = true;

  const fd = new FormData(form);
  const payload = Object.fromEntries(fd.entries());
  if (payload.people_count) payload.people_count = Number(payload.people_count);
  if (!payload.people_count) delete payload.people_count;
  if (!payload.event_date) delete payload.event_date;

  try {
    const response = await fetch('/api/inquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || 'Хүсэлт илгээхэд алдаа гарлаа.');

    statusEl.className = 'form-status success';
    statusEl.textContent = 'Баярлалаа. Таны хүсэлт амжилттай бүртгэгдлээ.';
    form.reset();
  } catch (error) {
    statusEl.className = 'form-status error';
    statusEl.textContent = 'Онлайн хүсэлт одоогоор ажиллахгүй байна. 7272 7676 дугаарт холбогдоно уу.';
  } finally {
    submitButton.disabled = false;
  }
});
