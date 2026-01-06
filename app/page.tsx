"use client";

import { useState, useRef, ChangeEvent } from "react";

export default function Home() {
  const [avatar, setAvatar] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const saveContact = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Samuel Bereket
ORG:TaxiPlus
TITLE:Co-Founder
TEL;TYPE=CELL:+251931585894
EMAIL:samzuss99@gmail.com
URL:https://www.linkedin.com/in/samuel-bereket-44015328b/
END:VCARD`;
    const blob = new Blob([vcard], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Samuel_Bereket.vcf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <main className="main-container">
        <div className="card">
          {/* Avatar Section */}
          <div className="avatar-outer" onClick={handleImageClick}>
            <div className="avatar-inner">
              {avatar ? (
                <img src={avatar} alt="Samuel Bereket" className="avatar-img" />
              ) : (
                <div className="avatar-placeholder">SB</div>
              )}
            </div>
            <div className="upload-hint">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 256 256">
                <path d="M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.72,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56ZM128,184a44,44,0,1,1,44-44A44.05,44.05,0,0,1,128,184Zm0-72a28,28,0,1,0,28,28A28,28,0,0,0,128,112Z"></path>
              </svg>
            </div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              accept="image/*"
              style={{ display: "none" }}
            />
          </div>

          {/* Identity */}
          <h1 className="name">Samuel Bereket</h1>
          <p className="title">Co-Founder of TaxiPlus</p>

          <div className="static-bio">
            Entrepreneur and technology strategist passionate about building scalable solutions that redefine urban mobility and digital experiences.
          </div>

          <div className="headline">
            Business | Entrepreneur | Tech Enthusiast
          </div>

          {/* Expanded Actions */}
          <div className="actions">
            <button onClick={saveContact} className="btn btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                <path d="M208,40H48A16,16,0,0,0,32,56V200a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V56A16,16,0,0,0,208,40Zm0,160H48V56H208V200Zm-24-72a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,128Zm0-32a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,96Zm0,64a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,160Z"></path>
              </svg>
              Save Contact
            </button>

            <a href="tel:+251931585894" className="btn btn-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 256 256">
                <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L143.16,155.3c-15.41-8.23-31.35-24.17-39.58-39.58l16.05-16.05a8.12,8.12,0,0,0,.56-.75,16,16,0,0,0,1.34-15.3l-.06-.13L100.37,36.38A16,16,0,0,0,85.08,26.66a15.23,15.23,0,0,0-4,.54L43.3,40.11a16,16,0,0,0-11.12,14C30.65,142.11,101.42,213,189.5,214.5a16.48,16.48,0,0,0,14.65-11.19l12.91-42.69a15.89,15.89,0,0,0-1.2-12.72A15.4,15.4,0,0,0,222.37,158.46Z"></path>
              </svg>
              Call
            </a>

            <div className="btn-group">
              <a href="https://wa.me/251931585894" target="_blank" rel="noopener noreferrer" className="btn btn-secondary half">
                WhatsApp
              </a>
              <a href="https://t.me/Samuel_bereket" target="_blank" rel="noopener noreferrer" className="btn btn-secondary half">
                Telegram
              </a>
            </div>

            <a href="mailto:samzuss99@gmail.com" className="btn btn-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 256 256">
                <path d="M224,48H32a16,16,0,0,0-16,16V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm-8,144H40V80l88,56,88-56V192ZM128,120,40,64H216Z"></path>
              </svg>
              Email
            </a>

            <a 
              href="https://www.linkedin.com/in/samuel-bereket-44015328b/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 256 256">
                <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0v4.26a36,36,0,0,1,72,11.74Z"></path>
              </svg>
              LinkedIn Profile
            </a>

            <a 
              href="/taxiplus" 
              className="btn btn-secondary"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 256 256">
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"></path>
              </svg>
              What is TaxiPlus
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
