import { useState, useEffect } from "react";
import "./App.css";

import bg from "./images/bg.jpg";
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
  const [page, setPage] = useState ("login");
  const [isAdmin, setIsAdmin] = useState(false);

  const [username, setUsername] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [newPassword, setNewPassword] = useState("");

  const [resetEmail, setResetEmail] = useState("");
  const [resetPassword, setResetPassword] = useState("");

  const [securityCode, setSecurityCode] = useState("");

  const [confirmResetPassword, setConfirmResetPassword] = useState("");

  const [selectedHike, setSelectedHike] = useState(null);

  const [date, setDate] = useState("");
  const [day, setDay] = useState("");

  const [paymentMethod, setPaymentMethod] = useState("");

  const [proof, setProof] = useState(null);

  const [status, setStatus] = useState("idle");

  const [pickupPoint, setPickupPoint] = useState("");

  const [pax, setPax] = useState(1);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");

  const [bookingHistory, setBookingHistory] = useState(
  JSON.parse(localStorage.getItem("bookingHistory")) || []
);

 const [favorites, setFavorites] = useState(
  JSON.parse(localStorage.getItem("favorites")) || []
);

  const [profilePic, setProfilePic] = useState(null);

const [posts, setPosts] = useState(
  JSON.parse(localStorage.getItem("posts")) || [
  {
    text: "Welcome to HIKERS Community 🌄",
    image: null,
    likes: 0
  }
]);

const [postText, setPostText] = useState("");
const [postImage, setPostImage] = useState(null);

const [newMountain, setNewMountain] = useState("");
const [newLocation, setNewLocation] = useState("");
const [newPrice, setNewPrice] = useState("");
const [announcement, setAnnouncement] = useState(
  localStorage.getItem("announcement") || ""
);

const achievements = [
  {
    title: "First Login",
    icon: "🏅",
    description: "Successfully logged into HIKERS",
    unlocked: true
  },

  {
    title: "Explorer",
    icon: "🌄",
    description: "Viewed hiking destinations",
    unlocked: true
  },

  {
    title: "First Booking",
    icon: "📖",
    description: "Book your first hike",
    unlocked: bookingHistory.length >= 1
  },

  {
    title: "Mountain Lover",
    icon: "❤️",
    description: "Add 3 mountains to favorites",
    unlocked: favorites.length >= 3
  },

  {
    title: "Adventurer",
    icon: "🥾",
    description: "Complete 5 bookings",
    unlocked: bookingHistory.length >= 5
  },

  {
    title: "Social Climber",
    icon: "📸",
    description: "Create your first community post",
    unlocked: posts.length > 1
  }
];

useEffect(() => {
  const savedUsername = localStorage.getItem("username");
  const savedPosts = localStorage.getItem("posts");

  if (savedUsername) {
    setUsername(savedUsername);
  }

  if (savedPosts) {
    setPosts(JSON.parse(savedPosts));
  }

  if (email) {
    const savedProfilePic = localStorage.getItem(
      `profilePic_${email}`
    );

    if (savedProfilePic) {
      setProfilePic(savedProfilePic);
    }
  }
}, [email]);

useEffect(() => {
  localStorage.setItem("username", username);
}, [username]);

useEffect(() => {
  localStorage.setItem("posts", JSON.stringify(posts));
}, [posts]);

useEffect(() => {
  if (email) {
    localStorage.setItem(
      `profilePic_${email}`,
      profilePic || ""
    );
  }
}, [profilePic, email]);


useEffect(() => {
  localStorage.setItem(
    "bookingHistory",
    JSON.stringify(bookingHistory)
  );
}, [bookingHistory]);

useEffect(() => {
  localStorage.setItem(
    "favorites",
    JSON.stringify(favorites)
  );
}, [favorites]);

useEffect(() => {
  localStorage.setItem(
    "announcement",
    announcement
  );
}, [announcement]);

  const [hikes, setHikes] = useState([
  {
  name: "Mt. Ulap",
  location: "Benguet",
  difficulty: "Easy",
  price: 1500,
  rating: 4.8,
  badge: "Best for Beginners",
  image: ulap,

  description: "Perfect for beginners with beautiful grassland views and sea of clouds.",
  duration: "4-5 hours",
  guideFee: "₱500",
  bestSeason: "November to February",

  reviews: [
    "⭐⭐⭐⭐⭐ Amazing beginner hike!",
    "⭐⭐⭐⭐ Super relaxing trail.",
    "⭐⭐⭐⭐⭐ Perfect sunrise experience."
  ],

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

  description: "Famous for its breathtaking sea of clouds and freezing summit experience.",
  duration: "8-10 hours",
  guideFee: "₱800",
  bestSeason: "December to February",

  reviews: [
    "⭐⭐⭐⭐⭐ Best hike ever!",
    "⭐⭐⭐⭐⭐ Super worth it.",
    "⭐⭐⭐⭐ Cold but unforgettable."
  ],

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

  description: "Known for rolling trails and beautiful scenic mountain landscapes.",
  duration: "5-6 hours",
  guideFee: "₱400",
  bestSeason: "November to May",

  reviews: [
    "⭐⭐⭐⭐ Great trail!",
    "⭐⭐⭐⭐⭐ Beautiful views.",
    "⭐⭐⭐⭐ Beginner friendly."
  ],

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

  description: "A perfect combination of river trekking and mountain hiking.",
  duration: "5-7 hours",
  guideFee: "₱500",
  bestSeason: "November to May",

  reviews: [
    "⭐⭐⭐⭐⭐ Super fun hike!",
    "⭐⭐⭐⭐ Loved the river crossing.",
    "⭐⭐⭐⭐ Great adventure."
  ],

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

  description: "The highest mountain in the Philippines with challenging trails.",
  duration: "2-3 days",
  guideFee: "₱1500",
  bestSeason: "January to April",

  reviews: [
    "⭐⭐⭐⭐⭐ Ultimate hiking experience!",
    "⭐⭐⭐⭐ Very challenging.",
    "⭐⭐⭐⭐⭐ Worth every step."
  ],

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

  description: "Popular for sunrise hikes and overlooking Laguna scenery.",
  duration: "4-5 hours",
  guideFee: "₱400",
  bestSeason: "November to February",

  reviews: [
    "⭐⭐⭐⭐ Beautiful sunrise.",
    "⭐⭐⭐⭐⭐ Relaxing trail.",
    "⭐⭐⭐⭐ Nice experience."
  ],

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

  description: "Famous for its stunning crater lake and 4x4 adventure.",
  duration: "6-7 hours",
  guideFee: "₱700",
  bestSeason: "November to May",

  reviews: [
    "⭐⭐⭐⭐⭐ Amazing crater!",
    "⭐⭐⭐⭐ Fun ATV ride.",
    "⭐⭐⭐⭐⭐ One of the best views."
  ],

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

  description: "A peaceful hidden gem with relaxing trails and scenic grasslands.",
  duration: "4-5 hours",
  guideFee: "₱400",
  bestSeason: "November to May",

  reviews: [
    "⭐⭐⭐⭐ Peaceful place.",
    "⭐⭐⭐⭐⭐ Hidden paradise.",
    "⭐⭐⭐⭐ Great beginner hike."
  ],

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

  description: "An active volcano trail offering breathtaking island views.",
  duration: "7-9 hours",
  guideFee: "₱900",
  bestSeason: "December to April",

  reviews: [
    "⭐⭐⭐⭐ Challenging but fun.",
    "⭐⭐⭐⭐⭐ Amazing summit.",
    "⭐⭐⭐⭐ Worth the climb."
  ],

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

  description: "Known for dense forest trails and wildlife encounters.",
  duration: "5-7 hours",
  guideFee: "₱500",
  bestSeason: "November to February",

  reviews: [
    "⭐⭐⭐⭐ Great forest hike.",
    "⭐⭐⭐⭐ Nice scenery.",
    "⭐⭐⭐⭐⭐ Refreshing environment."
  ],

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

  description: "Popular day hike with sea of clouds and camping activities.",
  duration: "3-4 hours",
  guideFee: "₱300",
  bestSeason: "November to February",

  reviews: [
    "⭐⭐⭐⭐ Great for camping.",
    "⭐⭐⭐⭐⭐ Sea of clouds was beautiful.",
    "⭐⭐⭐⭐ Easy hike."
  ],

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

  description: "A high-altitude mountain with rich biodiversity and stunning views.",
  duration: "2 days",
  guideFee: "₱1200",
  bestSeason: "December to February",

  reviews: [
    "⭐⭐⭐⭐⭐ Breathtaking summit.",
    "⭐⭐⭐⭐ Tough but rewarding.",
    "⭐⭐⭐⭐⭐ Memorable experience."
  ],

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

  description: "Famous for its long rocky trail and cool summit weather.",
  duration: "10-12 hours",
  guideFee: "₱700",
  bestSeason: "November to February",

  reviews: [
    "⭐⭐⭐⭐ Very long trail.",
    "⭐⭐⭐⭐⭐ Worth the challenge.",
    "⭐⭐⭐⭐ Beautiful summit."
  ],

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

  description: "Known for coastal cliffs and breathtaking ocean views.",
  duration: "4-6 hours",
  guideFee: "₱500",
  bestSeason: "November to May",

  reviews: [
    "⭐⭐⭐⭐⭐ Amazing coastline.",
    "⭐⭐⭐⭐ Relaxing place.",
    "⭐⭐⭐⭐ Great photos."
  ],

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

  description: "A rainforest mountain rich in flora, fauna, and natural hot springs.",
  duration: "6-7 hours",
  guideFee: "₱500",
  bestSeason: "November to February",

  reviews: [
    "⭐⭐⭐⭐ Nature trip talaga.",
    "⭐⭐⭐⭐⭐ Fresh environment.",
    "⭐⭐⭐⭐ Enjoyed the trail."
  ],

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

  description: "A majestic waterfall destination with relaxing nature scenery.",
  duration: "3-5 hours",
  guideFee: "₱400",
  bestSeason: "November to May",

  reviews: [
    "⭐⭐⭐⭐⭐ Beautiful waterfall!",
    "⭐⭐⭐⭐ Relaxing place.",
    "⭐⭐⭐⭐ Great adventure."
  ],

  pickup: ["Vigan", "Candon", "Ilocos Sur Proper"]
},
  ]);

const filteredHikes = hikes.filter((hike) => {
  const matchesSearch = hike.name
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesFilter =
    filter === "All" ||
    hike.difficulty === filter;

  return matchesSearch && matchesFilter;
});


  const handleLogin = async (e) => {
  e.preventDefault();

  const res = await fetch("http://localhost:5000/login", {
    method: "POST",
    headers: { 
      "Content-Type": "application/json" 
    },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();

  if (data.error) {
    alert(data.error);
  } else {

    setUsername(data.name);
    setEmail(data.email);

    if (
      email === "admin@gmail.com" &&
      password === "admin123"
    ) {
      setIsAdmin(true);
    }

    setPage("dashboard");
  }
};

  const handleRegister = async () => {

  if (!username || !email || !password || !confirmPassword) {
    alert("Please fill up all fields");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  }

  const res = await fetch("http://localhost:5000/register", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: username,
    email,
    password
  })
});

  const data = await res.json();

  alert(data.message);

  if (!data.error) {
    setPage("login");
  }
};

const handleResetPassword = async () => {

  if (!resetEmail || !resetPassword || !confirmResetPassword) {
    alert("Please fill up all fields");
    return;
  }

  if (resetPassword !== confirmResetPassword) {
    alert("Passwords do not match");
    return;
  }

  if (securityCode !== "HIKERS123") {
    alert("Invalid security code");
    return;
  }

  const res = await fetch("http://localhost:5000/reset-password", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: resetEmail,
      newPassword: resetPassword
    })
  });

  const data = await res.json();

  alert(data.message);

  if (!data.error) {
    setPage("login");
  }
};

if (page === "dashboard") {

  // ================= ADMIN DASHBOARD =================
  if (isAdmin) {
    return (
      <div className="container center">
        <div className="card">
          <h1>ADMIN PANEL 👑</h1>

          <button
            className="btn"
            onClick={() => setPage("admin")}
          >
            Manage Bookings 📖
          </button>

          <button
            className="btn"
            onClick={() => setPage("addMountain")}
          >
            Add Mountains ⛰️
          </button>

          <button
            className="btn"
            onClick={() => {
              setIsAdmin(false);
              setPage("login");
            }}
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  // ================= USER DASHBOARD =================
  return (
    <div className="container center">
      <div className="card">
        <h1>Welcome to HIKERS 🌄</h1>

<div
  style={{
    background: "#fff3cd",
    padding: "10px",
    borderRadius: "10px",
    marginBottom: "20px",
    color: "#000"
  }}
>
  📢 {announcement || "No announcements"}
</div>

        <button className="btn" onClick={() => setPage("explore")}>
          Explore Hikes 🔥
        </button>

        <button
          className="btn"
          onClick={() => setPage("community")}
        >
          Community 🌍
        </button>

        <button
          className="btn"
          onClick={() => setPage("safety")}
        >
          Safety Tips 🚨
        </button>

        <button
          className="btn"
          onClick={() => setPage("achievements")}
        >
          Achievements 🏆
        </button>

        <button
          className="btn"
          onClick={() => setPage("history")}
        >
          Booking History 📖
        </button>

        <button
          className="btn"
          onClick={() => setPage("profile")}
        >
          User Profile 👤
        </button>

        <button
          className="btn"
          onClick={() => {
            setPage("login");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

if (page === "register") {
  return (
    <div className="container center">
      <div className="card">

        <h2>Create Account 🌄</h2>

        <input
          type="text"
          className="input"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="email"
          className="input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          className="input"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button
          className="btn"
          onClick={handleRegister}
        >
          Create Account
        </button>

        <button
          className="btn"
          onClick={() => setPage("login")}
        >
          Back
        </button>

      </div>
    </div>
  );
}

if (page === "forgot") {
  return (
    <div className="container center">
      <div className="card">

        <h2>Forgot Password 🔑</h2>

        <input
          type="email"
          className="input"
          placeholder="Enter your email"
          value={resetEmail}
          onChange={(e) => setResetEmail(e.target.value)}
        />

        <input
          type="password"
          className="input"
          placeholder="Enter new password"
          value={resetPassword}
          onChange={(e) => setResetPassword(e.target.value)}
        />

<input
  type="password"
  className="input"
  placeholder="Confirm New Password"
  value={confirmResetPassword}
  onChange={(e) => setConfirmResetPassword(e.target.value)}
/>

<input
  type="text"
  className="input"
  placeholder="Security Code"
  value={securityCode}
  onChange={(e) => setSecurityCode(e.target.value)}
/>

        <button
          className="btn"
          onClick={handleResetPassword}
        >
          Reset Password
        </button>

        <button
          className="btn"
          onClick={() => setPage("login")}
        >
          Back
        </button>

      </div>
    </div>
  );
}

if (page === "profile") {
  return (
    <div className="container center">
      <div className="card">

        <h2>User Profile 👤</h2>

        <div style={{ marginBottom: "20px" }}>

  <img
    src={
  profilePic
    ? profilePic
    : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
}
    alt="profile"
    style={{
      width: "120px",
      height: "120px",
      borderRadius: "50%",
      objectFit: "cover",
      marginBottom: "10px",
      border: "4px solid #4facfe"
    }}
  />

  <input
    type="file"
    className="input"
    accept="image/*"
    onChange={(e) => {
  const file = e.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfilePic(reader.result);
    };

    reader.readAsDataURL(file);
  }
}}
  />

</div>

        <input
  type="text"
  className="input"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
  placeholder="Enter Username"
/>

<p>👤 Username: {username}</p>
<p>📧 Email: {email}</p>
        <hr />

        <h3>Favorite Mountains ❤️</h3>

        {favorites.length === 0 ? (
          <p>No favorites yet.</p>
        ) : (
          favorites.map((fav, index) => (
            <p key={index}>🏔️ {fav}</p>
          ))
        )}

        <hr />

        <h3>Total Bookings 📖</h3>
        <p>{bookingHistory.length} Bookings</p>

        <button
          className="btn"
          onClick={() => setPage("dashboard")}
        >
          Back
        </button>

      </div>
    </div>
  );
}


if (page === "history") {
  return (
    <div className="container center">
      <div className="card">

        <h2>Booking History 📖</h2>

        {bookingHistory.length === 0 ? (
          <p>No bookings yet.</p>
        ) : (
          bookingHistory.map((booking, index) => (
            <div key={index}>
              <p>🏔️ {booking.hike}</p>
              <p>📅 {booking.date}</p>
              <p
  style={{
    color:
      booking.status === "Confirmed"
        ? "lime"
        : booking.status === "Rejected"
        ? "red"
        : "yellow",
    fontWeight: "bold"
  }}
>
  📌 Status: {booking.status}
</p>

              <hr />
            </div>
          ))
        )}

        <button
          className="btn"
          onClick={() => setPage("dashboard")}
        >
          Back
        </button>

      </div>
    </div>
  );
}

if (page === "safety") {
  return (
    <div className="container center">
      <div className="card">

        <h2>Safety Tips 🚨</h2>

        <p>💧 Bring enough water</p>
        <p>👟 Wear proper hiking shoes</p>
        <p>🌦️ Check the weather</p>
        <p>🎒 Bring flashlight and first aid kit</p>
        <p>📱 Inform your family before hiking</p>

        <hr />

        <h2>Emergency Contacts ☎️</h2>

        <p>🚑 Red Cross: 143</p>
        <p>🚓 Police: 911</p>
        <p>🏥 Local Rescue Team</p>

        <button
          className="btn"
          onClick={() => setPage("dashboard")}
        >
          Back
        </button>

      </div>
    </div>
  );
}

if (page === "achievements") {
  return (
    <div className="container center">
      <div className="card">

        <h2>Achievements 🏆</h2>

        {achievements.map((badge, index) => (
          <div
            key={index}
            style={{
              background: badge.unlocked
                ? "rgba(255,255,255,0.15)"
                : "rgba(255,255,255,0.05)",

              border: badge.unlocked
                ? "2px solid gold"
                : "1px solid gray",

              padding: "15px",
              borderRadius: "15px",
              marginBottom: "15px",
              opacity: badge.unlocked ? 1 : 0.5
            }}
          >
            <h1>{badge.icon}</h1>

            <h3>{badge.title}</h3>

            <p>{badge.description}</p>

            <p
              style={{
                color: badge.unlocked ? "lime" : "gray",
                fontWeight: "bold"
              }}
            >
              {badge.unlocked
                ? "UNLOCKED ✅"
                : "LOCKED 🔒"}
            </p>
          </div>
        ))}

        <button
          className="btn"
          onClick={() => setPage("dashboard")}
        >
          Back
        </button>

      </div>
    </div>
  );
}

if (page === "community") {
  return (
    <div className="container center">
      <div className="card"
 style={{
    width: "700px",
    maxHeight: "90vh"
  }}
>

        <h2>Hiking Community 🌍</h2>

        <textarea
          className="input"
          placeholder="Share your hiking experience..."
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
        />

        <input
          type="file"
          className="input"
          accept="image/*"
          onChange={(e) => setPostImage(e.target.files[0])}
        />

        <button
          className="btn"
          onClick={() => {
            if (!postText) return;

          setPosts([
  {
    text: postText,
    image: postImage
      ? URL.createObjectURL(postImage)
      : null,
    likes: 0
  },
  ...posts
]);

            setPostText("");
            setPostImage(null);
          }}
        >
          Post 📸
        </button>

        <hr />

<div
  style={{
    maxHeight: "500px",
    overflowY: "auto",
    paddingRight: "10px",
    marginTop: "20px"
  }}
>

  {posts.map((post, index) => (
    <div
      key={index}
      style={{
        marginBottom: "20px",
        textAlign: "left"
      }}
    >
            <p>👤 {username}</p>

            <p>{post.text}</p>

            {post.image && (
              <img
                src={post.image}
                alt=""
                style={{
                  width: "100%",
                  borderRadius: "10px"
                }}
              />
            )}

            <button
  className="btn"
  onClick={() => {
    const updated = [...posts];

    updated[index].likes += 1;

    setPosts(updated);
  }}
>
  ❤️ {post.likes} Likes
</button>

            <hr />
          </div>
        ))}
        </div>

        <button
          className="btn"
          onClick={() => setPage("dashboard")}
        >
          Back
        </button>

      </div>
    </div>
  );
}

if (page === "admin") {
  if (!isAdmin) {
    return (
      <div className="container center">
        <div className="card">
          <h2>Access Denied 🚫</h2>
          <button className="btn" onClick={() => setPage("dashboard")}>
            Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container center">
      <div className="card" style={{ width: "700px" }}>
        <h1>Admin Dashboard 🛠️</h1>

        <hr />

<h3>📢 Admin Announcement</h3>

<input
  className="input"
  type="text"
  placeholder="Enter announcement..."
  value={announcement}
  onChange={(e) => setAnnouncement(e.target.value)}
/>

<p>📢 Current Announcement:</p>
<p>{announcement || "No announcements yet."}</p>

<hr />

        <h3>📊 Website Statistics</h3>

        <p>📖 Total Bookings: {bookingHistory.length}</p>

        <p>
          ✅ Confirmed Bookings:{" "}
          {bookingHistory.filter((b) => b.status === "Confirmed").length}
        </p>

        <p>
          ⏳ Pending Bookings:{" "}
          {bookingHistory.filter((b) => b.status === "Pending").length}
        </p>

        <hr />

        <h3>🏔️ Pending Bookings (FOR APPROVAL)</h3>

        {bookingHistory.length === 0 ? (
          <p>No bookings yet.</p>
        ) : (
          bookingHistory.map((booking, index) => (
            <div
              key={index}
              style={{
                background: "rgba(255,255,255,0.1)",
                padding: "10px",
                borderRadius: "10px",
                marginBottom: "10px"
              }}
            >
              <p>🏔️ {booking.hike}</p>
              <p>📅 {booking.date}</p>
              <p
  style={{
    color:
      booking.status === "Confirmed"
        ? "lime"
        : booking.status === "Rejected"
        ? "red"
        : "yellow",
    fontWeight: "bold"
  }}
>
  📌 Status: {booking.status}
</p>

              {booking.status === "Pending" && (
                <div>
                  <button
                    className="btn"
                    onClick={() => {
                      const updated = [...bookingHistory];
                      updated[index].status = "Confirmed";
                      setBookingHistory(updated);
                    }}
                  >
                    Approve ✅
                  </button>

                  <button
                    className="btn"
                    onClick={() => {
                      const updated = [...bookingHistory];
                      updated[index].status = "Rejected";
                      setBookingHistory(updated);
                    }}
                  >
                    Reject ❌
                  </button>
                </div>
              )}
            </div>
          ))
        )}

        <button className="btn" onClick={() => setPage("dashboard")}>
          Back
        </button>
      </div>
    </div>
  );
}

if (page === "addMountain") {

  return (
    <div className="container center">
      <div className="card">

        <h2>Add New Mountain ⛰️</h2>

        <input
          className="input"
          type="text"
          placeholder="Mountain Name"
          value={newMountain}
          onChange={(e) => setNewMountain(e.target.value)}
        />

        <input
          className="input"
          type="text"
          placeholder="Location"
          value={newLocation}
          onChange={(e) => setNewLocation(e.target.value)}
        />

        <input
          className="input"
          type="number"
          placeholder="Price"
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
        />

        <button
  className="btn"
  onClick={() => {

    const newHike = {
      name: newMountain,
      location: newLocation,
      difficulty: "Easy",
      price: Number(newPrice),
      rating: 5.0,
      badge: "New",
      image: ulap,

      description: "New hiking destination.",
      duration: "4-5 hours",
      guideFee: "₱500",
      bestSeason: "November to February",

      reviews: [
        "⭐⭐⭐⭐⭐ Amazing hike!"
      ],

      pickup: ["SM North"]
    };

    setHikes([...hikes, newHike]);

    alert("Mountain Added Successfully ✅");

    setNewMountain("");
    setNewLocation("");
    setNewPrice("");
  }}
>
  Add Mountain
</button>

        <button
          className="btn"
          onClick={() => setPage("dashboard")}
        >
          Back
        </button>

      </div>
    </div>
  );
}


  if (page === "explore") {
    return (
      <div className="container">
        <h1 style={{ textAlign: "center" }}>Explore Hikes 🏔️</h1>

<div style={{ marginBottom: "20px", textAlign: "center" }}>

  <input
    type="text"
    className="input"
    placeholder="Search mountains..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

  <select
    className="input"
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
  >
    <option value="All">All</option>
    <option value="Easy">Easy</option>
    <option value="Moderate">Moderate</option>
    <option value="Hard">Hard</option>
  </select>

</div>


        <div className="grid">
          {filteredHikes.map((hike, index) => (
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
                    setPage("details");
                  }}
                >
                  View Details
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

if (page === "details") {
  return (
    <div className="container center">
      <div className="card">

        <img
          src={selectedHike?.image}
          alt={selectedHike?.name}
          style={{
            width: "100%",
            borderRadius: "10px",
            marginBottom: "15px"
          }}
        />

        <h2>{selectedHike?.name}</h2>

<button
  className="btn"
  onClick={() => {
    if (!favorites.includes(selectedHike?.name)) {
      setFavorites([...favorites, selectedHike?.name]);
    }
  }}
>
  ❤️ Add to Favorites
</button>

        <p>📍 Location: {selectedHike?.location}</p>
        <p>🥾 Difficulty: {selectedHike?.difficulty}</p>
        <p>⭐ Rating: {selectedHike?.rating}</p>
        <p>💰 Price: ₱{selectedHike?.price}</p>

        <hr />

<h3>Gallery 📸</h3>

<img
  src={selectedHike?.image}
  alt={selectedHike?.name}
  style={{
    width: "100%",
    borderRadius: "10px",
    marginBottom: "10px"
  }}
/>

        <h3>Mountain Details ⛰️</h3>

        <p>{selectedHike?.description}</p>

        <p>⏱️ Duration: {selectedHike?.duration}</p>
        <p>🌤️ Best Season: {selectedHike?.bestSeason}</p>
        <p>🧑‍🏫 Guide Fee: {selectedHike?.guideFee}</p>

        <hr />

<hr />

<h3>Location Map 🗺️</h3>

<iframe
  title="map"
  width="100%"
  height="250"
  style={{ borderRadius: "10px" }}
  loading="lazy"
  allowFullScreen
  src={`https://maps.google.com/maps?q=${selectedHike?.location}&output=embed`}
></iframe>

        <h3>Reviews ⭐</h3>

        {selectedHike?.reviews?.map((review, index) => (
          <p key={index}>{review}</p>
        ))}

        <button
          className="btn"
          onClick={() => setPage("schedule")}
        >
          Proceed to Booking
        </button>

        <button
          className="btn"
          onClick={() => setPage("explore")}
        >
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

    setBookingHistory((prev) => [
      ...prev,
      {
        hike: selectedHike?.name,
        date,
        status: "Pending"
      }
    ]);

    alert(
      `⏳ Booking Submitted!
Waiting for admin approval.

${selectedHike?.name}
${date} (${day})
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

<p>
⏳ Countdown Before Hike:
{" "}
{date
  ? Math.ceil(
      (new Date(date) - new Date()) /
      (1000 * 60 * 60 * 24)
    )
  : 0}
 Days Left
</p>

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

       <button
  className="btn"
  onClick={() => setPage("register")}
>
  Register
</button>

<p
  className="register"
  onClick={() => setPage("forgot")}
>
  Forgot Password?
</p>
      </div>
    </div>
  );
}
export default App;