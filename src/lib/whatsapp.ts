const DEFAULT_MESSAGE =
  "Hi Roberts Web Applications, I want a web application for my business. Can we discuss?";

export function getWhatsAppHref(phone: string, message = DEFAULT_MESSAGE) {
  const sanitizedPhone = phone.replace(/\D/g, "");
  return `https://wa.me/${sanitizedPhone}?text=${encodeURIComponent(message)}`;
}
