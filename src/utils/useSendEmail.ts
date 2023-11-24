import { useState } from 'react';

interface SendEmailParams {
  name: string;
  email: string;
  message: string;
}

interface UseSendEmailReturn {
  sendEmail: (params: SendEmailParams) => Promise<void>;
  isLoading: boolean;
  error: string | null;
  result: string | null;
}

const useSendEmail = (): UseSendEmailReturn => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);


  const sendEmail = async ({ name, email, message }: SendEmailParams) => {
    setIsLoading(true);
    setError(null);

    try {
      const payload = {
        email:email, name: name, message:message
      };

      console.log(payload);

      // Replace this URL with your server-side endpoint or third-party email service API endpoint.
      const response = await fetch('/api/sendemail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      console.log(response);
      if (!response.ok) throw new Error('Failed to send email');

      setIsLoading(false);
      const jsonData = await response.json();

      setResult(jsonData)
    } catch (err: any) {
      setIsLoading(false);
      setError(err.message || 'An error occurred');
    }
  };

  return { sendEmail, isLoading, error, result };
};

export default useSendEmail;
