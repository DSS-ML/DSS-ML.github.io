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
                difficulty: '',
                locked: false,
                baseUrl: 'https://github.com/DSS-ML/Unsupervised_2026/blob/main',
                notebooks: [
                    { name: 'Lecture', file: 'Lecture_1.ipynb', type: 'lecture' }
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
    }
};

export const getAllTopics = () => {
    return [
        ...courses.unsupervised.topics.map(t => ({ ...t, course: courses.unsupervised }))
    ];
};

export const getTopicById = (id) => {
    return getAllTopics().find(t => t.id === id);
};
