"use server";

interface RegistrationResult {
  success: boolean;
  message?: string;
}

const TERM_LABELS: Record<string, string> = {
  full: "Celý tábor – 18. 7. – 1. 8. 2026 (13 000 Kč)",
  week1: "1. týden – 18. 7. – 25. 7. 2026 (8 900 Kč)",
  week2: "2. týden – 25. 7. – 1. 8. 2026 (8 900 Kč)",
};

export async function submitRegistration(formData: FormData): Promise<RegistrationResult> {
  const parentName = formData.get("parentName")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim();
  const childName = formData.get("childName")?.toString().trim();
  const childAge = formData.get("childAge")?.toString().trim();
  const term = formData.get("term")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  // Basic server-side validation
  if (!parentName || !email || !phone || !childName || !childAge || !term) {
    return { success: false, message: "Vyplňte prosím všechna povinná pole." };
  }

  const age = parseInt(childAge);
  if (isNaN(age) || age < 7 || age > 17) {
    return { success: false, message: "Věk dítěte musí být mezi 7 a 17 lety." };
  }

  if (!TERM_LABELS[term]) {
    return { success: false, message: "Vyberte prosím platný termín." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: "Zadejte prosím platnou emailovou adresu." };
  }

  // Build mailto body for fallback
  const body = [
    `Jméno rodiče: ${parentName}`,
    `Email: ${email}`,
    `Telefon: ${phone}`,
    `Jméno dítěte: ${childName}`,
    `Věk dítěte: ${childAge}`,
    `Termín: ${TERM_LABELS[term]}`,
    message ? `Zpráva: ${message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  // In production you would send an email via a service like Resend, SendGrid, etc.
  // For now we log and return success (fallback: user can also email directly).
  console.log("New registration:\n", body);

  // Simulate a small delay for UX
  await new Promise((resolve) => setTimeout(resolve, 800));

  return { success: true };
}
