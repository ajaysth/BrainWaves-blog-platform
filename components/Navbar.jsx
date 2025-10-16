// import React from 'react'
// import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

// const Navbar = () => {
//   return (
//     <div className='flex justify-between items-center'>
//       <SignedOut>
//               <SignInButton />
//               <SignUpButton>
//                 <button className="bg-[#6c47ff] text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
//                   Sign Up
//                 </button>
//               </SignUpButton>
//             </SignedOut>
//             <SignedIn>
//               <UserButton />
//             </SignedIn>
//     </div>
//   )
// }

// export default Navbar

// "use client";

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion"; // animation
// import { Menu, X, Search, Moon, Sun } from "lucide-react"; // icons
// import { Button } from "@/components/ui/button"; // from shadcn/ui
// import { useTheme } from "next-themes"; // for persistent theme
// import {
//   SignInButton,
//   SignUpButton,
//   SignedIn,
//   SignedOut,
//   UserButton,
// } from "@clerk/nextjs"; // Clerk components (untouched)
// import Link from "next/link";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [mounted, setMounted] = useState(false);
//   const { theme, setTheme } = useTheme(); // persistent theme

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const toggleMenu = () => setMenuOpen(!menuOpen);
//   const toggleDark = () => setTheme(theme === "light" ? "dark" : "light");

//   if (!mounted) {
//     return null;
//   }

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
//       bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-md`}
//     >
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           className="font-extrabold text-xl cursor-pointer tracking-tight"
//         >
//           Blog<span className="text-[#6c47ff]">Verse</span>
//         </motion.div>

//         {/* Desktop Links */}
//         <div className="hidden md:flex items-center gap-6 font-medium">
//           <Link href="/" className="hover:text-[#6c47ff] transition-colors">
//             Home
//           </Link>
//           <Link
//             href="/posts"
//             className="hover:text-[#6c47ff] transition-colors"
//           >
//             Posts
//           </Link>
//           <Link
//             href="/about"
//             className="hover:text-[#6c47ff] transition-colors"
//           >
//             About
//           </Link>
//           <Link
//             href="/dashboard"
//             className="hover:text-[#6c47ff] transition-colors"
//           >
//             Dashboard
//           </Link>
//           <Search className="cursor-pointer w-5 h-5 hover:text-[#6c47ff]" />

//           {/* Theme Toggle */}
//           <button
//             onClick={toggleDark}
//             className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
//           >
//             {theme === "light" ? (
//               <Moon className="w-5 h-5" />
//             ) : (
//               <Sun className="w-5 h-5" />
//             )}
//           </button>

//           {/* Clerk Auth (untouched) */}
//           <SignedOut>
//             <SignInButton />
//             <SignUpButton>
//               <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
//                 Sign Up
//               </button>
//             </SignUpButton>
//           </SignedOut>
//           <SignedIn>
//             <UserButton />
//           </SignedIn>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden flex items-center gap-3">
//           <button onClick={toggleDark}>
//             {theme === "light" ? (
//               <Moon className="w-5 h-5" />
//             ) : (
//               <Sun className="w-5 h-5" />
//             )}
//           </button>
//           <button onClick={toggleMenu}>
//             {menuOpen ? (
//               <X className="w-6 h-6" />
//             ) : (
//               <Menu className="w-6 h-6" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial={{ height: 0 }}
//             animate={{ height: "auto" }}
//             exit={{ height: 0 }}
//             className={`md:hidden flex flex-col items-center gap-4 overflow-hidden pb-4
//             bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}
//           >
//             <a href="/" onClick={toggleMenu}>
//               Home
//             </a>
//             <a href="/posts" onClick={toggleMenu}>
//               Posts
//             </a>
//             <a href="/about" onClick={toggleMenu}>
//               About
//             </a>
//             <a href="/dashboard" onClick={toggleMenu}>
//               Dashboard
//             </a>

//             <div className="flex flex-col gap-2 mt-2">
//               {/* Clerk Auth (untouched) */}
//               <SignedOut>
//                 <SignInButton />
//                 <SignUpButton>
//                   <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
//                     Sign Up
//                   </button>
//                 </SignUpButton>
//               </SignedOut>
//               <SignedIn>
//                 <UserButton />
//               </SignedIn>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;

// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Menu,
//   X,
//   Moon,
//   Sun,
//   ChevronDown,
//   HomeIcon,
//   FileText,
//   Info,
//   LayoutDashboard,
//   Sparkles,
//   TrendingUp,
//   Briefcase,
//   Palette,
//   Code,
//   Heart,
//   PenSquare,
//   Phone,
//   HelpCircle,
//   Users,
//   BookOpen,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useTheme } from "next-themes";
// import {
//   SignInButton,
//   SignUpButton,
//   SignedIn,
//   SignedOut,
//   UserButton,
// } from "@clerk/nextjs";
// import Link from "next/link";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";
// import { cn } from "@/lib/utils";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [mounted, setMounted] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeLink, setActiveLink] = useState("");
//   const { theme, setTheme } = useTheme();

//   useEffect(() => {
//     setMounted(true);

//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMenu = () => setMenuOpen(!menuOpen);
//   const toggleDark = () => setTheme(theme === "light" ? "dark" : "light");

//   if (!mounted) return null;

//   const categories = [
//     {
//       name: "Technology",
//       icon: Code,
//       href: "/category/technology",
//       color: "text-blue-600",
//     },
//     {
//       name: "Design",
//       icon: Palette,
//       href: "/category/design",
//       color: "text-pink-600",
//     },
//     {
//       name: "Business",
//       icon: Briefcase,
//       href: "/category/business",
//       color: "text-green-600",
//     },
//     {
//       name: "Lifestyle",
//       icon: Heart,
//       href: "/category/lifestyle",
//       color: "text-red-600",
//     },
//   ];

//   const mainLinks = [
//     { name: "Home", icon: HomeIcon, href: "/" },
//     { name: "About", icon: Info, href: "/about" },
//     { name: "Blog", icon: BookOpen, href: "/blog" },
//     { name: "Contact", icon: Phone, href: "/contact" },
//     { name: "FAQs", icon: HelpCircle, href: "/faqs" },
//   ];

//   return (
//     <nav
//       className={cn(
//         "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b",
//         scrolled
//           ? "bg-white/95 backdrop-blur-md border-gray-200 shadow-sm"
//           : "bg-white border-gray-100",
//         "dark:bg-gray-900/95 dark:border-gray-800"
//       )}
//     >
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <Link href="/">
//           <motion.div
//             whileHover={{ scale: 1.02 }}
//             className="font-bold text-2xl cursor-pointer flex items-center gap-3"
//           >
//             <div className="relative">
//               <Sparkles className="w-7 h-7 text-blue-600 dark:text-blue-400" />
//             </div>
//             <span className="text-gray-900 dark:text-white">
//               Brain
//               <span className="text-blue-600 dark:text-blue-400">waves</span>
//             </span>
//           </motion.div>
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden lg:flex items-center gap-1">
//           <NavigationMenu>
//             <NavigationMenuList className="gap-1">
//               {mainLinks.map((link) => (
//                 <NavigationMenuItem key={link.name}>
//                   <Link href={link.href}>
//                     <NavigationMenuLink
//                       className="group relative px-4 py-2 transition-all duration-200"
//                       onMouseEnter={() => setActiveLink(link.name)}
//                       onMouseLeave={() => setActiveLink("")}
//                     >
//                       <span
//                         className={cn(
//                           "text-lg font-semibold transition-colors duration-200",
//                           activeLink === link.name
//                             ? "text-blue-600 dark:text-blue-400"
//                             : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
//                         )}
//                       >
//                         {link.name}
//                       </span>
//                       <motion.div
//                         className={cn(
//                           "absolute bottom-0 left-0 h-0.5 bg-blue-600 dark:bg-blue-400",
//                           activeLink === link.name ? "w-full" : "w-0"
//                         )}
//                         initial={false}
//                         transition={{ duration: 0.2 }}
//                       />
//                     </NavigationMenuLink>
//                   </Link>
//                 </NavigationMenuItem>
//               ))}

//               {/* Categories Dropdown */}
//               <NavigationMenuItem>
//                 <NavigationMenuTrigger
//                   className="text-lg font-semibold px-4 py-2 data-[state=open]:text-blue-600 dark:data-[state=open]:text-blue-400"
//                   onMouseEnter={() => setActiveLink("Categories")}
//                   onMouseLeave={() => setActiveLink("")}
//                 >
//                   <span
//                     className={cn(
//                       "transition-colors duration-200",
//                       activeLink === "Categories"
//                         ? "text-blue-600 dark:text-blue-400"
//                         : "text-gray-700 dark:text-gray-300"
//                     )}
//                   >
//                     Categories
//                   </span>
//                   <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-200" />
//                 </NavigationMenuTrigger>
//                 <NavigationMenuContent>
//                   <div className="grid gap-3 p-6 w-[400px]">
//                     <div className="flex items-center gap-3 mb-3">
//                       <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
//                       <h3 className="font-bold text-xl text-gray-900 dark:text-white">
//                         Browse Categories
//                       </h3>
//                     </div>
//                     <div className="grid gap-3">
//                       {categories.map((cat) => (
//                         <Link
//                           key={cat.name}
//                           href={cat.href}
//                           className="group flex items-center gap-4 rounded-xl p-4 transition-all duration-200 hover:bg-blue-50 dark:hover:bg-gray-800 border border-transparent hover:border-blue-200 dark:hover:border-gray-700"
//                         >
//                           <div
//                             className={cn(
//                               "p-3 rounded-lg bg-blue-50 dark:bg-gray-800 group-hover:scale-110 transition-transform duration-200",
//                               cat.color
//                             )}
//                           >
//                             <cat.icon className="w-6 h-6" />
//                           </div>
//                           <div className="flex-1">
//                             <p className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
//                               {cat.name}
//                             </p>
//                             <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
//                               Explore {cat.name.toLowerCase()} articles
//                             </p>
//                           </div>
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>
//             </NavigationMenuList>
//           </NavigationMenu>
//         </div>

//         {/* Right Side Buttons */}
//         <div className="hidden lg:flex items-center gap-4">
//           <SignedIn>
//             <Link href="/dashboard/create">
//               <Button
//                 size="lg"
//                 className="bg-blue-600 hover:bg-blue-700 text-white gap-3 px-6 py-2.5 font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
//               >
//                 <PenSquare className="w-5 h-5" />
//                 Create Post
//               </Button>
//             </Link>
//           </SignedIn>

//           <SignedIn>
//             <Link href="/dashboard">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
//                 title="Dashboard"
//               >
//                 <LayoutDashboard className="w-6 h-6 text-gray-700 dark:text-gray-300" />
//               </motion.button>
//             </Link>
//           </SignedIn>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={toggleDark}
//             className="p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
//           >
//             {theme === "light" ? (
//               <Moon className="w-6 h-6 text-gray-700" />
//             ) : (
//               <Sun className="w-6 h-6 text-gray-300" />
//             )}
//           </motion.button>

//           {/* Clerk Buttons */}
//           <SignedOut>
//             <div className="flex items-center gap-3">
//               <SignInButton mode="modal">
//                 <Button
//                   variant="ghost"
//                   size="lg"
//                   className="font-semibold text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 px-4 py-2.5 transition-colors duration-200"
//                 >
//                   Sign In
//                 </Button>
//               </SignInButton>
//               <SignUpButton mode="modal">
//                 <Button
//                   size="lg"
//                   className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
//                 >
//                   Sign Up
//                 </Button>
//               </SignUpButton>
//             </div>
//           </SignedOut>
//           <SignedIn>
//             <UserButton afterSignOutUrl="/" />
//           </SignedIn>
//         </div>

//         {/* Mobile Buttons */}
//         <div className="lg:hidden flex items-center gap-3">
//           <motion.button
//             whileTap={{ scale: 0.95 }}
//             onClick={toggleDark}
//             className="p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
//           >
//             {theme === "light" ? (
//               <Moon className="w-6 h-6 text-gray-700" />
//             ) : (
//               <Sun className="w-6 h-6 text-gray-300" />
//             )}
//           </motion.button>
//           <motion.button
//             whileTap={{ scale: 0.95 }}
//             onClick={toggleMenu}
//             className="p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
//           >
//             {menuOpen ? (
//               <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
//             ) : (
//               <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
//             )}
//           </motion.button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//             className="lg:hidden border-t bg-white/95 backdrop-blur-md dark:bg-gray-900/95 border-gray-200 dark:border-gray-800 shadow-lg"
//           >
//             <div className="max-w-7xl mx-auto px-6 py-6 space-y-2">
//               {/* Mobile Links */}
//               <div className="space-y-1">
//                 {mainLinks.map((link) => (
//                   <Link
//                     key={link.name}
//                     href={link.href}
//                     onClick={toggleMenu}
//                     className="flex items-center gap-4 p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-200 group"
//                   >
//                     <link.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
//                     <span className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
//                       {link.name}
//                     </span>
//                   </Link>
//                 ))}

//                 {/* Categories in Mobile */}
//                 <div className="p-4">
//                   <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-3">
//                     <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
//                     Categories
//                   </h3>
//                   <div className="grid gap-2">
//                     {categories.map((cat) => (
//                       <Link
//                         key={cat.name}
//                         href={cat.href}
//                         onClick={toggleMenu}
//                         className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-200 group"
//                       >
//                         <cat.icon className={cn("w-5 h-5", cat.color)} />
//                         <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
//                           {cat.name}
//                         </span>
//                       </Link>
//                     ))}
//                   </div>
//                 </div>

//                 <SignedIn>
//                   <Link
//                     href="/dashboard/create"
//                     onClick={toggleMenu}
//                     className="flex items-center gap-4 p-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200 group mt-4"
//                   >
//                     <PenSquare className="w-6 h-6" />
//                     <span className="text-lg font-semibold">Create Post</span>
//                   </Link>
//                   <Link
//                     href="/dashboard"
//                     onClick={toggleMenu}
//                     className="flex items-center gap-4 p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-200 group"
//                   >
//                     <LayoutDashboard className="w-6 h-6 text-blue-600 dark:text-blue-400" />
//                     <span className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
//                       Dashboard
//                     </span>
//                   </Link>
//                 </SignedIn>
//               </div>

//               {/* Mobile Auth */}
//               <div className="pt-4 border-t border-gray-200 dark:border-gray-800 space-y-3">
//                 <SignedOut>
//                   <SignInButton mode="modal">
//                     <Button
//                       variant="outline"
//                       className="w-full bg-transparent border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold py-3 text-lg rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
//                       onClick={toggleMenu}
//                     >
//                       Sign In
//                     </Button>
//                   </SignInButton>
//                   <SignUpButton mode="modal">
//                     <Button
//                       className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 text-lg rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
//                       onClick={toggleMenu}
//                     >
//                       Sign Up
//                     </Button>
//                   </SignUpButton>
//                 </SignedOut>
//                 <SignedIn>
//                   <div className="flex items-center justify-center p-4">
//                     <UserButton afterSignOutUrl="/" />
//                   </div>
//                 </SignedIn>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Moon,
  Sun,
  HomeIcon,
  FileText,
  Info,
  LayoutDashboard,
  Sparkles,
  Mail,
  HelpCircle,
  PenSquare,
  ChevronDown,
  BookOpen,
  Code,
  Palette,
  Zap,
  Users,
  Target,
  Briefcase,
  Heart,
  CreditCard,
  AlertCircle,
  MessageSquare,
  Phone,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDark = () => setTheme(theme === "light" ? "dark" : "light");

  if (!mounted) {
    return null;
  }

  const postsCategories = [
    { name: "Technology", icon: Code, href: "/posts/technology" },
    { name: "Design", icon: Palette, href: "/posts/design" },
    { name: "Development", icon: Zap, href: "/posts/development" },
    { name: "Tutorials", icon: BookOpen, href: "/posts/tutorials" },
  ];

  const aboutItems = [
    { name: "Our Story", icon: Heart, href: "/about/our-story" },
    { name: "Team", icon: Users, href: "/about/teams" },
    { name: "Careers", icon: Briefcase, href: "/about/career" },
    { name: "Mission & Vision", icon: Target, href: "/about/vision-mission" },
  ];

  const faqsItems = [
    { name: "Account", icon: Users, href: "/faqs/account" },
    { name: "Payments", icon: CreditCard, href: "/faqs/payments" },
    { name: "Technical Issues", icon: AlertCircle, href: "/faqs/technical" },
    { name: "General FAQs", icon: HelpCircle, href: "/faqs/general" },
  ];

  const contactItems = [
    { name: "Email Us", icon: Mail, href: "/contact/email" },
    { name: "Call Us", icon: Phone, href: "/contact/call" },
    { name: "Chat Support", icon: MessageCircle, href: "/contact/chat" },
    { name: "Contact Form", icon: MessageSquare, href: "/contact/form" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b",
        scrolled
          ? "bg-gradient-to-r from-background/95 via-background/90 to-background/95 backdrop-blur-xl border-border/30 shadow-lg shadow-black/5"
          : "bg-gradient-to-r from-background/80 via-background/60 to-background/80 backdrop-blur-sm border-transparent"
      )}
    >
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/5 dark:from-white/5 dark:to-black/10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative font-extrabold text-xl sm:text-2xl cursor-pointer tracking-tight flex items-center gap-2 group"
            >
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Sparkles icon with animation */}
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="relative z-10"
              >
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-primary drop-shadow-sm" />
              </motion.div>

              {/* Brand text with gradient */}
              <span className="relative z-10 bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent group-hover:from-primary group-hover:via-primary group-hover:to-foreground transition-all duration-300">
                Brain
                <span className="text-primary group-hover:text-foreground">
                  waves
                </span>
              </span>

              {/* Subtle underline animation */}
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-full"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {/* Home Link */}
            <Link
              href="/"
              className="group relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-primary rounded-lg hover:bg-primary/5"
            >
              <span className="flex items-center gap-2">
                <HomeIcon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                Home
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-full transition-all duration-300 group-hover:w-full" />
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("posts")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/blog"
                className="group relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-primary rounded-lg hover:bg-primary/5 flex items-center gap-1"
              >
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                  Blogs
                </span>
                <ChevronDown
                  className={cn(
                    "w-3 h-3 transition-transform duration-300",
                    activeDropdown === "posts" && "rotate-180"
                  )}
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-full transition-all duration-300 group-hover:w-full" />
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
              </Link>

              <AnimatePresence>
                {activeDropdown === "posts" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-0 mt-2 w-64 bg-background/95 backdrop-blur-xl border border-border/30 rounded-xl shadow-2xl shadow-black/10 overflow-hidden"
                  >
                    {/* Gradient border effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-xl opacity-50" />

                    <div className="relative p-3">
                      {/* Header */}
                      <div className="flex items-center gap-2 mb-3 px-2">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                          Blog Categories
                        </span>
                      </div>

                      {postsCategories.map((category, index) => (
                        <motion.div
                          key={category.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            href={category.href}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-200 group"
                          >
                            <category.icon className="w-4 h-4 text-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-200" />
                            <span className="text-sm font-medium group-hover:text-primary transition-colors">
                              {category.name}
                            </span>
                            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                              <ChevronDown className="w-3 h-3 rotate-[-90deg] text-primary" />
                            </div>
                          </Link>
                        </motion.div>
                      ))}

                      <div className="border-t border-border/30 my-3" />

                      <Link
                        href="/categories"
                        className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 transition-all duration-200 text-primary font-medium text-sm border border-primary/20 hover:border-primary/30"
                      >
                        <span>Browse All Categories</span>
                        <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/about"
                className="group relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-primary rounded-lg hover:bg-primary/5 flex items-center gap-1"
              >
                <span className="flex items-center gap-2">
                  <Info className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                  About
                </span>
                <ChevronDown
                  className={cn(
                    "w-3 h-3 transition-transform duration-300",
                    activeDropdown === "about" && "rotate-180"
                  )}
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-full transition-all duration-300 group-hover:w-full" />
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
              </Link>

              <AnimatePresence>
                {activeDropdown === "about" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-0 mt-2 w-64 bg-background/95 backdrop-blur-xl border border-border/30 rounded-xl shadow-2xl shadow-black/10 overflow-hidden"
                  >
                    {/* Gradient border effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-xl opacity-50" />

                    <div className="relative p-3">
                      {/* Header */}
                      <div className="flex items-center gap-2 mb-3 px-2">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                          About Us
                        </span>
                      </div>

                      {aboutItems.map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            href={item.href}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-200 group"
                          >
                            <item.icon className="w-4 h-4 text-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-200" />
                            <span className="text-sm font-medium group-hover:text-primary transition-colors">
                              {item.name}
                            </span>
                            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                              <ChevronDown className="w-3 h-3 rotate-[-90deg] text-primary" />
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("contact")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/contact"
                className="group relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-primary rounded-lg hover:bg-primary/5 flex items-center gap-1"
              >
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                  Contact
                </span>
                <ChevronDown
                  className={cn(
                    "w-3 h-3 transition-transform duration-300",
                    activeDropdown === "contact" && "rotate-180"
                  )}
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-full transition-all duration-300 group-hover:w-full" />
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
              </Link>

              <AnimatePresence>
                {activeDropdown === "contact" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-0 mt-2 w-64 bg-background/95 backdrop-blur-xl border border-border/30 rounded-xl shadow-2xl shadow-black/10 overflow-hidden"
                  >
                    {/* Gradient border effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-xl opacity-50" />

                    <div className="relative p-3">
                      {/* Header */}
                      <div className="flex items-center gap-2 mb-3 px-2">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                          Contact Options
                        </span>
                      </div>

                      {contactItems.map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            href={item.href}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-200 group"
                          >
                            <item.icon className="w-4 h-4 text-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-200" />
                            <span className="text-sm font-medium group-hover:text-primary transition-colors">
                              {item.name}
                            </span>
                            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                              <ChevronDown className="w-3 h-3 rotate-[-90deg] text-primary" />
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("faqs")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/faqs"
                className="group relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-primary rounded-lg hover:bg-primary/5 flex items-center gap-1"
              >
                <span className="flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                  FAQs
                </span>
                <ChevronDown
                  className={cn(
                    "w-3 h-3 transition-transform duration-300",
                    activeDropdown === "faqs" && "rotate-180"
                  )}
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-full transition-all duration-300 group-hover:w-full" />
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
              </Link>

              <AnimatePresence>
                {activeDropdown === "faqs" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-0 mt-2 w-64 bg-background/95 backdrop-blur-xl border border-border/30 rounded-xl shadow-2xl shadow-black/10 overflow-hidden"
                  >
                    {/* Gradient border effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-xl opacity-50" />

                    <div className="relative p-3">
                      {/* Header */}
                      <div className="flex items-center gap-2 mb-3 px-2">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                          Help Center
                        </span>
                      </div>

                      {faqsItems.map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            href={item.href}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-200 group"
                          >
                            <item.icon className="w-4 h-4 text-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-200" />
                            <span className="text-sm font-medium group-hover:text-primary transition-colors">
                              {item.name}
                            </span>
                            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                              <ChevronDown className="w-3 h-3 rotate-[-90deg] text-primary" />
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleDark}
              className="relative p-3 rounded-full hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-300 group overflow-hidden"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

              <motion.div
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative z-10"
              >
                {theme === "light" ? (
                  <Moon className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                ) : (
                  <Sun className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                )}
              </motion.div>
            </motion.button>

            <SignedIn>
              {/* Create Post Button */}
              <Link href="/dashboard/posts/new">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:from-primary/90 hover:to-primary transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-primary/25 overflow-hidden group"
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <motion.div
                    whileHover={{ rotate: 12 }}
                    className="relative z-10"
                  >
                    <PenSquare className="w-4 h-4" />
                  </motion.div>
                  <span className="relative z-10 font-medium">Create Post</span>
                </motion.button>
              </Link>

              {/* Dashboard Icon */}
              <Link href="/dashboard">
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative p-3 rounded-full hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-300 group overflow-hidden"
                  title="Dashboard"
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative z-10"
                  >
                    <LayoutDashboard className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                  </motion.div>
                </motion.button>
              </Link>
            </SignedIn>

            {/* Clerk Auth */}
            <SignedOut>
              <SignInButton mode="modal">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className="relative hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-300 overflow-hidden group"
                  >
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                    <span className="relative z-10">Sign In</span>
                  </Button>
                </motion.div>
              </SignInButton>
              <SignUpButton mode="modal">
                <motion.div
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="sm"
                    className="relative bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-primary/25 overflow-hidden group"
                  >
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10">Sign Up</span>
                  </Button>
                </motion.div>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="transition-all duration-300"
              >
                <UserButton afterSignOutUrl="/" />
              </motion.div>
            </SignedIn>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleDark}
              className="relative p-3 rounded-full hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-300 group overflow-hidden"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

              <motion.div
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative z-10"
              >
                {theme === "light" ? (
                  <Moon className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                ) : (
                  <Sun className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                )}
              </motion.div>
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              className="relative p-3 rounded-full hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-300 group overflow-hidden"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

              <motion.div
                animate={{
                  rotate: menuOpen ? 180 : 0,
                  scale: menuOpen ? 1.1 : 1,
                }}
                transition={{ duration: 0.2 }}
                className="relative z-10"
              >
                {menuOpen ? (
                  <X className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
                ) : (
                  <Menu className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="lg:hidden border-t bg-gradient-to-b from-background/95 via-background/90 to-background/95 backdrop-blur-xl border-border/30 shadow-lg"
          >
            {/* Animated background overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5 opacity-50" />

            <div className="relative max-w-7xl mx-auto px-4 py-6 space-y-6">
              {/* Mobile Links */}
              <div className="space-y-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link
                    href="/"
                    onClick={toggleMenu}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-300 group"
                  >
                    <HomeIcon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-200" />
                    <span className="font-medium group-hover:text-primary transition-colors">
                      Home
                    </span>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <Link
                    href="/posts"
                    onClick={toggleMenu}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-300 group"
                  >
                    <FileText className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-200" />
                    <span className="font-medium group-hover:text-primary transition-colors">
                      Posts
                    </span>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Link
                    href="/about"
                    onClick={toggleMenu}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-300 group"
                  >
                    <Info className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-200" />
                    <span className="font-medium group-hover:text-primary transition-colors">
                      About
                    </span>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <Link
                    href="/contact"
                    onClick={toggleMenu}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-300 group"
                  >
                    <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-200" />
                    <span className="font-medium group-hover:text-primary transition-colors">
                      Contact
                    </span>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link
                    href="/faqs"
                    onClick={toggleMenu}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-300 group"
                  >
                    <HelpCircle className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-200" />
                    <span className="font-medium group-hover:text-primary transition-colors">
                      FAQs
                    </span>
                  </Link>
                </motion.div>

                <SignedIn>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 }}
                  >
                    <Link
                      href="/dashboard"
                      onClick={toggleMenu}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-300 group"
                    >
                      <LayoutDashboard className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-200" />
                      <span className="font-medium group-hover:text-primary transition-colors">
                        Dashboard
                      </span>
                    </Link>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Link
                      href="/dashboard/create"
                      onClick={toggleMenu}
                      className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 transition-all duration-300 group border border-primary/20"
                    >
                      <PenSquare className="w-5 h-5 text-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-200" />
                      <span className="font-medium group-hover:text-primary transition-colors">
                        Create Post
                      </span>
                    </Link>
                  </motion.div>
                </SignedIn>
              </div>

              {/* Mobile Auth */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-4 border-t border-border/30 space-y-3"
              >
                <SignedOut>
                  <SignInButton mode="modal">
                    <Button
                      variant="outline"
                      className="w-full bg-transparent border-border/50 hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 hover:border-primary/50 transition-all duration-300"
                      onClick={toggleMenu}
                    >
                      Sign In
                    </Button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <Button
                      className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-primary/25"
                      onClick={toggleMenu}
                    >
                      Sign Up
                    </Button>
                  </SignUpButton>
                </SignedOut>
                <SignedIn>
                  <div className="flex items-center justify-center">
                    <UserButton afterSignOutUrl="/" />
                  </div>
                </SignedIn>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
