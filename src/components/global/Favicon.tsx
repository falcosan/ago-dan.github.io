import {useEffect, useState} from 'react'

function getRandomEmoji() {
  const emoji = ['👰🏻‍♀️', '🎂', '💍', '🤵🏻‍♂️', '💒', '🦦', '🍾', '🎎'];
  const count = emoji.length;
  const random = Math.floor(Math.random() * count);
  return emoji[random];
}

const faviconString = (favicon: string) =>
  `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%2285%22 font-size=%2290%22>${favicon}</text></svg>`;

function getFaviconEl() {
  return document.querySelector("#favicon") as HTMLLinkElement
}

export default function Logo(){
  const [_, setEmoji] = useState(getRandomEmoji());
  const [timer, __] = useState(5000);
  useEffect(() => {
    const favicon = getFaviconEl();
    
    const updateEmoji = () => {
      const newEmoji = getRandomEmoji();
      setEmoji(newEmoji);
      favicon.href = faviconString(newEmoji);
    };
    
    
    updateEmoji();
    const interval = setInterval(() => updateEmoji(), timer);
    return () => clearInterval(interval);
  }, [timer]);
}