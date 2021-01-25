import React, { useState, useEffect } from 'react';
import './css/Styling.css'
import banner from './assets/banner3.png'
import { AmplifySignOut } from '@aws-amplify/ui-react'
import { API } from 'aws-amplify';
import { highScoreByScore } from './graphql/queries';
import { createHighScore as createHighScoreMutation, deleteHighScore as deleteHighScoreMutation} from './graphql/mutations';

const initialFormState = { name: '', game: 'Snake', score: ''}

export function HighScoresSnake() {
  const [highScores, setHighScores] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchHighScores();
  }, []);

  let filter = {
    game: {
      eq: 'Snake'
    }
  }

  async function fetchHighScores() {
    const apiData = await API.graphql({ query: highScoreByScore, variables: {game: "Snake", sortDirection: 'DESC', limit: 10}});
    setHighScores(apiData.data.highScoreByScore.items);
  }

  async function createHighScore() {
    if (!formData.name || !formData.game || !formData.score) return;
    await API.graphql({ query: createHighScoreMutation, variables: { input: formData } });
    setHighScores([ ...highScores, formData ]);
    setFormData(initialFormState);
  }

  async function deleteHighScore({ id }) {
    const newHighScoresArray = highScores.filter(highScore => highScore.id !== id);
    setHighScores(newHighScoresArray);
    await API.graphql({ query: deleteHighScoreMutation, variables: { input: { id } }});
  }

  return (
    <div className="HighScores">

      <container>       
        <div style={{marginBottom: 30}}>
          {
            highScores.map(highScore => (
              <div key={highScore.id || highScore.name || highScore.score || highScore.game }>
                  <p>{highScore.name}    {highScore.score}</p>
              </div>
            ))
          }
        </div>
      </container>

      <div className="input">
        <input
          onChange={e => setFormData({ ...formData, 'name': e.target.value, 'score': localStorage.snakeHighScore})}
          placeholder="Name"
          value={formData.name}
        />
        <button onClick={createHighScore}>Store High Score</button>
        </div>

    </div>
  );
}

export default HighScoresSnake;

