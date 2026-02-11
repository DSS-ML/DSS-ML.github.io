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
                    { name: 'Lecture', file: 'Lecture_2A.ipynb', type: 'lecture' },
                    { name: 'Lecture', file: 'Lecture_2B.ipynb', type: 'lecture' }
                ]
            },
            {
                id: 'dimensionality-reduction',
                name: 'Dimensionality Reduction',
                description: 'Dimensionality reduction techniques - Learn how to reduce the number of features while preserving important information',
                icon: '📉',
                difficulty: '',
                locked: false,
                image: '/bobafett.png',
                characterDialogue: '...',
                baseUrl: 'https://github.com/DSS-ML/Unsupervised_2026/blob/main',
                notebooks: [
                    { name: 'Lecture', file: 'Lecture_3.ipynb', type: 'lecture' }
                ]
            },
            {
                id: 'first-assignment',
                name: '1st Assignment',
                description: 'First assignment - Put your unsupervised learning skills to the test!',
                icon: '📝',
                difficulty: '',
                locked: false,
                image: '/jarja.png',
                characterDialogue: 'Meesa help you!',
                baseUrl: 'https://github.com/DSS-ML/Unsupervised_2026/tree/main/Assignment',
                notebooks: [
                    { name: 'Assignment PDF', file: 'Assignment_Unsupervised-1.pdf', type: 'assignment' },
                    { name: 'Data Files', file: '', type: 'data' },
                    { name: 'Solution', file: 'Assignment_Solution.ipynb', type: 'solution' }
                ]
            },
            {
                id: 'recommender-system',
                name: 'Recommender System',
                description: 'Recommender systems - Learn how to build systems that predict user preferences',
                icon: '🤖',
                difficulty: '',
                locked: false,
                image: '/r2d2.png',
                characterDialogue: '01010011 01110100 01110101 01100100 01111001',
                baseUrl: 'https://github.com/DSS-ML/Unsupervised_2026/blob/main',
                notebooks: [
                    { name: 'Lecture', file: 'Lecture_4.ipynb', type: 'lecture' },
                    { name: 'Demo: String Matching', file: 'Demo_String_Matching.ipynb', type: 'lecture' },
                    { name: 'Assignment PDF', file: 'Assignment/Assignment_Unsupervised2-1.pdf', type: 'assignment' }
                ]
            },
            {
                id: 'autoencoders',
                name: 'Autoencoders',
                description: 'Autoencoders - Learn how to compress and reconstruct data using neural networks',
                icon: '🧠',
                difficulty: '',
                locked: false,
                image: '/luke.png',
                characterDialogue: 'The latent space is strong with this one!',
                baseUrl: 'https://github.com/DSS-ML/Unsupervised_2026/blob/main',
                notebooks: [
                    { name: 'Lecture', file: 'Lecture_5.ipynb', type: 'lecture' },
                    { name: 'Assignment PDF', file: 'Assignment/Assignment_Unsupervised3.pdf', type: 'assignment' }
                ]
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
