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
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=250&fit=crop",
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
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=250&fit=crop",
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
    title: { en: "Expense Tracker", ar: "متتبع المصروفات" },
    category: 'mobile',
    description: {
      en: "Personal finance management application with budgeting and expense categorization features built with Flutter.",
      ar: "تطبيق إدارة المالية الشخصية مع ميزات الميزانية وتصنيف المصروفات مبني بـ Flutter."
    },
    technologies: ['Flutter', 'Dart', 'SQLite', 'Provider'],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
    github: "#",
    demo: "#",
    keyFeatures: [
      "Personal finance management",
      "Budgeting capabilities",
      "Expense categorization",
      "Financial tracking and reporting",
      "Intuitive mobile interface"
    ]
  },
  {
    id: 6,
    title: { en: "EPP Mobile Application", ar: "تطبيق EPP للهواتف المحمولة" },
    category: 'mobile',
    description: {
      en: "Enterprise mobile application built with Flutter for employee productivity and process management with intuitive user interface and robust functionality.",
      ar: "تطبيق مؤسسي للهواتف المحمولة مبني بـ Flutter لإنتاجية الموظفين وإدارة العمليات مع واجهة مستخدم بديهية ووظائف قوية."
    },
    technologies: ['Flutter', 'Dart', 'RESTful API', 'Provider', 'SQLite'],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop",
    github: "#",
    demo: "#",
    featured: true,
    keyFeatures: [
      "Employee productivity management",
      "Process automation and tracking",
      "Real-time data synchronization",
      "Offline data storage capabilities",
      "Cross-platform mobile support",
      "Intuitive and responsive UI design"
    ]
  },
  {
    id: 7,
    title: { en: "Archive Management System", ar: "نظام إدارة الأرشيف" },
    category: 'web',
    description: {
      en: "Comprehensive web-based archive management system for document storage, organization, and retrieval with advanced search capabilities and user access control.",
      ar: "نظام إدارة أرشيف شامل مبني على الويب لتخزين الوثائق وتنظيمها واسترجاعها مع قدرات بحث متقدمة والتحكم في وصول المستخدمين."
    },
    technologies: ['React', 'Ant Design', 'Access token', 'Permissions', 'Zustand', 'Tailwind'],
    image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=250&fit=crop",
    github: "#",
    demo: "#",
    featured: true,
    keyFeatures: [
      "Document storage and organization",
      "Advanced search and filtering system",
      "User access control and permissions",
      "File upload and download management",
      "Document categorization and tagging",
      "Audit trail and version control",
      "Responsive web interface"
    ]
  }
];