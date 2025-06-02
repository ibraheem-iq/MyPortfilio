// src/data/projects.js - Updated with multiple images
import akhbary_image from "./../Akhbary/akhbary_app_image.jpg";
import Dark_mode from "./../Akhbary/Dark_mode.png";
import category from "./../Akhbary/category.png";
import homepage from "./../Akhbary/homepage.png";
import skelton from "./../Akhbary/skelton.png";
import News_details from "./../Akhbary/News_details.png";
import ar_search from "./../Akhbary/ar_search.png";
import en_search from "./../Akhbary/en_search.png";
import BookMarks from "./../Akhbary/BookMarks.png";

//add the epp images
import epp_image from "./../Epp/Epp_app.jpg";
import homepageEpp from "./../Epp/HomePage.png";
import Apply_now from "./../Epp/Apply_now.png";
import Apply_now2 from "./../Epp/Apply_now2.png";
import Blogs_detail from "./../Epp/Blogs_detail.png";
import Blogs from "./../Epp/Blogs.png";
import Dark_mode_epp from "./../Epp/Dark_mode.png";
import Epp_history from "./../Epp/Epp_history.png";
import News_epp from "./../Epp/News.png";
import OfficeLocation from "./../Epp/OfficeLocation.png";
import Office_location_dark from "./../Epp/Office_location_dark.png";
import OfficePage from "./../Epp/OfficePage.png";
import OfficePage2 from "./../Epp/OfficePage2.png";
import passport_detail from "./../Epp/passport_detail.png";
import passport_detail2 from "./../Epp/passport_detail2.png";
import PassportType from "./../Epp/PassportType.png";
import SplashScreen from "./../Epp/SplashScreen.png";
import Videos from "./../Epp/Videos.png";
import webviewpage from "./../Epp/web_view.png";

import { Skeleton } from "antd";
export const PROJECTS_DATA = [
  {
    id: 1,
    title: { en: "Office Management System (OMS)", ar: "نظام إدارة المكتب" },
    category: 'web',
    description: { 
      en: "A comprehensive web application designed to streamline office operations and improve administrative efficiency with role-based access control and modern responsive UI.",
      ar: "تطبيق ويب شامل مصمم لتبسيط عمليات المكتب وتحسين الكفاءة الإدارية مع التحكم في الوصول القائم على الأدوار وواجهة حديثة متجاوبة."
    },
    technologies: ['React', 'Ant Design', 'Zustand','Axios', 'RESTful API', 'SignalR'],
    packages: ['react-router-dom', 'antd', 'zustand', 'axios', 'exceljs', 'moment', 'lodash'],
    // Primary image for cards
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=250&fit=crop",
    // Multiple images for gallery
    images: [
      {
        url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
        caption: { en: "Dashboard Overview", ar: "نظرة عامة على لوحة التحكم" }
      },
      {
        url: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
        caption: { en: "User Management Interface", ar: "واجهة إدارة المستخدمين" }
      },
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        caption: { en: "Reports and Analytics", ar: "التقارير والتحليلات" }
      },
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        caption: { en: "Workflow Management", ar: "إدارة سير العمل" }
      }
    ],
    github: "#",
    demo: "#",
    featured: false,
    keyFeatures: [
      "User & Role Management with Zustand state management",
      "Dynamic Dashboards with real-time reporting",
      "Workflow Automation for task routing and approval",
      "Data Export & Reporting (Excel and PDF)",
      "Fully responsive design across all devices"
    ]
  },
  {
    id: 2,
    title: { en: "E-Visa Ticket System", ar: "نظام تذاكر التأشيرة الإلكترونية" },
    category: 'web',
    description: {
      en: "Web-based ticket management system to process electronic visa support requests with efficient workflows and role-based access control.",
      ar: "نظام إدارة التذاكر المبني على الويب لمعالجة طلبات دعم التأشيرة الإلكترونية مع سير عمل فعال والتحكم في الوصول القائم على الأدوار."
    },
    technologies: ['React', 'Ant Design', 'Axios', 'SignalR', 'Zustand'],
    packages: ['react-router-dom', 'antd', 'axios', 'zustand', 'html2pdf.js', 'exceljs', 'moment'],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
    images: [
      {
        url: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
        caption: { en: "Ticket Dashboard", ar: "لوحة تحكم التذاكر" }
      },
      {
        url: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
        caption: { en: "User Role Management", ar: "إدارة أدوار المستخدمين" }
      },
      {
        url: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop",
        caption: { en: "Ticket Processing Flow", ar: "تدفق معالجة التذاكر" }
      }
    ],
    github: "#",
    demo: "#",
    featured: false,
    keyFeatures: [
      "Role-Based Access for different user types (Residence User, SubAdmin, Admin, Operations)",
      "Ticket Lifecycle Management with interactive timeline",
      "Real-Time Notifications using SignalR",
      "Advanced search/filter with pagination",
      "Export capabilities to Excel and PDF",
      "Full CRUD operations for user management"
    ]
  },
  {
    id: 3,
    title: { en: "Akhbary News App", ar: "تطبيق أخباري" },
    category: 'mobile',
    description: {
      en: "Modern mobile news application built with Flutter that delivers real-time news from various sources using NewsAPI with sleek, responsive design.",
      ar: "تطبيق أخبار هاتف حديث مبني بـ Flutter يقدم أخبار فورية من مصادر مختلفة باستخدام NewsAPI مع تصميم أنيق ومتجاوب."
    },
    technologies: ['Flutter', 'Dio', 'NewsAPI'],
    packages: ['dio','intl','shimmer','go_router','shared_preferences','share_plus','connectivity_plus','flutter_svg','url_launcher','url_launcher_ios','url_launcher_android','cached_network_image','sqflite','path_provider'],
    image: akhbary_image,
    images: [
      {
        url: homepage,
        caption: { en: "News Feed Interface", ar: "واجهة تغذية الأخبار" }
      },
      {
        url: skelton,
        caption: { en: "Animation Loading", ar: "انميشن التحميل" }
      },
      {
        url: Dark_mode,
        caption: { en: "Dark Mode", ar: "الوضع الليلي" }
      },
      {
        url: category,
        caption: { en: "Category Selection", ar: "اختيار الفئة" }
      },
      {
        url: News_details,
        caption: { en: "Article Reading View", ar: "عرض قراءة المقال" }
      },
      {
        url: BookMarks,
        caption: { en: "Book Marks", ar: "الاخبار المفضلة" }
      },
      {
        url: ar_search,
        caption: { en: "Arabic search", ar: "البحث بالعربي" }
      },
      {
        url: en_search,
        caption: { en: "English Search", ar: "البحث بالانكليزي" }
      },
    ],
    github: "#",
    demo: "#",
    featured: true,
    keyFeatures: [
      "Real-Time News Feed via NewsAPI",
      "Responsive & Modern UI with Flutter widgets",
      "Shimmer Loading Effects for better UX",
      "Category & Source Filtering",
      "Dynamic Search capabilities",
      "Cross-platform compatibility"
    ]
  },
  {
    id: 4,
    title: { en: "Healthcare App", ar: "تطبيق الرعاية الصحية" },
    category: 'mobile',
    description: {
      en: "User-friendly mobile app offering health tracking and resource information built with Flutter for comprehensive health management.",
      ar: "تطبيق هاتف سهل الاستخدام يقدم تتبع الصحة ومعلومات الموارد مبني بـ Flutter لإدارة صحية شاملة."
    },
    technologies: ['Flutter', 'Dart', 'SQLite', 'Provider'],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
    images: [
      {
        url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
        caption: { en: "Health Dashboard", ar: "لوحة تحكم الصحة" }
      },
      {
        url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
        caption: { en: "Health Tracking", ar: "تتبع الصحة" }
      }
    ],
    github: "#",
    demo: "#",
    keyFeatures: [
      "Health tracking and monitoring",
      "Resource information management",
      "User-friendly interface",
      "Local data storage with SQLite",
      "Cross-platform mobile support"
    ]
  },
  {
    id: 5,
    title: { en: "EPP - Electronic PassPort", ar: "الجواز الإلكتروني" },
    category: 'mobile',
    description: {
      en: "Comprehensive mobile application for Iraq's Electronic PassPort Program featuring interactive maps, office directory, application system, and real-time updates for seamless passport services.",
      ar: "تطبيق هاتف شامل لبرنامج الجواز الإلكتروني العراقي يتضمن خرائط تفاعلية ودليل المكاتب ونظام التقديم والتحديثات الفورية لخدمات جوازات سفر سلسة."
    },
    technologies: ['Flutter', 'MapLibre', 'WebView', 'YouTube API', 'Localization'],
    packages: ['webview_flutter', 'webview_flutter_android', 'webview_flutter_wkwebview', 'youtube_player_flutter', 'flutter_map', 'latlong2', 'maplibre_gl', 'flutter_ar_json_extractor', 'localize_and_translate', 'http', 'location', 'flutter_polyline_points', 'baseflow_plugin_template', 'shimmer', 'flutter_localizations', 'shared_preferences', 'flutter_launcher_icons', 'logger', 'flutter_lints', 'flutter_native_splash'],
    image: epp_image,
    images: [
      {
        url: homepageEpp,
        caption: { en: "Home Page", ar: "الصفحة الرئيسية" }
      },
      {
        url: SplashScreen,
        caption: { en: "Splash Screen", ar: "شاشة البداية" }
      },
      {
        url: OfficeLocation,
        caption: { en: "Interactive Map View", ar: "عرض الخريطة التفاعلية" }
      },
      {
        url: Office_location_dark,
        caption: { en: "Map Dark Mode", ar: "وضع الخريطة الليلي" }
      },
      {
        url: OfficePage,
        caption: { en: "Office Directory", ar: "دليل المكاتب" }
      },
      {
        url: OfficePage2,
        caption: { en: "Office Details", ar: "تفاصيل المكتب" }
      },
      {
        url: Apply_now,
        caption: { en: "Apply Now Process", ar: "عملية التقديم الآن" }
      },
      {
        url: Apply_now2,
        caption: { en: "Application Steps", ar: "خطوات التقديم" }
      },
      {
        url: PassportType,
        caption: { en: "Passport Types", ar: "أنواع الجوازات" }
      },
      {
        url: passport_detail,
        caption: { en: "Passport Details", ar: "تفاصيل الجواز" }
      },
      {
        url: passport_detail2,
        caption: { en: "Passport Information", ar: "معلومات الجواز" }
      },
      {
        url: Blogs,
        caption: { en: "News Section - Blogs Tab", ar: "قسم الأخبار - تبويب المدونات" }
      },
      {
        url: Blogs_detail,
        caption: { en: "Blog Details", ar: "تفاصيل المدونة" }
      },
      {
        url: News_epp,
        caption: { en: "News Section - News Tab", ar: "قسم الأخبار - تبويب الأخبار" }
      },
      {
        url: Epp_history,
        caption: { en: "News Section - History Tab", ar: "قسم الأخبار - تبويب التاريخ" }
      },
      {
        url: Videos,
        caption: { en: "News Section - Videos Tab", ar: "قسم الأخبار - تبويب الفيديوهات" }
      },
      {
        url: webviewpage,
        caption: { en: "WebView Page Apply now", ar: "الحجز الالكتروني" }
      },
      {
        url: Dark_mode_epp,
        caption: { en: "Dark Mode", ar: "الوضع الليلي" }
      }
    ],
    github: "#",
    demo: "#",
    featured: true,
    keyFeatures: [
      "Interactive Map with MapLibre™ rendering and custom office markers",
      "One-tap Geolocation with 'you are here' positioning",
      "Comprehensive Office Directory with detailed location information",
      "Apply Now section with step-by-step application process and required documents",
      "News Section with four tabs: Blogs, News, History of EPP, and Videos",
      "Multi-language support (Arabic/English) with RTL layout",
      "WebView integration for external content and forms",
      "YouTube video player for instructional content",
      "Real-time updates and official announcements",
      "Dark/Light theme support with system preference detection",
      "Offline data caching and shimmer loading animations",
      "Document requirements and application rules guidance"
    ]
  }
];