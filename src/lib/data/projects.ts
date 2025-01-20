import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

// export const items: Array<Project> = [
// 	{
// 		slug: 'slick-portfolio-angular',
// 		color: '#5e95e3',
// 		description:
// 			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
// 		shortDescription:
// 			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
// 		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
// 		logo: Assets.Unknown,
// 		name: 'Slick Portfolio',
// 		period: {
// 			from: new Date()
// 		},
// 		skills: getSkills('angular', 'ts', 'tailwind'),
// 		type: 'Website Template'
// 	},
// 	{
// 		slug: 'slick-portfolio-svelte',
// 		color: '#ff3e00',
// 		description:
// 			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
// 		shortDescription:
// 			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
// 		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
// 		logo: Assets.Svelte,
// 		name: 'Slick Portfolio',
// 		period: {
// 			from: new Date()
// 		},
// 		skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
// 		type: 'Website Template',
// 		screenshots: [
// 			{
// 				label: 'screen 1',
// 				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
// 			},
// 			{
// 				label: '2',
// 				src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
// 			},
// 			{
// 				label: '3',
// 				src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
// 			},
// 			{
// 				label: '4',
// 				src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
// 			},
// 			{
// 				label: '5',
// 				src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
// 			},
// 			{
// 				label: '6',
// 				src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
// 			}
// 		]
// 	}
// ];

// export const title = 'Projects';
export const items: Array<Project> = [
	// Existing projects...
	{
		slug: 'rag-system-for-robotics',
		color: '#3b82f6',  // Add your preferred color
		description:
			`• Developed a RAG system to improve ROS2-based autonomous navigation by creating ETL pipelines to process and store ROS2 documentation and simulation data for efficient querying.  
             • Fine-tuned language models for robotics-specific tasks and built an interactive app for real-time querying, enabling users to ask navigation-related questions.`,
		shortDescription: 'RAG System for ROS2 Robotics using MongoDB, Qdrant, Docker, PyTorch, ClearML.',
		links: [{ to: 'https://github.com/mdabdulrazzaq/RAG-System-for-Robotics', label: 'GitHub' }],
		logo: Assets.RAG,  // Replace with an appropriate logo if available
		name: 'RAG System for  Robotics',
		period: {
			from: new Date(2024, 10, 2), to: new Date(2024, 11, 2) 
		},
		skills: getSkills('mongodb', 'qdrant', 'docker', 'pytorch', 'clearml'),
		type: 'Gen-AI Project'
	},
	{
		slug: 'bci-ssvep-detection',
		color: '#d32f2f',  // Add your preferred color
		description:
			`• Developed a deep learning model for real-time Brain-Computer Interface (BCI) applications, focused on the SSVEP (Steady-State Visual Evoked Potential) paradigm for efficient visual field mapping in glaucoma diagnostics.  
• Designed a multi-task learning framework to simultaneously extract EEG features and map visual responses, improving diagnostic accuracy and speeding up the process.`,
		shortDescription: 'BCI-SSVEP Detection using Multi-Task Learning and PyTorch.',
		links: [{ to: 'https://github.com/mdabdulrazzaq/SSVEP-Detection', label: 'GitHub' }],
		logo: Assets.BCI,  // Replace with an appropriate logo if available
		name: 'BCI-SSVEP Detection with Multi-Task Learning',
		period: {
			from: new Date(2021, 5, 3), to: new Date(2021, 6, 24) 
		},
		skills: getSkills('pytorch', 'ml', 'deeplearning'),
		type: 'AI Healthcare'
	},
	{
        slug: 'fasterrcnn-deepsort',
        color: '#ff5733',
        description: 
		`• Implemented an object detection and tracking system by integrating Faster R-CNN for detection and DeepSORT for multi-object tracking.
         • Developed a pipeline for real-time analysis on video feeds, including pre-processing, inference, and visualization.
         • Optimized the performance of both models to handle real-time scenarios with improved tracking accuracy and object re-identification.`,
		 
        shortDescription: 'Faster R-CNN and DeepSORT integration for object detection and multi-object tracking.',
        links: [{ to: 'https://github.com/mdabdulrazzaq/faster-rcnn-deepsort-sports-tracking', label: 'GitHub' }],
        logo: Assets.sportsai,
        name: 'Faster R-CNN + DeepSORT Object Tracking',
        period: {
            from: new Date(2024, 9, 18), to: new Date(2024, 10, 1)
        },
        skills: getSkills('pytorch', 'tensorflow', 'tracking', 'deeplearning'),
        type: 'Computer Vision Project',
		screenshots: [
						{
							label: 'Architecture Diagram',
                            src:'https://raw.githubusercontent.com/mdabdulrazzaq/faster-rcnn-deepsort-sports-tracking/refs/heads/main/Architecture.png'                      },]}
];
	
export const title = 'Projects';