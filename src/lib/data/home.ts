import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Mohammad';

export const lastName = 'Abdul Razzaq';

export const description =
'AI/ML Engineer and Software Developer with over 3 years of experience specializing in scalable systems, AI agents, generative AI, and full-stack development. Currently pursuing a Master’s in Computer Science at NYU, focusing on designing intelligent and impactful solutions.';export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/mdabdulrazzaq' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/mohammadabdulrazzaq/'
	},

	{
		platform: Platform.Email,
		link: 'am15213@nyu.edu'
	},

];

export const skills = getSkills('huggingface-transformers', 'tensorflow','pytorch', 'docker', 'aws', 'gcp');
