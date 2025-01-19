import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Master of Science in Computer Science',
		description: 'Currently pursuing Master’s degree in Computer Science at NYU Tandon School of Engineering, focusing on AI, ML, and web development.',
		location: 'New York, NY, USA',
		logo: Assets.NYU, // Add a logo here if available
		name: 'MSc in Computer Science',
		organization: 'New York University, Tandon School of Engineering',
		period: { from: new Date(2024, 9, 1)},
		shortDescription: 'Currently enrolled',
		color:'#6B1E8C',
		slug: 'ms-computer-science',
		subjects: ['Artificial Intelligence', 'Machine Learning', 'Data Structures', 'Algorithms', 'Cloud Computing', 'Web Development', 'Software Engineering']
	},
	{
		degree: 'Bachelor of Technology in Computer Science Engineering',
		description: '',
		location: 'Amaravathi, India',
		logo: Assets.VIT, // Add a logo here if available
		name: 'BTech in Computer Science Engineering',
		organization: 'Vellore Institute of Technology',
		period: { from: new Date(2018, 8, 1), to: new Date(2022, 4, 31) },
		shortDescription: 'GPA: 8.83 / 10.00',
		color:'blue',
		slug: 'btech-computer-science',
		subjects: ['Data Structures', 'Neural Networks', 'Database Management Systems', 'Computer Networks', 'Operating Systems', 'Discrete Mathematics', 'Java', 'Python', 'Software Engineering']
	}
];

export const title = 'Education';
