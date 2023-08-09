const BASE_URL = 'http://20.244.56.144/train';

const ApiService = {
  getAllTrains: async () => {
    const response = await fetch(`${BASE_URL}/trains`);
    if (!response.ok) {
      throw new Error('Failed to fetch trains');
    }
    return response.json();
  },

  getTrainDetails: async (trainNumber) => {
    const response = await fetch(`${BASE_URL}/trains/${trainNumber}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch details for train ${trainNumber}`);
    }
    return response.json();
  },
};

export default ApiService;
