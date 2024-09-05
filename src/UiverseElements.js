import React, { useState, useEffect, useCallback } from 'react';

const UiverseElements = () => {
    const [elements, setElements] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchUiverseElements = useCallback(async () => {
        try {
            setIsLoading(true);
            setError(null);
            const response = await fetch('http://localhost:3000/resource/neumorphism-elements');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
            
            setElements(data);
        } catch (e) {
            setError(`Failed to fetch Uiverse elements: ${e.message}`);
            console.error("Error fetching Uiverse elements:", e);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchUiverseElements();
    }, [fetchUiverseElements]);

    const renderElements = () => {
        if (!elements) return <p>No data available.</p>;

        if (Array.isArray(elements)) {
            return elements.length === 0 ? (
                <p>No elements found.</p>
            ) : (
                <div  className="grid grid-cols-default gap-y-5 gap-x-3.5 content-stretch items-stretch w-full mb-24 max-xs:grid-cols-1 max-xs:gap-2.5">
                    {elements.map((element, index) => (
                        <li key={element.id || index}>
                            {element.name || `Element ${index + 1}`}
                        </li>
                    ))}
                </div>
            );
        }

        return;
    };

    if (isLoading) {
        return <div>Loading Uiverse elements...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Uiverse Elements</h2>
            {renderElements()}
        </div>
    );
};

export default UiverseElements;