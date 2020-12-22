import React, { useState, useEffect } from 'react';
import './css/Styling.css'
import banner from './assets/banner3.png'
import { AmplifySignOut } from '@aws-amplify/ui-react'
import { API } from 'aws-amplify';
import { listHighScores } from './graphql/queries';
import { createHighScore as createHighScoreMutation, deleteHighScore as deleteHighScoreMutation} from './graphql/mutations';
import highscores from './assets/highscores.png'

const initialFormState = { name: '', game: '', score: ''}

export function HighScores() {
  const [highScores, setHighScores] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchHighScores();
  }, []);

  async function fetchHighScores() {
    const apiData = await API.graphql({ query: listHighScores });
    setHighScores(apiData.data.listHighScores.items);
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
      <div class="smallContainer">
        <AmplifySignOut className="signout"/>
      </div>
      <div className="bannerDiv">
        <img className="banner" alt="" src={banner}/>
      </div>

      <container>       
        <img className="highScores" alt="" src={highscores}/>
        <div style={{marginBottom: 30}}>
          {
            highScores.map(highScore => (
              <div key={highScore.id || highScore.name || highScore.score || highScore.game }>
                  <p>Game: {highScore.game} Score: {highScore.score} Name: {highScore.name}  <button onClick={() => deleteHighScore(highScore)}>Delete</button></p>
              </div>
            ))
          }
        </div>
      </container>

      <div className="input">
        <input
          onChange={e => setFormData({ ...formData, 'name': e.target.value})}
          placeholder="Name"
          value={formData.name}
        />
        <input
          onChange={e => setFormData({ ...formData, 'game': e.target.value})}
          placeholder="Game"
          value={formData.game}
        />
        <input
          onChange={e => setFormData({ ...formData, 'score': e.target.value})}
          placeholder="Score"
          value={formData.score}
        />
        <button onClick={createHighScore}>Store High Score</button>
        </div>

    </div>
  );
}

export default HighScores;

