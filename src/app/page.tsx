"use client";
import { useState } from "react";
import { Menu, X, MapPin, Phone, Mail, Shield, Clock, Utensils, Heart, Star, CheckCircle, Award, Users, Baby, BookOpen, Palette, Music, Gamepad2, Sun, GraduationCap, Stethoscope, Bus, Apple, MessageCircle, FileText } from "lucide-react";

const CURRENT_YEAR = 2026;

export default function Home() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-white">
      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-brand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center text-white font-bold">QK</div>
            <div><h1 className="font-bold text-brand-700 leading-none">QUALITY KIDS</h1><p className="text-[10px] tracking-[0.2em] text-brand-500 font-bold">NURSERY SCHOOL - IGANGA</p></div>
          </div>
          <div className="hidden lg:flex gap-6 items-center">
            <a href="#about" className="text-[13px] font-bold hover:text-brand-600">About</a>
            <a href="#classes" className="text-[13px] font-bold hover:text-brand-600">Classes</a>
            <a href="#curriculum" className="text-[13px] font-bold hover:text-brand-600">Curriculum</a>
            <a href="#facilities" className="text-[13px] font-bold hover:text-brand-600">Facilities</a>
            <a href="#fees" className="text-[13px] font-bold hover:text-brand-600">Fees</a>
            <a href="#contact" className="bg-brand-500 text-white px-6 py-2.5 rounded-full font-bold hover:bg-brand-600">Enroll Now</a>
          </div>
          <button className="lg:hidden" onClick={()=>setMobileMenu(!mobileMenu)}>{mobileMenu? <X/> : <Menu/>}</button>
        </div>
        {mobileMenu && (
          <div className="lg:hidden bg-white border-t px-4 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
            <a href="#about" onClick={()=>setMobileMenu(false)} className="block font-bold">About</a>
            <a href="#classes" onClick={()=>setMobileMenu(false)} className="block font-bold">Classes</a>
            <a href="#curriculum" onClick={()=>setMobileMenu(false)} className="block font-bold">Curriculum</a>
            <a href="#facilities" onClick={()=>setMobileMenu(false)} className="block font-bold">Facilities</a>
            <a href="#fees" onClick={()=>setMobileMenu(false)} className="block font-bold">Fees & Admission</a>
            <a href="#contact" onClick={()=>setMobileMenu(false)} className="block bg-brand-500 text-white text-center py-3 rounded-full font-bold">Enroll Now 2026</a>
          </div>
        )}
      </nav>

      {/* HERO - BUS DISSOLVED */}
      <section className="relative pt-[72px] min-h-[88vh] flex items-center overflow-hidden bg-[#2D2460]">
        <div className="absolute inset-0">
          <div className="absolute right-0 top-0 w-full md:w-[75%] h-full">
            <img src="/bus.png" alt="Quality Kids Bus" className="w-full h-full object-cover object-center"/>
            <div className="absolute inset-0 bg-gradient-to-r from-[#2D2460] via-[#2D2460]/85 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#2D2460]/60 to-transparent"></div>
          </div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white border border-white/20 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Star className="w-4 h-4 fill-yellow-300 text-yellow-300"/> #1 Rated Nursery in Iganga • 300+ Happy Families
            </div>
            <h1 className="text-5xl md:text-[68px] font-bold leading-[0.9] text-white tracking-tight">
              A Loving<br/><span className="text-[#C4B5FD]">Start for Your</span><br/>Little One
            </h1>
            <p className="mt-6 text-[17px] text-white/80 leading-relaxed max-w-lg">
              Iganga's most trusted nursery for 2-6 years. Safe transport, healthy meals, ECD-trained teachers, Montessori + Ugandan curriculum.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-white text-[#2D2460] px-8 py-4 rounded-full font-bold text-center shadow-xl hover:bg-gray-100">Book Free School Tour</a>
              <a href="#fees" className="bg-[#8B7ED8] text-white px-8 py-4 rounded-full font-bold text-center hover:bg-[#7A6BC5]">View Fees 2026</a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-white/70">
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400"/> Licensed</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400"/> Safe Van</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400"/> Meals Included</div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white -mt-10 relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-brand-100 p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex gap-3"><div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center"><Shield className="text-brand-500"/></div><div><p className="font-bold">Safe & Secure</p><p className="text-xs text-gray-500">Fenced, CCTV, matrons 24/7</p></div></div>
          <div className="flex gap-3"><div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center"><Bus className="text-brand-500"/></div><div><p className="font-bold">School Van</p><p className="text-xs text-gray-500">Iganga town routes, safe driver</p></div></div>
          <div className="flex gap-3"><div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center"><Utensils className="text-brand-500"/></div><div><p className="font-bold">Meals Included</p><p className="text-xs text-gray-500">Breakfast, lunch, fruits, water</p></div></div>
          <div className="flex gap-3"><div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center"><Heart className="text-brand-500"/></div><div><p className="font-bold">1:12 Ratio</p><p className="text-xs text-gray-500">ECD trained, loving teachers</p></div></div>
        </div>
      </section>

      {/* WHY CHOOSE US - 6 REASONS */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-brand-500 font-bold tracking-widest text-xs">WHY PARENTS CHOOSE US</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Everything Your Child Needs to Thrive</h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            {icon: Shield, title:"Safety First, Always", desc:"Gated compound, CCTV, sign-in/out book, no child leaves without parent card. Trained matron on site."},
            {icon: BookOpen, title:"Montessori + Ugandan Curriculum", desc:"Play-based learning, early literacy, numeracy, local language, RE, and school readiness for P1."},
            {icon: Stethoscope, title:"Health & Hygiene", desc:"Daily health check, handwashing stations, clean toilets for small kids, first aid, deworming support."},
            {icon: Apple, title:"Nutrition Program", desc:"Balanced porridge at 10am, rice/posho + beans + veggies at lunch, fruits twice a week, clean drinking water."},
            {icon: Users, title:"Parent Partnership", desc:"Weekly WhatsApp reports, termly open days, parent-teacher chats, homework help group."},
            {icon: Award, title:"Holistic Growth", desc:"Music, dance, art, sports, manners, prayers, confidence building, potty training support."},
          ].map(i=>(
            <div key={i.title} className="bg-brand-50 border border-brand-100 rounded-[1.8rem] p-7">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm"><i.icon className="w-6 h-6 text-brand-600"/></div>
              <h3 className="font-bold text-lg mt-4">{i.title}</h3>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">{i.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT + A DAY */}
      <section id="about" className="py-16 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-brand-500 font-bold tracking-widest text-xs">ABOUT QUALITY KIDS</p>
          <h2 className="text-4xl font-bold mt-3 leading-tight">More Than a Nursery, A Second Home in Iganga</h2>
          <p className="mt-6 text-gray-600 leading-relaxed">Founded in 2019 to give Iganga children a loving, quality start. We focus ONLY on Baby to Top Class (2-6 years), not mixed with primary. That means small chairs, small toilets, big love.</p>
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div className="bg-brand-50 rounded-2xl p-4"><p className="text-2xl font-bold text-brand-700">7+</p><p className="text-xs">Years of Care</p></div>
            <div className="bg-brand-50 rounded-2xl p-4"><p className="text-2xl font-bold text-brand-700">12</p><p className="text-xs">Trained Teachers</p></div>
            <div className="bg-brand-50 rounded-2xl p-4"><p className="text-2xl font-bold text-brand-700">300+</p><p className="text-xs">Families</p></div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3">
            <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=400&h=300&fit=crop" className="rounded-2xl h-44 object-cover w-full"/>
            <img src="https://images.unsplash.com/photo-1607211851821-8be3cd6146f0?w=400&h=300&fit=crop" className="rounded-2xl h-44 object-cover w-full"/>
          </div>
        </div>
        <div className="bg-brand-900 text-white rounded-[2rem] p-8">
          <h3 className="font-bold text-xl flex items-center gap-2"><Clock className="text-brand-300"/> A Typical Day</h3>
          <div className="mt-6 space-y-5">
            <div className="flex gap-4"><span className="font-bold text-brand-300 w-12">7:30</span><p className="text-sm"><b>Van Pick-up</b> - Home collection (optional)</p></div>
            <div className="flex gap-4"><span className="font-bold text-brand-300 w-12">8:00</span><p className="text-sm"><b>Arrival & Health Check</b> - Welcome, handwash, porridge</p></div>
            <div className="flex gap-4"><span className="font-bold text-brand-300 w-12">9:00</span><p className="text-sm"><b>Circle Time & Literacy</b> - Phonics, stories, Luganda & English</p></div>
            <div className="flex gap-4"><span className="font-bold text-brand-300 w-12">10:30</span><p className="text-sm"><b>Break & Outdoor Play</b> - Slides, swings, sandpit</p></div>
            <div className="flex gap-4"><span className="font-bold text-brand-300 w-12">12:30</span><p className="text-sm"><b>Lunch & Nap</b> - Healthy meal + rest for babies</p></div>
            <div className="flex gap-4"><span className="font-bold text-brand-300 w-12">2:00</span><p className="text-sm"><b>Creative & MDD</b> - Art, music, dance, games</p></div>
            <div className="flex gap-4"><span className="font-bold text-brand-300 w-12">3:30</span><p className="text-sm"><b>Pick-up / Van Drop</b> - Homework note & parent chat</p></div>
          </div>
          <div className="mt-8 bg-white/10 rounded-2xl p-4 text-xs text-white/70">We also have Saturday clubs: Bible Club, Art Club & Catch-up for Top Class.</div>
        </div>
      </section>

      {/* CLASSES */}
      <section id="classes" className="bg-brand-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto"><h2 className="text-4xl font-bold">Our Nursery Classes</h2><p className="mt-3 text-gray-600">Age-appropriate, small classes, purple & white uniform</p></div>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              {age:"2-3 Years • Baby", title:"Baby Class", img:"https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop", desc:"First time away from mum? We make it gentle. Potty training, sensory play, language, cuddles.", list:["Potty training support","Language & rhymes","Sensory & outdoor play","Monthly progress note"]},
              {age:"4 Years • Middle", title:"Middle Class", img:"https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop", desc:"Building confidence & independence. Early literacy & numeracy through play.", list:["Phonics A-Z, 1-50","Art, puzzles, sharing","Manners & prayers","Small toilets & chairs"]},
              {age:"5-6 Years • Top", title:"Top Class", img:"https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?w=600&h=400&fit=crop", desc:"Fully ready for Primary One. Reading, writing, graduation & awards day.", list:["Reading 3-letter words","Writing & math ready","School readiness test","Graduation gown ceremony"]},
            ].map(c=>(
              <div key={c.title} className="bg-white rounded-[2rem] overflow-hidden border border-brand-100 shadow-sm hover:shadow-lg transition">
                <img src={c.img} alt={c.title} className="h-56 w-full object-cover"/>
                <div className="p-7"><span className="text-xs font-bold bg-brand-100 text-brand-700 px-3 py-1 rounded-full">{c.age}</span><h3 className="font-bold text-2xl mt-3">{c.title}</h3><p className="text-sm text-gray-600 mt-2">{c.desc}</p><ul className="mt-4 space-y-1">{c.list.map(l=><li key={l} className="text-xs flex gap-2"><CheckCircle className="w-4 h-4 text-brand-500 flex-shrink-0"/>{l}</li>)}</ul></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section id="curriculum" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-brand-500 font-bold tracking-widest text-xs">CURRICULUM</p>
            <h2 className="text-4xl font-bold mt-2">Learning Through Play</h2>
            <p className="mt-4 text-gray-600">We follow Uganda ECD framework + Montessori inspiration. No caning, lots of love.</p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="border rounded-2xl p-5"><Palette className="text-brand-500"/><p className="font-bold mt-2 text-sm">Literacy & Language</p><p className="text-xs text-gray-500 mt-1">English, Luganda, storytelling, phonics</p></div>
              <div className="border rounded-2xl p-5"><BookOpen className="text-brand-500"/><p className="font-bold mt-2 text-sm">Numeracy</p><p className="text-xs text-gray-500 mt-1">Counting, shapes, sorting, simple addition</p></div>
              <div className="border rounded-2xl p-5"><Sun className="text-brand-500"/><p className="font-bold mt-2 text-sm">Environmental</p><p className="text-xs text-gray-500 mt-1">Animals, plants, weather, hygiene</p></div>
              <div className="border rounded-2xl p-5"><Music className="text-brand-500"/><p className="font-bold mt-2 text-sm">Creative & MDD</p><p className="text-xs text-gray-500 mt-1">Music, dance, art, drama</p></div>
            </div>
          </div>
          <div className="bg-brand-50 rounded-[2rem] p-6 border">
            <h3 className="font-bold">What Your Child Will Achieve by Top Class</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {["Read simple 3-4 letter words","Write name & numbers 1-100","Count, add & subtract to 20","Speak confidently in English","Use toilet independently","Pray, share, say please/thank you","Hold pencil correctly","Ready for P1 interview anywhere in Iganga"].map(t=>(
                <li key={t} className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0"/>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section id="facilities" className="bg-brand-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center">Our Facilities</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {t:"Colorful Classrooms", d:"Child-sized furniture, learning corners, alphabet charts"},
              {t:"Safe Playground", d:"Swings, slides, sandpit, soft grass, shade"},
              {t:"Clean Toilets", d:"Small toilets for kids, handwashing, soap always"},
              {t:"Kitchen & Dining", d:"Clean kitchen, small tables & chairs for meals"},
              {t:"Sick Bay & First Aid", d:"First aid kit, matron, parent call if child unwell"},
              {t:"Secure Compound", d:"Wall fence, gate, guard, no hawker entry"},
            ].map(f=>(
              <div key={f.t} className="bg-white/10 border border-white/10 rounded-2xl p-6"><h4 className="font-bold">{f.t}</h4><p className="text-sm text-white/70 mt-2">{f.d}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY + TESTIMONIALS */}
      <section id="gallery" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-bold">Happy Days at Quality Kids</h2>
          <p className="text-sm text-gray-600 mt-2">Replace with real photos in light purple uniform - parents love seeing real kids</p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=400&fit=crop" className="rounded-3xl aspect-square object-cover"/>
            <img src="https://images.unsplash.com/photo-1540479859555-17af45c78602?w=400&h=400&fit=crop" className="rounded-3xl aspect-square object-cover"/>
            <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=400&fit=crop" className="rounded-3xl aspect-square object-cover"/>
            <img src="https://images.unsplash.com/photo-1605627079912-97c3810a11a4?w=400&h=400&fit=crop" className="rounded-3xl aspect-square object-cover"/>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-2xl">What Parents Say</h3>
          <div className="mt-6 space-y-4">
            {[
              {n:"Mama Aisha, Baby Class parent", t:"My daughter joined at 2.5 years crying everyday. Now she runs to school! Teachers are so patient. And van picks her safely."},
              {n:"Papa Daniel, Middle Class", t:"They taught my son to read before Top Class. I was shocked. Fees are fair, meals included. Best nursery in Iganga."},
              {n:"Mama Grace, Top Class 2025 Graduate", t:"Graduation was so beautiful, my child got award. Now in P1 and performing well. Quality Kids prepared him well."},
            ].map(r=>(
              <div key={r.n} className="bg-brand-50 border border-brand-100 rounded-2xl p-5"><p className="text-sm italic">“{r.t}”</p><p className="text-xs font-bold mt-3 text-brand-700">— {r.n}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* FEES + ADMISSION */}
      <section id="fees" className="bg-brand-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold">Fees & Admission 2026</h2>
            <p className="text-gray-600 mt-3">Affordable, all-inclusive. No hidden costs.</p>
            <div className="mt-8 bg-white rounded-[2rem] border p-6">
              <div className="flex justify-between items-center border-b pb-4"><span className="font-bold">Item</span><span className="font-bold">Amount (UGX)</span></div>
              <div className="space-y-3 mt-4 text-sm">
                <div className="flex justify-between"><span>Admission (once)</span><span className="font-bold">50,000</span></div>
                <div className="flex justify-between"><span>School Fees / Term (Day)</span><span className="font-bold">350,000 - 400,000</span></div>
                <div className="flex justify-between"><span>School Van / Term (optional)</span><span className="font-bold">150,000</span></div>
                <div className="flex justify-between"><span>Uniform (purple & white)</span><span className="font-bold">80,000</span></div>
                <div className="flex justify-between"><span>Meals, Porridge, Water</span><span className="font-bold text-green-600">INCLUDED</span></div>
                <div className="flex justify-between"><span>Books & Materials</span><span className="font-bold text-green-600">INCLUDED</span></div>
              </div>
              <p className="text-[11px] text-gray-500 mt-6">* 2026 fees - confirm at school. Discount for 2+ siblings. Installments allowed.</p>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-xl">Admission Process - Simple in 4 Steps</h3>
            <div className="mt-6 space-y-4">
              {[
                {s:"1", t:"Visit & Tour", d:"Come Mon-Sat 8am-4pm with child. See classes, playground, van."},
                {s:"2", t:"Pick Form", d:"Fill form + attach immunization card copy + 2 passport photos."},
                {s:"3", t:"Interview", d:"Short chat with Head Teacher + child observation (no exam for baby)."},
                {s:"4", t:"Join Family", d:"Pay admission, get uniform, start next Monday. WhatsApp group added."},
              ].map(st=>(
                <div key={st.s} className="flex gap-4 bg-white border rounded-2xl p-5"><div className="w-10 h-10 bg-brand-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">{st.s}</div><div><p className="font-bold">{st.t}</p><p className="text-sm text-gray-600">{st.d}</p></div></div>
              ))}
            </div>
            <div className="mt-6 bg-white border rounded-2xl p-5 flex gap-3"><FileText className="text-brand-500"/><div><p className="font-bold text-sm">Requirements</p><p className="text-xs text-gray-600">Child 2+ years, immunization card, 2 photos, parent ID. No entrance exam for nursery.</p></div></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center">Parents Ask Frequently</h2>
        <div className="mt-10 space-y-3">
          {[
            {q:"What time does school start & end?", a:"Day scholars: 8:00am - 3:30pm. Van picks at 7:00-7:30am and drops 4:00-4:30pm. We have aftercare till 5pm at extra 20k/week."},
            {q:"Do you provide food? My child is picky.", a:"Yes, breakfast porridge at 10am, lunch rice/posho + beans + veg at 12:30pm, fruits 2x week, clean water all day. We cater for allergies if informed."},
            {q:"Is transport safe? Driver trained?", a:"Yes, our driver has 10+ years, licensed, slow driving, teacher assistant in van, child never left alone. Van is insured and serviced monthly."},
            {q:"What if my child cries? Potty accidents?", a:"Normal for Baby Class first 1-2 weeks. Our matrons are trained, we allow diapers for first month, extra clothes kept at school. We call mum if needed."},
            {q:"Do you have CCTV? Can I check on my child?", a:"Yes, CCTV at gate & compound. Parents get daily WhatsApp photo/status. You can visit anytime with appointment."},
            {q:"Uniform where to buy?", a:"Light purple and white available at school shop 80k full set. Also allowed from Iganga town tailor with our sample."},
          ].map((f,i)=>(
            <div key={f.q} className="border rounded-2xl">
              <button onClick={()=>setOpenFaq(openFaq===i?null:i)} className="w-full flex justify-between items-center p-5 text-left font-bold text-sm">
                {f.q}<span className="text-brand-500 text-xl">{openFaq===i?"-":"+"}</span>
              </button>
              {openFaq===i && <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">{f.a}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* MAP - BETTER POSITION */}
      <section id="location" className="bg-white border-y border-brand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-2">
            <p className="text-brand-500 font-bold tracking-widest text-xs">LOCATION</p>
            <h3 className="text-4xl font-bold mt-2">Find Us in Iganga</h3>
            <p className="mt-4 text-gray-600 text-sm leading-relaxed">Safe drop-off & pick-up zone, boda and car parking, school van service for town routes. Come for free tour Mon-Sat.</p>
            <div className="mt-6 space-y-3 text-sm font-semibold">
              <p className="flex gap-2"><MapPin className="w-5 h-5 text-brand-500"/> Iganga Municipality, Near Main Road - Opposite Market</p>
              <p className="flex gap-2"><Phone className="w-5 h-5 text-brand-500"/> 0772 XXX XXX / 0700 XXX XXX (Call/WhatsApp)</p>
              <p className="flex gap-2"><Mail className="w-5 h-5 text-brand-500"/> info@qualitykids.ac.ug</p>
            </div>
            <a href="https://maps.google.com/?q=Iganga,Uganda" target="_blank" className="mt-6 inline-flex items-center gap-2 bg-brand-500 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-brand-600"><MapPin className="w-4 h-4"/> Open in Google Maps</a>
          </div>
          <div className="md:col-span-3 h-[460px] rounded-[2.5rem] overflow-hidden border shadow-xl relative">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.753!2d33.476!3d0.615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177e9a5c5c5c5c5c%3A0x5c5c5c5c!2sIganga%2C%20Uganda!5e0!3m2!1sen!2sug!4v1700000000000" width="100%" height="100%" style={{border:0}} loading="lazy" title="Map"></iframe>
            <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full shadow-lg text-xs font-bold flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div> Open Mon-Sat 7:30am - 5pm</div>
          </div>
        </div>
      </section>

      {/* CONTACT FINAL */}
      <section id="contact" className="bg-brand-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold">Enroll Your Child Today - 2026 Intake Ongoing</h2>
            <p className="mt-4 text-white/70">Limited slots per class (25 max). Baby class fills fast.</p>
            <div className="mt-8 space-y-4">
              <div className="bg-white/10 rounded-2xl p-5 flex gap-3"><MessageCircle className="text-brand-300"/><div><p className="font-bold text-sm">WhatsApp Us</p><p className="text-xs text-white/70">0772 XXX XXX - Quick reply in 10 mins</p></div></div>
              <div className="bg-white/10 rounded-2xl p-5"><p className="font-bold text-sm">Next Steps for You:</p><ul className="text-xs text-white/70 mt-2 space-y-1 list-disc list-inside"><li>Book free tour (30 mins)</li><li>Bring child for observation</li><li>Get admission letter same day</li></ul></div>
            </div>
          </div>
          <form className="bg-white rounded-[2rem] p-8 text-brand-900 space-y-4 shadow-2xl">
            <h3 className="font-bold text-lg">Request Call Back / Tour</h3>
            <div className="grid grid-cols-2 gap-4">
              <input placeholder="Parent Name *" className="px-5 py-4 rounded-2xl bg-brand-50 outline-none focus:ring-2 focus:ring-brand-200 text-sm"/>
              <input placeholder="Phone / WhatsApp *" className="px-5 py-4 rounded-2xl bg-brand-50 outline-none focus:ring-2 focus:ring-brand-200 text-sm"/>
            </div>
            <input placeholder="Child Name & Age e.g. Aisha 3 yrs" className="w-full px-5 py-4 rounded-2xl bg-brand-50 outline-none text-sm"/>
            <select className="w-full px-5 py-4 rounded-2xl bg-brand-50 outline-none text-sm"><option>Baby Class (2-3 yrs)</option><option>Middle Class (4 yrs)</option><option>Top Class (5-6 yrs)</option></select>
            <select className="w-full px-5 py-4 rounded-2xl bg-brand-50 outline-none text-sm"><option>Need Transport? - Yes, need van</option><option>No, we will drop</option></select>
            <textarea placeholder="Any question? Allergy, etc (optional)" rows={2} className="w-full px-5 py-4 rounded-2xl bg-brand-50 outline-none text-sm"></textarea>
            <button type="button" className="w-full bg-brand-500 text-white py-4 rounded-2xl font-bold hover:bg-brand-600">Request Call Back in 10 mins</button>
            <p className="text-[11px] text-center text-gray-500">By submitting, you agree to be contacted via call/WhatsApp. No spam.</p>
          </form>
        </div>
        <footer className="mt-16 border-t border-white/10 pt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8 text-sm">
            <div><p className="font-bold">QUALITY KIDS NURSERY</p><p className="text-xs text-white/50 mt-2">Light purple & white • Iganga • Baby to Top Class • Safe, loving, quality.</p></div>
            <div><p className="font-bold">Classes</p><p className="text-xs text-white/60 mt-2 leading-6">Baby Class (2-3yrs)<br/>Middle Class (4yrs)<br/>Top Class (5-6yrs)</p></div>
            <div><p className="font-bold">Information</p><p className="text-xs text-white/60 mt-2 leading-6">Fees Structure<br/>Uniform<br/>School Van Routes<br/>Meals & Health</p></div>
            <div><p className="font-bold">Contact</p><p className="text-xs text-white/60 mt-2 leading-6">0772 XXX XXX<br/>info@qualitykids.ac.ug<br/>Iganga Municipality</p></div>
          </div>
          <div className="text-center text-[11px] text-white/30 mt-10">© {CURRENT_YEAR} Quality Kids Nursery School, Iganga. Demo website for pitch - built with love.</div>
        </footer>
      </section>
    </main>
  );
}