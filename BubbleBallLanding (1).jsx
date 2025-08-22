import { useRef } from "react";

export default function BubbleBallLanding() {
  const formRef = useRef(null);

  const scrollToBooking = () => {
    const el = document.getElementById("booking");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const phone = data.get("phone");
    const date = data.get("date");
    const location = data.get("location");
    const pkg = data.get("package");
    const message = data.get("message");

    // Mailto fallback (replace the email below with yours)
    const mailto = `mailto:book@bubbleballmayhem.com?subject=${encodeURIComponent(
      "Bubble Ball Booking Request - " + (pkg || "General")
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nEvent Date: ${date}\nLocation: ${location}\nPackage: ${pkg}\n\nMessage:\n${message}`
    )}`;
    window.location.href = mailto;
  };

  return (
    <div className="bg-gradient-to-br from-blue-600 via-cyan-500 to-green-400 min-h-screen text-white font-sans selection:bg-yellow-300 selection:text-black">
      {/* Hero Section */}
      <header className="relative flex flex-col items-center justify-center text-center py-24 px-6">
        <h1 className="text-6xl md:text-7xl font-extrabold drop-shadow-lg animate-bounce">
          Bubble Ball Mayhem!
        </h1>
        <p className="mt-6 text-xl max-w-2xl font-light">
          Get ready to roll, bump, and bounce with the ultimate bubble ball rental experience.
          Perfect for parties, school events, and pure chaos!
        </p>
        <div className="mt-10 flex gap-4">
          <button onClick={scrollToBooking} className="px-10 py-4 bg-pink-500 hover:bg-pink-600 text-xl rounded-full shadow-2xl animate-pulse">
            Book Now
          </button>
          <a href="#pricing" className="px-10 py-4 bg-black/40 hover:bg-black/60 text-xl rounded-full shadow-2xl backdrop-blur-md">
            View Pricing
          </a>
        </div>
      </header>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8 px-6 md:px-10 py-16 bg-black/30">
        <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg hover:scale-105 transition-transform">
          <h2 className="text-3xl font-bold mb-4">🎉 Party Ready</h2>
          <p>Birthdays, schools, or company events — bubble ball turns any occasion into non-stop fun!</p>
        </div>
        <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg hover:scale-105 transition-transform">
          <h2 className="text-3xl font-bold mb-4">⚡ Extreme Fun</h2>
          <p>Bounce, crash, and roll safely inside giant inflatable bubbles. It's like bumper cars — but YOU are the car!</p>
        </div>
        <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg hover:scale-105 transition-transform">
          <h2 className="text-3xl font-bold mb-4">📍 We Come to You</h2>
          <p>Our team sets everything up at your location. Indoors, outdoors, fields, gyms — we make it happen.</p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-5xl font-extrabold mb-10 drop-shadow-lg">Action Shots 📸</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="h-64 bg-[url('https://images.unsplash.com/photo-1599058917212-23a7e7b3c7c1?fit=crop&w=800&q=80')] bg-cover bg-center rounded-2xl shadow-xl"></div>
          <div className="h-64 bg-[url('https://images.unsplash.com/photo-1595968302774-11cfec06b9a3?fit=crop&w=800&q=80')] bg-cover bg-center rounded-2xl shadow-xl"></div>
          <div className="h-64 bg-[url('https://images.unsplash.com/photo-1605902711622-cfb43c4437c2?fit=crop&w=800&q=80')] bg-cover bg-center rounded-2xl shadow-xl"></div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-black/40">
        <h2 className="text-5xl font-extrabold text-center mb-12">Pricing & Packages 💸</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-md shadow-xl hover:scale-105 transition-transform">
            <h3 className="text-3xl font-bold mb-4">🎂 Birthday Bash</h3>
            <ul className="space-y-2 mb-4 text-white/90">
              <li>• 2 hours play time</li>
              <li>• 10 bubble balls + goals</li>
              <li>• On-site game host</li>
            </ul>
            <p className="text-2xl font-extrabold mb-6">$250</p>
            <button onClick={scrollToBooking} className="px-8 py-3 bg-pink-500 hover:bg-pink-600 rounded-full font-bold shadow-lg">
              Book Birthday
            </button>
          </div>
          <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-md shadow-xl hover:scale-105 transition-transform border-4 border-yellow-400">
            <h3 className="text-3xl font-bold mb-4">🏢 Corporate Clash</h3>
            <ul className="space-y-2 mb-4 text-white/90">
              <li>• 3 hours play time</li>
              <li>• 12 bubble balls + team games</li>
              <li>• Icebreakers & rotations</li>
            </ul>
            <p className="text-2xl font-extrabold mb-6">$400</p>
            <button onClick={scrollToBooking} className="px-8 py-3 bg-yellow-400 text-black hover:bg-yellow-500 rounded-full font-bold shadow-lg">
              Book Corporate
            </button>
          </div>
          <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-md shadow-xl hover:scale-105 transition-transform">
            <h3 className="text-3xl font-bold mb-4">🏫 School Frenzy</h3>
            <ul className="space-y-2 mb-4 text-white/90">
              <li>• Full day rental</li>
              <li>• 14 bubble balls + equipment</li>
              <li>• Safety briefings included</li>
            </ul>
            <p className="text-2xl font-extrabold mb-6">$600</p>
            <button onClick={scrollToBooking} className="px-8 py-3 bg-green-400 hover:bg-green-500 text-black rounded-full font-bold shadow-lg">
              Book School Event
            </button>
          </div>
        </div>
        <p className="text-center mt-6 text-white/80 text-sm">Travel fees may apply for locations outside the local area. Ask for details.</p>
      </section>

      {/* Booking Form */}
      <section id="booking" className="py-20 px-6">
        <h2 className="text-5xl font-extrabold text-center mb-6">Book Your Bubble Ball 🎈</h2>
        <p className="text-center text-white/90 max-w-2xl mx-auto mb-10">
          Fill out the quick form and we'll get back to you to confirm availability and final details.
        </p>
        <form ref={formRef} onSubmit={handleSubmit} className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6 bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-2xl">
          <div>
            <label className="block text-sm mb-2">Name</label>
            <input required name="name" className="w-full px-4 py-3 rounded-xl text-black" placeholder="Jane Doe" />
          </div>
          <div>
            <label className="block text-sm mb-2">Email</label>
            <input required type="email" name="email" className="w-full px-4 py-3 rounded-xl text-black" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm mb-2">Phone</label>
            <input required name="phone" className="w-full px-4 py-3 rounded-xl text-black" placeholder="(555) 555-5555" />
          </div>
          <div>
            <label className="block text-sm mb-2">Event Date</label>
            <input required type="date" name="date" className="w-full px-4 py-3 rounded-xl text-black" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm mb-2">Event Location</label>
            <input required name="location" className="w-full px-4 py-3 rounded-xl text-black" placeholder="Park or gym address" />
          </div>
          <div>
            <label className="block text-sm mb-2">Package</label>
            <select required name="package" className="w-full px-4 py-3 rounded-xl text-black">
              <option value="Birthday Bash">$250 — Birthday Bash</option>
              <option value="Corporate Clash">$400 — Corporate Clash</option>
              <option value="School Frenzy">$600 — School Frenzy</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-2">Preferred Time</label>
            <input name="time" className="w-full px-4 py-3 rounded-xl text-black" placeholder="e.g., 1–3 PM" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm mb-2">Message</label>
            <textarea name="message" rows="4" className="w-full px-4 py-3 rounded-xl text-black" placeholder="Any special requests or details?" />
          </div>
          <div className="md:col-span-2 flex items-center justify-center gap-4">
            <button type="submit" className="px-10 py-4 bg-yellow-400 text-black font-bold rounded-full shadow-xl hover:scale-105 transition-transform">
              Send Request
            </button>
            <button type="button" onClick={scrollToBooking} className="px-10 py-4 bg-pink-600 text-white font-bold rounded-full shadow-xl hover:scale-105 transition-transform">
              Back to Top
            </button>
          </div>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 text-center py-8 text-sm">
        <p>© 2025 Bubble Ball Mayhem | All Rights Reserved</p>
      </footer>
    </div>
  );
}
