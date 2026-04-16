import React from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  Bus,
  Ticket,
  CheckCircle2,
  Gift,
  ArrowRight,
  Phone,
  MessageCircle,
  PartyPopper,
  PlayCircle,
} from "lucide-react";

const included = [
  "Actividades pedagógicas y recreativas",
  "Yincanas, juegos de atención, memoria y lógica",
  "Talleres de arte, música y baile",
  "Materiales incluidos",
  "Desarrollo de habilidades sociales y emocionales",
  "Profesionales confiables del cuidado y la recreación de los menores",
  "Salvavidas",
  "Atención de enfermería",
  "Seguro de accidentes",
  "Refrigerios y almuerzos según jornada",
  "Souvenir camiseta",
];

const benefits = [
  "Disfrutan",
  "Se conectan",
  "Participan",
  "Se llevan recuerdos reales",
];

const dailyExperience = [
  "Juegos, retos y competencias",
  "Talleres de pintura, dibujo, música y baile",
  "Actividades grupales llenas de emoción",
  "Un animador que dirige la pauta del día y mantiene la experiencia en alto",
];

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="text-[#E6007E] font-semibold tracking-wide uppercase text-sm mb-3">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-lg text-slate-600">{subtitle}</p>
      ) : null}
    </div>
  );
}

export default function LandingVacacionesADNE() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-[Poppins]">
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
        <a
          href="#formulario"
          className="rounded-full shadow-xl bg-[#E6007E] text-white px-5 py-3 text-sm font-bold hover:bg-[#c4006b] transition"
        >
          Reservar cupo
        </a>
        <a
          href="https://wa.me/573133881555"
          className="rounded-full shadow-xl bg-emerald-500 text-white px-5 py-3 text-sm font-bold hover:bg-emerald-600 transition flex items-center gap-2"
        >
          <MessageCircle className="w-4 h-4" /> WhatsApp
        </a>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden text-white">
        {/* FONDO BASE */}
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#153a7a,_#07142e_55%)]"></div>

{/* IMAGEN DERECHA CON DIFUMINADO */}
<div
  className="absolute inset-0 bg-no-repeat bg-right bg-cover opacity-80"
  style={{
    backgroundImage: `
      linear-gradient(to right, rgba(7,20,46,1) 0%, rgba(7,20,46,0.95) 45%, rgba(7,20,46,0.6) 70%, rgba(7,20,46,0.2) 85%, rgba(7,20,46,0) 100%),
      url('/parque.png')
    `
  }}
></div>
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.08)_50%,transparent_100%)]" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-8 pb-16 md:pb-24 relative">
          <div className="flex items-center justify-between gap-4 mb-10">
            <div className="flex items-center gap-4">
              <img
                src="/logo-adne.png"
                alt="Fundación ADNE"
                className="w-16 md:w-20 object-contain"
              />
              <div>
                <p className="text-xl md:text-2xl font-black tracking-tight">
                  Fundación ADNE
                </p>
                <p className="text-[#E6007E] text-sm font-medium">
                  Un mes que tu hijo no va a olvidar
                </p>
              </div>
            </div>

            <a
              href="#formulario"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-5 py-3 font-bold hover:bg-cyan-100 transition"
            >
              Quiero información <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-white font-semibold mb-4 uppercase tracking-[0.2em] text-xs md:text-sm">
                una experiencia diferente para niños que merecen más
              </p>

              <h1 className="leading-[0.9] font-black tracking-tight text-balance text-left">
                <span className="block text-xl md:text-3xl text-cyan-300 mb-2">
                  más que
                </span>
                <span className="block text-6xl md:text-8xl">
                  VACACIONES,
                </span>
                <span className="block text-2xl md:text-4xl text-white/90 mt-2">
                  son vivencias
                </span>
                <span className="block text-6xl md:text-8xl text-[#E6007E]">
                  RECREATIVAS
                </span>
                <span className="block text-3xl md:text-5xl text-white/95">
                  inolvidables
                </span>
              </h1>

              <p className="mt-6 text-lg md:text-xl text-slate-200 max-w-xl">
                Este año no es solo tenerlos ocupados… es regalarles un mes
                lleno de diversión, energía y momentos que no se repiten.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#formulario"
                  className="rounded-full bg-[#E6007E] hover:bg-[#c4006b] transition px-6 py-4 font-bold text-white inline-flex items-center gap-2"
                >
                  Asegurar cupo <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#valor"
                  className="rounded-full border border-white/20 bg-white/10 hover:bg-white/15 transition px-6 py-4 font-bold text-white"
                >
                  Ver información
                </a>
              </div>

              <div className="mt-8 grid sm:grid-cols-3 gap-4 text-sm">
                <div className="rounded-2xl bg-white/10 border border-white/10 p-4">
                  <p className="font-black text-2xl">5</p>
                  <p className="text-slate-200">semanas de experiencia</p>
                </div>
                <div className="rounded-2xl bg-white/10 border border-white/10 p-4">
                  <p className="font-black text-2xl">10</p>
                  <p className="text-slate-200">niños máximo por grupo</p>
                </div>
                <div className="rounded-2xl bg-white/10 border border-white/10 p-4">
                  <p className="font-black text-2xl">1</p>
                  <p className="text-slate-200">
                    profesional por cada 10 niños (diversidad funcional)
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: VIDEO + INFO VERTICAL */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-10 items-center">
          <div className="rounded-[2rem] overflow-hidden shadow-2xl bg-black/80 h-[350px] flex items-center justify-center relative">
            <PlayCircle className="w-20 h-20 text-white z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(230,0,126,0.3),transparent_70%)]"></div>
            <p className="absolute bottom-6 text-white text-sm text-center w-full px-6 z-10">
              Mira lo que vivirán tus hijos en esta experiencia
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {[
              {
                icon: CalendarDays,
                title: "Del 5 de julio al 5 de agosto",
                text: "5 semanas",
              },
              {
                icon: Clock3,
                title: "Jornada mañana",
                text: "8:00 a.m. – 12:00 m.",
              },
              {
                icon: Clock3,
                title: "Jornada tarde",
                text: "1:00 p.m. – 5:00 p.m.",
              },
              {
                icon: Clock3,
                title: "Jornada completa",
                text: "8:00 a.m. – 5:00 p.m.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-3xl bg-slate-50 border border-slate-200 p-5 flex gap-4 items-center shadow-sm"
              >
                <item.icon className="w-8 h-8 text-[#E6007E]" />
                <div>
                  <p className="font-black text-lg">{item.title}</p>
                  <p className="text-slate-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFICIOS + FORMULARIO */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <div>
            <SectionTitle
              eyebrow="Una experiencia diferente para niños que merecen más"
              title="Si buscas algo más que tenerlos ocupados"
              subtitle="Aquí encuentras una experiencia organizada, alegre y memorable, con líderes de equipo confiables y jornadas pensadas para que cada familia elija la opción que mejor se adapta a su dinámica."
            />

            <div className="mt-8 grid md:grid-cols-2 gap-5">
              {benefits.map((item, i) => (
                <div
                  key={item}
                  className="rounded-3xl bg-white border border-slate-200 p-5 shadow-sm overflow-hidden"
                >
                  <img
                    src={
                      i === 0
                        ? "/disfrutan.png"
                        : i === 1
                        ? "/conectan.png"
                        : i === 2
                        ? "/participan.png"
                        : "/recuerdos.png"
                    }
                    alt={item}
                    className="w-full h-40 object-cover rounded-2xl mb-4"
                  />
                  <CheckCircle2 className="w-6 h-6 text-cyan-500 mb-3" />
                  <p className="font-semibold text-slate-800">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="formulario" className="lg:sticky lg:top-6">
            <div className="rounded-[2rem] bg-slate-900 text-white p-6 md:p-7 shadow-2xl border border-slate-800">
              <p className="text-cyan-300 font-semibold uppercase tracking-wide text-sm">
                Inscripción rápida
              </p>
              <h3 className="mt-2 text-3xl font-black">
                Asegura su cupo hoy
              </h3>
              <p className="mt-3 text-slate-300">
                Déjanos tus datos y te contactamos para enviarte el proceso de
                inscripción, pagos, paquetes y ubicación del grupo ideal.
              </p>

              <div className="mt-6 space-y-4">
                {[
                  "Nombre del acudiente",
                  "Nombre del niño o niña",
                  "Edad",
                  "Teléfono / WhatsApp",
                  "Correo electrónico",
                ].map((ph) => (
                  <input
                    key={ph}
                    placeholder={ph}
                    className="w-full rounded-2xl bg-white/10 border border-white/10 px-4 py-3 outline-none placeholder:text-slate-400 focus:border-cyan-300"
                  />
                ))}

                <select className="w-full rounded-2xl bg-white/10 border border-white/10 px-4 py-3 outline-none text-slate-300 focus:border-cyan-300">
                  <option>Selecciona la jornada</option>
                  <option>Jornada mañana</option>
                  <option>Jornada tarde</option>
                  <option>Jornada completa</option>
                </select>

                <textarea
                  rows={4}
                  placeholder="Cuéntanos si te interesa transporte o salidas recreativas"
                  className="w-full rounded-2xl bg-white/10 border border-white/10 px-4 py-3 outline-none placeholder:text-slate-400 focus:border-cyan-300"
                />

                <a
                  href="https://tusitio.com/lead-vacaciones-recreativas"
                  className="w-full inline-flex justify-center items-center gap-2 rounded-2xl bg-[#E6007E] hover:bg-[#c4006b] transition px-5 py-4 font-black text-lg"
                >
                  Quiero reservar <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INCLUYE / ADICIONALES / PREVENTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionTitle
            eyebrow="Todo lo que incluye"
            title="Esto es una gran experiencia que dura todo un mes"
            subtitle="Una fiesta inolvidable con actividades pedagógicas y recreativas, cuidado permanente y jornadas pensadas para que cada niño disfrute con seguridad."
          />

          <div className="mt-10 grid lg:grid-cols-3 gap-6">
            <div className="rounded-[2rem] border-2 border-cyan-400 bg-slate-950 text-white p-7 shadow-xl">
              <p className="text-2xl font-black mb-5">Incluye</p>
              <ul className="space-y-3 text-slate-200">
                {included.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-300 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border-2 border-amber-400 bg-slate-950 text-white p-7 shadow-xl">
              <p className="text-2xl font-black mb-5">Servicios adicionales</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Bus className="w-6 h-6 text-cyan-300" />
                  <span>Transporte</span>
                </div>
                <div className="flex items-center gap-3">
                  <Ticket className="w-6 h-6 text-[#E6007E]" />
                  <span>Salidas recreativas</span>
                </div>
              </div>

              <div className="mt-5 rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                <video
                  src="/salidas-adne.mp4"
                  controls
                  className="w-full h-48 object-cover"
                />
              </div>

              <p className="mt-5 text-slate-300 text-sm">
                Planetario Yawa, cine, Parque de las Aguas (siembra un árbol) y
                juegos mecánicos.
              </p>
              <p className="mt-3 text-slate-300 text-sm">
                El valor del transporte y las salidas de los viernes estarán
                estipulados en la sección de paquetes.
              </p>
              <p className="mt-3 text-slate-200 text-sm">
                Los acompañantes también pueden asistir a las salidas,
                realizando el respectivo pago y separación de cupo con
                anticipación.
              </p>
            </div>

            <div className="rounded-[2rem] border-2 border-[#E6007E] bg-slate-950 text-white p-7 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <Gift className="w-7 h-7 text-[#E6007E]" />
                <p className="text-2xl font-black">Preventa activa</p>
              </div>
              <p className="font-semibold text-slate-200">
                Beneficio del 10% OFF para todas las inscripciones entre el 2 y
                el 22 de mayo
              </p>

              <div className="mt-5 space-y-4">
                <div className="rounded-2xl bg-white/5 p-4 border border-white/10">
                  <p className="font-bold">Libro PDF</p>
                  <p className="text-slate-300">
                    Cómo entender el TDAH: de la confusión a la acción
                  </p>
                </div>
                <div className="rounded-2xl bg-white/5 p-4 border border-white/10">
                  <p className="font-bold">Cartilla PDF</p>
                  <p className="text-slate-300">
                    Mejora tu letra en 30 días
                  </p>
                </div>
              </div>

              <p className="mt-5 text-cyan-300 font-semibold">
                Beneficio exclusivo para las primeras 10 inscripciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALOR */}
      <section id="valor" className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionTitle
            eyebrow="Valor del programa"
            title="Próximamente disponible"
            subtitle="Puedes asegurar tu cupo desde ahora y recibir la información completa apenas se habiliten los paquetes."
          />

          <div className="mt-10 grid md:grid-cols-1 gap-5 max-w-md">
            <div className="rounded-[2rem] p-6 shadow-lg border bg-[#E6007E] text-white border-[#E6007E] scale-[1.03]">
              <p className="font-bold uppercase tracking-wide text-sm text-pink-100">
                Valor del programa
              </p>
              <p className="mt-3 text-4xl font-black">Próximamente</p>
              <p className="mt-3 text-sm text-white/85">
                Se publicará junto con la sección de paquetes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMACIÓN DIARIA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionTitle
            eyebrow="Programación"
            title="Así será cada día"
            subtitle="Una experiencia estructurada, divertida y pensada para desarrollar habilidades mientras disfrutan."
          />

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-6 shadow-sm border">
              <h3 className="font-black text-xl text-[#E6007E] mb-3">Lunes</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Juegos de integración (socialización y respeto)</li>
                <li>• Juegos en equipo (liderazgo y trabajo colaborativo)</li>
                <li>
                  • Yincanas “Encuentra el tesoro” (seguimiento de instrucciones)
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border">
              <h3 className="font-black text-xl text-[#E6007E] mb-3">Martes</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Juegos de integración (empatía y solidaridad)</li>
                <li>• Talleres de dibujo y pintura (motricidad fina)</li>
                <li>• Piscina (recreación orientada y práctica libre)</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border">
              <h3 className="font-black text-xl text-[#E6007E] mb-3">
                Miércoles
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Juegos de integración (no lo tomes personal)</li>
                <li>• Concursos de habilidades (concentración, memoria y lógica)</li>
                <li>• Juegos de circuitos (yo puedo solo)</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border">
              <h3 className="font-black text-xl text-[#E6007E] mb-3">Jueves</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Juegos de integración (persevera y alcanza)</li>
                <li>• Música y baile (coordinación motora y expresión corporal)</li>
                <li>• Juegos de roles (confío en ti)</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 bg-[#E6007E] text-white rounded-[2rem] p-8 text-center shadow-xl">
            <h3 className="text-2xl md:text-3xl font-black">
              Viernes: Salidas súper divertidas
            </h3>
            <p className="mt-3 text-white/90">
              Cine, juegos mecánicos, museos, parque de las aguas y experiencias
              reales fuera del aula.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCIA + MEDALLAS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionTitle
            eyebrow="Experiencia"
            title="Cada día será diferente"
            subtitle="Juegos, arte, emoción, equipo y experiencias memorables que hacen de este programa una gran fiesta de un mes."
          />

          <div className="mt-10 grid lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-[2rem] bg-slate-50 border border-slate-200 p-6 shadow-sm">
              <p className="text-2xl font-black text-slate-900">
                Así se vive el programa
              </p>

              <ul className="mt-4 space-y-3 text-slate-700">
                {dailyExperience.map((it) => (
                  <li key={it} className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-1 text-[#E6007E] shrink-0" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] bg-white border border-slate-200 p-6 shadow-xl flex flex-col justify-center text-center">
              <img
                src="/medalla-adne.png"
                alt="Reconocimiento ADNE"
                className="w-32 mx-auto mb-4"
              />

              <p className="text-xl font-black text-[#E6007E]">
                Reconocimiento para cada niño
              </p>

              <p className="mt-3 text-slate-600">
                Todos los niños recibirán una medalla especial por su valor o
                habilidad más fortalecida durante la experiencia.
              </p>

              <p className="mt-2 text-slate-600">
                Liderazgo, creatividad, esfuerzo, trabajo en equipo y mucho más
                serán reconocidos en cada uno.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONFIANZA */}
      <section className="py-20 bg-[linear-gradient(135deg,#08142e,#152d6b)] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionTitle
              eyebrow="Confianza para las familias"
              title={
                <span className="text-cyan-300">
                  Seguridad, organización y tranquilidad
                </span>
              }
              subtitle="Todo está pensado para que las familias se sientan tranquilas y los niños vivan una experiencia bien cuidada, divertida y memorable."
            />

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                "Grupos pequeños y controlados",
                "Líderes de equipo vinculadas a la fundación",
                "Ubicación, fechas y horarios claros",
                "Salvavidas y enfermería",
                "Servicios extra aclarados desde el inicio",
                "Seguro de accidentes",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white/10 border border-white/10 p-4"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-white text-slate-900 p-8 shadow-2xl">
            <PartyPopper className="w-9 h-9 text-[#E6007E] mb-4" />
            <p className="mt-4 text-lg text-slate-600">
              Si buscas algo más que “tenerlos ocupados”, esta experiencia está
              diseñada para ti: organizada, bonita, segura, divertida y con una
              propuesta que se siente superior a lo típico.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#formulario"
                className="rounded-full bg-[#E6007E] hover:bg-[#c4006b] transition px-6 py-4 text-white font-black"
              >
                Quiero inscribir ahora
              </a>
              <a
                href="https://wa.me/573133881555"
                className="rounded-full bg-emerald-500 hover:bg-emerald-600 transition px-6 py-4 text-white font-black inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4" /> Hablar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}