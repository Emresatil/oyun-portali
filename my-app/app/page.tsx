export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 p-8 text-white font-sans">
      <div className="w-full max-w-2xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-emerald-400">
          Geliştirici Portfolyosu
        </h1>
        
        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-2xl">
          <h2 className="text-2xl font-semibold mb-2">Eğitim</h2>
          <p className="text-zinc-400 text-lg mb-8">
            Kahramanmaraş İstiklal Üniversitesi <br/>
            Dijital Oyun Tasarımı (4. Sınıf)
          </p>

          <h2 className="text-2xl font-semibold mb-4">İlgi Alanları ve Yetkinlikler</h2>
          <ul className="list-disc list-inside text-zinc-300 space-y-2">
            <li>Unity ile Oyun Geliştirme & C#</li>
            <li>Blender ile 3D Modelleme</li>
            <li>Kullanıcı Arayüzü (UI) Tasarımı</li>
            <li>Web Programlama</li>
          </ul>
        </div>
      </div>
    </main>
  );
}