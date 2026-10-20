import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

const NAMA_PANGGILAN = 'Rifqie'
const N = 38

const dataAwal = [
  {id: 1, nama: 'Nasi Ayam Geprek', harga: 10000 + N * 100, kategori: 'Makanan'},
  {id: 2, nama: 'Es Teh Lemon', harga: 6000, kategori: 'Minuman'},
  {id: 3, nama: 'Mie Goreng Telur', harga: 12000, kategori: 'Makanan'},
  {id: 4, nama: 'Jus Alpukat', harga: 14000, kategori: 'Minuman'},
  {id: 5, nama: 'Bakso Urat', harga: 15000, kategori: 'Makanan'},
]

const gayaJudul = {color: '#1f3a5f', fontSize: '28px'}

function App() {
  const jam = 9
  const [daftarMenu, setDaftarMenu] = useState(dataAwal)
  const [pesanan, setPesanan] = useState({})
  const ubahJumlah = (id, selisih) => 
    setPesanan ((lama) => ({
      ...lama,
      [id]: Math.max(0, (lama[id] || 0) + selisih),
    }))

  return (
    <>
          <h1 classname = "Judul" style={gayaJudul}> Kantin {NAMA_PANGGILAN}</h1>
        <p> {jam < 12 ? 'Selamat Pagi' : 'Selamat Siang'}</p>
        <p> Saldo awal kartu kantin: Rp {(N * 1000).toLocaleString('id-ID')} </p>
        <button
          type="button"
          id="button"
          ClassName="bayar"
          onClick={() => (id = "bayar")}>
          Bayar
        </button>

      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
