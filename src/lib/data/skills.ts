import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Cloud', slug: 'cloud' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'AI/ML', slug: 'ai-ml' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'python',
		color: 'blue',
		description: 'Extensive experience in Python for scripting, data analysis, and backend development.',
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'huggingface-transformers',
		color: 'orange',
		description: 'Skilled in using Hugging Face Transformers for natural language processing (NLP) tasks such as text classification, summarization, and generation.',
		logo: Assets.HuggingFaceTransformers,
		name: 'Hugging Face Transformers',
		category: 'ai-ml',
	}),
	
	defineSkill({
		slug: 'javascript',
		color: 'yellow',
		description: 'Proficient in modern ES6+ JavaScript for building scalable web applications.',
		logo: Assets.JavaScript,
		name: 'JavaScript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'java',
		color: 'red',
		description: 'Proficient in Java for building scalable applications and backend systems.',
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'typescript',
		color: 'blue',
		description: 'Expertise in TypeScript for developing type-safe applications.',
		logo: Assets.TypeScript,
		name: 'TypeScript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'r',
		color: 'blue',
		description: 'Experienced in R for statistical computing and data analysis.',
		logo: Assets.R,
		name: 'R',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		description: 'Experienced in building dynamic and responsive web interfaces with React.js.',
		logo: Assets.ReactJs,
		name: 'React.js',
		category: 'framework'
	}),
	defineSkill({
		slug: 'nextjs',
		color: 'white',
		description: 'Expertise in developing server-side rendered and static websites with Next.js.',
		logo: Assets.NextJs,
		name: 'Next.js',
		category: 'framework'
	}),
	defineSkill({
		slug: 'flask',
		color: 'grey',
		description: 'Skilled in building REST APIs and backend systems using Flask.',
		logo: Assets.Flask,
		name: 'Flask',
		category: 'framework'
	}),

	defineSkill({
		slug: 'tensorflow',
		color: 'orange',
		description: 'Hands-on experience in TensorFlow for deep learning projects.',
		logo: Assets.Tensorflow,
		name: 'TensorFlow',
		category: 'ai-ml'
	}),
	defineSkill({
		slug: 'pytorch',
		color: 'red',
		description: 'Proficient in PyTorch for developing machine learning models.',
		logo: Assets.Pytorch,
		name: 'PyTorch',
		category: 'ai-ml'
	}),
	defineSkill({
		slug: 'docker',
		color: 'blue',
		description: 'Skilled in containerizing applications using Docker for DevOps workflows.',
		logo: Assets.Docker,
		name: 'Docker',
		category: 'devops'
	}),
	defineSkill({
		slug: 'kubernetes',
		color: 'blue',
		description: 'Hands-on experience in managing container orchestration with Kubernetes.',
		logo: Assets.Kubernetes,
		name: 'Kubernetes',
		category: 'devops'
	}),
	defineSkill({
		slug: 'tekton',
		color: 'red',
		description: 'Experienced in using Tekton for continuous integration and delivery (CI/CD) workflows and automating DevOps pipelines.',
		logo: Assets.Tekton, // Ensure you have a Tekton logo in your Assets
		name: 'Tekton',
		category: 'devops'
	}),
	
	defineSkill({
		slug: 'nginx',
		color: 'green',
		description: 'Knowledgeable in configuring Nginx for reverse proxy and load balancing.',
		logo: Assets.Nginx,
		name: 'Nginx',
		category: 'devops'
	}),
	defineSkill({
		slug: 'mysql',
		color: 'blue',
		description: 'Experienced in designing and querying relational databases with MySQL.',
		logo: Assets.MySQL,
		name: 'MySQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'mongodb',
		color: 'green',
		description: 'Proficient in designing and querying NoSQL databases with MongoDB.',
		logo: Assets.MongoDB,
		name: 'MongoDB',
		category: 'db'
	}),
	defineSkill({
		slug: 'postgresql',
		color: 'purple',
		description: 'Skilled in managing relational databases using PostgreSQL.',
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL',
		category: 'db'
	}),
	
	defineSkill({
		slug: 'go',
		color: 'teal',
		description: 'Experienced in using Go for building high-performance backend services, microservices, and concurrent applications.',
		logo: Assets.Go,
		name: 'Go',
		category: 'pro-lang'
	}),
	
	defineSkill({
		slug: 'aws',
		color: 'orange',
		description: 'Experienced with AWS services like EC2, S3, Lambda, and RDS for cloud-based solutions.',
		logo: Assets.AWS,
		name: 'AWS',
		category: 'cloud'
	}),
	defineSkill({
		slug: 'gcp',
		color: 'blue',
		description: 'Proficient in using Google Cloud Platform (GCP) services like Compute Engine, Kubernetes Engine, and Cloud Storage.',
		logo: Assets.GCP,
		name: 'GCP',
		category: 'cloud'
	}),
	
	// defineSkill({
	// 	slug: 'html',
	// 	color: 'orange',
	// 	description: 'Strong foundation in semantic HTML for creating accessible web pages.',
	// 	logo: Assets.HTML,
	// 	name: 'HTML',
	// 	category: 'markup-style'
	// }),
	// defineSkill({
	// 	slug: 'css',
	// 	color: 'blue',
	// 	description: 'Experienced in styling with CSS, including responsive design and animations.',
	// 	logo: Assets.CSS,
	// 	name: 'CSS',
	// 	category: 'markup-style'
	// }),

] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
