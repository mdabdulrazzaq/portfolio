import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'aws-intern',
		company: 'Amazon Web Services (AWS)',
		description:
			`• Built a scalable Model Context Protocol (MCP) server to automate incident investigations for AWS Amplify Hosting.  
• Implemented permission-controlled, end-to-end workflows integrating CloudWatch, SQS DLQ, and runbooks.  
• Integrated Amazon Q with MCP to enable conversational, evidence-backed investigation and resolution workflows.`,
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Seattle, USA',
		period: { from: new Date(2025, 4, 1), to: undefined }, // May 2025 – present
		skills: getSkills('typescript', 'nodejs', 'aws', 'cloudwatch', 'sqs', 'runbooks'),
		name: 'SDE Intern',
		color: 'orange',
		links: [{ to: 'https://aws.amazon.com/', label: 'AWS' }],
		logo: Assets.AWS,
		shortDescription: 'SDE Intern at AWS, building the Model Context Protocol (MCP) tool for AWS Amplify to empower on-call engineers with automated, evidence-backed incident investigation and resolution workflows.'
	},
	{
		slug: 'ozone-cloud',
		company: 'Ozone Cloud',
	    description:
		`• Developed Ozone Studio's user-friendly interface for Tekton pipeline creation, enhancing development efficiency by 40%.  
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
		description: 
		 `• Performed data preprocessing for object detection models, including data cleaning, normalization, and augmentation, improving dataset quality.  
		• Led data annotation to ensure consistent and accurate labeling of training data, utilizing advanced annotation tools.
		• Worked closely with cross-functional teams to improve dataset robustness, contributing to overall model performance.`,
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
		description: 
		 `• Conducted research on computer vision models (e.g., YOLO, OpenCV) for object detection, improving model accuracy and efficiency.  
		• Led data annotation to ensure consistent and accurate labeling of training data, utilizing advanced annotation tools.  
		• Worked closely with cross-functional teams to improve dataset robustness, contributing to overall model performance.`,
	
		// • Explored various object detection algorithms, optimizing detection methods for real-world applications.
		//  Evaluated and tested model performance using real-world datasets, contributing to insights for model improvements.`,
		
	
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
