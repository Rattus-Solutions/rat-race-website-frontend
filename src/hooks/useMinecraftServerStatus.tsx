import { useState, useEffect } from 'react';

export function useMinecraftServerStatus(serverAddress: string) {
  const [serverStatus, setServerStatus] = useState({
    online: false,
    players: {
      online: 0,
      max: 0,
    },
    version: '',
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchServerStatus() {
      try {
        setIsLoading(true);
        const response = await fetch(`https://api.mcsrvstat.us/2/${serverAddress}`);

        if (!response.ok) {
          throw new Error('Failed to fetch server status');
        }

        const data = await response.json();

        setServerStatus({
          online: data.online || false,
          players: {
            online: data.players?.online || 0,
            max: data.players?.max || 0,
          },
          version: data.version || 'Unknown',
        });
      } catch (err: any) {
        setError(err.message);
        setServerStatus({
          online: false,
          players: { online: 0, max: 0 },
          version: 'Unknown',
        });
      } finally {
        setIsLoading(false);
      }
    }

    if (serverAddress) {
      fetchServerStatus();

      const intervalId = setInterval(fetchServerStatus, 60000); // Refresh every minute

      return () => clearInterval(intervalId);
    }
  }, [serverAddress]);

  return { serverStatus, isLoading, error };
}
