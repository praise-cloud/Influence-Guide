const blogs = [
  {
    id: 1,
    title: "How to Grow Your Social Media Presence",
    description:
      "Learn the best strategies to grow your social media presence and engage with your audience.",
    date: "October 10, 2023",
    author: "John Doe",
    image: "https://i.pinimg.com/564x/1a/2b/3c/1a2b3c4d5e6f7g8h9i0j.jpg",
  },
  {
    id: 2,
    title: "Top 10 Social Media Marketing Tips",
    description:
      "Discover the top 10 social media marketing tips to boost your online presence and drive traffic.",
    date: "October 8, 2023",
    author: "Jane Smith",
    image: "https://i.pinimg.com/564x/2b/3c/4d/2b3c4d5e6f7g8h9i0j1k.jpg",
  },
  {
    id: 3,
    title: "The Importance of Analytics in Social Media",
    description:
      "Understand the importance of analytics in social media and how to use data to make informed decisions.",
    date: "October 5, 2023",
    author: "Alice Johnson",
    image: "https://i.pinimg.com/564x/3c/4d/5e/3c4d5e6f7g8h9i0j1k2l.jpg",
  },
  {
    id: 4,
    title: "How to Create Engaging Content",
    description:
      "Learn how to create content that resonates with your audience and keeps them engaged.",
    date: "October 3, 2023",
    author: "Michael Brown",
    image: "https://i.pinimg.com/564x/4d/5e/6f/4d5e6f7g8h9i0j1k2l3m.jpg",
  },
  {
    id: 5,
    title: "The Benefits of Influencer Marketing",
    description:
      "Explore the benefits of influencer marketing and how it can help your brand reach a wider audience.",
    date: "September 30, 2023",
    author: "Emily Davis",
    image: "https://i.pinimg.com/564x/5e/6f/7g/5e6f7g8h9i0j1k2l3m4n.jpg",
  },
  {
    id: 6,
    title: "Social Media Trends to Watch in 2023",
    description:
      "Stay ahead of the curve with the latest social media trends to watch in 2023.",
    date: "September 25, 2023",
    author: "David Wilson",
    image: "https://i.pinimg.com/564x/6f/7g/8h/6f7g8h9i0j1k2l3m4n5o.jpg",
  },
  {
    id: 7,
    title: "Effective Social Media Advertising Strategies",
    description:
      "Learn about effective social media advertising strategies to maximize your ROI.",
    date: "September 20, 2023",
    author: "Sarah Lee",
    image: "https://i.pinimg.com/564x/7g/8h/9i/7g8h9i0j1k2l3m4n5o6p.jpg",
  },
  {
    id: 8,
    title: "Building a Strong Brand on Social Media",
    description:
      "Discover how to build a strong brand on social media and stand out from the competition.",
    date: "September 15, 2023",
    author: "Chris Martin",
    image: "https://i.pinimg.com/564x/8h/9i/0j/8h9i0j1k2l3m4n5o6p7q.jpg",
  },
  {
    id: 9,
    title: "The Role of Video Content in Social Media",
    description:
      "Understand the role of video content in social media and how to create engaging videos.",
    date: "September 10, 2023",
    author: "Laura White",
    image: "https://i.pinimg.com/564x/9i/0j/1k/9i0j1k2l3m4n5o6p7q8r.jpg",
  },
  {
    id: 10,
    title: "How to Use Hashtags Effectively",
    description:
      "Learn how to use hashtags effectively to increase your reach and engagement on social media.",
    date: "September 5, 2023",
    author: "James Green",
    image: "https://i.pinimg.com/564x/0j/1k/2l/0j1k2l3m4n5o6p7q8r9s.jpg",
  },
  {
    id: 11,
    title: "Creating a Social Media Content Calendar",
    description:
      "Discover the benefits of creating a social media content calendar and how to get started.",
    date: "August 30, 2023",
    author: "Olivia Brown",
    image: "https://i.pinimg.com/564x/1k/2l/3m/1k2l3m4n5o6p7q8r9s0t.jpg",
  },
  {
    id: 12,
    title: "The Power of User-Generated Content",
    description:
      "Explore the power of user-generated content and how it can boost your social media strategy.",
    date: "August 25, 2023",
    author: "Daniel Harris",
    image: "https://i.pinimg.com/564x/2l/3m/4n/2l3m4n5o6p7q8r9s0t1u.jpg",
  },
  {
    id: 13,
    title: "How to Handle Negative Comments on Social Media",
    description:
      "Learn how to handle negative comments on social media and turn them into positive experiences.",
    date: "August 20, 2023",
    author: "Sophia Clark",
    image: "https://i.pinimg.com/564x/3m/4n/5o/3m4n5o6p7q8r9s0t1u2v.jpg",
  },
  {
    id: 14,
    title: "The Benefits of Social Media Contests",
    description:
      "Discover the benefits of running social media contests and how to create successful ones.",
    date: "August 15, 2023",
    author: "Matthew Lewis",
    image: "https://i.pinimg.com/564x/4n/5o/6p/4n5o6p7q8r9s0t1u2v3w.jpg",
  },
  {
    id: 15,
    title: "How to Measure Social Media ROI",
    description:
      "Understand how to measure social media ROI and track the success of your campaigns.",
    date: "August 10, 2023",
    author: "Isabella Walker",
    image: "https://i.pinimg.com/564x/5o/6p/7q/5o6p7q8r9s0t1u2v3w4x.jpg",
  },
  {
    id: 16,
    title: "The Role of Influencers in Social Media",
    description:
      "Learn about the role of influencers in social media and how to collaborate with them effectively.",
    date: "August 5, 2023",
    author: "Ethan Hall",
    image: "https://i.pinimg.com/564x/6p/7q/8r/6p7q8r9s0t1u2v3w4x5y.jpg",
  },
  {
    id: 17,
    title: "How to Create a Social Media Strategy",
    description:
      "Discover how to create a social media strategy that aligns with your business goals.",
    date: "July 30, 2023",
    author: "Ava Young",
    image: "https://i.pinimg.com/564x/7q/8r/9s/7q8r9s0t1u2v3w4x5y6z.jpg",
  },
  {
    id: 18,
    title: "The Impact of Social Media on Customer Service",
    description:
      "Understand the impact of social media on customer service and how to provide excellent support.",
    date: "July 25, 2023",
    author: "Mason King",
    image: "https://i.pinimg.com/564x/8r/9s/0t/8r9s0t1u2v3w4x5y6z7a.jpg",
  },
  {
    id: 19,
    title: "How to Use Social Media for Lead Generation",
    description:
      "Learn how to use social media for lead generation and grow your customer base.",
    date: "July 20, 2023",
    author: "Mia Scott",
    image: "https://i.pinimg.com/564x/9s/0t/1u/9s0t1u2v3w4x5y6z7a8b.jpg",
  },
  {
    id: 20,
    title: "The Future of Social Media Marketing",
    description:
      "Explore the future of social media marketing and the trends that will shape the industry.",
    date: "July 15, 2023",
    author: "Lucas Turner",
    image: "https://i.pinimg.com/564x/0t/1u/2v/0t1u2v3w4x5y6z7a8b9c.jpg",
  },
];

export default blogs;
