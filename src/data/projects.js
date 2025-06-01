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
    technologies: ['React', 'Ant Design', 'Zustand', 'RESTful API', 'ExcelJS', 'SignalR'],
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
    featured: true,
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
    technologies: ['React', 'Ant Design', 'Axios', 'SignalR', 'ExcelJS', 'html2pdf.js', 'Zustand'],
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
    featured: true,
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
    technologies: ['Flutter', 'Dio', 'NewsAPI', 'Provider/Riverpod'],
    image: akhbary_image,
    images: [
      {
        url: skelton,
        caption: { en: "Animation Loading", ar: "انميشن التحميل" }
      },
      {
        url: homepage,
        caption: { en: "News Feed Interface", ar: "واجهة تغذية الأخبار" }
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
  // Add more projects with similar image structure...
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
  }
];