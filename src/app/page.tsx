import "./media.css";

export default function Home() {
  return (
    <>
      <div className="navbar">
        <div>
          <img src="/assets/rector-cup-navbar.webp" alt="rektor cup" />
          <img src="/assets/Emblem-UC-navbar.webp" alt="ciputra" />
          <img src="/assets/logo-S-sc-navbar.webp" alt="uc" />
        </div>
        <div>
          <a href="#home">Home</a>
          <a href="#countdown">Countdown</a>
        </div>
      </div>

      <div className="gambar" id="home">
        <img className="gedung-belakang" src="/assets/kota2.webp" alt="" />
        <img className="gedung-depan" src="/assets/kota1.webp" alt="" />
        <img className="portal" src="/assets/rector-cup.webp" alt="rektor cup 2025" />
        <img className="awan" src="/assets/awan.webp" alt="" />
      </div>
    </>
  );
}