import Link from "next/link";

export default function TaxiPlusPage() {
  return (
    <>
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <main className="main-container">
        <div className="card wider-card">
          <Link href="/" className="back-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
              <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
            </svg>
            Back
          </Link>

          <header className="taxi-header">
            <h1 className="taxi-title">TaxiPlus</h1>
            <p className="taxi-subtitle">The Guaranteed Commute</p>
          </header>

          <section className="taxi-section">
            <p className="detailed-text">
              TaxiPlus is a <strong>Guaranteed Commute Platform</strong> designed to solve the chaos and uncertainty of the daily commute, specifically for high-frequency users who waste valuable hours waiting in public transport queues and are often overcharged by unregulated contract drivers. 
            </p>
            <p className="detailed-text">
              By using scheduling and dispatch technology, TaxiPlus allows commuters to book a guaranteed seat and departure time, ensuring on-time travel with a strict maximum wait time of five minutes. 
            </p>
            <p className="detailed-text">
              Our competitive edge is a unique <strong>Value-Based Pricing</strong> model where the premium component of the fare is tied directly to the monetary value of the time saved for the customer, ensuring the price is dynamic and fair while delivering a reliable, premium service accessible to the mass market.
            </p>
          </section>

          <footer className="taxi-footer">
            "Reclaiming the City's Time, One Guaranteed Seat at a Time."
          </footer>
        </div>
      </main>
    </>
  );
}
