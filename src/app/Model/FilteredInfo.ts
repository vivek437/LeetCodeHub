import { QuestionTag } from './QuestionTags';
import { Submissions } from './Submissions';
export interface FilteredInfo {
  internalId: number;
  question_id: number;
  question__title: string;
  question__title_slug: string;
  status?: string;
  level: string;
  questionTag?: QuestionTag;
  submissions?: Submissions;
  latestSuccessfulSubmission?: string;
}
