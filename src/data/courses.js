export const courses = {
    unsupervised: {
        id: 'unsupervised',
        name: 'Unsupervised Learning',
        subtitle: 'Machine Learning without Labels',
        color: '#00ff88',
        glowColor: 'rgba(0, 255, 136, 0.4)',
        description: 'Discover patterns in data without human guidance',
        topics: [
            {
                id: 'introduction',
                name: 'Introduction',
                description: 'Introduction to Unsupervised Machine Learning and Metrics - Learn the fundamentals of unsupervised learning approaches',
                icon: '📊',
                difficulty: 'Beginner',
                locked: false,
                baseUrl: 'https://github.com/DSS-ML/Unsupervised_2026/tree/main/Introduction',
                notebooks: [
                    { name: 'Lecture', file: 'Introduction_Lecture.ipynb', type: 'lecture' }
                ]
            },
            {
                id: 'topic-2',
                name: 'Coming Soon',
                description: 'New lesson coming soon - Stay tuned for more unsupervised learning content!',
                icon: '🔒',
                difficulty: 'TBD',
                locked: true,
                baseUrl: 'https://github.com/DSS-ML/Unsupervised_2026',
                notebooks: []
            },
            {
                id: 'topic-3',
                name: 'Coming Soon',
                description: 'New lesson coming soon - Stay tuned for more unsupervised learning content!',
                icon: '🔒',
                difficulty: 'TBD',
                locked: true,
                baseUrl: 'https://github.com/DSS-ML/Unsupervised_2026',
                notebooks: []
            },
            {
                id: 'topic-4',
                name: 'Coming Soon',
                description: 'New lesson coming soon - Stay tuned for more unsupervised learning content!',
                icon: '🔒',
                difficulty: 'TBD',
                locked: true,
                baseUrl: 'https://github.com/DSS-ML/Unsupervised_2026',
                notebooks: []
            },
            {
                id: 'topic-5',
                name: 'Coming Soon',
                description: 'New lesson coming soon - Stay tuned for more unsupervised learning content!',
                icon: '🔒',
                difficulty: 'TBD',
                locked: true,
                baseUrl: 'https://github.com/DSS-ML/Unsupervised_2026',
                notebooks: []
            },
            {
                id: 'topic-6',
                name: 'Coming Soon',
                description: 'New lesson coming soon - Stay tuned for more unsupervised learning content!',
                icon: '🔒',
                difficulty: 'TBD',
                locked: true,
                baseUrl: 'https://github.com/DSS-ML/Unsupervised_2026',
                notebooks: []
            }
        ]
    },
    deepLearning: {
        id: 'deep-learning',
        name: 'Deep Learning',
        subtitle: 'Neural Networks & Beyond',
        color: '#ff6b35',
        glowColor: 'rgba(255, 107, 53, 0.4)',
        description: 'Master the architectures powering modern AI',
        topics: [
            {
                id: 'networks',
                name: 'Neural Networks',
                description: 'Foundations of deep learning: perceptrons, activation functions, and backpropagation',
                icon: '🧠',
                difficulty: 'Beginner',
                locked: false,
                baseUrl: 'https://github.com/DSS-ML/DeepLearning_MIX/blob/main',
                notebooks: [
                    { name: 'Lecture', file: 'Network_Lecture.ipynb', type: 'lecture' }
                ]
            },
            {
                id: 'howto',
                name: 'How To Build Models',
                description: 'Practical guide to building, training, and deploying deep learning models',
                icon: '🔧',
                difficulty: 'Intermediate',
                locked: false,
                baseUrl: 'https://github.com/DSS-ML/DeepLearning_MIX/blob/main',
                notebooks: [
                    { name: 'Lecture', file: 'HowTo_Lecture.ipynb', type: 'lecture' }
                ]
            },
            {
                id: 'gnn',
                name: 'Graph Neural Networks',
                description: 'Learn to process graph-structured data with message passing and node embeddings',
                icon: '🕸️',
                difficulty: 'Advanced',
                locked: false,
                baseUrl: 'https://github.com/DSS-ML/DeepLearning_MIX/blob/main',
                notebooks: [
                    { name: 'Lecture', file: 'GNN_Lecture.ipynb', type: 'lecture' }
                ]
            },
            {
                id: 'transformers',
                name: 'Transformers & Other Monsters',
                description: 'Explore attention mechanisms, BERT, GPT, and state-of-the-art architectures',
                icon: '🤖',
                difficulty: 'Advanced',
                locked: false,
                baseUrl: 'https://github.com/DSS-ML/DeepLearning_MIX/blob/main',
                notebooks: [
                    { name: 'Lecture', file: 'Transformer%26OtherMonsters_Lecture.ipynb', type: 'lecture' },
                    { name: 'Assignment', file: 'Transformer%26OtherMonster_Assignment.ipynb', type: 'assignment' }
                ]
            }
        ]
    }
};

export const getAllTopics = () => {
    return [
        ...courses.unsupervised.topics.map(t => ({ ...t, course: courses.unsupervised })),
        ...courses.deepLearning.topics.map(t => ({ ...t, course: courses.deepLearning }))
    ];
};

export const getTopicById = (id) => {
    return getAllTopics().find(t => t.id === id);
};
