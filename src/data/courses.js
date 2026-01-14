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
                id: 'clustering',
                name: 'Clustering',
                description: 'Group similar data points together using algorithms like K-Means, DBSCAN, and Hierarchical Clustering',
                icon: '🎯',
                difficulty: 'Beginner',
                baseUrl: 'https://github.com/DSS-ML/Unsupervised_2025/tree/main/Clustering',
                notebooks: [
                    { name: 'Lecture', file: 'Clustering_Lecture.ipynb', type: 'lecture' },
                    { name: 'Assignment', file: 'Clustering_Assignment.ipynb', type: 'assignment' },
                    { name: 'Solution', file: 'Clustering_Solution.ipynb', type: 'solution' }
                ]
            },
            {
                id: 'dimensionality-reduction',
                name: 'Dimensionality Reduction',
                description: 'Reduce data complexity while preserving information using PCA, t-SNE, and UMAP',
                icon: '📉',
                difficulty: 'Intermediate',
                baseUrl: 'https://github.com/DSS-ML/Unsupervised_2025/tree/main/DimensionalityReduction',
                notebooks: [
                    { name: 'Lecture', file: 'DimensionalityReduction_Lecture.ipynb', type: 'lecture' },
                    { name: 'Assignment', file: 'DimensionalityReduction_Assignment.ipynb', type: 'assignment' },
                    { name: 'Solution', file: 'DimensionalityReduction_Solution.ipynb', type: 'solution' }
                ]
            },
            {
                id: 'recommender-systems',
                name: 'Recommender Systems',
                description: 'Build systems that suggest relevant items to users based on their preferences',
                icon: '⭐',
                difficulty: 'Advanced',
                baseUrl: 'https://github.com/DSS-ML/Unsupervised_2025/tree/main/RecommenderSystem',
                notebooks: [
                    { name: 'Lecture', file: 'RecommenderSystem_Lecture.ipynb', type: 'lecture' },
                    { name: 'Assignment', file: 'RecommenderSystem_Assignment.ipynb', type: 'assignment' },
                    { name: 'Solution', file: 'RecommenderSystem_Solution.ipynb', type: 'solution' }
                ]
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
