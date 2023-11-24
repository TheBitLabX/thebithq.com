import { useState } from 'react';

const useSubscribe = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<any>(null);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const subscribe = async (email: string) => {
    if (!validateEmail(email)) {
      setError('Invalid email format');
      return;
    }

    setIsLoading(true);
    setError(null);

    const data = { email };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch("/api/subscribe", options);
      const jsonData = await response.json();
      
      setResult(jsonData);
      if(!response.ok) setError('Failed to subscribe');
    } catch (err) {
      setError('Failed to subscribe');
    } finally {
      setIsLoading(false);
    }
  };

  return { subscribe, isLoading, error, result };
};

export default useSubscribe;
