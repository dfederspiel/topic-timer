import './Topics.css';

const Topics = (props: { topics: { title: string; active: boolean }[] }) => {
  return (
    <ul>
      {props.topics.map((topic) => (
        <li className={topic.active ? 'active' : ''}>{topic.title}</li>
      ))}
    </ul>
  );
};

export default Topics;
