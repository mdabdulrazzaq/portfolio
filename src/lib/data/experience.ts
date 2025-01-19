import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'ozone-cloud',
		company: 'Ozone Cloud',
	    description: `
		• Developed Ozone Studio's user-friendly interface for Tekton pipeline creation, enhancing development efficiency by 40%.  
		• Integrated AI models into the Continuous Verification feature to monitor application attributes and generate alerts for anomalies.  
		• Built an end-to-end one-click deployment feature for the Ozone CI/CD platform.  
		• Implemented AI-driven Grafana dashboards for enhanced observability, improving system diagnostics and decision-making.  
		• Developed an end-to-end observability feature for Ozone Microservices, improving monitoring and system reliability.  
		• Architected an in-house Conversational LLM with RAG for pipeline conversion.  
		• Built and deployed ML and NLP models for Ozone Microservices, enhancing data analytics.`,
		
		
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Bangalore, India',
		period: { from: new Date(2021, 11, 1), to: new Date(2024, 7, 31) },
		skills: getSkills('typescript', 'python', 'reactjs', 'go', 'nodejs', 'docker', 'tekton','kubernetes', 'tensorflow'),
		name: 'Software Engineer',
		color: '#39FF14',
		links: [{ to: 'https://www.ozone.one/', label: 'Ozone' }],

		logo: Assets.Ozone,
		shortDescription: 'Software Engineer at Ozone Cloud, enhancing development efficiency and system reliability through AI and automation.'
	},
	{
		slug: 'koireader',
		company: 'KoiReader',
		description: 'Executed data preprocessing, annotation, and model evaluation to improve object detection model performance.',
		contract: ContractType.Internship,
		type: 'Data Science',
		location: 'Bangalore, India',
		period: { from: new Date(2021, 0, 1), to: new Date(2021, 8, 30) },
		skills: getSkills('python', 'tensorflow', 'pytorch', 'numpy', 'pandas'),
		name: 'Data Science Intern',
		color: 'teal',
		links: [],
		logo: Assets.KoiReader,
		shortDescription: 'Data Science Intern at KoiReader, working on data preprocessing and annotation for AI model development.'
	},
	{
		slug: 'aero2astro',
		company: 'Aero2astro',
		description: 'Explored computer vision models for object detection and performance evaluation using YOLO and OpenCV.',
		contract: ContractType.Internship,
		type: 'Machine Learning Research',
		location: 'India',
		period: { from: new Date(2020, 9, 1), to: new Date(2021, 5, 30) },
		skills: getSkills('python', 'opencv', 'yolo', 'tensorflow'),
		name: 'ML Research Intern',
		color: 'orange',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'ML Research Intern at Aero2astro, focused on computer vision research and object detection model evaluations.'
	}
];

export const title = 'Professional Experience';
