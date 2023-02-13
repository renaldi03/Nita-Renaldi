export default function Gift() {
  return (
    <div className="gift">
      <h1>Amplop Digital</h1>
      <p>
        Bagi keluarga dan sahabat yang ingin mengerimkan hadiah,<br></br>{" "}
        silahkan mengirimkannya melalui tautan berikut
      </p>
      <div className="logo-gift">
        <a>
          <img src="gift-box.png" />
        </a>
        <a>
          <img src="wallet.png" />
        </a>
      </div>
    </div>
  );
}
