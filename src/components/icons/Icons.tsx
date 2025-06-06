import "./Icons.css"
import React from 'react';

interface IconProps {
  name: IconName;
  color?: string;
  size: number;
  viewBox: string;
}

export type IconName =
  | "cookbook"
  | "forum"
  | "help"
  

const icons: Record<IconName, React.ReactElement> = {
    cookbook: (
      <path d="M8.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM2.854 4.146a.5.5 0 0 1 0 .708L0.707 8l2.147 3.146a.5.5 0 0 1-.708.708l-2.5-3.5a.5.5 0 0 1 0-.708l2.5-3.5a.5.5 0 0 1 .708 0M10.292 4.146a.5.5 0 0 0 0 .708L12.293 8l-2.001 3.146a.5.5 0 1 0 .708.708l2.5-3.5a.5.5 0 0 0 0-.708l-2.5-3.5a.5.5 0 0 0-.708 0"/>
    ),
    forum: (
      <path d="M8 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6M6.216 14A2.24 2.24 0 0 1 6 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 6 9c-4 0-5 3-5 4s1 1 1 1zM6.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
    ),
    help: (
      <path d="M8 3.25c1.397 0 2.673.73 2.673 2.241 0 1.079-.635 1.593-1.244 2.056-.737.559-1.01.768-1.01 1.486v.105a.25.25 0 0 1-.25.25h-.811a.25.25 0 0 1-.25-.246l-.003-.217c-.038-.927.495-1.498 1.168-1.987.591-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.802 0-1.252.478-1.342 1.134a.266.266 0 0 1-.266.25h-.825a.237.237 0 0 1-.241-.247C5.345 3.84 6.733 3.25 8 3.25zm0 6.75c.609 0 1.028.388 1.028.94 0 .533-.419.927-1.028.927-.585 0-1.01-.394-1.01-.927 0-.552.425-.94 1.01-.94z"/>
    ),
    
    
  };
  
  export const Icons = ({ name, size = 16, color = "#a1a0a2", viewBox = "0 0  16 16" }: IconProps) => (
  <svg className="aside_icons" width={size} height={size} fill={color} viewBox={viewBox}>
    {icons[name]}
  </svg>
);