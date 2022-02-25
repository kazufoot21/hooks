import axios from 'axios';
import React, { VFC, useEffect, useState } from 'react';

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type ItemType = {
  id: number;
  title: string;
};

type ResourceType = 'todos' | 'posts';

const ItemList: VFC = () => {
  const [items, setItems] = useState<ItemType[]>([]);
  const [resource, setResource] = useState<ResourceType>('todos');

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/${resource}`
        );
        console.log(response);
        const itemData: ItemType[] = response.data.map(
          (responseData: TodoType | PostType) => {
            return { id: responseData.id, title: responseData.title };
          }
        );
        setItems(itemData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchItems();
  }, [resource]);

  const onTodoButtonClick = () => {
    setResource('todos');
  };
  const onpostButtonClick = () => {
    setResource('posts');
  };
  return (
    <div>
      <button onClick={() => onTodoButtonClick()}>Todos</button>
      <button onClick={() => onpostButtonClick()}>Posts</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
