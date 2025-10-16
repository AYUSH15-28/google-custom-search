// // // // // // src/Header/Header.jsx
// // // // // import React, { useState } from "react";
// // // // // import { Routes, Route, Link, useNavigate } from "react-router-dom";
// // // // // import ActionToggle from "../ThemeChanger/ActionToggle.jsx";

// // // // // import All from "../Loading/All.jsx";
// // // // // import Images from "../Loading/Images.jsx";
// // // // // import News from "../Loading/News.jsx";
// // // // // import Vedios from "../Loading/Vedios.jsx";

// // // // // const Header = () => {
// // // // //   const [searchTerm, setSearchTerm] = useState("");
// // // // //   const navigate = useNavigate();

// // // // //   const handleSearch = (e) => {
// // // // //     e.preventDefault();
// // // // //     if (searchTerm.trim()) {
// // // // //       navigate(`/all?search=${searchTerm}`);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <>
     
// // // // //     <div style={styles.container}>
// // // // //         <ActionToggle className="fixed top-5 right-5" />
// // // // //       {/* Search bar with styled Google text */}
// // // // //       <div style={styles.searchBarContainer}>
// // // // //         {/* Styled Google Text */}
// // // // //         <div style={styles.googleText}>
// // // // //           <span style={{ color: "#4285F4" }}>G</span>
// // // // //           <span style={{ color: "#EA4335" }}>o</span>
// // // // //           <span style={{ color: "#FBBC05" }}>o</span>
// // // // //           <span style={{ color: "#4285F4" }}>g</span>
// // // // //           <span style={{ color: "#34A853" }}>l</span>
// // // // //           <span style={{ color: "#EA4335" }}>e</span>
// // // // //         </div>

// // // // //         {/* Search input */}
// // // // //         <form onSubmit={handleSearch} style={styles.searchForm}>
// // // // //           <input
// // // // //             type="text"
// // // // //             placeholder="Search..."
// // // // //             value={searchTerm}
// // // // //             onChange={(e) => setSearchTerm(e.target.value)}
// // // // //             style={styles.searchInput}
// // // // //           />
// // // // //         </form>
// // // // //       </div>

// // // // //       {/* Navigation Menu */}
// // // // //       <nav style={styles.navContainer}>
// // // // //         <ul style={styles.navList}>
// // // // //           <li><Link style={styles.link} to="/all">All</Link></li>
// // // // //           <li><Link style={styles.link} to="/images">Images</Link></li>
// // // // //           <li><Link style={styles.link} to="/news">News</Link></li>
// // // // //           <li><Link style={styles.link} to="/vedios">Vedios</Link></li>
// // // // //         </ul>
// // // // //       </nav>

// // // // //       {/* Routed Content */}
// // // // //       <div style={styles.contentArea}>
// // // // //         <Routes>
// // // // //           <Route path="/all" element={<All />} />
// // // // //           <Route path="/images" element={<Images />} />
// // // // //           <Route path="/news" element={<News />} />
// // // // //           <Route path="/vedios" element={<Vedios />} />
// // // // //         </Routes>
// // // // //       </div>
// // // // //     </div>
// // // // //     </>
// // // // //   );
// // // // // };

// // // // // const styles = {
// // // // //   container: {
// // // // //     backgroundColor: "#202124",
// // // // //     color: "#e8eaed",
// // // // //     minHeight: "100vh",
// // // // //     padding: "20px",
// // // // //     fontFamily: "Arial, sans-serif",
// // // // //   },
// // // // //   searchBarContainer: {
// // // // //     display: "flex",
// // // // //     alignItems: "center",
// // // // //     justifyContent: "center",
// // // // //     gap: "20px",
// // // // //     marginBottom: "20px",
// // // // //   },
// // // // //   googleText: {
// // // // //     fontSize: "30px",
// // // // //     fontWeight: "bold",
// // // // //     letterSpacing: "-2px",
// // // // //     fontFamily: "'Product Sans', Arial, sans-serif",
// // // // //   },
// // // // //   searchForm: {
// // // // //     flex: 1,
// // // // //     maxWidth: "600px",
// // // // //   },
// // // // //   searchInput: {
// // // // //     width: "100%",
// // // // //     padding: "10px 20px",
// // // // //     borderRadius: "24px",
// // // // //     border: "1px solid #5f6368",
// // // // //     backgroundColor: "#303134",
// // // // //     color: "#e8eaed",
// // // // //     fontSize: "16px",
// // // // //     outline: "none",
// // // // //   },
// // // // //   navContainer: {
// // // // //     display: "flex",
// // // // //     justifyContent: "center",
// // // // //     borderBottom: "1px solid #5f6368",
// // // // //     marginBottom: "20px",
// // // // //   },
// // // // //   navList: {
// // // // //     display: "flex",
// // // // //     gap: "30px",
// // // // //     listStyle: "none",
// // // // //     padding: "10px 0",
// // // // //     margin: 0,
// // // // //   },
// // // // //   link: {
// // // // //     color: "#8ab4f8",
// // // // //     textDecoration: "none",
// // // // //     fontSize: "14px",
// // // // //     fontWeight: "500",
// // // // //   },
// // // // //   contentArea: {
// // // // //     padding: "20px",
// // // // //   },
// // // // // };

// // // // // export default Header;
// // // // import React, { useState } from "react";
// // // // import { Routes, Route, Link, useNavigate } from "react-router-dom";
// // // // import { useMantineTheme, useComputedColorScheme } from "@mantine/core";
// // // // import ActionToggle from "../ThemeChanger/ActionToggle.jsx";

// // // // import All from "../Loading/All.jsx";
// // // // import Images from "../Loading/Images.jsx";
// // // // import News from "../Loading/News.jsx";
// // // // import Vedios from "../Loading/Vedios.jsx";

// // // // const Header = () => {
// // // //   const [searchTerm, setSearchTerm] = useState("");
// // // //   const navigate = useNavigate();

// // // //   const theme = useMantineTheme();
// // // //   const computedColorScheme = useComputedColorScheme("light", {
// // // //     getInitialValueInEffect: true,
// // // //   });

// // // //   const handleSearch = (e) => {
// // // //     e.preventDefault();
// // // //     if (searchTerm.trim()) {
// // // //       navigate(`/all?search=${searchTerm}`);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div
// // // //       style={{
// // // //         backgroundColor:
// // // //           computedColorScheme === "dark" ? theme.colors.dark[7] : theme.white,
// // // //         color: computedColorScheme === "dark" ? theme.white : theme.black,
// // // //         minHeight: "100vh",
// // // //         padding: "20px",
// // // //         fontFamily: "Arial, sans-serif",
// // // //       }}
// // // //     >
// // // //       <ActionToggle className="fixed top-5 right-5" />

// // // //       {/* Search bar with styled Google text */}
// // // //       <div style={styles.searchBarContainer}>
// // // //         <div style={styles.googleText}>
// // // //           <span style={{ color: "#4285F4" }}>G</span>
// // // //           <span style={{ color: "#EA4335" }}>o</span>
// // // //           <span style={{ color: "#FBBC05" }}>o</span>
// // // //           <span style={{ color: "#4285F4" }}>g</span>
// // // //           <span style={{ color: "#34A853" }}>l</span>
// // // //           <span style={{ color: "#EA4335" }}>e</span>
// // // //         </div>

// // // //         <form onSubmit={handleSearch} style={styles.searchForm}>
// // // //           <input
// // // //             type="text"
// // // //             placeholder="Search..."
// // // //             value={searchTerm}
// // // //             onChange={(e) => setSearchTerm(e.target.value)}
// // // //             style={{
// // // //               ...styles.searchInput,
// // // //               backgroundColor:
// // // //                 computedColorScheme === "dark"
// // // //                   ? theme.colors.dark[6]
// // // //                   : theme.colors.gray[1],
// // // //               color: computedColorScheme === "dark" ? theme.white : theme.black,
// // // //               border:
// // // //                 computedColorScheme === "dark"
// // // //                   ? "1px solid #5f6368"
// // // //                   : "1px solid #ccc",
// // // //             }}
// // // //           />
// // // //         </form>
// // // //       </div>

// // // //       {/* Navigation Menu */}
// // // //       <nav style={styles.navContainer}>
// // // //         <ul style={styles.navList}>
// // // //           <li><Link style={styles.link} to="/all">All</Link></li>
// // // //           <li><Link style={styles.link} to="/images">Images</Link></li>
// // // //           <li><Link style={styles.link} to="/news">News</Link></li>
// // // //           <li><Link style={styles.link} to="/vedios">Vedios</Link></li>
// // // //         </ul>
// // // //       </nav>

// // // //       {/* Routed Content */}
// // // //       <div style={styles.contentArea}>
// // // //         <Routes>
// // // //           <Route path="/all" element={<All />} />
// // // //           <Route path="/images" element={<Images />} />
// // // //           <Route path="/news" element={<News />} />
// // // //           <Route path="/vedios" element={<Vedios />} />
// // // //         </Routes>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // const styles = {
// // // //   searchBarContainer: {
// // // //     display: "flex",
// // // //     alignItems: "center",
// // // //     justifyContent: "center",
// // // //     gap: "20px",
// // // //     marginBottom: "20px",
// // // //   },
// // // //   googleText: {
// // // //     fontSize: "30px",
// // // //     fontWeight: "bold",
// // // //     letterSpacing: "-2px",
// // // //     fontFamily: "'Product Sans', Arial, sans-serif",
// // // //   },
// // // //   searchForm: {
// // // //     flex: 1,
// // // //     maxWidth: "600px",
// // // //   },
// // // //   searchInput: {
// // // //     width: "100%",
// // // //     padding: "10px 20px",
// // // //     borderRadius: "24px",
// // // //     fontSize: "16px",
// // // //     outline: "none",
// // // //   },
// // // //   navContainer: {
// // // //     display: "flex",
// // // //     justifyContent: "center",
// // // //     borderBottom: "1px solid #5f6368",
// // // //     marginBottom: "20px",
// // // //   },
// // // //   navList: {
// // // //     display: "flex",
// // // //     gap: "30px",
// // // //     listStyle: "none",
// // // //     padding: "10px 0",
// // // //     margin: 0,
// // // //   },
// // // //   link: {
// // // //     color: "#8ab4f8",
// // // //     textDecoration: "none",
// // // //     fontSize: "14px",
// // // //     fontWeight: "500",
// // // //   },
// // // //   contentArea: {
// // // //     padding: "20px",
// // // //   },
// // // // };

// // // // export default Header;

// // // import React, { useState, useEffect } from "react";
// // // import { Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
// // // import { useMantineTheme, useComputedColorScheme } from "@mantine/core";
// // // import ActionToggle from "../ThemeChanger/ActionToggle.jsx";

// // // import All from "../Loading/All.jsx";
// // // import Images from "../Loading/Images.jsx";
// // // import News from "../Loading/News.jsx";
// // // import Vedios from "../Loading/Vedios.jsx";

// // // const Header = () => {
// // //   const [searchTerm, setSearchTerm] = useState("");
// // //   const navigate = useNavigate();
// // //   const location = useLocation();

// // //   const theme = useMantineTheme();
// // //   const computedColorScheme = useComputedColorScheme("light", {
// // //     getInitialValueInEffect: true,
// // //   });

// // //   // 👇 read search term from URL
// // //   useEffect(() => {
// // //     const params = new URLSearchParams(location.search);
// // //     const search = params.get("search");
// // //     if (search) {
// // //       setSearchTerm(search);
// // //     }
// // //   }, [location]);

// // //   const handleSearch = (e) => {
// // //     e.preventDefault();
// // //     if (searchTerm.trim()) {
// // //       navigate(`/all?search=${searchTerm}`);
// // //     }
// // //   };

// // //   return (
// // //     <div
// // //       style={{
// // //         backgroundColor:
// // //           computedColorScheme === "dark" ? theme.colors.dark[7] : theme.white,
// // //         color: computedColorScheme === "dark" ? theme.white : theme.black,
// // //         minHeight: "100vh",
// // //         padding: "20px",
// // //         fontFamily: "Arial, sans-serif",
// // //       }}
// // //     >
// // //       <ActionToggle className="fixed top-5 right-5" />

// // //       {/* Search bar with styled Google text */}
// // //       <div style={styles.searchBarContainer}>
// // //         <div style={styles.googleText}>
// // //           <span style={{ color: "#4285F4" }}>G</span>
// // //           <span style={{ color: "#EA4335" }}>o</span>
// // //           <span style={{ color: "#FBBC05" }}>o</span>
// // //           <span style={{ color: "#4285F4" }}>g</span>
// // //           <span style={{ color: "#34A853" }}>l</span>
// // //           <span style={{ color: "#EA4335" }}>e</span>
// // //         </div>

// // //         <form onSubmit={handleSearch} style={styles.searchForm}>
// // //           <input
// // //             type="text"
// // //             placeholder="Search..."
// // //             value={searchTerm}
// // //             onChange={(e) => setSearchTerm(e.target.value)}
// // //             style={{
// // //               ...styles.searchInput,
// // //               backgroundColor:
// // //                 computedColorScheme === "dark"
// // //                   ? theme.colors.dark[6]
// // //                   : theme.colors.gray[1],
// // //               color: computedColorScheme === "dark" ? theme.white : theme.black,
// // //               border:
// // //                 computedColorScheme === "dark"
// // //                   ? "1px solid #5f6368"
// // //                   : "1px solid #ccc",
// // //             }}
// // //           />
// // //         </form>
// // //       </div>

// // //       {/* Navigation Menu */}
// // //       <nav style={styles.navContainer}>
// // //         <ul style={styles.navList}>
// // //           <li><Link style={styles.link} to="/all">All</Link></li>
// // //           <li><Link style={styles.link} to="/images">Images</Link></li>
// // //           <li><Link style={styles.link} to="/news">News</Link></li>
// // //           <li><Link style={styles.link} to="/vedios">Vedios</Link></li>
// // //         </ul>
// // //       </nav>

// // //       {/* Routed Content */}
// // //       <div style={styles.contentArea}>
// // //         <Routes>
// // //           <Route path="/all" element={<All />} />
// // //           <Route path="/images" element={<Images />} />
// // //           <Route path="/news" element={<News />} />
// // //           <Route path="/vedios" element={<Vedios />} />
// // //         </Routes>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // const styles = {
// // //   searchBarContainer: {
// // //     display: "flex",
// // //     alignItems: "center",
// // //     justifyContent: "center",
// // //     gap: "20px",
// // //     marginBottom: "20px",
// // //   },
// // //   googleText: {
// // //     fontSize: "30px",
// // //     fontWeight: "bold",
// // //     letterSpacing: "-2px",
// // //     fontFamily: "'Product Sans', Arial, sans-serif",
// // //   },
// // //   searchForm: {
// // //     flex: 1,
// // //     maxWidth: "600px",
// // //   },
// // //   searchInput: {
// // //     width: "100%",
// // //     padding: "10px 20px",
// // //     borderRadius: "24px",
// // //     fontSize: "16px",
// // //     outline: "none",
// // //   },
// // //   navContainer: {
// // //     display: "flex",
// // //     justifyContent: "center",
// // //     borderBottom: "1px solid #5f6368",
// // //     marginBottom: "20px",
// // //   },
// // //   navList: {
// // //     display: "flex",
// // //     gap: "30px",
// // //     listStyle: "none",
// // //     padding: "10px 0",
// // //     margin: 0,
// // //   },
// // //   link: {
// // //     color: "#8ab4f8",
// // //     textDecoration: "none",
// // //     fontSize: "14px",
// // //     fontWeight: "500",
// // //   },
// // //   contentArea: {
// // //     padding: "20px",
// // //   },
// // // };

// // // export default Header;
// // import React, { useState, useEffect } from "react";
// // import { Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
// // import { useMantineTheme, useComputedColorScheme } from "@mantine/core";
// // import ActionToggle from "../ThemeChanger/ActionToggle.jsx";

// // import All from "../Loading/All.jsx";
// // import Images from "../Loading/Images.jsx";
// // import News from "../Loading/News.jsx";
// // import Vedios from "../Loading/Vedios.jsx";

// // const Header = () => {
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   const theme = useMantineTheme();
// //   const computedColorScheme = useComputedColorScheme("light", {
// //     getInitialValueInEffect: true,
// //   });

// //   // 👇 read search term from URL and update local state to keep input synced
// //   useEffect(() => {
// //     const params = new URLSearchParams(location.search);
// //     const search = params.get("search") || "";
// //     setSearchTerm(search);
// //   }, [location]);

// //   const handleSearch = (e) => {
// //     e.preventDefault();
// //     if (searchTerm.trim()) {
// //       navigate(`/all?search=${encodeURIComponent(searchTerm)}`);
// //     }
// //   };

// //   return (
// //     <div
// //       style={{
// //         backgroundColor:
// //           computedColorScheme === "dark" ? theme.colors.dark[7] : theme.white,
// //         color: computedColorScheme === "dark" ? theme.white : theme.black,
// //         minHeight: "100vh",
// //         padding: "20px",
// //         fontFamily: "Arial, sans-serif",
// //       }}
// //     >
// //       <ActionToggle className="fixed top-5 right-5" />

// //       {/* Search bar with styled Google text */}
// //       <div style={styles.searchBarContainer}>
// //         <div style={styles.googleText}>
// //           <span style={{ color: "#4285F4" }}>G</span>
// //           <span style={{ color: "#EA4335" }}>o</span>
// //           <span style={{ color: "#FBBC05" }}>o</span>
// //           <span style={{ color: "#4285F4" }}>g</span>
// //           <span style={{ color: "#34A853" }}>l</span>
// //           <span style={{ color: "#EA4335" }}>e</span>
// //         </div>

// //         <form onSubmit={handleSearch} style={styles.searchForm}>
// //           <input
// //             type="text"
// //             placeholder="Search..."
// //             value={searchTerm}
// //             onChange={(e) => setSearchTerm(e.target.value)}
// //             style={{
// //               ...styles.searchInput,
// //               backgroundColor:
// //                 computedColorScheme === "dark"
// //                   ? theme.colors.dark[6]
// //                   : theme.colors.gray[1],
// //               color: computedColorScheme === "dark" ? theme.white : theme.black,
// //               border:
// //                 computedColorScheme === "dark"
// //                   ? "1px solid #5f6368"
// //                   : "1px solid #ccc",
// //             }}
// //           />
// //         </form>
// //       </div>

// //       {/* Navigation Menu */}
// //       <nav style={styles.navContainer}>
// //         <ul style={styles.navList}>
// //           <li>
// //             <Link style={styles.link} to="/all">
// //               All
// //             </Link>
// //           </li>
// //           <li>
// //             <Link style={styles.link} to="/images">
// //               Images
// //             </Link>
// //           </li>
// //           <li>
// //             <Link style={styles.link} to="/news">
// //               News
// //             </Link>
// //           </li>
// //           <li>
// //             <Link style={styles.link} to="/vedios">
// //               Vedios
// //             </Link>
// //           </li>
// //         </ul>
// //       </nav>

// //       {/* Routed Content */}
// //       <div style={styles.contentArea}>
// //         <Routes>
// //           <Route path="/all" element={<All />} />
// //           <Route path="/images" element={<Images />} />
// //           <Route path="/news" element={<News />} />
// //           <Route path="/vedios" element={<Vedios />} />
// //         </Routes>
// //       </div>
// //     </div>
// //   );
// // };

// // const styles = {
// //   searchBarContainer: {
// //     display: "flex",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     gap: "20px",
// //     marginBottom: "20px",
// //   },
// //   googleText: {
// //     fontSize: "30px",
// //     fontWeight: "bold",
// //     letterSpacing: "-2px",
// //     fontFamily: "'Product Sans', Arial, sans-serif",
// //   },
// //   searchForm: {
// //     flex: 1,
// //     maxWidth: "600px",
// //   },
// //   searchInput: {
// //     width: "100%",
// //     padding: "10px 20px",
// //     borderRadius: "24px",
// //     fontSize: "16px",
// //     outline: "none",
// //   },
// //   navContainer: {
// //     display: "flex",
// //     justifyContent: "center",
// //     borderBottom: "1px solid #5f6368",
// //     marginBottom: "20px",
// //   },
// //   navList: {
// //     display: "flex",
// //     gap: "30px",
// //     listStyle: "none",
// //     padding: "10px 0",
// //     margin: 0,
// //   },
// //   link: {
// //     color: "#8ab4f8",
// //     textDecoration: "none",
// //     fontSize: "14px",
// //     fontWeight: "500",
// //   },
// //   contentArea: {
// //     padding: "20px",
// //   },
// // };

// // export default Header;

// import React, { useState, useEffect } from "react";
// import { Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
// import { useMantineTheme, useComputedColorScheme } from "@mantine/core";
// import ActionToggle from "../ThemeChanger/ActionToggle.jsx";

// import All from "../Loading/All.jsx";
// import Images from "../Loading/Images.jsx";
// import News from "../Loading/News.jsx";
// import Vedios from "../Loading/Vedios.jsx";

// const Header = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();
//   const location = useLocation();

//   const theme = useMantineTheme();
//   const computedColorScheme = useComputedColorScheme("light", {
//     getInitialValueInEffect: true,
//   });

//   // Keep searchTerm synced with URL query param
//   useEffect(() => {
//     const params = new URLSearchParams(location.search);
//     const search = params.get("search") || "";
//     setSearchTerm(search);
//   }, [location]);

//   // Search submit navigates to /header/all with search query
//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchTerm.trim()) {
//       navigate(`/header/all?search=${encodeURIComponent(searchTerm)}`);
//     }
//   };

//   return (
//     <div
//       style={{
//         backgroundColor:
//           computedColorScheme === "dark" ? theme.colors.dark[7] : theme.white,
//         color: computedColorScheme === "dark" ? theme.white : theme.black,
//         minHeight: "100vh",
//         padding: "20px",
//         fontFamily: "Arial, sans-serif",
//       }}
//     >
//       <ActionToggle className="fixed top-5 right-5" />

//       {/* Search bar with styled Google text */}
//       <div style={styles.searchBarContainer}>
//         <div style={styles.googleText}>
//           <span style={{ color: "#4285F4" }}>G</span>
//           <span style={{ color: "#EA4335" }}>o</span>
//           <span style={{ color: "#FBBC05" }}>o</span>
//           <span style={{ color: "#4285F4" }}>g</span>
//           <span style={{ color: "#34A853" }}>l</span>
//           <span style={{ color: "#EA4335" }}>e</span>
//         </div>

//         <form onSubmit={handleSearch} style={styles.searchForm}>
//           <input
//             type="text"
//             placeholder="Search..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             style={{
//               ...styles.searchInput,
//               backgroundColor:
//                 computedColorScheme === "dark"
//                   ? theme.colors.dark[6]
//                   : theme.colors.gray[1],
//               color: computedColorScheme === "dark" ? theme.white : theme.black,
//               border:
//                 computedColorScheme === "dark"
//                   ? "1px solid #5f6368"
//                   : "1px solid #ccc",
//             }}
//           />
//         </form>
//       </div>

//       {/* Navigation Menu */}
//       <nav style={styles.navContainer}>
//         <ul style={styles.navList}>
//           <li>
//             <Link style={styles.link} to="/header/all">
//               All
//             </Link>
//           </li>
//           <li>
//             <Link style={styles.link} to="/header/images">
//               Images
//             </Link>
//           </li>
//           <li>
//             <Link style={styles.link} to="/header/news">
//               News
//             </Link>
//           </li>
//           <li>
//             <Link style={styles.link} to="/header/vedios">
//               Vedios
//             </Link>
//           </li>
//         </ul>
//       </nav>

//       {/* Routed Content */}
//       <div style={styles.contentArea}>
//         <Routes>
//           <Route path="all" element={<All />} />
//           <Route path="images" element={<Images />} />
//           <Route path="news" element={<News />} />
//           <Route path="vedios" element={<Vedios />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   searchBarContainer: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     gap: "20px",
//     marginBottom: "20px",
//   },
//   googleText: {
//     fontSize: "30px",
//     fontWeight: "bold",
//     letterSpacing: "-2px",
//     fontFamily: "'Product Sans', Arial, sans-serif",
//   },
//   searchForm: {
//     flex: 1,
//     maxWidth: "600px",
//   },
//   searchInput: {
//     width: "100%",
//     padding: "10px 20px",
//     borderRadius: "24px",
//     fontSize: "16px",
//     outline: "none",
//   },
//   navContainer: {
//     display: "flex",
//     justifyContent: "center",
//     borderBottom: "1px solid #5f6368",
//     marginBottom: "20px",
//   },
//   navList: {
//     display: "flex",
//     gap: "30px",
//     listStyle: "none",
//     padding: "10px 0",
//     margin: 0,
//   },
//   link: {
//     color: "#8ab4f8",
//     textDecoration: "none",
//     fontSize: "14px",
//     fontWeight: "500",
//   },
//   contentArea: {
//     padding: "20px",
//   },
// };

// export default Header;

import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import { useMantineTheme, useComputedColorScheme } from "@mantine/core";
import ActionToggle from "../ThemeChanger/ActionToggle.jsx";

import All from "../Loading/All.jsx";
import Images from "../Loading/Images.jsx";
import News from "../Loading/News.jsx";
import Vedios from "../Loading/Vedios.jsx";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const theme = useMantineTheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  // On mount or location change, sync searchTerm with query param
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const search = params.get("search") || "";
    setSearchTerm(search);
  }, [location]);

  // Handle form submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Navigate to /header/all with the search query param
      navigate(`/header/all?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  // Helper to add current search query param to nav links
  const getLinkWithSearch = (path) =>
    searchTerm.trim()
      ? `${path}?search=${encodeURIComponent(searchTerm)}`
      : path;

  return (
    <div
      style={{
        backgroundColor:
          computedColorScheme === "dark" ? theme.colors.dark[7] : theme.white,
        color: computedColorScheme === "dark" ? theme.white : theme.black,
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <ActionToggle className="fixed top-5 right-5" />

      <div style={styles.searchBarContainer}>
        <div style={styles.googleText}>
          <span style={{ color: "#4285F4" }}>G</span>
          <span style={{ color: "#EA4335" }}>o</span>
          <span style={{ color: "#FBBC05" }}>o</span>
          <span style={{ color: "#4285F4" }}>g</span>
          <span style={{ color: "#34A853" }}>l</span>
          <span style={{ color: "#EA4335" }}>e</span>
        </div>

        <form onSubmit={handleSearch} style={styles.searchForm}>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              ...styles.searchInput,
              backgroundColor:
                computedColorScheme === "dark"
                  ? theme.colors.dark[6]
                  : theme.colors.gray[1],
              color: computedColorScheme === "dark" ? theme.white : theme.black,
              border:
                computedColorScheme === "dark"
                  ? "1px solid #5f6368"
                  : "1px solid #ccc",
            }}
          />
        </form>
      </div>

      <nav style={styles.navContainer}>
        <ul style={styles.navList}>
          <li>
            <Link to={getLinkWithSearch("/header/all")} style={styles.link}>
              All
            </Link>
          </li>
          <li>
            <Link to={getLinkWithSearch("/header/images")} style={styles.link}>
              Images
            </Link>
          </li>
          <li>
            <Link to={getLinkWithSearch("/header/news")} style={styles.link}>
              News
            </Link>
          </li>
          <li>
            <Link to={getLinkWithSearch("/header/vedios")} style={styles.link}>
              Vedios
            </Link>
          </li>
        </ul>
      </nav>

      <div style={styles.contentArea}>
        <Routes>
          <Route path="all" element={<All />} />
          <Route path="images" element={<Images />} />
          <Route path="news" element={<News />} />
          <Route path="vedios" element={<Vedios />} />
        </Routes>
      </div>
    </div>
  );
};

const styles = {
  searchBarContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "20px",
  },
  googleText: {
    fontSize: "30px",
    fontWeight: "bold",
    letterSpacing: "-2px",
    fontFamily: "'Product Sans', Arial, sans-serif",
  },
  searchForm: {
    flex: 1,
    maxWidth: "600px",
  },
  searchInput: {
    width: "100%",
    padding: "10px 20px",
    borderRadius: "24px",
    fontSize: "16px",
    outline: "none",
  },
  navContainer: {
    display: "flex",
    justifyContent: "center",
    borderBottom: "1px solid #5f6368",
    marginBottom: "20px",
  },
  navList: {
    display: "flex",
    gap: "30px",
    listStyle: "none",
    padding: "10px 0",
    margin: 0,
  },
  link: {
    color: "#8ab4f8",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "500",
  },
  contentArea: {
    padding: "20px",
  },
};

export default Header;
