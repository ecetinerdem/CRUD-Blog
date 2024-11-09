import UserCard from './UserCard';

const peopletofollow = [
  { name: 'Alena Gouse', following: false },
  { name: 'Ruben Bator', following: true },
  { name: 'Aspen Stanton', following: false },
  { name: 'Hadelyn George', following: false },
];

const PeopleToFollow = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold text-lg mb-4">People to Follow</h3>
      <div className="space-y-4">
        {peopletofollow.map((person, index) => (
          <UserCard key={index} person={person} />
        ))}
      </div>
    </div>
  );
};

export default PeopleToFollow;
