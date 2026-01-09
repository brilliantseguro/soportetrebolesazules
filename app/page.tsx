"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

export default function Home() {
  const [isOpening, setIsOpening] = useState(false);

  const message =
    "Hola! Quiero más información sobre el soporte y la atención personalizada. 🙌";

  const whatsappUrl = useMemo(() => {
    return "https://wa.me/5493471355080?text=" + encodeURIComponent(message);
  }, []);

  const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpening(true);

    const w = window as any;
    if (w.fbq) {
      w.fbq("track", "Contact");
    }

    setTimeout(() => {
      window.location.href = whatsappUrl;
    }, 800);
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #000000, #0b0b0b, #141414)",
        color: "#ffffff",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <style>{`
        @keyframes pulseWhite {
          0% { box-shadow: 0 0 0 0 rgba(255,255,255,0.4); }
          70% { box-shadow: 0 0 0 18px rgba(255,255,255,0); }
          100% { box-shadow: 0 0 0 0 rgba(255,255,255,0); }
        }
      `}</style>

      <div
        style={{
          width: "100%",
          maxWidth: 420,
          padding: "28px 20px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        {/* LOGO CENTRADO */}
        <div
          style={{
            marginBottom: 12,
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Image
            src="/logo.png"
            alt="TA Soporte"
            width={140}
            height={140}
            priority
          />
        </div>

        {/* TITULO */}
        <h1
          style={{
            fontSize: 32,
            fontWeight: 900,
            letterSpacing: 1,
            marginBottom: 6,
          }}
        >
          TA Soporte
        </h1>

        <div
          style={{
            fontSize: 15,
            opacity: 0.85,
            marginBottom: 28,
          }}
        >
          Atención y gestión personalizada
        </div>

        {/* BOTÓN WHATSAPP */}
        <a
          href={whatsappUrl}
          onClick={handleWhatsAppClick}
          style={{
            background: "#25d366",
            color: "#000",
            padding: "18px",
            borderRadius: 16,
            fontSize: 20,
            fontWeight: 800,
            textDecoration: "none",
            marginBottom: 22,
            display: "inline-block",
            width: "100%",
            animation: "pulseWhite 2.6s ease-out infinite",
          }}
        >
          {isOpening ? "Abriendo WhatsApp..." : "Chatear por WhatsApp"}
          <div style={{ fontSize: 13, marginTop: 6, fontWeight: 500 }}>
            Administradora Romina
          </div>
        </a>

        {/* TEXTO INFO */}
        <div
          style={{
            background: "rgba(255,255,255,0.06)",
            borderRadius: 16,
            padding: 16,
            fontSize: 14,
            lineHeight: 1.6,
            opacity: 0.9,
            width: "100%",
          }}
        >
          Somos un equipo de soporte y atención dedicado a brindar respuestas
          claras, ordenadas y responsables. Nuestro objetivo es acompañarte
          de forma simple, directa y personalizada.
          <br />
          <br />
          Contactanos por WhatsApp para recibir asistencia.
        </div>

        {/* UBICACIÓN SUTIL */}
        <div
          style={{
            marginTop: 26,
            fontSize: 11,
            opacity: 0.35,
            lineHeight: 1.4,
            textAlign: "center",
          }}
        >
          📍 Pueyrredón 5371, S2000 Rosario, Santa Fe, Argentina
        </div>

        {/* LEGAL */}
        <div style={{ fontSize: 11, opacity: 0.4, marginTop: 10 }}>
          Servicio de atención y soporte • Contacto bajo solicitud
        </div>
      </div>
    </main>
  );
}
