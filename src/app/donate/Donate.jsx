"use client";

import "./Donate.scss";
import QRCode from "public/assets/logo/qr.jpeg"
import Image from "next/image";

function Donate() {
  return (
    <div className="donate_page_container">
      <h1
      > Just Scan and pay</h1>
        <Image src={QRCode} alt="QR Code" />
      </div>
  );
}

export default Donate;
