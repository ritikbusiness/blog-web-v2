
import { Laptop, Heart, Lightbulb, Briefcase } from "lucide-react";

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  categorySlug: string;
  date: string;
  readTime: string;
  commentCount: number;
  coverImage: string;
  tags: string[];
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  icon: JSX.Element;
  count: number;
}

export const categories: Category[] = [
  {
    name: "Technology",
    slug: "technology",
    description: "Exploring the latest tech trends and innovations",
    icon: <Laptop className="h-6 w-6" />,
    count: 8,
  },
  {
    name: "Life Lessons",
    slug: "life-lessons",
    description: "Insights and wisdom from everyday experiences",
    icon: <Lightbulb className="h-6 w-6" />,
    count: 12,
  },
  {
    name: "Love & Emotions",
    slug: "love-emotions",
    description: "Exploring the depths of human feelings and relationships",
    icon: <Heart className="h-6 w-6" />,
    count: 7,
  },
  {
    name: "Career",
    slug: "career",
    description: "Professional growth and workplace insights",
    icon: <Briefcase className="h-6 w-6" />,
    count: 9,
  },
];

export const posts: Post[] = [
  {
    id: "1",
    title: "The Impact of Artificial Intelligence on Modern Society",
    slug: "impact-of-ai-on-society",
    excerpt: "Exploring how AI is reshaping our world, from everyday applications to ethical considerations and future possibilities.",
    content: `
# The Impact of Artificial Intelligence on Modern Society

Artificial Intelligence (AI) has rapidly transformed from a futuristic concept to a practical technology that influences nearly every aspect of our daily lives. From the moment we wake up to check our personalized news feeds to the recommendations that shape our entertainment choices, AI algorithms are quietly at work, learning our preferences and adapting to our behaviors.

## The Everyday Presence of AI

The most visible applications of AI in our daily lives include:

- **Virtual Assistants**: Siri, Alexa, and Google Assistant have become household names, answering questions, setting reminders, and controlling smart home devices with increasingly natural interactions.

- **Recommendation Systems**: Whether you're browsing Netflix, Spotify, or shopping online, AI algorithms analyze your preferences to suggest content or products you might enjoy.

- **Social Media**: From content curation to facial recognition in photos, AI shapes our social media experiences in countless ways.

## Economic Transformation

AI is not just changing how we live but also how we work. Industries across the board are experiencing significant shifts:

- **Automation**: Routine tasks are increasingly handled by AI systems, allowing human workers to focus on more complex problems.

- **New Job Categories**: While some positions become obsolete, AI creates new opportunities in data science, machine learning engineering, and AI ethics.

- **Productivity Gains**: Organizations implementing AI solutions often see substantial improvements in efficiency and output quality.

## Ethical Considerations

As with any transformative technology, AI brings important ethical questions:

- **Privacy Concerns**: The data required to train effective AI systems raises questions about information collection and usage.

- **Algorithmic Bias**: AI systems can inherit or even amplify biases present in their training data, leading to unfair outcomes.

- **Accountability**: When AI systems make mistakes, determining responsibility becomes complicated.

## The Path Forward

As we continue to integrate AI into our society, thoughtful approaches are necessary:

- **Human-Centered Design**: AI should augment human capabilities rather than simply replace them.

- **Transparent Systems**: Users should understand when they're interacting with AI and how decisions are being made.

- **Inclusive Development**: Ensuring AI benefits are widely shared across society requires deliberate effort.

The AI revolution is just beginning, and its ultimate impact will depend largely on the choices we make today about how to develop and deploy these powerful technologies. By approaching AI with both enthusiasm for its potential and careful consideration of its implications, we can work toward a future where technology truly serves humanity's best interests.
    `,
    category: "Technology",
    categorySlug: "technology",
    date: "April 5, 2025",
    readTime: "5 min read",
    commentCount: 8,
    coverImage: "https://images.unsplash.com/photo-1677442135901-0caa415529e1?q=80&w=2070&auto=format&fit=crop",
    tags: ["AI", "Technology", "Ethics", "Future", "Society"]
  },
  {
    id: "2",
    title: "Finding Balance in a Hyper-Connected World",
    slug: "finding-balance-in-hyper-connected-world",
    excerpt: "Strategies for maintaining mental well-being while staying connected in today's always-on digital environment.",
    content: `
# Finding Balance in a Hyper-Connected World

In an age where our devices keep us perpetually connected to work, social networks, news, and entertainment, finding genuine balance has become one of life's greatest challenges. The boundary between online and offline life has blurred, leaving many of us feeling overwhelmed and constantly distracted.

## The Digital Overwhelm

The symptoms of our hyper-connected lifestyle are increasingly common:

- **Notification Anxiety**: The subtle stress of seeing unread messages and notifications pile up.
- **Information Overload**: Exposure to more content in a day than previous generations encountered in months.
- **Comparison Culture**: Social media's highlight reels creating unrealistic expectations and feelings of inadequacy.
- **Diminished Attention**: Struggling to focus on single tasks for extended periods.

## Reclaiming Your Attention

Finding balance doesn't mean rejecting technology—it means using it intentionally:

### 1. Create Digital Boundaries

- Designate tech-free zones in your home, particularly the bedroom.
- Set specific times for checking email and social media rather than responding to every notification.
- Use "do not disturb" features during focused work and family time.

### 2. Practice Digital Minimalism

- Regularly audit your apps and subscriptions, keeping only what adds genuine value.
- Unfollow accounts that don't inspire or inform you in meaningful ways.
- Consider a simpler phone setup with only essential applications.

### 3. Cultivate Deeper Attention

- Start with short periods of focused work (25-minute Pomodoro sessions).
- Gradually extend your capacity for deep work without digital interruptions.
- Rediscover the joy of single-tasking—giving one activity your complete attention.

### 4. Prioritize In-Person Connection

- Make face-to-face interactions sacred by putting devices away.
- Create rituals around shared meals or activities that exclude screens.
- Remember that digital communication supplements rather than replaces real-world relationships.

## The Balanced Path Forward

The goal isn't digital asceticism but mindful engagement—using technology as a tool rather than being used by it. By establishing healthy boundaries and intentional practices, we can harness the benefits of our connected world while preserving our well-being, relationships, and capacity for deep thought.

The most powerful technology is the one you can turn off without anxiety. In cultivating that freedom, we reclaim something essential to the human experience: the ability to be fully present in our own lives.
    `,
    category: "Life Lessons",
    categorySlug: "life-lessons",
    date: "April 3, 2025",
    readTime: "4 min read",
    commentCount: 12,
    coverImage: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop",
    tags: ["Digital Wellness", "Mental Health", "Productivity", "Mindfulness"]
  },
  {
    id: "3",
    title: "The Art of Vulnerability in Relationships",
    slug: "art-of-vulnerability-in-relationships",
    excerpt: "Exploring how authentic emotional openness strengthens bonds and creates deeper connections with others.",
    content: `
# The Art of Vulnerability in Relationships

In a world that often celebrates strength and stoicism, vulnerability might seem like a weakness. Yet paradoxically, the willingness to be emotionally exposed—to show up authentically with our fears, uncertainties, and imperfections—may be the most courageous act in building meaningful relationships.

## The Vulnerability Paradox

Vulnerability creates a fascinating paradox: the very thing we fear might push others away actually draws them closer. When we lower our defenses and reveal our authentic selves:

- We create space for genuine connection rather than superficial interaction
- We give others permission to be equally authentic
- We build trust through demonstrated emotional honesty
- We experience being loved for who we truly are, not a curated image

## The Barriers to Opening Up

Despite its benefits, vulnerability doesn't come easily. Common obstacles include:

### Past Wounds

Previous experiences where vulnerability led to rejection or criticism create protective walls that can be difficult to dismantle.

### Cultural Conditioning

Many of us grow up with explicit or implicit messages about hiding emotions—"boys don't cry" or "always appear strong and confident."

### Fear of Judgment

The worry that revealing our true thoughts, feelings, or struggles will lead to negative evaluation.

### Control Illusion

The mistaken belief that by concealing our authentic selves, we can somehow control how others perceive and respond to us.

## Practicing Courageous Vulnerability

Like any meaningful skill, vulnerability can be cultivated through intentional practice:

### Start Small

Begin with lower-stakes disclosures before sharing your deepest feelings or fears.

### Choose Wisely

Not everyone has earned access to your innermost world. Start with people who have demonstrated trustworthiness.

### Embrace Imperfection

Allow yourself to say "I don't know," "I made a mistake," or "I need help" without self-judgment.

### Recognize the Strength in Openness

Remember that vulnerability isn't weakness—it's emotional courage and authenticity in action.

## The Transformative Power of Being Seen

When we dare to be vulnerable, our relationships transform. Connections deepen, communication becomes more honest, and we create the conditions for genuine intimacy—the experience of being fully known and accepted.

In the end, vulnerability isn't just about sharing our struggles but about showing up as our complete, authentic selves. In doing so, we open the door to the deep connection all humans fundamentally crave.
    `,
    category: "Love & Emotions",
    categorySlug: "love-emotions",
    date: "March 28, 2025",
    readTime: "6 min read",
    commentCount: 21,
    coverImage: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?q=80&w=2071&auto=format&fit=crop",
    tags: ["Relationships", "Vulnerability", "Emotional Intelligence", "Connection"]
  },
  {
    id: "4",
    title: "Navigating Career Transitions in an Evolving Workplace",
    slug: "navigating-career-transitions",
    excerpt: "Strategies for successfully pivoting your career path, adapting to new industries, and thriving amidst workplace changes.",
    content: `
# Navigating Career Transitions in an Evolving Workplace

Career paths have transformed dramatically in recent decades. The traditional model of climbing a singular corporate ladder has given way to diverse journeys that often involve multiple fields, roles, and even complete reinventions. Whether by choice or necessity, career transitions have become a normal part of professional life—but that doesn't make them easy.

## The New Professional Landscape

Several factors have reshaped how we think about careers:

- **Technological Disruption**: Automation and AI continue to transform industries, eliminating some roles while creating others.
- **Longevity**: Longer working lives mean more time for multiple career chapters.
- **Changing Values**: Increasing emphasis on purpose, flexibility, and work-life integration over pure advancement.
- **Economic Shifts**: Industries rise and fall more rapidly than in previous generations.

## Types of Career Transitions

Career changes come in various forms, each with unique challenges:

### Role Transitions
Moving to a different position within your field, such as from marketing specialist to marketing manager.

### Industry Transitions
Applying your skills in a new sector, like shifting from journalism to corporate communications.

### Functional Transitions
Changing your actual profession, perhaps from accounting to human resources.

### Entrepreneurial Transitions
Moving from employment to starting your own venture.

## Strategic Approaches to Career Change

Successful transitions rarely happen by accident. They require thoughtful planning:

### 1. Self-Assessment

Before making any move, deeply understand:
- Your transferable skills and strengths
- Your values and what gives you meaning
- Your preferred working style and environment
- The practical constraints (financial needs, geographic limitations)

### 2. Market Research

- Identify growth areas aligned with your interests
- Talk to people already working in your target role or industry
- Understand the skills gap between your current position and desired role

### 3. Strategic Skill Building

- Prioritize developing the most critical skills for your new direction
- Consider formal education, certifications, or self-directed learning
- Look for projects in your current role that build relevant experience

### 4. Network Cultivation

- Build relationships before you need them
- Attend industry events for your target field
- Consider informational interviews to gain insights and connections

### 5. Narrative Development

- Craft a compelling story about your transition that emphasizes the value and perspective you bring
- Focus on how your unique background is an asset, not a liability

## Embracing the Emotional Journey

Career transitions aren't just practical challenges—they're emotional ones:

- **Identity Shift**: Our work is often tied to our sense of self.
- **Beginner's Mind**: Returning to novice status after mastery can be humbling.
- **Uncertainty**: Trading the known for the unknown requires courage.

Acknowledging these emotional aspects and building support systems is as important as any strategic planning.

## The Ongoing Evolution

Perhaps the most important skill in today's workplace isn't any specific technical ability but rather "career adaptability"—the capacity to continually assess, adjust, and grow as opportunities and challenges emerge.

By approaching transitions with intention, resilience, and openness, we can navigate the evolving landscape not just successfully but with a deeper connection to work that matters to us.
    `,
    category: "Career",
    categorySlug: "career",
    date: "March 25, 2025",
    readTime: "7 min read",
    commentCount: 9,
    coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    tags: ["Career Change", "Professional Development", "Workplace", "Skills"]
  },
  {
    id: "5",
    title: "Understanding Quantum Computing: A Beginner's Guide",
    slug: "understanding-quantum-computing",
    excerpt: "Breaking down the complex world of quantum computing into understandable concepts for non-technical readers.",
    content: `
# Understanding Quantum Computing: A Beginner's Guide

Quantum computing represents one of the most fascinating and potentially transformative technologies on the horizon. While traditional computers have revolutionized our world, quantum computers operate on fundamentally different principles that could unlock unprecedented computational power. This guide aims to make these complex concepts accessible without requiring a physics degree.

## Beyond Binary: The Quantum Difference

To understand quantum computing, we first need to understand how it differs from classical computing:

### Classical Computing Basics
- Uses bits as the basic unit of information
- Each bit is either 0 or 1
- Operations process these discrete values sequentially
- Functions like a very sophisticated calculator

### Quantum Computing Fundamentals
- Uses quantum bits or "qubits"
- Qubits can exist in multiple states simultaneously (superposition)
- Qubits can be interconnected in ways bits can't (entanglement)
- Processes multiple possibilities at once rather than sequentially

## Quantum Superpowers: Key Concepts

Three quantum properties give these computers their potential power:

### 1. Superposition
Imagine a coin that's not just heads or tails, but somehow both simultaneously until you look at it. Qubits can represent multiple possible states at once, rather than just 0 or 1. This allows quantum computers to process multiple possibilities simultaneously.

### 2. Entanglement
When qubits become entangled, the state of one instantly affects the other, regardless of distance. Einstein called this "spooky action at a distance." This property allows quantum computers to process information in ways that would require enormous resources in classical systems.

### 3. Interference
Quantum algorithms manipulate qubits to increase the probability of correct answers and decrease incorrect ones. This property helps quantum computers arrive at solutions more efficiently for certain problems.

## Real-World Applications

Despite being in early stages, quantum computing promises breakthroughs in:

### Materials Science and Chemistry
Simulating molecular interactions could revolutionize drug discovery and material development, potentially addressing challenges from cancer treatments to climate change solutions.

### Cryptography
Quantum computers could break many current encryption methods but also enable new, more secure forms of encryption.

### Optimization Problems
Complex logistics, financial modeling, and resource allocation problems could be solved far more efficiently.

### Artificial Intelligence
Quantum computing could dramatically accelerate machine learning processes and enable new AI approaches.

## The Current State of Quantum Computing

Today's quantum computers are best described as being in the "ENIAC era" of development:

- They contain dozens to hundreds of qubits (compared to billions of transistors in modern chips)
- They're large, expensive, and require extreme cooling
- They're prone to errors and require error correction
- They're primarily used by researchers rather than businesses

## The Road Ahead

Quantum computing faces significant challenges before becoming practical:

- **Error Correction**: Quantum states are fragile and easily disrupted
- **Scalability**: Building systems with more qubits while maintaining quality
- **Programming Paradigms**: Developing accessible ways to program quantum systems
- **Hardware Approaches**: Multiple competing technologies with different advantages

While universal quantum computers may be years away, specialized quantum systems are already beginning to solve specific problems beyond the reach of classical supercomputers.

## Conclusion

Quantum computing isn't simply a faster version of classical computing—it represents a fundamentally different approach to processing information. While the full impact may take decades to realize, the potential applications span nearly every field of human endeavor. Understanding the basic principles now provides valuable context as this technology continues to develop and eventually transform our world.
    `,
    category: "Technology",
    categorySlug: "technology",
    date: "March 20, 2025",
    readTime: "8 min read",
    commentCount: 15,
    coverImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
    tags: ["Quantum Computing", "Technology", "Science", "Innovation"]
  },
  {
    id: "6",
    title: "The Power of Daily Habits: Small Changes, Big Results",
    slug: "power-of-daily-habits",
    excerpt: "How consistent small actions compound over time to create remarkable transformations in our lives and work.",
    content: `
# The Power of Daily Habits: Small Changes, Big Results

We often overestimate what we can achieve in a day and underestimate what we can achieve in a year. This insight reveals the hidden power of habits—those small, consistent actions that compound over time to produce remarkable results. While dramatic changes and heroic efforts grab attention, it's often the quiet persistence of daily habits that creates true transformation.

## The Mathematics of Tiny Gains

Consider this mathematical reality: improving just 1% each day means you'll be 37 times better by year's end. Conversely, getting 1% worse each day reduces you to nearly zero. This principle of compound growth applies to nearly everything in life:

- Physical health and fitness
- Knowledge and skills
- Relationships and emotional well-being
- Financial stability and wealth
- Creative output and productivity

## The Three Laws of Habit Formation

Understanding how habits work empowers us to create positive ones and break negative patterns:

### 1. The Cue: Trigger for Behavior

Habits begin with triggers—time of day, location, preceding events, emotional states, or presence of certain people. By manipulating these cues, we can make desired behaviors more likely and unwanted ones less automatic.

**Application**: To establish a new habit, attach it to an existing routine. For example, if you already make coffee every morning, use that as a cue to do a five-minute stretching routine while the coffee brews.

### 2. The Routine: The Behavior Itself

This is the habit itself—what we typically focus on. However, sustainable change comes from designing routines that are:

- Simple enough to do consistently
- Satisfying enough to continue
- Strategic enough to lead to meaningful outcomes

**Application**: To build consistency, follow the "two-minute rule"—scale any new habit down to a version that takes just two minutes. Want to read more? Start with reading just one page daily.

### 3. The Reward: Reinforcement

Our brains are wired to repeat behaviors that deliver rewards and avoid those that don't. By intentionally building reward systems, we reinforce positive habits.

**Application**: Create immediate rewards for delayed-gratification habits. For example, pair exercise (long-term benefit) with listening to a favorite podcast (immediate pleasure).

## Identity-Based Habits: The Deepest Change

The most powerful habits aren't just about what we do but who we become:

- Instead of "I want to finish a marathon," think "I am becoming a runner"
- Rather than "I need to stop using my phone at night," consider "I am someone who values restorative sleep"
- Beyond "I should save more money," embrace "I am a financially responsible person"

When habits align with our desired identity, they become self-reinforcing rather than requiring constant willpower.

## The Overlooked Power of Environment

We often overestimate personal motivation and underestimate the influence of our environment:

- **Physical environments**: Making desired behaviors obvious and easy while making undesired behaviors invisible and difficult
- **Social environments**: Surrounding ourselves with people who embody the habits we want to develop
- **Digital environments**: Curating technology to support rather than undermine our intentions

## From Knowledge to Practice

Understanding habits is merely the beginning. Implementation requires:

1. **Clarity**: Defining specific habits tied to meaningful outcomes
2. **Consistency**: Prioritizing regularity over intensity
3. **Patience**: Recognizing that the most powerful results often appear only after a significant threshold of consistency
4. **Forgiveness**: Having strategies to recover when habits inevitably break down

## Conclusion

The true magic of habits isn't in dramatic transformations but in the patient accumulation of small improvements. By understanding the mechanics of habit formation and focusing on the long game, we can harness this powerful force to reshape our lives, one small action at a time.

As Annie Dillard wisely noted, "How we spend our days is, of course, how we spend our lives." Our habits, more than our occasional big decisions, ultimately determine who we become.
    `,
    category: "Life Lessons",
    categorySlug: "life-lessons",
    date: "March 18, 2025",
    readTime: "6 min read",
    commentCount: 24,
    coverImage: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=2076&auto=format&fit=crop",
    tags: ["Habits", "Personal Development", "Productivity", "Psychology"]
  }
];

export const getPostsByCategory = (categorySlug: string) => {
  return posts.filter(post => post.categorySlug === categorySlug);
};

export const getRecentPosts = (count: number = 3) => {
  return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, count);
};

export const getFeaturedPosts = (count: number = 3) => {
  return posts.filter((_, index) => index < count);
};

export const getRelatedPosts = (postId: string, count: number = 3) => {
  const currentPost = posts.find(post => post.id === postId);
  if (!currentPost) return [];
  
  return posts
    .filter(post => post.id !== postId && post.categorySlug === currentPost.categorySlug)
    .slice(0, count);
};

export const getPostBySlug = (slug: string) => {
  return posts.find(post => post.slug === slug);
};

export const getCategoryBySlug = (slug: string) => {
  return categories.find(category => category.slug === slug);
};
