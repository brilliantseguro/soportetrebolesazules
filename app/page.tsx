"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

export default function Home() {
  const [isOpening, setIsOpening] = useState(false);

  const message =
    "Hola! Quiero más información sobre el soporte y la administración. 🙌";
  const whatsappUrl = useMemo(() => {
    return "https://wa.me/5493471355052?text=" + encodeURIComponent(message);
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
          justifyContent: "flex-start",
        }}
      >
        {/* LOGO */}
        <div style={{ marginBottom: 10 }}>
          <Image
            src="/logo.png"
            alt="TA Soporte"
            width={140}
            height={140}
            priority
          />
        </div>

        {/* TITULO SUPERIOR */}
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
            marginBottom: 22,
          }}
        >
          Atención y gestión personalizada
        </div>

        {/* BOTÓN ADMIN */}
        <div
          style={{
            background: "rgba(255,255,255,0.08)",
            borderRadius: 18,
            padding: "16px",
            marginBottom: 22,
            fontSize: 20,
            fontWeight: 700,
          }}
        >
          Administradora <strong>Romina</strong>
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
            marginBottom: 20,
            display: "inline-block",
            animation: "pulseWhite 2.6s ease-out infinite",
          }}
        >
          {isOpening ? "Abriendo WhatsApp..." : "Chatear por WhatsApp"}
          <div style={{ fontSize: 13, marginTop: 6, fontWeight: 500 }}>
            Atención directa y personalizada
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
          }}
        >
          Somos un equipo de soporte y administración enfocado en brindar
          atención clara, ordenada y responsable. Nuestro objetivo es ayudarte
          con consultas, gestión y acompañamiento, de forma simple y directa.
          <br />
          <br />
          Contactanos por WhatsApp para recibir asistencia personalizada.
        </div>

        {/* LEGAL */}
        <div style={{ fontSize: 11, opacity: 0.55, marginTop: 18 }}>
          Servicio de atención y soporte • Contacto bajo solicitud
        </div>
      </div>
    </main>
  );
}
