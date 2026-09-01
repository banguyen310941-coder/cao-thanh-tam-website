import { Phone } from "lucide-react";

export default function FloatingContact(){return <aside className="floating-contact" aria-label="Liên hệ nhanh"><a className="floating-zalo" href="https://zalo.me/0976074385" target="_blank" rel="noopener noreferrer" aria-label="Liên hệ Zalo 0976 074 385"><b>Zalo</b><span>Nhắn tin</span></a><a className="floating-phone" href="tel:0976074385" aria-label="Gọi hotline 0976 074 385"><Phone size={20}/><span><small>Hotline</small><b>0976 074 385</b></span></a></aside>}
