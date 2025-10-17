const potentialProphets = [
  {
    individualClassName: "Jesus Christ",
    accent: true,
    show: true,
    prophetName: "Jesus Christ",
    info:"Savior",
    era: "Ancient, Modern",
    birth: "0-12-25",
    death: "33-03-03",
    hemisphere: "Middle East, Americas",
    location: "All",
    scripture:"All",
    imageUrl: "https://www.churchofjesuschrist.org/imgs/a824e2d796036346a7d663cf48aef69807c05400/full/3840%2C/0/default"
  },
  {
    individualClassName: "Abraham",
    accent: false,
    show: true,
    prophetName: "Abraham",
    info:"Patriarch",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Genesis 20:7",
    imageUrl: "https://www.lds.org/bc/content/shared/content/images/gospel-library/manual/PD60004369/CU040227-001crp3.jpg"
  },
  {
    individualClassName: "Eber",
    accent: false,
    show: false,
    prophetName: "Eber",
    info:"Prophet - was a descendant of Arpachshad, and the name 'Hebrew' comes from his name.",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Genesis 16:16–17",
    imageUrl: "NA"
  },
  {
    individualClassName: "Isaac",
    accent: false,
    show: false,
    prophetName: "Isaac",
    info:"Patriarch",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Genesis 26:2–7",
    imageUrl: "NA"
  },
  {
    individualClassName: "Ishmael",
    accent: false,
    show: false,
    prophetName: "Ishmael",
    info:"Patriarch",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Genesis 16:11",
    imageUrl: "NA"
  },
  {
    individualClassName: "Israel",
    accent: false,
    show: false,
    prophetName: "Jacob(Israel)",
    info:"Patriarch",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Genesis 28:11–16",
    imageUrl: "NA"
  },
  {
    individualClassName: "Jethro",
    accent: false,
    show: false,
    prophetName: "Jethro",
    info:"Patriarch",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Exodus 2:18",
    imageUrl: "NA"
  },
  {
    individualClassName: "Lamech",
    accent: false,
    show: false,
    prophetName: "Lamech",
    info:"Prophet, father of Noah",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Genesis 5:28–29",
    imageUrl: "NA"
  },
  {
    individualClassName: "Lot",
    accent: false,
    show: false,
    prophetName: "Lot",
    info:"Patriarch",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Genesis 11:27",
    imageUrl: "NA"
  },
  {
    individualClassName: "Melchizedek",
    accent: false,
    show: false,
    prophetName: "Melchizedek",
    info:"Priest",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Genesis 14:18–24",
    imageUrl: "NA"
  },
  {
    individualClassName: "Noah",
    accent: false,
    show: false,
    prophetName: "Noah",
    info:"Prophet, the son of Lamech, was known for his ark and surviving the Great Flood.",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Genesis 7:1",
    imageUrl: "NA"
  },
  {
    individualClassName: "Miriam",
    accent: false,
    show: false,
    prophetName: "Miriam",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Book of Exodus 15:20",
    imageUrl: "NA"
  },
  {
    individualClassName: "Moses",
    accent: false,
    show: false,
    prophetName: "Moses",
    info:"Prophet",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Deuteronomy 34:10",
    imageUrl: "NA"
  },
  {
    individualClassName: "Agabus",
    accent: false,
    show: false,
    prophetName: "Agabus",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Acts of the Apostles 11:27–28",
    imageUrl: "NA"
  },
  {
    individualClassName: "Ahijah",
    accent: false,
    show: false,
    prophetName: "Ahijah",
    info:"Prophet, Ahijah the Shilonite",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"1 Kings 11:29",
    imageUrl: "NA"
  },
  {
    individualClassName: "Amos",
    accent: false,
    show: false,
    prophetName: "Amos",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Amos 1:1",
    imageUrl: "NA"
  },
  {
    individualClassName: "Anna",
    accent: false,
    show: false,
    prophetName: "Anna",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Luke 2:36–38",
    imageUrl: "NA"
  },
  {
    individualClassName: "Asaph",
    accent: false,
    show: false,
    prophetName: "Asaph",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"2 Chronicles 29:30",
    imageUrl: "NA"
  },
  {
    individualClassName: "Azariah",
    accent: false,
    show: false,
    prophetName: "Azariah",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"2 Chronicles 15:1–8",
    imageUrl: "NA"
  },
  {
    individualClassName: "Daniel",
    accent: false,
    show: false,
    prophetName: "Daniel",
    info:"Prophet",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Matthew 24:15",
    imageUrl: "NA"
  },
  {
    individualClassName: "David",
    accent: false,
    show: false,
    prophetName: "David",
    info:"King",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Hebrews 11:32",
    imageUrl: "NA"
  },
  {
    individualClassName: "Deborah",
    accent: false,
    show: false,
    prophetName: "Deborah",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Judges 4:4",
    imageUrl: "NA"
  },
  {
    individualClassName: "Elijah",
    accent: false,
    show: false,
    prophetName: "Elijah",
    info:"Prophet",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"1 Kings 18:36",
    imageUrl: "NA"
  },
  {
    individualClassName: "Elisha",
    accent: false,
    show: false,
    prophetName: "Elisha",
    info:"Prophet",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"2 Kings 9:1",
    imageUrl: "NA"
  },
  {
    individualClassName: "Enoch",
    accent: false,
    show: false,
    prophetName: "Enoch",
    info:"Prophet",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Jude 1:14",
    imageUrl: "NA"
  },
  {
    individualClassName: "Ezekiel",
    accent: false,
    show: false,
    prophetName: "Ezekiel",
    info:"Prophet",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Ezekiel 1:3",
    imageUrl: "NA"
  },
  {
    individualClassName: "Gad",
    accent: false,
    show: false,
    prophetName: "Gad",
    info:"Patriarch",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"1 Samuel 22:5",
    imageUrl: "NA"
  },
  {
    individualClassName: "Gideon",
    accent: false,
    show: false,
    prophetName: "Gideon",
    info:"Judge",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Judges 6 through 8",
    imageUrl: "NA"
  },
  {
    individualClassName: "Habakkuk",
    accent: false,
    show: false,
    prophetName: "Habakkuk",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Habakkuk 1:1",
    imageUrl: "NA"
  },
  {
    individualClassName: "Haggai",
    accent: false,
    show: false,
    prophetName: "Haggai",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Haggai 1:1",
    imageUrl: "NA"
  },
  {
    individualClassName: "Hanani",
    accent: false,
    show: false,
    prophetName: "Hanani",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"2 Chronicles 16:7",
    imageUrl: "NA"
  },
  {
    individualClassName: "Hosea",
    accent: false,
    show: false,
    prophetName: "Hosea",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Hosea 1:1",
    imageUrl: "NA"
  },
  {
    individualClassName: "Huldah",
    accent: false,
    show: false,
    prophetName: "Huldah",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"2 Kings 22:14",
    imageUrl: "NA"
  },
  {
    individualClassName: "Iddo",
    accent: false,
    show: false,
    prophetName: "Iddo",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"2 Chronicles 13:22",
    imageUrl: "NA"
  },
  {
    individualClassName: "Isaiah",
    accent: false,
    show: false,
    prophetName: "Isaiah",
    info:"Prophet",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"2 Kings 19:2",
    imageUrl: "NA"
  },
  {
    individualClassName: "Horace Vernet, Jeremiah on the ruins of Jerusalem",
    accent: false,
    show: false,
    prophetName: "Horace Vernet, Jeremiah on the ruins of Jerusalem",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"1844",
    imageUrl: "NA"
  },
  {
    individualClassName: "Jehu",
    accent: false,
    show: false,
    prophetName: "Jehu",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"1 Kings 16:7",
    imageUrl: "NA"
  },
  {
    individualClassName: "Jeremiah",
    accent: false,
    show: false,
    prophetName: "Jeremiah",
    info:"Prophet",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Jeremiah 20:2",
    imageUrl: "NA"
  },
  {
    individualClassName: "Job",
    accent: false,
    show: false,
    prophetName: "Job",
    info:"Patriarch",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Job 1:1",
    imageUrl: "NA"
  },
  {
    individualClassName: "Joel",
    accent: false,
    show: false,
    prophetName: "Joel",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Joel 1:1, Acts 2:16",
    imageUrl: "NA"
  },
  {
    individualClassName: "John the Baptist",
    accent: false,
    show: false,
    prophetName: "John the Baptist",
    info:"Prophet",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Luke 7:28",
    imageUrl: "NA"
  },
  {
    individualClassName: "John of Patmos",
    accent: false,
    show: false,
    prophetName: "John of Patmos",
    info:"Prophet",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Revelation 1:1–3",
    imageUrl: "NA"
  },
  {
    individualClassName: "Jonah",
    accent: false,
    show: false,
    prophetName: "Jonah",
    info:"Prophet",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Jonah 1:1, 2 Kings 14:25",
    imageUrl: "NA"
  },
  {
    individualClassName: "Joshua",
    accent: false,
    show: false,
    prophetName: "Joshua",
    info:"Prophet",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Joshua 1:1",
    imageUrl: "NA"
  },
  {
    individualClassName: "Judas Barsabbas",
    accent: false,
    show: false,
    prophetName: "Judas Barsabbas",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Acts 15:32",
    imageUrl: "NA"
  },
  {
    individualClassName: "Lucius of Cyrene",
    accent: false,
    show: false,
    prophetName: "Lucius of Cyrene",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Acts 13:1",
    imageUrl: "NA"
  },
  {
    individualClassName: "Malachi",
    accent: false,
    show: false,
    prophetName: "Malachi",
    info:"Prophet",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Malachi 1:1",
    imageUrl: "NA"
  },
  {
    individualClassName: "Manahen",
    accent: false,
    show: false,
    prophetName: "Manahen",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Acts 13:1",
    imageUrl: "NA"
  },
  {
    individualClassName: "Micah",
    accent: false,
    show: false,
    prophetName: "Micah",
    info:"Prophet",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Micah 1:1",
    imageUrl: "NA"
  },
  {
    individualClassName: "Micaiah",
    accent: false,
    show: false,
    prophetName: "Micaiah",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"1 Kings 22:9",
    imageUrl: "NA"
  },
  {
    individualClassName: "Nahum",
    accent: false,
    show: false,
    prophetName: "Nahum",
    info:"Prophet",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Nahum 1:1",
    imageUrl: "NA"
  },
  {
    individualClassName: "Nathan",
    accent: false,
    show: false,
    prophetName: "Nathan",
    info:"Prophet",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"2 Samuel 7:2",
    imageUrl: "NA"
  },
  {
    individualClassName: "Obadiah",
    accent: false,
    show: false,
    prophetName: "Obadiah",
    info:"Prophet",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Obadiah 1:1",
    imageUrl: "NA"
  },
  {
    individualClassName: "Oded",
    accent: false,
    show: false,
    prophetName: "Oded",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"2 Chronicles 15:8",
    imageUrl: "NA"
  },
  {
    individualClassName: "Oded",
    accent: false,
    show: false,
    prophetName: "Oded",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"2 Chronicles 28:9",
    imageUrl: "NA"
  },
  {
    individualClassName: "Paul the Apostle",
    accent: false,
    show: false,
    prophetName: "Paul the Apostle",
    info:"Apostle",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Acts of the Apostles 9:20",
    imageUrl: "NA"
  },
  {
    individualClassName: "Philip the Evangelist",
    accent: false,
    show: false,
    prophetName: "Philip the Evangelist",
    info:"Apostle",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Acts 8:26",
    imageUrl: "NA"
  },
  {
    individualClassName: "Phillip's daughters",
    accent: false,
    show: false,
    prophetName: "Phillip's daughters",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Acts 21:8, 9",
    imageUrl: "NA"
  },
  {
    individualClassName: "Samuel",
    accent: false,
    show: false,
    prophetName: "Samuel",
    info:"Prophet",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"1 Samuel 3:20",
    imageUrl: "NA"
  },
  {
    individualClassName: "Shemaiah",
    accent: false,
    show: false,
    prophetName: "Shemaiah",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"1 Kings 12:22",
    imageUrl: "NA"
  },
  {
    individualClassName: "Silas",
    accent: false,
    show: false,
    prophetName: "Silas",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Acts 15:32",
    imageUrl: "NA"
  },
  {
    individualClassName: "Simeon Niger",
    accent: false,
    show: false,
    prophetName: "Simeon Niger",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Acts 13:1",
    imageUrl: "NA"
  },
  {
    individualClassName: "Urijah",
    accent: false,
    show: false,
    prophetName: "Urijah",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Jeremiah 26:20",
    imageUrl: "NA"
  },
  {
    individualClassName: "Zechariah, son of Berechiah",
    accent: false,
    show: false,
    prophetName: "Zechariah, son of Berechiah",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Zechariah 1:1",
    imageUrl: "NA"
  },
  {
    individualClassName: "Zechariah, son of Jehoiada",
    accent: false,
    show: false,
    prophetName: "Zechariah, son of Jehoiada",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"2 Chronicles 24:20",
    imageUrl: "NA"
  },
  {
    individualClassName: "Zephaniah",
    accent: false,
    show: false,
    prophetName: "Zephaniah",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Zephaniah 1:1",
    imageUrl: "NA"
  },
  {
    individualClassName: "Seth",
    accent: false,
    show: false,
    prophetName:"Seth",
    info:"was Adam's third son and the father of Enos.",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Unknown",
    imageUrl: "NA"
  },
  {
    individualClassName: "Enos",
    accent: false,
    show: false,
    prophetName:"Enos",
    info:"Prophet",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Unknown",
    imageUrl: "NA"
  },
  {
    individualClassName: "Kenan",
    accent: false,
    show: false,
    prophetName:"Kenan",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Unknown",
    imageUrl: "NA"
  },
  {
    individualClassName: "Mahalalel",
    accent: false,
    show: false,
    prophetName:"Mahalalel",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Unknown",
    imageUrl: "NA"
  },
  {
    individualClassName: "Jared",
    accent: false,
    show: false,
    prophetName:"Jared",
    info:"Prophet",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Unknown",
    imageUrl: "NA"
  },
  {
    individualClassName: "Methuselah",
    accent: false,
    show: false,
    prophetName:"Methuselah",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Unknown",
    imageUrl: "NA"
  },
  {
    individualClassName: "Enosh",
    accent: false,
    show: false,
    prophetName:"Enosh",
    info:"Prophet",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Unknown",
    imageUrl: "NA"
  },
  {
    individualClassName: "Cainan",
    accent: false,
    show: false,
    prophetName:"Cainan",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Unknown",
    imageUrl: "NA"
  },
  {
    individualClassName: "Shem",
    accent: false,
    show: false,
    prophetName:"Shem",
    info:"was one of Noah's sons, and from his line, God chose to bring blessing to the world.",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Unknown",
    imageUrl: "NA"
  },
  {
    individualClassName: "Arpachshad",
    accent: false,
    show: false,
    prophetName:"Arpachshad",
    info:"was Shem's son.",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Unknown",
    imageUrl: "NA"
  },
  {
    individualClassName: "Peleg",
    accent: false,
    show: false,
    prophetName:"Peleg",
    info:"was a descendant of Eber, in whose days the earth was divided.",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Unknown",
    imageUrl: "NA"
  },
  {
    individualClassName: "Serug",
    accent: false,
    show: false,
    prophetName:"Serug",
    info:"was Peleg's son, followed by his son Nahor.",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Unknown",
    imageUrl: "NA"
  },
  {
    individualClassName: "Terah",
    accent: false,
    show: false,
    prophetName:"Terah",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Unknown",
    imageUrl: "NA"
  },
  {
    individualClassName: "Aaron",
    accent: false,
    show: false,
    prophetName:"Aaron",
    info:"Priest",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Unknown",
    imageUrl: "NA"
  },
  {
    individualClassName: "Phinehas",
    accent: false,
    show: false,
    prophetName:"Phinehas",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Unknown",
    imageUrl: "NA"
  },
  {
    individualClassName: "Eli",
    accent: false,
    show: false,
    prophetName:"Eli",
    info:"Prophet",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Unknown",
    imageUrl: "NA"
  },
  {
    individualClassName: "Elkanah",
    accent: false,
    show: false,
    prophetName:"Elkanah",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Unknown",
    imageUrl: "NA"
  },
  {
    individualClassName: "Natan",
    accent: false,
    show: false,
    prophetName:"Natan",
    info:"Prophet",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Unknown",
    imageUrl: "NA"
  },
  {
    individualClassName: "Solomon",
    accent: false,
    show: false,
    prophetName:"Solomon",
    info:"King",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Unknown",
    imageUrl: "NA"
  },
  {
    individualClassName: "Jahaziel",
    accent: false,
    show: false,
    prophetName:"Jahaziel",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Unknown",
    imageUrl: "NA"
  },
  {
    individualClassName: "Eliezer",
    accent: false,
    show: false,
    prophetName:"Eliezer",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Unknown",
    imageUrl: "NA"
  },
  {
    individualClassName: "Amoz",
    accent: false,
    show: false,
    prophetName:"Amoz",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Unknown",
    imageUrl: "NA"
  },
  {
    individualClassName: "Mehseiah",
    accent: false,
    show: false,
    prophetName:"Mehseiah",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Unknown",
    imageUrl: "NA"
  },
  {
    individualClassName: "Neriah",
    accent: false,
    show: false,
    prophetName:"Neriah",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Unknown",
    imageUrl: "NA"
  },
  {
    individualClassName: "Baruch ben Neriah",
    accent: false,
    show: false,
    prophetName:"Baruch ben Neriah",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Unknown",
    imageUrl: "NA"
  },
  {
    individualClassName: "Seraiah",
    accent: false,
    show: false,
    prophetName:"Seraiah",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Unknown",
    imageUrl: "NA"
  },
  {
    individualClassName: "Mordechai Bilshan",
    accent: false,
    show: false,
    prophetName:"Mordechai Bilshan",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Unknown",
    imageUrl: "NA"
  },
  {
    individualClassName: "Sarah",
    accent: false,
    show: false,
    prophetName:"Sarah",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Unknown",
    imageUrl: "NA"
  },
  {
    individualClassName: "Hannah",
    accent: false,
    show: false,
    prophetName:"Hannah",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Unknown",
    imageUrl: "NA"
  },
  {
    individualClassName: "Abigail",
    accent: false,
    show: false,
    prophetName:"Abigail",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Unknown",
    imageUrl: "NA"
  },
  {
    individualClassName: "Esther",
    accent: false,
    show: false,
    prophetName:"Esther",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Unknown",
    imageUrl: "NA"
  },
  {
    individualClassName: "Eldad",
    accent: false,
    show: false,
    prophetName:"Eldad",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Unknown",
    imageUrl: "NA"
  },
  {
    individualClassName: "Medad",
    accent: false,
    show: false,
    prophetName:"Medad",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Unknown",
    imageUrl: "NA"
  },
  {
    individualClassName: "Reuben",
    accent: false,
    show: false,
    prophetName:"Reuben",
    info:"Patriarch",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Unknown",
    imageUrl: "NA"
  },
  {
    individualClassName: "Simeon",
    accent: false,
    show: false,
    prophetName:"Simeon",
    info:"Patriarch",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Unknown",
    imageUrl: "NA"
  },
  {
    individualClassName: "Levi",
    accent: false,
    show: false,
    prophetName:"Levi",
    info:"Patriarch",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Unknown",
    imageUrl: "NA"
  },
  {
    individualClassName: "Judah",
    accent: false,
    show: false,
    prophetName:"Judah",
    info:"Patriarch",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Unknown",
    imageUrl: "NA"
  },
  {
    individualClassName: "Zebulun",
    accent: false,
    show: false,
    prophetName:"Zebulun",
    info:"Patriarch",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Unknown",
    imageUrl: "NA"
  },
  {
    individualClassName: "Issachar",
    accent: false,
    show: false,
    prophetName:"Issachar",
    info:"Patriarch",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Unknown",
    imageUrl: "NA"
  },
  {
    individualClassName: "Dan",
    accent: false,
    show: false,
    prophetName:"Dan",
    info:"Patriarch",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Unknown",
    imageUrl: "NA"
  },
  {
    individualClassName: "Asher",
    accent: false,
    show: false,
    prophetName:"Asher",
    info:"Patriarch",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Unknown",
    imageUrl: "NA"
  },
  {
    individualClassName: "Naphtali",
    accent: false,
    show: false,
    prophetName:"Naphtali",
    info:"Patriarch",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Unknown",
    imageUrl: "NA"
  },
  {
    individualClassName: "Joseph",
    accent: false,
    show: false,
    prophetName:"Joseph",
    info:"Patriarch",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Unknown",
    imageUrl: "NA"
  },
  {
    individualClassName: "Benjamin",
    accent: false,
    show: false,
    prophetName:"Benjamin",
    info:"Patriarch",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Unknown",
    imageUrl: "NA"
  },
  {
    individualClassName: "Rebecca",
    accent: false,
    show: false,
    prophetName:"Rebecca",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Unknown",
    imageUrl: "NA"
  },
  {
    individualClassName: "Rachel",
    accent: false,
    show: false,
    prophetName:"Rachel",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Unknown",
    imageUrl: "NA"
  },
  {
    individualClassName: "Leah",
    accent: false,
    show: false,
    prophetName:"Leah",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Unknown",
    imageUrl: "NA"
  },
  {
    individualClassName: "Bilhah",
    accent: false,
    show: false,
    prophetName:"Bilhah",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Unknown",
    imageUrl: "NA"
  },
  {
    individualClassName: "Zilpah",
    accent: false,
    show: false,
    prophetName:"Zilpah",
    info:"Unknown",
    era: "Ancient",
    birth: "Unknown",
    death: "Unknown",
    hemisphere: "Middle East",
    location: "Unknown",
    scripture:"Unknown",
    imageUrl: "NA"
  },
/*
Brigham Young	June 1, 1801	December 27, 1847	August 29, 1877 (aged 76)	29 years, 8 months
    Church led by John Taylor as President of the Quorum of the Twelve Apostles.	3 years, 1 month
John Taylor	November 1, 1808	October 10, 1880	July 25, 1887 (aged 78)	6 years, 9 months
    Church led by Wilford Woodruff as President of the Quorum of the Twelve Apostles.	1 year, 8 months
Wilford Woodruff	March 1, 1807	April 7, 1889	September 2, 1898 (aged 91)	9 years, 4 months
Lorenzo Snow	April 3, 1814	September 13, 1898	October 10, 1901 (aged 87)	3 years, 1 month
Joseph F. Smith	November 13, 1838	October 17, 1901	November 19, 1918 (aged 80)	17 years, 1 month
Heber J. Grant	November 22, 1856	November 23, 1918	May 14, 1945 (aged 88)	26 years, 5 months
George Albert Smith	April 4, 1870	May 21, 1945	April 4, 1951 (aged 81)	5 years, 10 months
David O. McKay	September 8, 1873	April 9, 1951	January 18, 1970 (aged 96)	18 years, 9 months
Joseph Fielding Smith	July 19, 1876	January 23, 1970	July 2, 1972 (aged 95)	2 years, 5 months
Harold B. Lee	March 28, 1899	July 7, 1972	December 26, 1973 (aged 74)	1 year, 5 months
Spencer W. Kimball	March 28, 1895	December 30, 1973	November 5, 1985 (aged 90)	11 years, 10 months
Ezra Taft Benson	August 4, 1899	November 10, 1985	May 30, 1994 (aged 94)	8 years, 6 months
Howard W. Hunter	November 14, 1907	June 5, 1994	March 3, 1995 (aged 87)	9 months
Gordon B. Hinckley	June 23, 1910	March 12, 1995	January 27, 2008 (aged 97)	12 years, 10 months
Thomas S. Monson	August 21, 1927	February 3, 2008	January 2, 2018 (aged 90)	9 years, 11 months
Russell M. Nelson	September 9, 1924	January 14, 2018	September 27, 2025 (aged 101)	7 years, 8 months

*/


  {
    individualClassName: "Adam",
    accent: false,
    show: false,
    prophetName: "Adam",
    info:"was the first man and the direct ancestor of Noah.",
    era: "Ancient",
    hemisphere: "Middle East",
    birth: "Unknown",
    death: "Unknown",
    location: "Garden of Eden",
    scripture:"Unknown",
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    individualClassName: "alma",
    accent: false,
    show: false,
    prophetName: "Alma",
    era: "Ancient",
    hemisphere: "Americas",
    birth: "Unknown",
    death: "Unknown",
    location: "Aba, Nigeria",
    scripture:"Unknown",
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    individualClassName: "Joseph Smith",
    accent: false,
    show: false,
    prophetName: "Joseph Smith",
    era: "Modern",
    hemisphere: "Americas",
    birth: new Date("1805-12-23"),
    death: new Date("1844-06-27"),
    location: "United States(Mass., Vt., NY, Ohio, Illinois, Missouri)",
    scripture:"Unknown",
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  }
]
const prophets = potentialProphets.filter((prophet) => ((prophet.accent)||((prophet.show)&&!(prophet.info=="Unknown")&&!(prophet.hemisphere=="Unknown")&&!(prophet.era=="Unknown")&&!(prophet.imageUrl=="NA"))));


// Get the current date
const currentYear = new Date().getFullYear();
const oldDate = new Date("1776-7-4");
// Get the currentYear element from html
const currentYearElement = document.querySelector('.currentyear');

// Get the documents last modified date
const lastModDate = document.lastModified;
// Get the lastModified element from html
const lastModElement = document.querySelector('.lastModified');

// update the html element with the data
if(currentYearElement) {
    currentYearElement.innerHTML = `&copy; ${currentYear}`;
}
// update the html element with the data
if(lastModElement) {
lastModElement.innerHTML = `Last modification:  ${lastModDate}`;
}

// Check if the URL contains a query string
const urlParams = new URLSearchParams(window.location.search);

// If a product name was submitted, display it
const page = urlParams.get('page');
const root = document.documentElement;

const ordinalClassNames = ["card-one", "card-two", "card-three", "card-four", "card-five", "card-six", "card-seven", "card-eight", "card-nine", "card-ten"]
const smallmediaQueryList = window.matchMedia("screen and (max-width: 40rem)");
const mediaQueryList = window.matchMedia("screen and (min-width: 41rem) and (max-width: 80rem)");
const largeMediaQueryList = window.matchMedia("screen and (min-width: 81rem)");
function prophetFigureTemplate(prophet) {
  return `<figure class="card ${prophet.individualClassName}">
            <img class="image" src="${prophet.imageUrl}" alt="${prophet.prophetName}" max-width="400" loading="lazy">
            <figcaption class="card-title ${(prophet.accent)?"accent":""}">
              <table>
              <thead><th class="caption-title" colspan="2">${prophet.prophetName}</th></thead>
              <tbody>
                <tr><th class="row-title">Era:</th><td class="row-data ${(prophet.accent)?"accent":""}">${prophet.era}</td></tr>
                <tr><th class="row-title">Birth:</th><td class="row-data ${(prophet.accent)?"accent":""}">${prophet.birth/*.toLocaleDateString(navigator.language,{dateStyle:'long'})*/}</td></tr>
                <tr><th class="row-title">Death:</th><td class="row-data ${(prophet.accent)?"accent":""}">${prophet.death/*.toLocaleDateString(navigator.language,{dateStyle:'long'})*/}</td></tr>
                <tr><th class="row-title">Hemisphere:</th><td class="row-data ${(prophet.accent)?"accent":""}">${prophet.hemisphere}</td></tr>
                <tr><th class="row-title">Location:</th><td class="row-data ${(prophet.accent)?"accent":""}">${prophet.location}</td></tr>
                <tr><th class="row-title">Scripture Reference:</th><td class="row-data ${(prophet.accent)?"accent":""}">${prophet.scripture}</td></tr>
              </tbody>
              </table>
            </figcaption>
          </figure>`;
}

function renderAllProphets(prophetFigureElements, prophets) {
    const prophetFigures = prophets.map(prophetFigureTemplate);
    prophetFigureElements.innerHTML = prophetFigures.join("");
    console.log(`prophets: '${prophetFigures.length}'`);
    if (mediaQueryList.matches) {
        // The viewport is currently wider than or equal to 41rem
        document.documentElement.style.setProperty('--prophet-cards-column-count', `3`);
        document.documentElement.style.setProperty('--prophet-cards-row-count', `4`);
        console.log("Large screen detected.");
    } else {
        document.documentElement.style.setProperty('--prophet-cards-column-count', `1`);
        document.documentElement.style.setProperty('--prophet-cards-row-count', `${prophetFigures.length}`);
      // The viewport is currently narrower than 41rem
      console.log("Small screen detected.");
    }
    let counter = 0;
    prophets.forEach(prophet => {
      console.log(`.${prophet.individualClassName} - ${ordinalClassNames[counter]}`);
      const prophetCard = document.querySelector(`.${prophet.individualClassName}`);
      prophetCard.classList.toggle(ordinalClassNames[counter]);
      counter++;
    });
    console.log(prophetFigureElements.innerHTML);
}

function renderAncientProphets(prophetFigureElements, prophets) {
    const prophetFigures = prophets.filter(prophet => (prophet.era.includes("Ancient"))).map(prophetFigureTemplate);
    prophetFigureElements.innerHTML = prophetFigures.join("");
    console.log(`prophets: '${prophetFigures.length}'`);
    if (mediaQueryList.matches) {
        // The viewport is currently wider than or equal to 41rem
        let rowCount = Math.ceil(prophetFigures.length / 3);
        console.log(`row count: ${rowCount}`);
        document.documentElement.style.setProperty('--prophet-cards-column-count', `3`);
        document.documentElement.style.setProperty('--prophet-cards-row-count', `${rowCount}`);
        console.log("Large screen detected.");
    } else {
        document.documentElement.style.setProperty('--prophet-cards-column-count', `1`);
        document.documentElement.style.setProperty('--prophet-cards-row-count', `${prophetFigures.length}`);
      // The viewport is currently narrower than 41rem
      console.log("Small screen detected.");
    }
    let counter = 0;
    prophets.filter(prophet => (prophet.era.includes("Ancient"))).forEach(prophet => {
      console.log(`.${prophet.individualClassName} - ${ordinalClassNames[counter]}`);
      const prophetCard = document.querySelector(`.${prophet.individualClassName}`);
      prophetCard.classList.toggle(ordinalClassNames[counter]);
      counter++;
    });
}

function renderModernProphets(prophetFigureElements, prophets) {
    const prophetFigures = prophets.filter(prophet => ((prophet.era.includes("Modern")))).map(prophetFigureTemplate);
    prophetFigureElements.innerHTML = prophetFigures.join("");
    console.log(`prophets: '${prophetFigures.length}'`);
    if (mediaQueryList.matches) {
        // The viewport is currently wider than or equal to 41rem
        let rowCount = Math.ceil(prophetFigures.length / 3);
        console.log(`row count: ${rowCount}`);
        document.documentElement.style.setProperty('--prophet-cards-column-count', `3`);
        document.documentElement.style.setProperty('--prophet-cards-row-count', `${rowCount}`);
        console.log("Large screen detected.");
    } else {
        document.documentElement.style.setProperty('--prophet-cards-column-count', `1`);
        document.documentElement.style.setProperty('--prophet-cards-row-count', `${prophetFigures.length}`);
      // The viewport is currently narrower than 41rem
      console.log("Small screen detected.");
    }
    let counter = 0;
    prophets.filter(prophet => ((prophet.era.includes("Modern")))).forEach(prophet => {
      console.log(`.${prophet.individualClassName} - ${ordinalClassNames[counter]}`);
      const prophetCard = document.querySelector(`.${prophet.individualClassName}`);
      prophetCard.classList.toggle(ordinalClassNames[counter]);
      counter++;
    });
}


function renderMiddleEasternProphets(prophetFigureElements, prophets) {
    const prophetFigures = prophets.filter(prophet => (prophet.hemisphere.includes("Middle East"))).map(prophetFigureTemplate);
    prophetFigureElements.innerHTML = prophetFigures.join("");
    console.log(`prophets: '${prophetFigures.length}'`);
    if (mediaQueryList.matches) {
        // The viewport is currently wider than or equal to 41rem
        let rowCount = Math.ceil(prophetFigures.length / 3);
        console.log(`row count: ${rowCount}`);
        document.documentElement.style.setProperty('--prophet-cards-column-count', `3`);
        document.documentElement.style.setProperty('--prophet-cards-row-count', `${rowCount}`);
        console.log("Large screen detected.");
    } else {
        document.documentElement.style.setProperty('--prophet-cards-column-count', `1`);
        document.documentElement.style.setProperty('--prophet-cards-row-count', `${prophetFigures.length}`);
      // The viewport is currently narrower than 41rem
      console.log("Small screen detected.");
    }
    let counter = 0;
    prophets.filter(prophet => (prophet.hemisphere.includes("Middle East"))).forEach(prophet => {
      console.log(`.${prophet.individualClassName} - ${ordinalClassNames[counter]}`);
      const prophetCard = document.querySelector(`.${prophet.individualClassName}`);
      prophetCard.classList.toggle(ordinalClassNames[counter]);
      counter++;
    });
}

function renderAmericanProphets(prophetFigureElements, prophets) {
    const prophetFigures = prophets.filter(prophet => (prophet.hemisphere.includes("Americas"))).map(prophetFigureTemplate);
    prophetFigureElements.innerHTML = prophetFigures.join("");
    console.log(`prophets: '${prophetFigures.length}'`);
    if (mediaQueryList.matches) {
        // The viewport is currently wider than or equal to 41rem
        let rowCount = Math.ceil(prophetFigures.length / 3);
        console.log(`row count: ${rowCount}`);
        document.documentElement.style.setProperty('--prophet-cards-column-count', `3`);
        document.documentElement.style.setProperty('--prophet-cards-row-count', `${rowCount}`);
        console.log("Large screen detected.");
    } else {
        document.documentElement.style.setProperty('--prophet-cards-column-count', `1`);
        document.documentElement.style.setProperty('--prophet-cards-row-count', `${prophetFigures.length}`);
      // The viewport is currently narrower than 41rem
      console.log("Small screen detected.");
    }
    let counter = 0;
    prophets.filter(prophet => (prophet.hemisphere.includes("Americas"))).forEach(prophet => {
      console.log(`.${prophet.individualClassName} - ${ordinalClassNames[counter]}`);
      const prophetCard = document.querySelector(`.${prophet.individualClassName}`);
      prophetCard.classList.toggle(ordinalClassNames[counter]);
      counter++;
    });
}

const headerMenuTitle = document.querySelector('.main-title');
const activeHeaderMenuItemAnchor = document.querySelector('.active');
const main = document.querySelector('.main');
const contentContainer = document.querySelector('.contentContainer');
let headerMenuItemAnchor = document.querySelector('.active');
switch (page) {
    case "home":
        headerMenuTitle.textContent = "Home";
        headerMenuItemAnchor = document.querySelector('.home-menu-item-anchor');
        root.style.setProperty('--contentHeight', '1fr');
        renderAllProphets(contentContainer, prophets);
        break;
    case "ancient":
        headerMenuTitle.textContent = "Ancient";
        headerMenuItemAnchor = document.querySelector('.ancient-menu-item-anchor');
        root.style.setProperty('--contentHeight', '1fr');
        renderAncientProphets(contentContainer, prophets);
        break;
    case "modern":
        headerMenuTitle.textContent = "Modern";
        headerMenuItemAnchor = document.querySelector('.modern-menu-item-anchor');
        root.style.setProperty('--contentHeight', '1fr');
        renderModernProphets(contentContainer, prophets);
        break;
    case "midEast":
        headerMenuTitle.textContent = "Middle East";
        headerMenuItemAnchor = document.querySelector('.midEast-menu-item-anchor');
        root.style.setProperty('--contentHeight', '1fr');
        renderMiddleEasternProphets(contentContainer, prophets)
        break;
    case "americas":
        headerMenuTitle.textContent = "Americas";
        headerMenuItemAnchor = document.querySelector('.americas-menu-item-anchor');
        root.style.setProperty('--contentHeight', '1fr');
        renderAmericanProphets(contentContainer, prophets)
        break;
}
activeHeaderMenuItemAnchor.classList.toggle('active');
headerMenuItemAnchor.classList.toggle('active');
//main.style.gridTemplateRows = "5rem 5rem 5rem 10rem 20rem 15rem var(--contentHeight) 5rem";

