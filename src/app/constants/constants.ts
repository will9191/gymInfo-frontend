export const API_URL = 'http://localhost:8080';

export const apiEndpoint = {
  AuthEndpoint: {},
  ExerciseEndpoint: {
    getAllExercises: `${API_URL}/api/v1/exercise`,
    getExercisesBySearch: `${API_URL}/api/v1/exercise/search`,
  },
};
