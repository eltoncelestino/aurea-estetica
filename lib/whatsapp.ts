const numero = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5585900000000";
export function whatsappLink(mensagem: string, origem = "site") {
  return `https://wa.me/${numero}?text=${encodeURIComponent(`${mensagem}\n\n(origem: ${origem})`)}`;
}
