"use client";
import { useEffect, useState } from
 "react";
export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [selectedImage,setSelectedImage] = useState<string | null>(null);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const body = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      checkIn: formData.get("checkIn"),
      checkOut: formData.get("checkOut"),
    };

    const res = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      alert("Rezervimi u dergua me sukses!"); 
    } else {
      alert("Gabim gjate dergimit.");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <nav className={`fixed top-0 z-50 flex w-full items-center justify-between border-b px-8 py-5 backdrop-blur-xl transition-all duration-300 ${
  scrolled
    ? "border-white/10 bg-black/90 shadow-xl"
    : "border-white/5 bg-black/30"
}`}>
        <h1 className="text-2xl font-extrabold tracking-[0.3em] text-yellow-400">LUXURY HOTEL</h1>
        <div className="hidden gap-8 md:flex">
          <a href="#home" className="hover:text-yellow-400">Home</a>
          <a href="#rooms" className="hover:text-yellow-400">Dhomat</a>
          <a href="#galeria" className="hover:text-yellow-400">Galeria</a>
          <a href="#kontakt" className="hover:text-yellow-400">Kontakt</a>
        </div>
        <a href="#kontakt" className="rounded-full bg-yellow-400 px-5 py-2 font-bold text-black">
          Rezervo
        </a>
      </nav>

      <section id="home" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
        <img src="/hero.jpg"
        className="absolute inset-0 h-full w-full odject-cover"
        alt="Luxury Hotel"/>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 flex flex-col items-center text-center px-6">
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-yellow-400">Luxury Hotel</p>
        <h2 className="max-w-4xl text-center text-4xl font-extrabold leading-tight md:text-6xl">
          Where Luxury Meets Serenity
        </h2>
        <p className="mt-6 max-w-2xl text-xl text-white">
          Trusted by thousand of guests seeking comfort, 
          elegance, and unforgettable experiences.
        </p>
        <a href="#kontakt" className="mt-8 rounded-full bg-yellow-400 px-10 py-4 text-lg font-bold text-black
        transition-all duration-300 hover:bg-yellow-300 hover:scale-110 hover:shadow-2xl">
          Rezervo Tani
        </a>
        </div>
      </section>

      <section id="rooms" className="bg-zinc-900 px-6 py-24">
        <h2 className="mb-12 text-center text-5xl font-bold transition-all
        duration-700 hover:scale-105">Luxury Accommodations</h2>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
  {[
    ["room1.jpg", "Deluxe Room", "129€ / Night", "King bed • WiFi • Breakfast"],
    ["room2.jpg", "Sea View Suite", "189€ / Night", "Sea view • Balcony • Pool access"],
    ["room3.jpg", "Premium Villa", "299€ / Night", "Private villa • Jacuzzi • VIP service"],
  ].map(([img, title, price, features]) => (
    <div key={title} className="group overflow-hidden rounded-3xl border border-zinc-700 bg-zinc-900 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-yellow-400/20">
      <img
       src={`/${img}`} 
       className="h-64 w-full object-cover transition duration-700 group-hover:scale-110" />

      <div className="p-6">
        <div className="mb-3 text-yellow-400">★★★★★</div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-3 text-zinc-300">{features}</p>

        <div className="mt-6 flex items-center justify-between">
          <p className="text-xl font-bold text-yellow-400">{price}</p>
          <a href="#kontakt" className="rounded-full bg-yellow-400 px-5 py-3 font-bold text-black transition hover:bg-yellow-300 hover:scale-105">
            Book Now
          </a>
        </div>
      </div>
    </div>
  ))}
        </div>
      </section>

      <section id="galeria" className="bg-black px-6 py-24">
        <h2 className="mb-12 text-center text-5xl font-bold transition-all duration-700 hover:scale-105">Gallery Highlights</h2>
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
         {["room1.jpg", "room2.jpg", "room3.jpg"] .map((img) => (
          <div
          key={img}
          className="overflow-hidden rounded-3xl border border-zinc-700">
            <img
            src={`/${img}`} onClick={() => setSelectedImage(`/${img}`)}
            className="h-80 w-full object-cover transition duration-700 hover:scale-110 hover:brightness-110"
            />
        </div>
         ))}
         </div>
      </section>
      {selectedImage && (
        <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
        onClick={() => 
          setSelectedImage(null)}
          >
            <img
            src={selectedImage}
            className="max-h-[90vh]max-w-[90vw] rounded-3xl border border-yellow-400 object-contain"
            />
          </div>
      )}
      <section className="bg-zinc-950 px-6 py-24">
  <h2 className="mb-12 text-center text-5xl font-bold">
    Why Choose Us
  </h2>

  <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">

    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 text-center">
      <h3 className="mb-4 text-2xl font-bold text-yellow-400">Luxury Rooms</h3>
      <p className="text-zinc-300">
        Elegant interiors with premium comfort and breathtaking views.
      </p>
    </div>

    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 text-center">
      <h3 className="mb-4 text-2xl font-bold text-yellow-400">24/7 Service</h3>
      <p className="text-zinc-300">
        Friendly staff available anytime to make your stay perfect.
      </p>
    </div>

    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 text-center">
      <h3 className="mb-4 text-2xl font-bold text-yellow-400">Prime Location</h3>
      <p className="text-zinc-300">
        Located near the beach, restaurants and the city's main attractions.
      </p>
    </div>

  </div>
</section>
<section className="bg-black px-6 py-24">
  <h2 className="mb-12 text-center text-5xl font-bold">
    What Our Guests Say
  </h2>

  <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition-all duration-500 hover:-translate-y-33 hover:border-yellow-400 hover:shadow-2xl">
      <p className="mb-4 text-yellow-400 text-xl">★★★★★</p>
      <p className="text-zinc-300">
        “An unforgettable stay with beautiful views and excellent service.”
      </p>
      <div className="mt-6 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 font-bold text-black">
          SM
        </div>
        <h3 className="font-bold text-white">Sarah M.</h3>
      </div>
    </div>

    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition-all duration-500 hover:-translate-y-33 hover:border-yellow-400 hover:shadow-2xl">
      <p className="mb-4 text-yellow-400 text-xl">★★★★★</p>
      <p className="text-zinc-300">
        “The rooms were elegant, clean and the staff was incredibly kind.”
      </p>
      <h3 className="mt-6 font-bold text-white">— Daniel R.</h3>
    </div>

    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition-all duration-500 hover:-translate-y-33 hover:border-yellow-400 hover:shadow-2xl">
      <p className="mb-4 text-yellow-400 text-xl">★★★★★</p>
      <p className="text-zinc-300">
        “A premium experience from arrival to checkout. Highly recommended.”
      </p>
      <h3 className="mt-6 font-bold text-white">— Emma L.</h3>
    </div>
  </div>
</section>

      <section id="kontakt" className="bg-zinc-900 px-6 py-24">
        <h2 className="mb-12 text-center text-5xl font-bold">Rezervo Qendrimin</h2>

        <form onSubmit={handleSubmit} className="mx-auto grid max-w-3xl gap-4 rounded-3xl bg-zinc-800 p-6">
          <input name="name" required placeholder="Emri juaj" className="rounded-xl bg-zinc-700 p-4" />
          <input name="email" type="email" required placeholder="Email" className="rounded-xl bg-zinc-700 p-4" />
          <input name="phone" required placeholder="Numri i telefonit" className="rounded-xl bg-zinc-700 p-4" />
          <input name="checkIn" type="date" required className="rounded-xl bg-zinc-700 p-4" />
          <input name="checkOut" type="date" required className="rounded-xl bg-zinc-700 p-4" />

          <button className="mt-4 rounded-full bg-yellow-400 px-8 py-4 font-bold text-black hover:bg-yellow-300">
            Konfirmo Rezervimin
          </button>
        </form>
      </section>
      <section id="rooms" className="py-24 px-6 bg-zinc-950 text-white">
  <div className="max-w-6xl mx-auto">
    <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-3">Our Rooms</p>
    <h2 className="text-4xl md:text-5xl font-bold mb-12">Luxury Rooms & Suites</h2>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        { img: "/room1.jpg", title: "Deluxe Room", price: "From €120/night" },
        { img: "/room2.jpg", title: "Premium Suite", price: "From €180/night" },
        { img: "/room3.jpg", title: "Royal Suite", price: "From €250/night" },
      ].map((room) => (
        <div key={room.title} className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800">
          <img src={room.img} alt={room.title} className="h-64 w-full object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2">{room.title}</h3>
            <p className="text-zinc-400 mb-4">Elegant comfort, modern design, and a relaxing atmosphere.</p>
            <p className="text-yellow-400 font-semibold">{room.price}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
<footer className="bg-black border-t border-zinc-800 py-10">
  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

    <div>
      <h3 className="text-2xl font-bold text-yellow-400">
        LUXURY HOTEL
      </h3>
      <p className="text-zinc-400 mt-2">
        Premium hotel website template crafted with elegance.
      </p>
    </div>

    <div className="flex gap-6 text-zinc-400">
      <a href="#home" className="hover:text-yellow-400">Home</a>
      <a href="#rooms" className="hover:text-yellow-400">Rooms</a>
      <a href="#galeria" className="hover:text-yellow-400">Gallery</a>
      <a href="#kontakt" className="hover:text-yellow-400">Contact</a>
    </div>

  </div>

  <p className="text-center text-zinc-500 mt-8 text-sm">
    © 2026 Luxury Hotel. All rights reserved.
  </p>

</footer>
    </main>
  );
}
