export const sampleCategories = [
  "All",
  "Electronics",
  "Clothing",
  "Home & Garden",
  "Sports & Outdoors",
  "Books",
  "Video Games",
  "Collectibles"
];

// Incorporating user data with products
export const sampleProducts = [
  {
    id: 1,
    title: "PlayStation 5 Console",
    description: "Barely used PS5 console. Includes controller and all cables.",
    condition: "Like New",
    category: "Electronics",
    imageSrc: "/images/ps5.png",
    location: "Seattle, WA",
    owner: {
      id: 101,
      name: "Alex Johnson",
      rating: 4.8,
      joinDate: "Feb 2023",
      profilePicture: "/images/alex.jpg",  // You can update with real profile pictures
      bio: "Gamer and tech enthusiast",
      location: "Seattle, WA",
    }
  },
  {
    id: 2,
    title: "Nike Air Jordan 1",
    description: "Size 10 Men's Air Jordan 1 in Chicago colorway. Worn twice.",
    condition: "Good",
    category: "Clothing",
    imageSrc: "/images/jordan1.jpg",
    location: "Portland, OR",
    owner: {
      id: 102,
      name: "Morgan Smith",
      rating: 4.5,
      joinDate: "Aug 2022",
      profilePicture: "/images/morgan.jpg",
      bio: "Sneaker collector and fashion lover",
      location: "Portland, OR",
    }
  },
  {
    id: 3,
    title: "The Lord of the Rings Trilogy",
    description: "Hardcover collection in excellent condition.",
    condition: "Very Good",
    category: "Books",
    imageSrc: "/images/lotr.jpg",
    location: "Austin, TX",
    owner: {
      id: 103,
      name: "Jamie Wilson",
      rating: 4.9,
      joinDate: "Jan 2023",
      profilePicture: "/images/jamie.jpg",
      bio: "Bookworm and Tolkien fan",
      location: "Austin, TX",
    }
  },
  {
    id: 4,
    title: "Yeti Tundra 45 Cooler",
    description: "Blue Yeti cooler, perfect for camping or tailgating.",
    condition: "Good",
    category: "Sports & Outdoors",
    imageSrc: "/images/yeti.jpg",
    location: "Denver, CO",
    owner: {
      id: 104,
      name: "Chris Taylor",
      rating: 4.6,
      joinDate: "Mar 2022",
      profilePicture: "/images/chris.jpg",
      bio: "Outdoor enthusiast and adventure seeker",
      location: "Denver, CO",
    }
  },
  {
    id: 5,
    title: "Vintage Record Player",
    description: "Restored 1970s record player, works perfectly.",
    condition: "Good",
    category: "Electronics",
    imageSrc: "/images/recordplayer.jpg",
    location: "Nashville, TN",
    owner: {
      id: 105,
      name: "Sam Parker",
      rating: 4.7,
      joinDate: "Jul 2023",
      profilePicture: "/images/sam.jpg",
      bio: "Music lover and vintage tech collector",
      location: "Nashville, TN",
    }
  },
  {
    id: 6,
    title: "Nintendo Switch with Games",
    description: "Nintendo Switch console with dock and 3 popular games.",
    condition: "Very Good",
    category: "Video Games",
    imageSrc: "/images/switch.jpg",
    location: "Chicago, IL",
    owner: {
      id: 106,
      name: "Jordan Lee",
      rating: 4.8,
      joinDate: "May 2022",
      profilePicture: "/images/jordan.jpg",
      bio: "Gaming enthusiast and tech aficionado",
      location: "Chicago, IL",
    }
  },
  {
    id: 7,
    title: "Star Wars LEGO Collection",
    description: "Collection of Star Wars LEGO sets including Millennium Falcon.",
    condition: "Like New",
    category: "Collectibles",
    imageSrc: "/images/starwarslego.jpg",
    location: "San Diego, CA",
    owner: {
      id: 107,
      name: "Taylor Rodriguez",
      rating: 4.9,
      joinDate: "Dec 2022",
      profilePicture: "/images/taylor.jpg",
      bio: "LEGO enthusiast and Star Wars fan",
      location: "San Diego, CA",
    }
  },
  {
    id: 8,
    title: "Instant Pot Pressure Cooker",
    description: "6-quart Instant Pot, barely used with all accessories.",
    condition: "Like New",
    category: "Home & Garden",
    imageSrc: "/images/instantpot.jpg",
    location: "Miami, FL",
    owner: {
      id: 108,
      name: "Casey Martinez",
      rating: 4.4,
      joinDate: "Sep 2023",
      profilePicture: "/images/casey.jpg",
      bio: "Cooking enthusiast and gadget lover",
      location: "Miami, FL",
    }
  }
];

// Incorporating user data with myItems
export const myItems = [
  {
    id: 101,
    title: "MacBook Pro 2021",
    description: "13-inch MacBook Pro with M1 chip. In excellent condition.",
    condition: "Very Good",
    category: "Electronics",
    imageSrc: "/images/hero.jpg",
    owner: {
      id: 109,
      name: "Bryant Martinez", // Update with actual user data
      rating: 5.0,
      joinDate: "May 2023",
      profilePicture: "/images/bryant.jpg", // Update with actual user image
      bio: "Software engineer and tech enthusiast",
      location: "Fullerton, CA",
    }
  },
  {
    id: 102,
    title: "Mountain Bike",
    description: "Trek mountain bike, 2 years old but well maintained.",
    condition: "Good",
    category: "Sports & Outdoors",
    imageSrc: "/images/item2.jpg",
    owner: {
      id: 109,
      name: "Bryant Martinez", // Same owner as above
      rating: 5.0,
      joinDate: "May 2023",
      profilePicture: "/images/bryant.jpg",
      bio: "Outdoor enthusiast and cyclist",
      location: "Fullerton, CA",
    }
  },
  {
    id: 103,
    title: "Leather Jacket",
    description: "Genuine leather jacket, size L, barely worn.",
    condition: "Like New",
    category: "Clothing",
    imageSrc: "/images/item1.jpg",
    owner: {
      id: 109,
      name: "Bryant Martinez", // Same owner as above
      rating: 5.0,
      joinDate: "May 2023",
      profilePicture: "/images/bryant.jpg",
      bio: "Fashion enthusiast",
      location: "Fullerton, CA",
    }
  }
];
