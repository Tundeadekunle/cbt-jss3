import { Question, Subject } from '@/types';
import { historyQuestions } from './history';
import { ccaQuestions } from './cca';
import { scienceQuestions } from './science';
import { scsQuestions } from './scs';
import { businessQuestions } from './business';
import { computerQuestions } from './computer';
import { pheQuestions } from './phe';
import { crsQuestions } from './crs';
import { englishQuestions } from './english';
import { vocationalStudiesQuestions } from './vocational';


export const getQuestionsBySubject = (subject: Subject): Question[] => {
  switch (subject) {
    case 'history':
      return historyQuestions;
      case 'business':
      return businessQuestions;
    case 'cca':
      return ccaQuestions;
      // case 'computer':
      // return computerQuestions;
      case 'phe':
       return pheQuestions;
      // case 'crs':
      // return crsQuestions;
    // case 'science':
    //   return scienceQuestions;
    case 'scs':
      return scsQuestions;
      case 'english':
      return englishQuestions;
      case 'vocational-studies':
      return vocationalStudiesQuestions;
    default:
      return historyQuestions;
  }
};

export const getExamDurationBySubject = (subject: Subject): number => {
  // All subjects have 60-minute duration
  return 60; // 60 minutes in minutes
};

export const getSubjectDisplayName = (subject: Subject): string => {
  switch (subject) {
    case 'history':
      return 'History';
    case 'cca':
      return 'CCA';
      // case 'computer':
      // return 'Computer Studies';
      case 'business':
      return 'Business Studies';
      // case 'crs':
      // return 'Christian Religious Studies';
      case 'phe':
      return 'Physical and Health Education';
    // case 'science':
    //   return 'Basic Science';
    case 'scs':
      return 'Social and Citizenship Studies';
      case 'english':
      return 'English Language';
      case 'vocational-studies':
      return 'Vocational Studies';
    default:
      return 'CCA';
  }
};

export const getAllSubjects = (): Subject[] => {
  return ['history', 'cca', 'scs', 'phe', 'business', 'english', 'vocational-studies'];
};