"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Search, Filter, Star } from "lucide-react"

const productCategories = [
  "All",
  "Staffing Solutions",
  "Pro Services", 
  "Corporate Gifts",
  "Corporate Events",
  "Entertainment Events",
  "Branding",
  "Fitouts",
  "Technology Gifts",
  "Eco-Friendly Products",
  "USB Flash Drive",
  "Earbuds & Speakers",
  "Cables, Adapter & Mobile Stand",
  "Promotional Gift Sets",
  "Portfolio Organizer",
  "Drinkware",
  "Writing Instruments",
  "Mousepad",
  "Promotional Bags",
  "Wallets & Card Holder",
]

const productData = [
  // STAFFING SOLUTIONS
  {
    id: 1001,
    name: "Executive Staffing Solutions",
    category: "Staffing Solutions",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop&crop=center",
    rating: 4.9,
    reviews: 89,
    description: "Comprehensive executive and professional staffing solutions for businesses across Oman.",
    features: ["Executive Search", "Temporary Staffing", "Contract Workers", "HR Consulting"],
    isNew: true,
    isEcoFriendly: false,
  },
  {
    id: 1002,
    name: "Technical Workforce Solutions",
    category: "Staffing Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center",
    rating: 4.8,
    reviews: 67,
    description: "Specialized technical staffing for IT, engineering, and skilled labor positions.",
    features: ["IT Professionals", "Engineering Staff", "Skilled Labor", "Project Teams"],
    isNew: false,
    isEcoFriendly: false,
  },

  // PRO SERVICES
  {
    id: 2001,
    name: "Business Consulting Services",
    category: "Pro Services",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=center",
    rating: 4.9,
    reviews: 124,
    description: "Strategic business consulting and advisory services for growth and optimization.",
    features: ["Strategic Planning", "Process Optimization", "Market Analysis", "Growth Strategy"],
    isNew: true,
    isEcoFriendly: false,
  },
  {
    id: 2002,
    name: "Project Management Solutions",
    category: "Pro Services",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center",
    rating: 4.7,
    reviews: 98,
    description: "Professional project management services for complex business initiatives.",
    features: ["Project Planning", "Risk Management", "Quality Control", "Timeline Management"],
    isNew: false,
    isEcoFriendly: false,
  },

  // CORPORATE GIFTS
  {
    id: 3001,
    name: "Premium Corporate Gift Collection",
    category: "Corporate Gifts",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop&crop=center",
    rating: 4.9,
    reviews: 156,
    description: "Curated collection of premium corporate gifts with custom branding options.",
    features: ["Custom Branding", "Premium Quality", "Bulk Pricing", "Fast Delivery"],
    isNew: true,
    isEcoFriendly: false,
  },
  {
    id: 3002,
    name: "Executive Gift Sets",
    category: "Corporate Gifts",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center",
    rating: 4.8,
    reviews: 134,
    description: "Luxury executive gift sets for high-level corporate relationships.",
    features: ["Luxury Items", "Executive Packaging", "Personalized", "Premium Materials"],
    isNew: false,
    isEcoFriendly: false,
  },

  // CORPORATE EVENTS
  {
    id: 4001,
    name: "Corporate Conference Management",
    category: "Corporate Events",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop&crop=center",
    rating: 4.8,
    reviews: 89,
    description: "Complete corporate conference and seminar management services.",
    features: ["Venue Management", "Catering", "Audio Visual", "Registration"],
    isNew: true,
    isEcoFriendly: false,
  },
  {
    id: 4002,
    name: "Business Networking Events",
    category: "Corporate Events",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop&crop=center",
    rating: 4.7,
    reviews: 112,
    description: "Professional networking events and business gatherings.",
    features: ["Event Planning", "Guest Management", "Networking Setup", "Follow-up Services"],
    isNew: false,
    isEcoFriendly: false,
  },

  // ENTERTAINMENT EVENTS
  {
    id: 5001,
    name: "Corporate Entertainment Planning",
    category: "Entertainment Events",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
    rating: 4.9,
    reviews: 145,
    description: "Corporate entertainment and team building event management.",
    features: ["Entertainment Booking", "Team Building", "Party Planning", "Venue Setup"],
    isNew: true,
    isEcoFriendly: false,
  },
  {
    id: 5002,
    name: "Employee Celebration Events",
    category: "Entertainment Events",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop&crop=center",
    rating: 4.8,
    reviews: 98,
    description: "Employee appreciation and celebration event management.",
    features: ["Employee Recognition", "Award Ceremonies", "Celebration Planning", "Catering"],
    isNew: false,
    isEcoFriendly: false,
  },

  // BRANDING
  {
    id: 6001,
    name: "Complete Brand Identity Package",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop&crop=center",
    rating: 4.9,
    reviews: 167,
    description: "Comprehensive brand identity design and development services.",
    features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Digital Assets"],
    isNew: true,
    isEcoFriendly: false,
  },
  {
    id: 6002,
    name: "Marketing Material Design",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center",
    rating: 4.8,
    reviews: 123,
    description: "Professional marketing material design and production services.",
    features: ["Brochures", "Business Cards", "Flyers", "Digital Marketing"],
    isNew: false,
    isEcoFriendly: false,
  },

  // FITOUTS
  {
    id: 7001,
    name: "Office Space Fitouts",
    category: "Fitouts",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop&crop=center",
    rating: 4.9,
    reviews: 134,
    description: "Professional office space design and fitout services.",
    features: ["Space Planning", "Interior Design", "Furniture Selection", "Installation"],
    isNew: true,
    isEcoFriendly: false,
  },
  {
    id: 7002,
    name: "Commercial Space Design",
    category: "Fitouts",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop&crop=center",
    rating: 4.8,
    reviews: 89,
    description: "Complete commercial space design and fitout solutions.",
    features: ["Design Consultation", "Project Management", "Quality Materials", "Timely Delivery"],
    isNew: false,
    isEcoFriendly: false,
  },

  // TECHNOLOGY GIFTS
  {
    id: 1,
    name: "Wireless Fast Charging Stand",
    category: "Technology Gifts",
    image: "https://images.unsplash.com/photo-1609091839316-d4bf0b0b8b8c?w=400&h=300&fit=crop&crop=center",
    rating: 4.8,
    reviews: 124,
    description: "Multi-purpose wireless charging stand with LED indicators and fast charging capability.",
    features: ["15W Fast Charging", "LED Indicators", "Universal Compatibility", "Anti-Slip Base"],
    isNew: true,
    isEcoFriendly: false,
  },
  {
    id: 2,
    name: "Multi-Purpose Charging Organizer",
    category: "Technology Gifts",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center",
    rating: 4.7,
    reviews: 89,
    description: "Organized charging station with multiple ports and cable management system.",
    features: ["Multi-Port Charging", "Cable Management", "LED Indicators", "Compact Design"],
    isNew: false,
    isEcoFriendly: false,
  },
  {
    id: 3,
    name: "Magnetic Wireless Power Bank",
    category: "Technology Gifts",
    image: "https://images.unsplash.com/photo-1609592808170-8c0d5b5e3b3b?w=400&h=300&fit=crop&crop=center",
    rating: 4.9,
    reviews: 156,
    description: "High-capacity magnetic wireless power bank with fast charging and universal compatibility.",
    features: ["10000mAh Capacity", "Magnetic Attachment", "Wireless Charging", "Fast Charge"],
    isNew: true,
    isEcoFriendly: false,
  },

  // ECO-FRIENDLY PRODUCTS
  {
    id: 4,
    name: "Light Up Logo Bamboo Wireless Power Banks",
    category: "Eco-Friendly Products",
    image: "https://images.unsplash.com/photo-1609592808170-8c0d5b5e3b3b?w=400&h=300&fit=crop&crop=center",
    rating: 4.9,
    reviews: 203,
    description: "Sustainable bamboo wireless power bank with customizable LED logo display. Eco-friendly and stylish.",
    features: ["10000mAh Capacity", "Bamboo Exterior", "LED Logo Display", "Wireless Charging"],
    isNew: false,
    isEcoFriendly: true,
  },
  {
    id: 5,
    name: "Bamboo Water Bottle",
    category: "Eco-Friendly Products",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop&crop=center",
    rating: 4.8,
    reviews: 312,
    description: "Premium bamboo water bottle with stainless steel interior and leak-proof design.",
    features: ["Bamboo Exterior", "Stainless Steel Interior", "Leak-Proof", "BPA Free"],
    isNew: false,
    isEcoFriendly: true,
  },
  {
    id: 6,
    name: "Wooden USB Flash Drives",
    category: "Eco-Friendly Products",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center",
    rating: 4.6,
    reviews: 178,
    description: "Sustainable wooden USB flash drives with high storage capacity and natural finish.",
    features: ["Wooden Case", "High Storage", "Natural Finish", "Eco-Friendly"],
    isNew: true,
    isEcoFriendly: true,
  },

  // USB FLASH DRIVE
  {
    id: 7,
    name: "OTG Swivel USB Flash Drive",
    category: "USB Flash Drive",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center",
    rating: 4.7,
    reviews: 145,
    description: "Versatile OTG swivel USB flash drive compatible with smartphones and computers.",
    features: ["OTG Compatible", "Swivel Design", "High Speed", "Universal Compatibility"],
    isNew: true,
    isEcoFriendly: false,
  },
  {
    id: 8,
    name: "Light Up Logo USB",
    category: "USB Flash Drive",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center",
    rating: 4.8,
    reviews: 267,
    description: "USB flash drive with customizable LED logo display for brand promotion.",
    features: ["LED Logo Display", "Customizable", "High Capacity", "Brand Promotion"],
    isNew: false,
    isEcoFriendly: false,
  },
  {
    id: 9,
    name: "ECO Friendly USB",
    category: "USB Flash Drive",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center",
    rating: 4.9,
    reviews: 189,
    description: "Environmentally friendly USB flash drive made from recycled materials.",
    features: ["Recycled Materials", "High Performance", "Eco-Friendly", "Durable"],
    isNew: true,
    isEcoFriendly: true,
  },
  {
    id: 10,
    name: "Leather USB Flash Drive",
    category: "USB Flash Drive",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center",
    rating: 4.6,
    reviews: 134,
    description: "Premium leather USB flash drive with elegant design and high storage capacity.",
    features: ["Leather Case", "Premium Design", "High Storage", "Elegant Finish"],
    isNew: false,
    isEcoFriendly: false,
  },

  // EARBUDS & SPEAKERS
  {
    id: 11,
    name: "Wireless Earbuds",
    category: "Earbuds & Speakers",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=300&fit=crop&crop=center",
    rating: 4.7,
    reviews: 298,
    description: "High-quality wireless earbuds with premium sound quality and long battery life.",
    features: ["Premium Sound", "Long Battery Life", "Wireless Connection", "Comfortable Fit"],
    isNew: true,
    isEcoFriendly: false,
  },
  {
    id: 12,
    name: "Bluetooth Speaker",
    category: "Earbuds & Speakers",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop&crop=center",
    rating: 4.8,
    reviews: 223,
    description: "Portable Bluetooth speaker with 360-degree sound and waterproof design.",
    features: ["360° Sound", "Waterproof", "Long Battery", "Portable"],
    isNew: false,
    isEcoFriendly: false,
  },
  {
    id: 13,
    name: "Wireless Earbuds With Charging Case",
    category: "Earbuds & Speakers",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center",
    rating: 4.9,
    reviews: 345,
    description: "Premium wireless earbuds with charging case and active noise cancellation.",
    features: ["Noise Cancellation", "Charging Case", "Premium Sound", "Long Battery"],
    isNew: true,
    isEcoFriendly: false,
  },
  {
    id: 14,
    name: "Humidifier",
    category: "Earbuds & Speakers",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center",
    rating: 4.5,
    reviews: 167,
    description: "Smart humidifier with LED lighting and remote control for office ambiance.",
    features: ["Smart Control", "LED Lighting", "Remote Control", "Quiet Operation"],
    isNew: false,
    isEcoFriendly: false,
  },

  // CABLES, ADAPTER & MOBILE STAND
  {
    id: 15,
    name: "Storage Box USB Cable",
    category: "Cables, Adapter & Mobile Stand",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center",
    rating: 4.6,
    reviews: 198,
    description: "Organized USB cable storage box with multiple cable types and compartments.",
    features: ["Multiple Cables", "Storage Compartments", "Organized Design", "Durable"],
    isNew: false,
    isEcoFriendly: false,
  },
  {
    id: 16,
    name: "Light-up Logo Cable",
    category: "Cables, Adapter & Mobile Stand",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center",
    rating: 4.8,
    reviews: 156,
    description: "USB cable with LED logo display and fast charging capability.",
    features: ["LED Logo", "Fast Charging", "Durable", "Brand Promotion"],
    isNew: true,
    isEcoFriendly: false,
  },
  {
    id: 17,
    name: "Travel Adapter",
    category: "Cables, Adapter & Mobile Stand",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center",
    rating: 4.7,
    reviews: 234,
    description: "Universal travel adapter with multiple ports and worldwide compatibility.",
    features: ["Universal Compatibility", "Multiple Ports", "Compact Design", "Safety Protection"],
    isNew: false,
    isEcoFriendly: false,
  },
  {
    id: 18,
    name: "Foldable Mobile Phone Holder",
    category: "Cables, Adapter & Mobile Stand",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center",
    rating: 4.9,
    reviews: 189,
    description: "Adjustable foldable mobile phone holder with multiple viewing angles.",
    features: ["Adjustable Angles", "Foldable Design", "Universal Fit", "Stable Base"],
    isNew: true,
    isEcoFriendly: false,
  },

  // PROMOTIONAL GIFT SETS
  {
    id: 19,
    name: "Eco Friendly Gift Sets",
    category: "Promotional Gift Sets",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center",
    rating: 4.8,
    reviews: 145,
    description: "Curated eco-friendly gift sets with sustainable products for corporate gifting.",
    features: ["Sustainable Products", "Gift Box", "Multiple Items", "Eco-Friendly"],
    isNew: true,
    isEcoFriendly: true,
  },
  {
    id: 20,
    name: "Promotional Gift Sets",
    category: "Promotional Gift Sets",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center",
    rating: 4.7,
    reviews: 267,
    description: "Premium promotional gift sets with branded items and elegant packaging.",
    features: ["Branded Items", "Elegant Packaging", "Multiple Products", "Custom Branding"],
    isNew: false,
    isEcoFriendly: false,
  },

  // PORTFOLIO ORGANIZER
  {
    id: 21,
    name: "Portfolio Organizer",
    category: "Portfolio Organizer",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center",
    rating: 4.6,
    reviews: 178,
    description: "Professional portfolio organizer with multiple compartments and business card holder.",
    features: ["Multiple Compartments", "Business Card Holder", "Professional Design", "Durable"],
    isNew: false,
    isEcoFriendly: false,
  },
  {
    id: 22,
    name: "A5 Organizer Office & Business",
    category: "Portfolio Organizer",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center",
    rating: 4.8,
    reviews: 223,
    description: "A5 size organizer perfect for office and business use with premium materials.",
    features: ["A5 Size", "Premium Materials", "Business Use", "Professional"],
    isNew: true,
    isEcoFriendly: false,
  },
  {
    id: 23,
    name: "A5 Note Book",
    category: "Portfolio Organizer",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center",
    rating: 4.5,
    reviews: 156,
    description: "Premium A5 notebook with high-quality paper and professional binding.",
    features: ["High-Quality Paper", "Professional Binding", "A5 Size", "Durable"],
    isNew: false,
    isEcoFriendly: false,
  },
  {
    id: 24,
    name: "A5 PU Notebook With USB Flash Chip",
    category: "Portfolio Organizer",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center",
    rating: 4.9,
    reviews: 189,
    description: "Innovative A5 PU notebook with integrated USB flash drive for digital storage.",
    features: ["Integrated USB", "PU Cover", "Digital Storage", "Innovative Design"],
    isNew: true,
    isEcoFriendly: false,
  },

  // DRINKWARE
  {
    id: 25,
    name: "Stainless Drinkware",
    category: "Drinkware",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center",
    rating: 4.8,
    reviews: 312,
    description: "Premium stainless steel drinkware with double-wall insulation and custom engraving.",
    features: ["Double-Wall Insulation", "Custom Engraving", "BPA Free", "Durable"],
    isNew: false,
    isEcoFriendly: false,
  },
  {
    id: 26,
    name: "Lunch Box With Cutlery Set",
    category: "Drinkware",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center",
    rating: 4.7,
    reviews: 198,
    description: "Complete lunch box set with cutlery and compartments for organized meals.",
    features: ["Complete Set", "Multiple Compartments", "Cutlery Included", "Leak-Proof"],
    isNew: true,
    isEcoFriendly: false,
  },
  {
    id: 27,
    name: "Bamboo Water Bottle",
    category: "Drinkware",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center",
    rating: 4.9,
    reviews: 245,
    description: "Eco-friendly bamboo water bottle with stainless steel interior and natural bamboo exterior.",
    features: ["Bamboo Exterior", "Stainless Interior", "Eco-Friendly", "Leak-Proof"],
    isNew: false,
    isEcoFriendly: true,
  },
  {
    id: 28,
    name: "Ceramic Mugs",
    category: "Drinkware",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center",
    rating: 4.6,
    reviews: 167,
    description: "Premium ceramic mugs with custom logo printing and comfortable handle design.",
    features: ["Custom Logo", "Premium Ceramic", "Comfortable Handle", "Dishwasher Safe"],
    isNew: true,
    isEcoFriendly: false,
  },

  // WRITING INSTRUMENTS
  {
    id: 29,
    name: "Metal Pen with Stylus",
    category: "Writing Instruments",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center",
    rating: 4.7,
    reviews: 189,
    description: "Premium metal pen with integrated stylus for digital and traditional writing.",
    features: ["Metal Construction", "Integrated Stylus", "Premium Quality", "Dual Purpose"],
    isNew: true,
    isEcoFriendly: false,
  },
  {
    id: 30,
    name: "Plastic Pens",
    category: "Writing Instruments",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center",
    rating: 4.5,
    reviews: 234,
    description: "High-quality plastic pens with smooth writing experience and custom branding.",
    features: ["Smooth Writing", "Custom Branding", "High Quality", "Comfortable Grip"],
    isNew: false,
    isEcoFriendly: false,
  },

  // MOUSEPAD
  {
    id: 31,
    name: "Wireless Charging Mouse Pad",
    category: "Mousepad",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center",
    rating: 4.8,
    reviews: 156,
    description: "Innovative mouse pad with wireless charging capability and LED lighting.",
    features: ["Wireless Charging", "LED Lighting", "High Precision", "Non-Slip Base"],
    isNew: true,
    isEcoFriendly: false,
  },
  {
    id: 32,
    name: "LED Light Up Logo Wireless Mouse",
    category: "Mousepad",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center",
    rating: 4.9,
    reviews: 178,
    description: "Wireless mouse with LED logo display and ergonomic design for comfortable use.",
    features: ["LED Logo Display", "Wireless Connection", "Ergonomic Design", "Long Battery"],
    isNew: true,
    isEcoFriendly: false,
  },

  // PROMOTIONAL BAGS
  {
    id: 33,
    name: "Multifunctional Travel Back Packs",
    category: "Promotional Bags",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center",
    rating: 4.8,
    reviews: 223,
    description: "Versatile travel backpack with multiple compartments and laptop protection.",
    features: ["Multiple Compartments", "Laptop Protection", "Water Resistant", "Ergonomic"],
    isNew: false,
    isEcoFriendly: false,
  },
  {
    id: 34,
    name: "String Bag",
    category: "Promotional Bags",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center",
    rating: 4.6,
    reviews: 145,
    description: "Eco-friendly string bag perfect for shopping and daily use with custom printing.",
    features: ["Eco-Friendly", "Custom Printing", "Lightweight", "Durable"],
    isNew: true,
    isEcoFriendly: true,
  },
  {
    id: 35,
    name: "Non Woven Shopping Bags",
    category: "Promotional Bags",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center",
    rating: 4.7,
    reviews: 198,
    description: "Durable non-woven shopping bags with custom logo and reinforced handles.",
    features: ["Non-Woven Material", "Custom Logo", "Reinforced Handles", "Reusable"],
    isNew: false,
    isEcoFriendly: true,
  },
  {
    id: 36,
    name: "Laptop Bag",
    category: "Promotional Bags",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center",
    rating: 4.9,
    reviews: 267,
    description: "Professional laptop bag with padded compartments and multiple organization pockets.",
    features: ["Padded Compartments", "Multiple Pockets", "Professional Design", "Durable"],
    isNew: true,
    isEcoFriendly: false,
  },
  {
    id: 37,
    name: "Paper Bag",
    category: "Promotional Bags",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center",
    rating: 4.5,
    reviews: 134,
    description: "Eco-friendly paper bags with custom printing and sturdy construction.",
    features: ["Eco-Friendly", "Custom Printing", "Sturdy Construction", "Biodegradable"],
    isNew: false,
    isEcoFriendly: true,
  },

  // WALLETS & CARD HOLDER
  {
    id: 38,
    name: "Business Card Holder",
    category: "Wallets & Card Holder",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center",
    rating: 4.7,
    reviews: 189,
    description: "Premium business card holder with RFID blocking and elegant design.",
    features: ["RFID Blocking", "Elegant Design", "Premium Materials", "Compact"],
    isNew: false,
    isEcoFriendly: false,
  },
  {
    id: 39,
    name: "Wallets",
    category: "Wallets & Card Holder",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center",
    rating: 4.8,
    reviews: 234,
    description: "High-quality wallets with multiple card slots and cash compartments.",
    features: ["Multiple Card Slots", "Cash Compartments", "High Quality", "Slim Design"],
    isNew: true,
    isEcoFriendly: false,
  },
  {
    id: 40,
    name: "Metal Keychains with Leather Strap",
    category: "Wallets & Card Holder",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center",
    rating: 4.6,
    reviews: 156,
    description: "Durable metal keychains with premium leather strap and custom engraving.",
    features: ["Metal Construction", "Leather Strap", "Custom Engraving", "Durable"],
    isNew: false,
    isEcoFriendly: false,
  },
  {
    id: 41,
    name: "Anti Stress Balls",
    category: "Wallets & Card Holder",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center",
    rating: 4.5,
    reviews: 178,
    description: "Soft anti-stress balls with custom logo printing for office stress relief.",
    features: ["Stress Relief", "Custom Logo", "Soft Material", "Portable"],
    isNew: true,
    isEcoFriendly: false,
  },
  {
    id: 42,
    name: "Car Sunshade",
    category: "Wallets & Card Holder",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center",
    rating: 4.7,
    reviews: 145,
    description: "Foldable car sunshade with custom branding and UV protection.",
    features: ["UV Protection", "Foldable Design", "Custom Branding", "Universal Fit"],
    isNew: false,
    isEcoFriendly: false,
  },
  {
    id: 43,
    name: "Lanyard",
    category: "Wallets & Card Holder",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center",
    rating: 4.8,
    reviews: 267,
    description: "Durable lanyard with custom printing and breakaway safety feature.",
    features: ["Breakaway Safety", "Custom Printing", "Durable", "Adjustable Length"],
    isNew: true,
    isEcoFriendly: false,
  },
]

export default function Products() {
  const [isVisible, setIsVisible] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("featured")
  
  useEffect(() => {
    setIsVisible(true)
  }, [])

  const filteredProducts = productData.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating
      case "newest":
        return b.isNew ? 1 : -1
      case "name":
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })

  return (
    <main className="min-h-screen bg-white">

      {/* Enhanced Header Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 px-4 md:px-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full hidden md:block animate-pulse"></div>
          <div className="absolute top-32 right-20 w-24 h-24 border-2 border-white rounded-full hidden md:block animate-bounce" style={{ animationDuration: '3s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-white rounded-full hidden md:block animate-ping" style={{ animationDuration: '2s' }}></div>
          <div className="absolute bottom-32 right-1/3 w-20 h-20 border-2 border-white rounded-full hidden md:block animate-spin" style={{ animationDuration: '15s' }}></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className={`inline-block bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2 md:px-6 md:py-2 text-xs md:text-sm font-semibold uppercase tracking-widest mb-4 md:mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
            Premium Collection
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight md:tracking-tighter mb-6 md:mb-8 leading-tight">
            <span className={`block break-words transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>DISCOVER</span>
            <span className={`block text-blue-200 transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>PREMIUM</span>
            <span className={`block transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>PRODUCTS</span>
          </h1>
          <p className={`text-base md:text-xl max-w-3xl mx-auto mb-8 md:mb-12 text-blue-100 leading-relaxed px-2 md:px-0 transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
            Explore our curated collection of promotional gifts and accessories. Each product is carefully selected for quality, 
            functionality, and lasting brand impact across Oman and the Gulf region.
          </p>
          
          {/* Quick Stats */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center group">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300">43</div>
              <div className="text-xs md:text-sm text-blue-200 uppercase tracking-widest">Products</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300">12</div>
              <div className="text-xs md:text-sm text-blue-200 uppercase tracking-widest">Categories</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300">4.7</div>
              <div className="text-xs md:text-sm text-blue-200 uppercase tracking-widest">Avg Rating</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300">5000+</div>
              <div className="text-xs md:text-sm text-blue-200 uppercase tracking-widest">Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories only (3 items) */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-3">Our Core Categories</h2>
            <p className="text-gray-600">We keep it simple. Choose a category and contact us for tailored options.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Corporate Gifts", description: "Premium branded gifting for clients and teams." },
              { title: "Branding", description: "Identity, logos and marketing materials." },
              { title: "Fitouts", description: "Office and commercial space design & setup." },
            ].map((cat) => (
              <div key={cat.title} className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="text-xs text-blue-600 font-semibold uppercase tracking-widest mb-2">Category</div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{cat.title}</h3>
                <p className="text-gray-600 mb-6">{cat.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Details on request</span>
                  <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700">
                    Contact Us
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
          <div className="absolute top-32 right-20 w-24 h-24 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-32 right-1/3 w-20 h-20 border-2 border-white rounded-full"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-block bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-2 text-sm font-semibold uppercase tracking-widest mb-6">
            Ready to Order?
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
            <span className="block">GET YOUR</span>
            <span className="block text-blue-200">CUSTOM QUOTE</span>
            <span className="block">TODAY</span>
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-blue-100 leading-relaxed">
            Interested in any of our products? Contact us for custom quotes, bulk pricing, and personalized branding options. 
            Our team will help you find the perfect promotional gifts for your needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-10 py-4 font-bold uppercase tracking-widest hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Quote
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Custom Solutions
            </Link>
          </div>
          
          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-bold mb-2">Fast Quotes</h3>
              <p className="text-blue-100 text-sm">Get pricing within 24 hours</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="font-bold mb-2">Custom Branding</h3>
              <p className="text-blue-100 text-sm">Personalized logo and design</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="font-bold mb-2">Fast Delivery</h3>
              <p className="text-blue-100 text-sm">Quick turnaround times</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-8 bg-blue-600 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <img 
                  src="/fortunelgoo.png" 
                  alt="Fortune Logo" 
                  className="h-8 w-auto object-contain filter brightness-0 invert"
                />
              </div>
              <p className="text-blue-100">
                Premium gifts for every occasion. Strengthening relationships through thoughtful, high-quality promotional products.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 uppercase tracking-widest">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-blue-100 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-blue-100 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-blue-100 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-blue-100 hover:text-white transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-blue-100 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 uppercase tracking-widest">Products</h4>
              <ul className="space-y-2">
                <li>
                  <span className="text-blue-100">Technology Gifts</span>
                </li>
                <li>
                  <span className="text-blue-100">Eco-Friendly Products</span>
                </li>
                <li>
                  <span className="text-blue-100">Audio & Speakers</span>
                </li>
                <li>
                  <span className="text-blue-100">Office & Business</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 uppercase tracking-widest">Contact Info</h4>
              <div className="space-y-2 text-blue-100">
                <p>hello@fortunegifts.com</p>
                <p>+1 (555) 123-4567</p>
                <p>New York, NY</p>
              </div>
              <div className="flex space-x-4 mt-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="hover:text-white cursor-pointer transition-colors">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="hover:text-white cursor-pointer transition-colors">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="hover:text-white cursor-pointer transition-colors">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-500 pt-8 text-center">
            <p className="text-blue-100">© 2025 Fortune Gifts. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
