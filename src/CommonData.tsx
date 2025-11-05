import * as LucideIcons from "lucide-react";
import { Category, Course, Instructor, Outcomes, Topic } from '@types';
import { dataanalyticscoursecard, datasciencecoursecard, powerbicoursecard, pythoncoursecard, sqlcoursecard, tableaucoursecard } from 'public';

export const mockInstructors: Record<string, Instructor> = {
  'inst-1': {
    instructor_id: 'inst-1',
    name: 'Abidunnisa',
    image_url: 'https://media.licdn.com/dms/image/v2/D5603AQHD7papk42fYA/profile-displayphoto-crop_800_800/B56ZhgZx_hHcAI-/0/1753964029192?e=1762992000&v=beta&t=B_T_IhUTBEl3phvrSHTrkj1iGdF-nKj228Ecx1BVyko',
    bio: 'Software Developer & Teaching modern web tech.'
  },
};

export const mockCategories: Category[] = [
  { category_id: 'cat-1', name: 'Programming & Development', icon: LucideIcons.BarChart2 },
  { category_id: 'cat-2', name: 'Design', icon: LucideIcons.PlayCircle },
  { category_id: 'cat-3', name: 'Data Analytics & Business Intelligence', icon: LucideIcons.BookOpen },
  { category_id: 'cat-4', name: 'Data Science & Management', icon: LucideIcons.Clock },
  { category_id: 'cat-5', name: 'IT & Software', icon: LucideIcons.User },
];

export const mockCourses: Course[] = [
  {
    course_id: 'c3f1b6a0-a1b1-41d4-9a8b-03a0e6b911a3',
    title: 'Data Analytics Mastery: From SQL to Power BI with Real Projects',
    description: 'Become a Full-Stack Web Developer with just one course. HTML, CSS, Javascript, Node, React, MongoDB and more!',
    image_url: dataanalyticscoursecard.src,
    original_price: "31999",
    discounted_price: "19999",
    rating: "4.8",
    review_count: "182000",
    instructors: mockInstructors['inst-1'],
    category: 'Data Analytics & Business Intelligence',
    level: 'Beginner',
    duration_hours: "55.5",
    lessons_count: "612",
    status: 'ongoing',
  },
  {
    course_id: 'course-2',
    title: 'Data Science Mastery: From Python to Machine Learning',
    description: 'Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!',
    image_url: datasciencecoursecard.src,
    discounted_price: "24999",
    original_price: "34999",
    rating: "4.7",
    review_count: "155000",
    instructors: mockInstructors['inst-1'],
    category: 'Data Science & Management',
    level: 'Intermediate',
    duration_hours: "48",
    lessons_count: "579",
    status: 'ongoing',
  },
  {
    course_id: 'course-3',
    title: 'Complete Python 2025: From Basics to AI',
    description: 'Learn to design beautiful and user-friendly interfaces. Master Figma, color theory, typography, and the full design process.',
    image_url: pythoncoursecard.src,
    original_price: "7999",
    discounted_price: "4999",
    rating: "4.6",
    review_count: "42000",
    instructors: mockInstructors['inst-1'],
    category: 'Programming & Development',
    level: 'Beginner',
    duration_hours: "22",
    lessons_count: "180",
    status: 'upcoming',
  },
  {
    course_id: 'course-4',
    title: 'SQL Mastery 2025: Data Power Unlocked',
    description: 'Master Digital Marketing: SEO, YouTube, Email, Facebook Marketing, Google Analytics & More!',
    image_url: sqlcoursecard.src,
    discounted_price: "4999",
    original_price: "7499",
    rating: "4.5",
    review_count: "98000",
    instructors: mockInstructors['inst-1'],
    category: 'Data Science & Management',
    level: 'Beginner',
    duration_hours: "35.5",
    lessons_count: "405",
    status: 'upcoming',
  },
  {
    course_id: 'course-5',
    title: 'Power BI 2025: Visuals That Drive Strategy',
    description: 'The most advanced and modern CSS course on the web: master flexbox, grid, responsive design, and so much more.',
    image_url: powerbicoursecard.src,
    discounted_price: "4999",
    original_price: "8499",
    rating: "4.8",
    review_count: "31000",
    instructors: mockInstructors['inst-1'],
    category: 'Data Analytics & Business Intelligence',
    level: 'Advanced',
    duration_hours: "28",
    lessons_count: "220",
    status: 'upcoming',
  },
  {
    course_id: 'course-6',
    title: 'Tableau 2025: The Art of Data Storytelling',
    description: 'The skills you need to become a BI Analyst - SQL, Tableau, Power BI, and more. Taught by a professional data scientist.',
    image_url: tableaucoursecard.src,
    discounted_price: "4999",
    original_price: "7999",
    rating: "4.7",
    review_count: "76000",
    instructors: mockInstructors['inst-1'],
    category: 'Data Analytics & Business Intelligence',
    level: 'Intermediate',
    duration_hours: "42",
    lessons_count: "450",
    status: 'upcoming',
  },
];

export const mockTopics: Topic[] = [
  {
    topic_id: "1",
    name: "Introduction to Data Analytics",
    parent_topic_id: null,
    order_number: 1,
    description: ""
  },
  {
    topic_id: "1.1",
    name: "Understanding the data lifecycle",
    parent_topic_id: "1",
    order_number: 1,
    description:
      "This subtopic explores the complete journey of data — from collection and storage to analysis and visualization. You'll learn how data moves through each phase of the lifecycle and why maintaining data quality and integrity at every stage is essential for reliable analytics and decision-making."
  },
  {
    topic_id: "1.2",
    name: "Importance and applications of data analytics",
    parent_topic_id: "1",
    order_number: 2,
    description:
      "Here we discuss why data analytics is vital across industries, from healthcare and marketing to finance and logistics. You'll understand how organizations use data to drive innovation, improve efficiency, and make evidence-based decisions that create a competitive advantage."
  },
  {
    topic_id: "1.3",
    name: "Key tools and technologies used",
    parent_topic_id: "1",
    order_number: 3,
    description:
      "This lesson introduces the most common tools and technologies in data analytics — including Python, R, SQL, Power BI, and Tableau. You'll learn their unique roles, strengths, and how they integrate together to support modern data workflows."
  },

  {
    topic_id: "2",
    name: "Python for Data Analytics",
    parent_topic_id: null,
    order_number: 2,
    description: ""
  },
  {
    topic_id: "2.1",
    name: "Data manipulation with Pandas",
    parent_topic_id: "2",
    order_number: 1,
    description:
      "You'll gain hands-on experience with the Pandas library, learning how to import, clean, and manipulate datasets. This subtopic covers DataFrames, indexing, filtering, and grouping operations, enabling you to efficiently organize and transform data for further analysis."
  },
  {
    topic_id: "2.2",
    name: "Working with NumPy arrays",
    parent_topic_id: "2",
    order_number: 2,
    description:
      "This section focuses on NumPy, the backbone of numerical computing in Python. You'll learn about arrays, broadcasting, and vectorized operations, and how NumPy powers performance in machine learning and data analysis pipelines."
  },
  {
    topic_id: "2.3",
    name: "Data visualization using Matplotlib and Seaborn",
    parent_topic_id: "2",
    order_number: 3,
    description:
      "Learn how to visualize data effectively with Matplotlib and Seaborn. This topic covers creating bar charts, histograms, scatter plots, and heatmaps to uncover trends and insights, and teaches principles of visual storytelling in analytics."
  },

  {
    topic_id: "3",
    name: "Business Statistics and Data Understanding",
    parent_topic_id: null,
    order_number: 3,
    description: ""
  },
  {
    topic_id: "3.1",
    name: "Descriptive vs inferential statistics",
    parent_topic_id: "3",
    order_number: 1,
    description:
      "This subtopic introduces descriptive and inferential statistics — two foundational approaches for understanding data. You'll learn how to summarize datasets using measures like mean, median, and standard deviation, and how to make predictions or generalizations using hypothesis testing and confidence intervals."
  },
  {
    topic_id: "3.2",
    name: "Correlation and regression analysis",
    parent_topic_id: "3",
    order_number: 2,
    description:
      "You'll explore how variables relate to each other through correlation and regression analysis. By building linear regression models, you'll understand how to measure the strength of relationships and predict outcomes based on independent factors."
  },
  {
    topic_id: "3.3",
    name: "Probability distributions and sampling",
    parent_topic_id: "3",
    order_number: 3,
    description:
      "This topic introduces probability theory, distributions like normal and binomial, and sampling methods. You'll understand how randomness and variability influence real-world data and how to use sampling techniques to draw insights from large populations efficiently."
  },

  {
    topic_id: "4",
    name: "Exploratory Data Analysis (EDA)",
    parent_topic_id: null,
    order_number: 4,
    description: ""
  },
  {
    topic_id: "4.1",
    name: "Identifying outliers and missing values",
    parent_topic_id: "4",
    order_number: 1,
    description:
      "Learn how to detect, interpret, and handle missing data and outliers in datasets. You'll use visual and statistical methods to identify anomalies and understand their impact on data integrity and model performance."
  },
  {
    topic_id: "4.2",
    name: "Data profiling and visualization",
    parent_topic_id: "4",
    order_number: 2,
    description:
      "In this subtopic, you'll perform data profiling to uncover structure, patterns, and quality issues in datasets. Using visualization tools, you'll summarize key characteristics and identify relationships that guide further analysis or model selection."
  },
  {
    topic_id: "4.3",
    name: "Preparing data for advanced modeling",
    parent_topic_id: "4",
    order_number: 3,
    description:
      "You'll learn how to prepare data for machine learning — including feature encoding, scaling, normalization, and data splitting. These techniques ensure your dataset is clean, consistent, and ready for predictive analytics."
  },

  {
    topic_id: "5",
    name: "SQL for Data Management",
    parent_topic_id: null,
    order_number: 5,
    description: ""
  },
  {
    topic_id: "5.1",
    name: "Writing queries and subqueries",
    parent_topic_id: "5",
    order_number: 1,
    description:
      "This subtopic teaches SQL fundamentals — writing simple and nested queries to retrieve meaningful data from databases. You'll master filtering, sorting, and conditional retrieval to answer analytical questions efficiently."
  },
  {
    topic_id: "5.2",
    name: "Joins, grouping, and aggregation",
    parent_topic_id: "5",
    order_number: 2,
    description:
      "You'll explore advanced SQL concepts such as INNER and OUTER joins, GROUP BY, and aggregate functions like SUM, AVG, and COUNT. These techniques allow you to combine tables and summarize complex datasets with precision."
  },
  {
    topic_id: "5.3",
    name: "Managing relational databases",
    parent_topic_id: "5",
    order_number: 3,
    description:
      "This section covers database design principles, normalization, and indexing. You'll learn how to efficiently store and manage large datasets and ensure data consistency, security, and performance in relational systems."
  },
  {
    topic_id: "6",
    name: "Microsoft Excel for Analytics",
    parent_topic_id: null,
    order_number: 6,
    description: ""
  },
  {
    topic_id: "6.1",
    name: "Advanced formulas and functions",
    parent_topic_id: "6",
    order_number: 1,
    description:
      "In this subtopic, you'll learn to use advanced Excel formulas and functions such as INDEX-MATCH, VLOOKUP, IFERROR, and nested logical statements. You'll explore how to automate repetitive calculations and build analytical models directly in Excel, enabling powerful data manipulation and accurate business reporting without writing code."
  },
  {
    topic_id: "6.2",
    name: "Pivot tables and data summarization",
    parent_topic_id: "6",
    order_number: 2,
    description:
      "This session focuses on pivot tables — one of Excel's most powerful data analysis tools. You'll learn how to summarize large datasets, apply filters, create calculated fields, and visualize results with pivot charts. This skill helps in quickly identifying patterns and trends in business and operational data."
  },
  {
    topic_id: "6.3",
    name: "Data cleaning and automation",
    parent_topic_id: "6",
    order_number: 3,
    description:
      "You'll explore practical techniques for cleaning messy data using Excel's built-in tools like Text-to-Columns, Remove Duplicates, and Power Query. The subtopic also introduces automation concepts through macros, helping you streamline repetitive workflows and reduce manual effort in day-to-day analytics tasks."
  },

  {
    topic_id: "7",
    name: "Power BI for Business Intelligence",
    parent_topic_id: null,
    order_number: 7,
    description: ""
  },
  {
    topic_id: "7.1",
    name: "Building reports and dashboards",
    parent_topic_id: "7",
    order_number: 1,
    description:
      "You'll learn to build interactive and visually compelling dashboards in Power BI. This includes connecting data sources, designing layouts, and adding charts, slicers, and KPIs. You'll also gain insights into best practices for storytelling through dashboards that support business decisions and highlight critical performance metrics."
  },
  {
    topic_id: "7.2",
    name: "Power Query and DAX formulas",
    parent_topic_id: "7",
    order_number: 2,
    description:
      "This topic introduces Power Query for data extraction and transformation, and DAX (Data Analysis Expressions) for creating advanced calculated columns and measures. You'll understand how to manipulate and analyze complex datasets efficiently, making Power BI a dynamic tool for real-time business intelligence."
  },
  {
    topic_id: "7.3",
    name: "Data storytelling techniques",
    parent_topic_id: "7",
    order_number: 3,
    description:
      "Here you'll discover how to communicate analytical findings through compelling narratives. You'll learn visualization principles, color theory, and layout design techniques to make insights intuitive and persuasive. This helps bridge the gap between data analysis and strategic decision-making for stakeholders."
  },

  {
    topic_id: "8",
    name: "Tableau for Visualization",
    parent_topic_id: null,
    order_number: 8,
    description: ""
  },
  {
    topic_id: "8.1",
    name: "Designing interactive dashboards",
    parent_topic_id: "8",
    order_number: 1,
    description:
      "You'll learn to build interactive dashboards in Tableau using charts, maps, and filters. This session emphasizes user experience — creating visualizations that respond dynamically to user input and reveal insights instantly, helping in business monitoring and storytelling with live data connections."
  },
  {
    topic_id: "8.2",
    name: "Using calculated fields and filters",
    parent_topic_id: "8",
    order_number: 2,
    description:
      "This topic explores the creation of calculated fields to derive new metrics, apply filters to manage large datasets, and use parameters for interactivity. You'll learn how these features empower analysts to answer complex business questions through flexible and dynamic visualization design."
  },
  {
    topic_id: "8.3",
    name: "Publishing and sharing insights",
    parent_topic_id: "8",
    order_number: 3,
    description:
      "You'll discover how to publish Tableau dashboards to Tableau Server or Tableau Public, manage permissions, and schedule updates. This ensures that your insights are accessible across teams securely, enabling data-driven collaboration and consistent information sharing within organizations."
  },

  {
    topic_id: "9",
    name: "Microsoft Fabric & Integration with Power BI",
    parent_topic_id: null,
    order_number: 9,
    description: ""
  },
  {
    topic_id: "9.1",
    name: "Data pipeline management",
    parent_topic_id: "9",
    order_number: 1,
    description:
      "This subtopic covers building and managing data pipelines in Microsoft Fabric. You'll learn to automate data ingestion, transformation, and storage processes from multiple sources. Understanding these workflows ensures that your analytics solutions are scalable, efficient, and enterprise-ready."
  },
  {
    topic_id: "9.2",
    name: "Lakehouse architecture fundamentals",
    parent_topic_id: "9",
    order_number: 2,
    description:
      "You'll explore the concept of Lakehouse architecture, which combines data lake flexibility with data warehouse performance. The topic covers structured and unstructured data management, metadata organization, and performance optimization for real-time analytics in modern data ecosystems."
  },
  {
    topic_id: "9.3",
    name: "Building enterprise-level dashboards",
    parent_topic_id: "9",
    order_number: 3,
    description:
      "This subtopic teaches how to create scalable Power BI dashboards integrated with Microsoft Fabric. You'll understand deployment best practices, dataset versioning, and governance models, ensuring that your analytics infrastructure supports large-scale organizational reporting efficiently."
  },

  {
    topic_id: "10",
    name: "Generative AI for Data Analytics",
    parent_topic_id: null,
    order_number: 10,
    description: ""
  },
  {
    topic_id: "10.1",
    name: "Automating insight generation",
    parent_topic_id: "10",
    order_number: 1,
    description:
      "You'll learn how generative AI can analyze datasets and automatically generate insights, summaries, and reports. This session introduces tools like ChatGPT and Copilot for analytics, enabling you to scale decision support systems with minimal manual analysis."
  },
  {
    topic_id: "10.2",
    name: "Using AI assistants for data exploration",
    parent_topic_id: "10",
    order_number: 2,
    description:
      "This topic demonstrates how to use AI assistants to query datasets conversationally. You'll experience how large language models can help analysts discover patterns, build hypotheses, and explore data interactively without requiring deep technical expertise."
  },
  {
    topic_id: "10.3",
    name: "Integrating AI tools with Power BI and Python",
    parent_topic_id: "10",
    order_number: 3,
    description:
      "You'll learn to connect generative AI models with analytics tools like Power BI and Python scripts. This integration enhances automation, allowing AI to assist in generating visuals, code snippets, and natural language summaries of analytical findings."
  },

  {
    topic_id: "11",
    name: "Predictive Analytics & Machine Learning",
    parent_topic_id: null,
    order_number: 11,
    description: ""
  },
  {
    topic_id: "11.1",
    name: "Supervised and unsupervised learning",
    parent_topic_id: "11",
    order_number: 1,
    description:
      "This session introduces core machine learning paradigms — supervised and unsupervised learning. You'll learn the difference between labeled and unlabeled data, and implement algorithms like linear regression, decision trees, and clustering to extract insights from data."
  },
  {
    topic_id: "11.2",
    name: "Regression, classification, and forecasting models",
    parent_topic_id: "11",
    order_number: 2,
    description:
      "You'll build predictive models using regression for numerical outcomes, classification for categorical predictions, and time series forecasting for trend analysis. Practical exercises help you apply these techniques using real-world datasets and Python libraries like scikit-learn."
  },
  {
    topic_id: "11.3",
    name: "Model evaluation and interpretation",
    parent_topic_id: "11",
    order_number: 3,
    description:
      "This subtopic focuses on evaluating model performance through metrics like accuracy, precision, recall, and F1-score. You'll also learn how to interpret feature importance and ensure model transparency for ethical and explainable AI applications."
  },

  {
    topic_id: "12",
    name: "ETL & Data Engineering Basics",
    parent_topic_id: null,
    order_number: 12,
    description: ""
  },
  {
    topic_id: "12.1",
    name: "Data extraction and transformation",
    parent_topic_id: "12",
    order_number: 1,
    description:
      "You'll learn how to extract raw data from APIs, files, and databases, and transform it using pipelines. This process includes cleaning, normalizing, and enriching data to prepare it for analysis or machine learning workflows."
  },
  {
    topic_id: "12.2",
    name: "Building automated ETL workflows",
    parent_topic_id: "12",
    order_number: 2,
    description:
      "This session covers automation tools and frameworks used in ETL pipelines. You'll design workflows that extract, transform, and load data on a schedule using Python, Airflow, or Power Query — ensuring data consistency and reducing manual processing time."
  },
  {
    topic_id: "12.3",
    name: "Cloud data storage fundamentals",
    parent_topic_id: "12",
    order_number: 3,
    description:
      "You'll explore cloud storage systems such as Azure Data Lake, AWS S3, and Google Cloud Storage. Learn how to structure, secure, and manage large-scale data for analytics applications while maintaining performance and cost efficiency."
  },

  {
    topic_id: "13",
    name: "Interview Preparation & Q&A",
    parent_topic_id: null,
    order_number: 13,
    description: ""
  },
  {
    topic_id: "13.1",
    name: "Top technical and behavioral interview questions",
    parent_topic_id: "13",
    order_number: 1,
    description:
      "This subtopic prepares you for job interviews with a focus on both technical and behavioral questions. You'll review common data analytics challenges, problem-solving scenarios, and communication strategies to articulate your approach and thought process clearly to recruiters."
  },
  {
    topic_id: "13.2",
    name: "Portfolio building and presentation tips",
    parent_topic_id: "13",
    order_number: 2,
    description:
      "You'll learn how to create a professional analytics portfolio showcasing your projects and technical abilities. This session covers project documentation, visualization design, and storytelling to impress employers and highlight your data-driven problem-solving skills."
  },
  {
    topic_id: "13.3",
    name: "Case studies for hands-on practice",
    parent_topic_id: "13",
    order_number: 3,
    description:
      "You'll work on multiple case studies reflecting real-world business problems. These exercises strengthen your analytical and communication skills while simulating professional data analysis tasks — preparing you for practical, on-the-job challenges."
  },

  {
    topic_id: "14",
    name: "Capstone Projects",
    parent_topic_id: null,
    order_number: 14,
    description: ""
  },
  {
    topic_id: "14.1",
    name: "Real-world end-to-end analytics project",
    parent_topic_id: "14",
    order_number: 1,
    description:
      "You'll complete a full-scale analytics project — from data collection and cleaning to visualization and reporting. This experience integrates all the concepts learned throughout the course, demonstrating your ability to deliver actionable insights from raw data."
  },
  {
    topic_id: "14.2",
    name: "Data cleaning, visualization, and model deployment",
    parent_topic_id: "14",
    order_number: 2,
    description:
      "This project phase focuses on preparing high-quality data, designing dashboards, and deploying predictive models. You'll implement reproducible pipelines and use tools like Power BI and Python to create polished, production-ready analytics solutions."
  },
  {
    topic_id: "14.3",
    name: "Final presentation and review",
    parent_topic_id: "14",
    order_number: 3,
    description:
      "The final subtopic guides you through presenting your capstone project. You'll learn how to structure presentations, explain methodologies, and highlight insights effectively, demonstrating both technical depth and communication skills to potential employers or stakeholders."
  }
];

export const mockOutcomes: Outcomes[] = [
  {
    outcome_id: "1",
    name: "Introduction to Data Analytics",
    order: 1,
    icon: "Award"
  },
]

