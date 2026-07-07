"use client";
import { useEffect, useState } from
 "react";
 import Image from "next/image"
 import { MessageCircle, Menu, X, MapPin, Phone, Mail, Camera, } from "lucide-react";
 import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [selectedImage,setSelectedImage] = useState<string | null>(null);
  const [mobileMenuOpen,setMobileMenuOpen] = useState(false);
  const heroImages = ["/hero.jpg", "/room2.jpg", "/room3.jpg"];
  const [heroIndex, setHeroIndex] = useState(0)

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
useEffect(() => { const interval = setInterval(() =>
{
  setHeroIndex((current) =>
  (current + 1) % heroImages.length);
}, 5000);
return() => 
clearInterval(interval);
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
    ? "border-white/10 bg-black/70 shadow-2xl backdrop-blur-xl"
    : "border-white/5 bg-black/20 backdrop-blur-md"
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
        <button
  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
  className="md:hidden rounded-full border border-white/20 p-2 text-white"
>
  {mobileMenuOpen ? <X /> : <Menu />}
</button>
      </nav>
{mobileMenuOpen && (
  <div className="fixed left-4 right-4 top-24 z-50 flex flex-col gap-4 rounded-3xl border border-white/10 bg-black/90 p-6 text-center text-white shadow-2xl backdrop-blur-xl md:hidden">
    <a onClick={() => setMobileMenuOpen(false)} href="#home" className="hover:text-yellow-400">Home</a>
    <a onClick={() => setMobileMenuOpen(false)} href="#rooms" className="hover:text-yellow-400">Dhomat</a>
    <a onClick={() => setMobileMenuOpen(false)} href="#galeria" className="hover:text-yellow-400">Galeria</a>
    <a onClick={() => setMobileMenuOpen(false)} href="#kontakt" className="hover:text-yellow-400">Kontakt</a>
  </div>
)}
 <section id="home" className="relative min-h-screen overflow-hidden">
  <Image
    src={heroImages[heroIndex]}
    alt="Luxury Hotel"
    fill
    priority
    sizes="100vw"
    className="absolute inset-0 object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/70" />
  <div className="absolute inset-0 bg-black/20" />

  <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-28 md:grid md:grid-cols-2 md:items-center md:gap-12">
    <div>
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-yellow-400">
        Welcome to Luxury Hotel
      </p>

      <h2 className="max-w-3xl text-5xl font-extrabold leading-tight text-white md:text-7xl">
        Experience
        <br />
        Pure Luxury
      </h2>

      <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-200">
        Where elegance meets comfort, and every moment becomes unforgettable.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="#rooms"
          className="rounded-full bg-yellow-400 px-8 py-4 font-bold text-black transition hover:scale-105 hover:bg-yellow-300"
        >
          Explore Rooms
        </a>

        <a
          href="#kontakt"
          className="rounded-full border border-white/30 px-8 py-4 font-bold text-white transition hover:scale-105 hover:bg-white/10"
        >
          Contact Us
        </a>
      </div>
    </div>

    <div className="mt-12 rounded-[2rem] border border-yellow-400/20 bg-black/75 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.65)]
    backdrop-blur-2xl md:mt-0">
      <h3 className="text-center text-3xl font-extrabold tracking-wide text-yellow-400">
        Book Your Stay
      </h3>

      <div className="mt-6 grid gap-4">
        <div>
          <label className="text-sm text-zinc-300">Check-in</label>
          <input
            type="date"
            className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none"
          />
        </div>

        <div>
          <label className="text-sm text-zinc-300">Check-out</label>
          <input
            type="date"
            className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-zinc-300">Guests</label>
            <select className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none">
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4 Guests</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-zinc-300">Rooms</label>
            <select className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none">
              <option>1 Room</option>
              <option>2 Rooms</option>
              <option>3 Rooms</option>
            </select>
          </div>
        </div>

        <a
          href="#kontakt"
          className="mt-4 rounded-xl bg-yellow-400 px-6 py-4 text-center font-bold text-black transition hover:bg-yellow-300"
        >
          Check Availability
        </a>
      </div>
    </div>
  </div>
</section>

      <section id="rooms" className="bg-zinc-900 px-6 py-24">
        <h2 className="mb-12 text-center text-5xl font-bold transition-all
        duration-700 hover:scale-105">Luxury Accommodations</h2>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-1 md:grid-cols-3">
  {[
    ["deluxe-new.jpg", "Deluxe Room", "129€ / Night", "King bed • WiFi • Breakfast"],
    ["executive-new.jpg", "Sea View Suite", "189€ / Night", "Sea view • Balcony • Pool access"],
    ["jakuzzi.jpg", "Premium Villa", "299€ / Night", "Private villa • Jacuzzi • VIP service"],
  ].map(([img, title, price, features]) => (
    <div key={title} className="group overflow-hidden rounded-3xl border border-zinc-700 bg-zinc-900 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-yellow-400/20">
     <div className="relative h-64 w-full overflow-hidden">
  <Image
    src={`/${img}`}
    alt={title}
    fill
    sizes="(max-width: 768px) 100vw,33vw"
    className="object-cover transition duration-700 group-hover:scale-110"
  />
</div>
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
         {["gallery1.jpg", "gallery2.jpg", "gallery3.jpg", "gallery4.jpg", "gallery5.jpg", "gallery6.jpg", "gallery7.jpg", "gallery8.jpg",] .map((img) => (
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
            className="max-h-[90vh] max-w-[90vw] rounded-3xl border border-yellow-400 object-contain"
            />
          </div>
      )}
      <section className="bg-black px-6 py-20 text-white">
  <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-4">
    {[
      ["250+", "Luxury Rooms"],
      ["12K+", "Happy Guests"],
      ["4.9", "Guest Rating"],
      ["15+", "Years Experience"],
    ].map(([number, label]) => (
      <div
        key={label}
        className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400"
      >
        <h3 className="text-4xl font-bold text-yellow-400">{number}</h3>
        <p className="mt-3 text-zinc-300">{label}</p>
      </div>
    ))}
  </div>
</section>
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
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition-all duration-500 hover:-translate-y-3 hover:border-yellow-400 hover:shadow-2xl">
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

    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition-all duration-500 hover:-translate-y-3 hover:border-yellow-400 hover:shadow-2xl">
      <p className="mb-4 text-yellow-400 text-xl">★★★★★</p>
      <p className="text-zinc-300">
        “The rooms were elegant, clean and the staff was incredibly kind.”
      </p>
      <h3 className="mt-6 font-bold text-white">— Daniel R.</h3>
    </div>

    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition-all duration-500 hover:-translate-y-3 hover:border-yellow-400 hover:shadow-2xl">
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
        <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-3xl border border-zinc-800">
          <iframe
          src="https://www.google.com/maps?q=Durres,Albania&output=embed"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          />
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
  <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 text-center">
    <p className="text-3xl">📍</p>
    <h3 className="mt-3 font-bold text-yellow-400">Address</h3>
    <p className="mt-2 text-zinc-300">Beachfront Luxury Location</p>
  </div>

  <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 text-center">
    <p className="text-3xl">☎️</p>
    <h3 className="mt-3 font-bold text-yellow-400">Phone</h3>
    <p className="mt-2 text-zinc-300">+355 69 000 0000</p>
  </div>

  <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 text-center">
    <p className="text-3xl">✉️</p>
    <h3 className="mt-3 font-bold text-yellow-400">Email</h3>
    <p className="mt-2 text-zinc-300">booking@luxuryhotel.com</p>
  </div>
</div>
</section>
<section className="bg-zinc-950 px-6 py-20 text-center">
  <h2 className="text-4xl font-extrabold text-white md:text-5xl">
    Need a Website Like This for Your Hotel?
  </h2>

  <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
    We create modern, premium hotel websites designed to impress guests and increase direct bookings.
  </p>

  <a
    href="#kontakt"
    className="mt-8 inline-block rounded-full bg-yellow-400 px-10 py-4 font-bold text-black transition hover:scale-110 hover:bg-yellow-300"
  >
    Contact Us
  </a>
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
  <div className="flex justify-center gap-6 mt-8 text-2xl text-yellow-400">
  <a href="#" className="hover:scale-125 transition"><FaFacebookF /></a>
  <a href="#" className="hover:scale-125 transition"><FaInstagram /></a>
  <a href="#" className="hover:scale-125 transition"><FaTiktok></FaTiktok></a>
  <a href="#" className="hover:scale-125 transition"><MessageCircle /></a>
  <a href="#" className="hover:scale-125 transition"><Camera /></a>
</div>

  <p className="text-center text-zinc-500 mt-8 text-sm">
    © 2026 Luxury Hotel. All rights reserved.
  </p>

</footer>
<a
href="https://wa.me/355690000000"
target="_blank"
className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500
text-2xl shadow-2xl transition hover:scale-110">
  <MessageCircle/>
</a>
    </main>
  );
}
