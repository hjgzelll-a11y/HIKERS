import { useState } from "react";
import "./App.css";

import ulap from "./images/ulap.jpg";
import pulag from "./images/pulag.jpeg";
import batulao from "./images/batulao.jpg";
import daraitan from "./images/daraitan.jpg";
import apo from "./images/apo.jpg";
import kalisungan from "./images/kalisungan.jpg";
import pinatubo from "./images/pinatubo.jpg";
import mariglem from "./images/mariglem.jpg";
import hibok from "./images/hibok.jpg";
import arayat from "./images/arayat.jpg";
import kulis from "./images/kulis.jpg";
import kitanglad from "./images/kitanglad.jpg";
import tapulao from "./images/tapulao.jpg";
import dingalan from "./images/dingalan.jpg";
import makiling from "./images/makiling.jpg";
import awasen from "./images/awasen.jpg";

function App() {
  const [page, setPage] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [selectedHike, setSelectedHike] = useState(null);
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [proof, setProof] = useState(null);
  const [status, setStatus] = useState("idle"); 
  const [pickupPoint, setPickupPoint] = useState("");
  const [pax, setPax] = useState(1);

  const hikes = [
  {
    name: "Mt. Ulap",
    location: "Benguet",
    difficulty: "Easy",
    price: 1500,
    rating: 4.8,
    badge: "Best for Beginners",
    image: ulap,
    pickup: ["SM North", "Cubao", "Baguio Terminal"]
  },
  {
    name: "Mt. Pulag",
    location: "Benguet",
    difficulty: "Hard",
    price: 2500,
    rating: 5.0,
    badge: "Most Popular",
    image: pulag,
    pickup: ["SM North", "Cubao", "Victory Liner Pasay", "Baguio"]
  },
  {
    name: "Mt. Batulao",
    location: "Batangas",
    difficulty: "Moderate",
    price: 1500,
    rating: 4.5,
    badge: "Scenic Views",
    image: batulao,
    pickup: ["Alabang", "Buendia", "Pasay"]
  },
  {
    name: "Mt. Daraitan",
    location: "Rizal",
    difficulty: "Moderate",
    price: 1500,
    rating: 4.6,
    badge: "River + Hike",
    image: daraitan,
    pickup: ["Cubao", "SM Masinag", "Marikina"]
  },
  {
    name: "Mt. Apo",
    location: "Davao",
    difficulty: "Hard",
    price: 3000,
    rating: 4.9,
    badge: "Challenging",
    image: apo,
    pickup: ["Davao City Proper", "Airport Pickup"]
  },
  {
  name: "Mt. Kalisungan",
  location: "Laguna",
  difficulty: "Moderate",
  price: 1600,
  rating: 4.5,
  badge: "Sunrise View",
  image: kalisungan,
  pickup: ["Alabang", "Calamba", "Sta. Cruz Laguna"]
},
  {
    name: "Mt. Pinatubo",
    location: "Zambales",
    difficulty: "Easy",
    price: 3000,
    rating: 4.7,
    badge: "Crater Lake",
    image: pinatubo,
    pickup: ["SM North", "Clark", "Capas Tarlac"]
  },
  {
    name: "Mt. Mariglem",
    location: "Zambales",
    difficulty: "Easy",
    price: 1800,
    rating: 4.4,
    badge: "Hidden Gem",
    image: mariglem,
    pickup: ["Olongapo", "Subic", "San Antonio Zambales"]
  },
  {
    name: "Mt. Hibok-Hibok",
    location: "Camiguin",
    difficulty: "Hard",
    price: 2200,
    rating: 4.6,
    badge: "Volcanic Trail",
    image: hibok,
    pickup: ["Camiguin Port", "Mambajao", "Airport Pickup"]
  },
  {
    name: "Mt. Arayat",
    location: "Pampanga",
    difficulty: "Moderate",
    price: 1600,
    rating: 4.3,
    badge: "Forest Trail",
    image: arayat,
    pickup: ["SM North", "Cubao", "San Fernando Pampanga"]
  },
  {
    name: "Mt. Kulis",
    location: "Rizal",
    difficulty: "Easy",
    price: 1200,
    rating: 4.5,
    badge: "Sea of Clouds",
    image: kulis,
    pickup: ["Cubao", "SM Masinag", "Tanay"]
  },
  {
    name: "Mt. Kitanglad",
    location: "Bukidnon",
    difficulty: "Hard",
    price: 3500,
    rating: 4.9,
    badge: "High Altitude",
    image: kitanglad,
    pickup: ["Cagayan de Oro", "Malaybalay", "Bukidnon Terminal"]
  },
  {
    name: "Mt. Tapulao",
    location: "Zambales",
    difficulty: "Hard",
    price: 2000,
    rating: 4.6,
    badge: "Longest Trail",
    image: tapulao,
    pickup: ["Olongapo", "Subic", "San Marcelino"]
  },
  {
    name: "Dingalan",
    location: "Aurora",
    difficulty: "Easy",
    price: 2500,
    rating: 4.7,
    badge: "Batanes of the East",
    image: dingalan,
    pickup: ["Cubao", "Cabanatuan", "Dingalan Proper"]
  },
  {
    name: "Mt. Makiling",
    location: "Laguna",
    difficulty: "Moderate",
    price: 1500,
    rating: 4.4,
    badge: "Rainforest Trail",
    image: makiling,
    pickup: ["Alabang", "Calamba", "UPLB"]
  },
  {
    name: "Aw-Asen Falls",
    location: "Ilocos Sur",
    difficulty: "Easy",
    price: 2200,
    rating: 4.6,
    badge: "Majestic Falls",
    image: awasen,
    pickup: ["Vigan", "Candon", "Ilocos Sur Proper"]
  }
];

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (data.error) alert(data.error);
    else setPage("dashboard");
  };

  const handleRegister = async () => {
    const res = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: email, email, password })
    });
    const data = await res.json();
    alert(data.message);
  };

  if (page === "dashboard") {
    return (
      <div className="container center">
        <div className="card">
          <h1>Welcome to HIKERS 🌄</h1>
          <button className="btn" onClick={() => setPage("explore")}>
            Explore Hikes 🔥
          </button>
          <button
  className="btn"
  onClick={() => {
    setPage("login");

    setSelectedHike(null);
    setDate("");
    setDay("");
    setPaymentMethod("");
    setProof(null);
    setStatus("idle");
    setPickupPoint("");
  }}
>
  Logout
</button>

         
        </div>
      </div>
    );
  }

  if (page === "explore") {
    return (
      <div className="container">
        <h1 style={{ textAlign: "center" }}>Explore Hikes 🏔️</h1>

        <div className="grid">
          {hikes.map((hike, index) => (
            <div className="hike-card" key={index}>
              <div className="badge">{hike.badge}</div>
              <img src={hike.image} alt={hike.name} />

              <div className="hike-content">
                <h3>{hike.name}</h3>
                <p>📍 {hike.location}</p>
                <p>🥾 {hike.difficulty}</p>
                <p>⭐ {hike.rating}</p>
                <p className="price">₱{hike.price}</p>

                <button
                  className="btn"
                  onClick={() => {
                    setSelectedHike(hike);
                    setPage("schedule");
                  }}
                >
                  Book
                </button>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button className="btn" onClick={() => setPage("dashboard")}>
            Back
          </button>
        </div>
      </div>
    );
  }

  if (page === "schedule") {
    const handleDateChange = (e) => {
      const selectedDate = e.target.value;
      setDate(selectedDate);

      const d = new Date(selectedDate);
      const dayName = d.toLocaleDateString("en-US", { weekday: "long" });
      setDay(dayName);
    };

    return (
      <div className="container center">
        <div className="card">
          <h2>Schedule Hike 🗓️</h2>
          <h3>{selectedHike?.name}</h3>

          <form>
            <input
              type="date"
              className="input"
              value={date}
              onChange={handleDateChange}
              required
            />
            <p>Selected Day: {day}</p>

            <select
  className="input"
  value={pickupPoint}
  onChange={(e) => setPickupPoint(e.target.value)}
  required
  > 
  <option value="">Select Pickup Point</option>
  {selectedHike?.pickup.map((point, index) => (
    <option key={index} value={point}>
      {point}
    </option>
  ))}
</select>
<input
    type="number"
    className="input"
    min="1"
    value={pax}
    onChange={(e) => setPax(e.target.value)}
    placeholder="Number of Pax (1 = Solo Joiner)"
    required
  />

            <button
              type="button"
              className="btn"
              onClick={() => setPage("payment")}
            >
              Proceed to Payment
            </button>
          </form>

          <button className="btn" onClick={() => setPage("explore")}>
            Back
          </button>
        </div>
      </div>
    );
  }

  if (page === "payment") {
    const handlePayment = (e) => {
  e.preventDefault();

  if (!proof) {
    alert("Please upload proof of payment");
    return;
  }

  setStatus("pending");

  setTimeout(() => {
    setStatus("approved");

    alert(
      `✅ Booking Confirmed!\n${selectedHike?.name}\n${date} (${day})
      Pickup: ${pickupPoint}`
    );
    setTimeout(() => {
    setPage("dashboard");
  }, 2000);
}, 3000);
  };

    return (
      <div className="container center">
        <div className="card">
          <h2>Payment 💳</h2>

          <h3>{selectedHike?.name}</h3>
          <p>📅 {date} ({day})</p>
          <p>📍 Pickup: {pickupPoint}</p>
          <p>👥 Pax: {pax}</p>


          <form onSubmit={handlePayment}>
            <select
              className="input"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            >
              <option value="">Select Payment Method</option>
              <option value="GCash">GCash</option>
              <option value="PayMaya">PayMaya</option>
              <option value="Cash">Cash</option>
            </select>

            <input
          type="file"
          className="input"
          accept="image/*"
          onChange={(e) => setProof(e.target.files[0])}
          required
        />

            <button className="btn">Pay Now</button>
          </form>

           {status === "pending" && <p>⏳ Waiting for approval...</p>}
      {status === "approved" && <p>✅ Booking Approved!</p>}

          <button className="btn" onClick={() => setPage("schedule")}>
            Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container center">
      <div className="card">
        <h1 className="title">HIKERS 🌄</h1>
        <p className="subtitle">Login / Register</p>

        <form onSubmit={handleLogin}>
          <input
            className="input"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="btn">Login</button>
        </form>

        <p onClick={handleRegister} className="register">
          Register
        </p>
      </div>
    </div>
  );
}

export default App;