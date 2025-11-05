interface Instructor {
  instructor_id: string;
  name: string;
  image_url: string;
  bio: string;
}

interface Course {
  course_id?: string;
  title: string;
  description: string;
  image_url: string;
  original_price?: string;
  discounted_price: string;
  rating: string;
  review_count: string;
  instructors: Instructor;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration_hours: string;
  lessons_count: string;
  status: string;
}

interface Webinar {
  webinar_id?: string;
  title: string;
  description: string;
  image_url: string;
  original_price?: string;
  discounted_price: string;
  rating: string;
  review_count: string;
  instructors: Instructor;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration_hours: string;
  lessons_count: string;
  status: string;
  schedule_date: Date;
}

interface Category {
  category_id: string;
  name: string;
  icon: React.ElementType;
}

interface Topic {
  topic_id: string;
  topic_reference_id?: string,
  name: string;
  parent_topic_id: string | null;
  order_number: number;
  description?: string;
}

interface Outcomes {
  outcome_id: string;
  name: string;
  order: number;
  icon: string;
}

export type { Instructor, Course, Webinar, Category, Topic, Outcomes };
