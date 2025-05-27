'use client';
import React, { useEffect, useState } from 'react';

const TelegramFeed = () => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    fetch('https://oStepanovWinner.github.io/telegram-feed-generator/feed.json')
      .then(res => res.json())
      .then(setFeed)
      .catch(console.error);
  }, []);

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Новости из Telegram</h2>
      <ul className="space-y-4">
        {feed.map(post => (
          <li key={post.id} className="p-4 rounded-lg shadow bg-white">
            <p>{post.text}</p>
            <span className="text-sm text-gray-500">
              {new Date(post.date * 1000).toLocaleString()}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TelegramFeed;
