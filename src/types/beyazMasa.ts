export interface ComplaintCategory {
  id: string;
  label: string;
}

export interface TrackedComplaint {
  code: string;
  category: string;
  summary: string;
  steps: string[];
  currentStep: number;
}

export type ComplaintSubmissionStatus = "idle" | "submitting" | "submitted";
