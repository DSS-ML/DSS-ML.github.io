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
                ],
                readings: [
                    {
                        title: 'The Elements of Statistical Learning',
                        authors: 'Hastie, T., Tibshirani, R., & Friedman, J.',
                        year: 2009,
                        edition: '2nd ed.',
                        publisher: 'Springer',
                        chapter: 'Chapter 14',
                        file: 'elementsof.pdf',
                        icon: '📗'
                    },
                    {
                        title: 'Outlier Analysis',
                        authors: 'Aggarwal, C. C.',
                        year: 2017,
                        edition: '2nd ed.',
                        publisher: 'Springer',
                        chapter: 'Chapter 2: Data Models and Data Types',
                        file: 'outlier.pdf',
                        icon: '📕'
                    },
                    {
                        title: 'Pattern Recognition and Machine Learning',
                        authors: 'Bishop, C. M.',
                        year: 2006,
                        edition: '',
                        publisher: 'Springer',
                        chapter: 'Section 2.5: Nonparametric Methods',
                        file: 'bishop.pdf',
                        icon: '📘'
                    }
                ]
            },
            {
                id: 'clustering',
                name: 'Clustering',
                description: 'Clustering algorithms and techniques - Group similar data points together',
                icon: '🧩',
                difficulty: '',
                locked: false,
                image: '/Darth_Vader.png',
                baseUrl: 'https://github.com/DSS-ML/Unsupervised_2026/blob/main',
                notebooks: [
                    { name: 'Lecture', file: 'Lecture_2A.ipynb', type: 'lecture' }
                ]
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
