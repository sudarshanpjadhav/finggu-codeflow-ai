import { useEffect, useState } from 'react';
import { fingguApiService } from '../services/fingguApiService';

export const useFingguAI = (code) => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      const aiResponse = await fingguApiService.fetchGitHubData('some-repo');
      setSuggestions(aiResponse.suggestions);
    };
    fetchSuggestions();
  }, [code]);

  return suggestions;
};