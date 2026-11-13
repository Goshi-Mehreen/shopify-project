import frame1 from "./assets/frame1.png";
import frame2 from "./assets/frame2.png";
import frame3 from "./assets/frame3.png";
import frameicon from "./assets/frameicon.svg";
import btnicon from "./assets/btnicon.png";
import phoneicon from "./assets/phone.png";
import doc1 from "./assets/doc1.svg";
import sup from "./assets/sup.svg";
import walk from "./assets/walk.svg";
import right from "./assets/ArrowRightMinor.png";
import apps1 from "./assets/apps1.png";
import apps2 from "./assets/apps2.png";
import apps3 from "./assets/apps3.png";
import apps4 from "./assets/apps4.png";

import home from "./assets/home.png";
import order from "./assets/order.png";
import product from "./assets/product.png";
import customer from "./assets/customer.png";
import content from "./assets/content.png";
import Finance from "./assets/Finance.png";
import Analytics from "./assets/Analytics.png";
import Marketing from "./assets/Marketing.png";
import Descount from "./assets/Descount.png";
import OnlineStore from "./assets/OnlineStore.png";
import PointSale from "./assets/PointSale.png";
import Shop from "./assets/Shop.png";
import bag from "./assets/bag.png";

import setting from "./assets/setting.png";
import Thumb1 from "./assets/Thumbnail1.png";
import Thumb2 from "./assets/Thumbnail2.png";
import Thumb3 from "./assets/Thumbnail3.png";
import Thumb4 from "./assets/Thumbnail4.png";
import Thumb5 from "./assets/Thumbnail5.png";
import Thumb6 from "./assets/Thumbnail6.png";
import Thumb7 from "./assets/Thumbnail7.png";
import Thumb8 from "./assets/Thumbnail8.png";
import Thumb9 from "./assets/Thumbnail9.png";
import Thumb10 from "./assets/Thumbnail12.png";
import Thumb11 from "./assets/Thumbnail11.png";
import Thumb12 from "./assets/Thumbnail12.png";


export const primaryLinks = [
  {
    id: 1,
    name: "Home",
    icon: home,
  },
  {
    id: 2,
    name: "Orders",
    icon: order,
  },
  {
    id: 3,
    name: "Products",
    icon: product,
  },
  {
    id: 4,
    name: "Customers",
    icon: customer,
  },
  {
    id: 5,
    name: "Content",
    icon: content,
  },
  {
    id: 6,
    name: "Finances",
    icon: Finance,
  },
  {
    id: 7,
    name: "Analytics",
    icon: Analytics,
  },
  {
    id: 8,
    name: "Marketing",
    icon: Marketing,
  },
  {
    id: 9,
    name: "Discounts",
    icon: Descount,
  },
];

export const salesLinks = [
  {
    id: 1,
    name: "Online Store",
    icon: OnlineStore,
  },
  {
    id: 2,
    name: "Point of Sale",
    icon: PointSale,
  },
  {
    id: 3,
    name: "Shop",
    icon: Shop,
  },
];

export const appLinks = [
  {
    id: 1,
    name: "Vidify",
    icon: bag,
    path:'/',
    children: [
      {
        id: 1,
        name: "Generate Video",
        path: "/generate-video",
      },
      {
        id: 2,
        name: "Subscription Plan",
        path: "/subscription-plan",
      },
    ],
  },
];

export const bottomLinks = [
  {
    id: 1,
    name: "Settings",
    icon: setting,
  },
];

export const videoUsage = {
  title: "Video Generator",
  plan: "Explorer",
  used: 1,
  limit: 2,
};

export const Vedioimages = {
  id: 1,
  Image: frame1,
  frameicon: frameicon,
  btnicon: btnicon,
  heading: "Generate Stunning AI-Videos from Product Images",
  para: "Turn your product images into scroll-stopping marketing videos in seconds. Just upload images; we'll add dynamic animations and effects for a high-converting result.",
  btn: "Generate AI Video",
};

export const ScdualeCalData = {
  id: 2,
  Image: frame2,
  btnicon: phoneicon,
  frameicon: frameicon,
  heading: "Want to schedule a call?",
  para: "We have marketing experts ready to help build your video marketing strategy and guide you in scaling your store with video. Want to book a one-to-one session? It’s FREE!",
  btn: "Talk to Vidify Expert",
};
export const SeoGuide = {
  id: 3,
  Image: frame3,
  frameicon: frameicon,
  heading: "Get our free Shopify SEO guide",
  para: "Grab your copy today & discover the secrets to optimizing your Shopify store for search engines",
  btn: "Get the Free eBook",
};
export const Document1 = {
  id: 1,
  Docimage: doc1,
  heading: "Documentation",
  para: "Read our step-by-step guidelines to explore and master every Vidify feature.",
  Righticon: right,
};

export const Support1 = {
  id: 2,
  Docimage: sup,
  heading: "Support",
  para: "Our team is always ready to help reach out anytime to solve any issue.",
  Righticon: right,
};

export const Walk1 = {
  id: 3,
  Docimage: walk,
  heading: "Vidify Walkthrough",
  para: "Book a session with our experts and learn how to get the most out of Vidify.",
  Righticon: right,
};

export const AppData = [
  {
    id: 1,
    imageApp: apps1,
    heading: "BetterDocs for Shopify – Advanced Knowledge Base App",
    para: "EasyFlow is a Shopify app designed to enhance product customization and streamline the management of product options for online stores.",
    points: [
      "Allows customers to personalize products with text, images, and more",
      "Dynamically shows or hides options based on customer selections",
      "Customers can upload files for personalized products",
      "Centralized management of all product options and variants",
    ],
    btn: "Get Started",
  },

  {
    id: 2,
    imageApp: apps2,
    heading: "TrustSync - Review Collection App",
    para: "Create FAQ pages or build individual product FAQs with AI to reduce support tickets and improve the customer experience.",
    points: [
      "Use the advanced AI Autowrite feature for writing FAQs instantly",
      "Design the FAQ page with various customizations",
      "Drag and drop to add the StoreFAQ App block anywhere on a page",
      "Export or import FAQs without any hassle",
    ],
    btn: "Get Started",
  },
  {
    id: 3,

    imageApp: apps3,
    heading: "TrustSync - Review Collection App",
    para: "Boost your business reputation by collecting reviews for Google Review, Trustpilot, Etsy, and more while filtering out negative ratings.",
    points: [
      "Collect customers' reviews via review collection emails",
      "Auto-publish reviews on popular platforms",
      "Review settings and email configurations",
      "Manage negative feedback while filtering out low ratings",
    ],
    btn: "Get Started",
  },
  {
    id: 4,
    imageApp: apps4,
    heading: "StoreSEO - AI SEO Agent",
    para: "StoreSEO is an AI-powered Shopify app to boost your store’s search engine rankings and organic traffic through AI SEO optimization.",
    points: [
      "Improve ranking in search engines with Product SEO Optimizer and Blog SEO.",
      "Generate meta titles, descriptions, and tags with AI.",
      "AI Image Optimizer, Resizer, Compressor, page speed improvements, and image alt text.",
      "Local SEO updates, Schema markup, Sitemaps, and LLMs.txt for organic ranking boost.",
    ],
    btn: "Get Started",
  },
];

export const VedioGenData = [
  {
    id: 1,
    Thumb: Thumb1,
    name: "stylish-summer-necklace",
    images: 3,
    status: "Active",
    inventory: "0 in stock for 50 variants",
    progress: "Not Generated",
  },
  {
    id: 2,
    Thumb: Thumb2,
    name: "threader-necklace-closeup",
    images: 5,
    status: "Active",
    inventory: "360 in stock",
    progress: "In Progress",
  },
  {
    id: 3,
    Thumb: Thumb3,
    name: "silver-threader-necklace",
    images: 2,
    status: "Draft",
    inventory: "120 in stock",
    progress: "Not Generated",
  },
  {
    id: 4,
    Thumb: Thumb4,
    name: "silver-threader-necklace",
    images: 2,
    status: "Active",
    inventory: "120 in stock",
    progress: "Completed",
  },
  {
    id: 5,
    Thumb: Thumb5,
    name: "threader-necklace-closeup",
    images: 2,
    status: "Active",
    inventory: "120 in stock",
    variants: 0,
    progress: "Completed",
  },
  {
    id: 6,
    Thumb: Thumb6,
    name: "silver-threader-necklace",
    images: 2,
    status: "Active",
    inventory: "120 in stock",
    variants: 0,
    progress: "Completed",
  },
  {
    id: 7,
    Thumb: Thumb7,
    name: "silver-threader-necklace",
    images: 2,
    status: "Active",
    inventory: "120 in stock",
    variants: 0,
    progress: "Completed",
  },
  {
    id: 8,
    Thumb: Thumb8,
    name: "stylish-summer-necklace",
    images: 2,
    status: "Active",
    inventory: "120 in stock",
    variants: 0,
    progress: "Completed",
  },
  {
    id: 9,
    Thumb: Thumb9,
    name: "threader-necklace-closeup",
    images: 2,
    status: "Active",
    inventory: "120 in stock",
    variants: 0,
    progress: "Completed",
  },
  {
    id: 10,
    Thumb: Thumb10,
    name: "silver-threader-necklace",
    images: 2,
    status: "Active",
    inventory: "120 in stock",
    progress: "Completed",
  },
  {
    id: 11,
    Thumb: Thumb11,
    name: "silver-threader-necklace",
    images: 2,
    status: "Active",
    inventory: "120 in stock",
    progress: "Completed",
  },
  {
    id: 12,
    Thumb: Thumb12,
    name: "silver-threader-necklace",
    images: 2,
    status: "Active",
    inventory: "120 in stock",
    progress: "Completed",
  },
];

// plansData.js
export const PlansData = [
  {
    id: 1,
    name: "Creator",
    price: 20,
    period: "/M",
    videos: 20,
    buttonText: "Choose Creator Plan",
    highlighted: false,
  },
  {
    id: 2,
    name: "Scale",
    price: 40,
    period: "/M",
    videos: 40,
    buttonText: "Choose Scale Plan",
    highlighted: true, // design mein ye button dark hai
  },
  {
    id: 3,
    name: "Mastery",
    price: 60,
    period: "/M",
    videos: 60,
    buttonText: "Choose Mastery Plan",
    highlighted: false,
  },
];
