const vendors = [
  {
    id: "kafe-uthman",
    name: "Kafe Mahallah Uthman",
    location: "Mahallah Uthman, Block D",
    openHours: "7:00 am - 10:00 pm",
    isOpen: true,
    menu: [
      {
        id: "uthman-1",
        name: "Nasi Lemak Ayam Berempah",
        description:
          "Fragrant coconut rice served with spiced fried chicken, sambal, boiled egg, and peanuts",
        price: 8.5,
        category: "Rice",
        available: true,
      },
      {
        id: "uthman-2",
        name: "Mee Goreng Mamak",
        description:
          "Wok fried yellow noodles with tofu, fritters, and bean sprouts in spicy-sweet sauce",
        price: 6.5,
        category: "Noodles",
        available: true,
      },
      {
        id: "uthman-3",
        name: "Teh Tarik",
        description: "Chilled pulled milk tea with rich froth",
        price: 2.8,
        category: "Drinks",
        available: true,
      },
      {
        id: "ali-4",
        name: "Roti Canai Banjir",
        description:
          "Two pieces of crispy flatbread drenched in mixed dhal and sambal",
        price: 3.5,
        category: "Roti",
        available: false,
      },
    ],
  },
  {
    id: "kafe-aminah",
    name: "Kafe Mahallah Aminah",
    location: "Mahallah Aminah, Ground Floor",
    openHours: "8:00 am - 9:00 pm",
    isOpen: true,
    menu: [
      {
        id: "ami-1",
        name: "Nasi Ayam Penyet",
        description: "Smashed fried chicken with sambal and rice",
        price: 9,
        category: "Rice",
        available: true,
      },
      {
        id: "ami-2",
        name: "Air Bandung",
        description: "Rose syrup with milk",
        price: 3,
        category: "Drinks",
        available: true,
      },
    ],
  },
];

export default vendors;
