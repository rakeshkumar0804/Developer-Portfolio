/**
 * Universal responsive email click handler
 * - On Mobile (iOS / Android): triggers native mail client cleanly via mailto:
 * - On Desktop / Laptops: opens Gmail Web compose directly in a new tab without OS app-picker popups
 */
export const openEmailClient = (e, customSubject = '') => {
  if (e && e.preventDefault) {
    e.preventDefault();
  }

  const email = 'rakeshchauhan6651@gmail.com';
  const isMobile = typeof navigator !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const subjectParam = customSubject ? `?subject=${encodeURIComponent(customSubject)}` : '';
  const gmailSubjectParam = customSubject ? `&su=${encodeURIComponent(customSubject)}` : '';

  if (isMobile) {
    window.location.href = `mailto:${email}${subjectParam}`;
  } else {
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${email}${gmailSubjectParam}`,
      '_blank',
      'noopener,noreferrer'
    );
  }
};
