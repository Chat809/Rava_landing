import React, { useEffect, useState } from 'react';

interface Repo {
  name: string;
  html_url: string;
}

const Slider: React.FC = () => {
  const apiUrlRepos = `https://api.github.com/users/Chat809/repos`;
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(apiUrlRepos);
        if (!response.ok) {
          throw new Error(`Failed to fetch repos. Status: ${response.status}`);
        }
        const data: Repo[] = await response.json();
        setRepos(data);
      } catch (error) {
        console.error('Error fetching repos:', error);
      }
    };
    fetchRepos();
  }, []);

  useEffect(() => {
    const reposList = document.getElementById("repos-list");
    if (reposList) {
      reposList.innerHTML = repos
        .map(item => `<li class="li-repos poppins"><h3>${item.name.toUpperCase()}</h3><a href="${item.html_url}">URL: ${item.html_url}</a></li>`)
        .join("");
    }
  }, [repos]);

  const handleBeforeClick = () => {
    const reposList = document.getElementById("repos-list");
    if (reposList && reposList.firstElementChild) {
      reposList.appendChild(reposList.firstElementChild);
    }
  };

  const handleNextClick = () => {
    const reposList = document.getElementById("repos-list");
    if (reposList && reposList.lastElementChild) {
      reposList.insertBefore(reposList.lastElementChild, reposList.firstElementChild);
    }
  };

  return (
    <div className="repos-slider">
      <button className="poppins" id="before" onClick={handleBeforeClick}>Anterior</button>
      <ul id="repos-list"></ul>
      <button className="poppins" id="next" onClick={handleNextClick}>Próximo</button>
    </div>
  );
};

export default Slider;