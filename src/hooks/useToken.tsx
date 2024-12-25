import { useState, useEffect } from 'react';

// Custom hook for managing token in localStorage
const useToken = (key: string) => {
  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem(key);
  });

  // Save the token in localStorage and update the state
  const saveToken = (newToken: string) => {
    localStorage.setItem(key, newToken);
    setToken(newToken); // Trigger UI update
    // Dispatch a custom event to notify other parts of the app about the change
    window.dispatchEvent(new Event('local-storage'));
  };

  // Remove the token from localStorage and update the state
  const removeToken = () => {
    localStorage.removeItem(key);
    setToken(null); // Trigger UI update
    // Dispatch a custom event to notify other parts of the app about the change
    window.dispatchEvent(new Event('local-storage'));
  };

  // Listen for changes in localStorage, both custom events and storage events (cross-tab)
  useEffect(() => {
    const syncToken = () => {
      setToken(localStorage.getItem(key));
    };

    // Listen for the custom event we dispatched
    window.addEventListener('local-storage', syncToken);

    // Also listen for storage events (for cross-tab updates)
    window.addEventListener('storage', syncToken);

    // Clean up the event listeners
    return () => {
      window.removeEventListener('local-storage', syncToken);
      window.removeEventListener('storage', syncToken);
    };
  }, [key]);

  return {
    token,
    saveToken,
    removeToken,
  };
};

export default useToken;
