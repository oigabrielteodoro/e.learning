import mathPng from '../../assets/Math.png';
import fisicaPng from '../../assets/Fisica.png';
import englishPng from '../../assets/English.png';
import quimicaPng from '../../assets/Quimica.png';
import buildPng from '../../assets/Build.png';
import talkPng from '../../assets/Talk.png';

export const courses = [
  {
    id: String(Math.random()),
    iconPath: mathPng,
    name: 'Matemática',
    lessons: 16,
  },
  {
    id: String(Math.random()),
    iconPath: fisicaPng,
    name: 'Física',
    lessons: 25,
  },
  {
    id: String(Math.random()),
    iconPath: englishPng,
    name: 'Inglês',
    lessons: 6,
  },
  {
    id: String(Math.random()),
    iconPath: quimicaPng,
    name: 'Química',
    lessons: 61,
  },
  {
    id: String(Math.random()),
    iconPath: talkPng,
    name: 'Português',
    lessons: 16,
  },
  {
    id: String(Math.random()),
    iconPath: buildPng,
    name: 'Educação Física',
    lessons: 16,
  }
]