export type ProjectType = {
  id: string;
  name: string;
  demo: string;
  repo: string;
  // type: SubmissionType;
  type: string;
  description: string;
  instructions: string;
  banner: string;
  bannerName: string;
  debug: DebugType[];
  team: string;
  teammates: string[];
  submitted: boolean;

  createdAt: Date;
  updatedAt?: Date;
};

export type DebugType = {
  id: string;
  description: string;
  agent: string;

  createdAt: Date;
};

export type SubmissionType = {
  id: number;
  name: string;
};
