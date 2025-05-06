export interface Chapter {
    title: string;
    duration?: string;
    preview?: boolean;
  }
  
  export interface Module {
    title: string;
    lecturesCount: number;
    duration: string;
    chapters: Chapter[];
  }
  
  export interface Course {
    id: string;
    title: string;
    category: string;
    description: string;
    image: string;
    duration: string;
    modules: Module[];
    whatYouWillLearn: string[];
    includes: {
      label: string;
      icon: string; // Icon name or path
    }[];
  }
  