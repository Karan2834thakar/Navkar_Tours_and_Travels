function Footer() {
  return (
    <footer className="bg-[#2D2A26] text-white py-12 border-t border-[#3D3A36]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl font-black tracking-tighter">NAVKAR</span>
            <span className="text-xs font-bold tracking-[0.2em] text-[#C5A059] uppercase">Tours & Travels</span>
          </div>
          <div className="text-zinc-400 text-sm text-center md:text-right">
            <p>© {new Date().getFullYear()} Navkar Tours and Travels. All rights reserved.</p>
            <p className="mt-1">Crafted for premium travel experiences in Gujarat.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}


export default Footer;

