import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getTopicById, courses } from '../data/courses';
import Stars from './Stars';

const LecturePage = () => {
    const { topicId } = useParams();
    const topic = getTopicById(topicId);

    if (!topic) {
        return (
            <div className="lecture-page">
                <Stars count={80} />
                <div className="lecture-header">
                    <Link to="/" className="lecture-back-btn">
                        ← Back to Map
                    </Link>
                    <h1>Topic not found</h1>
                </div>
            </div>
        );
    }

    const courseType = topic.course.id === 'unsupervised' ? 'unsupervised' : 'deep-learning';

    const getNotebookIcon = (type) => {
        switch (type) {
            case 'lecture': return '📖';
            case 'assignment': return '📝';
            case 'solution': return '✅';
            default: return '📄';
        }
    };

    const getNotebookDescription = (type) => {
        switch (type) {
            case 'lecture': return 'Theory, code examples, and explanations';
            case 'assignment': return 'Hands-on practice exercises';
            case 'solution': return 'Complete solutions with explanations';
            default: return 'Jupyter Notebook';
        }
    };

    const getNotebookUrl = (notebook) => {
        // For blob links (single files), construct direct link
        if (topic.baseUrl.includes('/blob/')) {
            return `${topic.baseUrl}/${notebook.file}`;
        }
        // For tree links (directories), link to the folder
        return topic.baseUrl;
    };

    const getReadingUrl = (reading) => {
        return `${topic.baseUrl}/${reading.file}`;
    };

    return (
        <div className="lecture-page">
            <Stars count={80} />

            <div className="lecture-header">
                <Link to="/" className="lecture-back-btn">
                    ← Fly Back to Map
                </Link>

                <div className="lecture-title-section">
                    <div className={`lecture-icon ${courseType}`}>
                        {topic.icon}
                    </div>
                    <div className="lecture-title">
                        <h1>
                            {topic.name}
                            {topic.difficulty && (
                                <span className={`difficulty-badge ${topic.difficulty.toLowerCase()}`}>
                                    {topic.difficulty}
                                </span>
                            )}
                        </h1>
                        <span className={`course-badge ${courseType}`}>
                            {topic.course.name}
                        </span>
                    </div>
                </div>
            </div>

            <div className="lecture-content">
                <p className="lecture-description">
                    {topic.description}
                </p>

                <div className="notebooks-section">
                    <h2>📚 Course Materials</h2>
                    <div className="notebooks-grid">
                        {topic.notebooks.map((notebook, index) => (
                            <a
                                key={index}
                                href={getNotebookUrl(notebook)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="notebook-card"
                            >
                                <div className={`notebook-icon ${notebook.type}`}>
                                    {getNotebookIcon(notebook.type)}
                                </div>
                                <div className="notebook-info">
                                    <h3>{notebook.name}</h3>
                                    <p>{getNotebookDescription(notebook.type)}</p>
                                </div>
                                <span className="notebook-arrow">→</span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Readings Section */}
                {topic.readings && topic.readings.length > 0 && (
                    <div className="readings-section">
                        <h2>📖 Recommended Readings</h2>
                        <p className="readings-subtitle">Theoretical foundations to deepen your understanding</p>
                        <div className="readings-grid">
                            {topic.readings.map((reading, index) => (
                                <a
                                    key={index}
                                    href={getReadingUrl(reading)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="reading-card"
                                >
                                    <div className="reading-icon">{reading.icon}</div>
                                    <div className="reading-info">
                                        <h3>{reading.title}</h3>
                                        <p className="reading-authors">{reading.authors} ({reading.year})</p>
                                        <p className="reading-details">
                                            {reading.edition && `${reading.edition} • `}{reading.publisher}
                                        </p>
                                        <p className="reading-chapter">{reading.chapter}</p>
                                    </div>
                                    <span className="reading-badge">PDF</span>
                                </a>
                            ))}
                        </div>
                    </div>
                )}

                <div style={{ marginTop: '40px', padding: '20px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>
                    <h3 style={{ fontFamily: 'Orbitron', fontSize: '14px', marginBottom: '10px', color: 'var(--text-secondary)' }}>
                        📂 View on GitHub
                    </h3>
                    <a
                        href={topic.baseUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--accent-cyan)', textDecoration: 'none' }}
                    >
                        {topic.baseUrl} →
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LecturePage;
